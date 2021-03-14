import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts-service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:  [],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
   });

     service = TestBed.inject(PostsService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
