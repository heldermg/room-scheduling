import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable()
export class RoomService {
  getRooms() {
      //return Promise.resolve(ROOMS);
  }

  getRoom(id: number) {
      /*return Promise.resolve(ROOMS)
        .then(rooms => rooms.filter(room => room.id === id)[0]
      );*/
  }

  saveRoom(room: Room) {
      //ROOMS.push(room);
  }

  removeRoom(roomId: number) {
      
  }
}
