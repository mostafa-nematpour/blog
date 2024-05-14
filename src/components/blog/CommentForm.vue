<script setup lang="ts">
import GlitchButton from '~/components/ui/button/GlitchButton.vue'
import { useAppearance } from '~/composables/theme'
import { useFetch } from '@vueuse/core'
import { isEmptyString, isStringInRange, isEmail } from '~/utils/string'

const props = defineProps(['postId'])
const emit = defineEmits(['added'])

const form = ref({
  name: null,
  email: null,
  content: null,
  token: ''
})

const formValidationErrors = ref({
  name: "",
  email: "",
  content: "",
})

const btnShake = ref(false)
const backendMessage = ref(null)
const turnstile = ref()
let siteTheme = ref<'dark' | 'light' | 'auto'>('auto')

const { isFetching, error, data, execute, onFetchFinally, onFetchResponse } = useFetch<{ message: string, error: string }>(
  'https://grogu.liara.run/comment',
  { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }, { immediate: false, updateDataOnError: true }
).post(() => JSON.stringify(
  {
    name: form.value.name,
    content: form.value.content,
    email: form.value.email,
    postId: props.postId,
    'cf-turnstile-response': form.value.token
  }
)).json()

onFetchFinally((r) => {
  if (error.value) {
    warnDisabled()
    return;
  }
  backendMessage.value = data.value.message
  emit('added')
  resetForm()
})

onMounted(() => {
  const { theme } = useAppearance()
  siteTheme = theme
})

async function onSubmit() {
  backendMessage.value = null
  if (!validateForm()) {
    warnDisabled()
    return;
  }
  execute();
}

function validateForm() {

  formValidationErrors.value.name = ""
  formValidationErrors.value.email = ""
  formValidationErrors.value.content = ""

  if (isEmptyString(form.value.name)) {
    formValidationErrors.value.name += " - نام نمی‌تواند خالی باشد"
  } else if (!isStringInRange(form.value.name, 3, 30)) {
    formValidationErrors.value.name += " - نام باید بین ۳ تا ۳۰ حرف باشد"
  }

  if (isEmptyString(form.value.email)) {
    formValidationErrors.value.email += " - ایمیل نمی‌تواند خالی باشد"
  } else if (!isEmail(form.value.email)) {
    formValidationErrors.value.email += " - ایمیلی که وارد کردید معتبر نیست 🧐"
  }

  if (isEmptyString(form.value.content)) {
    formValidationErrors.value.content += " - متن پیام نمی‌تواند خالی باشد"
  } else if (!isStringInRange(form.value.content, 3, 800)) {
    formValidationErrors.value.content += " - پیام باید بین ۳ تا ۸۰۰ حرف باشد"
  }

  if (
    formValidationErrors.value.name === "" &&
    formValidationErrors.value.email === "" &&
    formValidationErrors.value.content === ""
  ) {
    return true
  }
  return false
}

function warnDisabled() {
  btnShake.value = true
  setTimeout(() => {
    btnShake.value = false
  }, 1500)
}

const backendMessageClass = computed(() => ({
  'text-red-500': error.value
}))

function resetForm() {
  turnstile.value?.reset()
  formValidationErrors.value.name = ""
  formValidationErrors.value.email = ""
  formValidationErrors.value.content = ""
  form.value.name = null
  form.value.email = null
  form.value.content = null
  form.value.token = ""
}
</script>

<template>
  <div>
    <div dir="rtl" class="w-full">
      <form @submit.prevent="">
        <div class="flex gap-5 sm:flex-row flex-col">
          <div class="flex-1">
            <label for="name" class="form-label">نام</label>
            <span class="text-red-500 error"> {{ formValidationErrors.name }} </span>
            <br />
            <input class="w-full max-w-full text-input" type="text" id="name" v-model="form.name" />
          </div>
          <div class="flex-1">
            <label for="email" class="form-label">ایمیل</label>
            <span class="text-red-500 error"> {{ formValidationErrors.email }} </span>
            <br />
            <input dir="ltr" class="w-full max-w-full text-input" type="text" id="email" v-model="form.email" />
          </div>
        </div>
        <div class="mt-5">
          <label for="content" class="form-label">متن پیام</label>
          <span class="text-red-500 error"> {{ formValidationErrors.content }} </span>
          <br />
          <textarea id="content" class="min-h-32 max-h-48 w-full max-w-full text-input" type="text"
            v-model="form.content"></textarea>
        </div>

        <div class="turnstile-box relative min-h-[65px] mt-5 sm:mx-[unset] mx-auto">
          <span class="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] text-xl text-c-text-soft z-[1]">
            ...
          </span>
          <NuxtTurnstile ref="turnstile" :options="{ theme: siteTheme }" class="turnstile-wrapper relative z-10"
            v-model="form.token" />
        </div>
        <GlitchButton @btn-click="onSubmit()" title="ارسال" :loading="isFetching" :disable="isFetching"
          :class="{ shake: btnShake }" class="sm:w-40 w-full mt-8" />
      </form>
      <br>
      <span v-if="backendMessage" :class="backendMessageClass" lass="text-green-500"> {{ backendMessage }} </span>
    </div>
  </div>
</template>

<style scoped>
.form-label {
  margin-inline-start: 0.5rem;
  color: var(--color-text-soft);
  font-weight: 500;
}

.text-input {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border-radius: 5px;
  -webkit-transition: 0.5s;
  transition: 0.2s;
  outline: none;
  padding: 0.3rem 0.25rem;
  border: 2px solid var(--color-background-soft);
}

input:focus,
textarea:focus {
  border: 2px solid var(--md-link-color, #4285f4);
}

.turnstile-box {
  width: 300px;
  height: 65px;
  background-color: var(--color-background-soft);
  border-radius: 5px;
  overflow: hidden !important;
  border: 1px solid #e0e0e0 !important;
}

.dark .turnstile-box {
  border: 1px solid var(--color-text-soft) !important;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
