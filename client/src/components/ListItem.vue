<script setup>

    import { ref } from "vue"
    const editable = ref(false)
    const text = ref("Lorem, ipsum dolor.")

</script>

<template>
    <v-card elevation="0" color="grey-lighten-1">
        <v-textarea :flat="!editable" auto-grow no-resize variant="solo" :readonly="!editable" rows="1" v-model="text" :focused="editable" class="textarea mx-2">
            <template v-slot:append-inner>
                <v-btn size="small" v-if="!editable" @click="editable = !editable" id="pencil" icon="mdi-pencil" variant="text"></v-btn>
                <v-tooltip text="Save" v-if="editable">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" size="small" variant="text" icon="mdi-check"></v-btn>
                    </template>
                </v-tooltip>
                <v-tooltip text="Cancel" v-if="editable">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" @click="editable = false" size="small" variant="text" icon="mdi-close"></v-btn>
                    </template>
                </v-tooltip>
            </template>
        </v-textarea>
        <v-expand-transition>
            <v-list v-if="editable" class="mb-2 mx-2">
                <v-list-subheader>Card actions</v-list-subheader>
                <v-list-item value="open card" prepend-icon="mdi-card-text">Open card</v-list-item>
                <v-list-item value="edit date" prepend-icon="mdi-calendar">Edit date</v-list-item>
                <v-list-item value="remove" prepend-icon="mdi-delete-empty">Remove</v-list-item>
            </v-list>
        </v-expand-transition>
    </v-card>
    
</template>

<style scoped>

    #pencil {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    .textarea:hover #pencil {
        opacity: 1;
    }

</style>