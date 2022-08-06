import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    constructor(private fb: FormBuilder, private authService: AuthService) { }


    form = this.fb.group({
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    error: string | null = null;

    onSubmit(): void {
        this.authService.register(this.form.value).subscribe({
            next: (currentUser) => {
                console.log('currentUser', currentUser);
                this.authService.setToken(currentUser);
                this.authService.setCurrentUser(currentUser);
            },
            error: (err: HttpErrorResponse) => {
                console.log('err', err.error);
                this.error = err.error.join(', ')
            }
        });
    }

}