import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';

@IonicPage({
    segment : 'dashboard'
})

@Component({
    selector: 'page-dashboard',
    template: `
    <ion-content>
        <h3>Page Dashboard</h3>
        <button (click)="onPageClick()">Go Prospect</button>
        <button (click)="onLoginClick()">Go Login</button>
    </ion-content>
  `
})

export class DashboardPage {

    nav: NavController;

    constructor( navCtrl: NavController ) {
        this.nav = navCtrl;
    }

    onPageClick(){
        this.nav.parent.push( 'ProspectPage' );
    }

    onLoginClick(){
        this.nav.parent.setRoot( 'LoginPage' );
    }

}
