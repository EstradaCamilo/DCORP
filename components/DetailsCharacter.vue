<template>
    <TransitionRoot appear :show="charactersStore.isOpenDetailsCharacter" as="template">
        <Dialog as="div" @close="charactersStore.setIsOpenDetailsCharacter(false)" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="details-character-marvel">
                            xd
                            <div class="details-character-marvel--bg"></div>
                            <div class="details-character-marvel--content">
                                <button type="button"
                                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                @click="charactersStore.setIsOpenDetailsCharacter(false)">
                                Close
                            </button>
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
    DialogTitle,
} from '@headlessui/vue'
const charactersStore = useCharactersStore()
</script>

<style lang="scss" scope>
.details-character-marvel{
    @apply w-full max-w-md transform overflow-hidden rounded-md p-6 text-left align-middle shadow-xl transition-all;
    @apply relative border border-grey-500 border-opacity-40;
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