"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddNewVeterinarianPage {
    constructor() {
        this.firstNameField = protractor_1.$("#firstName");
        this.lastNameField = protractor_1.$("#lastName");
        this.typeField = protractor_1.$("#specialties");
        this.saveVetButton = protractor_1.$("[type=submit]");
        this.checkFirstType = protractor_1.$(" [value='1: Object']");
    }
    addDataForVeterinarian(firstName, lastName) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
        this.typeField.click();
    }
    checkType() {
        this.checkFirstType.click();
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }
    clickOnSaveVetButton() {
        this.saveVetButton.click();
    }
}
exports.AddNewVeterinarianPage = AddNewVeterinarianPage;
