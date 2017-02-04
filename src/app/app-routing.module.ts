import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { ConstructorComponent } from './constructor/constructor.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: MainPageComponent
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
