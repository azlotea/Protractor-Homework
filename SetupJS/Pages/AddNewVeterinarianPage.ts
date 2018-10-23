import {$, $$, browser, By, element, protractor} from "protractor";
import {OwnerModel} from "../Models/OwnerModel";

export class AddNewVeterinarianPage {
    firstNameField = $("#firstName");
    lastNameField = $("#lastName");
    typeField = $("#specialties");

    saveVetButton = $("[type=submit]");



    addDataForVeterinarian(firstName: string, lastName: string) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
        this.typeField.click();
    }

    checkFirstType = $(" [value='1: Object']")

    checkType() {
        this.checkFirstType.click();
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }

    clickOnSaveVetButton() {
        this.saveVetButton.click();
    }


}


