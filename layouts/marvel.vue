<template>
    <main class="marvel">
        <div class="marvel--content">
            <slot />
        </div>
    </main>
</template>
    
<style  lang="scss" scoped>
.marvel {
    @apply flex min-h-screen w-screen bg-cover bg-bottom relative;
    background-image: url('~/assets/images/bg.png');

    &::after {
        @apply absolute top-0 left-0 z-10 h-full w-full mix-blend-multiply;
        content: '';
        background: radial-gradient(82.53% 82.53% at 50% 91.99%, #19488F 44.09%, #000000 100%);
    }

    &--content {}
}
</style>
    