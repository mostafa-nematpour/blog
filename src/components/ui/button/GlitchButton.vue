<script setup lang="ts">
const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: "ارسال"
    },
    disable: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <button :disabled="disable" @click="$emit('btnClick')" class="glitch-button"
        :class="{ loading: loading, disable: disable }">{{ title }}</button>
</template>

<style scoped>
.glitch-button {
    border: 2px solid #34a853;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px 25px;
    position: relative;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    z-index: 2;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    background-color: #34a853;
    color: #ffffff;
    outline: none;
    min-width: 14 rem;
}

.glitch-button:focus {
    border: 2px solid #34a853;
    box-shadow: #34a853 0px 2px 8px 0px;
}

.disable {
    cursor: default;
}

@keyframes glitch {
    5% {
        opacity: 0.75;
    }

    10% {
        opacity: 1;
    }

    15% {
        opacity: 0.75;
    }

    20% {
        opacity: 1;
    }

    45% {
        opacity: 0.75;
    }

    50% {
        opacity: 1;
    }

    55% {
        opacity: 0.75;
    }

    60% {
        opacity: 1;
    }

    85% {
        opacity: 0.75;
    }

    90% {
        opacity: 1;
    }
}

@keyframes scan {
    0% {
        top: 0;
        background-color: #000;
    }

    50% {
        top: 97%;
    }

    100% {
        top: 0;
    }
}

.glitch-button:after {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    content: '';
    height: 2px;
    opacity: 0;
    background-color: #fff;
    box-shadow: 0 0 15px 2px rgba(212, 207, 201, 0.75);
}

.glitch-button:before {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAF0lEQVQIW2NkwAIYgWKS6OIgQQxAoUoAE4AAUnD/0ugAAAAASUVORK5CYII=) repeat;
    content: '';
    opacity: 0;
    border-radius: 100px;
}

.loading {
    animation: glitch 750ms infinite;
}

.loading::before {
    opacity: 1;
}

.loading::after {
    animation: scan 2s infinite;
    opacity: 1;
}
</style>
