import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';
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
  first: number;
  rows: number;
  totalRecords: number;

   //clonedPosts: { [s: string]: Post; } = {};

  constructor(private postsService: PostService) { 

  }

  ngOnInit(): void 
  {
    this.totalRecords = 10;
    this.first = 0;
    this.rows = 10;
    this.loadPosts();
  }

  
  onEditInit(event)
  {
    this.post = event.data;
    //this.clonedOrders[this.order.orderID] = {...this.order};
  }
  
  onEditComplete(event)
  {
    
  }

  onEditCancel(event)
  {
    //alert("onEditCancel");
  }

  loadPosts()
  {
    this.postsService.getPosts().subscribe(data=>{
      this.posts = data;
      this.loading = false;
      
    });
   
  }

}


