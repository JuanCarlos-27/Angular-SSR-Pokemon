import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    console.log({ platform: this.platform });

    this.title.setTitle('Pricing Page');

    this.meta.updateTag({
      name: 'description',
      content: 'This is the Pricing page description',
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Pricing, page, description',
    });

    this.meta.updateTag({
      name: 'og:title',
      content: 'Welcome to Pricing Page',
    });
  }
}
