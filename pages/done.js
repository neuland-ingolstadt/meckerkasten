import React from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'

export default function Done () {
  return (
    <Container className="p-3">
      <Head>
        <title>Meckerkasten</title>
      </Head>
      <img src="https://assets.neuland.app/StudVer_Logo_2020_CMYK.svg" width="300" className="mb-3" />
      <h1>Meckerkasten der Fachschaft Informatik</h1>
      <p>
        Vielen Dank für deine Nachricht. 😊
      </p>
      <p>
        Falls du eine E-Mail-Adresse angegeben hast, werden wir dir so bald wie möglich antworten.
        Du kannst uns natürlich jederzeit auch unter <a href="mailto:studver@thi.de">studver@thi.de</a> sowie in Raum W003 erreichen.
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
