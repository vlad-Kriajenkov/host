<template>
    <div class="containerNav">
        <div class="conatainer_Width">
            <div class="containerNav__header">
                <div class="header__strit">
                    <img src="../../assets/img/Nav/Home.svg" alt="Home">
                    <p>Абхазия, Цандрыпш, ул.Октябрьская, д.492</p>
                </div>
                <div class="header__info">
                    <div class="header__gmail">
                        <img src="../../assets/img/Nav/Messeg.svg" alt="Messeg">
                        <a href="">booking@valentinahouse.ru</a>
                    </div>
                    <div class="header__number">
                        <img src="../../assets/img/Nav/Phone.svg" alt="Phone">
                        <p>8 (862) 279-56-89</p>
                    </div>
                </div>
            </div>
            <div class="containerNav__burger"
            @click="button_active_state = !button_active_state"
            :class="{ '_active': button_active_state }"
            >
                <span></span>
            </div>
            <div class="containerNAv__footer">
                <div class="footer__Logo">
                    <p>Valentina </p>
                    <p>Guest House</p>
                </div>
                <nav class="footer__Nav"
                :class="{ '_active': button_active_state }"
                >
                    <router-link
                    
                    v-for="link in links"
                    :key="link.url"
                    tag="a"                    
                    :to="link.url"
                    class="Nav__link"
                    >
                        <a href="#" @click="button_active_state = !button_active_state" class="Nav__A">{{link.title}}</a><hr>
                    </router-link>
                
                   
                </nav>
                <div class="footer__social">
                    <a href=""><img src="../../assets/img/Nav/Telrgram.svg" alt="Telrgram"></a>
                    <a href=""><img src="../../assets/img/Nav/Viber.svg" alt="Viber"></a>
                    <a href=""><img src="../../assets/img/Nav/Facebook.svg" alt="Facebook"></a>
                    <a href=""><img src="../../assets/img/Nav/Vk.svg" alt="Vk"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    button_active_state: false,
    links: [
      {title: 'ГЛАВАНАЯ', url: '/'},
      {title: 'НОМЕРА И ЦЕНЫ', url: '/Rooms&Prices'},
    //   {title: 'СТАТЬИ', url: '/planning'},
    //   {title: 'ИНФОРМАЦИЯ', url: '/record'},
    //   {title: 'ПОЛНЫЙ ПАНСИОН', url: '/categories'}
    ]
  })
}
</script>