import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { FeedService } from './feed/feed.service';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { FeaturesComponent } from './features/features.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FeedComponent,
    FilterPipe,
    OrderPipe,
    FeaturesComponent,
    MainPageComponent,
    GeneratorComponent,
    ConstructorComponent,
    RatingComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
