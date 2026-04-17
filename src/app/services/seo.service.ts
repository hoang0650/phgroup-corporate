import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private siteName = 'PHGroup';
  private defaultDescription = 'PHGroup - Công ty hàng đầu về giải pháp công nghệ thông tin, phát triển phần mềm, cloud computing và an ninh mạng tại Việt Nam.';
  private defaultUrl = 'https://phgrouptechs.com';

  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title: string): void {
    const t = String(title || '').trim();
    if (!t) {
      this.title.setTitle(`${this.siteName} | Trang chủ`);
      return;
    }
    if (t.toLowerCase().includes(this.siteName.toLowerCase())) {
      this.title.setTitle(t);
      return;
    }
    this.title.setTitle(`${this.siteName} | ${t}`);
  }

  updateDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateOgTags(data: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  }): void {
    const { title, description, image, url, type } = data;

    const ogTitle = title ? (title.toLowerCase().includes(this.siteName.toLowerCase()) ? title : `${this.siteName} | ${title}`) : `${this.siteName} | Trang chủ`;
    this.meta.updateTag({ property: 'og:description', content: description || this.defaultDescription });
    this.meta.updateTag({ property: 'og:image', content: image || `${this.defaultUrl}/assets/images/og-image.jpg` });
    this.meta.updateTag({ property: 'og:url', content: url || this.getCurrentUrl() || this.defaultUrl });
    this.meta.updateTag({ property: 'og:type', content: type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: ogTitle });
  }

  updateTwitterTags(data: {
    title?: string;
    description?: string;
    image?: string;
  }): void {
    const { title, description, image } = data;

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    const twTitle = title ? (title.toLowerCase().includes(this.siteName.toLowerCase()) ? title : `${this.siteName} | ${title}`) : `${this.siteName} | Trang chủ`;
    this.meta.updateTag({ name: 'twitter:title', content: twTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description || this.defaultDescription });
    this.meta.updateTag({ name: 'twitter:image', content: image || `${this.defaultUrl}/assets/images/og-image.jpg` });
  }

  updateCanonical(url: string): void {
    let link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    if (!link.parentNode) {
      document.head.appendChild(link);
    }
  }

  private getCurrentUrl(): string | null {
    try {
      if (typeof window === 'undefined' || !window.location) return null;
      return `${window.location.origin}${window.location.pathname}`.replace(/\/+$/, '') || `${window.location.origin}/`;
    } catch {
      return null;
    }
  }

  setPageSEO(options: {
    title: string;
    description: string;
    url?: string;
    image?: string;
    type?: string;
  }): void {
    this.updateTitle(options.title);
    this.updateDescription(options.description);
    const url = options.url || this.getCurrentUrl() || this.defaultUrl;
    this.updateOgTags({ ...options, url });
    this.updateTwitterTags(options);
    this.updateCanonical(url);
  }
}
