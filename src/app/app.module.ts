import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextTongxinComponent } from './demos/components/text-tongxin/text-tongxin.component';
import {FormsModule} from '@angular/forms';
import { NgForTextComponent } from './demos/components/ng-for-text/ng-for-text.component';
import { TplVarComponent } from './demos/components/tpl-var/tpl-var.component';
import { SizerComponent } from './demos/components/sizer/sizer.component';
import { TplOperatorsComponent } from './demos/components/tpl-operators/tpl-operators.component';
import { TransferPanelComponent } from './demos/components/transfer-panel/transfer-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';
import {CodemirrorModule} from 'ng2-codemirror';
import { CodemirrorComponent } from './codemirror/codemirror.component';

@NgModule({
  declarations: [
    AppComponent,
    TextTongxinComponent,
    NgForTextComponent,
    TplVarComponent,
    SizerComponent,
    TplOperatorsComponent,
    TransferPanelComponent,
    LayoutComponent,
    HerosComponent,
    CodemirrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
