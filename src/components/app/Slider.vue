<template>
  <div>
    <VueSlickCarousel class="container__Slick">
      <div>
            <div class="imgBack"></div>
            <p>{{messeg.messeg1}}</p>
            <h1>{{messeg.name}}</h1>
            <img class="slider__PeopleImg" src="../../assets/img/Home/ImgPeople.svg" alt="">
      </div>
      <div>
            <div class="imgBack"></div>
            <p>{{messeg.messeg1}}</p>
            <h1>{{messeg.name}}</h1>
            <img class="slider__PeopleImg" src="../../assets/img/Home/ImgPeople.svg" alt="">
        </div>
        <div>
            <div class="imgBack"></div>
            <p>{{messeg.messeg1}}</p> 
            <h1>{{messeg.name}}</h1>
            <img class="slider__PeopleImg" src="../../assets/img/Home/ImgPeople.svg" alt="">
        </div>
        <div>
            <div class="imgBack"></div>
            <p>{{messeg.messeg1}}</p>
            <h1>{{messeg.name}}</h1>
            <img class="slider__PeopleImg" src="../../assets/img/Home/ImgPeople.svg" alt="">
        </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
//   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
        return {
            // image: require('/src/assets/img/Home/backGrouMesseg.svg'),
            settings:{
                "dots": false,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 2
            },
            messeg:{
                messeg1:'Все было прекрасно! Отличный номер, уютный и комфортный; в номере чисто, все в рабочем состоянии!',
                name: 'Vera',
            }   
        }
     }
  }
</script> 

<style scoped>
.imgBack{
  content:url('../../assets/img/Home/backGrouMesseg.svg');
  width: 87.5%;
}
</style>