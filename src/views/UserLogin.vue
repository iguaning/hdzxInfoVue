<template>
  <p>弹窗状态：{{ visible ? "显示" : "隐藏" }}</p>
  <button @click="showGuard">显示登录弹窗</button>
  <Guard
      :appId="appId"
      :visible="visible"
      :config="config"
      @login="onLogin"
      @close="onClose"
  ></Guard>
</template>

<script setup>
import { Guard } from '@authing/vue-ui-components'
import '@authing/vue-ui-components/lib/index.min.css'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
const { appId, config, visible, showGuard, onClose } = storeToRefs(loginStore)

const onLogin = (userInfo) => {
  console.log(userInfo)
}

</script>