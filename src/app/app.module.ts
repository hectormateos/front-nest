import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_ROUTING} from './app.routes';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

// services
import {CatsService} from './services/cats.service';
import {DogsService} from './services/dogs.service';

// components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {CatsComponent} from './components/cats/cats.component';
import {DogsComponent} from './components/dogs/dogs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatsComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    CatsService,
    DogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
