import {createRouter,createWebHistory} from "vue-router";
import FavouritesPage from "@/pages/FavouritesPage";
import MainPage from "@/pages/MainPage"


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/favourites',
        component: FavouritesPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router