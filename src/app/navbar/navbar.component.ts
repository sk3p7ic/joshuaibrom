import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type LinkTitle = { text: string; icon: string };

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  width: number = 0;
  iconify: boolean = false;
  linkTitles: LinkTitle[] = [
    { text: 'home', icon: 'home' },
    { text: 'about', icon: 'info' },
    { text: 'projects', icon: 'code' },
    { text: 'contact', icon: 'contact_page' },
  ];
  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.iconify = this.width >= 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.width = window.innerWidth;
    this.iconify = this.width >= 800;
  }

  setSelectedIndex(newIndex: number): void {
    this.selectedIndex = newIndex;
    console.log(this.selectedIndex);
  }

  calculateBarOffset(): number {
    return 36.5 + 9 * this.selectedIndex;
  }
}
