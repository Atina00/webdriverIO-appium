// example.e2e.ts

import ButtonsPage from '../pageobjects/buttons.page';

describe('Buttons Section', () => {
  it('should click on the "Buttons" element', async () => {
    const buttonsPage = new ButtonsPage();

    await buttonsPage.clickButtonsElement();
    // Optionally, you can add assertions or additional actions related to the first test
  });

  it('should click on button', async () => {
    // Wait for the first test to complete before executing the second test
    await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the timeout as needed

    const buttonsPage = new ButtonsPage();

    const buttonsHeaderText = await buttonsPage.getButtonsHeaderText();
    console.log('Buttons header text:', buttonsHeaderText);

    await buttonsPage.clickYourButton();
    // Optionally, you can add assertions or additional actions related to the second test
  });
});
