import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";

  produtos: Array<Product> = [
    {
      descricao: "Iphone 11 128GB",
      preco: 3200,
      quantidade: 1,
      imagem: "https://o.remove.bg/downloads/d1e4c861-ac06-436a-94d2-890f181bf51c/71kZfQA-Y7L._AC_SX679_-removebg-preview.png",
      disponibilidade: true,
    },
    {
      descricao: "Iphone 12 64GB",
      preco: 3800,
      quantidade: 1,
      imagem: "https://o.remove.bg/downloads/39cbb0a3-a2c2-4b8a-9583-12ff45c46ca3/51misXwIxAL._AC_SX679_-removebg-preview.png",
      disponibilidade: false,
    },
    {
      descricao: "Iphone 13 128GB",
      preco: 4463,
      quantidade: 1,
      imagem: "https://o.remove.bg/downloads/0b28daf0-84e1-43d5-9ce5-84fd6b680a91/41rfDU6FGqL.__AC_SY445_SX342_QL70_ML2_-removebg-preview.png",
      disponibilidade: false,
    },
    {
      descricao: "Iphone 14 128GB",
      preco: 5500,
      quantidade: 1,
      imagem: "https://o.remove.bg/downloads/8cb81e15-8797-48e0-a015-6f12e64f9a24/618Bb%2BQzCmL._AC_SX342_SY445_-removebg-preview.png",
      disponibilidade: true,
    }
  ];


  ngOnInit(): void {
    console.log("teste");
  }

  constructor() { }

}
