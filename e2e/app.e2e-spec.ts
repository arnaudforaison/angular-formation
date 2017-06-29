import { ProxiadFormationPage } from './app.po';

describe('proxiad-formation App', () => {
  let page: ProxiadFormationPage;

  beforeEach(() => {
    page = new ProxiadFormationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
