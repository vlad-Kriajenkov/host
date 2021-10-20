<template>
    <div>
        <ReservCardsItem
        v-for="cardRoom of cardsRooms" 
        :key="cardRoom.id" 
        v-bind:cardRoom="cardRoom"
        />
        
    </div>
</template>

<script>
import ReservCardsItem from './ReservCardsItem'

export default {
    name: 'reserve-card',
    data() {
        return {
            
        }
    },
    components:{
        ReservCardsItem
    },
    props: ["cardsRooms"],
}
</script>