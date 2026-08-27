import { Component, inject } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { IForm } from '../models/i-form';

@Component({
  selector: 'app-web-list',
  standalone: true,
  templateUrl: './web-list.html',
  styleUrl: './web-list.scss',
})
export class WebList {
  private readonly formDataService = inject(FormDataService);

  formData: IForm[] = [];

  constructor() {
    this.formDataService.formData$.subscribe((data) => {
      this.formData = data;
    });
  }

  delete(event: Event, index: number): void {
    event.preventDefault();
    this.formDataService.deleteFormData(index);
  }
}
