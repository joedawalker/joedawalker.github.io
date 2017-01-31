import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
