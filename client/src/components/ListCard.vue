<script setup>
    import { ref } from "vue";
    const showNewCard = ref(false)
</script>
<template>
    <v-card title="To do" append-icon="mdi-dots-horizontal" color="grey-lighten-1">
        <v-list class="bg-grey-lighten-1">
            <template v-for="n in 3" :key="n">
                <v-hover v-slot="{ isHovering, props }">
                    <v-list-item class="mx-1 bg-grey-lighten-4 mb-2" :value="n" rounded v-bind="props">
                        <template v-slot:append>
                            <v-btn size="small" icon="mdi-pencil" v-show="isHovering" variant="text"></v-btn>
                        </template>
                        Lorem, ipsum dolor.
                    </v-list-item>
                </v-hover>
            </template>
        </v-list>
        <v-card-actions>
            <div v-if="showNewCard" style="width: 100%;">
                <v-textarea auto-grow clearable flat rows="1" variant="solo" label="Enter a title for this card..." density="comfortable"></v-textarea>
                <v-btn variant="flat" color="blue">Add card</v-btn>
                <v-btn icon="mdi-close" @click="showNewCard = false"></v-btn>
            </div>
            <v-btn v-else block prepend-icon="mdi-plus" @click="showNewCard = true">Add a card</v-btn>
            
        </v-card-actions>
    </v-card>
</template>