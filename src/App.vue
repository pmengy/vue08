<template>
  <div>
    <h1>App组件</h1>
    <a href="#/myInfo">信息</a>&nbsp; <a href="#/myOrders">订单</a>&nbsp;
    <a href="#/index">首页</a>&nbsp;
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyInfo from '@/views/MyInfo.vue';
import MyOrders from '@/views/MyOrders.vue';
import _Index from '@/views/_Index.vue';
export default {
  data() {
    return {
      comName: '_Index',
    };
  },
  created() {
    // 改变浏览器url的hash值, JS监听到hash值改变, 把对应的组件显示到同一个挂载点
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/myInfo':
          this.comName = 'MyInfo';
          break;
        case '#/myOrders':
          this.comName = 'MyOrders';
          break;
        case '#/index':
          this.comName = '_Index';
          break;
      }
    };
  },
  methods: {},
  components: {
    MyInfo,
    MyOrders,
    _Index,
  },
};
</script>
