import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let imageServiceSpy: ImageService;
  let filterimagesPipe: FilterimagesPipe;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, FilterimagesPipe ],
      providers: [
        ImageService,
        FilterimagesPipe
      ]
    })
    .compileComponents();

    imageServiceSpy = TestBed.inject(ImageService);
    filterimagesPipe = TestBed.inject(FilterimagesPipe);
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#OnChange', () => {
    it('deberia obtener todas las imagenes del servicio', () =>{
      component.ngOnChanges();
      expect(component.allImages.length).toEqual(imageServiceSpy.getImages().length);
    });
  });
});
