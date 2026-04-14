import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
      path: 'history',
loadComponent: () =>
  import('../pages/History/history.page').then((m) => m.HistoryPage)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pages/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  
  {
  path: 'quiz',
  loadComponent: () =>
    import('../pages/quiz/quiz.page').then((m) => m.QuizPage)
},
{
  path: 'results',
  loadComponent: () =>
    import('../pages/results/results.page').then((m) => m.ResultsPage)
}
];