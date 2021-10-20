<template>  
    <div class="rum__card">
        <img width="389.59px" height="194.79px" loading="lazy" class="imgInfoCards" :src="imgUrl"/>
        <div class="info__card">
            <h2>{{title}}</h2>
            <ul>
                <li>{{info1}}</li>
                <li>{{info2}}</li>
                <li>{{info3}}</li>
                <li>{{info4}}</li>
                <li>{{info5}}</li> 
                <li>{{info6}}</li>
            </ul>
            <button>Подробнее</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'infoCards',
    props:['imgUrl','title','info1','info2','info3','info4','info5','info6', ],
}
</script>

<style scoped>

</style>