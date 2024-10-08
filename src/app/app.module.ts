import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrimengModule } from './primeng/primeng.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { LatestNewsComponent } from './components/landing-page/latest-news/latest-news.component';
import { DatePipe } from '@angular/common';
import { CardComponent } from './components/landing-page/card/card.component';
import { EventsTimelineComponent } from './components/landing-page/events-timeline/events-timeline.component';
import { OverviewComponent } from './components/landing-page/overview/overview.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    LatestNewsComponent,
    CardComponent,
    EventsTimelineComponent,
    OverviewComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
