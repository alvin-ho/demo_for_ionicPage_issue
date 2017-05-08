import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../components/shared.module';
import { MainPage } from './main';

@NgModule({
    declarations: [ MainPage ],
    imports: [
        SharedModule,
        IonicPageModule.forChild( MainPage )
    ],
    exports: [
        MainPage
    ]
})

export class MainModule{}
