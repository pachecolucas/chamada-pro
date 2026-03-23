import Image from "next/image";
import foto from "./pro-260223.jpeg";
import { DIAS, E } from "./model";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL as string;

const connection = postgres(connectionString, { prepare: false });

export const db = drizzle(connection);

export default async function Home() {
  await db.execute("DELETE FROM estudante WHERE id IN (8, 9)");
  // await db.execute("UPDATE estudante SET nome='Pedro Rosa' WHERE id=4");
  // await db.execute("INSERT INTO estudante (nome) VALUES ('Antônio Carlos')");
  const estudantes = await db.execute("SELECT * FROM estudante ORDER BY id");

  return (
    <div>
      <h1>Chamadas ELITI PRO 2026</h1>
      {estudantes.map((e) => (
        <p key={e.id}>
          {e.id} {e.nome}
        </p>
      ))}
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
