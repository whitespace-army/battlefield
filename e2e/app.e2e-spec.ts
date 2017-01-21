import { WhiteSpaceArmyPage } from './app.po';

describe('white-space-army App', function() {
  let page: WhiteSpaceArmyPage;

  beforeEach(() => {
    page = new WhiteSpaceArmyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
