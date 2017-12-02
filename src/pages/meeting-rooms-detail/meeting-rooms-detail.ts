import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MeetingRoomsService } from '../../providers/meeting-rooms-service/meeting-rooms-service';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-meeting-rooms-detail',
  templateUrl: 'meeting-rooms-detail.html',
})
export class MeetingRoomsDetailPage {
  meetingRoom: any = {};
  location: any = [];
  meetingRoomName: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public meetingRoomsSrv: MeetingRoomsService,
    public alert: AlertController,
    public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    this.meetingRoomName = this.navParams.data;
    this.getMeetingRoomDetail();
    this.getLocation();
  }

  getMeetingRoomDetail() {
    this.meetingRoomsSrv.getMeetingRoomDetail(this.meetingRoomName)
      .then(meetingRoom => {
        this.meetingRoom = meetingRoom;
        console.log(meetingRoom);
      });
  }

  getLocation() {
    this.meetingRoomsSrv.getLocations()
      .then(location => this.location = location);
  }

  selectImage() {
    this.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
      for (let i = 0; i < results.length; i++) {
        this.meetingRoom.image = results[i];
      }
    }, (err) => { });
  }

  updateMeetingRoom() {
    this.meetingRoomsSrv.updateMeetingRoom(this.meetingRoom, this.meetingRoomName).then(data => {
      const alert = this.alert.create({
        title: 'Edit Meeting Room',
        message: "Meeting Room updated!",
        buttons: [{
          text: "Accept",
          handler: () => {
            this.cancel();
          },
        }]
      });
      alert.present();
    });
  }

  cancel() {
    this.navCtrl.pop();
  }
}
