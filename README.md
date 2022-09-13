# Gira

A trello like application built with `Nextjs`.

## Run the app

Use the docker compose:

```
docker-compose up
```

Local `Mongo` url:

```
mongodb://localhost:27017/entriesdb
```

## Env variables configuration

Rename the file __.env.template__ to __.env__

## Populate db with seed data

Having `docker-compose` up. You can request <http://localhost:3000/api/seed> endpoint to populate local db with data
