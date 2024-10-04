import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
  carrossel: Carrossel[] = [
    {
      nome: "Locadora",
      img: "locadora.png",
      link: "https://github.com/Jonatam-Sturcio/LocadoraDeVeiculosV2",
    },
    {
      nome: "Pokedex",
      img: "pokedex.png",
      link: "https://jonatam-sturcio.github.io/pokedex/",
    },
    {
      nome: "Geranciador de Filmes",
      img: "filmes.png",
      link: "https://jonatam-sturcio.github.io/GerenciadorFilmes/filmes",
    },
  ];
}

interface Carrossel {
  nome: string;
  img: string;
  link: string;
}
