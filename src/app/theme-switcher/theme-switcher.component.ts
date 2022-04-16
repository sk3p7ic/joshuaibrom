import { Component, EventEmitter, OnInit, Output } from '@angular/core';

type ThemeDef = { name: string; classname: string };

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  _themes: ThemeDef[] = [
    { name: 'Default', classname: '' },
    { name: 'Synthwave', classname: 'theme-synthwave' },
  ];
  _currentThemeIndex = 0;
  _showThemes: boolean = false;
  @Output() onSwitchTheme = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  _toggleShowThemes(): void {
    this._showThemes = !this._showThemes;
  }

  _getThemeTextVisibilityProperty(): string {
    return this._showThemes == true ? 'visible' : 'hidden';
  }

  _setSelectedTheme(index: number): void {
    this._currentThemeIndex = index;
    this.onSwitchTheme.emit(this._themes[this._currentThemeIndex].classname);
  }
}
