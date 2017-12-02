import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingRoomsPage } from './meeting-rooms';

@NgModule({
  declarations: [
    MeetingRoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingRoomsPage),
  ],
})
export class MeetingRoomsPageModule {}
