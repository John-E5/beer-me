<template>
    <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
                <v-btn @click="toggleBeers" large color="primary"
                    >Beer Me</v-btn
                >
                <BeerChoices v-if="showBeers" />
            </div>
        </v-col>
    </v-row>
</template>

<script>
import BeerChoices from '@/components/BeerChoices.vue';
export default {
    name: 'BeerSelect',
    components: {
        BeerChoices
    },
    data() {
        return {
            showBeers: false
        };
    },
    methods: {
        toggleBeers() {
            this.showBeers = !this.showBeers;
        }
    }
};
</script>

<style scoped></style>
