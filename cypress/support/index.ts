/// <reference types="Cypress" />

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
    namespace Cypress {
      interface Chainable {
        /**
        * Login to AUT
        */
        login(): Chainable<Element>

        /**
         * Validates URL. Automatically prepends baseUrl from config.
         * @param url url (excluding baseUrl)
         */
        urlEqual(url :string): Chainable<Element>
      }
    }
  }