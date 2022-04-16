import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-site';
  _currentTheme = '';
  currentPageIndex: number = 0;

  ngOnInit() {
    // Code
  }

  setCurrentPageIndex(newIndex: number): void {
    this.currentPageIndex = newIndex;
  }

  setCurrentTheme(newTheme: string): void {
    this._currentTheme = newTheme;
  }
}
