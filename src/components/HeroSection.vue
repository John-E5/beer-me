<template>
    <v-container fluid
        fill-height
        class="hero-image"
        style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div
                class="display-4 font-weight-black indigo--text text-xs-center"
            >
                Cant Decide on what brewdog you want?
            </div>
            <div
                class="display-4 font-weight-black indigo--text text-xs-center mb-3"
            >
                Let us help you decide
            </div>
            <div class="display-1 font-weight-bold indigo--text text-xs-center">
                Get help with choosing your brew!.
            </div>
        </v-layout>

    </v-container>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>

<style scoped>
.hero-image {
    background: url('https://industryeurope.com/downloads/4544/download/beer%20bottles.jpg?cb=65972db729acf95565681dc14e5118ea&w=1032');
    background-size: cover;
    width: 100%;
    height: 100%;
}

</style>