export const state = ()=>({
    name: 'online derps'
})

export const getters = {
    getName: state => state.name
}

export const mutations = {
    setName(state,payload){
        state.name = payload
    }
}