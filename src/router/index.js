import Vue from 'vue'; //引入Vue
import Router from 'vue-router'; //引入vue-router
import _Category from '@/views/_Category.vue';
import _Index from '@/views/_Index.vue';
import MyInfo from '@/views/MyInfo.vue';
import MyOrders from '@/views/MyOrders.vue';
import _Clothes from '@/views/Second/_Clothes.vue';
import _Shoes from '@/views/Second/_Shoes.vue';
import _Skirts from '@/views/Third/_Skirts.vue';
import _Trousers from '@/views/Third/_Trousers.vue';

Vue.use(Router); //Vue全局使用Router

export default new Router({
  routes: [
    //配置路由，这里是个数组
    {
      //每一个链接都是一个对象
      path: '/', //链接路径
      redirect: '/index', // 重定向
      component: _Index,
    },
    {
      path: '/index',
      component: _Index,
    },
    {
      path: '/category',
      component: _Category,
      children: [
        {
          path: 'clothes',
          component: _Clothes,
          children: [
            { path: 'skirts', component: _Skirts },
            { path: 'trousers', component: _Trousers },
          ],
        },
        {
          path: 'shoes',
          component: _Shoes,
        },
      ],
    },
    {
      path: '/myInfo',
      component: MyInfo,
    },
    {
      path: '/myOrders',
      component: MyOrders,
    },
  ],
});
