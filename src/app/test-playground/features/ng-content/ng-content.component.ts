import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-test',
  template: `
    <p>
      ng-content works!
    </p>
    
    <div>
      <app-ng-content-card>
        <h2>Card 1</h2>
      </app-ng-content-card>
    </div>

  <br/>

    <div>
      <app-ng-content-card>
        <h2>Card 2</h2>
        <img src="/assets/img/globe_icon.svg"
        class="donut-card-icon"/>
      </app-ng-content-card>
    </div>
  `,
  styles: [
  ]
})
export class NgContentTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
