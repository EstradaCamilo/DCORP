<template>
    <header class="header-marvel">
        <Nav />
        <div class="inline-flex items-center space-x-2">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bell-filled  h-6 w-6 text-golden-100 hover:text-golden-300"
                    width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
                        stroke-width="0" fill="currentColor"></path>
                    <path
                        d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
                        stroke-width="0" fill="currentColor"></path>
                </svg>
            </button>
            <button type="button">

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-settings-filled  h-6 w-6 text-golden-100 hover:text-golden-300"
                    width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        stroke-width="0" fill="currentColor"></path>
                </svg>
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>.header-marvel {
    @apply h-24 absolute top-0 left-0 z-20 w-full bg-transparent border-b border-golden-600 border-opacity-50;
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
    @apply inline-flex justify-between items-center;
}</style>