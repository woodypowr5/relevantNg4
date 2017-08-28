import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// let style = require("../styles/bulma.css");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/bulma.css']
})
export class AppComponent {
  title = 'app';
}
