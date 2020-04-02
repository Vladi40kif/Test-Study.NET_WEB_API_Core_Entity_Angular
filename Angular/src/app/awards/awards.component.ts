import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../shared/Aricles/articles.service';
import { ArticlesModelService } from '../shared/Aricles/articleModel.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor(public articleService: ArticlesService ) { }

  public aritcles: Array<ArticlesModelService>;

  ngOnInit(): void {
    this.articleService.getArticles('Awards').subscribe(resp=>{
      this.aritcles = resp;
    }, err => console.log(err));   
  }

}
