<template>
    <div class="container__Width" >
       <router-view
       :filterChek="filterChek"
       ></router-view>
    </div>
</template>

<script>
export default {
    name: 'roomsprices',
    props:['filterChek']
}
</script>