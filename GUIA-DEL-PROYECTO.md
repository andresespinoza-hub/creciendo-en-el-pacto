# Guía maestra del proyecto · Creciendo en el Pacto

> **Documento de referencia única.** Captura toda la arquitectura, convenciones, marco
> teológico-pedagógico y decisiones tomadas con la familia Espinoza. Sirve como fuente
> de verdad para construir cualquier semana futura (S3–S38) y para actualizar las skills
> del proyecto. Si hay conflicto entre este documento y la memoria previa, **gana este documento**.

---

## 1. Qué es y para quién

App web de educación cristiana reformada en casa para la familia Espinoza, Bogotá, 2026–2027.

- **Estudiante:** Elisabeth ("Eli"), 6 años, primer año formal. Lee con fluidez creciente, escribe oraciones propias. Por encima del diagnóstico estándar — requiere desafío.
- **Educadora:** la mamá. **No es recursiva ni experta en pedagogía.** Necesita que la app le diga *exactamente* qué hacer, qué decir, qué imprimir, qué leer. **No debe improvisar.**
- **Padre/autor del programa:** Rodrigo Andrés Espinoza — pastor IPR/OPC, marco reformado pactual. Autor del libro "Creciendo en el Pacto".

**Regla de oro del proyecto:** *Todo lo que la mamá necesita para enseñar está EN la app.* No la obligamos a abrir libros externos (Singapur, Mamut) para dar la clase. Esos quedan como referencia/respaldo, no como requisito.

---

## 2. Stack técnico

- HTML + CSS + JS **vanilla**. Sin frameworks, sin build, sin dependencias, sin CDN.
- GitHub Pages (auto-deploy en push a `main`). URL: `https://andresespinoza-hub.github.io/creciendo-en-el-pacto/`
- `localStorage` con prefijo `cp_` (logs, prog, port, rn, hoy_week, hoy_day).
- Respaldo vía Web Share API (móvil) / descarga JSON (desktop) — botón ☁️ Respaldo.

### Archivos
| Archivo | Rol |
|---|---|
| `index.html` | Estructura · sidebar · topbar |
| `css/app.css` | Estilos · clases `lesson`, `lsec`, `guia`, `lec-mama`, `eval-tabla`, `prompt-claude`, `minima`, `strip`, `act-block` |
| `js/catecismo.js` | CPN P1–P145 |
| `js/competencias.js` | Áreas E/D/C |
| `js/semanas.js` | **38 semanas · todo el contenido** (objeto `WEEKS` + `W1..W38` + `WSDATA`) |
| `js/app.js` | Vista Hoy · navegación · respaldo |

### Despliegue
```bash
cd /Users/EN-ITAdmin/EDU-ELI/creciendo-en-el-pacto
git add -A && git commit -m "..."
# push con token gh:
TOKEN=$(gh auth token)
git push "https://x-access-token:${TOKEN}@github.com/andresespinoza-hub/creciendo-en-el-pacto.git" main
```
GitHub Pages reconstruye en ~30–60 s.

---

## 3. Estructura de cada semana (objeto en `semanas.js`)

Cada semana `Wn` es un objeto con estas claves:
```
{ fm, martes, miercoles, jueves, viernes, sabado }
```
- `fm` = "Para mamá" (formación + plan de lectura + materiales + guías + plan personalizado).
- `martes`–`viernes` = días académicos completos (4–5 bloques `lesson` cada uno).
- `sabado` = día de cierre (8 bloques: apertura cantada, síntesis catecismo + portafolio, naturaleza, geografía, arte, apreciación visual, apreciación musical, diagnóstico mamá, recuperación).

`WSDATA = { 1:W1, 2:W2, ... }` mapea número → objeto. **Actualizar `WSDATA` al añadir semana.**

Cada día empieza con `${APERTURA}` (ritual de apertura pactual reusable).

---

## 4. Ritmo semanal: martes a sábado (5 días)

| Día | Carácter | Bloques típicos |
|---|---|---|
| Martes | Académico | Catecismo Día 1 · Lectoescritura · Historia · Matemáticas |
| Miércoles | Académico | Catecismo Día 2 · Lectoescritura · Historia · Matemáticas · Ciencias |
| Jueves | Académico | Catecismo Día 3 · Lectoescritura · Historia · Matemáticas · Música |
| Viernes | Académico (con avance, NO solo cierre) | Catecismo Día 4 (ángulo nuevo) · Lectoescritura (evaluación) · Historia · Matemáticas (abstracto) |
| Sábado | Cierre suave (~2 h) | Apertura cantada · Síntesis catecismo + ⭐ Portafolio · Naturaleza · Geografía · Arte · Apreciación visual · Apreciación musical · Diagnóstico mamá · Recuperación |

- Lunes = descanso (o festivo). La semana arranca martes.
- El sábado NO es escuela completa: tono de conversación y exploración.

---

## 5. Estructura de CADA bloque de materia (formato `lesson`)

Plantilla HTML obligatoria por bloque académico:

```html
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico [violeta|azul|dorado|rojo|verde]">EMOJI</div>
    <div>
      <div class="lesson-ttl">Materia · Título</div>
      <div class="lesson-meta">Tiempo · descriptor</div>
      <div class="mats"><span class="mat">material 1</span>...</div>
    </div>
  </div>
  <div class="lesson-body">
    <!-- 📖 Lectura para mamá (lec-mama): marco teológico/pedagógico, 3 min -->
    <!-- 🧑‍🏫 Guía de la lección (guia): pasos numerados con guia-say "Mamá dice" + guia-bible -->
    <!-- 📋 Evaluación E/D/C (eval-tabla): 3 filas E/D/C con señal + acción -->
    <!-- ✏️ Ficha para Eli + 🤖 Prompt IA (ficha-eli + prompt-claude) — cuando aplique -->
    <!-- ⚡ Versión mínima (minima): 4-5 pasos si el día está difícil -->
  </div>
</div>
```

### Las 5 secciones internas (`lsec`)
1. **📖 Lectura para mamá** (`lec-mama`): qué verdad gobierna · peligro a evitar · conexión pactual · oración. Citas a Van Til, Bavinck, Berkhof, Calvino, Charlotte Mason.
2. **🧑‍🏫 Guía de la lección** (`guia` con `guia-step`): pasos numerados con TIEMPO exacto, scripts literales en `guia-say` ("Mamá dice"), versículos en `guia-bible` con referencia, marcas `[E]/[D]/[C]` (`edc-mark`).
3. **📋 Evaluación E/D/C** (`eval-tabla`): filas clase `E`/`D`/`C`, columnas Señal + Acción concreta.
4. **✏️ Ficha + 🤖 Prompt IA** (`ficha-eli` + `prompt-claude`): descripción + prompt copiable (botón `copyPromptInline`).
5. **⚡ Versión mínima** (`minima`): lo no-negociable en 5-15 min.

`.mats` = chips de materiales exactos. Avisos críticos (frijoles remojados, etc.) van con `⚠️` en `lesson-meta` o `mats`.

---

## 5b. LIBRO AUTORITATIVO — "Educar delante de Dios" (Espinoza, 2026)

La fuente doctrinal definitiva del proyecto es **"Educar delante de Dios · Marco reformado-presbiteriano de educación pactual para el hogar y la iglesia"** (Rodrigo Andrés Espinoza González, Bogotá 2026). Reemplaza las versiones parciales previas. Está en `/Users/EN-ITAdmin/Downloads/Educar delante de Dios.docx`. **26 capítulos + 6 apéndices:**

- **Parte I (1-7):** Fundamentos pactuales — educación delante de Dios · gracia común y materiales no cristianos · el niño (imagen/caído/pacto) · creación-caída-redención-consumación · el hogar no educa solo · el hogar no es escuela · para qué educamos.
- **Parte II (8-11):** Crianza del corazón — el corazón del niño · autoridad delegada · **disciplina SIN moralismo** · padres que también necesitan el evangelio.
- **Parte III (12-17):** Las materias — lenguaje/lectura/escritura · matemáticas · ciencias · historia/geografía · **arte y música** · trabajo y habilidades.
- **Parte IV (18-23):** Vida del hogar — Biblia/catecismo/oración/himnos · padre · madre · **Día del Señor** · **evaluación y portafolio** · **tecnología/IA como sierva**.
- **Parte V (24-26):** Currículo e iglesia — cómo evaluar un currículo · **métodos (clásico, Mason, Singapur)** · cultura educativa reformada en la iglesia.
- **Apéndices:** A Declaración · B Evaluar currículo · C Reencuadrar lección no cristiana · D Rutina mínima · **E Catecismo/himnos/memoria por edades** · F Bibliografía.

### Afinaciones que el libro definitivo aporta (aplicar en S3+)
1. **Cap 16 (Arte):** la clave es "**aprender a ver**" — ojos que van del objeto al papel. Arte/música NO son "lo que sobra"; la jerarquía utilitaria que los elimina primero "no es cristiana". Bezalel (Éx 31), Salmo 19, Job 38. Confirma Monart. → El bloque de arte del sábado NO debe presentarse como relleno; es formación del alma.
2. **Cap 22 (Evaluación):** "El hogar no evalúa para clasificar. Evalúa para conocer. Y conoce para amar mejor." Prov 27:23 ("conoce el estado de tus ovejas"). Evaluar = mayordomía, NO medir el valor del hijo ni producir evidencia para otros. → El diagnóstico de mamá y el E/D/C deben enmarcarse así, sin ansiedad.
3. **Cap 23 (Tecnología/IA):** la IA "puede servir con potencia extraordinaria" PERO subordinada a Escritura/confesión/juicio de padres/iglesia/conocimiento del hijo. "Cuando dirige en lugar de servir, produce la forma más sofisticada de barniz cristiano que ha existido." → La guía "Cómo usar IA en clase" debe reforzar la subordinación: IA es herramienta operativa, no maestra ni autoridad espiritual.
4. **Cap 10 (Disciplina sin moralismo):** la ley revela pecado, instruye en justicia, guía gratitud — pero SIEMPRE conduce al niño a Cristo. No es modificación de conducta con versículos. → Las notas de crianza del corazón en `fm` siguen este patrón.
5. **Cap 21 (Día del Señor):** el domingo ordena la semana educativa; la semana culmina en adoración dominical, predicación, comunión. → Agregar conexión con la iglesia local (sermón/escuela dominical) en cada semana, como ya se identificó.
6. **Cap 25 (Métodos):** clásico, Mason, Singapur son herramientas, no autoridades ni identidad. Recibir lo útil sin que ninguno gobierne. → Justifica nuestra mezcla ecléctica (Mason narración + Singapur C-P-A + Monart arte) sin volverla ideología.

---

## 6. Marco teológico-pedagógico (NO negociable)

- **Reformado pactual.** Eli es hija del pacto: imagen de Dios, caída en Adán, bajo promesa/Palabra/bautismo. No salva la genealogía — se vive bajo los medios de gracia.
- **Van Til / Berkhof:** no hay hechos neutros. Cada materia se enseña *desde su lugar en el mundo de Dios*, no con barniz cristiano añadido.
- **Bavinck:** la familia como organismo, no escuela doméstica. El niño como persona entera. Inspiración orgánica de la Escritura.
- **Charlotte Mason:** narración como prueba de comprensión (no exámenes). Atención reverente. Diario de naturaleza. Picture study. Composición original.
- **Singapur (matemáticas):** Concreto → Pictórico → Abstracto (C-P-A). Regletas Cuisenaire. Si no entiende lo concreto, NO avanzar al libro/abstracto.
- **SIN MORALISMO.** El error a evitar siempre: convertir doctrina en amenaza conductual. "Dios te ve porque te cuida, no porque vigila." Conocer es cuidar, no espiar.
- **Cristológico.** Toda doctrina apunta a Cristo. "Para ver a Dios, mira a Jesús."

---

## 7. Catecismo: una pregunta por semana, 4 ángulos + síntesis

**Texto exacto del Catecismo para Niños (CPN) — no parafrasear.** P11–P15 ya verificados.

Estructura por semana:
- **Día 1 (martes):** apertura + ancla en memoria + 1er texto bíblico.
- **Día 2 (miércoles):** 2º ángulo + 2º texto.
- **Día 3 (jueves):** 3er ángulo (aplicación pactual/personal) + 3er texto.
- **Día 4 (viernes):** 4º ángulo NUEVO (respuesta del creyente) — NO es síntesis.
- **Sábado:** síntesis cumulativa + narración libre + ⭐ hoja de portafolio.

**Cadena cumulativa:** cada semana Eli recita las preguntas acumuladas (P11+P12+P13...).

### CPN P11–P29 (texto exacto, en orden)
| P | Pregunta | Respuesta |
|---|---|---|
| P11 | ¿Puedes ver a Dios? | Yo no puedo verlo, pero Él me mira continuamente. (Sal 119:168; 1 Ti 1:17) |
| P12 | ¿Sabe Dios todas las cosas? | Sí, ninguna cosa puede ocultarse de la vista de Dios. (Job 24:23; Mt 10:29,30) |
| P13 | ¿Puede Dios hacer todo? | Sí, Dios puede hacer todo conforme a su santa y soberana voluntad. (Dn 4:35; Mt 19:26) |
| P14 | ¿En dónde aprendes a obedecer y amar a Dios? | Solamente en la Biblia. (Mt 22:37-40; 2 Ti 3:16) |
| P15 | ¿Quién escribió la Biblia? | Unos santos varones que fueron inspirados por el Espíritu Santo. (Hch 28:25; 2 P 1:21) |
| P16 | ¿Quiénes fueron nuestros primeros padres? | Adán y Eva. |
| P17 | ¿De qué fueron formados? | Dios formó el cuerpo de Adán del polvo de la tierra, y a Eva del cuerpo de Adán. |
| P18 | ¿Qué les dio además de cuerpos? | Almas inmortales. |
| P19 | ¿Tienes tú un alma así como un cuerpo? | Sí, tengo un alma que jamás puede morir. |
| P20 | ¿Cómo sabes que tienes alma? | Porque puedo pensar en Dios y en el mundo venidero. |
| P21 | ¿En qué estado creó Dios a Adán y Eva? | Los creó santos y felices. |
| P22 | ¿Qué cosa es un pacto? | Es un contrato hecho entre dos o más personas. |
| P23 | ¿Qué pacto hizo Dios con Adán? | El pacto de obras. |
| P24 | ¿Qué obligaciones asumió Adán? | La obediencia perfecta a Dios. |
| P25 | ¿Qué prometió Dios en el pacto de obras? | Premiar con la vida a Adán si continuaba en obediencia. |
| P26 | ¿Qué amenaza hizo? | El castigo de muerte si faltaba a la obediencia. |
| P27 | ¿Guardó Adán el pacto? | No, porque pecó contra Dios. |
| P28 | ¿Qué es el pecado? | Falta de conformidad con la ley de Dios, o transgresión de ella. |
| P29 | ¿Qué quiere decir falta de conformidad? | No vivir ni obrar en conformidad con la voluntad de Dios. |

(P30–P145 disponibles en el insumo del usuario; usar texto exacto.)

---

## 8. Plan temático del año (historia bíblica como espina dorsal)

| Trimestre | Semanas | Tema |
|---|---|---|
| T1 | S1–S10 | Mi historia · Creación · Caída · Patriarcas (Abraham) |
| T2 | S11–S21 | Éxodo · Ley · Tierra prometida |
| T3 | S22–S32 | Reyes · Profetas · Exilio |
| T4 | S33–S38 | Evangelios · Encarnación · Cierre |

Semanas hechas: S1 (Mi historia), S2 (Creación/Gén 1), S3 (Imagen de Dios), S4 (Caída/Gén 3), S5 (Abraham/Gén 12).

---

## 9. Plan por materia (progresión)

### Lectoescritura
- **Lectura intencional por semana** (definida en `fm`): texto específico, no "busca algo".
- Método Mason: mamá lee, Eli narra (la narración = comprensión). Dictado expresivo. Composición original.
- **Regla gramatical del día** (una por semana): S2 punto final → S3 mayúscula inicial → S4 comas → etc.
- Cierre X/Y/Z (letras difíciles) en S1–S3, cambio de ruta de lectura en S4.
- Viernes = texto NUEVO de evaluación (no visto) para medir fluidez real.

### Matemáticas (TODO escrito en la app, sin abrir libros)
- C-P-A por etapas a lo largo de la semana: concreto (mar) → pictórico (mié) → verbal (jue) → abstracto (vie).
- **Banco de ejercicios con respuestas EN la app** (respuestas marcadas para mamá, no para Eli).
- Refuerzo "antes/después" (vecinos del número) — debilidad detectada en S1.
- Progresión: ordinales (S1) → 11-20 valor posicional (S2-S3) → suma 0-10 (S3-S4) → resta...
- Regletas Cuisenaire: naranja=10, blanca=1. **20 = 2 decenas, no 1 decena + 10.**
- Singapur/Mamut son referencia, no requisito de clase.

### Historia Providencial
- Textos bíblicos completos adaptados EN la app (no "lee Gén 1:1-5").
- Génesis por etapas: día 1-2 (mié), día 3-4 (jue), día 5-6 (vie), día 7 reposo (sáb).
- Timeline físico: una tarjeta por semana en la pared.
- Tarjetas Classical Conversations = apoyo de memoria, NO currículo rector. Máximo 5 al año.

### Ciencias / Naturaleza
- Charlotte Mason: diario de naturaleza (atención reverente, observar antes de explicar).
- Experimentos sencillos con materiales de casa (frijol bebé, etc.) + marco creación.
- Avisar materiales con anticipación (⚠️ remojar frijoles la noche anterior).

### Arte (INTENCIONAL, no "dibujar por dibujar")
- **Método Monart (Mona Brookes · Drawing With Children):** los 5 elementos del lenguaje visual — punto, línea recta, curva, ángulo, círculo.
- Progresión: aprender 5 elementos (S2) → dibujar de gráficos (S3+) → naturaleza muerta (S10+) → sombreado/proporciones (S20+).
- **Picture study (Mason):** una obra maestra por mes, conectada con el tema bíblico. Mirar en silencio → describir → conectar con la Biblia → identificar los 5 elementos.
  - Mes 1 Creación: Brueghel "Jardín del Edén" / Miguel Ángel "Creación de Adán"
  - Mes 2 Patriarcas: Rembrandt "Sacrificio de Isaac"
  - Mes 3 Éxodo: Botticelli "Pruebas de Moisés"

### Música (apreciación clásica conectada con la historia)
- Una obra por mes: Mes 1 Vivaldi "Primavera" (creación) · Mes 2 Haendel "Messiah" · Mes 3 Bach BWV 4 (Pascua) · Mes 4 Mendelssohn "Elías".
- Himno conocido + melodía propia para el versículo de la semana (memoria por canto).
- Geography Songs (exposición auditiva, una canción al mes).

### Bloques externos (no currículo de la app)
- Inglés: martes/jueves. Memoria Press (Phonics + literatura) desde S11.
- Piano: diario, cierre creativo.
- Latín (Prima Latina): desde S20.

---

## 10. Prompts para IA (formato obligatorio)

Header del bloque: `🤖 Prompt para IA generadora`. Estructura del prompt:

```
Necesito crear una [ficha/hoja] imprimible en español para mi hija Elisabeth ("Eli"), de 6 años...

TEMA: ...
PROPÓSITO: ...
MARCO DOCTRINAL: ... (reformado pactual, sin moralismo)
CONTENIDO BÍBLICO: ...
FORMATO: A4 vertical · 1:1.414 si imagen · márgenes amplios
ESTILO VISUAL:
- Fondo crema #FAF6F0
- Color tema: violeta #6B3FAA (catecismo) / azul #2A6090 (lectura) / rojo #B94020 (mate) / verde #4A7A5A (ciencias) / dorado #C49A2A (historia)
- No caricaturas exageradas · no neón · no estética infantil saturada
- No representar a Dios · no halos místicos
TIPOGRAFÍA: Georgia títulos · sans-serif texto · mín 16pt instrucciones, 22pt+ catecismo · líneas 12mm
CONTENIDO DE LA HOJA: ...

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.
```

**Para fábulas/narrativa:** dos imágenes separadas (IMAGEN 1 lectura tipo libro infantil con ilustraciones acuarela + moraleja; IMAGEN 2 trabajo: yo cuento / yo pienso / mi final diferente / palabras nuevas / para recordar).

**Agnóstico de IA:** nunca nombrar Claude/GPT/Nano Banana en el cuerpo del prompt. Funciona en cualquiera.

---

## 11. "Para mamá" (`fm`) — secciones obligatorias

1. **💛 Carta pastoral** — reconocimiento del trabajo previo + ánimo ("los frutos no dependen de ti").
2. **📖 Versículo de la semana** destacado en caja + plan de memorización día por día.
3. **🛒 Materiales de la semana** — lista anticipada (resuelve faltantes como el frijol).
4. **🎯 Plan personalizado para Eli** — tabla con E/D/C reales + acción por área (basado en el último registro).
5. **Marco teológico** de la pregunta del catecismo.
6. **Guías extendidas** cuando aplique (diario de naturaleza, integración Singapur+Mamut, Classical Conversations, cómo usar IA en clase).
7. **Oración antes de enseñar.**

---

## 12. Retroalimentación incorporada (historial de decisiones)

- **S1 feedback de mamá:** faltó frijol (no comprado) → ahora lista de materiales anticipada. Faltó arte/naturaleza (sin guía) → guías explícitas. No terminó genealogía → recuperación en S2. Quiere 5 días mar-sáb → implementado. Pidió plan personalizado para Eli → tabla en `fm`.
- **"Para mamá" necesita carne + ánimo** → carta pastoral + guías extendidas.
- **Versículo confuso** → caja destacada con plan de memorización.
- **Matemáticas no complicar** → todo escrito en la app, sin abrir Singapur/Mamut.
- **Lectura intencional** → plan de lectura por semana en `fm`.
- **Viernes con avance** (no solo cierre) → 4º ángulo nuevo del catecismo + materias completas. Síntesis se movió al sábado.
- **Arte intencional** → método Monart + apreciación de obra clásica + música clásica conectada con historia.
- **Respaldo de datos** → botón ☁️ con Web Share API.

---

## 13. Convenciones de estilo visual (CSS)

| Tema | Color | Uso |
|---|---|---|
| Catecismo | violeta `#6B3FAA` | `lesson-ico violeta` |
| Lectura | azul `#2A6090` | `lesson-ico azul` |
| Matemáticas | rojo `#B94020` | `lesson-ico rojo` |
| Ciencias | verde `#4A7A5A` | `lesson-ico verde` |
| Historia | dorado `#C49A2A` | `lesson-ico dorado` |
| Fondo | crema `#FAF6F0` | global |
| Regleta naranja | `#F39C2A` | mate Cuisenaire |

Clases clave: `lesson`, `lesson-hd/ico/ttl/meta`, `mats/mat`, `lesson-body`, `lsec/lsec-hd/lsec-ttl`, `lec-mama/lec-tag/lec-prayer`, `guia/guia-step/guia-step-n/guia-step-ttl/guia-say/guia-bible/edc-mark`, `eval-tabla` (tr `E`/`D`/`C`), `ficha-eli/prompt-claude/prompt-claude-body`, `minima`, `strip s-sage/s-rust/s-teal/s-gold`.

---

## 14. Pendiente

- Replicar la estructura completa de S2 a **S3, S4, S5** (actualmente solo tienen catecismo).
- Construir **S6–S38** con el mismo modelo.
- P16+ del catecismo (Adán y Eva en adelante).
- Considerar integrar Memoria Press (inglés) desde S11.

---

*Última actualización: tras completar Semana 2 con estructura de 5 días, arte Monart, apreciación visual/musical, y sistema de respaldo.*
