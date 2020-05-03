import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponent } from './image-details.component';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let imageServiceSpy: ImageService;
  let route = {snapshot: {params:{ id: 1}}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers: [
        ImageService,
        { provide: ActivatedRoute, useValue: route}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    imageServiceSpy = TestBed.inject(ImageService);
  });

  it('should create', () => {
    route.snapshot.params.id = 1;
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Si no hay un parametro en la ruta debe fallar la creacion del componente', () =>{
    route.snapshot.params.id = null;
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    expect(function() { try{fixture.detectChanges()} catch(e){ throw new TypeError()}}).toThrow( new TypeError());
  });

  it('Si el id del parametro no corresponde a una imagen debe fallar la crearcion del componente', () =>{
    route.snapshot.params.id = -1;
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    expect(function() { try{fixture.detectChanges()} catch(e){ throw new TypeError()}}).toThrow( new TypeError());
  });
});
