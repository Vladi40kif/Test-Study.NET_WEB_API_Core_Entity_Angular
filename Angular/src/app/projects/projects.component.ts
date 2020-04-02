import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../shared/Aricles/articles.service';
import { ArticlesModelService } from '../shared/Aricles/articleModel.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public articleService: ArticlesService ) { }

  public aritcles: Array<ArticlesModelService>;

  ngOnInit(): void {
    this.articleService.getArticles('Projects').subscribe(resp=>{
      this.aritcles = resp;
    }, err => console.log(err));   
  }

}
