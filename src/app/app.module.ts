import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DashboardService } from './pages/dashboard/dashboard.service';
import { ImageUtilService } from './shared/imaging/image-util.service';
import { StorageService } from './shared/auth/storage.service';
import { ClienteService } from './account/signup/cliente.service';

import { AuthInterceptorProvider } from './shared/auth/auth-interceptor';
import { AuthService } from './shared/auth/auth.service';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorInterceptorProvider } from './shared/error/error-interceptor';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthInterceptorProvider,
    ErrorInterceptorProvider, 
    AuthService, 
    StorageService,
    ClienteService, 
    ImageUtilService, 
    DashboardService
  ]
})
export class AppModule {}
