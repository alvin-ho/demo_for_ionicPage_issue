import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import { SharedModule } from '../../components/shared.module';

@NgModule({
    declarations: [ LoginPage ],
    imports: [
        SharedModule,
        IonicPageModule.forChild( LoginPage ),
    ],
    exports: [ LoginPage ]
})

export class LoginModule{}
