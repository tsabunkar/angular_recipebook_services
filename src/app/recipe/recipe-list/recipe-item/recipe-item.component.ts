import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('singleRecipeItemPropBindingfromParnt2Child') recipe: Recipe;


  constructor() { }


  ngOnInit() {

  }

  @Output() recipeSelectedFromRecipeItem_customEvent_FrmC2P = new EventEmitter<void>();
  onClickOfSingleRecipeItemSelected() {
    // console.log('onClickOfSingleRecipeItem');
    this.recipeSelectedFromRecipeItem_customEvent_FrmC2P.emit();
  }

}
