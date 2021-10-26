<template>
  <div class="container">
    <div class="container__Serch">
      <div class="serch__img">
        <img
          loading="lazy"
          src="../assets/img/Home/background.svg"
          alt="bg"
          height="450px"
        />
        <img class="img__vector" src="../assets/img/Home/Vector.svg" alt="vk" />
      </div>
      <form 
      ref="form"
      @submit.prevent="sendForm"
      class="serch__widch">
        <label>
          Дата заезда
          <input  
          type="date" 
          name="dataArrival" 
          id="datatime"
          v-model="form.dataArrival"
          
          >
        </label>
        <label>
          Дата выезда 
          <input 
          type="date" 
          name="dataDeparture"
          id="dataDeparture"
          v-model="form.dataDeparture"
           >
        </label>
        <label>
          Гостей
          <input 
          type="number" 
          name="numPeople" 
          id="number"
          v-model="form.numPeople"
          
          >
        </label>
        <!-- <router-link
        to="/Rooms&Prices"
        tag="button"
        type="button"
        >
          <input type="button" value="Проверить">
        </router-link> -->
        
        <button
        
        value="submit"
        type="submit"
        > Проверить</button>
      </form>
    </div>
    <div class="max_width">
      <div class="our__Rooms">
        <p class="rooms__title">Наши Номера</p>
        <infoList />
      </div>
      <div class="media__rooms">
        <p class="rooms__titles">Наши Номера</p>
        <SliderCardsMedia />
      </div>
      <div class="info__Covid">
        <p class="Covid__title">
          ГОСТЕВОЙ ДОМ «Valentina Guest House» , Абхазия
        </p>
        <div class="Covid__Flex">
          <div class="Covid__Img"></div>
          <div class="Covid__info">
            <p>
              Дорогие гости, <br />
              Безопасность и комфорт гостей и персонала – это приоритет нашей
              работы.
            </p>
            <p>
              Мы круглосуточно следим за тем, что Министерство здравоохранения
              Российской Федерации, Федеральная служба по надзору в сфере защиты
              прав потребителей и Всемирная организация здравоохранения сообщают
              о распространении нового типа коронавируса (COVID-19) и
              беспрекословно выполняем рекомендации этих организаций и местных
              органов здравоохранения.
            </p>
            <p>
              Мы искренне сочувствуем всем, кого коснулось это бедствие и с
              огромным уважением относимся к врачам, местным сообществам и
              правительствам, которые задействованы в прямой борьбе с
              распространением коронавируса.
            </p>
          </div>
        </div>
      </div>
      <div class="comment__Slider">
        <p class="slider__title">ОТЗЫВЫ О НАС</p>
        <slider class="slider__body" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/app/Slider/Slider.vue";
import infoList from "../Layouts/InfoList.vue";
import SliderCardsMedia from "../components/app/Slider/SliderCardsMedia";

export default {
  name: "Home",
  data() {
    return {
      form: {
      dataArrival: '',
      dataDeparture: '',
      numPeople: '',
      },
      displayFilter: true,
      
    }
  },
  
  components: {
    infoList,
    Slider,
    SliderCardsMedia,
  },
 methods: {
    sendForm() {
      
      // this.$refs.form.submit()
      fetch("http://localhost:3000/input",{
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form) 
        }
      ).then(
        function(response) {
          console.log('Ответ сервера', response);
        },
        function(error) {
          console.error(error);
        }
      );
      this.$emit('postFilter', this.displayFilter)
      this.$router.push('/Rooms&Prices')

    }
 }
};
</script>
