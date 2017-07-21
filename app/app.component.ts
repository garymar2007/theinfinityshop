import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

//decorator
@Component({
    selector: 'pm-app',
    //back ticks ` are used for multiple lines, double quotes are used for single line.
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']" >Home</a></li>
                        <li><a [routerLink]="['/products']" >Product List</a></li>
                        <li><a [routerLink]="['/contact']" >Contact Us</a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

//class
export class AppComponent { 
    pageTitle: string = 'Infinity Shop';
}
