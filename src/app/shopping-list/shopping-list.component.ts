import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 8)
  ];

  constructor() { }
  ngOnInit() { }

  addIngredient(data: { name: string, amount: number }) {
    this.ingredients.push(new Ingredient(data.name, data.amount));
  }


}
