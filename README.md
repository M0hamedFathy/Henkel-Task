# Henkel Task

## Table of content

- [Description](#project-description)
- [Usage](#usage)
- [Directory](#directory-structure)
- [Technologies](#technologies-i-used)
- [Installation](#installation)

## Project Description

This is a simple task to demonstrate being able to use reactive forms along with it's validators and ag-grid library.

## Usage

The Website consists of two sections, The sign up section or tab and the table tab.

At the title drop down. You can find the default title is selected based on isDefault value for this title the field is required using custom validator.

The first, last Name and the T&Cs check box are required fields.

The table coponent is created using AG-Grid library and it does consist of 12 col and 30 rows populated with a dummy data as requested.


## Directory Structure

**What could have been a better structure**
- Core for the core components.
- Module for the modules and each one includes it's own routing incase you would like to have lazy loading.
- Shared does include any reusable component, models, services, directives and custom pipes.

### The application contains the following directories:

**What could have the direcorty include**
- core it would come in handy in case we have interceptors, guards or handling authentication.
- module: for the main modules that you have includes their details and services.
- Shared module: for the reusable components all gathered under the ui module, and models.
- assets: assets folder includes the project assets, And the color variables for the project.
- App-routing : for the main routing configurations.
- styles.scss: for the main styling.

## Technologies used

- **Angular** for creating a SPA.
- **Angular CLI** for scaffolding the project.
- **Tailwind** for styling.
- **AG-Grid** for styling and creating the logo, custom styling.

## Installation

Simply type in Terminal **_npm install_** and then **_ng serve_** for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
