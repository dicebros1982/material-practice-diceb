import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Posts } from "../models/posts.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  constructor(private http: HttpClient) {}
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl);
  }
}
