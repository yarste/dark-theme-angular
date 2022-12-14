import { Component } from '@angular/core';
import ColorSchemeService from "../services/color-scheme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dark-mode-angular';
  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    this.colorSchemeService.init();
  }
}
