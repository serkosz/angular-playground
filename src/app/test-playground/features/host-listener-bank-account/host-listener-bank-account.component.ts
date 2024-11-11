import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-listener-bank-account',
  template: `
    <p>
      host-listener-bank-account works!
    </p>
    <div>
      <label>
        Credit Card Number
        <input 
          name="credit-card" 
          type="text"
          placeholder="Enter your 16-digit card number"
          app-credit-card>
      </label>
    </div>
  `,
  styles: [
  ]
})
export class HostListenerBankAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
