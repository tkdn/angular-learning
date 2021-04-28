import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserListItemComponent } from './view/user-list-item/user-list-item.component';
import { UserListComponent } from './view/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
