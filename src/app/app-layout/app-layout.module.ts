import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToasterComponent } from './toaster/toaster.component';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    AppLayoutComponent,

    HeaderComponent,
    FooterComponent,
    ToasterComponent,


  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    MatSidenavModule
  ]
})
export class AppLayoutModule { }
