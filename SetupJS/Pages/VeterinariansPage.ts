import {$$} from "protractor";


export class VeterinariansPage {
    veterinarianFullName = $$("tbody>tr>td:nth-child(1)")

    checkVeterinariansList(numeVet) {
        //console.log(this.veterinarianFullName);
        return this.veterinarianFullName.getText().then(message => {
            return message.includes(numeVet);

        });
    }
}