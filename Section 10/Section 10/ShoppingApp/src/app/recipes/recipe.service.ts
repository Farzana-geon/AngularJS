import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes :Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'http://img.taste.com.au/6tblbz3V/w643-h428-cfill-q90/taste/2016/11/curried-brown-rice-and-lentil-salad-with-chorizo-31617-1.jpeg',
    [
        new Ingredient('Rice', 1),
        new Ingredient('Lentils', 5),
        new Ingredient('capsicum', 3),
        new Ingredient('Chorizo', 15),
        new Ingredient('corn', 2),
        new Ingredient('green onion', 4)
    ]),
    new Recipe('Pancakes',
    'This is simply a test',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/7/21/1/FNM_050110-Insert-015_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371593147709.jpeg',
     [
        new Ingredient('Blueberries', 20),
        new Ingredient('chocolate chips', 20),
        new Ingredient('eggs', 3),
        new Ingredient('butter', 1),
        new Ingredient('flour', 1)
     ])
    ];
    constructor(private slService : ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
      this.slService.addIngredients(ingredients);
    }
}