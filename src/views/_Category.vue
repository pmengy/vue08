<template>
  <div>
    <div>
      <router-link to="/category/clothes">服装</router-link>
      <router-link to="/category/shoes">鞋子</router-link>
    </div>
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
