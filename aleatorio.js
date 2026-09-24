const nomes = ["Mimosa", "Malhada", "Estrela", "Violeta", "Coração", "Belinha", "Vaidosa"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
