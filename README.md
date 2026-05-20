# Creciendo en el Pacto

Sistema de educación en casa para la familia Espinoza · Bogotá, Colombia · 2026–2027.  
Alumna: Elisabeth (6 años) · Primer año formal · Filosofía reformada/presbiteriana.

---

## Estructura del proyecto

```
creciendo-en-el-pacto/
├── index.html              ← App principal (para mamá)
├── css/
│   ├── app.css             ← Estilos de la app principal
│   └── ficha.css           ← Estilos de las fichas imprimibles
├── js/
│   ├── catecismo.js        ← Catecismo infantil P1–P145 (145 preguntas)
│   ├── competencias.js     ← Definición de áreas y competencias E/D/C
│   ├── semanas.js          ← Datos de las 38 semanas + contenido S1–S4
│   └── app.js              ← Lógica principal de la app
└── fichas/
    ├── semana-01.html      ← Ficha imprimible semana 1
    ├── semana-02.html      ← Ficha imprimible semana 2
    ├── semana-03.html      ← Ficha imprimible semana 3
    └── semana-04.html      ← Ficha imprimible semana 4
```

---

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub (p. ej. `espinoza-edu` o `creciendo-en-el-pacto`).
2. Sube todos los archivos manteniendo la estructura de carpetas.
3. Ve a **Settings → Pages** y selecciona la rama `main`, carpeta `/` (raíz).
4. GitHub Pages publica en `https://<usuario>.github.io/<repositorio>/`.
5. Abre esa URL en cualquier navegador — no se necesita servidor ni npm.

### Comandos rápidos (terminal)

```bash
git init
git add .
git commit -m "Creciendo en el Pacto — proyecto inicial"
git branch -M main
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

---

## Uso de la app (para mamá)

### Navegación
- **Inicio** — resumen de la semana actual, progreso y próximas semanas.
- **Planificación** — las 38 semanas organizadas por trimestre. Haz clic en cualquier semana para expandirla y ver el contenido diario.
- **Progreso E/D/C** — grilla de competencias. Haz clic en los botones E / D / C para registrar el nivel de cada competencia. Se guarda automáticamente.
- **Portafolio** — añade evidencias de aprendizaje por semana (texto libre).
- **Informes** — resumen trimestral exportable. Usa el botón "Imprimir" para guardar como PDF.

### Guardar y persistencia
- Todo se guarda en `localStorage` del navegador (prefijo `cp_`).
- Presiona **💾 Guardar** en la barra superior para guardar todos los campos visibles.
- Los datos persisten entre sesiones en el mismo navegador/dispositivo.
- **No se sincronizan** entre dispositivos — usa el mismo dispositivo siempre, o exporta el informe en PDF periódicamente como respaldo.

### Fichas de Elisabeth
- Cada semana activa (S1–S4) muestra un botón **"📄 Ficha de Elisabeth"** en la pestaña de registro semanal.
- Las fichas son páginas A4 imprimibles — usa Chrome o Safari, orientación **Vertical**, sin márgenes.
- Imprime solo las páginas que necesites (p. ej. páginas 1–2 para catecismo y lectura).

---

## Fichas imprimibles (para Elisabeth)

Cada ficha cubre 5 páginas A4:

| Página | Contenido |
|--------|-----------|
| 1 | Portada + Catecismo (preguntas nuevas + cadena de repaso) |
| 2 | Lectoescritura (letra de la semana, escritura, evaluación) |
| 3 | Matemáticas (contenido progresivo de Singapur/Mamut) |
| 4 | Historia Providencial (texto bíblico, reflexión, dibujo) |
| 5 | Ciencias / Diario de naturaleza + Mi dibujo de la semana |

### Configuración de impresión recomendada
- Tamaño: **A4**
- Orientación: **Vertical (Portrait)**
- Márgenes: **Ninguno** o **Mínimos**
- Escala: **100%** (no "ajustar a página")
- Imprime en blanco y negro o color — el diseño funciona en ambos.

---

## Calendario escolar 2026–2027

| Trimestre | Período | Semanas | Tema |
|-----------|---------|---------|------|
| T1 | Mayo–julio 2026 | S1–S10 | Mi historia · Creación · Patriarcas |
| T2 | Agosto–octubre 2026 | S11–S21 | Éxodo · Ley · Tierra prometida |
| T3 | Noviembre 2026–enero 2027 | S22–S32 | Reyes · Profetas · Exilio |
| T4 | Febrero 2027 | S33–S38 | Evangelios · Encarnación · Cierre |

Semanas especiales: S1 (Ascensión), S10 (repaso T1), S21 (repaso T2), S32 (repaso T3), S38 (cierre de año).

---

## Filosofía pedagógica

- **Teología del pacto** — toda la historia de la redención como hilo conductor.
- **Catecismo diario** — Catecismo Infantil Presbiteriano P1–P145 (una pregunta por día).
- **Competencias E/D/C** — Emergente / En Desarrollo / Consolidado (sin notas numéricas).
- **Medios, no frutos** — "Los medios son responsabilidad del padre. Los frutos son soberanía de Dios."
- **Sin dependencias externas** — HTML/CSS/JS puro. Sin frameworks, sin CDN, sin servidor.

---

## Tecnología

- HTML5 + CSS3 + JavaScript vanilla (ES6+)
- `localStorage` para persistencia (sin base de datos)
- Compatible con Chrome (Android/Desktop), Safari (iPhone/iPad), Firefox
- GitHub Pages compatible — no requiere build ni despliegue especial
