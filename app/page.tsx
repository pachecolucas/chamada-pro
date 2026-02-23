import Image from "next/image";
import foto from "./pro-260223.jpeg";

export default function Home() {
  return (
    <div>
      <Image src={foto.src} width={foto.width} height={foto.height} alt="foto" className="w-100" />
      <h1>23/02/26</h1>
      <ol>
        <li>João Guilherme</li>
        <li>José Lorenzo</li>
        <li>Edson Hagmayer</li>
        <li>Fabrizio Astrada</li>
        <li>Pedro Ferreira</li>
        <li>Kleberson dos Santos</li>
        <li>João Vítor</li>
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
    </div>
  );
}
