import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentTestComponent } from './features/ng-content/ng-content.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedAngularMaterialModule } from '../shared-angular-material/shared-angular-material.module';
import { NgContentCardComponent } from './features/ng-content-card/ng-content-card.component';
import { HostListenerBankAccountComponent } from './features/host-listener-bank-account/host-listener-bank-account.component';
import { CreditCardDirective } from './features/host-listener-bank-account/credit-card.directive';

export const routes: Routes = [
  { path: 'ng-content-test', component: NgContentTestComponent },
  { path: 'host-listener-test', component: HostListenerBankAccountComponent }
];

@NgModule({
  declarations: [  
    NgContentTestComponent, NgContentCardComponent, HostListenerBankAccountComponent, CreditCardDirective
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

