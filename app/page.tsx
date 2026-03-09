import Image from "next/image";
import foto from "./pro-260223.jpeg";
import { DIAS, E } from "./model";

export default function Home() {
  return (
    <div>
      <h1>Chamadas ELITI PRO 2026</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            {DIAS.map((d) => (
              <th key={d.data} className="p-1 text-center">
                {d.data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(E)
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map((e, i) => (
              <tr key={i}>
                <td className="p-1">{e.nome}</td>
                {DIAS.map((d) => (
                  <td key={d.data} className="p-1 text-center">
                    {d.estudantes.includes(e) ? "✅" : "❌"}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>

      <Image src={foto.src} width={foto.width} height={foto.height} alt="foto" className="w-100" />
    </div>
  );
}
