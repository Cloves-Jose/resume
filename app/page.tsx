'use client'
import styles from "./page.module.css";
import { Container, Row } from "react-bootstrap";
import { faBriefcase, faGraduationCap, faTrophy, faDiagramProject, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import Titles from "./components/titles/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Container fluid className={styles.container}>
      <Row style={{ marginLeft: "30px" }}>
        <Titles icon={faBriefcase} text="Experiência" />
        <p style={{ color: "#808080" }}>
          <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem" }}>Show Tecnologia: Quality Assurance (2020 - 2022) </div>
          Responsável por garantir o funcionamento adequado do sistema de software, realizando testes em novas funcionalidades.
          Também atuei na automação desses testes utilizando a ferramenta Cypress.
        </p>
        <p style={{ color: "#808080" }}>
          <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem" }}>Comeia: Desenvolvedor Front-end Angular (2022 - 2022)</div>
          Desenvolvi projetos de software de alta complexidade utilizando o framework Angular, contribuindo para a criação de interfaces de usuário interativas e dinâmicas. Minha experiência inclui a implementação de componentes reutilizáveis, otimização de desempenho e integração com APIs RESTful, sempre seguindo as melhores práticas de desenvolvimento. Além disso, colaborei de forma eficaz com equipes multifuncionais para garantir a entrega de produtos de qualidade e dentro dos prazos estabelecidos.
        </p>
        <p style={{ color: "#808080" }}>
          <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem" }}>Elife: Desenvolvedor Front-end React (2022 - Presente)</div>
          Desenvolvi projetos de software complexos utilizando a biblioteca React, focando na criação de interfaces de usuário modernas e responsivas. Minha atuação abrange desde a construção de componentes reutilizáveis até a otimização de desempenho e a integração com APIs RESTful. Sempre aplico as melhores práticas de desenvolvimento para garantir código limpo e eficiente. Além disso, trabalho em estreita colaboração com equipes multidisciplinares para assegurar a entrega de produtos de alta qualidade dentro dos prazos estipulados.
        </p>
      </Row>
      <Row style={{ marginLeft: "30px" }}>
        <Titles icon={faGraduationCap} text="Formação" />
        <p style={{ color: "#808080" }}>
          <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem" }}>Análise e desenvolvimento de sistemas:</div>
          Graduando em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Ciência e Tecnologia de Pernambuco - Campus Garanhuns.
        </p>
      </Row>
      <Row style={{ marginLeft: "30px" }}>
        <Titles icon={faTrophy} text="Certificações" />
      <div style={{ marginLeft: "20px" }}>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          React Native: Desenvolva App Nativas para Android e IOS (Cod3r)
        </div>

        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Flutter & Dart: Construa APPs para IOS e Android (Cod3r)
        </div>

        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          PHP 7 Completo (Cod3r)
        </div>

        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Web Moderno com Javascript (Cod3r)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Angular 9 - Essencial (Cod3r)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Javascript - Curso completo (Hcode Treinamentos)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Docker - Ferramenta essencial para Desenvolvedores (Cod3r)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Curso completo do desenvolvimento NodeJs (Udemy)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Banco de dados SQL e NoSQL do básico ao avançado (Geek University)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          Java Completo: Do zero ao profissional (Cod3r)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          DevOps Ninja: Docker, Kubernetes e Rancher (Udemy)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          DevOps Ninja: Gitlab Auto DevOps (Udemy)
        </div>
        <div style={{ color: "#808080", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faDotCircle} color="#808080" size="1x" style={{ marginRight: "10px" }}/>
          DevOps Ninja: Multicloud + Multicluster K8S + Rancher + Traefik (Udemy)
        </div>
      </div>

      </Row>
      {/* <Row style={{ marginLeft: "30px" }}>
        <Titles icon={faDiagramProject} text="Projetos" />
      </Row> */}
    </Container>
  );
}
