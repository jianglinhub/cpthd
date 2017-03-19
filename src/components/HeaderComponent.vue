<template>
    <div id="header" class="el-col el-col-24">
        <el-col :span="24">
            <el-col :span="20" class="logo">
                红原县政务互动管理平台
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link userinfo-inner"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=672545338,2266152288&fm=116&gp=0.jpg" />UserName</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #header 
        position: fixed
        top: 0
        left; 0
        height: 60px
        width: 100%
        background-color: #1f2d3d
        line-height: 60px
        color: #fff
        .logo
            height: 60px
            font-size: 22px
            padding-left: 22px
        .userinfo
            text-align: right
            padding-right: 35px
            float: right
            .userinfo-inner
                cursor: pointer
                color: #fff
                img
                    width: 40px
                    height: 40px
                    border-radius: 20px
                    margin: 10px 0px 10px 10px
                    float: right
</style>
