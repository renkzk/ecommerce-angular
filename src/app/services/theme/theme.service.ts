import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../../../enums/local-storage-key.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  setTheme(theme: 'light' | 'dark') {
    localStorage.setItem(LocalStorageKey.Theme, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  getCurrentTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    return currentTheme;
  }
}
