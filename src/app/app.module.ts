import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DairyComponent } from './dairy/dairy.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MycontactComponent } from './contact/mycontact/mycontact.component';
import { AddnewComponent } from './contact/addnew/addnew.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { routes } from 'app/app.route';
import { RouterModule } from '@angular/router';
import { MdFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdIconModule, MdTableModule, MdPaginatorModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilePickerModule } from 'angular-file-picker';
import { EditcontactComponent } from './editcontact/editcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DairyComponent,
    FeedComponent,
    ProfileComponent,
    MycontactComponent,
    AddnewComponent,
    ViewprofileComponent,
    EditprofileComponent,
    NavComponent,
    SidebarComponent,
    EditcontactComponent,

  ],
  imports: [
    BrowserModule,
    MdFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdDatepickerModule,
    MdIconModule,
    MdNativeDateModule,
    MdButtonModule,
    MdTableModule,
    MdPaginatorModule,
    MdInputModule,
    FilePickerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AddnewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
