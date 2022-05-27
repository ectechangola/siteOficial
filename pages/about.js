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


  return (
    <>
    <Navbar />
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
