import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navSelected: string = 'recipes';

  navSelect(data: {navSelected: string}) {
    this.navSelected = data.navSelected;
  }
}
