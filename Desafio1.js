class Usuario {
  constructor(nombre, apellidos, libros, mascota) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.libros = libros;
    this.mascota = mascota;
  }
  getFullName() {
    console.log(`hola mi nombre es ${this.nombre} ${this.apellidos}`);
  }

  addMascota(nombreMascota) {
    this.mascota.push(nombreMascota);
    console.log(
      `La mascota ${nombreMascota}, fue agregada con exito al usuario ${this.nombre}`
    );
  }

  countMascotas() {
    console.log(this.mascota.length);
  }
  addBook(titulo, autor) {
    this.libros.push({ titulo, autor });
    console.log(`El libro ${titulo} fue agregado al usuario ${this.nombre}`);
  }

  getBookNames() {
    const listaLibros = this.libros.map((nombre) => nombre.titulo);
    console.log(listaLibros);
  }
}

const francisco = new Usuario(
  "Francisco",
  "Xifra",
  [
    { titulo: "La comunidad del anillo", autor: "J.R.R. Tolkien" },
    { titulo: "Cuentos completos", autor: "Julio Cortazar" },
    { titulo: "El hombre duplicado", autor: "Jose Saramago" },
  ],
  ["Zorro", "Guevara"]
);

francisco.getFullName();
francisco.addMascota("Merlina");
francisco.countMascotas();
francisco.addBook("Moby Dick", "Herman Melvile");
francisco.getBookNames();
