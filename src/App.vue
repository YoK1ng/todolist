<template>
	<div id="app">
		<h1>TodoList</h1>
		<router-link to="/1">无组件</router-link>
		<router-link to="/2">有组件</router-link>
		<hr>
		<router-view :class="{class:ifclass}"></router-view>

		<bt @style="bt" :content="txt"></bt>
	</div>
</template>

<script>
	import bt from "@/components/bt"

	export default {
		name: 'App',
		components:{
			bt
		},
		data(){
			return{
				ifclass:false,
				txt:"红色样式"
			}
		},
		methods:{
			bt:function(){
				this.ifclass = !this.ifclass;
				this.ifclass ? "class" : ""
				this.ifclass ? this.txt="灰色样式" : this.txt="红色样式"
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	* {
		padding: 0px;
		margin: 0px;
	}
	h1 ,hr{
		margin: 20px 0px;
	}
	a{
		color: #222;
		text-decoration: none;
		border: 1px solid #ddd;
		padding: 5px 10px;
	}
	a.router-link-active{
		color: #FF0000;
	}
	.class table{
		border-color: #FF0000;
	}
	.class td{
		border-color: #FF0000;
	}
</style>