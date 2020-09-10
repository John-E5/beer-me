<template>
    <v-app>
        <Navigation />
        <router-view />
    </v-app>
</template>

<script>
import Navigation from '@/components/navigation/Navigation';
export default {
    name: 'App',
    components: {
        Navigation
    }
};
</script>

<style></style>
