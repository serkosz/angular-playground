import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentTestComponent } from './features/ng-content/ng-content.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedAngularMaterialModule } from '../shared-angular-material/shared-angular-material.module';

export const routes: Routes = [
  { path: 'ng-content-test', component: NgContentTestComponent },
];

@NgModule({
  declarations: [  
    NgContentTestComponent
  ],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TestPlaygroundModule { }