export default{
    path:'/mine',
    // @代表src，这是按需引入
    component:() =>import('@/views/Mine'),
    // 也是用children引入二级路由
    children : [
        {
            path : 'center',
            component : () => import('@/views/Mine/center.vue')
        },
        {
            path : 'login',
            component : () => import('@/components/Login')
        },
        {
            path : 'register',
            component : () => import('@/components/Register')
        },
        {
            path : 'findPassword',
            component : () => import('@/components/FindPassword')
        },
        {
            path : '/mine',
            redirect : 'center'
        }
    ]
}