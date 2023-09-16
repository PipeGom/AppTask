import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blank" | "default"
declare module "C:/Users/luisf/Desktop/Universidad/Materias/semestre 6/Desarrollo web/dllo-web/Actividad-3 login vercel/AppTask/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}