import { Component, OnInit } from '@angular/core';

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
  _showThemes: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  _toggleShowThemes(): void {
    this._showThemes = !this._showThemes;
  }

  _getThemeTextVisibilityProperty(): string {
    return this._showThemes == true ? 'visible' : 'hidden';
  }
}
