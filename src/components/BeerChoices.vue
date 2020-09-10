<template>
    <v-card>
        <v-card-title>{{info}}</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text></v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BeerChoices',
    data() {
        return {
            info: null,
            errored: false
        };
    },
    mounted() {
        axios
            .get('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                (this.info = response.data);
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
    },
}
</script>

<style scoped>

</style>