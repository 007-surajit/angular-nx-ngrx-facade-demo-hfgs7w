import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppComponent } from './app.component';

import { CarsListComponent } from './cars-list/cars-list.component';

// Relative paths are needed here until StackBlitz supports mono-repos
import { CarsStateModule } from '../../../../libs/cars/state/src'; 

@NgModule({
  declarations: [AppComponent, CarsListComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}, {
        metaReducers: !environment.production ? [storeFreeze] : []
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CarsStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
