export const MENU_ITEMS = [
  {
    path: '',
    title: 'Home',
    type: 'link'
  },
  {
    title: 'Store',
    type: 'sub',
    active: false,
    children: [
      {
        title: 'clothing',
        type: 'sub',
        active: false,
        children: [
          { path: '/fashion', title: 'fashion-01', type: 'link' },
          { path: '/fashion-2', title: 'fashion-02', type: 'link' },
          { path: '/fashion-3', title: 'fashion-03', type: 'link' }
        ]
      },
      { path: '/vegetable', title: 'vegetable', type: 'link' },
      { path: '/watch', title: 'watch', type: 'link' },
      { path: '/furniture', title: 'furniture', type: 'link' },
      { path: '/flower', title: 'flower', type: 'link' },
      { path: '/beauty', title: 'beauty', type: 'link' },
      { path: '/electronics', title: 'electronics', type: 'link' },
      { path: '/pets', title: 'pets', type: 'link' },
      { path: '/gym', title: 'gym', type: 'link' },
      { path: '/tools', title: 'tools', type: 'link' },
      { path: '/shoes', title: 'shoes', type: 'link' },
      { path: '/bags', title: 'bags', type: 'link' },
      { path: '/marijuana', title: 'marijuana', type: 'link' }
    ]
  },
  {
    title: 'Services',
    type: 'sub',
    active: false,
    children: [
      {
        title: 'clothing',
        type: 'sub',
        active: false,
        children: [
          { path: '/fashion', title: 'fashion-01', type: 'link' },
          { path: '/fashion-2', title: 'fashion-02', type: 'link' },
          { path: '/fashion-3', title: 'fashion-03', type: 'link' }
        ]
      },
      { path: '/vegetable', title: 'vegetable', type: 'link' },
      { path: '/watch', title: 'watch', type: 'link' },
      { path: '/furniture', title: 'furniture', type: 'link' },
      { path: '/flower', title: 'flower', type: 'link' },
      { path: '/beauty', title: 'beauty', type: 'link' },
      { path: '/electronics', title: 'electronics', type: 'link' },
      { path: '/pets', title: 'pets', type: 'link' },
      { path: '/gym', title: 'gym', type: 'link' },
      { path: '/tools', title: 'tools', type: 'link' },
      { path: '/shoes', title: 'shoes', type: 'link' },
      { path: '/bags', title: 'bags', type: 'link' },
      { path: '/marijuana', title: 'marijuana', type: 'link' }
    ]
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    type: 'link'
  },
  {
    path: 'blog',
    title: 'Blog',
    type: 'link'
  }
];
