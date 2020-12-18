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
        <div>
            <label> Identificación del cliente </label>
            <p> {{idCliente}} </p>
            <label> Nombre del cliente </label>
            <p> {{nomCliente}} </p>
            <label> Apellido del cliente </label>
            <p> {{apCliente}} </p>
            <label> Email </label>
            <p> {{emCliente}} </p>
            <label> Celular </label>
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
                axios.get("http://127.0.0.1:8000/client/"+this.client_in.client_id)

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