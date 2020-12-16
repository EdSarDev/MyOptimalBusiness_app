import Vue from 'vue'
import vueRouter from 'vue-router'

import InicioSesion from '../components/InicioSesion'
import Cliente from '../components/Cliente'
import CrearUsuario from '../components/CrearUsuario'
import App from '../App'


const router=new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "root",
      component: App
    },
    {
      path:'/InicioSesion',
      name:"InicioSesion",
      component: InicioSesion
    },
    {
      path:'/Cliente',
      name:"Cliente",
      component: Cliente
    },
    {
      path:'/CrearUsuario',
      name:'CrearUsuario',
      component: CrearUsuario
    },
  ]
})
export default router