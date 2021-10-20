<template>
    <div>
        <NavBar/>
        <main>
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>


<script>
import NavBar from '../components/app/NavBar'
import Footer from '../components/app/Footer'
export default {
    name: 'main-layouts',
    components:{
        NavBar,Footer
    }
}
</script>