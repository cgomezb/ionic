import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class MeetingRoomsService {

  baseUrl = "https://meetingroomspxl.firebaseio.com/";

  constructor(public http: Http) {
  }

  getMeetingRooms() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/meetingRooms.json`)
        .subscribe(resp => resolve(resp.json()));
    });
  }

  getMeetingRoomDetail(name) {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/meetingRooms/${name}.json`)
        .subscribe(resp => resolve(resp.json()));
    });
  }

  getLocations() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/location.json`)
        .subscribe(resp => resolve(resp.json()));
    });
  }

  createMeetingRoom(meetingRoom) {
    return new Promise(resolve => {
      this.http.patch(`${this.baseUrl}/meetingRooms/${meetingRoom.name}.json`, JSON.stringify(meetingRoom))
        .subscribe(resp => resolve(resp.json()));
    });
  }

  updateMeetingRoom(meetingRoom, meetingRoomName) {
    return new Promise(resolve => {
      this.http.patch(`${this.baseUrl}/meetingRooms/${meetingRoomName}.json`, JSON.stringify(meetingRoom))
        .subscribe(resp => resolve(resp.json()));
    });
  }

  deleteMeetingRoom(meetingRoomName) {
    return new Promise(resolve => {
      this.http.delete(`${this.baseUrl}/meetingRooms/${meetingRoomName}.json`)
        .subscribe(resp => resolve(resp.json()));
    });
  }
}
