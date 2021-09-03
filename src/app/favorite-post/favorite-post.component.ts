import { Component, OnInit } from '@angular/core';
import { FavoritePostService } from '../services/favorite-post.service';
import { FavoritePost } from './favorite-post';

@Component({
  selector: 'app-favorite-post',
  templateUrl: './favorite-post.component.html',
  styleUrls: ['./favorite-post.component.css'],
})
export class FavoritePostComponent implements OnInit {
  favoritePosts: FavoritePost[] = [];
  constructor(private favoritePostService: FavoritePostService) {}

  ngOnInit(): void {
    this.favoritePosts = this.favoritePostService.getFavoritePosts();
  }
}
