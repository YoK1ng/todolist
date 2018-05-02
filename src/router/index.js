import Vue from 'vue'
import Router from 'vue-router'
import no from "@/components/no"
import yes from "@/components/yes"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
		{
			path:'/1',
			name:"no",
			component:no
		},
		{
			path:'/2',
			name:"yes",
			component:yes
		}
  ]
})
