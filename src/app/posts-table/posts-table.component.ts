import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PostsService } from '../posts-service';
import { Post } from '../post.model';


@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit 
{
  title = 'Aehu posts';
  public loading: boolean;
  public post: Post;
  public posts: Post[] = [];
  public comments: Comment[] = [];
  public isDelete: boolean; 
  first: number;
  rows: number;
  totalRecords: number;

  public selectedPost : Post;

  constructor(private postsService: PostsService) { 

  }

  ngOnInit(): void 
  {
    this.totalRecords = 10;
    this.first = 0;
    this.rows = 10;
    this.loadPosts();
  }

  
  clear(table: Table) 
  {
    table.clear();
  }

  loadPosts()
  {
    this.postsService.getPosts().subscribe(data=>{
      debugger;
      this.posts = data;
      this.loading = false;
      
    });
  }
 
  deletePost(post: Post) 
  {
    debugger;
      if ( confirm(" Are you sure to delete "+ post.id + " ?") ) 
      {
        this.posts = this.posts.filter(val => val.id !== post.id);
        this.postsService.deletePost(post).subscribe(data=>{
            this.isDelete = data;
        });
      }
    
}

  getCommentsByPostId(postId: string)
  {
      this.postsService.getCommentsByPostId(postId).subscribe(data=>{
      this.comments = data;

  });
  }     

}


