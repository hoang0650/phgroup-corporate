import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { NewsService, NewsItem } from '../../services/news.service';

export interface ContentBlock {
  type: 'paragraph' | 'heading';
  text: string;
}

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news: NewsItem | undefined;
  relatedNews: NewsItem[] = [];
  contentBlocks: ContentBlock[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.news = this.newsService.getNewsById(id);

    if (!this.news) {
      this.router.navigate(['/news']);
      return;
    }

    this.relatedNews = this.newsService.getRelatedNews(this.news.id, this.news.category);
    this.contentBlocks = this.parseContent(this.news.content);

    this.seoService.setPageSEO({
      title: this.news.title,
      description: this.news.description,
      type: 'article',
      image: this.news.image
    });
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  parseContent(content: string): ContentBlock[] {
    const paragraphs = content.split('\n\n');
    return paragraphs.map(p => {
      const trimmed = p.trim();
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return { type: 'heading' as const, text: trimmed.slice(2, -2) };
      }
      return { type: 'paragraph' as const, text: trimmed };
    }).filter(b => b.text.length > 0);
  }
}
