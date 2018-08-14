import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[validateLocation]',
    // to make this validator work, need to register LocationValidator to NG_VALIDATORS service,
    // make sure to set multi: true in order to add it to the NG_VALIDATORS
    // else it will override NG_VALIDATORS.
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        // get parent control for onlineUrl
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return { validateLocation: false };
        }
    }
}
