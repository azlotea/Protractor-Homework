"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class VeterinariansPage {
    constructor() {
        this.veterinarianFullName = protractor_1.$$("tbody>tr>td:nth-child(1)");
    }
    checkVeterinariansList(numeVet) {
        //console.log(this.veterinarianFullName);
        return this.veterinarianFullName.getText().then(message => {
            return message.includes(numeVet);
        });
    }
}
exports.VeterinariansPage = VeterinariansPage;
