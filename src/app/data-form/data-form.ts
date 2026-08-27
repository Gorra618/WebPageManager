import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import { IForm } from '../models/i-form';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './data-form.html',
  styleUrl: './data-form.scss',
})
export class DataForm {
  private readonly formDataService = inject(FormDataService);

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      fPageName: ['', Validators.required],
      fPageLink: [
        '',
        [Validators.required, Validators.pattern(/^https?:\/\//)],
      ],
    });
  }

  submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value as IForm;

    this.formDataService.addFormData(data);
    this.form.reset();
  }
}
