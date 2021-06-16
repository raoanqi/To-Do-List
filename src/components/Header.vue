<template>
  <div class="header">
    <div class="header-icon"></div>
    <div class="header-title">
      打工人小助手
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="less">
.header {
  display: flex;
  height: 7vh;
  line-height: 7vh;

  .header-icon {
    background: url("../../public/wink.svg") no-repeat;
    height: 7vh;
    background-size: cover;
  }

  .header-title {
    margin-left: 30px;
    font-size: 26px;
    color: aliceblue;
  }
}
</style>