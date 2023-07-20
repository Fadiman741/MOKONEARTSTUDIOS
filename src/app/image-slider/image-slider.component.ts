import { Component, HostListener, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage!: number;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }
  Imagesdelatils = [    
    { "id": 1, "name": "Art", "url": "assets/gallery/1.jpg" },   
    { "id": 2, "name": "Art", "url": "assets/gallery/2.jpg" },    
    { "id": 3, "name": "Art", "url": "assets/gallery/3.jpg" },    
    { "id": 4, "name": "Art", "url": "assets/gallery/4.jpg" },    
    { "id": 5, "name": "Art", "url": "assets/gallery/5.jpg" },    
    { "id": 6, "name": "Art", "url": "assets/gallery/6.jpg" },    
    { "id": 7, "name": "Art", "url": "assets/gallery/7.jpg" },    
    { "id": 8, "name": "Art", "url": "assets/gallery/8.jpg" },    
    { "id": 9, "name": "Art", "url": "assets/gallery/9.jpg" },
    { "id": 1, "name": "Art", "url": "assets/gallery/11.jpg" },   
    { "id": 2, "name": "Art", "url": "assets/gallery/12.jpg" },    
    { "id": 3, "name": "Art", "url": "assets/gallery/13.jpg" },    
    { "id": 4, "name": "Art", "url": "assets/gallery/14.jpg" },    
    { "id": 5, "name": "Art", "url": "assets/gallery/15.jpg" },    
    { "id": 6, "name": "Art", "url": "assets/gallery/16.jpg" },    
    { "id": 7, "name": "Art", "url": "assets/gallery/17.jpeg" },    
    // { "id": 8, "name": "Art", "url": "assets/gallery/18.jpg" },    
    // { "id": 9, "name": "Art", "url": "assets/gallery/9.jpg" },     
  ]

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      8}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      8}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${8 *
      (this.currentPage - 1)}px)`;
  }
}