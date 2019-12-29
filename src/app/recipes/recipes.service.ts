import { Recipes } from "./recipes.model";
import { EventEmitter,  Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesServices {
    recipesSelected = new EventEmitter<Recipes>();

    private recipes: Recipes[] = [
        new Recipes('A Test Recipe1', 'Test', '/assets/image/recipe1.jpg',[new Ingredients("A",1)]),
        new Recipes('A Test Recipe2', 'Test', '/assets/image/recipe2.jpg',[new Ingredients("B",2),new Ingredients("C",3)])
      ];

    constructor(private slS: shoppingListService) {}
    

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.slS.addIngredients(ingredients);
    }
}