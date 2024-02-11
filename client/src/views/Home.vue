<script setup>

    import Layout from './Layout.vue'
    import ListCard from '@/components/ListCard.vue'
    import {useBoardStore} from '../stores/boardStore.js'
    import { ref, computed } from 'vue'
    import { VueDraggableNext } from 'vue-draggable-next'
    
    const dragOptions = computed(() => ({
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
    }))

    const newList = ref(false)
    const boardStore = useBoardStore()

</script>

<template>
    <Layout>
        <v-row class="ma-4">
            {{ boardStore.boards }}
            <VueDraggableNext :list="boardStore.boards" v-bind="dragOptions" @start="isDragging = true" @end="isDragging = false">
                <transition-group type="transition" name="flip-list">
                    <v-col v-for="board in boardStore.boards" :key="board.order" class="d-inline-block" cols="12" md="4" lg="4">
                        <ListCard :items="4" :things="board" />
                    </v-col>
                </transition-group>
            </VueDraggableNext>
            <v-col  cols="12" md="4" lg="4">
                <v-card color="grey-lighten-1">
                    <v-card-title @click="newList = true" id="newListTitle" v-if="!newList">
                        <v-icon>mdi-plus</v-icon>
                        Add another list
                    </v-card-title>
                    <v-card-item v-else>
                        <v-textarea label="Enter list title..." variant="solo" rows="1" auto-grow></v-textarea>
                        <v-btn color="blue">Add list</v-btn>
                        <v-btn icon="mdi-close" @click="newList = false" variant="text"></v-btn>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="boardStore.newBoardDialog" >
            <v-card title="Create board" width="69%" style="margin: auto">
                <template v-slot:append>
                    <v-btn variant="text" icon="mdi-close" @click="boardStore.showNewBoardDialog"></v-btn>
                </template>
                <v-card-item subtitle="Background">
                    <v-row>
                        <v-col cols="3">
                            <v-sheet height="69" rounded width="100%" color="red"></v-sheet>
                        </v-col>
                        <v-col cols="3">
                            <v-sheet height="69" rounded width="100%" color="blue"></v-sheet>
                        </v-col>
                        <v-col cols="3">
                            <v-sheet height="69" rounded width="100%" color="yellow"></v-sheet>
                        </v-col>
                        <v-col cols="3">
                            <v-sheet height="69" rounded width="100%" color="green"></v-sheet>
                        </v-col>
                        <v-col cols="2">
                            <v-sheet height="69" rounded width="100%" color="orange"></v-sheet>
                        </v-col>
                        <v-col cols="2">
                            <v-sheet height="69" rounded width="100%" color="purple"></v-sheet>
                        </v-col>
                        <v-col cols="2">
                            <v-sheet height="69" rounded width="100%" color="brown"></v-sheet>
                        </v-col>
                        <v-col cols="2">
                            <v-sheet height="69" rounded width="100%" color="grey"></v-sheet>
                        </v-col>
                        <v-col cols="2">
                            <v-sheet height="69" rounded width="100%" color="indigo"></v-sheet>
                        </v-col>
                        <v-col cols="2">
                            <v-sheet height="69" class="d-flex align-center justify-center flex-wrap text-center" rounded width="100%" style="background: linear-gradient(to right, pink, purple);">
                                <v-icon>mdi-cog</v-icon>
                                <v-menu activator="parent" :close-on-content-click="false">
                                    <v-card>
                                        <v-color-picker></v-color-picker>
                                    </v-card>
                                </v-menu>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-card-item>
                <v-card-item subtitle="Board title">
                    <v-text-field variant="solo" label="👋 Board title is required"></v-text-field>
                </v-card-item>
                <v-card-actions>
                    <v-btn block @click="boardStore.showNewBoardDialog" color="blue" variant="flat">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </Layout>
</template>

<style scoped>
    #newListTitle {
        cursor: pointer;
    }
    .button {
        margin-top: 35px;
    }
    .flip-list-move {
        transition: transform 0.5s;
    }
    .no-move {
        transition: transform 0s;
    }
    .list-card {
        display: inline-block; 
    }
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
    .list-group {
        min-height: 20px;
    }
    .list-group-item {
        cursor: move;
    }
    .list-group-item i {
        cursor: pointer;
    }
    .btn {
        @apply font-bold py-2 px-4 rounded;
    }
    .btn-blue {
        @apply bg-blue-500 text-white;
    }
    .btn-blue:hover {
        @apply bg-blue-700;
    }
</style>