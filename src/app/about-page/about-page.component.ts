import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  @Input() leftValue: number = 100;

  constructor() {}

  ngOnInit(): void {}
}
