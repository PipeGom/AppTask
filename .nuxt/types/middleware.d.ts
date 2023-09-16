import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/luisf/Desktop/Universidad/Materias/semestre 6/Desarrollo web/dllo-web/Actividad-3 login vercel/AppTask/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}