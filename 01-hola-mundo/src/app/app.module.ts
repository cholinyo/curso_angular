import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer/footer.component'
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BodyComponent, FooterComponent
=======
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
>>>>>>> f5e2debf4256a80cb284177d9403b2f5a16da621
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
