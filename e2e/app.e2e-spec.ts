import { RoomSchedulingPage } from './app.po';

describe('room-scheduling App', function() {
  let page: RoomSchedulingPage;

  beforeEach(() => {
    page = new RoomSchedulingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
