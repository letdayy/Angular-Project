import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {


  colaborador = {
    id: 1,
    imagem: "https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png",
    nome: "Nathan Carlos Exercicio",
    salario: 4500,
    cargo: "Dev PI"
  };


  constructor() {

  }

  ngOnInit(): void {
    console.log("teste");
  }
}
