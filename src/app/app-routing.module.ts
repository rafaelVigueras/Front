import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'list', component: UserListComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '**', component:  UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
