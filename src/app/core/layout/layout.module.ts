import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [MenuComponent, LayoutComponent],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
