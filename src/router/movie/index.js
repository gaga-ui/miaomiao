export default{
    path:'/movie',
    // @代表src，这是按需引入
    component:() =>import('@/views/Movie'),
    // children用来引入二级路由
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        // 当点击movie时，我们让二级路由重定向到nowPlaying，正在热映那里
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}