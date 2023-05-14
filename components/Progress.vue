<template>
    <div class="progress-marvel">
        <p class="text-center text-golden-100">
            PROGRESO DE PELICULAS PRODUCIDAS
        </p>
        <div class="grid gap-4">
            <p class="text-right text-golden-300 text-sm leading-[12px]">
                <span>{{ props.total }} Películas</span>
                <br>
                <span>Meta de producción</span>
            </p>

            <div class="progress-marvel--bar inclination">
                <div class="progress-marvel--bar-rods inclination-2">
                    <span v-for="i in 10" :key="i" class="border-r border-grey" :class="{'border-none':i==0 || i==10}"></span>
                </div>
                <div class="bg-gray-200 inclination-2">
                    <div class="progress-marvel--bar-value" :style="`width: ${valueBar}%`">
                    </div>
                </div>
            </div>
            <p class="text-right text-darkblue text-sm leading-[12px]" :style="`padding-right: ${100 - valueBar}%`">
                <span>{{ props.current }} Películas</span>
                <br>
                <span>Producidas</span>
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    total: {
        type: Number,
        required: true,
    },
    current: {
        type: Number,
        required: true,
    },
})

const valueBar = computed(() => {
    return (props.current / props.total) * 100
})
</script>

<style lang="scss" scoped>
.progress-marvel {
    @apply bg-grey py-6 px-6 border border-golden-600 border-opacity-30 rounded-md grid gap-4;

    &--bar {
        @apply h-auto w-full border-2 border-golden-300 p-1 relative;
    }
    
    &--bar-rods {
        @apply grid grid-cols-10 h-7 absolute top-0 left-0 w-full p-1 z-10;
        
    }
    
    &--bar-value {
        @apply h-5;
        background: linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%);
       
    }
}
</style>