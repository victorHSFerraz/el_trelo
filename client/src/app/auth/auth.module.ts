import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes), ReactiveFormsModule],
    providers: [AuthService],
    declarations: [RegisterComponent]
})
export class AuthModule { }