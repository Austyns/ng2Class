import { CrudAppPage } from './app.po';

describe('crud-app App', function() {
  let page: CrudAppPage;

  beforeEach(() => {
    page = new CrudAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
