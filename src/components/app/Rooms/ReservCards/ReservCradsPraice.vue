<template>
    <div class="ReserveCardPraice">
        
            <div class="pay__notNutritionList">
                <p class="notNutrition__texts"> Начиная с</p> 
                <p class="notNutrition__pay">{{cardRoomi.payNutrition}}</p>
                <p class="notNutrition__texts"> за 1 ночь, за номер</p>
                <router-link 
                to="/Rooms&Prices/Booking"
                >
                    <button class="notNutrition__button">Выбрать</button>
                </router-link>
                <p class="notNutrition__texts">{{cardRoomi.nutrition}}</p>
            </div>
        <!-- <span class="v1"></span> -->
    </div>
</template>

<script>
export default {
    name:"ReservCradsPraice", 
    props:["cardRoomi"]
}
</script>

<style  scoped>
    .v1{
        border-left: 1.5px solid rgba(210, 210, 210, 0.5);;
        height: 78px;
        margin: 0px 10px 0px 10px;
    }
   
    .ReserveCardPraice{
        display: flex; 
    }
    .pay__notNutritionList{
        text-align: center;
        margin-left: 10px;
    }
   
   
</style>>

