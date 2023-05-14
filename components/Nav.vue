<template>
    <nav class="nav-marvel">
        <Logo class="hidden md:block"/>
        <Isotipo class="block md:hidden h-full w-auto"/>
        <ul class="ml-4 mr-4">
            <li>
                <NuxtLink to="/">Inicio</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/characters">Personajes</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
.nav-marvel {
    @apply inline-flex items-center h-full;

    >ul {
        @apply h-full inline-flex;

        li {
            @apply w-28 flex;

            a {
                @apply relative w-full h-full flex items-center justify-center text-primary-100 uppercase font-medium text-sm;
                @apply hover:text-primary-300;
                &.router-link-exact-active {
                    @apply bg-gradient-to-t from-primary-500/40 to-transparent text-primary-300;
                    &::after{
                        @apply absolute content-['']  z-10 h-[19px] top-0 left-0 right-0 w-full;
                        background-image: url('~/assets/images/current-page.png');
                        @apply bg-no-repeat bg-center;
                        
                    }
                }
            }
        }
    }
}
</style>