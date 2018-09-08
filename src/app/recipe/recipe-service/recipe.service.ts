import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected_CustomEvent_fromC2S = new EventEmitter<Recipe>();

    constructor() { }

    //making this recipesArray as private, so that this property will be encapsulated from outside 
    private recipesArray: Recipe[] = [
        new Recipe('Pasta', 'Pasta dish is made of sunfest pasta', 'https://images.media-allrecipes.com/images/56589.png'),
        new Recipe('Gobi Manchuri ', 'Gobi Manchuri is an indian cum chinse dish', 'http://s3.amazonaws.com/appforest_uf/f1486610188974x481748790945857800/Semi_Gravy_gobi__manchurian.jpg')
    ];

    //getters
    getRecipe(): Recipe[] {
        return this.recipesArray.slice(); //slice() -> we only get copy of this recipesArray, not the actual
        //array
    }

}