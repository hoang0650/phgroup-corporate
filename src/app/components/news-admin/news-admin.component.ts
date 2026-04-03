import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService, NewsItem } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.css']
})
export class NewsAdminComponent implements OnInit {
  news: NewsItem[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'Tất cả';
  categories = ['Tất cả', 'Công nghệ', 'Dự án', 'Tuyển dụng', 'Sự kiện'];

  constructor(
    private newsService: NewsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.news = this.newsService.getAllNews();
  }

  get filteredNews(): NewsItem[] {
    let result = this.news;

    if (this.selectedCategory !== 'Tất cả') {
      result = result.filter(n => n.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(n =>
        n.title.toLowerCase().includes(term) ||
        n.description.toLowerCase().includes(term)
      );
    }

    return result;
  }

  createNews(): void {
    this.router.navigate(['/admin/news/new']);
  }

  editNews(id: number): void {
    this.router.navigate(['/admin/news/edit', id]);
  }

  deleteNews(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa tin tức này?')) {
      this.newsService.deleteNews(id);
      this.loadNews();
    }
  }

  viewNews(id: number): void {
    this.router.navigate(['/news', id]);
  }

  logout(): void {
    if (confirm('Bạn có muốn đăng xuất?')) {
      this.authService.logout();
      this.router.navigate(['/admin/login']);
    }
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  getCategoryClass(category: string): string {
    const classMap: { [key: string]: string } = {
      'Công nghệ': 'category-tech',
      'Dự án': 'category-project',
      'Tuyển dụng': 'category-recruit',
      'Sự kiện': 'category-event'
    };
    return classMap[category] || 'category-default';
  }
}
