export const state = () => ({
  user: {}
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log('Message received', data)
  }
}
