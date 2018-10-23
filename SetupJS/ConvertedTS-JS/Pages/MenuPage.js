"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MenuPage {
    constructor() {
        this.menuItems = protractor_1.$$(".nav.navbar-nav li a");
        this.homeButton = this.menuItems.get(0);
        this.ownersButton = this.menuItems.get(1);
        this.veterinariansButton = this.menuItems.get(4);
        this.petTypesButton = this.menuItems.get(7);
        this.specialitiesButton = this.menuItems.get(8);
        this.addNewOwnerButton = this.menuItems.get(3);
        this.allOwnersButton = this.menuItems.get(2);
        this.addNewVeterinarianButton = this.menuItems.get(6);
        this.allVeterinariansButton = this.menuItems.get(5);
    }
    //methods
    clickOwnersButton() {
        this.ownersButton.click();
    }
    clickAddNewOwnerButton() {
        this.addNewOwnerButton.click();
    }
    clickAllOwnersButton() {
        this.allOwnersButton.click();
    }
    clickVeterinariansButton() {
        this.veterinariansButton.click();
    }
    clickAddNewVeterinarianButton() {
        this.addNewVeterinarianButton.click();
    }
    clickAllVeterinariansButton() {
        this.allVeterinariansButton.click();
    }
}
exports.MenuPage = MenuPage;
