import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../../components/theme/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
