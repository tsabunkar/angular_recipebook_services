import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('nameInput') nameVara: ElementRef;
  @ViewChild('amountInput') amountVara: ElementRef;

  @Output('sendIngredientObjFrmC2P_customEvent') ingredientObj = new EventEmitter<Ingredient>();

  onAddInShoppingCart() {
    /*     console.log(this.nameVara.nativeElement.value);
        console.log(this.amountVara.nativeElement.value); */
    const myObject = { name: this.nameVara.nativeElement.value, amount: this.amountVara.nativeElement.value }
    this.ingredientObj.emit(myObject)

  }

}
