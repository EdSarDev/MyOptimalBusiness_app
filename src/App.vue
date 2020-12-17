<template>

<body>
  <div class="container-fluid p-0 fondo" id="app">

    <div class="header">
    </div>
    

      <div class="main-component">
        <router-view v-on:log-in="logIn" ></router-view>
    </div>

    <div class="row p-3 fixed-bottom">
      <div class="col-md-12">
        <div class="row bt-2">
          <div class="col-md-12 text-center text-white border-top mt-2 p-1 border-white">
            <img src="./assets/logo1.png" width="130" height="38">
            <strong> | My Optimal Business Inc. | </strong> Derechos reservados
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
  
</template>

<script>
import vueRouter from 'vue-router'
export default {
  name: 'App',
  data: function(){
      return{
      is_auth: localStorage.getItem('isAuth') || false
      }
  },
  updateAuth: function(){
    var self = this
    self.is_auth = localStorage.getItem('isAuth') || false
    if(self.is_auth == false)
      self.$router.push({name: "InicioSesion"})
    else{
      let username = localStorage.getItem("current_username")
      self.$router.push({name: "user", params:{ username: username }})
    }
  },
  logIn: function(username){
    localStorage.setItem('current_username', username)
    localStorage.setItem('isAuth', true)
    this.updateAuth()
  },
  logOut: function(){
    localStorage.removeItem('isAuth')
    localStorage.removeItem('current_username')
    this.updateAuth()
  },

  components: {},
  created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');  

  .tipoh1 {
    font-family: 'Roboto', serif;
    font-weight: 700;
  } 

  .fondo{
    background-image: url('./assets/fondo.jpg');
    background-position: center center;	  
    background-size: cover;
    width: 100%;
    height: 100%;
  }
      
</style>
