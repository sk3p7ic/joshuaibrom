import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  @Input() leftValue: number = 200;

  constructor() {}

  ngOnInit(): void {}
}
