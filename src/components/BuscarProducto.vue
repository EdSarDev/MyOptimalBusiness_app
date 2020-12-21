<template>
    <div class="text-light container">
        <div>
            <h3>Búsqueda de cliente: </h3>
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
        <div class="container">

            <table class="table">
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
                        <td scope="row">Valos venta</td>
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
                        this.idProducto = result.data.producto_id
                        this.nombreProducto = result.data.nombre_producto
                        this.tipo_producto = result.data.tipo_producto
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
