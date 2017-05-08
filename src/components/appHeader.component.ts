import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <ion-navbar>
            <ion-title>Header</ion-title>
        </ion-navbar>

        <app-menu (menuClickEvent)="onMenuClickEvent( $event )" ></app-menu>
    `
})

export class AppHeader {

    @Output() onMenuClick: EventEmitter<any> = new EventEmitter();

    constructor(){}

    private onMenuClickEvent( pageName ){
        this.onMenuClick.emit( pageName );
    }

}
