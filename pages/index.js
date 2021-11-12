import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { recipients } from '../util/config'

export async function getServerSideProps (ctx) {
  return {
    props: {
      hCaptchaSiteKey: process.env.HCAPTCHA_SITEKEY,
      recipients: recipients.map(({ id, name }) => ({ id, name }))
    }
  }
}

export default function Home ({ hCaptchaSiteKey, recipients }) {
  const [verified, setVerified] = useState(false)

  return (
    <Container className={[styles.container, 'p-3']}>
      <Header />
      <p>
        Stört dich oder beschäftigt dich etwas bezüglich unserer Hochschule, aber du möchtest es nicht offen ansprechen?
        Hier kannst du uns anonym deine Sorgen und deine Beschwerden mitteilen. :)
      </p>
      <p>
        Du kannst uns natürlich auch jederzeit unter <a href="mailto:studver@thi.de">studver@thi.de</a> sowie in Raum W003 erreichen.
      </p>
      <Form method="post" action="api/submit">
        <Form.Group className="mb-3">
          <Form.Label>Empfänger:</Form.Label>
          <Form.Select name="recipient">
            {recipients.map(({ id, name }) =>
              <option key={id} value={id}>{name}</option>
            )}
          </Form.Select>
        </Form.Group>
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
            type="email"
            />
          <Form.Text className="text-muted">
            Damit wir dich kontaktieren können, wenn du das möchtest.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <HCaptcha
            sitekey={hCaptchaSiteKey}
            onVerify={(token, ekey) => setVerified(true)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!verified}>Absenden</Button>
      </Form>
      <Footer />
    </Container>
  )
}
Home.propTypes = {
  hCaptchaSiteKey: PropTypes.string,
  recipients: PropTypes.array
}
