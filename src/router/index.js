import {createRouter, createWebHistory} from 'vue-router'
import ProductListPage from '../pages/product/ProductListPage.vue'
import CreateProductPage from '../pages/product/CreateProductPage.vue'
import EditProductPage from '../pages/product/EditProductPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import CartPage from '../pages/cart/CartPage.vue'
import Posts from '../pages/post/Posts.vue'
import AddPost from "../pages/post/AddPost.vue"
import Friends from '../pages/friend/FriendsPage.vue'
import Chats from '../pages/chat/Chats.vue'
import Dialogs from "../pages/chat/Dialogs.vue";
import Profile from '../pages/profile/Profile.vue'
import ProfileEdit from '../pages/profile/ProfileEdit.vue'
import CategoryPage from '../pages/category/CategoryPage.vue'

import OrderListPage from '../pages/order/OrderListPage.vue'
import EditOrdersPage from '../pages/order/EditOrderPage.vue'
import MyOrders from '../pages/order/MyOrders.vue'
import Catalog from "../pages/catalog/Catalog.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/products",
            name: "Products",
            component: ProductListPage,
        },
        {
            path: "/products/create",
            name: "CreateProduct",
            component: CreateProductPage,
        },
        {
            path: "/products/edit/:productId",
            name: "EditProduct",
            component: EditProductPage,
        },

        {
            path: "/orders",
            name: "Orders",
            component: OrderListPage,
        },
        {
            path: "/orders/edit/:orderId",
            name: "EditOrder",
            component: EditOrdersPage,
        },

        {
            path: "/my_order",
            name: "MyOrders",
            component: MyOrders,
        },

        {
            path: "/cart",
            name: "Cart",
            component: CartPage,
        },
        {
            path: "/posts",
            name: "Posts",
            component: Posts,
        },
        {
            path: "/addpost",
            name: "AddPost",
            component: AddPost,
        },
        {
            path: "/friends",
            name: "Friends",
            component: Friends,
        },
        {
            path: "/chats",
            name: "Chats",
            component: Chats,
        },
        {
            path: "/chats/:chatId",
            name: "Dialogs",
            component: Dialogs,
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
        },
        {
            path: "/profile/edit",
            name: "ProfileEdit",
            component: ProfileEdit,
        },
        {
            path: "/categories",
            name: "CategoryPage",
            component: CategoryPage,
        },


        {
            path: "/register",
            name: "Register",
            component: RegisterPage,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginPage,
        },
        {
            path: "/catalog",
            name: "Catalog",
            component: Catalog,
        },
        {
            path: "/",
            name: "MainPage",
            component: Catalog,
        },
    ],
});


export default router