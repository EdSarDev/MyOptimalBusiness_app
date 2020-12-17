<template>
    <div id="InicioSesion">
        <div class="block"> 
            <div class="col-md-4"></div>
            <div class="col-md-4 m-auto bg-muted text-light p-1">
                <h2 class="text-center tipoh1">¡Bienvenido(a) a {nombre_empresa}</h2>
                <h4 class="text-center tipoh1">Inicia Sesión para continuar</h4>
                
                <form v-on:submit.prevent="processAuthUser">
                    <div class="form-group">
                        <label for="username"> <strong>Login</strong></label>
                        <input type="login" v-model="user_in.username" class="form-control" id="login" name="login" required placeholder="Login">
                    </div>
                    <div class="form-group">
                        <label for="password"><strong>Contraseña</strong></label>
                        <input type="password" v-model="user_in.password" class="form-control" id="contrasena" name="contrasena" required placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-info">Continuar</button>
                </form>
                
                <h3> {{salida}}</h3>

            </div>
            <div class="col-md-4"></div>      
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "./InicioSesion",
        data: function() {
            return {
                user_in: {
                username: "",
                password: "",
                },
                salida:"Esperando autenticación"
            }
        },
        methods: {

            processAuthUser:function(){
                var self=this
                axios.post("https://myoptimalbusiness-api.herokuapp.com/user/auth/",self.user_in, {headers: {}})

                    .then((result) => {
                        if (result.data.Autenticado){
                            this.salida = "Autorización exitosa";
                            self.$emit('log-in', self.user_in.username)
                            this.$router.push({name:"MenuOpciones"})
                            //this.$router.push({name:"CrearUsuario"})

                        }else{
                            this.salida = "Autorización fallida";
                        }
                    })

                    .catch((error) => {
                        this.salida="Se ha producido un error";
                    })
            }
        },
        created:function(){
            this.login=this.$route.params.login
        }
        

    }
</script>

<style scoped>
    .block{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #InicioSesion{
        background-image: url('../assets/fondo.jpg');
        background-position: center center;	  
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    #InicioSesion:before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.267);
    }

</style>