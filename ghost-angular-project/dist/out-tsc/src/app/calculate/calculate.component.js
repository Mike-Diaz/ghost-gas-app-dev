import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CalculateComponent = class CalculateComponent {
    constructor() {
        this.qty = 0; // These 2 lines are what I changed, these are this components “state”, or model
        this.cost = 0; //  They are just normal class properties
    } // like any class, we can initialize values
    ngOnInit() {
        // if you want to run code before the page is displayed
    }
};
CalculateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-calculate',
        templateUrl: './calculate.component.html',
        styleUrls: ['./calculate.component.scss']
    })
], CalculateComponent);
export { CalculateComponent };
//# sourceMappingURL=calculate.component.js.map