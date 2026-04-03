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
    this.title.setTitle(`${title} | ${this.siteName}`);
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

    this.meta.updateTag({ property: 'og:title', content: title ? `${title} | ${this.siteName}` : `${this.siteName}` });
    this.meta.updateTag({ property: 'og:description', content: description || this.defaultDescription });
    this.meta.updateTag({ property: 'og:image', content: image || `${this.defaultUrl}/assets/images/og-image.jpg` });
    this.meta.updateTag({ property: 'og:url', content: url || this.defaultUrl });
    this.meta.updateTag({ property: 'og:type', content: type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
  }

  updateTwitterTags(data: {
    title?: string;
    description?: string;
    image?: string;
  }): void {
    const { title, description, image } = data;

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title || this.siteName });
    this.meta.updateTag({ name: 'twitter:description', content: description || this.defaultDescription });
    this.meta.updateTag({ name: 'twitter:image', content: image || `${this.defaultUrl}/assets/images/og-image.jpg` });
  }

  updateCanonical(url: string): void {
    let link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
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
    this.updateOgTags(options);
    this.updateTwitterTags(options);
    if (options.url) {
      this.updateCanonical(options.url);
    }
  }
}
