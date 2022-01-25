import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Material*/
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'

/*Components*/
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

//NPM Packages
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    SidenavListComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    NgxWhastappButtonModule
  ],
  exports:[
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    NgxWhastappButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
