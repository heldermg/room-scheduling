import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let rooms = [
      {id: 11, name: 'Sala 1'},
      {id: 12, name: 'Sala 2'},
      {id: 13, name: 'Sala 3'},
      {id: 14, name: 'Sala 4'},
      {id: 15, name: 'Sala 5'}
    ];
    return {rooms};
  }
}
