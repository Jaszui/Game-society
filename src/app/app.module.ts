import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupsDetailComponent } from './groups/groups-detail/groups-detail.component';
import { GroupsItemComponent } from './groups/groups-list/groups-item/groups-item.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsEditComponent } from './posts-list/posts-edit/posts-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupsComponent,
    GroupsListComponent,
    GroupsDetailComponent,
    GroupsItemComponent,
    PostsListComponent,
    PostsEditComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
