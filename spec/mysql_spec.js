import Db from 'mysql2-async';

describe("mysql", () => {
    it("it selects a row from testing", async () => {
        const db = new Db({
            host: 'localhost',
            password: 'example',
            database: 'test'
          })
          const row = await db.getrow('SELECT * FROM testing');
      expect(row.name).toBe('Rich Hildred');
    });
  });