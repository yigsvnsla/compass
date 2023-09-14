import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'web-sign-in-card',
  templateUrl: './sign-in-card.component.html',
  styleUrls: ['./sign-in-card.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  providers: [
    AuthService,
  ]
})
export class SignInCardComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private _authService: AuthService = inject(AuthService);

  public formSignIn: FormGroup = this.formBuilder.nonNullable.group({
    username: [{ value: 'admin', disabled: false }, [Validators.required]],
    password: [{ value: 'admin', disabled: false }, [Validators.required]]
  });

  public onSubmit(): void {
    this._authService
      .singIn(this.formSignIn.value)
      .subscribe()
  }

  public get formControlUsername() {
    return this.formSignIn.get(['username'])
  }

  public get formControlPassword() {
    return this.formSignIn.get(['password'])
  }
}
