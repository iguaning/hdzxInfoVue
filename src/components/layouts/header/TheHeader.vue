<template>
  <Popover class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">知行通</span>
            <img class="h-8 w-auto sm:h-10" src="../../../assets/logo.png" alt="" />
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>

        <PopoverGroup as="nav" class="hidden space-x-12 md:flex">
          <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900 items-stretch">首页</router-link>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none']">
              <span>新闻</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <router-link :to="item.href" v-for="item in news" :key="item.name" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-green-700" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <router-link to="/fleamarket" class="text-base font-medium text-gray-500 hover:text-gray-900">知行超市</router-link>
          <router-link to="/zone" class="text-base font-medium text-gray-500 hover:text-gray-900">知行空间</router-link>
          <a href="http://www.hudazx.cn/" target="_blank" class="text-base font-medium text-gray-500 hover:text-gray-900">校园官网</a>
        </PopoverGroup>

        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <router-link to="/login" replace class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">登录</router-link>
          <router-link to="/register" replace class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-800 hover:text-white">注册</router-link>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../../../assets/logo.png" alt="知行通" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link v-for="item in news" :key="item.name" :to="item.href" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-green-700" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-700">首页</router-link>
              <router-link to="/fleamarket" class="text-base font-medium text-gray-500 hover:text-gray-700">知行超市</router-link>
              <router-link to="/zone" class="text-base font-medium text-gray-500 hover:text-gray-900">知行空间</router-link>
              <a href="http://www.hudazx.cn/" target="_blank" class="text-base font-medium text-gray-500 hover:text-gray-900">校园官网</a>
            </div>
            <div>
              <router-link to="/register" replace class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-800">注册</router-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <router-link to="/login" replace class="text-green-600 hover:text-green-800">登录</router-link>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  NewspaperIcon,
  CursorArrowRaysIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const news = [
  {
    name: '校园新闻',
    description: '不仅发布学校官方资讯，也记录着校园的美好瞬间',
    href: '/schoolnews',
    icon: NewspaperIcon,
  },
  {
    name: '竞赛资讯',
    description: '获取最新的大学生权威竞赛信息',
    href: '/gamenews',
    icon: CursorArrowRaysIcon,
  }
]
</script>