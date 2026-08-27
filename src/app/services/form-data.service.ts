import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IForm } from '../models/i-form';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private readonly storageKey = 'Pages';

  private readonly formDataSubject = new BehaviorSubject<IForm[]>(
    this.loadData()
  );

  readonly formData$ = this.formDataSubject.asObservable();

  addFormData(data: IForm): void {
    const pages = [...this.formDataSubject.value, data];

    this.formDataSubject.next(pages);
    this.saveData(pages);
  }

  deleteFormData(index: number): void {
    const pages = this.formDataSubject.value.filter(
      (_, currentIndex) => currentIndex !== index
    );

    this.formDataSubject.next(pages);
    this.saveData(pages);
  }

  private loadData(): IForm[] {
    const data = localStorage.getItem(this.storageKey);

    return data ? (JSON.parse(data) as IForm[]) : [];
  }

  private saveData(data: IForm[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}