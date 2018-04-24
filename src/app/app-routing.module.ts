import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {GroupsStartComponent} from './groups/groups-start/groups-start.component';
import {GroupsDetailComponent} from './groups/groups-detail/groups-detail.component';
import {GroupEditComponent} from './groups/group-edit/group-edit.component';
import {SignupComponent} from './auth/auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/auth/sign-in/sign-in.component';
import {SignOutComponent} from "./auth/auth/sign-out/sign-out.component";
import {SettingsComponent} from "./auth/settings/settings.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/group', pathMatch: 'full'},
  { path: 'group', component: GroupsComponent , children: [{
    path: '', component: GroupsStartComponent },
    {path: 'new', component: GroupEditComponent},
    {path: ':id', component: GroupsDetailComponent},
    {path: ':id/edit', component: GroupEditComponent},
  ]},
  { path: 'post-list', component: PostsListComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signOut', component: SignOutComponent},
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  imports: [
    CommonModule,
   RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
