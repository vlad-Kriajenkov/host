<template>
    <div class="container__Width" >
        <div class="selection__Stage">
            <img src="../../assets/img/Rooms&Prices/Reserve/reserveLine.svg" alt="Fiil Line">
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

import InfoReserva from '../../components/app/InfoReserva.vue'
import ReservCardList from './ReservCardsList.vue'
export default {
  components: { InfoReserva, ReservCardList },
    name: 'Reserve'
}
</script>