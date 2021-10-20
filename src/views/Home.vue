<template>
  <div class="container">
    <div class="container__Serch">
        <div class="serch__img">
          <img loading="lazy" src="../assets/img/Home/background.svg" alt="bg"  height="450px">
          <img class="img__vector" src="../assets/img/Home/Vector.svg" alt="vk">
        </div>
         <div class="serch__widch">
            <div class="serch__get">
              <p>Даты заезда</p>
              <input  id="datetime" type="datetime-local">
            </div>
            <div class="serch__set">
              <p>Даты выезда </p>
              <input  id="datetime" type="datetime-local">
            </div>
            <div class="serch__pipl">
              <p>Гостей</p>
              <input  id="datetime" type="number">
            </div>
            <button><p>Проверить</p></button>
          </div>
    </div>
    <div class="max_width">
      <div class="our__Rooms">
        <p class="rooms__title">Наши Номера</p>
        <infoList/>
      </div>
      <div class="media__rooms">
        <p class="rooms__titles">Наши Номера</p>
        <SliderCardsMedia/>
      </div>
      <div class="info__Covid">
        <p class="Covid__title">ГОСТЕВОЙ ДОМ «Valentina Guest House» , Абхазия </p>
        <div class="Covid__Flex">
          <div class="Covid__Img"></div>
          <div class="Covid__info">
             <p> Дорогие гости, <br>
                 Безопасность и комфорт гостей и персонала – это приоритет нашей работы.</p>
             <p> Мы круглосуточно следим за тем, что Министерство здравоохранения Российской Федерации,
              Федеральная служба по надзору в сфере защиты прав потребителей и Всемирная организация здравоохранения сообщают 
              о распространении нового типа коронавируса (COVID-19) и беспрекословно выполняем рекомендации этих организаций и местных органов здравоохранения. </p>
             <p> Мы искренне сочувствуем всем, кого коснулось это бедствие и с огромным уважением относимся к врачам, местным сообществам и правительствам, которые задействованы 
              в прямой борьбе с распространением коронавируса.</p> 
          </div>
        </div>
      </div>
      <div class="comment__Slider">
        <p class="slider__title">ОТЗЫВЫ О НАС</p>
        <slider class="slider__body"/>
        
        
        
      </div>
    </div>
  </div> 
</template>

<script>
import Slider from '../components/app/Slider.vue'
import infoList from '../Layouts/InfoList.vue'
import SliderCardsMedia from '../components/app/SliderCardsMedia'

export default {
  name: 'Home',
  components:{
    infoList,
    Slider,
    SliderCardsMedia
  }
 
}
</script>
