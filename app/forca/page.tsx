"use client";

import { useState, useEffect } from "react";

export default function Forca() {
  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const maxTentativas = 6;

  const palavras = [
  "REACT", "JAVASCRIPT", "ELEFANTE", "MELANCIA", "PAPAGAIO", "COELHO", "JARDIM",
  "BICICLETA", "EVENTO", "SORVETE", "PLANETA", "CACHORRO", "FLORESTA", "GUITARRA",
  "MONTANHA", "AVIAO", "PRAIA", "ESCOLA", "PROFESSOR", "ESTRELA",
  "FUTEBOL", "TEATRO", "CINEMA", "BOLA", "CELULAR", "COMPUTADOR",
  "MUSEU", "PONTE", "IGREJA", "CIDADE", "RUA", "CARRO",
  "BARCO", "NAVIO", "TREM", "ESTACAO", "HOSPITAL", "LIVRO",
  "CANETA", "CADEIRA", "MESA", "JANELA", "PORTA", "TORRE",
  "CASTELO", "RELOGIO", "CAMISA", "SAPATO"
];

  function sortearPalavra() {
    const escolhida = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSecreta(escolhida.toLowerCase());
    setLetrasCorretas([]);
    setLetrasErradas([]);
  }

  useEffect(() => {
    sortearPalavra();
  }, []);

  let palavraExibida = "";
  if (palavraSecreta) {
    palavraExibida = palavraSecreta
      .split("")
      .map((letra) => {
        if (letrasCorretas.includes(letra)) {
          return letra;
        } else {
          return "_";
        }
      })
      .join(" ");
  } else {
    palavraExibida = "";
  }

  let ganhou = false;
  if (palavraSecreta) {
    ganhou = palavraSecreta.split("").every((letra) => letrasCorretas.includes(letra));
  }

  let perdeu = false;
  if (letrasErradas.length >= maxTentativas) {
    perdeu = true;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const letra = event.key.toLowerCase();
      if (!/[a-z]/.test(letra) || letra.length !== 1) {
        return;
      }
      if (ganhou || perdeu) {
        return;
      }

      if (palavraSecreta.includes(letra)) {
        if (!letrasCorretas.includes(letra)) {
          setLetrasCorretas((prev) => [...prev, letra]);
        }
      } else {
        if (!letrasErradas.includes(letra)) {
          setLetrasErradas((prev) => [...prev, letra]);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [palavraSecreta, letrasCorretas, letrasErradas, ganhou, perdeu]);

  return (
    <main style={{ textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Jogo da Forca</h1>
      <p style={{ fontSize: "32px", letterSpacing: "10px" }}>{palavraExibida}</p>
      <p>Tentativas restantes: {maxTentativas - letrasErradas.length}</p>
      <p>Letras erradas: {letrasErradas.join(", ")}</p>

      {ganhou && (
        <p style={{ color: "green", fontSize: "24px", marginTop: "20px" }}>
          🎉 Parabéns! Você acertou a palavra!
        </p>
      )}
      {perdeu && (
        <p style={{ color: "red", fontSize: "24px", marginTop: "20px" }}>
          😢 Você perdeu! A palavra era: {palavraSecreta.toUpperCase()}
        </p>
      )}

      {(ganhou || perdeu) && (
        <button
          onClick={sortearPalavra}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #333",
            cursor: "pointer",
          }}
        >
          Reiniciar
        </button>
      )}
    </main>
  );
}
