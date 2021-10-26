<template>  
    <div class="container__WidthInfo">
        <div class="container__info"> 
            <div class="info__day">
                <img class="imgIcon" src="../../../../assets/img/infoReserve/calendar.svg" alt="">
                <p class="text">{{numDay}} суток</p>
                <img class="imgLine" src="../../../../assets/img/infoReserve/Line.png" alt="">
            </div>
            <div class="info_human">
                <img class="imgIcon" src="../../../../assets/img/infoReserve/human.svg" alt="">
                <p class="text">{{info.numPeople}} взрослых</p>
                <img class="imgLine" src="../../../../assets/img/infoReserve/Line.png" alt="">
            </div>
            <div class="info__dayEntry"> 
                <img class="imgIcon1" src="../../../../assets/img/infoReserve/entry.svg" alt="">
                <p class="text"> {{info.dataArrival}} </p>
                <img class="imgLine" src="../../../../assets/img/infoReserve/Line.png" alt="">
            </div>
            <div class="info__dayDeparture">
                <img class="imgIcon1" src="../../../../assets/img/infoReserve/departure.svg" alt="">
                <p class="text"> {{info.dataDeparture}}</p>
            </div>
            
        </div>
        <router-link to="/">
             <button class="infoReserve__button">Изменить даты и гостей</button>
        </router-link>
        
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'info-resrva',
    data(){
        return{
            info: [],
            numDay: '',
            
        }
    },
    props:['filterChek'],
   async mounted(){
       if (this.filterChek === true) {
           const res = await fetch('http://localhost:3000/input',);
            const posts = await res.json();
            this.info = posts.pop();
            
            var dateB = moment(this.info.dataArrival)
            var dateC = moment(this.info.dataDeparture)  

            this.numDay = dateC.diff(dateB, 'days')
       }
     
    },
   
}
</script>