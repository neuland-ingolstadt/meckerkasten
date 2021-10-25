import React from 'react'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/dist/client/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error () {
  const router = useRouter()

  return (
    <Container className="p-3">
      <Header />
      <p>
        Uff, es ist ein Fehler aufgetreten.
      </p>
      <p>
        Bitte probiere es noch ein Mal. Wenn es dann immer noch nicht funktioniert, schreib uns bitte ein E-Mail an <a href="mailto:studver@thi.de">studver@thi.de</a>.
      </p>
      <p>
        {router.query.message}
      </p>
      <p className="text-muted mt-3">
        <small>
          Ein Angebot der Fachschaft Informatik an der Technischen Hochschule Ingolstadt.
          <br />
          <a href="https://neuland-ingolstadt.de/impressum.htm" target="_blank" rel="noreferrer">Impressum und Datenschutz</a>
        </small>
      </p>
      <Footer />
    </Container>
  )
}
