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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { GroupsStartComponent } from './groups/groups-start/groups-start.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';
import {GroupService} from './groups/group.service';
import {DataStorageService} from './shared/data-storage.service';
import { SignupComponent } from './auth/auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/auth/sign-in/sign-in.component';
import {AuthService} from './auth/auth/auth.service';
import { SignOutComponent } from './auth/auth/sign-out/sign-out.component';




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
    GroupEditComponent,
    SignupComponent,
    SignInComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PostListService,
              GroupService,
              DataStorageService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
