<template>
    <v-card max-width="344" class="mx-auto">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">{{
                    info.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{ info.tagline }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-img :src="imgUrl" max-width="700" max-height="300" contain></v-img>

        <v-card-text>{{ info.description }}</v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BeerChoices',
    data() {
        return {
            info: null,
            imgUrl: [],
            errored: false
        };
    },
    mounted() {
        axios
            .get('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                (this.info = response.data[0]),
                    (this.imgUrl = response.data[0].image_url);
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            });
    }
};
</script>

<style scoped></style>
