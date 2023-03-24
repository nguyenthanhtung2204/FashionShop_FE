import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Thông tin',
    icon: 'home-outline',
    link: '/pages',
    home: true,
  },
  {
    title: 'Giỏ Hàng',
    icon: 'archive-outline',
    children: [
      {
        title: 'Giỏ Hàng',
        icon: 'shopping-cart-outline',
        link: 'show-about/product-cart',
      },
      {
        title: 'Chi Tiết Hóa Đơn',
        icon: 'file-text-outline',
        link: 'show-about/abouts',
      },
      {
        title: 'Mã Giảm Giá',
        icon: 'file-add-outline',
        link: 'show-about/coupon',
      },
      {
        title: 'Thanh Toán',
        icon: 'credit-card-outline',
        link: 'show-about/payment',
      },
      {
        title: 'Ghi Chú',
        icon: 'edit-2-outline',
        link: 'show-about/node',
      },
    ],
  },
  {
    title: 'Danh mục sản phẩm',
    icon: 'grid-outline',
    children: [
      {
        title: 'Sản phẩm',
        icon: 'shopping-bag-outline',
        link: 'category-product/products',
      },
      {
        title: 'Loại Sản Phẩm',
        icon: 'options-2-outline',
        link: '/pages/category-product/category',
      },
      {
        title: 'Sản Phẩm Yêu Thích',
        icon: 'heart-outline',
        link: '/pages/category-product/favorite',
      },
      {
        title: 'Sản Phẩm Giảm Giá',
        icon: 'percent-outline',
        link: '/pages/category-product/sale',
      },
      {
        title: 'Phản hồi sản phẩm',
        icon: 'message-circle-outline',
        link: '/pages/category-product/comment',
      },
    ],
  },
  {
    title: 'Thông tin giỏ hàng',
    icon: 'info-outline',
    children: [
      {
        title: 'Giỏ hàng',
        icon: 'shopping-cart-outline',
        link: '/pages/cart',
      },
      {
        title: 'Chi tiết giỏ hàng',
        icon: 'swap-outline',
        link: '/pages/CartItem',
      },
      {
        title: 'Mã giảm giá',
        icon: 'clipboard-outline',
        link: '/pages/coupon',
      },
      {
        title: 'Thanh toán',
        icon: 'car-outline',
        link: '/pages/payment',
      },
    ],
  },
  {
    title: 'Cài đặt người dùng',
    icon: 'settings-outline',
    children: [
      {
        title: 'Người dùng',
        icon: 'people-outline',
        link: '/pages/dashboard-info/user',
      },
      {
        title: 'Phân quyền người dùng',
        icon: 'shield-outline',
        link: '/pages/dashboard-info/permission',
      },
      {
        title: 'Phản hồi người dùng',
        icon: 'message-square-outline',
        link: '/pages/feedback',
      },
    ],
  },
];
