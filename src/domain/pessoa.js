class Pessoa {
  constructor(numero, brinquedosDisponiveis) {
    this.numero = numero;
    this.brinquedosDisponiveis = brinquedosDisponiveis;
    this.animaisAdotados = [];
    this.brinquedosReservadosPorGatos = new Set();
  }

  podeAdotarMais() {
    return this.animaisAdotados.length < 3;
  }

  temCompanhia() {
    return this.animaisAdotados.length > 0;
  }

  conflitoComBrinquedosDeGatos(brinquedosNecessarios) {
    for (let i = 0; i < brinquedosNecessarios.length; i++) {
      if (this.brinquedosReservadosPorGatos.has(brinquedosNecessarios[i]))
        return true;
    }
    return false;
  }

  adotar(animal) {
    this.animaisAdotados.push(animal.nome);
    if (animal.especie === "gato") {
      for (let i = 0; i < animal.brinquedosFavoritos.length; i++) {
        this.brinquedosReservadosPorGatos.add(animal.brinquedosFavoritos[i]);
      }
    }
  }
}

export { Pessoa };
