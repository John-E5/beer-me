<template>
    <span>
        <v-navigation-drawer color="indigo darken-2" v-model="drawer" app>
            <v-list dense>
                <v-list-item link to="/">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="indigo darken-4">
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>{{ siteTitle }}</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            siteTitle: 'Beer Me',
            drawer: null
        };
    }
};
</script>

<style scoped></style>