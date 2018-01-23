import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SandwichService } from './sandwich/sandwich.service';
import { LoginService } from './login/login.service';

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
import { SandwichComponent } from './sandwich/sandwich.component';

@NgModule({
  declarations: [
    // Pipes
    FilterPipe,
    OrderPipe,
    // Components
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FeedComponent,
    FeaturesComponent,
    MainPageComponent,
    GeneratorComponent,
    ConstructorComponent,
    RatingComponent,
    LoginComponent,
    SandwichComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SandwichService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
