import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateWebCompass } from '../../core/store';
import { AuthActions } from '../../core/store/actions/auth.actions';
import { selectAuthIsLoading } from '../../core/store/selectors/auth.selectors';
@Component({
  selector: 'web-sign-in-card',
  templateUrl: './sign-in-card.component.html',
  styleUrls: ['./sign-in-card.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  providers: [
    AuthService,
  ]
})
export class SignInCardComponent {

  private store: Store<StateWebCompass> = inject(Store<StateWebCompass>);


  public isLoading = this.store.selectSignal(selectAuthIsLoading)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  private formBuilder: FormBuilder = inject(FormBuilder);
  private _authService: AuthService = inject(AuthService);

  public formSignIn = this.formBuilder.nonNullable.group({
    username: [{ value: '', disabled: false }, [Validators.required]],
    password: [{ value: '', disabled: false }, [Validators.required]]
  });

  public onSubmit(): void {
    // this.isLoading.update((loading) => !loading)
    this.store.dispatch(AuthActions.load(this.formSignIn.getRawValue()))
    // this._authService
    //   .singIn(this.formSignIn.getRawValue())
    //   .subscribe({
    //     // error: () => this.isLoading.update((loading) => !loading),
    //     // complete: () => this.isLoading.update((loading) => !loading)
    //   })
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
