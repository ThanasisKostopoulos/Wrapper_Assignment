import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { ContentComponent } from 'src/app/content/content.component';
import { FooterComponent } from 'src/app/footer/footer.component';


@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
