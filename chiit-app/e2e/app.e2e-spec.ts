import { ChiitAppPage } from './app.po';

describe('chiit-app App', function() {
  let page: ChiitAppPage;

  beforeEach(() => {
    page = new ChiitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
