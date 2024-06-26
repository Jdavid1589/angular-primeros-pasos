import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponents } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponents,
    ListComponent,
    AddComponent
  ],
 exports: [
  MainPageComponents,

  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class DbzModule { }
