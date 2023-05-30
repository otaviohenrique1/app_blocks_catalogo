import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardBody, CardFooter, CardText, Col, Row } from 'reactstrap';
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from "@/assets/images/imagem.png";
import api from "@/utils/api";
import { Open_Sans } from 'next/font/google';
import { log } from 'console';
import axios from 'axios';
const open_sans = Open_Sans({ subsets: ['latin'] });



interface DetailsTypes {
  name: string;
  description: string;
}

interface DataTypes {
  id: string;
  premium: boolean;
  details: DetailsTypes;
}

let a = [
  {
    "id": "0032a1b5-8b30-4e10-a27c-3bd818d2f376",
    "premium": true,
    "details": {
      "name": "Copo Descartável",
      "description": "Copo descartável para café"
    }
  },
  {
    "id": "00577e1d-1c0f-4992-a680-bc29c305202d",
    "premium": true,
    "details": {
      "name": "Balanço Rústico",
      "description": "Banco de madeira para 2 pessoas"
    }
  }
];

interface DataListType {
  id: string;
  premium: boolean;
  details: {
    name: string;
    description: string;
  };
}

const dadosIniciais: DataListType = {
  id: '',
  premium: false,
  details: {
    name: '',
    description: ''
  }
};

/*
  http://localhost:8080/families*
  http://localhost:8080/families?skip=0&take=10
  http://localhost:8080/families?skip=10&take=10
  https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/ID DA FAMÍLIA.jpg
  https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/abc-123.jpg
*/

export default function Home() {
  const [data, setData] = useState<DataListType[]>([]);
  const [item, setItem] = useState<DataListType>(dadosIniciais);
  const [pagina, setPagina] = useState<number>(0);

  useEffect(() => {
    // let inicio = 0;
    // let fim = 2;
    // api.get(`skip=${inicio}&take=${fim}`)
    //   .then((itens) => {
    //     // let lista = itens.data;
    //     // setData(lista);
    //     // console.log(lista);
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //   });
    axios.get("http://localhost:8080/families?skip=0&take=10")
      .then((data) => {
        let lista = [...data.data];
        // console.log(lista);
        setData(lista);

        // console.log(lista[1]);
        // setItem(lista);
        // console.log(item);

        // console.log(data.data);
        // setData([...items.data]);
        // console.log(data);
        // console.log(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <Head>
        <title>App Blocks Catalogo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`d-flex ${styles.main_container}`}>

        <div className={`d-flex ${styles.mensagem}`}>
          <Button className={`${styles.botao_close}`}>Fechar <IoMdClose size={16} color="#FFFFFF" /></Button>
          <p className={`mb-0 me-2 ${styles.mensagem_titulo} ${open_sans.className}`}>Não limite sua criatividade, junte-se a familia Blocks por apenas <span className={`fw-bold ${open_sans.className}`}>BRL 19,99</span></p>
          <Button className={`${styles.gradiente} ${styles.mensagem_botao} ${open_sans.className}`}>Quero ser Premium <BsArrowRight color="#FFFFFF" size={24} /></Button>
        </div>

        <div>
          <section className={`d-flex flex-column justify-content-center align-items-center ${styles.area_logo}`}>
            <span className={styles.logo} />
            <span className={`w-100 ${styles.gradiente} ${styles.borda_gradiente}`} />
          </section>

          <section className={`d-flex flex-column justify-content-center align-items-start ${styles.catalogo}`}>
            <h1 className={`${open_sans.className} ${styles.catalogo_titulo}`}>Catálogo</h1>
            <span className={`${styles.gradiente} ${styles.catalogo_span_gradiente}`} />
          </section>

          <section /* className="me-5 ms-5" */ className={`${styles.resultados}`}>
            <h2 className={`${styles.resultados_titulo} ${open_sans.className}`}>Resultados</h2>
            <Row className="p-0 m-0">
              {data.map((item, index) => {
                return <p key={item.id.toString()}>{item.id.toString()}</p>;
              })}
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              {/* <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo>
              <ItemResultadoCatalogo></ItemResultadoCatalogo> */}
            </Row>
          </section>
          <footer className={`d-flex ${styles.rodape}`}>
            <Link href="#" className={`mb-0 text-decoration-none ${open_sans.className} ${styles.rodape_lista_item}`}>Sobre</Link>
            <Link href="#" className={`mb-0 text-decoration-none ${open_sans.className} ${styles.rodape_lista_item}`}>FAQ</Link>
            <Link href="#" className={`mb-0 text-decoration-none ${open_sans.className} ${styles.rodape_lista_item}`}>Termos de uso</Link>
            <Link href="#" className={`mb-0 text-decoration-none ${open_sans.className} ${styles.rodape_lista_item}`}>Politica de privacidade</Link>
          </footer>

        </div>
      </main>
    </>
  );
}

function ItemResultadoCatalogo() {
  return (
    <Col className={`p-0 m-0 mb-3 ${styles.card_col}`}>
      <Card className={`${styles.card_container}`}>
        <CardBody className="d-flex justify-content-center align-items-center">
          <Image src={imagem} alt="imagem" className="img-fluid" />
        </CardBody>
        <CardFooter className="d-flex justify-content-center align-items-center">
          <CardText className={`mb-0 ${open_sans.className} ${styles.card_texto}`}>Lorem Ipsum is sLorem Ipsum is simply ....</CardText>
          <span className={`me-2 ms-2 ${styles.cardtext_separator}`} />
          <BsArrowUpRight color='#474747' size={16} className={styles.card_icone_botao} />
        </CardFooter>
      </Card>
    </Col>
  );
}
