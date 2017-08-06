import { ChitAppPage } from './app.po';

describe('chit-app App', function() {
  let page: ChitAppPage;

  beforeEach(() => {
    page = new ChitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
