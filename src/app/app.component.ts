import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ThemeService } from './services/theme/theme.service';
import { LocalStorageKey } from '../enums/local-storage-key.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService, private themeService: ThemeService) {
    // set theme (light theme is default)
    themeService.setTheme(localStorage.getItem(LocalStorageKey.Theme) === 'dark' ? 'dark' : 'light');
    // set default language
    translate.setDefaultLang('en');
  }
}
