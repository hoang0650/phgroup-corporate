import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService, NewsItem } from '../../services/news.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {
  isEditMode = false;
  newsId: number | null = null;

  formData = {
    title: '',
    category: 'Công nghệ',
    image: '',
    date: '',
    description: '',
    content: ''
  };

  categories = ['Công nghệ', 'Dự án', 'Tuyển dụng', 'Sự kiện'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setPageSEO({
      title: 'Quản lý tin tức',
      description: 'Tạo và chỉnh sửa tin tức PHGroup'
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.newsId = Number(id);
      const news = this.newsService.getNewsById(this.newsId);
      if (news) {
        this.formData = {
          title: news.title,
          category: news.category,
          image: news.image,
          date: news.date,
          description: news.description,
          content: news.content
        };
      }
    } else {
      this.formData.date = this.formatDateForInput(new Date());
    }
  }

  formatDateForInput(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc!');
      return;
    }

    if (this.isEditMode && this.newsId) {
      this.newsService.updateNews(this.newsId, this.formData);
    } else {
      this.newsService.createNews(this.formData);
    }

    this.router.navigate(['/admin/news']);
  }

  validateForm(): boolean {
    return !!(
      this.formData.title.trim() &&
      this.formData.category.trim() &&
      this.formData.image.trim() &&
      this.formData.date.trim() &&
      this.formData.description.trim() &&
      this.formData.content.trim()
    );
  }

  onCancel(): void {
    this.router.navigate(['/admin/news']);
  }

  onImageUrlChange(): void {
    if (this.formData.image && !this.formData.description) {
      this.formData.description = 'Hình ảnh: ' + this.formData.image;
    }
  }
}
