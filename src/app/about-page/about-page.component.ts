import { Component, Input, OnInit } from '@angular/core';
import { JobListing, JOB_HISTORY } from './about-job-history-information';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  @Input() leftValue: number = 100;

  _jobHistory: JobListing[] = JOB_HISTORY;

  constructor() {}

  ngOnInit(): void {}
}
