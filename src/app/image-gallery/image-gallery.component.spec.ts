import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';

xdescribe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let imageServiceSpy: ImageService = jasmine.createSpyObj('ImageService',['getImage','getImages']);
  let filterimagesPipe: FilterimagesPipe = new FilterimagesPipe();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      providers: [
        {provide: ImageService, useValue: imageServiceSpy},
        {provide: FilterimagesPipe, useValue: filterimagesPipe}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    imageServiceSpy = TestBed.inject(ImageService);
    filterimagesPipe = TestBed.inject(FilterimagesPipe);
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
