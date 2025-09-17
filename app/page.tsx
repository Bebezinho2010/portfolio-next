import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", textAlign: "center" }}>
      <section style={{ marginBottom: "50px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Image
            src="/rodrigo.jpeg"
            alt="Foto Rodrigo"
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
          />
        </div>

        <h1 style={{ fontSize: "2.5rem", margin: "10px 0" }}>Rodrigo</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Estudante de Web e Mobile, apaixonado por tecnologia e sempre buscando aprender mais.
          Este é meu portfólio com alguns projetos desenvolvidos durante a disciplina.
        </p>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Habilidades</h2>
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px", listStyle: "none", padding: 0 }}>
          <li> HTML </li>
          <li> CSS </li>
          <li> React </li>
          <li> JavaScript </li>
          <li> Next.js </li>
        </ul>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Projetos</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ border: "1px solid #000000ff", borderRadius: "8px", padding: "15px" }}>
            <h3>Mini Bio</h3>
            <p>Primeiro projeto em React/Next com foto e bio.</p>
          </div>
          <div style={{ border: "1px solid #000000ff", borderRadius: "8px", padding: "15px" }}>
            <h3>Jogo da Forca</h3>
            <p>
              <a
                href="https://zany-fortnight-76wr947xgr5cr95q-3000.app.github.dev/forca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0070f3", textDecoration: "underline" }}
              >
                Acessar Jogo da Forca
              </a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Contato</h2>
        <p>
          Email: <a href="mailto:rodrigomatazombis@gmail.com">rodrigomatazombis@gmail.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/bebezinho2010" target="_blank">github.com/bebezinho2010</a>
        </p>
      </section>

      <footer style={{ marginTop: "50px", fontSize: "0.9rem", color: "#555" }}>
        © 2025 - Desenvolvido por Rodrigo
      </footer>
    </main>
  );
}
