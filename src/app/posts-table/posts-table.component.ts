import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PostsService } from '../posts-service';
import { Post } from '../post.model';
import { PostComment } from '../comment.model';
// import { Comment } from "../comment.model";

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit 
{
  title = 'Aehu posts';
  public loading: boolean;
  public submitted: boolean;
  public commentDialog: boolean;
  public post: Post;
  public posts: Post[] = [];
  public comments: PostComment[] = [];
  public comment: PostComment;

  public isDelete: boolean; 
  first: number;
  rows: number;
  totalRecords: number;
  clonedPosts: { [s: string]: Post } = {};
  changeDetection: ChangeDetectionStrategy.OnPush;

  public selectedPost : Post;

  constructor(private postsService: PostsService) { 

  }

  ngOnInit(): void 
  {
    this.loading = true;
    this.totalRecords = 10;
    this.first = 0;
    this.rows = 10;
    this.loadPosts();
    
  }
  // ngOnChanges()
  // {

  // }

  refreshData()
  {
    this.loading = true;
    this.postsService.refreshData().subscribe(data=>{
      this.loading = false;

      if ( data == true)
      {
        window.location.reload();
      }
    });
  }

  openNew(postId:number) {
    
    this.comment = new PostComment();
    this.comment.postId = postId;
    this.submitted = false;
    this.commentDialog = true;
}

addComment() 
{
   this.postsService.addComment(this.comment).subscribe(data=>{
    
    if ( data == true)
    {
      alert("The comment was saved successfully");
    }
    else
    {
      alert("The comment was not saved");
    }
  });
  this.commentDialog = false;
}

deleteComment(comment:PostComment)
{
    if ( confirm(" Are you sure to delete comment "+ comment.id + " ?") ) 
    {
      this.postsService.deleteComment(comment).subscribe(data=>{
        if ( data == true)
        {
          this.comments = this.comments.filter(val => val.id !== comment.id);
          alert("The comment was deleted successfully");
        }
        else
        {
          alert("The comment was not deleted");
        }
      });
}

  }

hideDialog() {
  this.commentDialog = false;
  this.submitted = false;
}

  onRowEditInit(post: Post) {
    this.clonedPosts[post.id] = { ...post };
  }

  onRowEditSave(post: Post) {
    delete this.clonedPosts[post.id];
  }

  onRowEditCancel(post: Post, index: number) {
    this.posts[index] = this.clonedPosts[post.id];
    delete this.clonedPosts[post.id];
  }

  onRowSelect(event)
  {
    debugger;
    var post = event.data as Post;
    post.isSelected = 1;
  }
  
  clear(table: Table) 
  {
    table.clear();
  }

  loadPosts()
  {
    this.postsService.getPosts().subscribe(data=>{
      this.posts = data;
      this.loading = false;
      
    });
  }
 
  deletePost(post: Post) 
  {
      if ( confirm(" Are you sure to delete post "+ post.id + " ?") ) 
      {
        this.posts = this.posts.filter(val => val.id !== post.id);
        this.postsService.deletePost(post).subscribe(data=>{
            this.isDelete = data;
        });
      }
}

}


