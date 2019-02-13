import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      //  beforeEnter(to,from,next){
      //   console.log(to);
      //   console.log(from);
      //   next();
      // }
    },
    {
      path:'/mine',
      name:'我的',
      component: () => import( './views/mine.vue')
    },
    {
      path:'/test',
      name:'test',
      alias:'/viewstest',
      component: () => import( './views/test.vue'),
      children:[
        {
          path:"/test/test1",
          name:"test1",
          component:() => import("./views/test1.vue")
        },
        {
          path:"/test2/:name/:age",
          name:"test2",
          component:() => import("./views/test2.vue")
        }
      ]
    },
    {
      path:"/home/:name/:age",
      redirect:'/test2/:name/:age',
      component:() => import("./views/test2.vue")
    },
    {
      path:"*",
      component:() => import("./views/Error404.vue")
    },

    
    
  ]
})
