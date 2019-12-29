import { Component, OnInit, Input } from '@angular/core';
import { RecipesServices } from '../../recipes.service';
import { Recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe: Recipes;
  constructor(private rs: RecipesServices) { }

  ngOnInit() {
  }

  onSelected() {
    this.rs.recipesSelected.emit(this.recipe)
  }

}
