import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
   new Recipe('A Test Recipe','This is simply a test','http://img.taste.com.au/6tblbz3V/w643-h428-cfill-q90/taste/2016/11/curried-brown-rice-and-lentil-salad-with-chorizo-31617-1.jpeg'),
   new Recipe('Pancakes','This is simply a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/7/21/1/FNM_050110-Insert-015_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371593147709.jpeg')
   ];

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }
}
