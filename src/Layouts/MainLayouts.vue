<template>
    <div>
        <NavBar/>
        <main >
            <router-view
            @postFilter="getFilter"
            :filterChek='filterChek'
            />
        </main>
        <Footer/>
    </div>
</template>


<script>
import NavBar from '../components/app/Header/NavBar'
import Footer from '../components/app/Footer/Footer'
export default {
    name: 'main-layouts',
    data(){
        return{
            filterChek:'',
        }
    },
    components:{
        NavBar,Footer
    },
    
    methods:{
        getFilter(data){
            this.filterChek = data
            
        }
    }
}
</script>