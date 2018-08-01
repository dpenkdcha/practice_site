import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('A Test Recipe', 'Test', '/assets/image/recipe1.jpg'),
    new Recipes('A Test Recipe', 'Test', '/assets/image/recipe2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
