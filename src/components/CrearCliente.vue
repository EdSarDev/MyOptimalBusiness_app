<template>
    <div id="InicioSesion">
        <div class="block"> 
            <div class="col-md-4"></div>
            <div class="col-md-4 m-auto bg-muted text-light p-1">
                <h2 class="text-center tipoh1">Crear cliente</h2>
                
                <form v-on:submit.prevent="createClient">
                    <div class="form-group">
                        <label for="client_id"> <strong>Identificación (CC/RUT) </strong></label>
                        <input type="number" v-model="client_in.client_id" class="form-control" id="client_id" name="client_id" required placeholder="Identificación">
                    </div>
                    <div class="form-group">
                        <label for="nombre"><strong>Nombre del cliente</strong></label>
                        <input type="text" v-model="client_in.nombre" class="form-control" id="nombre" name="nombre" required placeholder="Ingrese el nombre del cliente">
                    </div>
                    <div class="form-group">
                        <label for="apellido"><strong>Apellido del cliente</strong></label>
                        <input type="text" v-model="client_in.apellido" class="form-control" id="apellido" name="apellido" required placeholder="Ingrese el apellido del cliente">
                    </div>
                    <div class="form-group">
                        <label for="email"><strong>Email válido</strong></label>
                        <input type="email" v-model="client_in.email" class="form-control" id="email" name="email" required placeholder="Ingrese el email del cliente">
                    </div>
                    <div class="form-group">
                        <label for="celular"><strong>Teléfono celular del cliente</strong></label>
                        <input type="number" v-model="client_in.celular" class="form-control" id="celular" name="celular" required placeholder="Ingrese número de celular">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-info">Crear cliente</button>
                    </div>
                </form>
            <h3 class="text-center"> {{respuesta}}</h3>
                
            </div>
            <div class="col-md-4"></div>      
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "./CrearCliente",
        data: function() {
            return {
                client_in: {
                client_id:0,
                nombre: "",
                apellido: "",
                email:"",
                celular:0,
                },
                respuesta:"Complete la información"
            }
        },
        methods: {

            createClient:function(){
                var self=this
                axios.post("https://myoptimalbusiness-api.herokuapp.com/client/create/",self.client_in, {headers: {}})
                    .then((result) => {

                        if (Number.parseInt(self.client_in.client_id)===result.data.client_id){
                            this.respuesta = "Se ha creado cliente: "+" "+this.client_in.nombre+" "+this.client_in.apellido;

                        }else{
                            this.respuesta = "No se pudo crear cliente";
                        }
                    })
                    .catch((error) => {
                        if (Number.parseInt(error.response.status) == 422){
                            this.salida = "El cliente ya existe";
                        }else{
                            this.salida="Se ha producido un error";
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