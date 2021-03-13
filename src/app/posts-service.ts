import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';
import { PostComment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService 
{

constructor(private http: HttpClient) 
{ 

}

refreshData()
{
  let url = environment.apiEndpoint;
  return this.http.get<boolean>(url+ "RefreshData");
}

addComment(comment: PostComment)
{
  let url = environment.apiEndpoint;
  return this.http.post<boolean>(url+ "AddComment", comment);
}

deleteComment(comment: PostComment)
{
  let url = environment.apiEndpoint;
  return this.http.delete<boolean>(url+ "DeleteComment?commentId="+ comment.id);
}

getPosts():Observable<Post[]>
{
      let url = environment.apiEndpoint;
      return this.http.get<Post[]>(url+ "GetAllPosts");
}

  deletePost(post: Post):Observable<boolean>
  {
    let url = environment.apiEndpoint;
      return this.http.delete<boolean>(url + "DeletePost?postId="+ post.id);
  }

}