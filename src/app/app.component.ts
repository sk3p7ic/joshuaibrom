import { Component, OnInit } from '@angular/core';

type PagePositionAssistant = { index: number; initLeft: number; left: number };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-site';
  _currentTheme = '';
  currentPageIndex: number = 0;
  _pagePositions: PagePositionAssistant[] = [
    { index: 0, initLeft: 0, left: 0 },
    { index: 1, initLeft: 100, left: 100 },
    { index: 2, initLeft: 200, left: 200 },
    { index: 3, initLeft: 300, left: 300 },
  ];

  ngOnInit() {
    // Code
  }

  _shiftPages(shiftLeft: boolean, numShifts: number): void {
    const shiftValue = shiftLeft ? -100 : 100;
    for (let shift = 0; shift < numShifts; shift++) {
      for (let i = 0; i < this._pagePositions.length; i++) {
        this._pagePositions[i].left += shiftValue;
      }
    }
    console.log(this._pagePositions);
  }

  setCurrentPageIndex(newIndex: number): void {
    const shiftLeft = this.currentPageIndex < newIndex;
    const numShifts = Math.abs(newIndex - this.currentPageIndex);
    this.currentPageIndex = newIndex;
    this._shiftPages(shiftLeft, numShifts);
  }

  setCurrentTheme(newTheme: string): void {
    this._currentTheme = newTheme;
  }
}
