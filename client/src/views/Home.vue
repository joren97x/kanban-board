<script setup>

    import Layout from './Layout.vue'
    import ListCard from '@/components/ListCard.vue'

</script>

<template>
    <Layout>
        <v-row class="ma-4">
            <v-col cols="4">
                <ListCard/>
            </v-col>
            <v-col cols="4">
                <v-card title="Doing" append-icon="mdi-dots-horizontal" color="grey-lighten-1">
                    <v-list class="bg-grey-lighten-1">
                        <template v-for="n in 5" :key="n">
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
                        <v-btn block prepend-icon="mdi-plus">Add a card</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card title="Add another list" prepend-icon="mdi-plus" color="grey-lighten-1">
                </v-card>
            </v-col>
            
        </v-row>
    </Layout>
</template>