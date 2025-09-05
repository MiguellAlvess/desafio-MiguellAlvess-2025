class Animal {
  constructor(nome, especie, brinquedosFavoritos) {
    this.nome = nome;
    this.especie = especie;
    this.brinquedosFavoritos = brinquedosFavoritos;
  }

  mostraTodosFavoritosNaOrdem(brinquedosDaPessoa) {
    let indiceFavorito = 0;
    for (let i = 0; i < brinquedosDaPessoa.length; i++) {
      if (brinquedosDaPessoa[i] === this.brinquedosFavoritos[indiceFavorito])
        indiceFavorito += 1;
      if (indiceFavorito === this.brinquedosFavoritos.length) return true;
    }
    return indiceFavorito === this.brinquedosFavoritos.length;
  }

  contemTodosFavoritos(brinquedosDaPessoa) {
    const conjunto = new Set();
    for (let i = 0; i < brinquedosDaPessoa.length; i++)
      conjunto.add(brinquedosDaPessoa[i]);
    for (let j = 0; j < this.brinquedosFavoritos.length; j++) {
      if (!conjunto.has(this.brinquedosFavoritos[j])) return false;
    }
    return true;
  }
}

export { Animal };
