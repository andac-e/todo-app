import { TestBed } from '@angular/core/testing';

import { FavoritePostService } from './favorite-post.service';

describe('FavoritePostService', () => {
  let service: FavoritePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
