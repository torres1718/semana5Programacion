<template>
    <div class="mass" :style="{'background-image':'url(https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'background-size':'cover', 'height':'800px', 'width':'1550px', display}">
        <h2>Conversor de Masa</h2>
        <masa/>
    </div>
</template>
<script>
import Masa from '@/components/Masa.vue'
export default {
    name: 'Mas',
    components: {
        Masa
    }
}
</script>