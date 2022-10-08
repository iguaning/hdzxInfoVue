import { defineStore } from 'pinia'

export const useNavBarStore = defineStore('navbar', {
  state: () => ({
    items: [
      {
        id: 0,
        label: '首页',
        url: '/'
      },
      {
        id: 1,
        label: '比赛讯息',
        url: '/gamemessages'
      },
      {
        id: 2,
        label: '校园资讯',
        url: '/schoolnews'
      },
      {
        id: 3,
        label: '跳蚤超市',
        url: '/fleamarket'
      },
      {
        id: 4,
        label: '待定',
        url: '/wait'
      }
    ]
  })
})