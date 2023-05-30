import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardText, Col, Row, CardHeader, CardFooter } from 'reactstrap';
import styles from '@/styles/Home.module.css'
import logo_web from "@/assets/images/logo_web.png";
import imagem from "@/assets/images/imagem.png";
import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>App Blocks Catalogo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center pt-3 pb-3">
          <p className="mb-0 me-2">Não limite sua criatividade, junte-se a familia Blocks por apenas <span className="fw-bold">BRL 19,99</span></p>
          <Button>Quero ser Premium</Button>
        </div>
        <div className="ps-4 pe-4">
          <section className="d-flex justify-content-center align-items-center">
            <Image src={logo_web} alt="logo_web" />
          </section>
          <section className="d-flex justify-content-start align-items-center">
            <h1>Catálogo</h1>
          </section>
          <section>
            <h2>Resultados</h2>
            <Row>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
            </Row>
          </section>
          <footer>
            <ul>
              <li>Sobre</li>
              <li>FAQ</li>
              <li>Termos de uso</li>
              <li>Politica de privacidade</li>
            </ul>
          </footer>
        </div>
      </main>
    </>
  );
}

function ItemResultadoCatalogo() {
  return (
    <Col className="mb-4">
      <Card style={{ width: '18rem' }}>
        <CardBody className="d-flex justify-content-center align-items-center">
          <Image src={imagem} alt="imagem" />
        </CardBody>
        <CardFooter className="d-flex justify-content-center align-items-center">
          <CardText className="border-end border-dark me-2 mb-0">Lorem Ipsum is sLorem Ipsum is simply ....</CardText>
          <BsArrowUpRight />
        </CardFooter>
      </Card>
    </Col>
  );
}

/*
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>App Blocks Catalogo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
*/
