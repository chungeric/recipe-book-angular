import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // can also use ViewChild here to access the input using the local references
  // in the brackets
  // e.g.
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addedNewIngredient = new EventEmitter<{ name:string, amount:number }>();

  constructor() { }
  ngOnInit() { }

  addNewIngredient(name: string, amount: number) {
    this.addedNewIngredient.emit({ name, amount });
  }

}
