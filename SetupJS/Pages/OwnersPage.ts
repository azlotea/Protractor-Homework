import {$, $$, browser} from "protractor";


export class OwnersPage {
    ownersFullName = $$(".ownerFullName")

    checkOwnerInList(owner) {
        return this.ownersFullName.getText().then(message => {
            return message.includes(owner);
        });
    }
}