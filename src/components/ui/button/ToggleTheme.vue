<script setup>
/**
 * first it`s use parent .dark class to set theme mode by using css
 * after that can modify by `theme` model
 * and it have a `onToggled` emit
 */

const theme = defineModel({ default: '' })
const emit = defineEmits(['onToggled'])

const toggleTheme = () => {
  theme.value = theme.value == 'dark' ? 'light' : 'dark'
  emit('onToggled', theme.value)
}

const shapeClass = computed(() => {
  switch (theme.value) {
    case 'dark':
      return 'moon'
    case 'light':
      return 'sun'
  }
})
</script>

<template>
  <button @click="toggleTheme" class="theme-toggle--button" aria-label="Toggle Theme">
    <span :class="shapeClass" class="shape"></span>
    <span class="rays--container">
      <span class="ray"></span>
      <span class="ray"></span>
      <span class="ray"></span>
      <span class="ray"></span>
    </span>
  </button>
</template>

<style scoped>
.theme-toggle--button {
  --button-diameter: 40px;
  --shape-size: 15px;
  --color: var(--color-text);
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: var(--shape-size);
  width: var(--button-diameter);
  height: var(--button-diameter);
}

.theme-toggle--button span {
  display: inline-block;
}
.theme-toggle--button .rays--container {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.theme-toggle--button .rays--container .ray {
  position: absolute;
  border-radius: 50%;
  transition: all 500ms;
}
.theme-toggle--button .rays--container .ray:nth-child(2) {
  transform: rotate(45deg);
}
.theme-toggle--button .rays--container .ray:nth-child(3) {
  transform: rotate(90deg);
}
.theme-toggle--button .rays--container .ray:nth-child(4) {
  transform: rotate(-45deg);
}
.theme-toggle--button .shape {
  z-index: 1;
  position: absolute;
  border-radius: 50%;
  /* background: #fff;*/
  border: 2px solid #fff;
  transition: all 500ms;
}
.dark .theme-toggle--button .shape {
  border: 2px solid #ffffff00;
}

:not(.dark) .theme-toggle--button .shape,
.theme-toggle--button .shape.sun {
  width: 1em;
  height: 1em;
  box-shadow: inset -0.7em -0.7em var(--color);
}
:not(.dark) .theme-toggle--button .shape ~ .rays--container,
.theme-toggle--button .shape.sun ~ .rays--container {
  transform: rotate(90deg);
  transition: transform 750ms 400ms;
}
:not(.dark) .theme-toggle--button .shape ~ .rays--container .ray,
.theme-toggle--button .shape.sun ~ .rays--container .ray {
  width: 0.334em;
  height: 1.667em;
  background-color: var(--color);
}

.dark .theme-toggle--button .shape:not(.sun),
.theme-toggle--button .shape.moon {
  width: 1.667em;
  height: 1.667em;
  box-shadow: inset -0.5em -0.5em var(--color);
}
.dark .theme-toggle--button .shape:not(.sun) ~ .rays--container .ray,
.theme-toggle--button .shape.moon ~ .rays--container .ray {
  width: 0;
  height: 0;
}
</style>
