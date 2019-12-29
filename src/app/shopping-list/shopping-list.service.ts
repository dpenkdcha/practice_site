import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";

export class shoppingListService {
    ingredientsChangeed = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients('Potatos', 5),
        new Ingredients('Tomatos', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient); 
        this.ingredientsChangeed.emit(this.ingredients.slice()); 
    }

    addIngredients(ingredients: Ingredients[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChangeed.emit(this.ingredients.slice())
    }

}