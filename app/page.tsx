import Image from "next/image";
import foto from "./pro-260223.jpeg";
import { DIAS, ESTUDANTES } from "./model";

export default function Home() {
  return (
    <div>
      <h1>Estudantes</h1>
      {/* {ESTUDANTES.map((e) => (
        <div key={e.id}>
          {e.id} {e.nome}
        </div>
      ))} */}

      <h1>Chamadas</h1>
      <div className="flex gap-4">
        {DIAS.map((d) => (
          <div key={d.data} className="border p-4">
            <h2>{d.data}</h2>
            {d.estudantes.map((key) => (
              <div key={key}>{ESTUDANTES[key].nome}</div>
            ))}
          </div>
        ))}
      </div>

      <Image src={foto.src} width={foto.width} height={foto.height} alt="foto" className="w-100" />
      <h1>23/02/26</h1>
      <ol>
        <li>João Guilherme</li>
        <li>José Lorenzo</li>
        <li>Edson Hagmayer</li>
        <li>Fabrizio Astrada</li>
        <li>Pedro Ferreira Nunes Neto</li>
        <li>Kleberson dos Santos</li>
        <li>João Vítor Marcolino Veiga</li>
        <li>Leandro Bugalho</li>
        <li>Clarissa Flor</li>
        <li>Amanda dos Santos Daros</li>
        <li>Jhon Vítor Medeiros</li>
        <li>Elias Caleb</li>
        <li>Diogo Maia</li>
        <li>Eduardo Ribeiro</li>
        <li>Tiago Bugalho</li>
        <li>Isabelly Marques</li>
        <li>Mateus Collet Lacerda Machado</li>
      </ol>
      <h1>02/03/26</h1>
      <ol>
        <li>Pedro Ferreira Nunes Neto</li>
        <li>João Pedro Mello</li>
        <li>Igor da Silva Dias</li>
        <li>João Vítor Marcolino Veiga</li>
        <li>Sabrina da Silva Sobral</li>
        <li>Amanda dos Santos Daros</li>
        <li>Railson de Oliveira Silva</li>
        <li>Edson Hagmayer</li>
        <li>Isabelly Marques</li>
        <li>João Guilherme</li>
        <li>Mateus Collet Lacerda Machado</li>
        <li>Leandro Bugalho</li>
        <li>Tiago Bugalho</li>
        <li>Kleberson dos Santos</li>
        <li>Elias Caleb</li>
        <li>José Lorenzo</li>
        <li>Rafa Verde</li>
      </ol>
    </div>
  );
}
