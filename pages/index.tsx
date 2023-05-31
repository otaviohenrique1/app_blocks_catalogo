import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Row } from 'reactstrap';
import { BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ItemResultadoCatalogo } from './components/ItemResultadoCatalogo';
import axios from 'axios';
import { DataListType } from '@/types/types';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Open_Sans } from 'next/font/google';
import { TailSpin } from 'react-loader-spinner';

const open_sans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  const [items, setItems] = useState<DataListType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let itensPorPagina = 20;

    let url = `http://localhost:8080/families?skip=${page}&take=${itensPorPagina}`;

    axios.get(url)
      .then((data) => {
        let novosItens = data.data;

        setItems([...items, ...novosItens]);
        setPage(page + 10)
      })
      .catch((erro) => {
        console.error('Erro ao buscar dados:', erro);
      });
  };

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
          <section className="d-flex flex-column justify-content-center align-items-center">
            <span className={styles.logo} />
            <span className={`w-100 ${styles.gradiente} ${styles.borda_gradiente}`} />
          </section>
          <section className={`d-flex flex-column justify-content-center align-items-start ${styles.catalogo}`}>
            <h1 className={`${open_sans.className} ${styles.catalogo_titulo}`}>Catálogo</h1>
            <span className={`${styles.gradiente} ${styles.catalogo_span_gradiente}`} />
          </section>
          <section className={`${styles.resultados}`}>
            <h2 className={`${styles.resultados_titulo} ${open_sans.className}`}>Resultados</h2>
            <InfiniteScroll
              dataLength={items.length}
              next={fetchData}
              hasMore={true}
              loader={
                <TailSpin
                  height="80"
                  width="80"
                  color="#A11CF3"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              }
            >
              <Row className="p-0 m-0">
                {items.map((item, index) => {
                  return (
                    <ItemResultadoCatalogo
                      key={`${index}-${item.id}`}
                      id={item.id}
                      details={item.details}
                      premium={item.premium}
                    />
                  );
                })}
              </Row>
            </InfiniteScroll>
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
