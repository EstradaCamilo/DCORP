<template>
    <div class="page-characters">
        <div class="page-characters--info">
            <div class="md:col-span-5 h-[182px]">
                <Progress class="h-full" :total="865" :current="550" />
            </div>
            <div class="md:col-span-3 video-custom">
                <!-- <iframe  src="https://www.youtube.com/embed/TrsAaX1u4HU?controls=0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe> -->
                <!-- <iframe src="https://www.youtube.com/embed/9W44NWYwa1g?controls=0" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe> -->
            </div>
            <div class="md:col-span-3 flex">
                <img class="h-full md:h-[182px] object-cover object-center rounded-md shadow-lg"
                    src="https://cdn.marvel.com/content/1x/ssd1160_trl_comp_v003.1021.jpg" alt="Imagen de marvel">
            </div>
        </div>

        <div class="page-characters--list">
            <div class="grid gap-4 md:grid-cols-5">
                <CardCharacter v-for="character in charactersStore.characters" :key="character.id" :character="character" />
            </div>
            <Pagination v-if="charactersStore.characters.length != 0" />
        </div>

    </div>
</template>

<script setup>
import { useCharactersStore } from '~/stores/characters';
useHead({
    title:"Personajes",
});
definePageMeta({
    title:"Personajes",
    name:"Personajes",
});

const charactersStore = useCharactersStore();

onServerPrefetch(async () => {
    await charactersStore.getCharacters();
})

</script>

<style lang="scss" scoped>
.page-characters {
    @apply grid gap-4;

    &--info {
        @apply grid gap-4 md:grid-cols-11;
    }

    &--list {
        @apply grid gap-4;
    }
}


.video-custom {
    @apply rounded-md shadow-lg;
    @apply relative overflow-hidden w-full;
    padding-top:56.60%;

    iframe {
        @apply absolute top-0 left-0 bottom-0 right-0 w-full h-full md:h-[182px];
    }
}
</style>