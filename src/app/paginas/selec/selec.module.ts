import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecPageRoutingModule } from './selec-routing.module';

import { SelecPage } from './selec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecPageRoutingModule
  ],
  declarations: [SelecPage]
})
export class SelecPageModule {}
