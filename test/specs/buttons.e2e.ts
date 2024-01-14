// example.e2e.ts

import ButtonsPage from '../pageobjects/buttons.page';

describe('Buttons Section', () => {
  it('should click on the "Buttons" element', async () => {
    const buttonsPage = new ButtonsPage();

    await buttonsPage.clickButtonsElement();
    
  });

  it('should click on button', async () => {
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    const buttonsPage = new ButtonsPage();

    const buttonsHeaderText = await buttonsPage.getButtonsHeaderText();
    console.log('Buttons header text:', buttonsHeaderText);

    await buttonsPage.clickYourButton();
    
  });
});
