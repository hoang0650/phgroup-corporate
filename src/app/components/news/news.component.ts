import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { NewsService, NewsItem } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  categories = ['Tất cả', 'Công nghệ', 'Dự án', 'Tuyển dụng', 'Sự kiện'];
  selectedCategory = 'Tất cả';
  news: NewsItem[] = [];

  constructor(
    private seoService: SeoService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.news = this.newsService.getAllNews();
    this.seoService.setPageSEO({
      title: 'Tin tức',
      description: 'Cập nhật tin tức công nghệ, dự án, tuyển dụng và sự kiện từ PHGroup - Công ty công nghệ hàng đầu Việt Nam.',
      url: 'https://phgrouptechs.com/news',
      type: 'website'
    });
  }

  get filteredNews() {
    if (this.selectedCategory === 'Tất cả') {
      return this.news;
    }
    return this.news.filter(n => n.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
}
