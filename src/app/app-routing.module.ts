import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { ConstructorComponent } from './constructor/constructor.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: MainPageComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'generator',
    component: GeneratorComponent
  },{
    path: 'constructor',
    component: ConstructorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
