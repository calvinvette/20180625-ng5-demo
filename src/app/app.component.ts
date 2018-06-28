import {Component, Input} from '@angular/core';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title = 'Weasley\'s';
  private _navbarCollapsed: boolean = false;

  toggleNavBar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  @Input()
  set navbarCollapsed(value: boolean) {
    this._navbarCollapsed = value;
  }

  get navbarCollapsed(): boolean {
    return this._navbarCollapsed;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
