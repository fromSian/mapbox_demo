import { createStore } from "vuex";
// import useinit from './init';
// const init= useinit();
const store = createStore({
    state(){
        return{
            first:'g',
            map:{},
            view:{},
            layers:[]
        }
    },
    mutations:{
        setMap(state,val){
            state.map=val
        },
        setView(state,val){
            state.view=val
        },
        setLayers(state,val){
            state.layers=val
        }
    }
});
export default store;