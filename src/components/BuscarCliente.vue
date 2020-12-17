<template>
    <div>
        <div>
            <h3>Búsqueda de cliente </h3>
        </div>

        <div>
            <label for="id_cliente"> Ingrese el id del cliente  </label>
            <input type="text" v-model="client_in.client_id" required placeholder="IdCliente">
            <input type="button" v-on:click="bringClientData" value="Buscar cliente">
        </div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "./InicioSesion",
        data: function() {
            return {
                client_in: {
                client_id: 0,
                nombre:"",
                apellido:"",
                email:"",
                celular:0,
                },
            }
        },
        methods: {

            bringClientData:function(){
                var self=this
                axios.get("/client/{client_id}}/",self.client_in.client_id, {headers: {}})

                    .then((result) => {
                        
                    })

                    .catch((error) => {
                        this.salida="No se ha encontrado el usuario";
                    })
            }
        },
        created:function(){
            this.login=this.$route.params.login
        }
        

    }
</script>