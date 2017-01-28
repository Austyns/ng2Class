import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import AngularFireModule and firebase configurations
import { AngularFireModule } from 'angularfire2/index';
import {firebaseConfig} from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { CrudComponentComponent } from './crud/crud-component/crud-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
