<script setup>

    import { ref } from "vue"
    import ListItem from './ListItem.vue'
    defineProps({title: String, items: Number})
    const showNewCard = ref(false)

</script>
<template>
    <v-card :title="title" color="grey-lighten-1">
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
            <ListItem v-for="n in items" :key="n" />
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

