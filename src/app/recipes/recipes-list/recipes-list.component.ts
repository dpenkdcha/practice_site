import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesServices } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[];

  constructor(private rs: RecipesServices) { }

  ngOnInit() {
    this.recipes = this.rs.getRecipes();
  }

}
