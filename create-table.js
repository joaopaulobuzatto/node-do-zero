import { sql } from "./db.js";

sql`
CREATE TABLE video (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(() => {
    console.log('Tabela VIDEO criada')
})