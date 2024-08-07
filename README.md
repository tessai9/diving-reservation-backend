# Diving Reservation

## How to start

```bash
$ docker compose run --rm app npm install
$ docker compose run --rm app npm run build
$ docker compose run --rm app npm run typeorm migration:run
$ docker compose up
```

# Adding migration file

1. Create entity file at `src/entities/` with file name `*.entities.ts`
    ```typescript
    import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

    @Entity()
    export class EntityName {
      // column settings...
    }
    ```

1. Execute migrate generate command and run migration (build twice...mendoi...)
    ```bash
    $ docker compose up
    $ docker compose exec app bash

    # In docker container
    $ npm run build
    $ npm run typeorm migratinon:generate src/migrations/{migration-name}
    $ npm run build
    $ npm run typeorm migration:run
    ```
