export default{
    actions: {
       async fetchPost(ctx){
            const res = await fetch('http://localhost:3000/input')
            const serchFreRooms = await res.json()

            ctx.commit('updatePostInput', serchFreRooms)
        }
    },
  
    mutations: {
        updatePostInput(state, serchFreRooms){
            state.serchFreRooms = serchFreRooms;
        }
    },
    state: {
        serchFreRooms: [] 
    },
    getters:{
        Posts(state){
            return state.serchFreRooms;
        },
       
    },
  
};