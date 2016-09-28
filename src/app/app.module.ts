import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room/room-list.component';
import { RoomDetailComponent } from './room/room-detail.component';
import { RoomAddComponent } from './room/room-add.component';
import { RoomService } from './room/room.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
