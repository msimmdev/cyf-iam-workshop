# CYF Identity & Access Management Workshop
1. Fork and clone the repository
2. Run `npm install` in the root folder
3. Run `npm start -w api` in the root folder to start the API
4. Run `npm run dev -w app` in the root folder to start the React App
5. Navigate to http://localhost:5173/ to see the app
## Requirements
1. All users accessing the app should be able to see the free cats.
2. All users that are authenticated with an account should be able to see the premium cats.
3. Users that have an account with the 'CatLover' role should be able to see the super-premium cats.
## API Endpoints
* http://localhost:3000/cats/free
* http://localhost:3000/cats/premium
* http://localhost:3000/cats/super-premium
