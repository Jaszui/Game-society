import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {PostsListComponent} from './posts-list/posts-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/group', pathMatch: 'full'},
  { path: 'group', component: GroupsComponent},
  { path: 'post-list', component: PostsListComponent},
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
