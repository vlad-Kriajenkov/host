export default{
    actions: {
       async fetchPost(ctx){
            const res = await fetch('http://localhost:3000/cards')
            const cardsRooms = await res.json()

            ctx.commit('updatePost', cardsRooms)
        }
    },
  
    mutations: {
        updatePost(state, cardsRooms){
            state.cardsRooms = cardsRooms;
        }
    },
    state: {
        cardsRooms: []
    },
    getters:{
        allPosts(state){
            return state.cardsRooms;
        },
       
    },
  
};