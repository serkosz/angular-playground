<h1 align="center">
<img width="40" valign="bottom" src="https://ultimatecourses.com/static/icons/angular.svg">
Angular Playground v14 based on Ultimate Course
</h1>

---

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

`ng generate module test-playground` - generate module test-playground

`ng generate component test-playground/components/ng-content-test --module test-playground` - generate component ng-content-test within test-playground module and folder `components`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Resolve syntax errors

1. npm install
2. ng build
3. restart visual studio code

## JSON server
Run script: npm run db and in real the commands runs script from package.json     
`"db": "json-server --watch db.json --delay 1000"`
In file db.json paste belowe values

```json
{
  "donuts": [
    {
      "id": "y8z0As",
      "name": "Just Chocolate",
      "icon": "just-chocolate",
      "price": 119,
      "promo": "limited",
      "description": "For the pure chocoholic."
    },
    {
      "id": "3u98Kl",
      "name": "Glazed Fudge",
      "icon": "glazed-fudge",
      "price": 129,
      "promo": "new",
      "description": "Sticky perfection."
    },
    {
      "id": "ae098s",
      "name": "Caramel Swirl",
      "icon": "caramel-swirl",
      "price": 129,
      "description": "Chocolate drizzled with caramel."
    },
    {
      "id": "8amkZ9",
      "name": "Sour Supreme",
      "icon": "sour-supreme",
      "price": 139,
      "description": "For the sour advocate."
    },
    {
      "id": "l3M0nz",
      "name": "Zesty Lemon",
      "icon": "zesty-lemon",
      "price": 129,
      "description": "Delicious lucious lemon."
    }
  ]
}
```

Now it should work under such url: 
* get all donuts: http://localhost:3000/donuts
* get by id: http://localhost:3000/donuts/8amkZ9
* or by proxy(it works only when app is running) http://localhost:4200/api/donuts/8amkZ9


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
