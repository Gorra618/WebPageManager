import { Component, EventEmitter, Output } from '@angular/core';
import { IForm } from '../models/i-form';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  imports: [ReactiveFormsModule],
  templateUrl: './data-form.html',
  styleUrl: './data-form.scss',
})
export class DataForm {
  @Output() formSubmitted = new EventEmitter<IForm>();
  Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      fPageName: ['', Validators.required],
      fPageLink: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]]
    });
  }


  submitForm(): void {
    if (this.Form.invalid) {
      this.Form.markAllAsTouched();
      return;
    }

    const data: IForm = {
      pageName: this.Form.value.fPageName.trim(),
      pageLink: this.Form.value.fPageLink.trim()
    };

    this.formSubmitted.emit(data);
    this.Form.reset();
  }
}
