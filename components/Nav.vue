<template>
    <nav class="nav-marvel">
        <p class="text-golden-100 text-2xl hidden md:block">
            LOGO MARVEL
        </p>
        <ul>
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
    @apply inline-flex space-x-4 items-center h-full;

    >ul {
        @apply h-full inline-flex;

        li {
            @apply w-28 flex;

            a {
                @apply relative w-full h-full flex items-center justify-center text-golden-100 uppercase font-medium text-sm;
                @apply hover:text-golden-300;
                &.router-link-exact-active {
                    @apply bg-gradient-to-t from-golden-500/40 to-transparent text-golden-300;
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