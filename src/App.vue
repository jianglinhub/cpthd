<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="main">
    	<LeftNavComponent></LeftNavComponent>
			<div class="container">
        <router-view></router-view>
      </div>
  	</div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import LeftNavComponent from './components/LeftNavComponent';
import DataListComponent from './components/DataListComponent';

export default {
  components: {
    HeaderComponent,
    LeftNavComponent,
    DataListComponent
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    display: -webkit-box
    height: 100%
    .main
      position: fixed
      top: 61px
      left: 0
      right: 0
      bottom: 0
      .container
        margin: 10px 10px
        float: left
        width: 80%
        height: 100%
        overflow-y: auto
        overflow-x: hidden 
          
</style>
