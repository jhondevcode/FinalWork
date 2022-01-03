import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    MenubarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
