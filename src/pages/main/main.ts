import { IonicPage, NavController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

// import services

@IonicPage({
    segment: 'main'
})

@Component({
    selector: 'page-main',
    template: `
      <ion-header>
          <app-header (onMenuClick)="changeView( $event )"></app-header>
      </ion-header>

      <ion-content>
        <ion-nav #content></ion-nav>
      </ion-content>

    `
})

export class MainPage {

    //set children
    @ViewChild( 'content' ) content;

    public nav: NavController;

    constructor( navCtrl: NavController ) {
        this.nav = navCtrl;
    }

    ngOnInit() {
       this.content.push( 'DashboardPage' );
    }


    private changeView( pageName ){
        // this.content.push( pageName );

        this.nav.push( pageName ); // ---> the URL does not change

        // this.nav.setRoot( pageName ); // ---> the URL has changed correctly

    }

}
