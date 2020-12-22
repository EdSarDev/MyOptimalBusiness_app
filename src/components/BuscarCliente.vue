<template>
    <div class="text-light container">
        <div>
            <h3 class="py-3">Búsqueda de cliente: </h3>
        </div>

        <div class="container">
            <label class="m-0" for="id_cliente"> Ingrese el ID del cliente  </label>
            <input class= "mx-2" type="text" v-model="client_in.client_id" required placeholder="IdCliente">
            <input class="btn btn-info" type="button" v-on:click="bringClientData" value="Buscar">
        </div>
        <div class="container py-2">

            <table class="table text-light">
                <thead>
                    <tr>
                        <th scope="col">Info Cliente</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td scope="row">Identificación del cliente</td>
                        <td scope="row">{{idCliente}}</td>
                    </tr>
                    <tr>
                        <td scope="row"> Nombre del cliente </td>
                        <td scope="row">{{nomCliente}}</td>
                    </tr>
                    <tr>
                        <td scope="row"> Apellido del cliente </td>
                        <td scope="row">{{apCliente}}</td>
                    </tr>
                    <tr>
                        <td scope="row">Email</td>
                        <td scope="row">{{emCliente}}</td>
                    </tr>   
                    <tr>
                        <td scope="row">Celular </td>
                        <td scope="row">{{ceCliente}}</td>
                    </tr>     
                </tbody>
            </table>
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
