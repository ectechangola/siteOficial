import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";
import networking from "../public/images/networking.png"
import programming from "../public/images/programming.png"
import startup from "../public/images/startup.png"
import seguranca from "../public/images/seguranca.png"


function serviços() {

    const HomeSection = styled.div`
    width: 100%;
    max-height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    > h1 {
        text-align: center;
        font-weight: 300;
    }

    @media (max-width: 570px) {
      flex-wrap: wrap;
      flex-direction: column;
      margin-top: 5rem;
    }
    `;

    const SectionItem = styled.div`
    width: 80%;
    height: 80vh;
    box-shadow: 1px 1px 3px 2px gray;
    margin: 20px;
    border-radius: 5px;
    flex-wrap: wrap;
    > h3 {
        text-align: center;
        font-weight: 500;
    }
    >p {
        text-align: justify;
        margin: 20px;
        font-weight: 300;
    }
    @media(max-width: 570px){
      font-size: 1em;
      max-height: max-content;
      max-width: max-content;
      align-content: center;
      justify-content: center;
    }
    `;

    const Title = styled.div`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    `;

    const Text = styled.div`
    > h4 {
        padding: 50px;
        font-weight: 400;
        text-align: justify;
    }
    `;

  return (
      <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9010224056633281"
     crossorigin="anonymous"></script>
        <title>EC.TECH Angola</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Title>
        <h1>Serviços</h1>
    </Title>
    <Text>
    <h4>Prestamos os nossos serviços ao melhor preço do mercado, transmitindo mais confiança aos nossos parceiros e clientes,
           usamos metodologias ageis para o Desenvolvimento dos Projetos e a mais rapida entrega dos trabalhos. <br/>
        </h4>
    </Text>
    <HomeSection>
        
        <SectionItem>
            <Image src={networking} alt="imagem de redes de computadores" />
            <h3>Redes de Computadores</h3>
            <p>Prestamos os melhores serviços na montagem e manutenção da sua Redes de computadores
                Serviços de manutenção e reparação de problemas por acesso remoto
            </p>
        </SectionItem>
        <SectionItem>
            <Image src={programming} width={300} height={160} alt="imagem de programação" />
            <h3>Desenvolvimento Web e Mobile</h3>
            <p>Desenvolvemos sistemas de acordo a necessidade da sua empresa desde pequenos Websites a apicativos
                com integração a API`S complexas tudo de acordo para que o seu negocio ganhe mais escalablidade
            </p>
        </SectionItem>
        <SectionItem>
            <Image src={startup} width={200} height={200} alt="imagem de design"/>
            <h3>Marketing Digital e Design</h3>
            <p>Publicidade feita da melhor forma pode fazer com que o seu negocio ganhe mais escalablidade em questão de clientes</p>
        </SectionItem>
        <SectionItem>
            <Image src={seguranca} width={200} height={200} alt="imagem de cctv"/>
            <h3>Circuito Televisivo de Segurança (CCTV)</h3>
            <p>Prestamos tambem serviços de CCTV automatizado para a melhor Segurança do seu negocio</p>
        </SectionItem>
    </HomeSection>
    <Footer />
</>
  )
}

export default serviços