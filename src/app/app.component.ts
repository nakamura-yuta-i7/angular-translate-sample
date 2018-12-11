import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Translate Application';
  
  constructor(
    private translate: TranslateService
  ) {
    let lang = localStorage.getItem("LANG") || 'ja';
    this.translate.setDefaultLang(lang);
  }
  
  setLang(lang) {
    this.translate.use(lang);
    localStorage.setItem("LANG", lang);
  }
}
