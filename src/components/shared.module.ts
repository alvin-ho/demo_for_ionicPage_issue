import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppHeader } from './appHeader.component';
import { AppMenu } from './appMenu.component';

@NgModule({
    declarations: [
        AppHeader,
        AppMenu
    ],
    imports: [
        IonicModule
    ],
    providers: [],
    exports: [
        AppHeader,
        AppMenu
    ]
})

export class SharedModule {}
