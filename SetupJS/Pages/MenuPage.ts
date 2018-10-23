import {$$} from "protractor";

export class MenuPage {
    menuItems = $$(".nav.navbar-nav li a");
    homeButton = this.menuItems.get(0);
    ownersButton = this.menuItems.get(1);
    veterinariansButton = this.menuItems.get(4);
    petTypesButton = this.menuItems.get(7);
    specialitiesButton = this.menuItems.get(8);

    addNewOwnerButton = this.menuItems.get(3);
    allOwnersButton = this.menuItems.get(2);
    addNewVeterinarianButton = this.menuItems.get(6);
    allVeterinariansButton = this.menuItems.get(5);

    //methods
    clickOwnersButton(): void {
        this.ownersButton.click();
    }

    clickAddNewOwnerButton(): void {
        this.addNewOwnerButton.click();
    }

    clickAllOwnersButton(): void {
        this.allOwnersButton.click();
    }

    clickVeterinariansButton(): void {
        this.veterinariansButton.click()
    }

    clickAddNewVeterinarianButton(): void {
        this.addNewVeterinarianButton.click();
    }

    clickAllVeterinariansButton(): void {
        this.allVeterinariansButton.click();
    }

}