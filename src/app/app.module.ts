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
import { DetailsIntelPcComponent } from './users/intel/details-pc/details-pc.component';
import { AppRoutingModule } from './app-routing.routing';
import { PageNotFoundComponent } from './users/page-not-found/page-not-found.component';
import { HomePageComponent } from './users/home-page/home-page.component';
import { SimpleHeaderIntelComponent } from './users/intel/components/simple-header-intel/simple-header-intel.component';
import { PcDetailComponent } from './users/components/pc-detail/pc-detail.component';
import { PcInfoComponent } from './users/components/pc-info/pc-info.component';
import { PcSimilarComponent } from './users/components/pc-similar/pc-similar.component';
import { AmdComponent } from './users/amd/amd.component';
import { HeaderAmdComponent } from './users/amd/components/header-amd/header-amd.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderIntelComponent,
    PricePcCardsComponent,
    PricePcAllComponent,
    DetailsPcCardComponent,
    FooterComponent,
    HomeIntelComponent,
    DetailsIntelPcComponent,
    PageNotFoundComponent,
    HomePageComponent,
    SimpleHeaderIntelComponent,
    PcDetailComponent,
    PcInfoComponent,
    PcSimilarComponent,
    AmdComponent,
    HeaderAmdComponent,

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
