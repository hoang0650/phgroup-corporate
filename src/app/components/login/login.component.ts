import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  showPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private seoService: SeoService
  ) {
    this.seoService.setPageSEO({
      title: 'Đăng nhập Admin',
      description: 'Trang đăng nhập quản trị PHGroup'
    });

    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin/news']);
    }
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Vui lòng nhập tên đăng nhập và mật khẩu!';
      return;
    }

    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin/news']);
    } else {
      this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
