# 💻 Frontend - Cotizador de Seguros Vehiculares

Este proyecto es la interfaz de usuario del sistema de cotización de seguros vehiculares. Permite simular de forma sencilla y visual el costo del seguro, mostrando los ajustes aplicados según criterios definidos por el backend.

Construido con **Angular**, **Bootstrap** y arquitectura modular.

---

## 📌 Descripción del sistema

El frontend permite:

- Ingresar datos del vehículo y del conductor
- Obtener la prima total y ver detalles del cálculo
- Consultar dinámicamente las **marcas** y **tipos de uso** desde el backend
- Navegar entre secciones (cotización y modelos)
- Interfaz responsiva, moderna y minimalista

---

## ✅ Requisitos

- Node.js 18+
- Angular CLI
- Navegador moderno (Chrome, Firefox, Edge)
- Docker (opcional)

---

## ⚙️ Instalación local

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/cotizador-frontend.git
cd cotizador-frontend
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura las variables de entorno**

Copia el archivo de configuración de ejemplo:

```bash
cp src/environments/environment.example.ts src/environments/environment.ts
```

Edita el archivo `src/environments/environment.ts` con la URL de tu backend:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'  // Ajusta según tu backend
};
```

4. **Ejecuta el servidor de desarrollo**

```bash
ng serve
```

O alternativamente:

```bash
npm start
```

5. **Accede a la aplicación**

Abre tu navegador y ve a: `http://localhost:4200`

---

## 🐳 Instalación con Docker

1. **Construye la imagen**

```bash
docker build -t cotizador-frontend .
```

2. **Ejecuta el contenedor**

```bash
docker run -p 4200:4200 cotizador-frontend
```

---

## 🛠️ Scripts disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm run test       # Ejecuta las pruebas unitarias
npm run lint       # Ejecuta el linter
npm run e2e        # Ejecuta las pruebas end-to-end
```

