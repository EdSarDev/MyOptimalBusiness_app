<template>
    <div>
        <header class="text-light">Usuario {{tipo_usuario}} </header>
        <nav>
            <input type="button" v-on:click="redirectToUserModule" value="Crear cliente">
            <input type="button" v-on:click="redirectToUserSearch" value="Buscar cliente">
            <input type="button" v-on:click="redirectToProductModule" value="Crear Producto">
            <input type="button" v-on:click="redirectToProductSearch" value="buscar producto">
        </nav>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "./MenuOpciones",
        data: function() {
            return {
            }
        },
        methods: {
            redirectToUserModule:function(){
                this.$router.push({name:"CrearCliente"})
            },
            redirectToUserSearch:function(){
                this.$router.push({name:"BuscarCliente"})
            },
            redirectToProductModule:function(){
                this.$router.push({name:"CrearProducto"})
            },
            redirectToProductSearch:function(){
                this.$router.push({name:"BuscarProducto"})
            },
        }, 
    }
</script>
