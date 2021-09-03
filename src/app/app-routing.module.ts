import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { FavoritePostComponent } from './favorite-post/favorite-post.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:TodoComponent},
  {path:"todos", component:TodoComponent},
  {path:"todos/:id", component:TodoDetailComponent},
  {path:"user-todos/:userId", component:TodoComponent},
  {path:"albums", component:AlbumComponent},
  {path:"favorites", component:FavoriteComponent},
  {path:"posts", component:PostComponent},
  {path:"favorite-posts", component:FavoritePostComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
