"use client";

import { useState, useEffect } from "react";

export default function Forca() {
  const palavras = [
    "REACT","JAVASCRIPT","ELEFANTE","MELANCIA","PAPAGAIO","COELHO","JARDIM",
    "BICICLETA","EVENTO","SORVETE","PLANETA","CACHORRO","FLORESTA","GUITARRA",
    "MONTANHA","AVIAO","PRAIA","ESCOLA","PROFESSOR","ESTRELA",
    "FUTEBOL","TEATRO","CINEMA","BOLA","CELULAR","COMPUTADOR",
    "MUSEU","PONTE","IGREJA","CIDADE","RUA","CARRO"
  ];

  const maxTentativas = 6;

  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);

  
  const sortearPalavra = () => {
    const escolhida = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSecreta(escolhida.toLowerCase());
    setLetrasCorretas([]);
    setLetrasErradas([]);
  };

  useEffect(() => {
    sortearPalavra();
  }, []);

  
  const palavraExibida = palavraSecreta
    ? palavraSecreta.split("").map(l => (letrasCorretas.includes(l) ? l : "_")).join(" ")
    : "";

  
  const ganhou = palavraSecreta && palavraSecreta.split("").every(l => letrasCorretas.includes(l));
  const perdeu = letrasErradas.length >= maxTentativas;

  
  const letras = "abcdefghijklmnopqrstuvwxyz".split("");

  const handleClick = (letra: string) => {
    if (ganhou || perdeu) return;
    if (palavraSecreta.includes(letra)) {
      if (!letrasCorretas.includes(letra)) setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      if (!letrasErradas.includes(letra)) setLetrasErradas([...letrasErradas, letra]);
    }
  };

  return (
    <main style={{ textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Jogo da Forca</h1>

      {/* Boneco da Forca */}
      <svg width="200" height="250" style={{ margin: "0 auto", display: "block" }}>
        <line x1="10" y1="240" x2="150" y2="240" stroke="#000" strokeWidth="4" /> {/* base */}
        <line x1="80" y1="240" x2="80" y2="20" stroke="#000" strokeWidth="4" /> {/* poste */}
        <line x1="80" y1="20" x2="150" y2="20" stroke="#000" strokeWidth="4" /> {/* travessa */}
        <line x1="150" y1="20" x2="150" y2="40" stroke="#000" strokeWidth="4" /> {/* corda */}
        {letrasErradas.length > 0 && <circle cx="150" cy="55" r="15" stroke="#000" strokeWidth="4" fill="none" />} {/* cabeça */}
        {letrasErradas.length > 1 && <line x1="150" y1="70" x2="150" y2="130" stroke="#000" strokeWidth="4" />} {/* tronco */}
        {letrasErradas.length > 2 && <line x1="150" y1="80" x2="120" y2="100" stroke="#000" strokeWidth="4" />} {/* braço esquerdo */}
        {letrasErradas.length > 3 && <line x1="150" y1="80" x2="180" y2="100" stroke="#000" strokeWidth="4" />} {/* braço direito */}
        {letrasErradas.length > 4 && <line x1="150" y1="130" x2="120" y2="170" stroke="#000" strokeWidth="4" />} {/* perna esquerda */}
        {letrasErradas.length > 5 && <line x1="150" y1="130" x2="180" y2="170" stroke="#000" strokeWidth="4" />} {/* perna direita */}
      </svg>

      {/* Palavra */}
      <p style={{ fontSize: "32px", letterSpacing: "10px", margin: "20px 0" }}>{palavraExibida}</p>

      {/* Tentativas */}
      <p>Tentativas restantes: {maxTentativas - letrasErradas.length}</p>
      <p>Letras erradas: {letrasErradas.join(", ") || "-"}</p>

      {/* Teclado virtual */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "5px", marginTop: "20px" }}>
        {letras.map((l) => (
          <button
            key={l}
            onClick={() => handleClick(l)}
            disabled={letrasCorretas.includes(l) || letrasErradas.includes(l)}
            style={{
              width: "35px",
              height: "35px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "4px",
              border: "1px solid #333",
              backgroundColor: letrasCorretas.includes(l)
                ? "lightgreen"
                : letrasErradas.includes(l)
                ? "lightcoral"
                : "white"
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Mensagem vitória/derrota */}
      {ganhou && <p style={{ color: "green", fontSize: "24px", marginTop: "20px" }}>🎉 Parabéns! Você acertou a palavra!</p>}
      {perdeu && <p style={{ color: "red", fontSize: "24px", marginTop: "20px" }}>😢 Você perdeu! A palavra era: {palavraSecreta.toUpperCase()}</p>}

      {/* Botão reiniciar */}
      {(ganhou || perdeu) && (
        <button
          onClick={sortearPalavra}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #333",
            cursor: "pointer"
          }}
        >
          Reiniciar
        </button>
      )}
    </main>
  );
}
