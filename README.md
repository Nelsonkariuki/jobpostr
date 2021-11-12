# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Installation / Setup

Use the adonis command to install the blueprint

```bash
> npm i --global @adonisjs/cli
> adonis new jobpostr
> cd jobpostr
> adonis serve --dev
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
