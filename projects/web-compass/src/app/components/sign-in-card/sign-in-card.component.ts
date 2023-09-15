import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  public formSignIn = this.formBuilder.nonNullable.group({
    username: [{ value: '', disabled: false }, []],
    password: [{ value: '', disabled: false }, []]
  });

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log('ContentInit', this.formSignIn.getRawValue());
  }

  public fix($Event: Event) {
    console.log($Event);

    console.log(this.formSignIn.getRawValue());

  }

  public onSubmit(): void {
    console.info(this.formSignIn.getRawValue())
    // this._authService
    //   .singIn(this.formSignIn.getRawValue())
    //   .subscribe()
  }

  public get formControlUsername(): FormControl<string> {
    return this.formSignIn.controls['username']
  }

  public get formControlPassword(): FormControl<string> {
    return this.formSignIn.controls['password']
  }

  public get formControlUsernameStyleState() {
    return {
      'input-error': this.formControlUsername.invalid && this.formControlUsername.touched,
      'input-success': this.formControlUsername.valid && this.formControlUsername.touched
    }
  }

  public get formControlPasswordStyleState() {
    return {
      'input-error': this.formControlPassword.invalid && this.formControlPassword.touched,
      'input-success': this.formControlPassword.valid && this.formControlPassword.touched
    }
  }

}
