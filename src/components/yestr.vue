<template>
    <tr>
		<td>{{index}}</td>
		<td>{{content.p}}</td>
		<td>{{content.s}}</td>
		<td><button @click="del(index)">删除</button></td>
	</tr>
</template>

<script>
export default {
  name: 'app',
  props:['content',"index"],
  methods:{
  	del:function(){
		this.$emit("zdel", this.index)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
