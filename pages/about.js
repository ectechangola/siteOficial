import Head from 'next/head';
import styled from '@emotion/styled'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function about() {

    const HomeSection3 = styled.div`
    max-height: max-content;
    justify-items: center;
    width: 100%;
    height: 90vh;
    color: #000;
    > p{
        font-weight: 400;
    }
    @media (max-width: 470px){
      display: flex;
      flex-direction: column;
      flex-wrap:wrap;
    }
    `;

    const Text = styled.div`
    text-align: justify;
    margin-right: 40px;
    margin-top: 70px;
    font-weight: 300;
    margin-left: 30px;
    `;

    const Title = styled.div`
    text-align: center;
    `;

  return (
    <>
    <Head>
        <title>EC.TECH Angola</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Title>
      <h1>Sobre nós</h1>
    </Title>
    <HomeSection3>
            <Text>
                <p>
                    Somos uma startup fundada por dois jovens Angolanos Empreededores que pretendem revolucionar
                    o mercado tecnológico proporcionando soluções onde se deve a mais dificuldade de serviços a empresas e Pessoas
                    singulares que possuem ideias inovadoras mais não possuem conhecimentos para poder fazer que os
                    projetos saiam do papel e ganhem rendimentos. <br/> <br/>

                    Pretendemos ajudar no desenvolvimento do ensino em tecnologia em angola para que muitos jovens possam investir
                    e tornar o nosso pais cada vez mais desenvolvido tecnologicamente.  <br/> <br/>

                     Estamos dispostos a enfrentar os desafios do empreendedorismo digital e inovação e criando mais
                     oportunidades para o desenvolvimento das tecnologias do nosso pais.
                </p>
            </Text>
        <Footer />
        </HomeSection3>
    </>
  )
}
