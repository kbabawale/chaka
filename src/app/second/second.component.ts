import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  posts: any;
  staticPosts: any;

  constructor(private network: NetworkService) { }

  async ngOnInit() {

    this.staticPosts = [
      {
        author: "Tim Higgins",
        description: "Tech giant’s move comes after Google booted the app from the Play Store",
        publishedAt: "2021-01-10T01:15:00Z",
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        title: "Apple Suspends Parler From App Store",
        url: "https://www.wsj.com/articles/apple-suspends-parler-from-app-store-11610241352",
        urlToImage: "https://images.wsj.net/im-283181/social"
      },
      {
        author: "Aruna Viswanatha, Sadie Gurman, Cameron McWhirter",
        content: "White House officials pushed Atlantas top federal prosecutor to resign before Georgias U.S. Senate runoffs because President Trump was upset he wasnt doing enough to investigate the presidents unprov… [+1032 chars]",
        description: "White House officials pushed Atlanta's top federal prosecutor to resign before Georgia's U.S. Senate runoffs because President Trump was upset he wasn't doing enough to investigate the president's allegations of election fraud, people familiar with the matter…",
        publishedAt: "2021-01-09T22:40:02Z",
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        title: "WSJ News Exclusive | White House Forced Georgia U.S. Attorney to Resign",
        url: "https://www.wsj.com/articles/white-house-forced-georgia-u-s-attorney-to-resign-11610225840",
        urlToImage: "https://images.wsj.net/im-283165/social"
      },
      {
        author: null,
        content: "Inside the Tear of God: A Unique House on Crete That Filters the Sun 9/7/2020For his home on Crete, Greeces largest island, George Kalykakis wanted something unique. He got a sculptural structure, n… [+117 chars]",
        description: "A Sriwijaya Air jet with 62 people on board lost contact with air-traffic control Saturday during a flight from Indonesia’s capital, Jakarta, to Pontianak, the capital of West Kalimantan province on Indonesia’s Borneo island. Image: Louis Anderson/AFP via Get…",
        publishedAt: "2021-01-09T20:16:46Z",
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        title: "Sriwijaya Boeing Passenger Plane Crashes in Indonesia",
        url: "https://www.wsj.com/video/sriwijaya-boeing-passenger-plane-crashes-in-indonesia/ABF73B6C-EFEB-4CB5-86DF-E59481EE0475.html",
        urlToImage: "http://m.wsj.net/video/20210109/indoflight010921/indoflight010921_1280x720.jpg"
      }
    ]

    this.posts = await this.network.getArticles();
    this.posts = this.posts.articles ? this.posts.articles : this.staticPosts;

  }

  goToPage(page) {
    window.open(page, "_blank");
  }

}
