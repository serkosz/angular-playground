import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-card',
  template: `
    <p>
      <mat-card appearance="outlined">
        <mat-card-content>
          <ng-content></ng-content>
        </mat-card-content>
      </mat-card>
    </p>
  `,
  styles: [
  ]
})
export class NgContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
