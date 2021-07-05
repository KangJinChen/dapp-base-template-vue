<template>
    <v-app>
        <app-bar></app-bar>
        <v-main class="bg1">
            <v-container fluid>
                <v-row>
                    <v-col cols="2" class="hidden-sm-and-down">
                        <navigation class="bg2"></navigation>
                    </v-col>

                    <v-col>
                        <v-sheet min-height="90vh" rounded="lg" class="bg2">
                            <router-view />
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import Navigation from './components/Navigation.vue';
export default {
    components: { AppBar, Navigation },
    name: 'App',
};
</script>
