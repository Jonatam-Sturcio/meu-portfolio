import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LinkNavBar } from './models/link-navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: "navbar.components.html",
})
export class NavbarComponent {
  public colapsarNavBar: boolean = false;

  public linksNavbar: LinkNavBar[] = [
  { href: "#sobre", texto:"Sobre Mim" },
  { href: "#habilidades", texto:"Minhas Habilidades" },
  { href: "#stack", texto:"Stack" },
  { href: "#experiencias", texto:"Experiências" },
  { href: "#portfolio", texto:"Portfólio" }
];

}
