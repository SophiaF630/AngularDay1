import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicComponent } from './components/pic.component';
import { PictureComponent } from './components/picture.component';
import { ListComponent } from './components/list.component';

@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    PictureComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
