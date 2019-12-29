import { Component, OnInit } from '@angular/core';
import { RecipesServices } from './recipes.service';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { Recipes } from './recipes.model';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServices]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipes;

  constructor(private rs: RecipesServices) { }

  ngOnInit() {
    this.rs.recipesSelected
    .subscribe(
      (recipe: Recipes) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
