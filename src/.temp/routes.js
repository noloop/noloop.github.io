export default [
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/info",
    component: () => import(/* webpackChunkName: "page--src--pages--info-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/pages/Info.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/an-essay-on-walking",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/templates/Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/ne-te-quaesiveris-extra",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/templates/Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/on-the-geneology-of-morals",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/templates/Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/sunflower-sutra",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/templates/Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/song-of-myself",
    component: () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/templates/Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/noloop/quasebuda-project/noloop.github.io/src/pages/404.vue")
  }
]

