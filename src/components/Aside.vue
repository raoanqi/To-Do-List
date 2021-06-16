<template>
  <div>
    <el-menu
        background-color="#333744"
        text-color="#FFFFFF"
        default-active="daily-work"
        :router="true">
      <el-menu-item index="daily-work">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>日程记录</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style lang="less">
</style>