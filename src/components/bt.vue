<template>
	<button @click="bt">{{content}}</button>
</template>

<script>
	export default{
		name:"app",
		props:['content'],
		methods:{
			bt:function(){
				this.$emit("style")
			}
		}
	}
</script>

<style scoped="">
	button{
		padding: 5px 10px;
	}
</style>