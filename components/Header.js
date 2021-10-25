import React from 'react'
import Head from 'next/head'

export default function Header () {
  return (
    <>
      <Head>
        <title>Meckerkasten der Fachschaft Informatik</title>
        <meta name="description" content="Meckerkasten von der Fachschaft Informatik für die Studierenden der Fakultät Informatik" />
        <link rel="icon" type="image/svg+xml" href="https://assets.neuland.app/StudVer_Logo_ohne%20Schrift.svg" />
      </Head>
      <img src="https://assets.neuland.app/StudVer_Logo_2020_CMYK.svg" width="300" className="mb-3" />
      <h1>Meckerkasten der Fachschaft Informatik</h1>
    </>
  )
}
