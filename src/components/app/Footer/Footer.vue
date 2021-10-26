<template>
    <div class="footer">
        <div class="footer__Widch ">
            <div class="flex">
                <div class="footer__Maps">
                    <p class="title">Геолокация</p>
                    <google-map
                    /> 
                </div>
                <div class="footer__Contact">
                    <p class="title">Контакты</p>
                    <div class=" footer__container">
                        <div class="container__Phone">
                            <img src="../../../assets/img/Footer/phone.svg" alt="phone">
                            <p class="textStyle">8 (862) 279-56-89</p>
                        </div>
                        <div class="container__Countri">
                            <img src="../../../assets/img/Footer/countri.svg" alt="countri">
                            <p class="textStyle">Абхазия, Цандрыпш</p>
                        </div>
                        <div class="container__street">
                            <img src="../../../assets/img/Footer/street.svg" alt="street">
                            <p class="textStyle">ул.Октябрьская, д.492</p>
                        </div>
                        <div class="container__Gmail">
                            <img src="../../../assets/img/Footer/gmail.svg" alt="gmail ">
                            <p class="textStyle">booking@valentinahouse.ru</p>
                        </div>
                    </div>
                </div>   
                <div class="footer__Info">
                    <p class="title">Информация</p>
                    <p class="textStyle">Заезд: с 16:00</p>
                    <p class="textStyle">Выезд: до 12:00</p>
                    <p class="textStyle">Бесплатный WI-FI</p>
                    <p class="textStyle">Бесплатная парковка</p>
                    <a class="textStyle linkStyle" href="">О нас</a><br>
                    <a class="textStyle linkStyle" href="">Условия бронирования</a><br>
                    <a class="textStyle linkStyle" href="">Политика конфиденциальности</a><br>
                </div>   
                <div class="footer__weather">
                    <p class="title">Погода</p>
                    <a target="_blank" href="https://nochi.com/weather/tsandrypsh-322950"><img src="https://w.bookcdn.com/weather/picture/21_322950_1_20_ecf0f1_250_bdc3c7_9da2a6_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=604&anc_id=91806"  alt="booked.net"/></a>
                    <div class="social__img">
                        <a href="" class="img__style"><img src="../../../assets/img/Footer/facebook.svg" alt="facebook"></a>
                        <a href="" class="img__style"><img src="../../../assets/img/Footer/vk.svg" alt="vk"></a>
                        <a href="" class="img__style"><img src="../../../assets/img/Footer/Instagram.svg" alt="Instagram"></a>
                        <a href="" class="img__style"><img src="../../../assets/img/Footer/telegram.svg" alt="telegram"></a>
                        <a href="" class="img__style"><img src="../../../assets/img/Footer/viber.svg" alt="viber"></a>

                       
                        
                        
                       
                        
                    </div>
                </div>     
            </div>
        </div>
        <div class="logo">
            <p class="logo__Style">© 2015–2021 – VALENTINA GUEST HOUSE</p>
        </div>
    </div>
</template>

<script>
import GoogleMap from '../GoogleMap.vue'
export default {
    components: { GoogleMap },
    
    
}
</script>

