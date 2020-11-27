import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarAddPageRoutingModule } from './lugar-add-routing.module';

import { LugarAddPage } from './lugar-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarAddPageRoutingModule
  ],
  declarations: [LugarAddPage]
})
export class LugarAddPageModule {}
