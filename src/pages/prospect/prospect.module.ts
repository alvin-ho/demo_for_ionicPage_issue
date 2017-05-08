import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// import modules
import { SharedModule } from '../../components/shared.module';

// import components
import { ProspectPage } from './prospect';

@NgModule({
    declarations: [
        ProspectPage
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild( ProspectPage ),
    ],
    exports : [ ProspectPage ]
})

export class ProspectModule{}
