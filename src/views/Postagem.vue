<template>
    <div class="Post text-center container mx-auto">
        <br>
        <div v-if="!post">
            postagem não encontrada :/
        </div>
        <div>
            <div class="PostItem border border-slate-700 mb-4 p-4 rounded-lg" >
                <h1 class="text-slate-900 text-2xl font-bold">                    
                    {{ post.title }} 
                </h1>
                <h1 class="text-slate-600 text-2xl font-bold">                    
                    {{ post.description }} 
                </h1>
                
            </div>
        </div>
    </div>
</template>

<script>
import supabase from '../supabase'
import { useRoute } from 'vue-router'

const route = useRoute()


export default {
    name: 'Postagem',
    data () {
        return{
            post: {
                title: '',
                description: ''
            }
        }
    },
    mounted () {
        this.getPostagem()
    },
    methods: {
        async getPostagem () {
            const {data, error} = await supabase
            .from('posts')
            .select()
            .eq('id', this.$route.params.id)
            if (error) {
                console.log(error)
            } else {
                data.forEach(element => {
                    this.post = element
                });
            }
        }
    }
}
</script>