<template>
  <el-container class="body-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="220px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer height="40px">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

export default {
  name: "BodyContainer",
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style lang="less">
.body-container {
  height: 100%;

  .el-header {
    padding: 0;
    background-color: #333744;
  }

  .el-aside {
    background-color: #333744;

    .el-menu {
      border-right: none;
    }
  }

  .el-footer {
    padding: 0;
  }
}
</style>