import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataForm } from "./data-form/data-form";
import { WebList } from "./web-list/web-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataForm, WebList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Ejercicio_3');
}
