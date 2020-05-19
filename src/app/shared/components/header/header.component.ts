import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursoflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  mudarMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

}
