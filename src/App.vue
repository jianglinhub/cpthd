<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="main">
    	<LeftNavComponent></LeftNavComponent>
      <router-view></router-view>
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
</style>
