<template>
    <div class="page-characters">
        <div class="page-characters--details">
            <div class="md:col-span-4">
                <Progress :total="688" :current="400" />
            </div>
            <div class="md:col-span-3">
                <div class="box">
                    Video
                </div>
            </div>
            <div class="md:col-span-3">
                <div class="box">
                    Imagen
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-characters {
    &--details{
        @apply grid gap-4 md:grid-cols-10;
    }
}
</style>