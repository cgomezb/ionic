import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingRoomsDetailPage } from './meeting-rooms-detail';

@NgModule({
  declarations: [
    MeetingRoomsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingRoomsDetailPage),
  ],
})
export class MeetingRoomsDetailPageModule {}
