import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';

import { FeedService } from './feed/feed.service';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FeedComponent,
    FilterPipe,
    OrderPipe
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
