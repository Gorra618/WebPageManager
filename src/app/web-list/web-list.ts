import { Component, Input } from '@angular/core';
import { IForm } from '../models/i-form';

@Component({
  selector: 'app-web-list',
  imports: [],
  templateUrl: './web-list.html',
  styleUrl: './web-list.scss',
})
export class WebList {
  @Input() formData: IForm[] = [];

  delete(event: Event, index: number): void {
    this.formData.splice(index, 1);
    this.saveData();
  }

  private saveData(): void {
    localStorage.setItem('Pages', JSON.stringify(this.formData));
  }
}
