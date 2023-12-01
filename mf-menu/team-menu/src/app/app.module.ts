import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {
  ButtonModule,
  GridModule,
  IconModule,
  IconService,
  ListModule,
  RadioModule,
  TabsModule,
  TilesModule,
  UIShellModule,
} from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';

import { I18n } from 'carbon-components-angular/i18n';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    ListModule,
    TabsModule,
    TilesModule,
    RadioModule,
    ButtonModule,
    IconModule,
    UIShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
