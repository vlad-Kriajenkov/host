export default{
    actions: {
       async fetchPost(ctx){
            const res = await fetch('http://localhost:3000/articles')
            const articles = await res.json()

            ctx.commit('updatePostArticles', articles)
        }
    },
  
    mutations: {
        updatePostArticles(state, articles){
            state.articles = articles;
        }
    },
    state: {
        articles: []
    },
    getters:{
        allArticle(state){
            return state.articles;
        },
       
    },
  
};