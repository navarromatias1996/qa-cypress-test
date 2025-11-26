# QA Cypress Test

Repositorio con tests de ejemplo para UI y API usando Cypress.

## Descripción

Este proyecto contiene pruebas automatizadas de ejemplo para:

- **UI (Interfaz de usuario)**: Test del e-commerce.  
- **API (Echo Server)**: Test de API simple usando Cypress.

Los tests están organizados en archivos separados para mantener claridad y escalabilidad.

## Estructura del proyecto

qa-cypress-test/
├── cypress/
│ └── e2e/
│ ├── ui_test.cy.js # Test de UI del e-commerce
│ └── api_test.cy.js # Test de API con Echo Server
├── package.json
├── package-lock.json
└── README.md

# QA Cypress Test

Repositorio con tests de ejemplo para UI y API usando Cypress.

## Estructura

cypress/
└── e2e/
    ├── ui_test.cy.js    # Test de UI del e-commerce
    └── api_test.cy.js   # Test de API con Echo Server

## Cómo ejecutar

1. Clonar el repo:
   git clone https://github.com/navarromatias1996/qa-cypress-test.git
2. Instalar dependencias:
   npm install
3. Abrir Cypress:
   npx cypress open
4. Seleccionar E2E Testing y correr los tests

## Observaciones / Mejoras

## Observaciones / Mejoras (sugerencias)

- Se podría implementar screenshot automático al fallar un test.
- Validar que el botón "Agregar al carrito" no acepte stock insuficiente.
- Capturar errores de validación del formulario de login.
- Para API: manejar errores 400/500 y verificar headers de respuesta.

Autor

Matías Navarro
