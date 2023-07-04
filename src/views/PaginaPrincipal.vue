<script setup>
import store from '../store.js'
                                    // getWordsNumber é o método que conta as palavras ignorando os espaços ''-*/
const getWordsNumber = (str) => (str.split(' ').length)



</script>

<template>
    <div class="home">
        <main class="container mx-auto ">
        <!-- <div v-if="!store.posts.length">
            <br>
            não tem nenhum post :/
        </div> -->

            <div>
                <div class="PostItem border border-slate-700 mb-4 p-4 rounded-lg" 
                v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                    <h1 class="text-slate-900 text-2xl font-bold">                    
                        {{ item.tittle }} 
                    </h1>
                    <p>{{ getWordsNumber(item.description) }} palavras.</p>
                    
                </div>
            </div>
        </main>
    </div>
</template>
