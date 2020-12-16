<template>
    <div id="InicioSesion">
        <div class="block"> 
            <div class="col-md-4"></div>
            <div class="col-md-4 m-auto bg-muted text-light p-1">
                <h2 class="text-center tipoh1">¡Bienvenido(a) a {nombre_empresa}</h2>
                <h4 class="text-center tipoh1">Inicia Sesión para continuar</h4>
                <form action>
                    <div class="form-group">
                        <label for="login"> <strong>Login</strong></label>
                        <input v-model="login" type="login" class="form-control" id="login" name="login" required placeholder="Login">
                    </div>
                    <div class="form-group">
                        <label for="contrasena"><strong>Contraseña</strong></label>
                        <input v-model="contrasena" type="password" class="form-control" id="contrasena" name="contrasena" required placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-info">Continuar</button>
                </form>
            </div>
            <div class="col-md-4"></div>      
        </div>
    </div>
</template>

<script>
    import auth from "@/logic/auth";
    export default {
        name: 'InicioSesion',
        components: {},
        data: () => ({
            login: "",
            contrasena: ""
        }),

        methods: {
            async login() {
                try {
                    await auth.login(this.login, this.contrasena);
                    this.$router.push("/");
                } catch (error) {
                    this.error = true;
                }
            }
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