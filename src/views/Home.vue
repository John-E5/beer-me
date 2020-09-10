<template>
    <v-main>
        <HeroSection />
        <BeerChoices/>
    </v-main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import BeerChoices from '@/components/BeerChoices.vue'
export default {
    name: 'Home',
    components: {
        HeroSection,
        BeerChoices
    }
};
</script>
