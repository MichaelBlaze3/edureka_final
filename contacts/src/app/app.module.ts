import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule, routingComponents } from './shareModules/routing/routing.module';
import { ShareModule } from './shareModules/share/share.module';

import { AppComponent } from './app.component';
// import { SidebarComponent } from './common/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents, 
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
