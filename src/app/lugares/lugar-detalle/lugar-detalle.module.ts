import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarDetallePageRoutingModule } from './lugar-detalle-routing.module';

import { LugarDetallePage } from './lugar-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarDetallePageRoutingModule
  ],
  declarations: [LugarDetallePage]
})
export class LugarDetallePageModule {}
