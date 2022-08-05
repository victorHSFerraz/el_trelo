import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    constructor(private fb: FormBuilder) { }


    form = this.fb.group({
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    onSubmit(): void {
        console.log('onSubmit', this.form.value);
    }

}