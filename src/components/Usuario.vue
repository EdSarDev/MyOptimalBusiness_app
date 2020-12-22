<template>
    <div>
        <h3>v-if="user" Bienvenido {{user.nombre}}{{user.apellido}}</h3>
        <h3>v-else="!user"No ha podido realizarse la autenticación</h3>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Usuario',
    data(){
        return{
            user:null
        }
    },
}
</script>