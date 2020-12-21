import Vue from 'vue'
import vueRouter from 'vue-router'

import InicioSesion from '../components/InicioSesion'
import MenuOpciones from '../components/MenuOpciones'
import CrearCliente from '../components/CrearCliente'
import BuscarCliente from '../components/BuscarCliente'
import CrearUsuario from '../components/CrearUsuario'
import BuscarProducto from '../components/BuscarProducto'
import CrearProducto from '../components/CrearProducto'
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
    {
      path:'/BuscarProducto',
      name:"BuscarProducto",
      component: BuscarProducto
    },
    {
      path:'/CrearProducto',
      name:'CrearProducto',
      component: CrearProducto
    },
  ]
})
export default router
