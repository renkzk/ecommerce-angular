import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  constructor(private themeService: ThemeService) {}

  // only set on init
  currentTheme = this.themeService.getCurrentTheme();

  toggleTheme() {
    console.log(this.currentTheme);
    const newTheme = this.themeService.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
