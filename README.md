# cypress-imageshot-vuejs-playground

## Challenges
- False positives
  - antialias related ignore is needed, otherwise, lots noise
  - not able to ignore a section on the page is making it impossible to testing layout of page with dynamic section
- server side device detection is not honored


## Features

## Desired Features

[  ] Home Page 
[ ... ] Login / Create Account
[  ] Create Account Variant & Default
[ V ] Different screen size 
[  ] independent repo from storefront
## Great to Have Features (Divert to another ticket if POC is accepted)

PDP
Checkout
## Challenging Features (Divert to another ticket if POC is accepted)

Handling of Login (Ask Brandon)
Handling of Test Account, Entries, CRUD (Ask Brandon)


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### e2e Testing (Cypress)
```
yarn test:e2e
yarn test:dashboard
```