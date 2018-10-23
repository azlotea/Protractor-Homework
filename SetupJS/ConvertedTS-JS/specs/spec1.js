"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utilities/Utils");
const MenuPage_1 = require("../Pages/MenuPage");
const protractor_1 = require("protractor");
const AddNewOwnerPage_1 = require("../Pages/AddNewOwnerPage");
const OwnersData_1 = require("../TestData/OwnersData");
const OwnersPage_1 = require("../Pages/OwnersPage");
const AddNewVeterinarianPage_1 = require("../Pages/AddNewVeterinarianPage");
const VeterinariansPage_1 = require("../Pages/VeterinariansPage");
let menuPage = new MenuPage_1.MenuPage();
let addNewOwnerPage = new AddNewOwnerPage_1.AddNewOwnerPage(); //initializam un nou obiect de tip MenuPage
let ownersPage = new OwnersPage_1.OwnersPage();
let addNewVeterinarianPage = new AddNewVeterinarianPage_1.AddNewVeterinarianPage();
let veterinariansPage = new VeterinariansPage_1.VeterinariansPage();
describe("PetClinic", () => {
    beforeEach(() => {
        Utils_1.Utils.goToHomepage(); // apeleaza clasa goToHomepage din Utils.ts
    });
    it("Add a new owner - happy path", () => {
        menuPage.clickOwnersButton();
        // browser.sleep(5000);
        menuPage.clickAddNewOwnerButton();
        //browser.sleep(5000);
        addNewOwnerPage.addInformation(OwnersData_1.OwnersData.GigelHappyPath.firstName, OwnersData_1.OwnersData.GigelHappyPath.lastName, OwnersData_1.OwnersData.GigelHappyPath.city, OwnersData_1.OwnersData.GigelHappyPath.address, OwnersData_1.OwnersData.GigelHappyPath.telephone);
        addNewOwnerPage.clickOnAddOwnerButton();
        protractor_1.browser.sleep(2000);
    });
    it("Add a new owner - check phone validation", () => {
        menuPage.clickOwnersButton();
        //browser.sleep(5000);
        menuPage.clickAddNewOwnerButton();
        //browser.sleep(5000);
        addNewOwnerPage.addInformationForModel(OwnersData_1.OwnersData.GigelHappyPath);
        addNewOwnerPage.addTelephone("fdlkjdjckd");
        expect(addNewOwnerPage.isErrorDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(3000);
        expect(addNewOwnerPage.getErrorMessage()).toMatch("Phone number only accept digits");
    });
    it("Check that added owner is present in Owners page", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        expect(ownersPage.checkOwnerInList(OwnersData_1.OwnersData.GigelHappyPath.firstName + " " + OwnersData_1.OwnersData.GigelHappyPath.lastName)).toBeTruthy();
    });
    it("Add a new Veterinarian + Type", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAddNewVeterinarianButton();
        addNewVeterinarianPage.addDataForVeterinarian("Adrian", "Veterinarul");
        protractor_1.browser.sleep(3000);
        addNewVeterinarianPage.checkType();
        protractor_1.browser.sleep(3000);
        addNewVeterinarianPage.clickOnSaveVetButton();
        protractor_1.browser.sleep(3000);
    });
    it("Check that added veterinarian is present in Veterinarians page", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinariansButton();
        expect(veterinariansPage.checkVeterinariansList("Adrian Veterinarul")).toBeTruthy();
    });
});
