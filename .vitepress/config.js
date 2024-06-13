import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

// 每页的文章数量
const pageSize = 10

export default defineConfig({
    title: 'one-piece',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'vitepress,blog,blog-theme',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/Haku96/one-piece',
        comment: {
            repo: 'Haku96/one-piece',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Category', link: '/pages/category' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
        ],
        search: {
            provider: 'local'
        },
        outlineTitle: '文章摘要',
        socialLinks: [{ icon: 'github', link: 'https://github.com/Haku96/one-piece' }]
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        build: { minify: true },
        server: { port: 5000 }
    }
})
