module.exports = {
    base: '/blog',
    title: 'FANTASY',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
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
    }
}