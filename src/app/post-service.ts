import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
              };

constructor(private http: HttpClient) { }

getPosts():Observable<Post[]>
{
    let url = environment.apiEndpoint;
    return this.http.get<Post[]>(url);
}

}