import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetingRoomsService } from '../../providers/meeting-rooms-service/meeting-rooms-service';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-meeting-rooms-new',
  templateUrl: 'meeting-rooms-new.html',
})
export class MeetingRoomsNewPage {

  location: any = [];
  meetingRoom: any = {
    engaged: false,
    image: "",
    lastCleanUp: "",
    location: "",
    name: "",
    seats: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public meetingRoomsSrv: MeetingRoomsService,
    public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    this.getLocation();
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

  createMeetingRoom() {
    this.meetingRoomsSrv.createMeetingRoom(this.meetingRoom).then(data => {
      this.cancel();
    });
  }

  cancel() {
    this.navCtrl.pop();
  }
}
