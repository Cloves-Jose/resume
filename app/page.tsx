import styles from "./page.module.css";
import { Container, Row } from "react-bootstrap";
import { faBriefcase, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Titles from "./components/titles/title";

export default function Home() {
  return (
    <Container fluid className={styles.container}>
      <Row className={styles.containerProfile}>
        <Titles icon={faBriefcase} text="Experiência"/>
      </Row>
      <Row>
        <Titles icon={faGraduationCap} text="Formação"/>
      </Row>
      <Row>
        <Titles icon={faTrophy} text="Certificações"/>
      </Row>
    </Container>
  );
}
