import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-test',
  template: `
    <p>
      ng-content works!
    </p>
    <mat-card appearance="outlined">
      <mat-card-content>Simple card</mat-card-content>
  </mat-card>
  `,
  styles: [
  ]
})
export class NgContentTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
