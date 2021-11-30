import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
// import { SharedLibModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    RendererModule.forRoot(),
    TransferHttpCacheModule,
  ],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
