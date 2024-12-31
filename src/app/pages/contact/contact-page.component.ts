import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');

    this.meta.updateTag({
      name: 'description',
      content: 'This is the Contact page description',
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Contact, page, description',
    });

    this.meta.updateTag({
      name: 'og:title',
      content: 'Welcome to Contact Page',
    });
  }
}
