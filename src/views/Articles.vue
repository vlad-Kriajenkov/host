<template>
    <div class="wrapper">
        <div class="articles">
            <h1 class="articles__titleArt" >Статьи</h1>
            <div class="boxBodyArt">
                <div
                v-for="article of allArticle"
                :key="article.id"
                class="articles__bodyArt"
                >
                    <div class="bodyArt__name"> {{article.name}}</div>
                    <div class="bodyArt__tetx"> {{article.text}}</div>
                    <button class="bodyArt__buttonArt">Подробнее</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Articles',
    computed: mapGetters(['allArticle']), 
    methods: mapActions(['fetchPost']),
    mounted(){
    this.fetchPost();
    }
}
</script>