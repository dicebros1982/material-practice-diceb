import { Component, OnInit } from "@angular/core";
import { Posts } from "../../models/posts.model";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.css"]
})
export class PostsListComponent implements OnInit {
  posts: Posts[];
  pageLength: number;

  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }
}
