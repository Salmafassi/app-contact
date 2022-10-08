import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { ContactService } from './services/contact.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactsComponent,
    AddContactsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
