import { SourcePage } from './app.po';

describe('source App', () => {
  let page: SourcePage;

  beforeEach(() => {
    page = new SourcePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
