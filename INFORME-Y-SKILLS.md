# Informe del proyecto + Guía para crear las skills

> Para Andrés. Cubre: (1) todo lo que hemos trabajado, (2) cómo crear/actualizar las skills,
> (3) dónde vamos en el proyecto, (4) cómo el libro "Creciendo en el Pacto" mejora lo que tenemos.

---

# PARTE 1 · TODO LO QUE HEMOS TRABAJADO

## 1.1 La app
- **Nombre:** Creciendo en el Pacto
- **URL viva:** https://andresespinoza-hub.github.io/creciendo-en-el-pacto/
- **Repo:** github.com/andresespinoza-hub/creciendo-en-el-pacto
- **Tecnología:** HTML/CSS/JS puro · GitHub Pages · sin dependencias · auto-deploy en push
- **Datos:** localStorage (`cp_`) + botón ☁️ Respaldo (exportar/importar JSON a Drive/iCloud)

## 1.2 Recorrido cronológico (lo que hicimos sesión a sesión)
1. **Reorganización inicial** — de un HTML monolítico a proyecto multi-archivo limpio.
2. **Rediseño visual** — paleta cálida (terracota/dorado/violeta), vista "Hoy", responsive.
3. **Formato explícito de clase** — cada bloque con: Lectura para mamá · Guía con scripts "Mamá dice" · Evaluación E/D/C · Ficha + Prompt IA · Versión mínima.
4. **Catecismo reestructurado** — de "4 preguntas superficiales" a **1 pregunta profundizada en 4 ángulos + síntesis**. Texto exacto del CPN.
5. **Prompts IA mejorados** — formato estructurado, agnósticos de IA, cierre "No responder con explicación".
6. **Prompt de fábulas** — dos imágenes (lectura tipo libro + hoja de trabajo).
7. **Eliminación del bloque CMeW P1** — el año empieza directo en P11.
8. **Despliegue** a GitHub Pages.
9. **Sistema de respaldo** ☁️ — Web Share API + import/export.
10. **Personalización con feedback real de mamá** (tras su registro de S1).
11. **Semana 2 completa** — 5 días (martes-sábado), 26 bloques con todo el contenido EN la app.
12. **Arte intencional** — método Monart + apreciación de obra clásica + música clásica.
13. **GUIA-DEL-PROYECTO.md** — documento maestro de convenciones.

## 1.3 Estado del contenido
| Semana | Tema | Catecismo | Estado |
|---|---|---|---|
| S1 | Mi historia bajo Dios | P11 | Catecismo en 4 ángulos ✅ · resto en formato antiguo |
| **S2** | Creación / Génesis 1 | P12 | **COMPLETA — modelo de referencia** (5 días, 26 bloques) |
| S3 | Imagen de Dios | P13 | Solo catecismo · falta replicar S2 |
| S4 | La Caída / Génesis 3 | P14 | Solo catecismo · falta replicar |
| S5 | Abraham / Génesis 12 | P15 | Solo catecismo · falta replicar |
| S6–S38 | (planificadas) | P16+ | Por construir |

## 1.4 Decisiones que ya son ley del proyecto
1. **Todo el contenido EN la app** — mamá no abre Singapur/Mamut para enseñar.
2. **Una pregunta de catecismo por semana**, 4 ángulos + síntesis sábado.
3. **Texto exacto del CPN**, nunca paráfrasis.
4. **5 días martes-sábado.** Sábado = cierre + naturaleza + geografía + arte + música + diagnóstico.
5. **Sin moralismo** — "Dios te ve porque te cuida, no porque vigila".
6. **Plan de lectura intencional** por semana.
7. **Matemáticas con ejercicios escritos en la app** (con respuestas para mamá).
8. **Arte Monart** (5 elementos) + apreciación visual/musical conectada con la historia.
9. **Prompts IA agnósticos** con formato estructurado.
10. **"Para mamá" con carta pastoral + versículo + materiales + plan personalizado.**

---

# PARTE 2 · CÓMO CREAR / ACTUALIZAR LAS SKILLS (para que TÚ las hagas)

Las skills del proyecto están en la nube de Anthropic — no como archivos editables. Tú las creas/editas desde la interfaz de skills de Claude. Aquí está **qué debe contener cada una**, ya redactado para que copies y pegues.

## 2.1 Skill: `paideia-hogar` (arquitectura del hogar educativo)
**Propósito:** gobernar la estructura general de la educación en casa de la familia Espinoza.
**Contenido a poner:**
- La regla de oro: *todo lo que la mamá necesita para enseñar está EN la app; no improvisa, no abre libros externos para dar la clase.*
- Ritmo: 5 días martes-sábado. Lunes descanso. Sábado = cierre suave (~2h).
- El hogar no es escuela doméstica (Bavinck): mesa, conversación, obediencia, juego, descanso, culto familiar.
- Cada bloque = Lectura para mamá + Guía con scripts + E/D/C + Ficha/Prompt IA + Versión mínima.
- Marco: Van Til (no hechos neutros), Berkhof, Charlotte Mason (narración, atención reverente).
- Eli: 6 años, lectora fluida, sobre el diagnóstico, requiere desafío.

## 2.2 Skill: `catequesis-pactual` (enseñanza del catecismo)
**Contenido a poner:**
- Una pregunta del CPN por semana, profundizada en 4 ángulos (mar-vie) + síntesis (sáb).
- Día 1 ancla · Día 2 segundo texto · Día 3 aplicación pactual/personal · Día 4 ángulo NUEVO (respuesta del creyente) · Sábado síntesis cumulativa + portafolio.
- **Texto exacto del CPN** (tabla P11-P29 en GUIA-DEL-PROYECTO.md §7).
- SIN MORALISMO: conocer es cuidar. Cristológico: "para ver a Dios, mira a Jesús".
- Cadena cumulativa: recitar preguntas acumuladas cada semana.

## 2.3 Skill: `teologia-biblica-pactual`
**Contenido a poner:**
- Historia bíblica como espina dorsal del año (Creación → Caída → Patriarcas → Éxodo → Reyes → Profetas → Cristo).
- Génesis por etapas (día 1-2, 3-4, 5-6, reposo). Textos completos adaptados para 6 años.
- Marco redentivo-histórico, no moralista. Toda historia apunta a Cristo.

## 2.4 Skill: `estilo-espinoza` (voz y redacción)
**Contenido a poner:**
- Tono pastoral, doctrinalmente sobrio, cálido, sin sentimentalismo.
- Carta a mamá: reconocimiento + ánimo ("los frutos no dependen de ti").
- Scripts "Mamá dice" en lenguaje natural para niña de 6 años.
- Prompts IA: formato estructurado, agnóstico, cierre "No responder con explicación".

## 2.5 Skill: `discipulado-pactual-raah` / `raah-familias`
**Contenido a poner:**
- Eli hija del pacto: bajo promesa, Palabra, bautismo, disciplina, oración.
- La genealogía no salva — se vive bajo los medios de gracia.
- Conexión con la iglesia local (Raah): predicación, sacramentos, ancianos.

## 2.6 Pasos para crearlas/actualizarlas
1. Abre Claude → menú de Skills.
2. Para cada skill arriba: edita su descripción/instrucciones pegando el contenido indicado.
3. Añade al final de cada una: *"Sigue siempre GUIA-DEL-PROYECTO.md del repo creciendo-en-el-pacto."*
4. Guarda. Desde entonces, cuando invoques la skill, aplicará estas convenciones.

**Alternativa más simple:** usa `/remember` para grabar: *"El proyecto Creciendo en el Pacto sigue las convenciones de GUIA-DEL-PROYECTO.md: 5 días mar-sáb, una pregunta de catecismo en 4 ángulos, todo el contenido en la app, sin moralismo, arte Monart."*

---

# PARTE 3 · DÓNDE VAMOS EN EL PROYECTO

## 3.1 Hecho
- App funcional desplegada y respaldable.
- S2 completa como modelo replicable.
- Catecismo P11-P15 (texto exacto).
- Guía maestra de convenciones.

## 3.2 Inmediato (próximo paso)
- **Replicar S2 → S3, S4, S5** (hoy solo tienen catecismo; faltan las materias completas).

## 3.3 Mediano plazo
- Construir S6-S10 (resto del T1: patriarcas).
- Catecismo P16-P20.
- Integrar las obras de arte/música del mes 2 (Rembrandt, Haendel).

## 3.4 Largo plazo
- S11-S38 (T2-T4).
- Memoria Press inglés desde S11.
- Prima Latina desde S20.
- Catecismo hasta P145.

---

# PARTE 4 · CÓMO EL LIBRO "CRECIENDO EN EL PACTO" MEJORA LO QUE TENEMOS

Tu libro (Partes I-II fundamentos + Parte III las materias) es el **fundamento doctrinal** de la app. Aquí el mapeo capítulo→mejora:

## 4.1 Parte I — Fundamentos pactuales
| Capítulo del libro | Cómo mejora la app |
|---|---|
| **Cap 1 · La educación delante de Dios** | Confirma que NO hay materias neutrales. Refuerza el "cierre pactual" al final de CADA bloque (mate, arte, ciencias) — no solo en catecismo. **Mejora a aplicar:** revisar que cada materia tenga su conexión a Dios desde su naturaleza propia, no como barniz. |
| **Cap 2 · El niño que tienes delante** | Eli = imagen de Dios + caída + hija del pacto. **Mejora:** las evaluaciones E/D/C deben tratarla como persona entera, no como recipiente de datos. Ya lo hacemos; reforzar en `fm`. |
| **Cap 3 · El hogar no educa solo** | La iglesia (Raah) es parte del currículo. **Mejora a aplicar:** agregar en cada semana una conexión con la vida de la iglesia (sermón del domingo, escuela dominical) — actualmente ausente. |
| **Cap 4 · El hogar no es una escuela** | Valida el ritmo de "no escolarizar". **Mejora:** el sábado en familia, la mesa, el juego como paideia — ya está en el cierre del sábado. Reforzar que las "versiones mínimas" honran esto. |
| **Cap 6 · La crianza del corazón** | El protocolo de corrección orientado al corazón. **Mejora a aplicar:** agregar a `fm` una nota sobre cómo manejar la desobediencia/cansancio de Eli SIN moralismo, usando el evangelio (cuando surja). |
| **Cap 8 · Padres que necesitan el evangelio** | El padre/madre también necesita gracia. **Mejora:** la carta pastoral en `fm` ya encarna esto ("los frutos no dependen de ti"). Mantener en cada semana. |

## 4.2 Parte III — Las materias bajo el señorío de Cristo
| Capítulo | Cómo mejora la materia en la app |
|---|---|
| **Cap 9 · La Biblia y el catecismo** | El catecismo como "columna vertebral". La "apertura pactual diaria". **Ya implementado.** Confirma nuestro modelo de 4 ángulos. |
| **Cap 10 · El lenguaje** | Escuchar antes de hablar · leer como recepción de la realidad · escribir como responsabilidad de decir verdad (9º mandamiento). **Mejora:** la "regla del día" gramatical conecta con "decir verdad". Reforzar la corrección lingüística como práctica del 9º mandamiento. |
| **Cap 11 · Las matemáticas** | "Orden y cantidad en el mundo de Dios" · Prov 3:19-20. **Ya implementado** en los cierres pactuales de mate. Confirma el C-P-A de Singapur. |
| **Cap 12 · Las ciencias** | "Observar antes de explicar" · la creación como libro que dice algo. **Ya implementado** en el frijol bebé y el diario de naturaleza (Mason). |
| **Cap 13 · Historia y geografía** | "Memoria bajo providencia" · el eje redentivo-histórico · la geografía como mapa de la misión de Dios. **Ya implementado** en Génesis por etapas + geografía del sábado. |
| **Cap 14 · El arte y la música** | "Dios como primer artista" · el arte como ejercicio del imago Dei · **método Monart** mencionado en el libro · pedagogía de la observación. **Ya implementado** en el bloque de arte Monart + apreciación. ¡El libro mismo recomienda Monart! |

## 4.3 Mejoras concretas que el libro sugiere y AÚN NO tenemos
1. **Conexión con la iglesia local** en cada semana (Cap 3) — sermón dominical, escuela dominical de Eli. **Agregar a `fm`.**
2. **Nota de crianza del corazón** (Cap 6) — cómo responder a desobediencia/cansancio con evangelio. **Agregar a `fm`.**
3. **Escritura como 9º mandamiento** (Cap 10) — enmarcar la corrección lingüística como "decir verdad". **Agregar al bloque de lectoescritura.**
4. **El "currículo invisible"** (Cap 1) — coherencia entre lo que enseñamos y cómo vivimos (trabajo, dinero, descanso). **Nota ocasional en `fm`.**

> **Conclusión:** el libro NO contradice nada de lo que hemos construido — lo confirma y lo profundiza. La app es la *aplicación práctica* del libro. Las 4 mejoras de arriba son los únicos vacíos, y son fáciles de agregar al construir S3-S38.

---

*Documento generado tras completar Semana 2. Para detalle técnico ver GUIA-DEL-PROYECTO.md.*
