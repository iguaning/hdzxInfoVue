import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModelStore = defineStore('model', () => {
  const login = ref(false)
  const loginShow = ref(false)
  const registerShow = ref(false)

  return { login, loginShow, registerShow }
})
