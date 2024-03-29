<script setup>

    import {ref, mergeProps} from 'vue'
    import {useBoardStore} from '../stores/boardStore.js'
    import { useTheme } from 'vuetify'

    const theme = useTheme()

    function toggleTheme () {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
    const boardStore = useBoardStore()
    const star = ref(false)
    const drawer = ref(false)

    const colors = ['red', 'green', 'yellow', 'blue']

</script>

<template>
    <v-layout>
        <v-app-bar color="grey" prominent elevation="0">
            <v-app-bar-nav-icon>
                <template v-slot:default>
                    <v-icon size="40">mdi-card-outline</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-toolbar-title>kanban board</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field prepend-inner-icon="mdi-magnify" class="mt-5" variant="outlined" label="Search..." density="compact"></v-text-field>
            <v-menu persistent>
                <template v-slot:activator="{ props: menu }">
                    <v-tooltip location="left">
                        <template v-slot:activator="{ props: tooltip }">
                            <v-btn rounded v-bind="mergeProps(menu, tooltip)">
                                <v-avatar>
                                    <v-img cover src="https://images.squarespace-cdn.com/content/v1/63d746c10e41a71f9fdee43c/5f518be7-ab8f-47fc-bd19-c5bb3212f7b0/Brent-Faiyaz.jpg"></v-img>
                                </v-avatar>
                            </v-btn>
                        </template>
                        <span>Brent Faiyaz (brent@faiyaz.com)</span>
                    </v-tooltip>
                </template>
                <v-card subtitle="Account" width="250">
                    <v-list>
                        <v-list-item 
                        prepend-avatar="https://images.squarespace-cdn.com/content/v1/63d746c10e41a71f9fdee43c/5f518be7-ab8f-47fc-bd19-c5bb3212f7b0/Brent-Faiyaz.jpg"
                        title="Joren"
                        subtitle="my@email.com"
                        value="profile"
                        ></v-list-item>
                        <v-divider class="my-1" />
                        <v-list-item value="manage account">Manage account</v-list-item>
                        <v-list-item value="theme">
                            Dark mode
                            <template v-slot:append>
                                <v-switch inset @click="toggleTheme"></v-switch>
                            </template>
                        </v-list-item>
                        <v-list-item value="logout">Logout</v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer">
            <v-list-item prepend-avatar="https://images.squarespace-cdn.com/content/v1/63d746c10e41a71f9fdee43c/5f518be7-ab8f-47fc-bd19-c5bb3212f7b0/Brent-Faiyaz.jpg">
                Brent Faiyaz's workspace
            </v-list-item>
            <v-divider/>
            <v-list title="Your boards">
                <v-list-item>
                    <strong>Your boards</strong>
                    <template v-slot:append>
                        <v-tooltip text="Create new board." location="top">
                            <template v-slot:activator="{ props }">
                                <v-btn icon="mdi-plus" @click="boardStore.showNewBoardDialog" variant="text" v-bind="props"></v-btn>
                            </template>
                        </v-tooltip>
                    </template>
                </v-list-item>
                <v-list-item v-for="n in 4" :key="n" :value="n">
                    <template v-slot:prepend>
                        <v-sheet :color="colors[n-1]" height="25" width="25" class="me-4"></v-sheet>
                    </template>
                    <template v-slot:append v-if="star && n == 1">
                        <v-icon>mdi-star</v-icon>
                    </template>

                    {{ n == 1 ? 'some random ahh board title' : 'board ' + n }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="grey-lighten-4" prominent elevation="0">
            <v-tooltip text="Show or unshow sidebar." location="right">
                <template v-slot:activator="{ props }">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-bind="props"></v-app-bar-nav-icon>
                </template>
            </v-tooltip>
            <v-toolbar-title>some random ahh board title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip text="Star or unstar this board.">
                <template v-slot:activator="{ props }">
                    <v-btn :icon="star ? 'mdi-star' : 'mdi-star-outline'" @click="star = !star" v-bind="props"></v-btn>
                </template>
            </v-tooltip>
            <v-menu>
                <template v-slot:activator="{ props: menu }">
                    <v-tooltip location="left">
                        <template v-slot:activator="{ props: tooltip }">
                            <v-btn color="blue" icon="mdi-square" v-bind="mergeProps(menu, tooltip)"></v-btn>
                        </template>
                        <span>Change background color.</span>
                    </v-tooltip>
                </template>
                <v-card>
                    <v-color-picker
                    elevation="0"
                    ></v-color-picker>
                </v-card>
            </v-menu>
        </v-app-bar>

        <v-main style="height: 100vh;">
            <slot/>
        </v-main>
    </v-layout>
</template>