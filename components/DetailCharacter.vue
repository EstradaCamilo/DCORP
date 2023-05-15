<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton as="button"
            class="inline-flex w-full justify-between rounded-md px-4 py-2 text-left text-sm font-medium text-primary-100 hover:text-primary-300 focus:outline-none "
            :class="open ? 'text-primary-300' : 'text-primary-100'">
            <span>
                {{ props.title }}
                ({{ props.count }})
            </span>
            <svg :classs="{ 'rotate-180 transform': open }" xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down h-5 w-5" width="40" height="40" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
            </svg>
        </DisclosureButton>
        <DisclosurePanel as="ul" class="text-xs text-primary-100 px-4 py-2">
            <li v-for="item, i in items" :key="i">
                {{ item.name }}
            </li>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})
import {
    Disclosure, DisclosureButton, DisclosurePanel
} from '@headlessui/vue'
</script>
