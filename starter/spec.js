var  AlfrescoSettingsPage = require('./spec.po.js');
// spec.js


describe("ADF Demo App", function() {
  browser.ignoreSynchronization = true;
  browser
    .manage()
    .timeouts()
    .implicitlyWait(2 * 50000);
  it("should see a url qaexercise.envalfresco.com/settings", function() {
    AlfrescoSettingsPage.get();
    element(by.xpath('//*[@id="adf-provider-selector"]')).click();
  });

  //select ECM from dropdownlist.
  browser
    .manage()
    .timeouts()
    .implicitlyWait(2 * 50000);
  it("click on dropodwnlist and select ECM", function() {
    browser
      .actions()
      .mouseMove(element(by.xpath('//*[@id="mat-option-1"]/span')))
      .click()
      .perform();
  });

  //click on apply button
  it("click on APPLY button", function() {
    browser
      .manage()
      .timeouts()
      .implicitlyWait(2 * 50000);
    element(by.id("host-button")).click();
  });
  //Enter username and password to login
  it("On login Page insert username and password to login", function() {
    browser
      .manage()
      .timeouts()
      .implicitlyWait(2 * 50000);
    AlfrescoSettingsPage.setUsername("guest@example.com");
    AlfrescoSettingsPage.setPassword("Password");
    AlfrescoSettingsPage.clickButton();
  });

  it("Navigate to http://qaexercise.envalfresco.com/files ", function() {
    browser
      .manage()
      .timeouts()
      .implicitlyWait(50000);
    AlfrescoSettingsPage.navigate();
  });

  it("Click on create new folder icon", function() {
    browser.sleep(5000);
    AlfrescoSettingsPage.clickfolderIcon();
  });

  it("New folder is displayed enter name, add and create folder", function() {
    browser
      .manage()
      .timeouts()
      .implicitlyWait(50000);
    AlfrescoSettingsPage.setEnterFolderName("Legzy27");
    AlfrescoSettingsPage.clickCreateFolderIcon();
  });

  it("Click on create new folder icon again", function() {
    browser.sleep(5000);
    AlfrescoSettingsPage.clickIcon();
  });

  it("Click new folder is displayed, enter name add and create, you see error message ", function() {
    browser.sleep(4000);
    element(by.id("adf-folder-name-input")).sendKeys("Legzy27");
    browser.sleep(2000);
    element(by.id("adf-folder-create-button")).click();
    browser
    .manage()
    .timeouts()
    .implicitlyWait(50000);
    element(by.id("adf-folder-cancel-button")).click();
  });

  it("Select folder of username and delete ", function() {
    browser.sleep(4000);
  
    var elm = element(by.xpath
      ('//*[@id="document-list-container"]/adf-upload-drag-area/div/div/adf-document-list/adf-datatable/div/div[2]/adf-datatable-row[5]/div[2]/div/div'));
    var EC = protractor.ExpectedConditions;
     browser.wait(EC.elementToBeClickable(elm), 5000);
     elm.click();

     try {
      throw new Error('catch it');
    }
    catch(e) {
      console.log(e);
    }

    browser.sleep(4000);
    element(by.id("action_menu_right_4")).click();
    browser.sleep(3000);
    element.all(by.css('[aria-label="Delete"]')).click();

  
  });
});