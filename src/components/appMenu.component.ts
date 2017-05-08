import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <ion-toolbar>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <a *ngFor="let item of listItems" (click)="onMenuClick( item.page )">
                        {{ item.name }}
                    </a>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-toolbar>

    `
})

export class AppMenu {

    private readonly listItems = [
        { name: 'Dashboard', page: 'DashboardPage' },
        { name: 'Prospect', page: 'ProspectPage' },
        { name: 'Prospect', page: 'ProspectPage' }
    ];

    @Output() menuClickEvent: EventEmitter<any> = new EventEmitter();

    page: string;

    constructor(){}

    private onMenuClick( page: string ): void {
        this.menuClickEvent.emit( page );
        this.page = page;
    }

}
