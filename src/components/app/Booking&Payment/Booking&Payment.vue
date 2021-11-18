<template>
    <div class="Booking__container">
        <img  class="Booking__imgStep" src="../../../assets/img/Booking&Payment/step.svg" alt="step">
        <div class="imgStep__title">
            <p class="title__textImgStepNum">Номер и Цена</p>
            <p class="title__textImgStepBooking">Бронь и Оплата</p>
            <p class="title__textImgStepСonfirmation">Подтверждение</p>
        </div>
        <div class=" Booking__form">
            <div class="form__title">
                <p class="title__textTitleform">Valentina</p>
                <p class="title__textTitleform">Guest House</p>
            </div>
            <div class="Booking__WidthContainer">    
                <div class="Boking__GestContainer">
                    <div class="ButtonPhonePosition">
                        <router-link 
                        to="/Rooms-Prices"
                        >
                            <button class="ButtonPhoneBack"></button>
                        </router-link>
                        
                    </div>
                    <div class="GestContainer__infoPay_flex" >
                        <p class="infoPay__textRum">2-х местный</p>
                        <p class="infoPay__textPrice">2 996,00 руб</p>
                    </div>
                    <div class="GestContainer__selectRoomInfo">
                        <select class="selectRoomInfo__numRooms">
                            <option value="">Количество номеров</option>
                            <option value="">Один номер</option>
                        </select>
                        <select class="selectRoomInfo__numRooms">
                            <option value="">2 взрослых</option>
                            <option value="">4 взрослых</option>
                        </select>
                        <select class="selectRoomInfo__numRooms">
                            <option value="">2 гостя</option>
                            <option value="">4 гостя</option>
                        </select>
                    </div>
                    <div class="GestContainer__InfoGest">
                        <p class="InfoGest__title">Информация о госте</p>
                        <div class="InfoGest__InfoGestForm">
                            <form  @submit.prevent="">
                                <div class="InfoGestForm__Flex">
                                    <div class="InfoGestForm__general">
                                        <input type="text" name="Surname" id="generalInp" placeholder="Фамилия">
                                        <input type="text" name="Name" id="generalInp" placeholder="Имя">
                                        <input type="text" name="MiddleName" id="generalInp" placeholder="Отчество">
                                        <input type="email" name="E-mail" id="generalInp" placeholder="E-mail">
                                        <input type="tel" name="HomePhone" id="generalInp" placeholder="Домашний телефон">
                                        <input type="tel"  name="MobilePhone" id="generalInp" placeholder="Мобильный телефон">
                                        <input type="text" name="Town" id="generalInp" placeholder="Город">
                                    </div>
                                    <div class="InfoGestForm__particular">
                                        <textarea name="particular" id="" cols="30" rows="10" class="generalParticular" placeholder="Особые пожелания"></textarea>
                                        <!-- <textarea type="text" name="particular" id="generalParticular" placeholder="Особые пожелания"> -->
                                    </div>
                                </div>
                                <label class="LabelText">
                                            <input type="checkbox" name="PayLater" id="generalPayLater">
                                            Оплатить позже
                                </label>
                                <div class="InfoGestForm__ButtonSub">
                                    <input type="submit"  value="Отправить" class="ButtonSub__ButtonSt">
                                    <p class="ButtonSub__Text">Нажмите отправить, что бы</p>
                                    <p class="ButtonSub__Text">получить сведения об оплате </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>   
            <div class="GestContainer__InfoPayContainer">
                <div class="InfoPayContainer__widthCon">
                 
                    <div class="InfoPay__title">
                        <p class="titleText">Сведения об оплате</p>
                    </div>
                    <div class="InfoPay__InfoAllReserve">
                        <div class="InfoPay__infoGeneral">
                            <div class="infoGeneral__box">
                                <p class="ConteinerGeneral__name">Ваше полное имя:</p>
                                <p class="ConteinerGeneral__body">Шикуть Максим Викторович</p>
                            </div>
                             <div class="infoGeneral__box" >
                                <p class="ConteinerGeneral__name">Email:</p>
                                <p class="ConteinerGeneral__body">maxim.shykuts@gmail.com</p>
                            </div>
                            <div class="infoGeneral__box" >
                                <p class="ConteinerGeneral__name">Мобильный телефон:</p>
                                <p class="ConteinerGeneral__body">+38-066-324-22-43</p>
                            </div>
                             <div class="infoGeneral__box" >
                                <p class="ConteinerGeneral__name">Заезд:</p>
                                <p class="ConteinerGeneral__body">05-04-2021</p>
                            </div>
                            <div class="infoGeneral__box">
                                <p class="ConteinerGeneral__name">Выезд:</p>
                                <p class="ConteinerGeneral__body">07-04-2021</p>
                            </div>
                             <div class="infoGeneral__box" >
                                <p class="ConteinerGeneral__name">Способ оплаты:</p>
                                <p class="ConteinerGeneral__body">Оплатить позже</p>
                            </div>
                        </div>
                        <div class="InfoPayFinal__FinalPayInfo">
                            <div class="FinalPayInfo__titleFinal"> 
                                <p class="titleFinal__widthText">2-x местный</p>
                                <p class="titleFinal__widthText widthTextpositionRight">2 ночи</p>
                                <p class="titleFinal__widthText">2 996,00 руб</p>
                            </div>
                            <div class="FinalPayInfo__bodyFinal" >
                                <div class="bodyFinal__emptiness"></div>
                                <div class="bodyFinal__flexConatiner">
                                    <div class="bodyFinal__flex">
                                        <p class="bodyFinal__Name">Итого цена за номер</p>
                                        <p class="bodyFinal__Price">2 996,00 руб</p>
                                    </div>
                                    <div class="bodyFinal__flex">
                                        <p class="bodyFinal__Name">Общая сумма</p>
                                        <p class="bodyFinal__Price">2 996,00 руб</p>
                                    </div>
                                    <div class="bodyFinal__flex">
                                        <p class="bodyFinal__Name">Размер депозита</p>
                                        <p class="bodyFinal__Price">898,80 руб</p>
                                    </div>
                                    <div class="bodyFinal__flex">
                                        <p class="bodyFinal__Name">Сумма к оплате</p>
                                        <p class="bodyFinal__Price">2 097,20 руб</p>
                                    </div>
                                </div>    
                            </div>
                        </div>

                    </div>

                    <form class="FinalPayInfo__CheckRules">
                        <label class="CheckRules__RulesBooking">
                            <input type="checkbox" name="" id="CheckBoxRulesBooking">
                            Я согласен с <a href="#" id="LinkRulesBooking">Правилами бронирования</a>  и <a href="#" id="LinkRulesBooking">Политикой конфиденциальности</a> 
                        </label>
                        <input type="submit" value="Завершить" id="buttonRulesBooking">
                        <p class="buttonRulesBooking__Text">Пожалуйста, ознакомьтесь с деталями бронирования и нажмите на кнопку рядом, чтобы завершить.
                        На указанный вами почтовый адрес будет выслано подтверждение</p>
                    </form>
                </div>
            </div>         
        </div>
    </div>
</template>

<script>
export default {
    name:'BookingAndPayment'
    
}
</script>