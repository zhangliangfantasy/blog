module.exports = {
    base: '/blog/',
    title: 'FANTASY',
    head: [
        ['link', { rel: 'icon', href: './assets/img/favicon.ico' }]
    ],
    themeConfig: {
        logo: './assets/img/logo.png',
        nav: [
            {
                text: '前端',
                items: [
                    { text: 'JavaScript', link: '/front-end/javascript' },
                    { text: 'Vue', link: '/front-end/vue' },
                    { text: 'Angular', link: '/front-end/angular' }
                ]
            },
            { text: 'JAVA', link: '/java' },
            { text: '数据库', link: '/sql' },
            { text: '计算机基础', link: '/computer-basic' }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'zhangliangfantasy',
            repo: 'blog',
            clientId: '1dcb663a9949ccbaea6c',
            clientSecret: '09771919ffc10444e62f681f6365b85899093ed1',
            autoCreateIssue: true
        },
    },
}