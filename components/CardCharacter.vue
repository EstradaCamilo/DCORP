<template>
    <div class="card-character-marvel">
        <div class="card-character-marvel--bg"></div>
        <div class="card-character-marvel--content">
            <div class="inline-flex justify-between items-center">
                <img class="h-7 w-7" src="~/assets/images/border-l.svg" alt="border left">
                <span class="px-2 text-sm text-center text-primary-100">
                    {{ character.name }}
                </span>
                <img class="h-7 w-7" src="~/assets/images/border-r.svg" alt="border right">
            </div>
            <div class="flex flex-col space-y-1 items-center">
                <img class="h-4 w-5" src="~/assets/images/diamond.png" alt="diamond">
                <div class="h-24 w-24 rounded-full bg-primary-100 flex">
                    <NuxtImg :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" :format="character.thumbnail.extension" quality="50" class="h-full w-full rounded-full object-cover" :alt="character.name"></NuxtImg>
                    <!-- <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" class="h-full w-full rounded-full object-cover" :alt="character.name"> -->
                </div>
                <img class="h-4 w-5" src="~/assets/images/diamond.png" alt="diamond">
            </div>
            <div class="card-character-marvel--details">
                <div class="card-character-marvel--detail">
                    <span>Comics:</span>
                    <span class="text-xl"> {{ character.comics.available }}</span>
                </div>
                <div class="card-character-marvel--detail">
                    <span>Películas:</span>
                    <span class="text-xl">{{ character.series.available }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    character: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.card-character-marvel {
    @apply relative rounded-md min-h-[370px] border border-grey-300 border-opacity-50;
    @apply p-6 grid gap-4;

    &--bg {
        @apply absolute top-0 left-0 z-10 h-full w-full rounded-md bg-cover;
        background-image: url('~/assets/images/bg-card-character.png');
        mix-blend-mode: normal;
        opacity: 1;
    }

    &--content {
        @apply flex flex-col justify-between z-20;
    }

    &--details {
        @apply grid gap-4;
    }

    &--detail {
        @apply h-10 text-primary-100 bg-grey-400 inline-flex items-center justify-between border border-grey-300 border-opacity-50 py-2 px-3 rounded-md;
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