import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'
import intersection from "v-intersection";
import App from './App.vue'
import router from "@/router/router";

import vInfinityScroll from '@/directives/vInfinityScroll'

const app = createApp(App)

app
    .use(router)
    .use(VueLazyLoad)
    .use(intersection)
    .directive('infinity-scroll', vInfinityScroll)
    .mount('#app')
