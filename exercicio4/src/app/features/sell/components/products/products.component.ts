import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";

  produto = {
    descricao: "Iphone 11",
    preco: 4600,
    quantidade: 1,
    imagem: "https://images.tcdn.com.br/img/img_prod/1154447/iphone_11_64gb_branco_apple_tela_de_6_1_ios_semi_novo_67_2_6caa0fb2a715c31ff42f4f0d3c30e6f7.jpg"
  };


  ngOnInit(): void {
    console.log("teste");
  }

  constructor() { }

}
