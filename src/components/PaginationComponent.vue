<template>
	<el-row id="pagination">
    <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
	</el-row>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #pagination
    float: right
    margin: 15px 0px 20px 20px
    .el-pagination
      padding: 0
</style>
