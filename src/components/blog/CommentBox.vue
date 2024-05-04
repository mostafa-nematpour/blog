<script setup lang="ts">
const name = ref(null)
const email = ref(null)
const content = ref(null)
const token = ref('')

const status = ref('ready')
const error = ref('')
const data = ref('')
const props = defineProps(['postId'])

function onSubmit() {
  status.value = 'loading'
  validateForm(async () => {
    console.log('validate ok')
    const myHeaders = new Headers()
    myHeaders.set('Content-Type', 'application/json;charset=UTF-8')

    const options = {
      'Content-Type': 'application/json'
    }

    await fetch('http://localhost:3000/comment', {
      method: 'POST',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      credentials: 'omit',
      headers: options,
      body: JSON.stringify({
        name: name.value,
        content: content.value,
        email: email.value,
        postId: props.postId
      })
    })
      .then((res) => res.json())
      .then((json) => {
        data.value = json
        status.value = 'data get'
      })
      .catch((err) => {
        status.value = 'error'

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
    <div class="w-full">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="name" placeholder="نام نمایشی" />
        <br />
        <br />
        <input type="text" v-model="email" placeholder="ایمیل" />
        <br />
        <br />
        <textarea type="text" v-model="content" placeholder="متن پیام"></textarea>
        <br />
        <br />
        <div class="min-h-[64px]">
          <NuxtTurnstile v-model="token" />
        </div>
        <br />
        <button type="submit">ارسال</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
