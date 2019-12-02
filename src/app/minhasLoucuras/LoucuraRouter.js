export default [
  {
    path: '/outros',
    component: () => import('./index.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-comment-dots',
        title: 'Outros',
      },
    },
    children: [
      {
        path: '/outros/jogo-da-velha',
        name: 'Jogo Da Velha',
        component: () => import('./jogoDaVelha/JogoDaVelha.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-dice',
            title: 'Jogo Da Velha',
          },
        },
      },
    ],
  },
];

