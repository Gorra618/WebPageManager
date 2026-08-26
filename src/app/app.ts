import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataForm } from './data-form/data-form';
import { WebList } from './web-list/web-list';
import { IForm } from './models/i-form';

@Component({
  selector: 'app-root',
  imports: [DataForm, WebList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  formData: IForm[] = [];

  ngOnInit(): void {
    const savedData = localStorage.getItem('Pages');

    if (savedData) {
      this.formData = JSON.parse(savedData) as IForm[];
    }
  }

  addFormData(data: IForm): void {
    this.formData = [...this.formData, data];
    this.saveData();
  }

  private saveData(): void {
    localStorage.setItem('Pages', JSON.stringify(this.formData));
  }
}
