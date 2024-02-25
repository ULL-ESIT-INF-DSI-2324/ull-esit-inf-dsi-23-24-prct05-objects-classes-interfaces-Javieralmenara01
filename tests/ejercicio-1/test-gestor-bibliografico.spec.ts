import 'mocha';
import { expect } from 'chai';
import { GestorBibliografico } from '../../src/ejercicio-1/gestor-bibliografico';
import { Libro } from '../../src/ejercicio-1/libro';
import { ArticuloRevista } from '../../src/ejercicio-1/articulo-revista';
import { CapituloLibro } from '../../src/ejercicio-1/capitulo-libro';
import { ContribucionCongreso } from '../../src/ejercicio-1/contribucion-congreso';
import { TrabajoFinGrado } from '../../src/ejercicio-1/trabajo-fin-grado';
import { TrabajoFinMaster } from '../../src/ejercicio-1/trabajo-fin-master';

describe('GestorBibliografico', () => {
  let gestor: GestorBibliografico;

  beforeEach(() => {
    // Crear varios elementos bibliográficos y añadirlos al gestor
    const elementos = [
      new Libro(
        'Clean Code',
        ['Robert C. Martin'],
        ['Software Engineering', 'Best Practices'],
        'A handbook of agile software craftsmanship.',
        new Date(2008, 7, 11),
        '464',
        'Prentice Hall',
        '978-0132350884'
      ),
      new ArticuloRevista(
        'The Pragmatic Programmer',
        ['Andrew Hunt', 'David Thomas'],
        ['Software Development', 'Programming'],
        'From journeyman to master.',
        new Date(1999, 9, 30),
        '35-41',
        'Addison-Wesley',
        '32',
        8
      ),
      new CapituloLibro(
        'Design Patterns',
        ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'],
        ['Software Design', 'Object-Oriented Programming'],
        'Elements of Reusable Object-Oriented Software.',
        new Date(1994, 10, 10),
        '325-350',
        'Addison-Wesley',
        'Design Patterns: Elements of Reusable Object-Oriented Software'
      ),
      new ContribucionCongreso(
        'Software Evolution',
        ['Kent Beck', 'Martin Fowler'],
        ['Software Engineering', 'Agile Methodologies'],
        'Evolutionary Design is the Key.',
        new Date(2000, 5, 15),
        '101-110',
        'ACM Press',
        'OOPSLA',
        'Austin, Texas'
      ),
      new TrabajoFinGrado(
        'Analysis of Machine Learning Techniques',
        ['Alice Smith'],
        ['Machine Learning', 'Data Analysis'],
        'A comprehensive study of various ML algorithms.',
        new Date(2020, 4, 20),
        '80',
        'University Press',
        'Mathematics Degree'
      ),
      new TrabajoFinMaster(
        'Blockchain Applications',
        ['Bob Johnson'],
        ['Blockchain', 'Cryptocurrency'],
        'Exploring the potential applications of blockchain technology.',
        new Date(2021, 6, 10),
        '120',
        'Blockchain Institute',
        'Master in Computer Engineering'
      )
    ];

    gestor = new GestorBibliografico(elementos);
  });

  describe('#filtrarIEEE', () => {
    it('should filter elements by title', () => {
      const resultado = gestor.filtrar('Clean Code', 'titulo');
      expect(resultado).to.contain('Clean Code');
    });

    it('should filter elements by author', () => {
      const resultado = gestor.filtrar('Robert C. Martin', 'autor');
      expect(resultado).to.contain('Clean Code');
    });

    it('should filter elements by editorial', () => {
      const resultado = gestor.filtrar('Addison-Wesley', 'editorial');
      expect(resultado).to.contain('Design Patterns');
      expect(resultado).to.contain('The Pragmatic Programmer');
    });

    it('should return empty string if no elements match the filter', () => {
      const resultado = gestor.filtrar('Non-existent Title', 'titulo');
      expect(resultado).to.equal('');
    });
  });

  describe('#filtrarExpresionIEEE', () => {
    it('should filter elements by regular expression on title', () => {
      const resultado = gestor.filtrarExpresion(/Code/, 'titulo');
      expect(resultado).to.contain('Clean Code');
    });

    it('should filter elements by regular expression on author', () => {
      const resultado = gestor.filtrarExpresion(/Martin/, 'autor');
      expect(resultado).to.contain('Clean Code');
    });

    it('should filter elements by regular expression on editorial', () => {
      const resultado = gestor.filtrarExpresion(/Addison/, 'editorial');
      expect(resultado).to.contain('Design Patterns');
      expect(resultado).to.contain('The Pragmatic Programmer');
    });

    it('should return empty string if no elements match the regular expression', () => {
      const resultado = gestor.filtrarExpresion(/Non-existent/, 'titulo');
      expect(resultado).to.equal('');
    });
  });
});
