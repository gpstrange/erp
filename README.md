# ERP app
Lets build an ERP application for an educational institution.

## Setup
- Clone the repository `git clone git@gitlab.com:Guru2402/erp-college.git`
- Install npm modules `npm install`
- Change the database configuration: `config/database.js`
- Create the database schema: `node server/scripts/create_database.js` || execute `db.sql`
- Install global npm modules `npm i -g nodemon webpack webpack-dev-server`
- Run node server `npm start`

## Core Structure
    erp-college/
      ├── client/
      │   ├── actions/
      │   │   ├── common/
      │   │   ├── pages/
      │   │   └── user/
      │   │
      │   ├── components/
      │   │   ├── common/
      │   │   ├── pages/
      │   │   ├── user/
      │   │   └── app.js
      │   │
      │   ├── reducers/
      │   ├── index.js
      │   └── routes.js
      │
      ├── server/
      │   ├── configs/
      │   │   ├── database.js
      │   │   ├── server.js
      │   │   └── webpack.dev.js
      │   │
      │   ├── middlewares/
      │   ├── controllers/
      │   ├── routes/
      │   ├── index.html
      │   └── index.js
      │
      ├── shared/
      │   └── validations/
      │
      ├── .babelrc
      ├── .gitignore
      ├── package.json
      └── README.md

