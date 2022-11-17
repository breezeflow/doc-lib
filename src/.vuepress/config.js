module.exports = {
    title: "DocLib",
    base: "/doc-lib/",
    markdown: {
        lineNumbers: true,
        anchor: {permalink: false},
        toc: {includeLevel: [1]},
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/logo.png`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "andy"}],
        ["meta", {
            name: "keywords",
            content: ""
        }],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}],
    ],
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        repo: "https://github.com/breezeflow/doc-lib",
        editLinks: false,
        editLinkText: "",
        // lastUpdated: "最近更新",
        smoothScroll: true,
        nav: [
            {
                text: "目录",
                link: "/menu",
            },
        ],
        sidebar: "auto",
        sidebarDepth: 1,
        searchMaxSuggestions: 5
    }
};