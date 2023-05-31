import Image from 'next/image';
import { Card, CardBody, CardFooter, CardText, Col } from 'reactstrap';
import { BsArrowUpRight } from "react-icons/bs";
import { DataListType } from '@/types/types';
import styles from '@/styles/Home.module.css';
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({ subsets: ['latin'] });

export type ItemResultadoCatalogoTypes = DataListType;

export function ItemResultadoCatalogo(props: ItemResultadoCatalogoTypes) {
  const { id, details } = props;
  const { name } = details;

  return (
    <Col className="p-0 m-0 mb-3">
      <Card className={`${styles.card_container}`}>
        <CardBody className="d-flex justify-content-center align-items-center">
          <Image
            src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${id}.jpg`}
            alt="imagem"
            className="img-fluid"
            width={100}
            height={50} />
        </CardBody>
        <CardFooter className="d-flex justify-content-center align-items-center">
          <CardText className={`mb-0 ${open_sans.className} ${styles.card_texto}`}>
            {name}
          </CardText>
          <span className={`me-2 ms-2 ${styles.cardtext_separator}`} />
          <BsArrowUpRight color='#474747' size={16} className={styles.card_icone_botao} />
        </CardFooter>
      </Card>
    </Col>
  );
}
