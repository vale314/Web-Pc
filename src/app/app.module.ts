import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderIntelComponent } from './users/intel/components/header-intel/header-intel.component';
import { PricePcCardsComponent } from './users/intel/components/price-pc-cards/price-pc-cards.component';
import { PricePcAllComponent } from './users/intel/components/price-pc-all/price-pc-all.component';
import { DetailsPcCardComponent } from './users/intel/components/details-pc-card/details-pc-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeIntelComponent } from './users/intel/home-intel/home-intel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderIntelComponent,
    PricePcCardsComponent,
    PricePcAllComponent,
    DetailsPcCardComponent,
    FooterComponent,
    HomeIntelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
