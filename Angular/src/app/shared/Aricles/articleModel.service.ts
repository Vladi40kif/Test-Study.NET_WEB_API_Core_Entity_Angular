import { Injectable } from '@angular/core';
import { Deserializable } from '../deserializable.model';
@Injectable({
    providedIn: 'root'
})

export class ArticlesModelService implements Deserializable{
    articleID:number;
    title: string;
    context:string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}