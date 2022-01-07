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
  zoomedIn = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() : void {

    this.modal = document.getElementById("carousel-modal-div");
    this.modalImg = document.getElementById("carousel-modal-img");

    $(this.defaultClass).on('click', (e) => {
        const thisObject = e.currentTarget;

        this.modalImg.src = (<HTMLImageElement> thisObject).src;

        this.openModal();
      });


    const span : HTMLElement = document.getElementsByClassName("carousel-modal-close")[0] as HTMLElement;

    span.onclick = () => { 
      this.closeModal();
    }

    $('html').click((e) => {
      if($(e.target).hasClass('carousel-modal')) {
          this.closeModal();
      } 
    });


    this.modalImg.addEventListener('click', (e) => {
      this.zoomedIn = !this.zoomedIn;
        if (this.zoomedIn) {
          this.modalImg.classList.add('zoomed__in');

          this.modalImg.addEventListener('mousemove', function(e) {
            $(this)
              .css({
                'transform-origin':
                  ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
                  '% ' +
                  ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
                  '%'
              });
            });
        }
        else{
          this.modalImg.removeEventListener('mousemove', this.modalImg.click);
          this.modalImg.classList.remove('zoomed__in');
        }
    })

    
  }

  openModal() {
    this.modal.style.display = "flex";

    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.style.display = "none";

    document.body.style.overflow = 'scroll';

    this.zoomedIn = false;
    this.modalImg.classList.remove('zoomed__in');
  }

}
