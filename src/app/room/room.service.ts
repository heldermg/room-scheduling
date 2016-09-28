import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Room } from './room';

@Injectable()
export class RoomService {

  private roomsUrl = 'app/rooms';

  constructor(private http: Http) { }

  getRooms() {
    return this.http.get(this.roomsUrl)
               .toPromise()
               .then(response => response.json().data as Room[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getRoom(id: number) {
      return this.getRooms()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

  saveRoom(room: Room) {
      // ROOMS.push(room);
  }

  removeRoom(roomId: number) {

  }
}
