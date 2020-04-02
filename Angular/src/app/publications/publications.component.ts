import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../shared/Aricles/articles.service';
import { ArticlesModelService } from '../shared/Aricles/articleModel.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {

  constructor(public articleService: ArticlesService ) { }

  public aritcles: Array<ArticlesModelService>;

  ngOnInit(): void {
    this.articleService.getArticles('Publications').subscribe(resp=>{
      this.aritcles = resp;
    }, err => console.log(err));   
  }
}
