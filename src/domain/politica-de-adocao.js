class PoliticaAdocao {
  destinoPara(animal, pessoa1, pessoa2) {
    const apto1 = this.apto(pessoa1, animal);
    const apto2 = this.apto(pessoa2, animal);
    if (apto1 && apto2) return "abrigo";
    if (apto1) return "pessoa 1";
    if (apto2) return "pessoa 2";
    return "abrigo";
  }

  apto(pessoa, animal) {
    if (!pessoa.podeAdotarMais()) return false;
    if (animal.nome === "Loco") {
      if (!pessoa.temCompanhia()) return false;
      if (pessoa.conflitoComBrinquedosDeGatos(animal.brinquedosFavoritos))
        return false;
      return animal.contemTodosFavoritos(pessoa.brinquedosDisponiveis);
    }
    if (
      animal.especie !== "gato" &&
      pessoa.conflitoComBrinquedosDeGatos(animal.brinquedosFavoritos)
    )
      return false;
    return animal.mostraTodosFavoritosNaOrdem(pessoa.brinquedosDisponiveis);
  }
}

export { PoliticaAdocao };
