<template>
    <div class="container__Width" >
        <div class="selection__Stage">
            <img src="../assets/img/Rooms&Prices/FillLine.svg" alt="Fiil Line">
        </div>
        <div class="container__reservations">
            <info-reserva/>
        </div>
        <div class="container__imformationCards">
            <ReservCardList/>
        </div>
    </div>
</template>

<script>

import InfoReserva from '../components/app/Rooms/InfoReserv/InfoReserva'
import ReservCardList from '../components/app/Rooms/ReservCards/ReservCardsList.vue'
export default {
  components: { InfoReserva, ReservCardList },
    name: 'Reserve'
}
</script>