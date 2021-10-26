<template>
<div class="reserve">
    <div class="reserveCard__container">
        <div class="reserved__img">
            <img class="img__photoRooms" :src="require(`@/assets/${cardRoom.photoRoom}`)" alt="room">
            <p class="img__freeRooms">В наличии {{cardRoom.freeRooms}} номеров</p>
        </div>
        <div class="reserved__imgPhone">
            <img class="img__photoRoomsPhone" :src="require(`@/assets/${cardRoom.photoRoomPhone}`)" alt="room">
            <p class="img__freeRoomsPhone">В наличии {{cardRoom.freeRooms}} номеров</p>
        </div>
        <div class="reserved__info">
            <div class="info__taitle">
                <p class="taitle__title" >{{cardRoom.title}} </p>
                <img class="taitle__img" :src="require(`@/assets/${cardRoom.maxNumberPeople}`)" alt="maxNumberPeople">
            </div>
            <div class="info__room">
                <p class="room__title">{{cardRoom.info.description}}</p> 
                <div class="room__flex">
                    <h1 class="flex__title">{{cardRoom.info.roomSize.title}} <span class="flex__info">{{cardRoom.info.roomSize.info}}</span> </h1>
                </div>
                <div class="room__flex">
                    <h1 class="flex__title">{{cardRoom.info.sleepingPlaces.title}} <span class="flex__info">{{cardRoom.info.sleepingPlaces.info}}</span> </h1>
                </div>    
                <div class="room__flex">
                    <h1 class="flex__title">{{cardRoom.info.maxNumberGuests.title}}  <span class="flex__info">{{cardRoom.info.maxNumberGuests.info}}</span> </h1>
                </div> 
                <div class="room__flex">
                    <h1 class="flex__title">{{cardRoom.info.roomEquipment.title}}<span class="flex__info">{{cardRoom.info.roomEquipment.info}}</span></h1>
                </div>        
                <div class="room__flex">
                    <h1 class="flex__title">{{cardRoom.info.Payment.title}} <span class="flex__info">{{cardRoom.info.Payment.info}}</span> </h1>
                </div>    
                <div v-if="areOptionsViseblePhone">
                    
                        <transition  name="fade">
                                    <div 
                                    class="ReservCradsPraice__flexPhone"
                                    >
                                    <VueSlickCarousel>
                                        <ReservCradsPraice 
                                        v-for="cardRoomi in cardRoom.payPhone"
                                        :key="cardRoomi.id"
                                        v-bind:cardRoomi="cardRoomi"
                                        
                                        />
                                    </VueSlickCarousel>
                                    </div>
                        </transition>
                    
                </div>
            </div>
            <div class="info__calendar">
                <button class="calendar__buttonCalendar">Календарь</button>
                <button @click="areOptionsViseble = !areOptionsViseble" v-if="cardRoom.pricesButton" class="calendar__pricesButton">Цены</button>
            </div>
             <div class="info__calendarPhonePhone">
                <button @click="areOptionsViseblePhone = !areOptionsViseblePhone"  class="calendar__pricesButtonPhone">Подробнее</button>
            </div>
        </div>
        <div class="reserved__pay">
            <div class="pay__notNutrition">
                <p class="notNutrition__texts"> Начиная с</p> 
                <p class="notNutrition__pay">{{cardRoom.info.payNotNutrition}}</p>
                <p class="notNutrition__texts"> за 1 ночь, за номер</p>
                <button class="notNutrition__button">Выбрать</button>
                <p class="notNutrition__texts">Без питания</p>
            </div>
            <hr>
            <div class="pay__nutrition">
                <p class="nutrition__texts"> Начиная с</p> 
                <p class="nutrition__pay">{{cardRoom.info.payNutrition}}</p>
                <p class="nutrition__texts"> за 1 ночь, за номер</p>
                <button  class="nutrition__button">Выбрать</button>
                <p class="nutrition__texts">С питанием для 2-х</p>
            </div>
        </div>
    </div>
    
    <transition  name="fade">
        <div 
        class="ReservCradsPraice__flex"
        v-if="areOptionsViseble"
        >
            <ReservCradsPraice 
            v-for="cardRoomi in cardRoom.pay"
            :key="cardRoomi.id"
            v-bind:cardRoomi="cardRoomi"
            
            />
        </div>
    </transition>
</div>
</template>

<script> 
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import ReservCradsPraice from '../ReservCards/ReservCradsPraice'

export default {
    name: 'ReservCardsItem',
    data(){
        return{
            areOptionsViseble: false,
            areOptionsViseblePhone: false,
        }
    },
     settings:{
        "dots": false,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow":1,
        "slidesToScroll": 2
    },
    components:{
        ReservCradsPraice,
        VueSlickCarousel
    },
    props: ["cardRoom"] 
}
</script> 