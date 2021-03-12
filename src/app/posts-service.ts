import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService 
{

  httpOptions = 
  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient) 
{ 

}

  getPosts():Observable<Post[]>
  {
      let url = environment.apiEndpoint;
      return this.http.get<Post[]>(url+ "GetAllPosts");
  }


  getCommentsByPostId(postId: string):Observable<Comment[]>
  {
      debugger;
      let url = environment.apiEndpoint;
      return this.http.get<Comment[]>(url + "GetComments?postId="+ postId);
  }

  deletePost(post: Post):Observable<boolean>
  {
    let url = environment.apiEndpoint;
      return this.http.delete<boolean>(url + "DeletePost?postId="+ post.id);
  }

}