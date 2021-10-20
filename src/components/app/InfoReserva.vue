<template>  
    <div class="container__WidthInfo">
        <div class="container__info">
            <div class="info__day">
                <img class="imgIcon" src="../../assets/img/infoReserve/calendar.svg" alt="">
                <p class="text">2-ое суток</p>
                <img class="imgLine" src="../../assets/img/infoReserve/Line.png" alt="">
            </div>
            <div class="info_human">
                <img class="imgIcon" src="../../assets/img/infoReserve/human.svg" alt="">
                <p class="text">2 взрослых</p>
                <img class="imgLine" src="../../assets/img/infoReserve/Line.png" alt="">
            </div>
            <div class="info__dayEntry"> 
                <img class="imgIcon1" src="../../assets/img/infoReserve/entry.svg" alt="">
                <p class="text"> 4 апреля</p>
                <img class="imgLine" src="../../assets/img/infoReserve/Line.png" alt="">
            </div>
            <div class="info__dayDeparture">
                <img class="imgIcon1" src="../../assets/img/infoReserve/departure.svg" alt="">
                <p class="text">6 апреля</p>
            </div>
            
        </div>
         <button class="infoReserve__button">Изменить даты и гостей</button>
    </div>
</template>

<script>
export default {
    name: 'info-resrva',
}
</script>