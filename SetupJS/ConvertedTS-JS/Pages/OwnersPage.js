"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class OwnersPage {
    constructor() {
        this.ownersFullName = protractor_1.$$(".ownerFullName");
    }
    checkOwnerInList(owner) {
        return this.ownersFullName.getText().then(message => {
            return message.includes(owner);
        });
    }
}
exports.OwnersPage = OwnersPage;
