import { Component, OnInit } from '@angular/core';
import { RecipesServices } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor(private rs: RecipesServices) { }

  ngOnInit() {
  }

  onSelected() {

  }

}
