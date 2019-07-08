import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test recipe",
      " This is simply a test reciepe",
      "https://media1.s-nbcnews.com/j/newscms/2019_18/1433153/carla-lalli-music-today-main-190503-05_058baad9aa2c1be51258f2f6e75d712e.today-front-large.jpg"
    ),
    new Recipe(
      "Pizza",
      " This is second reciepe",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
