<template>
    <div>
        <ReservCardsItem
        v-for="cardRoom of allPosts" 
        :key="cardRoom.id" 
        v-bind:cardRoom="cardRoom"
        />
        
    </div>
</template>

<script>

import ReservCardsItem from '../ReservCards/ReservCardsItem'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'reserve-card',
    components:{
        ReservCardsItem 
    },
    computed: mapGetters(['allPosts']), 
    methods: mapActions(['fetchPost']),
    mounted(){
    this.fetchPost();
    }
}
</script>