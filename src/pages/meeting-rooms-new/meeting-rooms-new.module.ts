import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingRoomsNewPage } from './meeting-rooms-new';

@NgModule({
  declarations: [
    MeetingRoomsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingRoomsNewPage),
  ],
})
export class MeetingRoomsNewPageModule {}
