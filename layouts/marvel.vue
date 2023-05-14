<template>
    <Header />
    <main class="layout-marvel">
        <slot />
    </main>
</template>
    
<style  lang="scss" scoped>
.layout-marvel {
    @apply grid min-h-screen w-full bg-cover bg-bottom relative pt-24;
    background-image: url('~/assets/images/bg.png');

    &::after {
        @apply absolute top-0 left-0 z-10 h-full w-full mix-blend-multiply content-[''];
        background: radial-gradient(82.53% 82.53% at 50% 91.99%, #19488F 44.09%, #000000 100%);
    }
}
</style>
    