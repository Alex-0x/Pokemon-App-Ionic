import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePageRoutingModule } from './favorite-routing.module';

import { FavoritePage } from './favorite.page';
import { MenuToolbarPageModule } from '../pages/menu-toolbar/menu-toolbar.module';

@NgModule({
  declarations: [FavoritePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePageRoutingModule,
    MenuToolbarPageModule,
  ],
})
export class FavoritePageModule {}
