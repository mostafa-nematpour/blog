<script setup lang="ts">
import GlitchButton from '~/components/ui/button/GlitchButton.vue'
const props = defineProps(['postId'])

const name = ref(null)
const email = ref(null)
const content = ref(null)
const token = ref('')

const status = ref('ready')
const error = ref('')
const data = ref('')
const loading = ref(false)



function onSubmit() {
  loading.value = true
  validateForm(async () => {
    console.log('validate ok')
    const myHeaders = new Headers()
    myHeaders.set('Content-Type', 'application/json;charset=UTF-8')

    const options = {
      'Content-Type': 'application/json'
    }

    await fetch('http://grogu.liara.run/comment', {
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

        <div class="min-h-[65px] mt-5">
          <NuxtTurnstile v-model="token" />
        </div>
        <br />
        <GlitchButton @btn-click="onSubmit()" title="ارسال" :loading :disable="loading" />
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
</style>
