<script setup>
import { reactive } from 'vue'
import supabase from '../supabase'
import { useRoute } from 'vue-router'
import {store} from '../store'

const route = useRoute()
                                            // parseInt() para converter o id da rota "string" em "inteiro" / route.params é a propriedade que acessa o parametro id da rota



const post = store.posts.find(x => x.id === parseInt(route.params.id))

</script>

<template>
    <div class="Post text-center container mx-auto">
        <br>
        <div v-if="!post">
            postagem não encontrada :/
        </div>
        <div v-else>
            <h1 class="text-slate-900 text-3xl font-bold mb-4">{{ post.tittle }}</h1>
            <p class="text-sm text-slate-400 ">{{ post.date }}</p>
            <p class="text-1xl ">{{ post.description }}</p>
        </div>
    </div>
</template>