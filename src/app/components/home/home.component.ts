import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services = [
    {
      icon: 'fas fa-code',
      title: 'Phát triển phần mềm',
      description: 'Xây dựng các giải pháp phần mềm tùy chỉnh theo nhu cầu doanh nghiệp, từ ứng dụng web đến mobile app.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Computing',
      description: 'Triển khai và quản lý hạ tầng cloud với AWS, Azure, Google Cloud, tối ưu chi phí và hiệu suất.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'An ninh mạng',
      description: 'Bảo vệ hệ thống và dữ liệu doanh nghiệp với các giải pháp bảo mật tiên tiến nhất.'
    },
    {
      icon: 'fas fa-digital-twin',
      title: 'Chuyển đổi số',
      description: 'Tư vấn và triển khai chiến lược chuyển đổi số toàn diện cho doanh nghiệp.'
    }
  ];

  stats = [
    { value: '15+', label: 'Năm kinh nghiệm' },
    { value: '500+', label: 'Dự án hoàn thành' },
    { value: '200+', label: 'Khách hàng tin tưởng' },
    { value: '50+', label: 'Chuyên gia kỹ thuật' }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPageSEO({
      title: 'Trang chủ',
      description: 'PHGroup - Giải pháp công nghệ hàng đầu Việt Nam. Phát triển phần mềm, Cloud Computing, An ninh mạng và Chuyển đổi số.',
      url: 'https://phgroup.vn',
      type: 'website'
    });
  }
}
