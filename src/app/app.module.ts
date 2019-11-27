import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";
import { RoutesModule } from "./modules/routes/routes.module";
import { JwPaginationComponent } from "jw-angular-pagination";

import { AppComponent } from "./app.component";
import { PostsService } from "./services/posts.service";
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule, RoutesModule],
  declarations: [
    AppComponent,
    PostsListComponent,
    HeaderComponent,
    PostsComponent,
    HomeComponent,
    JwPaginationComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostsService]
})
export class AppModule {}
