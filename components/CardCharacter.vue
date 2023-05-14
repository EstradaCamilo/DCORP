<template>
    <div class="card-character">
        <div class="card-character--bg"></div>
    </div>
</template>

<script setup>
const props = defineProps({})
</script>

<style lang="scss" scoped>
.card-character {
    @apply relative rounded-md bg-cover min-h-[370px] border border-primary-600 border-opacity-50 shadow-lg;

    &--bg {
        @apply absolute top-0 left-0 z-30 h-full w-full;
        background-image: url('~/assets/images/bg-card-character.png');
        mix-blend-mode: normal;
        opacity: 1;
    }

    &::after {
        @apply absolute top-0 left-0 h-full w-full mix-blend-multiply content-[''] rounded-md;
        background: linear-gradient(360deg, #090C14 0%, #171A20 36.49%, #272C34 114.84%);
    }

    &::before {
        @apply absolute top-0 left-0 h-full w-full mix-blend-multiply content-[''] rounded-md;
        background: linear-gradient(360deg, #000000 0%, #090C14 0.01%, rgba(23, 26, 32, 0) 36.49%, rgba(39, 44, 52, 0) 114.84%);
    }
}
</style>