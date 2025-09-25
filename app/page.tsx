"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        color: "#171717",
      }}
    >
      {/* Seção de perfil */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Image
            src="/rodrigo.jpeg"
            alt="Foto Rodrigo"
            width={180}
            height={180}
            style={{
              borderRadius: "50%",
              border: "4px solid #0070f3",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "10px 0",
            color: "#0070f3",
          }}
        >
          Rodrigo
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Estudante de Web e Mobile, apaixonado por tecnologia e sempre buscando
          aprender mais. Este é meu portfólio com alguns projetos desenvolvidos
          durante a disciplina.
        </p>
      </section>

      {/* Habilidades */}
      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
            textAlign: "center",
            color: "#333",
          }}
        >
          Habilidades
        </h2>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            listStyle: "none",
            padding: 0,
          }}
        >
          {["HTML", "CSS", "React", "JavaScript", "Next.js"].map((skill) => (
            <li
              key={skill}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                fontWeight: "bold",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLLIElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLLIElement).style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLLIElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLLIElement).style.boxShadow =
                  "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projetos */}
      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
            textAlign: "center",
            color: "#333",
          }}
        >
          Projetos
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {/* Mini Bio */}
          <div
            style={{
              borderRadius: "12px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 12px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 6px 15px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Mini Bio</h3>
            <p>Primeiro projeto em React/Next com foto e bio.</p>
          </div>

          {/* Jogo da Forca */}
          <div
            style={{
              borderRadius: "12px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 12px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 6px 15px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Jogo da Forca</h3>
            <p>
              <a
                href="/forca"
                style={{
                  color: "#0070f3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Acessar Jogo da Forca
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section style={{ marginBottom: "60px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          Contato
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          Email: <a href="mailto:rodrigomatazombis@gmail.com">rodrigomatazombis@gmail.com</a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          GitHub:{" "}
          <a href="https://github.com/bebezinho2010" target="_blank">
            github.com/bebezinho2010
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", fontSize: "0.9rem", color: "#555", marginTop: "40px" }}>
        © 2025 - Desenvolvido por Rodrigo
      </footer>
    </main>
  );
}
