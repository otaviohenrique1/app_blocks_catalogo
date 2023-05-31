import Image from 'next/image';
import { Card, CardBody, CardFooter, CardText, Col } from 'reactstrap';
import { BsArrowUpRight } from "react-icons/bs";
import { DataListType } from '@/types/types';
import styles from '@/styles/Home.module.css';
import { Open_Sans } from 'next/font/google';

/*
http://localhost:8080/families*
http://localhost:8080/families?skip=0&take=10
http://localhost:8080/families?skip=10&take=10
https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/ID DA FAMÍLIA.jpg
https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/abc-123.jpg
*/

const open_sans = Open_Sans({ subsets: ['latin'] });

export type ItemResultadoCatalogoTypes = DataListType;

export function ItemResultadoCatalogo(props: ItemResultadoCatalogoTypes) {
  const { id, premium, details } = props;
  const { name, description } = details;

  return (
    <Col className={`p-0 m-0 mb-3 ${styles.card_col}`}>
      <Card className={`${styles.card_container}`}>
        <CardBody className="d-flex justify-content-center align-items-center">
          <Image
            src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${id}.jpg`}
            alt="imagem"
            className="img-fluid"
            width={100}
            height={50} />
          {/* <Image src={imagem} alt="imagem" className="img-fluid" /> */}
        </CardBody>
        <CardFooter className="d-flex justify-content-center align-items-center">
          <CardText className={`mb-0 ${open_sans.className} ${styles.card_texto}`}>
            {name}
            {/* Lorem Ipsum is sLorem Ipsum is simply .... */}
          </CardText>
          <span className={`me-2 ms-2 ${styles.cardtext_separator}`} />
          <BsArrowUpRight color='#474747' size={16} className={styles.card_icone_botao} />
        </CardFooter>
      </Card>
    </Col>
  );
}
