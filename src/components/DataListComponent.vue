<template>
  <section id="data-list">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="新稿" name="first">
        <el-row class="btn-group">
          <el-button type="primary" size="small">快速回复</el-button>
          <el-button type="primary" size="small">转发</el-button>
          <el-button type="danger" size="small">移入回收站</el-button>
        </el-row>
        <el-table :data="tableData3" border @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="标题" width="400">
            <template scope="scope" @cell-click="viewDetail">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="来信时间"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button @click="handleClick" type="text" size="small">移入回收站</el-button>
              <el-button type="text" size="small">转发</el-button>
              <el-button type="text" size="small">回复</el-button>
            </template>
          </el-table-column>
        </el-table>
        <PaginationComponent></PaginationComponent>
      </el-tab-pane>
      <el-tab-pane label="已退回" name="second">
        <el-row class="btn-group">
          <el-button type="primary" size="small">快速回复</el-button>
          <el-button type="primary" size="small">转发</el-button>
          <el-button type="danger" size="small">移入回收站</el-button>
        </el-row>
        <el-table :data="tableData3" border @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="标题" width="400">
            <template scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="来信时间"></el-table-column>
          <el-table-column prop="fromorganization" label="退回组织"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button @click="handleClick" type="text" size="small">移入回收站</el-button>
              <el-button type="text" size="small">转发</el-button>
              <el-button type="text" size="small">回复</el-button>
            </template>
          </el-table-column>
        </el-table>
        <PaginationComponent></PaginationComponent>
      </el-tab-pane>
      <el-tab-pane label="已转发" name="third">
        <el-row class="btn-group">
          <el-button type="primary" size="small">查看详情</el-button>
        </el-row>
        <el-table :data="tableData3" border @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="标题" width="400">
            <template scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="来信时间"></el-table-column>
          <el-table-column prop="fromorganization" label="转发组织"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <PaginationComponent></PaginationComponent>
      </el-tab-pane>
      <el-tab-pane label="回收站" name="fourth">
        <el-row class="btn-group">
          <el-button type="primary" size="small">恢复</el-button>
          <el-button type="danger" size="small">清空回收站</el-button>
        </el-row>
        <el-table :data="tableData3" border @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="标题" width="400">
            <template scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="来信时间"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button @click="handleClick" type="text" size="small">删除</el-button>
              <el-button type="text" size="small">恢复</el-button>
            </template>
          </el-table-column>
        </el-table>
        <PaginationComponent></PaginationComponent>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import PaginationComponent from './PaginationComponent';
import BreadCrumbComponent from './BreadCrumbComponent';

export default {
  data() {
      return {
        activeName2: 'first',
        tableData3: [{
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          fromorganization: '办公室',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }, {
          date: '《县域旅游发展新思路研究文集》邀请函',
          name: '2016-07-21',
          address: '上海市普陀区金沙江路'
        }],
        multipleSelection: []
      };
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      viewDetail() {
        alert('ok');
      }
    },
    components: {
      PaginationComponent,
      BreadCrumbComponent
    }
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #data-list
    width: 80%
    height: 100%
    float:left
    padding: 10px 20px 20px 20px
    overflow-y: scroll
    .btn-group
      margin: 0px 20px 20px 20px
      
</style>
