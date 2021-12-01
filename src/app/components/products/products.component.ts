import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id:any = '';

  accordion(ids: any){
    
    if(this.id == ids){
      this.id = '';
    } else {
      this.id = ids;
    }
  }

}
