import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeLapsePipe } from './time-lapse.pipe';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteMadeComponent } from './quote-made/quote-made.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLapsePipe,
    QuoteComponent,
    QuoteFormComponent,
    QuoteMadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
