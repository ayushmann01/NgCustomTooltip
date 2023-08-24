import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './partials/tooltip/tooltip.component';
import { CustomTooltipModule } from './customTooltip/customtooltip.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TooltipComponent],
  imports: [BrowserModule, CustomTooltipModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
