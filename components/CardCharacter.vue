<template>
    <div class="card-character-marvel group">
        <div class="card-character-marvel--bg"></div>
        <div class="card-character-marvel--content">
            <div class="inline-flex justify-between items-center">
                <img class="h-7 w-7" src="~/assets/images/border-l.svg" alt="border left">
                <span class="px-2 text-xs text-center text-primary-100 uppercase">
                    {{ character.name }}
                </span>
                <img class="h-7 w-7" src="~/assets/images/border-r.svg" alt="border right">
            </div>
            <div class="h-40 w-40 mx-auto flex flex-col items-center relative">
                <img class="h-full w-full absolute top-0 bottom-0 left-0 right-0 m-auto group-hover:animate-spin-slow"
                    src="~/assets/images/circle.svg" alt="circle"
                    :class="{ 'animate-spin-slow': character.id === charactersStore.currentCharacter?.id  && charactersStore.isOpenDetailsCharacter}">
                <img :src="`${character.thumbnail.path.replace('http', 'https')}.${character.thumbnail.extension}`"
                    class="h-32 w-32 rounded-full object-cover absolute top-0 bottom-0 left-0 right-0 m-auto"
                    :alt="character.name">
                <img class="h-[20.2px] w-[13.86px] absolute -bottom-3" src="~/assets/images/diamond.png" alt="diamond">
                <img class="h-[20.2px] w-[13.86px] absolute -top-3" src="~/assets/images/diamond.png" alt="diamond">
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
import { useCharactersStore } from '~/stores/characters';
const props = defineProps({
    character: {
        type: Object,
        required: true
    }
})
const charactersStore = useCharactersStore()
</script>

<style lang="scss" scoped>
.card-character-marvel {
    @apply relative rounded-md min-h-[370px] border border-grey-500 border-opacity-40 cursor-pointer;
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