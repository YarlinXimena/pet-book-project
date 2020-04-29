import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

describe('FilterimagesPipe', () => {

  let pipe : FilterimagesPipe;
  let imageService: ImageService;
  let imagenes: any[];

  beforeEach(() => {
    pipe = new FilterimagesPipe();
    imageService = new ImageService();
    imagenes = imageService.getImages();
  });

  it('create an instance', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () =>{
    it('con lista de imagenes vacia y pipe correcto deberia devolver vacio', () =>{
      imagenes = [];
      let laptop = 'all';

      expect(pipe.transform(imagenes, laptop)).toEqual([]);
    });

    it('con lista de imagenes null y pipe diferente de "all" deberia generar error', () =>{
      imagenes = null;
      let laptop = 'perro';

      expect(() => pipe.transform(imagenes, laptop)).toThrowError(Error);
    });

    it('con lista de imagenes null y pipe correcto', () =>{
      imagenes = [];
      let laptop = 'all';

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('con pipe "all" deberia devolver todas las imagenes', () =>{
      let laptop = 'all'; 

      expect(pipe.transform(imagenes, laptop).length).toEqual(imagenes.length);
    });

    it('con pipe "perro" deberia devolver todas las imagenes', () =>{
      let laptop = 'perro';

      expect(pipe.transform(imagenes, laptop).length).toEqual(3);
    });

    it('con pipe "gato" deberia devolver todas las imagenes', () =>{
      let laptop = 'gato';

      expect(pipe.transform(imagenes, laptop).length).toEqual(2);
    });

    it('con pipe null no deberia devolver ninguna imagen', () =>{
      let laptop = null;

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('con pipe vacio no deberia devolver ninguna imagen', () =>{
      let laptop = '';

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('con pipe undefined no deberia devolver ninguna imagen', () =>{
      let laptop = undefined;

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

    it('con pipe diferente al esperado no deberia devolver ninguna imagen', () =>{
      let laptop = 'asdfasf';

      expect(pipe.transform(imagenes, laptop).length).toEqual(0);
    });

  });
});
