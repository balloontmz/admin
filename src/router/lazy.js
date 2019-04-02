import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/home',
          name: '首页测试',
          component: RouteView,
          icon: 'home',
          children: [
            // {
            //   path: '/home/workplace',
            //   name: '工作台',
            //   component: () => import('@/pages/dashboard/WorkPlace'),
            //   icon: 'none'
            // },
            {
              path: '/home/my-home',
              name: '我的首页',
              component: () => import('@/pages/home/MyHome'),
              icon: 'none'
            },
            {
              path: '/home/analysis',
              name: '经营分析',
              component: () => import('@/pages/home/Analysis'),
              icon: 'none'
            },
            {
              path: '/home/message',
              name: '我的通知',
              component: () => import('@/pages/home/Message'),
              icon: 'none'
            },
            {
              path: '/home/change-pwd',
              name: '修改密码',
              component: () => import('@/pages/home/ChangePWD'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/goods-manage',
          name: '商品管理',
          component: PageView,
          icon: 'bars',
          children: [
            {
              path: '/goods-manage/goods-list',
              name: '商品列表',
              component: () => import('@/pages/goods/GoodsList'),
              icon: 'none'
            },
            {
              path: '/goods-manage/publish-goods',
              name: '发布商品',
              component: () => import('@/pages/goods/publishProduct/Product'),
              icon: 'none'
            },
            {
              path: '/goods-manage/stock-warn',
              name: '库存预警',
              component: () => import('@/pages/goods/StockWarn'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/order-manage',
          name: '订单管理',
          component: PageView,
          icon: 'shop',
          children: [
            {
              path: '/order-manage/order-list',
              name: '订单列表',
              component: () => import('@/pages/orders/OrderList'),
              icon: 'none'
            },
            {
              path: '/order-manage/publish-goods',
              name: '评价列表',
              component: () => import('@/pages/orders/Evaluate'),
              icon: 'none'
            },
            {
              path: '/order-manage/refund-list',
              name: '退款列表',
              component: () => import('@/pages/orders/Refund'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/shop-manage',
          name: '店铺管理',
          component: PageView,
          icon: 'skin',
          children: [
            {
              path: '/shop-manage/shop-decoration',
              name: '店铺装修',
              component: () => import('@/pages/shop-manage/ShopDecoration'),
              icon: 'none'
            },
            {
              path: '/shop-manage/shop-coupon',
              name: '优惠券',
              component: () => import('@/pages/shop-manage/ShopCoupon'),
              icon: 'none'
            },
            {
              path: '/shop-manage/product-discount',
              name: '商品促销',
              component: () => import('@/pages/shop-manage/ShopDiscount'),
              icon: 'none'
            },
            {
              path: '/shop-manage/shop-freight',
              name: '运费管理',
              component: () => import('@/pages/shop-manage/ShopFreight'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/about-us',
          name: '关于我们',
          component: PageView,
          icon: 'profile',
          children: [
            {
              path: '/about-us/help',
              name: '帮助中心',
              component: () => import('@/pages/about/AboutUs'),
              icon: 'none'
            }
          ]
        }
      ]
    }
  ]
})
