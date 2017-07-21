import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/contact/contact.component.html'
})
export class ContactComponent{
    pageTitle:string = "Contact Detail";
    phoneNumber: string = "0793703500";
    emailAddress: string = "theinfinityshop2016@gmail.com";

    constructor(private _router: Router){

    }

    onBack():void{
        this._router.navigate(['/products']);
    }
}