import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-boundead',
  templateUrl: './carousel-boundead.component.html',
  styleUrls: ['./carousel-boundead.component.scss']
})
export class CarouselBoundeadComponent implements OnInit {

  readonly defaultDelay = 5000;
  readonly defaultClass = '.slider__img';

  modal;
  modalImg;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() : void {

    this.modal = document.getElementById("carousel-modal");
    this.modalImg = document.getElementById("img01");

    $(this.defaultClass).on('click', (e) => {
        const thisObject = e.currentTarget;

        this.modalImg.src = (<HTMLImageElement> thisObject).src;

        this.openModal();
      });


    const span : HTMLElement = document.getElementsByClassName("close")[0] as HTMLElement;

    span.onclick = () => { 
      this.closeModal();
    }

    $('html').click((e) => {
      if($(e.target).hasClass('modal')) {
          this.closeModal();
      } 
    });
  }

  openModal() {
    this.modal.style.display = "flex";

    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.style.display = "none";

    document.body.style.overflow = 'scroll';
  }

}
