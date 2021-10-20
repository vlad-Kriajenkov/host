<template>
    <div>
        <GmapMap
        :center='center'
        :zoom='12'
        style='width:162px;  height: 118px;'
        />
    </div>
</template>

<script>
export default {
    name: 'GoogleMap',
    data() {
        return {
            center: { lat: 43.3810255, lng: 40.0543392 },
        }
    },
    
}
</script>