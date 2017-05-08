import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'login'
})

@Component({
    selector: 'page-login',
    template: `
        <ion-content padding>
            <button (click)="nextPage()">Next Page</button>
        </ion-content>
  `
})

export class LoginPage {

    nav: NavController;

    constructor( navCtrl: NavController) {
        this.nav = navCtrl;
    }

    nextPage(form) {
        this.nav.setRoot( 'MainPage' );
    }

}
