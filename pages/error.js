import React from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/dist/client/router'

export default function Error () {
  const router = useRouter()

  return (
    <Container className="p-3">
      <Head>
        <title>Meckerkasten</title>
      </Head>
      <img src="https://assets.neuland.app/StudVer_Logo_2020_CMYK.svg" width="300" className="mb-3" />
      <h1>Meckerkasten der Fachschaft Informatik</h1>
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
    </Container>
  )
}
