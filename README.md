<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.architect.io/logo/horizontal-inverted.png">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.architect.io/logo/horizontal.png">
    <img width="320" alt="Architect Logo" src="https://cdn.architect.io/logo/horizontal.png">
  </picture>
</p>

<p align="center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---

# Nuxt.js TSX starter project

I love Nuxt and Vue for heavy web applications, but have recently grown to favor React in large part due to JSX. I wanted to setup a way for me to get the SSR support I love from Nuxt while writing templates using JSX, and found that can be done through a combination of [first class support from Vue](https://vuejs.org/v2/guide/render-function.html#JSX) and [some clever babel presents](https://github.com/vuejs/jsx)! The usage of JSX allows me to further benefit from Typescript and type checking inside my template logic to let me develop faster and make better use of my IDE.

I've put together this project to help myself and others setup new web application projects easily. Enjoy!

![Screenshot](./screenshot.png)

In this example, we've written a component spec (the `architect.yml` file) that defines a component to run a Nuxt based web application.

[Learn more about the architect.yml file](//docs.architect.io/components/architect-yml/)

## Running locally

```sh
# Clone the repository and navigate to this directory
$ git clone https://github.com/architect-templates/nuxt.git
$ cd ./nuxt

# Register the component to the local registry
$ architect link .

# Deploy locally using the dev command
$ architect dev .
```

Once the deploy has completed, you can reach your new service by going to https://app.localhost.architect.sh/.

## Larger projects

Want to see a larger project using this same boilerplate? Check out the following:

- [Architect Auth](https://github.com/architect-team/architect-auth) - A self-hosted user authentication and authorization server.
