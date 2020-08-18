import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { UserService } from './services/user-service.service';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserListComponent,
    UserAddComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
