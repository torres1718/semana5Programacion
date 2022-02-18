<template>
    <div class="tiempo" :style="{'background-image':'url(https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'background-size':'cover', 'height':'800px', 'width':'1550px', display}">
        <h2>Conversor de Tiempo</h2>
        <tiempo/>
    </div>
</template>
<script>
import Tiempo from '@/components/Tiempo.vue'
export default {
    name: 'Tiem',
    components: {
        Tiempo
    }
}
</script>