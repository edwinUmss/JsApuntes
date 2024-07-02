/**“Imagina que estás desarrollando una aplicación web para gestionar una biblioteca. Necesitas manejar información sobre los libros, como el título, autor, y número de copias disponibles. Una función constructora puede ser muy útil para crear objetos que representen cada libro, permitiéndote fácilmente crear y manejar múltiples libros con estructuras similares.” */

function Libro(titulo, autor, copias) {
    this.titulo = titulo;
    this.autor = autor;
    this.copias = copias;
  
    this.mostrarInfo = function() {
      console.log(`${this.titulo} por ${this.autor}, ${this.copias} copias disponibles.`);
    };
  
    this.prestarLibro = function() {
      if (this.copias > 0) {
        this.copias -= 1;
        console.log(`Libro prestado: ${this.titulo}. Copias restantes: ${this.copias}.`);
      } else {
        console.log(`Lo sentimos, no hay copias disponibles de ${this.titulo}.`);
      }
    };
  
    this.devolverLibro = function() {
      this.copias += 1;
      console.log(`Libro devuelto: ${this.titulo}. Copias actuales: ${this.copias}.`);
    };
  }

  // Crear instancias de la función constructora
let libro1 = new Libro("El Hobbit", "J.R.R. Tolkien", 3);
let libro2 = new Libro("1984", "George Orwell", 5);

//Mostrando información de los libros**
libro1.mostrarInfo(); // El Hobbit por J.R.R. Tolkien, 3 copias disponibles.
libro2.mostrarInfo(); // 1984 por George Orwell, 5 copias disponibles.

//Prestar y devolver libros**

libro1.prestarLibro(); // Libro prestado: El Hobbit. Copias restantes: 2.
libro1.prestarLibro(); // Libro prestado: El Hobbit. Copias restantes: 1.
libro1.devolverLibro(); // Libro devuelto: El Hobbit. Copias actuales: 2.