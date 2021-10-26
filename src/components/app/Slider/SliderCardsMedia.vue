<template>
    <div>
        <VueSlickCarousel>
            <template  v-for="(product, index) in products">
             <InfoCards
                :key="index"
                :title="product.title"
                :imgUrl="product.imgUrl" 
                :info1="product.info1"
                :info2="product.info2"
                :info3="product.info3"
                :info4="product.info4"
                :info5="product.info5"
                :info6="product.info6"
                />
        </template>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import InfoCards from '../InfoCards'

export default {
    name:"SliderCardsMedia",
    components: { VueSlickCarousel, InfoCards },
    data() {
        return {
            settings:{
                "dots": false,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 2
            },
              products: [
                {
                    imgUrl: require('../../../assets/img/Cards-Rooms/doubleRoom.jpg'),
                    title: '2-x местный',
                    info1: '-Площадь номера: 11 м2',
                    info2: '-1 двуспальная кровать или 2 односпальные кровати',
                    info3: '-Кондиционер',
                    info4: '-Интернет',
                    info5: '-Телевизор',
                },  
                {
                    imgUrl: require('../../../assets/img/Cards-Rooms/Famaly.svg'),
                    title: 'Семейный',
                    info1: '-Площадь номера: 18 м2',
                    info2: '-1 двуспальная кровать или 1 односпальная кровать',
                    info3: '-Кондиционер',
                    info4: '-Интернет',
                    info5: '-Телевизор',
                },  
                {
                    imgUrl: require('../../../assets/img/Cards-Rooms/delux.svg'),
                    title: 'Deluxe',
                    info1: '-Площадь номера: 30 м2',
                    info2: '-1 двуспальная кровать или 1 раскладной диван',
                    info3: '-Кондиционер',
                    info4: '-Интернет',
                    info5: '-Телевизор',
                    info6: '-2 комнаты',
                }, 
                {
                    imgUrl: require('../../../assets/img/Cards-Rooms/deluxPlus.svg'),
                    title: 'Deluxe Plus',
                    info1: '-Площадь номера: 11 м2',
                    info2: '-1 двуспальная кровать или 2 односпальные кровати',
                    info3: '-Кондиционер',
                    info4: '-Интернет',
                    info5: '-Телевизор',
                    info6: '-3 комнаты',
                },
                
                
            ]
            
        }
     }
}
</script>