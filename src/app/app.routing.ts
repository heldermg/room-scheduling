import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomListComponent } from './room/room-list.component';
import { RoomDetailComponent } from './room/room-detail.component';
import { RoomAddComponent } from './room/room-add.component';

const appRoutes: Routes = [
  {
    path: 'rooms',
    component: RoomListComponent
  },
  {
    path: '/room/detail/:id',
    component: RoomDetailComponent
  },
  {
    path: '/room/add',
    component: RoomAddComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
