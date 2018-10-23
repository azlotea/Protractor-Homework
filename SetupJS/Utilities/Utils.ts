import {browser} from "protractor";

export class Utils {
    static goToHomepage() {  // daca este de tip static este valabila pentru orice instanta a clasei (cand o apelam nu trebuie sa instantiem noul obiect cu new
        browser.get(browser.baseUrl); //
    }
}