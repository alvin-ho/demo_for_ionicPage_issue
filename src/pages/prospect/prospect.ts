import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

// import services

// import components

@IonicPage({
    segment: 'prospect'
})

@Component({
    selector: 'page-prospect',
    template: `
    <ion-content>
        <h3>Page Prospect</h3>
        <button (click)="onPageClick()">Go dashboard</button>
        <button (click)="onLoginClick()">Go Login</button>
    </ion-content>
    `
})

export class ProspectPage {

  constructor(public navCtl: NavController) { }

  onPageClick(){
    this.navCtl.push( 'DashboardPage' )
  }

  onLoginClick(){
    this.navCtl.setRoot( 'LoginPage' );
  }

}
