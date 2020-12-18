<template>
    <div class="text-light container">
        <div>
            <h3>Búsqueda de cliente </h3>
        </div>

        <div class="container">
            <label for="id_cliente"> Ingrese el id del cliente  </label>
            <input type="text" v-model="client_in.client_id" required placeholder="IdCliente">
            <input type="button" v-on:click="bringClientData" value="Buscar cliente">
        </div>
        <div class="container">
            <h3> Identificación del cliente </h3>
            <p> {{idCliente}} </p>
            <h3> Nombre del cliente </h3>
            <p> {{nomCliente}} </p>
            <h3> Apellido del cliente </h3>
            <p> {{apCliente}} </p>
            <h3> Email </h3>
            <p> {{emCliente}} </p>
            <h3> Celular </h3>
            <p> {{ceCliente}} </p>

        </div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "./BuscarCliente",
        data: function() {
            return {
                client_in: {
                client_id: 0,
                nombre:"",
                apellido:"",
                email:"",
                celular:0,
                },
                idCliente:"",
                nomCliente:"",
                apCliente:"",
                emCliente:"",
                ceCliente:"",

            }
        },
        methods: {

            bringClientData:function(){
                var self=this
                axios.get("https://myoptimalbusiness-api.herokuapp.com/client/"+this.client_in.client_id)

                    .then((result) => {
                        self.client_in.client_id=result.data.client_id
                        this.idCliente=self.client_in.client_id
                        self.client_in.nombre=result.data.nombre
                        this.nomCliente=self.client_in.nombre
                        self.client_in.apellido=result.data.apellido
                        this.apCliente=self.client_in.apellido
                        console.log(self.client_in.email)
                        self.client_in.email=result.data.email
                        this.emCliente=self.client_in.email
                        self.client_in.celular=result.data.celular
                        this.ceCliente=self.client_in.celular
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
