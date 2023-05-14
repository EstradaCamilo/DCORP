<template>
    <Header />
    <main class="layout-marvel">
        <div class="layout-marvel--content">
            <slot />

        </div>
    </main>
</template>
    
<style  lang="scss" scoped>
.layout-marvel {
    @apply min-h-screen w-full bg-cover bg-bottom relative pt-28 ;
    background-image: url('~/assets/images/bg.png');
    
    &--content{
     @apply grid z-10 mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8;
    }
    &::after {
        @apply absolute top-0 left-0 h-full w-full mix-blend-multiply content-[''];
        background: radial-gradient(82.53% 82.53% at 50% 91.99%, #19488F 44.09%, #000000 100%);
    }
}
</style>
    