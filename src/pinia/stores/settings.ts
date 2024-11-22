import type { LayoutSettings } from "@/config/layouts"
import type { Ref } from "vue"
import { layoutSettings } from "@/config/layouts"
import { pinia } from "@/pinia"
import { setConfigLayout } from "@/utils/cache/local-storage"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

type SettingsStore = {
  // 使用映射类型来遍历 layoutSettings 对象的键
  [Key in keyof LayoutSettings]: Ref<LayoutSettings[Key]>
}

type SettingsStoreKey = keyof SettingsStore

export const useSettingsStore = defineStore("settings", () => {
  /** 状态对象 */
  const state = {} as SettingsStore
  // 遍历 layoutSettings 对象的键值对
  for (const [key, value] of Object.entries(layoutSettings)) {
    // 使用类型断言来指定 key 的类型，将 value 包装在 ref 函数中，创建一个响应式变量
    const refValue = ref(value)
    // @ts-expect-error ignore
    state[key as SettingsStoreKey] = refValue
    // 监听每个响应式变量
    watch(refValue, () => {
      // 缓存
      const settings = _getCacheData()
      setConfigLayout(settings)
    })
  }
  /** 获取要缓存的数据：将 state 对象转化为 settings 对象 */
  const _getCacheData = () => {
    const settings = {} as LayoutSettings
    for (const [key, value] of Object.entries(state)) {
      // @ts-expect-error ignore
      settings[key as SettingsStoreKey] = value.value
    }
    return settings
  }

  return state
})

/**
 * 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useSettingsStoreOutside() {
  return useSettingsStore(pinia)
}