import Head from 'next/head';
import Image from 'next/image' 
import styled from '@emotion/styled'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ilu1 from "../public/images/8.svg"
import Link from 'next/link';
import github from '../public/images/github.svg'
import instagram from '../public/images/instagram.svg'
import linkedin from '../public/images/linkedin.svg'

export default function Home() {

  const Main = styled.div`
  background: #000;
  height: 130vh;
  width: 100%;
  @media (max-width: 470px){
    
  }
  `;

  const MainContainer = styled.div`
  display: flex;
  margin: 50px;

  `;

  const MainText = styled.div`
  color: #fff;
  > h1 {
    font-size: 3em;
    font-weight: 700;
  }
  > p {
    font-weight: 200;
  }
  > button {
    padding: 10px 30px;
    background: #3880D0;
    border: 1px transparent;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 20px;
    :hover{
      background: #3880f0;
      border: 1px #fff solid;
    }
  }
  `;

  const MainImage = styled.div`
  margin-top: -100px;
  `;

  

  return (
        <Main> 
       <Head>
        <title>EC.TECH Angola</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainContainer>
        <MainText>
          <h1>LANÇAMOS OS SEUS <br/>  PRODUTOS E A SUA <br/> EMPRESA  NO MUNDO DIGITAL</h1>
          <p>Provemos o melhor serviço para sua empresa e para seus progetos pessoais</p>
          <button><Link href='/HomePage'>Saiba mais</Link></button>
          <div>
            <Link href="http://github.io">
              <a>
                <Image src={github} alt="imagem de Github" />
              </a>
            </Link>
            <Link href="http://instagram.com">
              <Image src={instagram} alt="imagem de instagran" />
            </Link>
            <Link href="http://linkedin.com">
              <Image src={linkedin} alt="imagem de Linkedin" />
            </Link>
          </div>
        </MainText>
        <MainImage>
          <Image src={ilu1} width={800} height={800} alt="imagem de ilustração" />
        </MainImage>
      </MainContainer>
    <Footer/>
   </Main>
  )
}
