<template>
    <div class="container__Width" >
        <div class="selection__Stage">
            <img src="../../assets/img/Rooms&Prices/FillLine.svg" alt="Fiil Line">
        </div>
        <div class="container__reservations">
            <InfoReserva/>
        </div>
        <div class="container__coupons"> 
            <coupon/>
        </div>
        <div class="container__imformationCards">
            <ReservCardsList
            :cardsRooms="cardsRooms"
            />
        </div>
        <div class="info_rooms">
            <div class="service">
                <h2 class="service__title">Услуги и оснащение</h2>
                <div class="service__info">
                    <table class="table">
                        <tr class="tr">
                            <th class="th">Общие:</th>
                            <td class="td">Кондиционер, Отопление, Семейные номера, Номера для некурящих</td>
                        </tr>
                        <tr  class="tr">
                            <th class="th">Активный отдых:</th>
                            <td class="td">Детская игровая площадка.</td>
                        </tr>
                        <tr  class="tr">
                            <th class="th">Услуги:</th>
                            <td class="td">Общий лаундж/гостиная с телевизором, Услуги по глажению одежды (оплачивается отдельно). Прачечная (оплачивается отдельно).</td>
                        </tr>
                        <tr  class="tr">
                            <th class="th">Интернет:</th>
                            <td class="td">Wi-Fi предоставляется в номерах отеля бесплатно.</td>
                        </tr>
                        <tr  class="tr">
                            <th class="th">Парковка:</th>
                            <td class="td">Бесплатная частная парковка на месте.</td>
                        </tr>
                    </table>
                </div>
            
            </div>
            <div class="regulations">
                <h2 class="regulations__title">Правила</h2>
                <div class="regulations__flex">
                    <h1>
                        Заезд:
                        <span>С 16:00</span>
                    </h1>
                     
                </div>
                <div class="regulations__flex">
                    <h1>
                        Выезд:
                        <span>До 12:00</span> 
                    </h1>
                </div>
                <div class="regulations__flex">
                    <h1>Отмена / Предоплата: <span>Оплата бронирования гостевого дома производится 
                        после подтверждения бронирования. Вы можете сделать предоплату в размере 30% от 
                        суммы бронирования или полностью. При оплате 30% проживания доплату за оставшиеся 
                        сутки можно произвести по прибытии в наш гостевой дом. В случае отмены 
                        бронирования, предоплата не возвращается. В низкий сезон, а также при наличии 
                        Договора на корпоративное обслуживание бронирование гостевого дома возможно 
                        без предоплаты. Все возможные вытекающие обязательства и права Сторон возникают 
                        исключительно между отправителем и получателем платежа — клиентом и гостевым домом.
                    </span> </h1>
                </div>
                <div class="regulations__flex">
                    <h1>Дети и дополнительные спальные места: 
                        <span>Разрешается проживание детей 
                            любого возраста. При размещении всех детей младше 2 лет на детских кроватках 
                            проживание им предоставляется бесплатно . При размещении всех детей младше 6 лет 
                            на дополнительных кроватях взимается RUB 1000 за ночь. При дополнительном 
                            размещении всех детей старшего возраста или взрослых на дополнительных кроватях 
                            взимается RUB 1000 за ночь. Максимальное количество дополнительных кроватей в 
                            номере - 1. Дополнительные кровати и детские кроватки предоставляются по запросу. 
                            Требуется подтверждение со стороны отеля о предоставлении данной услуги. 
                            Дополнительные услуги не включаются автоматически в общую стоимость и оплачиваются 
                            отдельно во время вашего проживания.
                        </span> 
                    </h1>
                    
                </div>
                <div class="regulations__flex">
                    <h1>
                        Животные:  
                        <span>Размещение домашних животных допускается по предварительному запросу. 
                            Данная услуга может быть платной.   
                        </span>
                    </h1>
                   
                </div>
                <div class="regulations__flex">
                    <h1>
                        Принимаемые кредитные карты: 
                        <span> 
                            Этот объект размещения принимает только наличные.
                        </span> 
                    </h1>
                    
                </div>   
            </div>
        </div>
        
        
    </div>
</template>

<script>
import Coupon from '../../components/app/Coupon'
import InfoReserva from './InfoReserva.vue'
import ReservCardsList from './ReservCardsList.vue'
export default {
  components: { InfoReserva, Coupon, ReservCardsList },
    name: 'Rooms',
    data() {
        return { 
            cardsRooms: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/cards')
        .then(response => response.json())
        .then(json =>  {
          this.cardsRooms = json
        })
    }
}
</script>
