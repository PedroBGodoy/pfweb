import PgPromiseDatabase from "../../src/infra/database/PgPromiseDatabase";

let pgPromiseDatabase: PgPromiseDatabase;

beforeEach(async function () {
    pgPromiseDatabase = PgPromiseDatabase.getInstance();
});

test("Deve conectar no banco de dados e listar os itens", async function () {
    const itens = await pgPromiseDatabase.many("select * from pfweb.item", []);
    expect(itens).toHaveLength(3);
});

test("Deve conectar no banco de dados e pegar um item", async function () {
    const item = await pgPromiseDatabase.one("select * from pfweb.item where id = $1", [1]);
    expect(item.description).toBe("Guitarra");
});
