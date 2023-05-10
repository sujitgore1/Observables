import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaysComponent } from './ways/ways.component';
import { NewObsComponent } from './new-obs/new-obs.component';
import { OfObservableComponent } from './of-observable/of-observable.component';
import { FromObservableComponent } from './from-observable/from-observable.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    WaysComponent,
    NewObsComponent,
    OfObservableComponent,
    FromObservableComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
