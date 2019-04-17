import { Component } from '@angular/core';
import {NewsApiService} from './news-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	mArticles:Array<any>;
	mSources:Array<any>;

	like:any = 12;
	currentLike;
	constructor(private newsapi:NewsApiService){
		console.log('app component constructor called');  
  }
  
//  getRandom(){
// 	this.randomValue;
// 	setInterval(()=>{
// 		this.randomValue = (Math.floor( (Math.random() * 100) + 1 ));
// 		console.log('iiiiiiiiiii',this.randomValue);
// 	},2000);
//  }

increment(index, f){
	console.log(index, f.like);
	f.like = f.like+1;
	// ref.focus();
	
 }

	ngOnInit() {
        //load articles
	    this.newsapi.initArticles().subscribe(data => { this.mArticles = data['articles']; console.log(this.mArticles)});
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);

// this.getRandom();
		}
		


    show(){
    	console.log(this.mArticles);
		console.log(this.mSources);	
    }
	

	searchArticles(source){
		console.log("selected source is: "+source);

		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}

  
}
