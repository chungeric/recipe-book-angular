import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Salad',
      'This is a delicious salad.',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'
    ),
    new Recipe(
      'Cereal',
      'Crunchy.',
      'http://www.couponclippingcook.com/wp-content/uploads/2012/06/4-cereal-in-bowl.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
