import { Component, OnInit } from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

@Component({
  selector: 'app-ngx-pay-pal-module',
  templateUrl: './ngx-pay-pal-module.component.html',
  styleUrls: ['./ngx-pay-pal-module.component.scss']
})
export class NgxPayPalModuleComponent implements OnInit {

  public payPalConfig?: PayPalConfig;

  constructor() { }

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'ATuIjn4I10jUn8eztMhMQ3Ld-grPkkKUQAL0au_r3RVmvGo_zyzPWlIPQQqETB9otHH23P5PuUMfF_lz',
  // sandbox: 'AaHccAV-1JOGEI8ZjNaLltvXuR-HSiOZW4En8-IUE01kXozURpp6ElVgOCxDHUz4lwQtcNYXgvt5Xccr',
  // production: '<insert production client id>'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: 9
        }
      }]
    });
  }
}
