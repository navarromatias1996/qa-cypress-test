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

## Cómo ejecutar

1. Clonar el repo:
   git clone https://github.com/navarromatias1996/qa-cypress-test.git
2. Instalar dependencias:
   npm install
3. Abrir Cypress:
   npx cypress open
4. Seleccionar E2E Testing y correr los tests

## Casos probados

### Parte 1 – UI (Automation Exercise)

**Test: Registro de usuario**
- Flujo: Crear un nuevo usuario en la plataforma de e-commerce.
- Pasos:
  1. Abrir la página principal de Automation Exercise.
  2. Hacer click en "Signup / Login".
  3. Completar nombre y correo electrónico único.
  4. Seleccionar género y establecer contraseña.
  5. Hacer click en "Create Account".
- Validación: Verificar que aparezca el mensaje "Account Created!".
- Observaciones: Se podría agregar un test de login posterior y validaciones adicionales de errores de UI (opcional).

---

### Parte 2 – API (Echo Server)

**Test 1: GET /qa/test1**
- Endpoint: `https://echo-serv.tbxnet.com/v1/qa/test1`
- Validaciones:
  - Status code: 200
  - Response time: < 3 segundos
- Observaciones: Se podría validar la estructura del body y algunos headers (opcional).

**Test 2: POST /test**
- Endpoint: `https://echo-serv.tbxnet.com/v1/test`
- Flujo: Enviar un JSON con datos de ejemplo.
- Validaciones:
  - Status code: 200
  - Response body contiene la propiedad `json`.



## Observaciones / Mejoras (sugerencias)

- Se podría implementar screenshot automático al fallar un test.
- Capturar errores de validación del formulario de login.
- Para API: manejar errores 400/500 y verificar headers de respuesta.

## Autor

Matías Navarro [GitHub](https://github.com/navarromatias1996)
