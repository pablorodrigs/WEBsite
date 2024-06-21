import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarouselComponent implements OnInit {
  currentIndex: number = 0;
  totalItems!: number;

  ngOnInit() {
    
    this.totalItems = document.querySelectorAll('.gallery .container').length;
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.totalItems - 1;
    } else {
      this.currentIndex--;
    }
    this.updateGalleryPosition();
  }

  nextSlide() {
    if (this.currentIndex === this.totalItems - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateGalleryPosition();
  }

  updateGalleryPosition() {
    const gallery = document.querySelector('.gallery') as HTMLElement;
    const itemWidth = document.querySelector('.container')?.clientWidth || 0;
    gallery.style.transform = `translateX(-${this.currentIndex * itemWidth}px)`;
  }
}