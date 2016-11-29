import { PraticePage } from './app.po';

describe('pratice App', function() {
  let page: PraticePage;

  beforeEach(() => {
    page = new PraticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
