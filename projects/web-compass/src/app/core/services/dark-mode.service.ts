import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private document: Document = inject(DOCUMENT);

  constructor() {
    const prefersDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.checkingTheme(prefersDark.matches)
    prefersDark.addEventListener('change', $event => this.checkingTheme($event.matches))
  }

  public toggle() {
    const stageTheme = localStorage['theme']
    this.document.documentElement.setAttribute('data-theme', localStorage['theme'] = ((stageTheme === 'light') ? 'dark' : 'light'))

    // const prefersDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    // * esta wea funciona acondicionada a mas de un tema pero no tengo idea de como pivotar entre 3 o mas temas
    // this.document.documentElement.setAttribute('data-theme', ('theme' in localStorage) ? localStorage['theme'] : !('theme' in localStorage) && prefersDark ? localStorage['theme'] = 'dark' : localStorage['theme'] = 'ligth')
  }

  public get theme(): boolean {
    return Boolean(localStorage['theme'])
  }

  private checkingTheme(darkScheme: boolean) {
    // ya existe un tema
    if ('theme' in localStorage) this.document.documentElement.setAttribute('data-theme', localStorage['theme'])
    // checkeamos si por casualidad existe un tema dark  o si no existe tema alguno en el localstorage y el matchMedia es del dispositivo es 'dark'
    if (localStorage['theme'] === 'dark' || !('theme' in localStorage) && darkScheme ) this.document.documentElement.setAttribute('data-theme', localStorage['theme'] = 'dark')
    else this.document.documentElement.setAttribute('data-theme', localStorage['theme'] = 'light');
  }

}
