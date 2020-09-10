<template>
    <v-main>
        <HeroSection />
        <BeerSelect />
    </v-main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import BeerSelect from '@/components/BeerSelect.vue';
export default {
    name: 'Home',
    components: {
        HeroSection,
        BeerSelect,
        
    }
};
</script>
