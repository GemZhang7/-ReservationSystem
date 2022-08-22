import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
    Container,
    Aside,
    Header,
    Main,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Col,
    Row,
    Card,
    Table,
    TableColumn,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Form,
    FormItem,
    Input,
    Button,
    Select,
    Option,
    Switch,
    DatePicker,
    Dialog,
    Pagination,
    Carousel,
    CarouselItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MyHttpServer from './plugins/http'
import store from '../store'

Vue.use(MyHttpServer)
Vue.config.productionTip = false
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)

// 导航守卫
router.beforeEach((to, from, next) => {
    // 这里权限的逻辑就是不等于token 并且 值为login
    const root = localStorage.getItem('root')
    if (!root && to.name !== 'login') {
        next({ name: 'login' })
    } else {
        next()
    }
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')