import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
    detailedRecipeElementSend2Child: Recipe
  
    detailedRecipeELementRxedAtParent(detailedRecipeELement: Recipe) { //detailedRecipeELement -> Recieved 
      //from child Comp (RecipeListComponent) to Parent Compo (RecipeComponent)
  
      this.detailedRecipeElementSend2Child = detailedRecipeELement
    }




  //  ###################2nd way of doing above logic#################################### 

  // detailedRecipeELementRxedAtParentProperty: Recipe

  // #######################################################################################

}
