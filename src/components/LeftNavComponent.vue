<template>
	<aside id="nav">
      <el-menu default-active="2" class="el-menu-vertical-demo" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>信箱</template>
            <el-submenu index="1-1">
              <template slot="title">局长信箱</template>
              <el-menu-item index="/jzdb">待办信件</el-menu-item>
              <el-menu-item index="/jzbj">办结信件</el-menu-item>
              <el-menu-item index="/jzhsz">回收站</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">书记信箱</template>
              <el-menu-item index="1-2-1">待办信件</el-menu-item>
              <el-menu-item index="1-2-2">办结信件</el-menu-item>
              <el-menu-item index="1-2-3">回收站</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">咨询投诉</template>
              <el-menu-item index="1-3-1">办结信件</el-menu-item>
              <el-menu-item index="1-3-2">待办信件</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="4"><i class="el-icon-setting"></i>意见征集</el-menu-item>
        <el-menu-item index="5"><i class="el-icon-setting"></i>网上调查</el-menu-item>
        <el-menu-item index="6"><i class="el-icon-setting"></i>依申请公开</el-menu-item>
      </el-menu>
	</aside>
</template>

<script>
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #nav
    float: left
    width: 16%
    height: 100%
    .el-menu
      height: 100%
      background-color: #eef1f6
</style>
