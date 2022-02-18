<template>
    <div class="moneda" :style="{'background-image':'url(https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'background-size':'cover', 'height':'800px', 'width':'1550px', display}">
        <h2>Conversor de Moneda</h2>
        <moneda/>
    </div>
</template>
<script>
import Moneda from '@/components/Moneda.vue'
export default {
    name: 'Mone',
    components: {
        Moneda
    }
}
</script>