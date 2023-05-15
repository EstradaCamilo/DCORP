<template>
    <TransitionRoot appear :show="charactersStore.isOpenDetailsCharacter" as="template">
        <Dialog as="div" @close="charactersStore.setIsOpenDetailsCharacter(false)" class="relative z-20">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-50" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="modal-character-marvel">
                            <div class="modal-character-marvel--bg"></div>
                            <div class="modal-character-marvel--content">
                                <div class="h-40 w-40 mx-auto flex flex-col items-center relative">
                                    <img class="h-full w-full absolute top-0 bottom-0 left-0 right-0 m-auto"
                                        src="~/assets/images/circle.svg" alt="circle">
                                    <img :src="`${charactersStore.currentCharacter.thumbnail.path.replace('http', 'https')}.${charactersStore.currentCharacter.thumbnail.extension}`"
                                        class="h-32 w-32 rounded-full object-cover absolute top-0 bottom-0 left-0 right-0 m-auto"
                                        :alt="charactersStore.currentCharacter.name">
                                    <img class="h-[20.2px] w-[13.86px] absolute -bottom-3" src="~/assets/images/diamond.png"
                                        alt="diamond">
                                    <img class="h-[20.2px] w-[13.86px] absolute -top-3" src="~/assets/images/diamond.png"
                                        alt="diamond">
                                </div>
                                <div class="inline-flex justify-between items-center px-4">
                                    <img class="h-7 w-7" src="~/assets/images/border-l.svg" alt="border left">
                                    <span class="px-2 text-sm text-center text-primary-100 uppercase">
                                        {{ charactersStore.currentCharacter.name ?? 'Nombre' }}
                                    </span>
                                    <img class="h-7 w-7" src="~/assets/images/border-r.svg" alt="border right">
                                </div>
                                <p class="text-xs font-light text-primary-100 px-4">
                                    {{ charactersStore.currentCharacter.description ?? 'Descripción' }}
                                </p>
                                <DetailsCharacter />
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { useCharactersStore } from '~/stores/characters';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
const charactersStore = useCharactersStore()
</script>

<style lang="scss" scope>
.modal-character-marvel {
    @apply w-full max-w-sm transform overflow-hidden rounded-md px-4 pb-4 pt-8 text-left align-middle shadow-xl transition-all;
    @apply relative border border-grey-500 border-opacity-40;

    &--bg {
        @apply absolute top-0 left-0 z-10 h-full w-full rounded-md bg-cover;
        background-image: url('~/assets/images/bg-card-character.png');
        mix-blend-mode: normal;
        opacity: 1;
    }

    &--content {
        @apply relative flex flex-col gap-4 justify-between z-30;
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