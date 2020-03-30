//Page Object Model File imported into the spec.js file
// Modify the test script without modifying the functionality of the test script with Page Objects
var AlfrescoSettingsPage  = function() {
   var username =  element(by.id("username"));
   var  password = element(by.id("password"));
   var  button = element(by.id('login-button'));
   var  clickFolderIcon = element(
       by.xpath( '//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]/span/mat-icon'));
  var enterFolderName = element(
    by.id('adf-folder-name-input'));
  var clickCreateFolderIcon = element(by.id('adf-folder-create-button'));

  var clickIcon = element(
    by.xpath(
      '//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]/span/mat-icon'));



    

    this.get = function() {
        //Navigate to http://qaexercise.envalfresco.com/settings
        browser.get('http://qaexercise.envalfresco.com/settings');

};
       this.setUsername = function(name) {
          username.sendKeys(name);
        }
        
        this.setPassword = function(pass) {
            password.sendKeys(pass);
     
        }

         this.clickButton = function() {
             button.click();
           
          }
          
          //navigate to http://qaexercise.envalfresco.com/files
          this.navigate = function() {
            browser.navigate().to('http://qaexercise.envalfresco.com/files');
     
        }

        //Click on create new folder icon
         this.clickfolderIcon = function() {
             clickFolderIcon.click();
          
    }   
         //Enter folder name
            this.setEnterFolderName = function(fold) {
            enterFolderName.sendKeys(fold);

    }
       //Click to create folder
       this.clickCreateFolderIcon = function() {
        clickCreateFolderIcon.click();

       }

        //Click to create folder
        this.clickIcon = function() {
            clickIcon.click();
    
           }
   
}

module.exports = new AlfrescoSettingsPage ();