import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // use代表使用插件

const store = new Vuex.Store({
	state: {
		content:[],
		list: [],
		listClass:[],
		listGroup:[],
		brother:[],
		message:[]
	},
	mutations: {
		addToIdM: function(state, data) {
			state.content = data;
		},
		addToIdMb:function( state,data ){
			state.list = data;
		},
		addToTitleM:function( state,data ){
			state.listClass = data;
		},
		addToListMM:function( state,data  ){
			state.listGroup = data;
		},
		addToBrotherMM:function( state,data ){
			state.brother = data;
		},
		addToUsernameMM:function(state,data   ){
			state.message = data;
		}
	},
	actions: {
		addToIdA: function({commit}, data) {
			commit("addToIdM", data);
		},
		addToIdAa:function( {commit},data ){
			commit("addToIdMb", data);
		},
		addToTitleA:function( {commit},data ){
			commit("addToTitleM", data);
		},
		addToListAA:function( {commit},data ){
			commit("addToListMM", data);
		},
		addToBrotherAA:function( {commit},data ){
			commit("addToBrotherMM", data);
		},
		addToUsername:function( {commit},data  ){
			commit("addToUsernameMM", data);
		}
	}
})

export default store;
