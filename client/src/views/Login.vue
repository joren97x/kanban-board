<script setup>

    import { reactive } from 'vue'

    const form = reactive({
        username: null,
        password: null
    })

</script>

<template>
    <v-card title="Login">
        <v-card-item>
            <v-text-field label="Username" v-model="form.username"></v-text-field>
            <v-text-field label="Password" v-model="form.password"></v-text-field>
        </v-card-item>
        <v-card-actions>
            <v-btn>Login</v-btn>
        </v-card-actions>
    </v-card>
</template>