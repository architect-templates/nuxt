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

# Nuxt.js starter project

In this example, we've written an Architect component spec (the `architect.yml` file) that defines a component to run a [Nuxt](https://nuxtjs.org/)-based web application.

In the [`architect.yml`](//docs.architect.io/components/architect-yml/n) file for this project, we describe the Nuxt application as
a [service](https://docs.architect.io/components/services/) and connect it to a
[Node.js REST API](https://github.com/architect-templates/node-rest-api) as a [dependency](https://docs.architect.io/components/dependencies/).
We also leverage Architect's [service referencing syntax](//docs.architect.io/components/service-discovery/#service-referencing-syntax)
to populate network information, which allows Architect to seamlessly promote this stack from local dev all the way through to production!

[Learn more about the architect.yml file](//docs.architect.io/components/architect-yml/)

## Using the Nuxt App
This example application is configured to connect to the [Node.js Starter Project](https://github.com/architect-templates/node-rest-api)
REST API for its backend, but you can modify the `architect.yml` file to connect to any REST API backend that has been registered to your account as an
Architect Component.

Once this application is running, you will be able to submit your favorite films, rate them, and see the list
of all the films and ratings that have been submitted through your application.

![Screenshot](./screenshot.png)

## Requirements
Before you can run this example application, you will need to install the [Architect CLI](https://github.com/architect-team/architect-cli).

## Running Locally
The `architect.yml` file is declarative, which allows the Architect Component it describes to be run in any environment,
from local development all the way to production. Follow these steps to clone this repository and run the application
locally.

Once the deployment has completed, you can reach your new service by going to https://app.localhost.architect.sh.

```sh
# Clone the repository and navigate to this directory
$ git clone git@github.com:architect-templates/nuxt.git
$ cd ./nuxt

# Deploy locally using the dev command
$ architect dev architect.yml
```

## Deploying to the Cloud

Want to try deploying this to a cloud environment? Architect's got you covered there, too! It only takes a minute to
[sign up for a free account](https://cloud.architect.io/signup).

You can then [deploy the application](https://docs.architect.io/getting-started/introduction/#deploy-to-the-cloud) by running the command below. Note that “example-environment” is the free environment that is created with your Architect account.

```sh
# Deploy to Architect Cloud
$ architect deploy architect.yml -e example-environment
```

---
# Additional Learning
After you feel comfortable deploying a component with Architect, feel free to check out the powerful features we've added into this component.

Additional features within this component:
* [Adding a dependency](#adding-a-dependency)


# Adding a dependency
Using a microservice framework allows you to decouple an application and alleviate many of the problems that come with a monolithic architecture. Architect provides first class support for microservces through the use of dependencies.

This example application is configured to connect to the [Node.js Starter Project](https://github.com/architect-templates/node-rest-api) REST API as a [dependency](https://docs.architect.io/components/dependencies/), but you can modify the `architect.yml` file to connect to any REST API backend as an Architect Component.

We also leverage Architect's [service referencing syntax](https://docs.architect.io/components/service-discovery/#service-referencing-syntax) to populate network information, which allows Architect to seamlessly promote this stack from local dev all the way through to production!

## Registering Dependencies
Since this application uses the [Node.js Starter Project](https://github.com/architect-templates/node-rest-api) as an external dependency, packaged into an independent Architect Component, you will need to clone that repository as well as this repository. Dependencies allow you to package the parts of your application stack independently rather than declaring them as services within the same `architect.yml` file, allowing reuse of your components.

Once you have cloned the Node.js Starter Project, you will need to use the [`link` command](https://docs.architect.io/deployments/local-environments/#local-registration) before starting the React application locally. This command tells Architect to look for the source code for this dependency locally rather than pulling down a Component that has been registered in Architect Cloud.

```sh
# Clone the Node.js Starter Project repository,
# Navigate to the repository's top-level directory, and link the project
$ git clone git@github.com:architect-templates/node-rest-api.git
$ cd ./node-rest-api
$ architect link .
$ cd ../
```

After linking, some sections of the `architect.yml` file and the application code will need to be uncommented.

### Update the architect.yml file

Uncomment lines 8 and 9 of the architect.yml file. These lines let Architect know that the `nuxt` component depends on the `node-rest-api`. Additionally, it tells Architect to use the latest linked version available with the `latest` tag.

```yml
dependencies:
  node-rest-api: latest
```

Uncomment line 33 of the `architect.yml` file, then save it.
This line provides the address of the `node-rest-api` depdendency as an environment variable for the Nuxt service. Everything inside of `${{}}` is part of the [service referencing syntax](https://docs.architect.io/components/service-discovery/#service-referencing-syntax).

```yml
environment:
  APP_API_ADDR: ${{ dependencies['node-rest-api'].services.api.interfaces.main.url }}
```

### Update the application
Navigate to `src/pages/index.vue` and uncomment lines 5. This component loads a form and table to input and display a list of your favorite movies.

```vue
<ArchitectItems />
```

## Relaunch the component
Now that the dependency has been added, the component should be restarted to reflect the changes in the `architect.yml` file. If the app hasn't already been restarted, do so by hitting `Ctrl-C`. Then run:

```sh
$ architect dev .
```

to see the new changes.
