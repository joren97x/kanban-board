<script setup>

    import { reactive, ref } from 'vue'

    const form = reactive({
        username: null,
        password: null
    })

    const categories = [
        {
            image: 'https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png',
            title: 'dumbass'
        },
        {
            image: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png',
            title: 'what the hell bruh'
        },
        {
            image: 'https://t3.ftcdn.net/jpg/05/28/85/08/360_F_528850835_o2EwqQkH8nIRzMZpYfNWUkFtOhheJGDf.jpg',
            title: 'wat da dog doin'
        },
    ]

    const s = ref(null)

</script>

<template>
    <v-card title="Login">
        {{ s }}
        <v-card-item>
            <v-select :items="categories" multiple v-model="s" item-value="title">
                <template v-slot:item="{ item }">
                    <v-list-item :prepend-avatar="item.raw.image" :title="item.raw.title" :value="item.raw.title"></v-list-item>
                </template>
            </v-select>
        </v-card-item>
        <v-card-item>
            <v-text-field label="Username" v-model="form.username"></v-text-field>
            <v-text-field label="Password" v-model="form.password"></v-text-field>
        </v-card-item>
        <v-card-actions>
            <v-btn>Login</v-btn>
        </v-card-actions>
    </v-card>
</template>