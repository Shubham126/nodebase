

## Getting Started
First, install the node modules
```bash
npm install
```

Then run the prisma, for it to compile the prisma schema into usable typescript client
```bash
npx prisma generate
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Side commands


```bash
npx prisma migrate dev
```
This updates the migration history and generates new new migration files in SQL format when it detects changes to your Prisma schema, creating a timestamped folder with the migration SQL

```bash
npx prisma studio
```
to view and update the database, it will open on localhost 5555
