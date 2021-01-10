import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  posts: any;

  constructor(private network: NetworkService) { }

  async ngOnInit() {
    this.posts = await this.network.getArticles();
    this.posts = this.posts.articles ? this.posts.articles : null;
  }

  goToPage(page) {
    window.open(page, "_blank");
  }

}
