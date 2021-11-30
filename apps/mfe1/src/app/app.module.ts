import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FlightsModule } from './flights/flights.module';
import { HomeComponent } from './home/home.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    HttpClientModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES),
    RendererModule.forRoot(),
    TransferHttpCacheModule,
  ],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
