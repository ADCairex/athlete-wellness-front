import { Routes } from '@angular/router';
import { LoginComponent } from './business/auth/login/login.component';
import { AuthGuard } from '@core/services/guards/auth.guard';
import { AuthenticatedGuard } from '@core/services/guards/authenticated.guard';
import { StatusFormComponent } from './business/status-form/status-form.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'status-form',
        component: StatusFormComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticatedGuard],
  },
];
