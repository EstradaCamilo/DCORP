<template>
    <div class="pagination-marvel">
        <button class="pagination-marvel--button" @click="() => charactersStore.handlerBack()" aria-label="Atrás"
            :disabled="charactersStore.disabledBack">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left h-6 w-6 text-grey-600"
                width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 6l-6 6l6 6"></path>
            </svg>
        </button>
        <span class="text-primary-300">
            {{ charactersStore.offset + 1 }}/{{ charactersStore.pages - 1 }}
        </span>
        <button class="pagination-marvel--button" @click="() => charactersStore.handlerNext()" aria-label="Siguiente"
            :disabled="charactersStore.disabledNext">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right h-6 w-6 text-grey-600"
                width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { useCharactersStore } from '~/stores/characters';
const charactersStore = useCharactersStore()
charactersStore.$subscribe(async (mutation) => {
    if (mutation.events.key == "offset") {
        await charactersStore.getCharacters()
        console.log('asdasedsa')
    }
})
</script>


<style lang="scss" scoped>
.pagination-marvel {
    @apply inline-flex items-center justify-center space-x-3;

    &--button {
        @apply bg-primary-300 rounded-full h-6 w-6 inline-flex items-center;

        &:disabled {
            @apply bg-grey-200;
        }
    }
}
</style>