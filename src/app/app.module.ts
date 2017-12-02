import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { ImagePicker } from '@ionic-native/image-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MeetingRoomsPage } from '../pages/meeting-rooms/meeting-rooms'
import { MeetingRoomsDetailPage } from '../pages/meeting-rooms-detail/meeting-rooms-detail'
import { MeetingRoomsNewPage } from '../pages/meeting-rooms-new/meeting-rooms-new'

import { MeetingRoomsService } from '../providers/meeting-rooms-service/meeting-rooms-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeetingRoomsPage,
    MeetingRoomsDetailPage,
    MeetingRoomsNewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MeetingRoomsPage,
    MeetingRoomsDetailPage,
    MeetingRoomsNewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MeetingRoomsService
  ]
})
export class AppModule { }
