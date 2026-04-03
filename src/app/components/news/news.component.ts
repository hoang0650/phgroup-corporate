import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  categories = ['Tất cả', 'Công nghệ', 'Dự án', 'Tuyển dụng', 'Sự kiện'];
  selectedCategory = 'Tất cả';

  news = [
    {
      id: 1,
      title: 'PHGroup ra mắt giải pháp AI mới cho doanh nghiệp',
      category: 'Công nghệ',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      date: '2026-03-28',
      description: 'PHGroup vừa chính thức ra mắt giải pháp trí tuệ nhân tạo tiên tiến, giúp doanh nghiệp tự động hóa quy trình và tối ưu hóa hiệu suất làm việc.'
    },
    {
      id: 2,
      title: 'Hợp tác chiến lược với đối tác Nhật Bản',
      category: 'Dự án',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop',
      date: '2026-03-25',
      description: 'PHGroup ký kết thỏa thuận hợp tác chiến lược với tập đoàn SoftBank Nhật Bản, mở ra cơ hội mới trong lĩnh vực fintech và edtech.'
    },
    {
      id: 3,
      title: 'Tuyển dụng kỹ sư phần mềm Senior',
      category: 'Tuyển dụng',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
      date: '2026-03-20',
      description: 'PHGroup thông báo tuyển dụng 20 kỹ sư phần mềm Senior cho các vị trí phát triển ứng dụng web và mobile. Ưu tiên ứng viên có kinh nghiệm từ 5 năm trở lên.'
    },
    {
      id: 4,
      title: 'PHGroup tham gia hội thảo Tech Summit 2026',
      category: 'Sự kiện',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      date: '2026-03-15',
      description: 'Đại diện PHGroup tham gia hội thảo Tech Summit 2026 với chủ đề "Tương lai của công nghệ", chia sẻ về xu hướng AI và Cloud Computing.'
    },
    {
      id: 5,
      title: 'Cập nhật xu hướng công nghệ năm 2026',
      category: 'Công nghệ',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      date: '2026-03-10',
      description: 'Năm 2026 hứa hẹn nhiều biến động trong ngành công nghệ với sự phát triển mạnh mẽ của AI tạo sinh, quantum computing và metaverse.'
    },
    {
      id: 6,
      title: 'Hoàn thành dự án chuyển đổi số cho tập đoàn lớn',
      category: 'Dự án',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      date: '2026-03-05',
      description: 'PHGroup tự hào thông báo hoàn thành dự án chuyển đổi số toàn diện cho Tập đoàn Vingroup, giúp tối ưu hóa 30% chi phí vận hành.'
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPageSEO({
      title: 'Tin tức',
      description: 'Cập nhật tin tức công nghệ, dự án, tuyển dụng và sự kiện từ PHGroup - Công ty công nghệ hàng đầu Việt Nam.',
      url: 'https://phgroup.vn/news',
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
