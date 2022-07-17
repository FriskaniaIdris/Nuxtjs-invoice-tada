//state
export const state = () => ({
  templateMode: 'dark'
})

//getters
export const getters = {
  getTemplateMode(state) {
    return state.templateMode
  }
}

//getters
export const actions = {
}

//mutations
export const mutations = {
  handleThemeToggle(state){
    let mode = ""
    if(state.templateMode == 'dark'){
      mode = 'light'
    }else{
      mode = 'dark'
    }
    state.templateMode = mode;
  }
}
