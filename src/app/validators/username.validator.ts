import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenWord: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value || '').toString();

    if (!value) {
      // ha üres, nem itt dobunk hibát, azt a required intézi
      return null;
    }

    // kis/nagybetűtől független keresés
    if (value.toLowerCase().includes(forbiddenWord.toLowerCase())) {
      return { forbiddenName: true };
    }

    return null;
  };
}