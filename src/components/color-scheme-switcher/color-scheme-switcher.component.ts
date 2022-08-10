import {Component, OnInit} from '@angular/core';
import ColorSchemeService, {ColorSchemeE, defaultColorScheme} from "../../services/color-scheme.service";

@Component({
  selector: 'app-color-scheme-switcher',
  templateUrl: './color-scheme-switcher.component.html',
  styleUrls: ['./color-scheme-switcher.component.css']
})
export default class ColorSchemeSwitcherComponent implements OnInit {

  public currentScheme: ColorSchemeE;

  public colorSchemeOptions = [
    {
      label: " ☀️ ",
      value: ColorSchemeE.Light
    },
    {
      label: " 🌙️ ",
      value: ColorSchemeE.Dark
    },
    {
      label: " OS ",
      value: ColorSchemeE.Normal
    }
  ];

  constructor(
    private colorSchemeService: ColorSchemeService,
  ) {
    this.currentScheme = this.colorSchemeService.get()
  }

  ngOnInit(): void {
  }

  setTheme(scheme :ColorSchemeE) {
    this.colorSchemeService.set(scheme);
    this.currentScheme = scheme
  }

}
