import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {CarAddComponent} from './car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
