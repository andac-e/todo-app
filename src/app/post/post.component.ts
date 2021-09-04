import { Component, OnInit } from '@angular/core';
import { PagingInfo } from '../models/pagingInfo';
import { FavoritePostService } from '../services/favorite-post.service';
import { PostService } from '../services/post.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  pagingInfo: PagingInfo = { currentPage: 1, itemsPerPage: 10 };
  constructor(
    private postService: PostService,
    private favoritePostService: FavoritePostService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addToFavorite(post: Post) {
    this.favoritePostService.addToFavorite(post);
  }
}
