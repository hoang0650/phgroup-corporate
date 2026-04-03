import { Injectable } from '@angular/core';

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  description: string;
  content: string;
}

const STORAGE_KEY = 'phgroup_news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private defaultNews: NewsItem[] = [
    {
      id: 1,
      title: 'PHGroup ra mắt giải pháp AI mới cho doanh nghiệp',
      category: 'Công nghệ',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      date: '2026-03-28',
      description: 'PHGroup vừa chính thức ra mắt giải pháp trí tuệ nhân tạo tiên tiến, giúp doanh nghiệp tự động hóa quy trình và tối ưu hóa hiệu suất làm việc.',
      content: `PHGroup vừa chính thức ra mắt giải pháp trí tuệ nhân tạo tiên tiến, giúp doanh nghiệp tự động hóa quy trình và tối ưu hóa hiệu suất làm việc.

**Các tính năng nổi bật:**

- **Chatbot thông minh**: Hỗ trợ khách hàng 24/7
- **Phân tích dữ liệu tự động**: Chuyển đổi dữ liệu thô thành insights
- **Dự đoán xu hướng**: Sử dụng Machine Learning
- **Tự động hóa quy trình (RPA)**: Tiết kiệm đến 60% thời gian`
    },
    {
      id: 2,
      title: 'Hợp tác chiến lược với đối tác Nhật Bản',
      category: 'Dự án',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&h=600&fit=crop',
      date: '2026-03-25',
      description: 'PHGroup ký kết thỏa thuận hợp tác chiến lược với tập đoàn SoftBank Nhật Bản, mở ra cơ hội mới trong lĩnh vực fintech và edtech.',
      content: `PHGroup vừa ký kết thỏa thuận hợp tác chiến lược với tập đoàn SoftBank Nhật Bản.

**Ba lĩnh vực trọng điểm:**

1. **Fintech**: Thanh toán số và ngân hàng điện tử
2. **EdTech**: Nền tảng giáo dục trực tuyến với AI
3. **Giải pháp doanh nghiệp**: ERP và CRM tích hợp AI

Thỏa thuận có thời hạn 5 năm với tổng giá trị hợp tác khoảng 50 triệu USD.`
    },
    {
      id: 3,
      title: 'Tuyển dụng kỹ sư phần mềm Senior',
      category: 'Tuyển dụng',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop',
      date: '2026-03-20',
      description: 'PHGroup thông báo tuyển dụng 20 kỹ sư phần mềm Senior cho các vị trí phát triển ứng dụng web và mobile.',
      content: `PHGroup đang mở rộng đội ngũ kỹ thuật với 20 vị trí kỹ sư phần mềm Senior.

**Yêu cầu:**
- Tối thiểu 5 năm kinh nghiệm
- Thành thạo Java, Python, JavaScript/TypeScript
- Kinh nghiệm với React, Angular, Spring Boot

**Quyền lợi:**
- Lương: 2,500 - 5,000 USD/tháng
- Bảo hiểm cao cấp
- Đào tạo chuyên sâu
- Làm việc từ xa 2 ngày/tuần`
    },
    {
      id: 4,
      title: 'PHGroup tham gia hội thảo Tech Summit 2026',
      category: 'Sự kiện',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
      date: '2026-03-15',
      description: 'Đại diện PHGroup tham gia hội thảo Tech Summit 2026 với chủ đề "Tương lai của công nghệ".',
      content: `PHGroup tự hào là đơn vị đồng tổ chức Tech Summit 2026 - sự kiện công nghệ lớn nhất Việt Nam.

**Các phần của hội thảo:**

**Ngày 1**: Trí tuệ nhân tạo và Tự động hóa
**Ngày 2**: Cloud Computing và Infrastructure  
**Ngày 3**: Cybersecurity và Digital Transformation

Bà Trần Thị Hương, CTO của PHGroup, sẽ có bài phát biểu khai mạc về "AI Everywhere".`
    },
    {
      id: 5,
      title: 'Cập nhật xu hướng công nghệ năm 2026',
      category: 'Công nghệ',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
      date: '2026-03-10',
      description: 'Năm 2026 hứa hẹn nhiều biến động trong ngành công nghệ với AI tạo sinh, quantum computing và metaverse.',
      content: `Năm 2026 đánh dấu bước ngoặt quan trọng trong ngành công nghệ.

**Xu hướng nổi bật:**

1. **AI Tạo sinh**: AI không chỉ là công nghệ của tương lai - nó đã trở thành công cụ thiết yếu

2. **Quantum Computing**: Breakthrough trong quantum error correction

3. **Metaverse cho doanh nghiệp**: Virtual meeting, remote collaboration

4. **Edge AI**: AI chạy trên edge devices thay vì cloud

5. **Cybersecurity AI-driven**: Bảo mật sử dụng AI để phát hiện real-time`
    },
    {
      id: 6,
      title: 'Hoàn thành dự án chuyển đổi số cho tập đoàn lớn',
      category: 'Dự án',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
      date: '2026-03-05',
      description: 'PHGroup tự hào thông báo hoàn thành dự án chuyển đổi số toàn diện cho Tập đoàn Vingroup.',
      content: `PHGroup vừa hoàn thành dự án chuyển đổi số toàn diện cho Tập đoàn Vingroup.

**Quy mô dự án:**
Dự án kéo dài 18 tháng với hơn 50 chuyên gia từ PHGroup.

**Các hạng mục đã triển khai:**
- Hệ thống ERP thống nhất (SAP S/4HANA)
- Nền tảng Data Analytics
- Tự động hóa quy trình (200+ RPA bots)
- Omnichannel Customer Platform

**Kết quả:**
- Giảm 30% chi phí vận hành
- Tăng 45% hiệu suất làm việc`
    }
  ];

  constructor() {
    this.initializeStorage();
  }

  private initializeStorage(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      this.saveNews(this.defaultNews);
    }
  }

  private saveNews(news: NewsItem[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
  }

  getAllNews(): NewsItem[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : this.defaultNews;
  }

  getNewsById(id: number): NewsItem | undefined {
    const news = this.getAllNews();
    return news.find(n => n.id === id);
  }

  getRelatedNews(currentId: number, category: string, limit: number = 3): NewsItem[] {
    return this.getAllNews()
      .filter(n => n.id !== currentId && n.category === category)
      .slice(0, limit);
  }

  createNews(news: Omit<NewsItem, 'id'>): NewsItem {
    const allNews = this.getAllNews();
    const maxId = Math.max(...allNews.map(n => n.id), 0);
    const newNews: NewsItem = {
      ...news,
      id: maxId + 1
    };
    allNews.unshift(newNews);
    this.saveNews(allNews);
    return newNews;
  }

  updateNews(id: number, updates: Partial<NewsItem>): NewsItem | null {
    const allNews = this.getAllNews();
    const index = allNews.findIndex(n => n.id === id);
    if (index === -1) return null;

    allNews[index] = { ...allNews[index], ...updates };
    this.saveNews(allNews);
    return allNews[index];
  }

  deleteNews(id: number): boolean {
    const allNews = this.getAllNews();
    const filtered = allNews.filter(n => n.id !== id);
    if (filtered.length === allNews.length) return false;
    this.saveNews(filtered);
    return true;
  }

  getNextId(): number {
    const allNews = this.getAllNews();
    return Math.max(...allNews.map(n => n.id), 0) + 1;
  }
}
