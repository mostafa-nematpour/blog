<script setup lang="ts">
import GlitchButton from '~/components/ui/button/GlitchButton.vue'
import { useAppearance } from '~/composables/theme'

const props = defineProps(['postId'])

const name = ref(null)
const email = ref(null)
const content = ref(null)
const token = ref('')

const status = ref('ready')
const error = ref('')
const data = ref('')
const loading = ref(false)

const emit = defineEmits(['added'])

let siteTheme = ref<'dark' | 'light' | 'auto'>('auto')
onMounted(() => {
  const { theme } = useAppearance()
  siteTheme = theme
})

function onSubmit() {
  loading.value = true
  validateForm(async () => {
    console.log('validate ok')
    const myHeaders = new Headers()
    myHeaders.set('Content-Type', 'application/json;charset=UTF-8')

    const options = {
      'Content-Type': 'application/json'
    }

    await fetch('https://grogu.liara.run/comment', {
      method: 'POST',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      credentials: 'omit',
      headers: options,
      body: JSON.stringify({
        name: name.value,
        content: content.value,
        email: email.value,
        postId: props.postId,
        'cf-turnstile-response': token.value
      })
    })
      .then((res) => res.json())
      .then((json) => {
        data.value = json
        loading.value = false
        emit('added')
      })
      .catch((err) => {
        loading.value = false
        error.value = err
      })
  })
}

function validateForm(next: Function) {
  if (true) {
    next()
  }
}
</script>

<template>
  <div>
    <div dir="auto" class="w-full">
      <form @submit.prevent="">
        <div class="flex gap-5 sm:flex-row flex-col">
          <div class="flex-1">
            <label for="name" class="form-label">نام</label>
            <br />
            <input class="w-full max-w-full text-input" type="text" id="name" v-model="name" />
          </div>
          <div class="flex-1">
            <label for="email" class="form-label">ایمیل</label>
            <br />
            <input dir="ltr" class="w-full max-w-full text-input" type="text" id="email" v-model="email" />
          </div>
        </div>
        <div class="mt-5">
          <label for="content" class="form-label">متن پیام</label>
          <br />
          <textarea id="content" class="min-h-32 max-h-48 w-full max-w-full text-input" type="text"
            v-model="content"></textarea>
        </div>

        <div class="turnstile-box relative min-h-[65px] mt-5 sm:mx-[unset] mx-auto">
          <span class="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] text-xl text-c-text-soft z-[1]">
            صبر کنید ...
          </span>
          <NuxtTurnstile :options="{ theme: siteTheme }" class="turnstile-wrapper relative z-10" v-model="token" />
        </div>
        <GlitchButton @btn-click="onSubmit()" title="ارسال" :loading :disable="loading" class="sm:w-40 w-full mt-8" />
      </form>
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
</style>

<style></style>