import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";


export default function Exemplo(){
    return (
    <Layout titulo= "Usando Componentes">
        <div>    
            <h1>Exemplo imprimindo duas vezes o mesmo componentes com parametros diferentes.</h1>
            <Cabecalho titulo = "Next.js & React"/>
            <Cabecalho subtitulo = "Subtitulo ou Titulo 2" />
        </div>
    </Layout>
        
    )
}