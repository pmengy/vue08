<template>
  <div>
    <router-link to="/category/clothes/trousers">男装</router-link>
    <router-link to="/category/clothes/skirts">女装</router-link>

    <hr />
    <div>
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
