import { Recipes } from "./recipes.model";

export class RecipesServices {
    private recipes: Recipes[] = [
        new Recipes('A Test Recipe', 'Test', '/assets/image/recipe1.jpg'),
        new Recipes('A Test Recipe', 'Test', '/assets/image/recipe2.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}