# teachpoint-web

This repo contains React micro-frontends for teachpoint-web. It contains a git submodule, so to clone the full repo use the `--recurse-submodules`
flag when cloning.

## MFE Structure

Micro frontends should primarily be defined by their domain and functionality versus being tied to a single page or area of an app. When creating a new MFE, first consider if it logically fits as a sub component of an existing MFE with shared types and business rules.

## Starting up locally

To start up both the shell and the MFEs defined in the repo, you can run `npm run start` from the root of the repo. This will start the shell at `http://localhost:9000`. Different MFEs can be loaded via the routes defined in `/projects/shell/src/microfrontend-layout.html`. 

## Generators

We are using [hygen](https://www.hygen.io/) for code generation. Hygen commands can be run using the `npm run hygen --` command or by installing hygen globally. Templates for code generation are defined in `_templates`.

### Generate a new Micro Frontend

To generate an MFE use the command:

`npm run hygen -- mfe new --name your-mfe-name --path "/url/path/for/module"`

i.e

`npm run hygen -- mfe new --name bcourses --path "/apps/bcourses"`

This will create an MFE under projects/your-mfe-name with all of the necessary default config and build/test scripts.