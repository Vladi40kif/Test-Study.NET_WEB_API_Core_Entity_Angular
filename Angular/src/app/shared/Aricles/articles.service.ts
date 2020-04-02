import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ArticlesModelService } from './articleModel.service';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    data: Object;

    constructor(private http: HttpClient) 
	{}
	
    mainUrl: string = "https://localhost:44373/api/Articles/";

     public getArticles(category: string): Observable<Array<ArticlesModelService>> {
        return this.http.get(this.mainUrl + category).pipe(map((res: any) =>
            res.map((Articles: ArticlesModelService) =>
                new ArticlesModelService().deserialize(Articles)))); 
    }
}

