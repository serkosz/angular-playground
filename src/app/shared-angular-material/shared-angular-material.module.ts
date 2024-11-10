import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatCheckboxModule, MatToolbarModule, MatCardModule ],
  exports: [MatCheckboxModule, MatToolbarModule, MatCardModule ],
})
export class SharedAngularMaterialModule { }