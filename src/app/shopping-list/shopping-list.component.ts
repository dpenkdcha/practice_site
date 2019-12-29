import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredients[]

  constructor(private slS: shoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slS.getIngredients();
    this.slS.ingredientsChangeed
    .subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
      }
    )
  }

}
