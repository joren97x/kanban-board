<script setup>

    import { ref, computed, defineEmits } from "vue"
    import ListItem from './ListItem.vue'
    import {useBoardStore} from '../stores/boardStore.js'
    import { VueDraggableNext } from 'vue-draggable-next'

    const showNewCard = ref(false)
    const emit = defineEmits(['handleClick', 'endHandleClick'])
    const boardStore = useBoardStore()
    
    const dragOptions = computed(() => ({
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
    }))

    defineProps({ things: Object })

</script>
<template>
    <v-card color="grey-lighten-1" :title="things.title" width="100%">
        {{ things }}
        <template v-slot:append>
            <v-btn variant="text" icon size="small">
                <v-icon>mdi-dots-horizontal</v-icon>
                <v-menu activator="parent">
                    <v-card>
                        <v-list density="compact">
                            <v-list-subheader>List actions</v-list-subheader>
                            <v-list-item prepend-icon="mdi-card-plus" value="add card">Add card</v-list-item>
                            <v-list-item prepend-icon="mdi-sort" value="sort by">Sort by...</v-list-item>
                            <v-list-item prepend-icon="mdi-delete-empty" value="delete list">Delete list</v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-btn>
        </template>
        <v-list class="bg-grey-lighten-1">
            <ListItem :thing="thing" v-for="thing in things.lists" :key="thing.order" />
        </v-list>
        <v-card-actions>
            <v-expand-transition>
                <div v-if="showNewCard" style="width: 100%;">
                    <v-textarea auto-grow clearable flat rows="1" variant="solo" label="Enter a title for this card..." density="comfortable"></v-textarea>
                    <v-btn variant="flat" color="blue">Add card</v-btn>
                    <v-btn icon="mdi-close" @click="showNewCard = false"></v-btn>
                </div>
                <v-btn v-else block prepend-icon="mdi-plus" @click="showNewCard = true">Add a card</v-btn>
            </v-expand-transition>
        </v-card-actions>
    </v-card>
</template>
<!-- 
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
</style> -->

