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
import { DropdownDirective } from './shared/dropdown.directive';
import {PostListService} from './posts-list/post-list.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { GroupsStartComponent } from './groups/groups-start/groups-start.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupsComponent,
    GroupsListComponent,
    GroupsDetailComponent,
    GroupsItemComponent,
    PostsListComponent,
    PostsEditComponent,
    DropdownDirective,
    GroupsStartComponent,
    GroupEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PostListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
