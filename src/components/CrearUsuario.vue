<template>
    <form @submit="handleSubmit">
        <h3>Crear usuario </h3>
        <div class="form-group">
            <label> username </label>
            <input type="text" class="form-control" v-model="nombre" placeholder="Nombre"/>
        </div>
            <div class="form-group">
            <label> Apellido </label>
            <input type="text" class="form-control" v-model="apellido" placeholder="Apellido"/>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>
        <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control" v-model="contrasena" placeholder="Contraseña"/>
            </div>
        <div class="form-group">
                    <label>Confirmar contraseña</label>
                    <input type="password" class="form-control" v-model="confirmacion_contrasena" placeholder="Confirmar contraseña"/>
        </div>
        <button class="btn btn-primary btn-clock">Registrar usuario </button>
    </form>
</template>

<script>

import axios from 'axios';

export default {
    name:'CrearUsuario',
    data:function(){
        return {
            username:"",
            nombres:"",
            email:"",
            rol:""
            
        }
    },

    methods:{

        async handleSubmit(){
            const data={
                nombre:this.nombre,
                apellido:this.apellido,
                email:this.email,
                contrasena:this.contrasena,
                confirmacion_contrasena:this.confirmacion_contrasena
            }
            console.log(data);
            const peticion= await axios.post('https://myoptimalbusiness-app.herokuapp.com/user/create',data)
                .then(
                    res=>{
                        console.log(err)
                    }
                ).catch(
                    err=>{
                        console.log(err)
                    }
                )
        console.log(peticion)}
    }
    
}
</script>