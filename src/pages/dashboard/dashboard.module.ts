import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// import modules
import { SharedModule } from '../../components/shared.module';

// import services

// import components
import { DashboardPage } from './dashboard';

@NgModule({
    declarations: [
        DashboardPage
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild( DashboardPage )
    ],
    exports : [ DashboardPage ]
})

export class DashboardModule{}
