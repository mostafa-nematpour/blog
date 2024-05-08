<script setup>

</script>

<template>
    <div class="dots-loader"></div>
</template>

<style scoped>
/* HTML: <div class="loader"></div> */
.dots-loader {
    width: 100px;
    height: 28px;
    --_g: no-repeat radial-gradient(farthest-side, var(--md-link-color) 94%, #0000);
    background:
        var(--_g) 50% 0,
        var(--_g) 100% 0;
    background-size: 25px 25px;
    position: relative;
    animation: l23-0 1.5s linear infinite;
}

.dots-loader:before {
    content: "";
    position: absolute;
    height: 25px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--md-link-color);
    left: 0;
    top: 0;
    animation:
        l23-1 1.5s linear infinite,
        l23-2 0.5s cubic-bezier(0, 200, .8, 200) infinite;
}

@keyframes l23-0 {

    0%,
    31% {
        background-position: 50% 0, 100% 0
    }

    33% {
        background-position: 50% 100%, 100% 0
    }

    43%,
    64% {
        background-position: 50% 0, 100% 0
    }

    66% {
        background-position: 50% 0, 100% 100%
    }

    79% {
        background-position: 50% 0, 100% 0
    }

    100% {
        transform: translateX(calc(-100%/3))
    }
}

@keyframes l23-1 {
    100% {
        left: calc(100% + 14px)
    }
}

@keyframes l23-2 {
    100% {
        top: -0.2px
    }
}
</style>