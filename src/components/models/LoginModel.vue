<template>
  <TransitionRoot as="template" :show="login">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="login = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="login = false">
                <span class="sr-only">Close</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <LoginForm v-show="loginShow"></LoginForm>
            <RegisterForm v-show="registerShow"></RegisterForm>
            <div class="text-sm flex justify-center items-center">
              <a href="#" v-show="loginShow" @click="loginShow = false, registerShow = true" class="font-medium text-gray-500 hover:text-gray-900 border-b border-gray-500 hover:border-gray-900">没有账号?立即注册</a>
              <a href="#" v-show="registerShow" @click="loginShow = true, registerShow = false" class="font-medium border-gray-500 hover:border-gray-900 border-b border-gray-500 hover:border-gray-900">已有帐号,去登录</a>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import LoginForm from '../../components/forms/LoginForm.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useModelStore } from '@/stores/Model'
import { storeToRefs } from 'pinia'

const useModel = useModelStore()
const { login, loginShow, registerShow } = storeToRefs(useModel)
</script>