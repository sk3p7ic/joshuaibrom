import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-site';
  currentTheme = 'theme-synthwave';
  currentPageIndex: number = 0;

  ngOnInit() {
    // Code
  }

  setCurrentPageIndex(newIndex: number): void {
    this.currentPageIndex = newIndex;
  }
}
