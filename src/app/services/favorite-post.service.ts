import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FavoritePost } from '../favorite-post/favorite-post';
import { FavoritePosts } from '../favorite-post/favorite-posts';
import { Post } from '../post/post';

@Injectable({
  providedIn: 'root',
})
export class FavoritePostService {
  constructor(private toastrService: ToastrService) {}

  getFavoritePosts(): FavoritePost[] {
    return FavoritePosts;
  }

  addToFavorite(post: Post) {
    let item = FavoritePosts.find((p) => p.post.id === post.id);

    if (!item) {
      let favItem: FavoritePost = { post: post };
      this.toastrService.success('Favorilere eklendi.', post.title);
      FavoritePosts.push(favItem);
    } else {
      this.toastrService.error('Daha önce eklediniz', post.title)
    }
  }
}
