import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import styles from '../styles/Home.module.css'

export default function Home () {
  const [verified, setVerified] = useState(false)

  return (
    <Container className={[styles.container, 'p-3']}>
      <Head>
        <title>Meckerkasten</title>
      </Head>
      <Image src="https://assets.neuland.app/StudVer_Logo_2020_CMYK.svg" width="300" height="103" />
      <h1 className={styles.heading}>Meckerkasten der Fachschaft Informatik</h1>
      <p>
        Stört dich oder beschäftigt dich etwas bezüglich unserer Hochschule, aber du möchtest es nicht offen ansprechen?
        Hier kannst du uns anonym deine Sorgen und deine Beschwerden mitteilen. :)
      </p>
      <p>
        Du kannst uns natürlich auch jederzeit unter <a href="mailto:studver@thi.de">studver@thi.de</a> sowie in Raum W003 erreichen.
      </p>
      <Form method="post" action="api/submit">
        <Form.Group className="mb-3">
          <Form.Label>Nachricht:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-Mail-Adresse (optional):</Form.Label>
          <Form.Control
            name="email"
            />
          <Form.Text className="text-muted">
            Das musst du nur angeben, wenn du eine Antwort möchtest.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
            onVerify={(token, ekey) => setVerified(true)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!verified}>Absenden</Button>
      </Form>
      <p className="text-muted mt-3">
        <small>
          Ein Angebot der Fachschaft Informatik an der Technischen Hochschule Ingolstadt, bereitgestellt von Neuland Ingolstadt <br />
          <a href="https://neuland-ingolstadt.de/impressum.htm" target="_blank" rel="noreferrer">Impressum und Datenschutz</a>
        </small>
      </p>
    </Container>
  )
}
