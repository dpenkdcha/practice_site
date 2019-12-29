import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesServices } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipes;

  constructor(private rs: RecipesServices) { }

  ngOnInit() {
  }

  onAddShoppingList() {
    this.rs.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
