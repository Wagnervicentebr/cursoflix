import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    CardComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    
  ]
})
export class SharedModule { }
