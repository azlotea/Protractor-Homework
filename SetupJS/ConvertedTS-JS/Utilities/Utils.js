"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Utils {
    static goToHomepage() {
        protractor_1.browser.get(protractor_1.browser.baseUrl); //
    }
}
exports.Utils = Utils;
