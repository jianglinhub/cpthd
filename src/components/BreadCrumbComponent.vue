<template>
	<el-row id="breadcrumb">
    <el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
		  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
		  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
	</el-row>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#breadcrumb
		margin: 15px 15px 15px 0
		height: 20px
		float: right
</style>
