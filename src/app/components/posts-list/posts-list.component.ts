import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Posts } from "../../models/posts.model";
import { PostsService } from "../../services/posts.service";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class PostsListComponent implements OnInit {
  posts: Posts[];
  pageLength: number;
  // current page of items
  pageOfItems: Array<any>;

  getPosts(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }
}
