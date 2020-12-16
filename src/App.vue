<template>
<body>
  <div class="container-fluid p-0" id="app">

    <div class="header">
    </div>
    
    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="row p-3 fixed-bottom">
      <div class="col-md-12">
        <div class="row bt-2">
          <div class="col-md-12 text-center text-white border-top mt-2 p-1 border-white">
            <img src="/assets/Logo_MOB_H.png" alt=""><strong>My Optimal Business, Inc.</strong> Derechos Reservados
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
  
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');  

  .tipoh1 {
    font-family: 'Roboto', serif;
    font-weight: 700;
  } 
      
</style>
