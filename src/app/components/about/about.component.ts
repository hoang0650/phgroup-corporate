import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  team = [
    {
      name: 'Nguyễn Văn Minh',
      position: 'Giám đốc điều hành',
      bio: 'Hơn 20 năm kinh nghiệm trong ngành công nghệ thông tin, từng làm việc tại các tập đoàn lớn như Microsoft và IBM.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Trần Thị Hương',
      position: 'Giám đốc Kỹ thuật',
      bio: 'Chuyên gia về Cloud Computing và AI với 15 năm kinh nghiệm, thạc sĩ Khoa học Máy tính từ ĐH Stanford.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Lê Hoàng Nam',
      position: 'Giám đốc Marketing',
      bio: '10 năm kinh nghiệm trong lĩnh vực marketing công nghệ, chuyên gia về chiến lược thương hiệu số.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      name: 'Phạm Thu Minh',
      position: 'Trưởng phòng Nhân sự',
      bio: 'Chuyên gia về quản trị nhân sự và phát triển tổ chức, luôn đặt con người làm trọng tâm phát triển.',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];

  values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Đổi mới sáng tạo',
      description: 'Không ngừng tìm kiếm những giải pháp mới, sáng tạo để giải quyết các vấn đề phức tạp của khách hàng.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Cam kết chất lượng',
      description: 'Đặt chất lượng sản phẩm và dịch vụ lên hàng đầu, đảm bảo sự hài lòng của khách hàng 100%.'
    },
    {
      icon: 'fas fa-users',
      title: 'Làm việc nhóm',
      description: 'Tinh thần teamwork và sự phối hợp chặt chẽ giữa các thành viên để đạt được mục tiêu chung.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Học tập liên tục',
      description: 'Khuyến khích việc học hỏi và phát triển kỹ năng để theo kịp xu hướng công nghệ mới nhất.'
    }
  ];

  milestones = [
    { year: '2010', event: 'THÀNH LẬP CÔNG TY' },
    { year: '2013', event: 'Hoàn thành 100 dự án đầu tiên' },
    { year: '2015', event: 'Mở rộng văn phòng tại Hà Nội' },
    { year: '2018', event: 'Ra mắt giải pháp Cloud riêng' },
    { year: '2020', event: 'Đạt chứng chỉ ISO 27001' },
    { year: '2023', event: 'Gia nhập thị trường quốc tế' },
    { year: '2026', event: 'Hơn 500+ dự án hoàn thành' }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPageSEO({
      title: 'Về chúng tôi',
      description: 'Tìm hiểu về lịch sử, sứ mệnh, giá trị cốt lõi và đội ngũ lãnh đạo của PHGroup - Công ty công nghệ hàng đầu Việt Nam.',
      type: 'website'
    });
  }
}
