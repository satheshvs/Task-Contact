import { Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { FeedComponent } from 'app/feed/feed.component';
import { DairyComponent } from 'app/dairy/dairy.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AddnewComponent } from 'app/contact/addnew/addnew.component';
import { MycontactComponent } from 'app/contact/mycontact/mycontact.component';
import { EditprofileComponent } from 'app/profile/editprofile/editprofile.component';
import { ViewprofileComponent } from 'app/profile/viewprofile/viewprofile.component';
export const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'contact', component: ContactComponent},
    { path: 'addnew', component: AddnewComponent},
    { path: 'mycontact', component: MycontactComponent},
    { path: 'dairy', component: DairyComponent},
    { path: 'feed', component: FeedComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'editprofile', component: EditprofileComponent},
    { path: 'viewprofile', component: ViewprofileComponent}
]
