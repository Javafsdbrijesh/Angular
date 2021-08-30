import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../app/post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

// Data Path : https://live-posts-aaccb-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //Fun 1-  Save Functionality
  saveData() {
    // Step 1: get list of posts from post.service
    const listOfPopsts: Post[] = this.postService.getPosts();
    this.http
      .put(
        'https://live-posts-aaccb-default-rtdb.firebaseio.com/posts.json',
        listOfPopsts
      )
      .subscribe((resp) => {
        console.log(resp);
      });

    //Step 2: send list of post to backed
  }

  //Fun 2-  Fetch Functionality
  fetchData(){
      // Step: fetch data from database
      this.http.get<Post[]>(
          'https://live-posts-aaccb-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
          tap((listOfPosts: Post[]) =>{
          console.log(listOfPosts);
           // Step2: Send to post service
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();

     
  }
}
