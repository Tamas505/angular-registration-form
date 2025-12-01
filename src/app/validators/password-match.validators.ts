import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }

  return null;
}