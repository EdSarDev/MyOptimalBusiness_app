<template>
<<<<<<< HEAD
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand text-light font-weight-bold" href="#">My Optimal Business</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#barra" aria-controls="barra" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="barra">
                
                <ul class="navbar-nav">
                <li class="nav-item mx-2">
                    <a class="btn btn-info" v-on:click="redirectToUserModule">Crear Cliente</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="btn btn-info" v-on:click="redirectToUserSearch">Buscar cliente</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="btn btn-info" v-on:click="redirectToProductModule">Crear Producto</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="btn btn-info" v-on:click="redirectToProductSearch">Buscar producto</a>
                </li>
                </ul>
            </div>   
=======
    <div>
        <header class="text-light">Usuario {{tipo_usuario}} </header>
        <nav>
            <input type="button" v-on:click="redirectToUserModule" value="Crear cliente">
            <input type="button" v-on:click="redirectToUserSearch" value="Buscar cliente">
            <input type="button" v-on:click="redirectToProductModule" value="Crear Producto">
            <input type="button" v-on:click="redirectToProductSearch" value="buscar producto">
>>>>>>> b51ffb13159a1a1ac6e2bcb25b4fb15e354dc2c8
        </nav>
        <div class="container">

        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "MenuOpciones",
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
