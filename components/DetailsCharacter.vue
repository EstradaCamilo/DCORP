<template>
    <div class="details-character-marvel">
        <!-- <Disclosure v-slot="{ open }">
            <DisclosureButton as="button"
                class="inline-flex w-full justify-between rounded-md px-4 py-2 text-left text-sm font-medium text-primary-100 hover:text-primary-300 focus:outline-none "
                :class="open ? 'text-primary-300' : 'text-primary-100'">
                <span>
                    Comics
                    ({{ charactersStore.currentCharacter.comics.available }})
                </span>
                <svg :classs="{ 'rotate-180 transform': open }" xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-down h-5 w-5" width="40" height="40" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 9l6 6l6 -6"></path>
                </svg>
            </DisclosureButton>
            <DisclosurePanel as="ul" class="text-xs text-primary-100 px-4 py-2">
                <li v-for="comic, c in charactersStore.currentCharacter.comics.items" :key="c">
                    {{ comic.name }}
                </li>
            </DisclosurePanel>
        </Disclosure> -->
        <DetailCharacter title="Comics" v-if="charactersStore.currentCharacter.comics.available != 0"
            :count="charactersStore.currentCharacter.comics.available"
            :items="charactersStore.currentCharacter.comics.items" />
        <DetailCharacter title="Series" v-if="charactersStore.currentCharacter.series.available != 0"
            :count="charactersStore.currentCharacter.series.available"
            :items="charactersStore.currentCharacter.series.items" />
        <DetailCharacter title="Historias" v-if="charactersStore.currentCharacter.stories.available != 0"
            :count="charactersStore.currentCharacter.stories.available"
            :items="charactersStore.currentCharacter.stories.items" />
        <DetailCharacter title="Eventos" v-if="charactersStore.currentCharacter.events.available != 0"
            :count="charactersStore.currentCharacter.events.available"
            :items="charactersStore.currentCharacter.events.items" />
    </div>
</template>

<script setup>
import { useCharactersStore } from '~/stores/characters';
const charactersStore = useCharactersStore()
</script>

<style lang="scss" scoped>
.details-character-marvel {
    @apply w-full max-h-80 overflow-y-auto;

}
</style>