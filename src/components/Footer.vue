<template>
  <div class="footer">
    <div class="footer-text">
      <span>软件信息：@2021打工人小助手</span>
      <span>维护人员：饶安琪</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less">
.footer {
  line-height: 40px;
  height: 40px;
  background-color: #333744;
  display: flex;
  justify-content: center;

  .footer-text {
    width: 35%;
    display: flex;
    justify-content: space-around;
    color: aliceblue;
  }
}
</style>