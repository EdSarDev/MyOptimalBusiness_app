import Vue from 'vue'
import vueRouter from 'vue-router'

import InicioSesion from '../components/InicioSesion'
import MenuOpciones from '../components/MenuOpciones'
import CrearCliente from '../components/CrearCliente'
import BuscarCliente from '../components/BuscarCliente'
import CrearUsuario from '../components/CrearUsuario'
import App from '../App'


const router=new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "root",
      component:InicioSesion //TODO App
    },
    {
      path:'/InicioSesion',
      name:"InicioSesion",
      component: InicioSesion
    },
    {
      path:'/MenuOpciones',
      name:'MenuOpciones',
      component: MenuOpciones
    },
    {
      path:'/CrearCliente',
      name:"CrearCliente",
      component: CrearCliente
    },
    {
      path:'/BuscarCliente',
      name:"BuscarCliente",
      component: BuscarCliente
    },
    {
      path:'/CrearUsuario',
      name:'CrearUsuario',
      component: CrearUsuario
    },
  ]
})
export default router