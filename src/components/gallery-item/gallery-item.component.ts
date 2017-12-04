import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;

  constructor(public element: ElementRef,
    public renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'height', this.element.nativeElement.width);
  }

}
