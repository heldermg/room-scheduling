import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'room-detail',
  templateUrl: 'app/room/room-detail.component.html',
  styleUrls: ['app/room/room-detail.component.css']
})

export class RoomDetailComponent implements OnInit {
  @Input() room: Room;

  constructor(
    private _router: ActivatedRoute,
    private _roomService: RoomService) {
  }

  ngOnInit() {
    this._router.params.forEach((params: Params) => {
      let id = +params['id'];
      this._roomService.getRoom(id).then(room => this.room = room);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
