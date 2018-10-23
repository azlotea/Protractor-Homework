import {Utils} from "../Utilities/Utils";
import {MenuPage} from "../Pages/MenuPage";
import {browser} from "protractor";
import {AddNewOwnerPage} from "../Pages/AddNewOwnerPage";
import {OwnersData} from "../TestData/OwnersData";
import {OwnersPage} from "../Pages/OwnersPage";
import {AddNewVeterinarianPage} from "../Pages/AddNewVeterinarianPage";
import {VeterinariansPage} from "../Pages/VeterinariansPage";
let menuPage = new MenuPage();
let addNewOwnerPage = new AddNewOwnerPage();//initializam un nou obiect de tip MenuPage
let ownersPage = new OwnersPage();
let addNewVeterinarianPage = new AddNewVeterinarianPage();
let veterinariansPage = new VeterinariansPage();

describe("PetClinic", () =>{ // descrierea testului
    beforeEach(() =>{ // beforeEach face ce e in el inainte de fiecare test
        Utils.goToHomepage();  // apeleaza clasa goToHomepage din Utils.ts
    })
    it("Add a new owner - happy path", () => {
        menuPage.clickOwnersButton();
        // browser.sleep(5000);
        menuPage.clickAddNewOwnerButton();
        //browser.sleep(5000);
        addNewOwnerPage.addInformation(OwnersData.GigelHappyPath.firstName, OwnersData.GigelHappyPath.lastName, OwnersData.GigelHappyPath.city, OwnersData.GigelHappyPath.address, OwnersData.GigelHappyPath.telephone);
        addNewOwnerPage.clickOnAddOwnerButton();
        browser.sleep(2000)
    });

    it("Add a new owner - check phone validation", () => {
        menuPage.clickOwnersButton();
        //browser.sleep(5000);
        menuPage.clickAddNewOwnerButton();
        //browser.sleep(5000);
        addNewOwnerPage.addInformationForModel(OwnersData.GigelHappyPath);
        addNewOwnerPage.addTelephone("fdlkjdjckd");

        expect(addNewOwnerPage.isErrorDisplayed()).toBeTruthy();
        browser.sleep(3000);
        expect(addNewOwnerPage.getErrorMessage()).toMatch("Phone number only accept digits");
    });

    it("Check that added owner is present in Owners page", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        expect(ownersPage.checkOwnerInList(OwnersData.GigelHappyPath.firstName + " " + OwnersData.GigelHappyPath.lastName)).toBeTruthy();
    });

    it("Add a new Veterinarian + Type", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAddNewVeterinarianButton();
        addNewVeterinarianPage.addDataForVeterinarian("Adrian","Veterinarul");
        browser.sleep(3000);
        addNewVeterinarianPage.checkType();
        browser.sleep(3000);
        addNewVeterinarianPage.clickOnSaveVetButton();
        browser.sleep(3000);

    });

    it("Check that added veterinarian is present in Veterinarians page", () => {
        menuPage.clickVeterinariansButton();
        menuPage.clickAllVeterinariansButton();
        expect(veterinariansPage.checkVeterinariansList("Adrian Veterinarul")).toBeTruthy();
    });
});