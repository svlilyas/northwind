import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category1 = { categoryId: 1, categoryName: 'Bardak',  unitPrice: 5 }
  category2 = { categoryId: 2, categoryName: 'Laptop',  unitPrice: 5 }
  category3 = { categoryId: 3, categoryName: 'Mouse',  unitPrice: 5 }
  category4 = { categoryId: 4, categoryName: 'Keyboard', unitPrice: 5 }
  category5 = { categoryId: 5, categoryName: 'Camera', unitPrice: 5 }

  categories = [this.category1, this.category2, this.category3, this.category4, this.category5];

  constructor() { }

  ngOnInit(): void {
  }

}
