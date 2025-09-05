import { RepositorioAnimaisEmMemoria } from "../../src/infra/repositorio-animais-memoria.js";
import { ValidadorEntradas } from "./validador-entrada.js";
import { ErroBrinquedoInvalido } from "./errors/erro-brinquedo-invalido.js";
import { ErroAnimalInvalido } from "./errors/erro-animal-invalido.js";

describe("ValidadorEntradas", () => {
  test("Deve lançar erro quando brinquedo não está na lista de válidos", () => {
    const validador = new ValidadorEntradas(new RepositorioAnimaisEmMemoria());
    expect(() => validador.validarBrinquedos(["SAPATO"])).toThrow(
      ErroBrinquedoInvalido
    );
  });

  test("Deve lançar erro quando animal não existe no repositório", () => {
    const validador = new ValidadorEntradas(new RepositorioAnimaisEmMemoria());
    expect(() => validador.validarAnimais(["Lulu"])).toThrow(
      ErroAnimalInvalido
    );
  });

  test("Deve lançar erro quando há animais duplicados", () => {
    const validador = new ValidadorEntradas(new RepositorioAnimaisEmMemoria());
    expect(() => validador.validarAnimais(["Rex", "rex"])).toThrow(
      ErroAnimalInvalido
    );
  });
});
