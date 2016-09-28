import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Room } from './room';
import { RoomService } from './room.service';

@Component({
    selector: 'room-list',
    templateUrl: 'app/room/room-list.component.html',
    styleUrls: ['app/room/room-list.component.css']
})

export class RoomListComponent implements OnInit {
    rooms: Room[];
    selectedRoom: Room;

    constructor(
        private _router: Router,
        private _roomService: RoomService) {
    }

    getRooms() {
        this._roomService.getRooms().then(rooms => this.rooms = rooms);
    }

    ngOnInit() {
        this.getRooms();
    }

    gotoDetail(room: Room) {
        this._router.navigate(['/room/detail', room.id ]);
    }

    gotoAdd() {
        this._router.navigate(['/room/add']);
    }
}
