class ButtonsPage {
  get buttonsElement() {
    return $('//XCUIElementTypeStaticText[@name="Alert Views"]');
  }

  async getButtonsHeaderText() {
    return this.buttonsElement.getText();
  }

  async clickButtonsElement() {
    await this.buttonsElement.waitForDisplayed({ timeout: 5000 });
    await this.buttonsElement.click();
  }

  async clickYourButton() {
    const yourButton = $('//XCUIElementTypeStaticText[@name="Simple"]');
    await yourButton.waitForDisplayed({ timeout: 5000 });
    await yourButton.click();
  
    // Wait for the popup to be displayed
    const popup = $('//XCUIElementTypeStaticText[@name="A Short Title Is Best"]');
    await popup.waitForDisplayed({ timeout: 5000 });
  
  
    const okButton = $('//XCUIElementTypeButton[@name="OK"]'); 
    await okButton.waitForDisplayed({ timeout: 5000 });
    await okButton.click();
  

    await popup.waitForDisplayed({ timeout: 5000, reverse: true });
  }
}

export default ButtonsPage;
