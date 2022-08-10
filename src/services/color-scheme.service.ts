import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

export enum ColorSchemeE {
  Dark = 'dark',
  Light = 'light',
  Normal = 'normal'
}

export const defaultColorScheme = ColorSchemeE.Normal;

@Injectable({
  providedIn: 'root'
})

export default class ColorSchemeService {

  private colorScheme: ColorSchemeE = defaultColorScheme;
  private colorSchemeAttrName = 'color-scheme';
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init() {
    this._getColorScheme();
    this.renderer.setAttribute(document.firstElementChild, this.colorSchemeAttrName, this.colorScheme);
  }

  _detectPreferredColorScheme() {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ColorSchemeE.Dark : ColorSchemeE.Light;
    } else {
      this.colorScheme = ColorSchemeE.Light;
    }
  }

  _setColorScheme(scheme: ColorSchemeE) {
    this.colorScheme = scheme;
    localStorage.setItem('scheme', scheme);
  }

  _getColorScheme() {
    const localStorageColorScheme = localStorage.getItem('scheme');
    localStorageColorScheme ? this.colorScheme = localStorageColorScheme as ColorSchemeE : this._detectPreferredColorScheme();
  }

  set(scheme: ColorSchemeE) {
    this._setColorScheme(scheme);
    this.renderer.setAttribute(document.firstElementChild, this.colorSchemeAttrName, scheme);
  }

  get(): ColorSchemeE {
    return this.colorScheme;
  }

}
