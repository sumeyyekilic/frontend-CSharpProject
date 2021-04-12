import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products :Product[] =[

  ] //elimde 5 elemandan oluşan ürünler arrayi. arrayin veri tipi belli değil ?
  constructor() { }

  ngOnInit(): void {
  }

}
