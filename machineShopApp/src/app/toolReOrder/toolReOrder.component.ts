import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-toolReOrder',
    templateUrl: "./toolReOrder.component.html",
    styleUrls: ['./toolReOrder.component.css']
})

export class toolReOrderComponent{

    itemRequestForm = this.formBuilder.group({
        item: ""
    });

    constructor(
        private formBuilder: FormBuilder
    ) {}

    onSubmit(): void {
        console.log('Your tool is: ', this.itemRequestForm.value);
        this.itemRequestForm.reset();
    }

}