import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { MeetingRoomsService } from '../../providers/meeting-rooms-service/meeting-rooms-service';
import { MeetingRoomsDetailPage } from '../meeting-rooms-detail/meeting-rooms-detail';
import { MeetingRoomsNewPage } from '../meeting-rooms-new/meeting-rooms-new';

@IonicPage()
@Component({
  selector: 'page-meeting-rooms',
  templateUrl: 'meeting-rooms.html',
})
export class MeetingRoomsPage {

  meetingRooms: any;
  meetingRoomsList: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public meetingRoomsSrv: MeetingRoomsService,
    public alert: AlertController) {
  }

  loadMeetingRooms() {
    this.meetingRoomsList = [];
    let loader = this.loadingCtrl.create({
      content: 'Loading meeting Rooms...'
    });

    loader.present().then(() => {
      this.meetingRoomsSrv.getMeetingRooms().then(data => {
        this.meetingRooms = data;
        for (var key in this.meetingRooms) {
          this.meetingRoomsList.push({ name: key, location: this.meetingRooms[key].location, image: this.meetingRooms[key].image })
        }
        loader.dismiss();
      });
    });
  }

  viewDetail(name) {
    this.navCtrl.push(MeetingRoomsDetailPage, name);
  }

  createMeetingRoom() {
    this.navCtrl.push(MeetingRoomsNewPage);
  }

  deleteMeetingRoom(meetingRoomName) {
    const alert = this.alert.create({
      title: 'Delete Meeting Room',
      message: `Are you sure you want to delete ${meetingRoomName}?`,
      buttons: [{
        text: "Accept",
        handler: () => {
          this.meetingRoomsSrv.deleteMeetingRoom(meetingRoomName).then(data => {
            this.loadMeetingRooms();
          });
        }
      },
      {
        text: "Cancel",
        role: "Cancel"
      }]
    });

    alert.present();
  }

  ionViewWillEnter() {
    this.loadMeetingRooms();
  }

}
