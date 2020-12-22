<template>
    <div id="crearProducto">
        <div class="block"> 
            <div class="col-md-4"></div>
            <div class="col-md-4 m-auto bg-muted text-light p-1">
                <h2 class="text-center tipoh1">Crear producto</h2>
                
                <form v-on:submit.prevent="createProduct">
                    <div class="form-group">
                        <label for="id"> <strong>Id Producto </strong></label>
                        <input type="number" v-model="product_in.product_id" class="form-control" id="product_id" name="product_id" required placeholder="Id">
                    </div>
                    <div class="form-group">
                        <label for="nombre"><strong>Nombre del producto</strong></label>
                        <input type="text" v-model="product_in.nombre_producto" class="form-control" id="nombre_producto" name="nombre_producto" required placeholder="Ingrese el nombre del producto">
                    </div>
                    <div class="form-group">
                        <label for="apellido"><strong>Tipo del producto</strong></label>
                        <input type="text" v-model="product_in.tipo_producto" class="form-control" id="tipo_producto" name="tipo_producto" required placeholder="Ingrese el tipo del producto">
                    </div>
                    <div class="form-group">
                        <label for="valor_compra"><strong>Valor compra</strong></label>
                        <input type="number" v-model="product_in.valor_compra" class="form-control" id="valor_compra" name="valor_compra" required placeholder="Ingrese valor de compra del producto">
                    </div>
                    <div class="form-group">
                        <label for="valor_venta"><strong>Valor venta</strong></label>
                        <input type="number" v-model="product_in.valor_venta" class="form-control" id="valor_venta" name="valor_venta" required placeholder="Ingrese valor de venta del producto">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-info">Crear producto</button>
                    </div>
                </form>
            <h3 class="text-center py-4"> {{respuesta}}</h3>
                
            </div>
            <div class="col-md-4"></div>      
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "./CrearProducto",
        data: function() {
            return {
                product_in: {
                product_id:0,
                nombre_producto: "",
                tipo_producto: "",
                valor_compra: 0,
                valor_venta: 0,
                },
                respuesta:"Complete la información"
            }
        },
        methods: {

            createProduct: function() {
                var self=this
                axios.post("https://myoptimalbusiness-api.herokuapp.com/product/create/",self.product_in, {headers: {}})
                    .then((result) => {
                        if (Number.parseInt(self.product_in.product_id) === result.data.product_id){
                            this.respuesta = "Se ha creado el producto: " + this.product_in.nombre_producto;

                        }else{
                            this.respuesta = "No se pudo crear cliente";
                        }
                    })
                    .catch((error) => {
                        if (Number.parseInt(error.response.status) === 422){
                            this.respuesta = "El producto ya existe";
                        }else{
                            this.respuesta="Se ha producido un error";
                        }  
                    })
            }
        },        

    }
</script>

<style scoped>
    .block {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;   
        }
</style>
