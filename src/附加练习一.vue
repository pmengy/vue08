<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/index">首页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/myOrders">订单</router-link>
      <router-link to="/myInfo">我的</router-link>
    </div>

    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

/*激活时样式 */
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
