import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SandwichComponent } from './sandwich/sandwich.component'
import { MainPageComponent } from './main-page/main-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: MainPageComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignUpComponent
  }, {
    path: 'sandwich/:id',
    component: SandwichComponent
  }, {
    path: 'generator',
    component: GeneratorComponent
  }, {
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
