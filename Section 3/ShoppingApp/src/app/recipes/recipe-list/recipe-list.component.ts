import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[] = [
   new Recipe('A Test Recipe','This is simply a test','https://i1.wp.com/mypullzone.9vexd6dl53at.maxcdn-edge.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg?resize=1024%2C915'),
   new Recipe('A Test Recipe','This is simply a test','https://i1.wp.com/mypullzone.9vexd6dl53at.maxcdn-edge.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg?resize=1024%2C915')
   ];
  constructor() { }

  ngOnInit() {
  }

}
