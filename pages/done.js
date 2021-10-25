import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Done () {
  return (
    <Container className="p-3">
      <Header />
      <p>
        Vielen Dank für deine Nachricht. 😊
      </p>
      <p>
        Falls du eine E-Mail-Adresse angegeben hast, werden wir dir so bald wie möglich antworten.
        Du kannst uns natürlich jederzeit auch unter <a href="mailto:studver@thi.de">studver@thi.de</a> sowie in Raum W003 erreichen.
      </p>
      <Footer />
    </Container>
  )
}
