import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
// Custom components
import Partners from './components/partner/Partners.vue';
import Blog from './components/blog/Blog.vue';
import PostList from './components/common/PostList.vue';
import Post from './components/common/Post.vue';
import PostHeader from './components/common/PostHeader.vue';
import Guide from './components/guide/Guide.vue';
import Product from './components/index/Product.vue';
import Feature from './components/index/Feature.vue';
import Hero from './components/index/Hero.vue';
import FeaturesIG from './components/index/FeaturesIG.vue';
// Custom styles
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Partners', Partners);
    app.component('PostList', PostList);
    app.component('Blog', Blog);
    app.component('Post', Post);
    app.component('PostHeader', PostHeader);
    app.component('Guide', Guide);
    app.component('Product', Product);
    app.component('Feature', Feature);
    app.component('Hero', Hero);
    app.component('FeaturesIG', FeaturesIG);
  }
};
