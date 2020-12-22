<template>
    <div class="text-light container">
        <div>
<<<<<<< HEAD
            <h3 class="py-3">Búsqueda de Producto: </h3>
        </div>

        <div class="container py-2 my-2">
            
            <label class="m-0" for="id"> Ingrese el ID del producto  </label>
            <input class= "mx-2" type="text" v-model="producto_in.id" required placeholder="IdProducto">
            <input class="btn btn-info" type="button" v-on:click="bringProductData" value="Buscar">

        </div>

        <div class="container py-2">

            <table class="table text-light">
=======
            <h3>Búsqueda de Producto: </h3>
        </div>

        <div class="container">
            <form>
                <div class="input-group">
                    <label for="id"> Ingrese el ID del producto  </label>
                    <input type="text" v-model="producto_in.id" required placeholder="IdProducto">
                    <input class="btn btn-info" type="button" v-on:click="bringProductData" value="Buscar">
                </div>  
            </form>
        </div>
        <div class="container text-light">

            <table class="table">
>>>>>>> b51ffb13159a1a1ac6e2bcb25b4fb15e354dc2c8
                <thead>
                    <tr>
                        <th scope="col">Info Producto</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Id producto</td>
                        <td scope="row">{{idProducto}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Nombre producto</td>
                        <td scope="row">{{nombreProducto}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Tipo producto</td>
                        <td scope="row">{{tipoProducto}}</td>
                    </tr>
                    <tr>
<<<<<<< HEAD
                        <td scope="row">Valor venta</td>
=======
                        <td scope="row">Valos venta</td>
>>>>>>> b51ffb13159a1a1ac6e2bcb25b4fb15e354dc2c8
                        <td scope="row">{{ventaProducto}}</td>
                    </tr>
                </tbody>
            </table>

        </div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "./BuscarProducto",
        data: function() {
            return {
                producto_in: {
                    id: 0,
                },
                idProducto:"",
                nombreProducto:"",
                tipoProducto:"",
                ventaProducto:"",
            }
        },
        methods: {

            bringProductData: function() {
                var self=this
                axios.get("https://myoptimalbusiness-api.herokuapp.com/product/"+this.producto_in.id)

                    .then((result) => {
                        this.idProducto = result.data.product_id
                        this.nombreProducto = result.data.nombre_producto
                        this.tipoProducto = result.data.tipo_producto
                        this.ventaProducto = result.data.valor_venta
                    })

                    .catch((error) => {
                        this.salida="No se ha encontrado el producto";
                    })
            }
        },
        created:function(){
            this.login=this.$route.params.login
        }
    }
</script>
