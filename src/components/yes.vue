<template>
	<div id="app">
		<p>
			名称：<input v-model="t" />
			时间：<input v-model="s" />
			<button @click="add" :disabled="!t || !s">提交</button>&nbsp;&nbsp;
			<button @click="qdel">全部删除</button>
		</p>
		<table border="0">
			<tr>
				<td>编号</td>
				<td>名称</td>
				<td>时间</td>
				<td>操作</td>
			</tr>
			<yestr v-for="(i , index) of list" :key="index" :content="i" :index="index" @zdel="del"></yestr>
		</table>
	</div>
</template>

<script>
	import yestr from "@/components/yestr"

	export default {
		name: 'App',
		components:{
			yestr
		},
		data() {
			return {
				t: "",
				s: "05/16",
				list: []
			}
		},
		methods: {
			add() {
				this.list.push({
					p:this.t,
					s:this.s
				})
			},
			del: function(index) {
				if(window.confirm('确定删除？')) {
					this.list.splice(index, 1);
					return true;
				} else {
					return false;
				}
			},
			qdel: function() {
				if(window.confirm('确定全部删除？')) {
					this.list = [];
					return true;
				} else {
					return false;
				}
			},
			xdel: function() {
				if(window.confirm('确定全部删除？')) {
					this.list = [];
					return true;
				} else {
					return false;
				}
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
	table {
		width: 550px;
		margin: 20px auto;
		line-height: 35px;
		border: 1px solid #ddd;
		border-bottom: 0px;
		border-left: 0px;
		border-spacing: 0px;
	}
	td {
		border-bottom: 1px solid #ddd;
		border-left: 1px solid #ddd;
	}
</style>