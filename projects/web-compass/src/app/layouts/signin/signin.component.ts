import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInCardComponent } from '../../components/sign-in-card/sign-in-card.component';

@Component({
  selector: 'web-signin',
  standalone: true,
  imports: [
    SignInCardComponent,
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

}
