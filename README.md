# Database

### Run
```bash
docker-compose up
```
### Change schema
- location: `./prisma/schema.prisma`
- run to generate migration
```bash
yarn prisma migrate dev --name init
```


# Application

- Install packages

```bash
yarn install
```

- setup `.env` file from `.env_example`
- run application
  - on development mode
    ```bash
    yarn run start dev
    ```
  - om production mode
    ```bash
    yarn run build
    yarn run start:prod
    ```