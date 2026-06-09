// ── DATOS DE LAS 38 SEMANAS ──
const WEEKS = [
  {n:1,  t:1, d:'19–23 mayo 2026 ★', type:'activa',  u:'U0',   tema:'Mi historia bajo la providencia de Dios',      focus:'Inicia martes 19 — festivo lunes. Cierre X+Y, ordinales→11-20, Jer 1:5, CatN P11'},
  {n:2,  t:1, d:'25–29 mayo 2026',   type:'activa',  u:'U1',   tema:'Creación — Dios hace todas las cosas',          focus:'Gén 1. Lectoescritura: letra Y en progreso. Números hasta 20 consolidando. CatN P15'},
  {n:3,  t:1, d:'1–5 jun 2026',      type:'activa',  u:'U1',   tema:'Creación — El hombre como imagen de Dios',      focus:'Gén 1–2. Letra Y (donde Eli va de verdad, según informe de mamá). Comprensión por escucha. Valor posicional 11–20'},
  {n:4,  t:1, d:'8–12 jun 2026',     type:'activa',  u:'U1-2', tema:'Caída y promesa — el pecado y la gracia',       focus:'Gén 3 + protoevangelio 3:15. Catecismo P14. Letra Z. Resta 0-10 (familias con suma). Ciencias: el agua. Modelo v3'},
  {n:5,  t:1, d:'15–19 jun ★',       type:'activa',  u:'U2',   tema:'Abraham — Dios llama y promete',                focus:'Gén 12. ★ 15 jun Corpus Christi. Nuevo recurso lectoescritura S4+'},
  {n:6,  t:1, d:'22–26 jun',         type:'activa',  u:'U2',   tema:'Abraham e Isaac — La promesa persevera',        focus:'Gén 15–22. El pacto abrahánico'},
  {n:7,  t:1, d:'29 jun–3 jul ★',    type:'activa',  u:'U2',   tema:'Jacob — Dios persiste en su plan',              focus:'Gén 25–33. ★ 29 jun San Pedro y San Pablo'},
  {n:8,  t:1, d:'6–10 jul',          type:'activa',  u:'U2',   tema:'José — La providencia oculta',                  focus:'Gén 37–50. José en Egipto'},
  {n:9,  t:1, d:'13–17 jul',         type:'activa',  u:'U2',   tema:'José — Perdón y providencia cumplida',          focus:'Gén 45–50'},
  {n:10, t:1, d:'20–24 jul ★',       type:'activa',  u:'U2',   tema:'Repaso patriarcas + Colombia bajo la providencia', focus:'★ 20 jul Independencia'},
  {n:11, t:1, d:'27–31 jul',         type:'repaso',  u:'—',    tema:'Repaso y evaluación T1',                        focus:'Portafolio T1. Presentación oral'},
  {n:12, t:1, d:'3–7 ago ★',         type:'repaso',  u:'—',    tema:'Repaso T1 (cierre)',                            focus:'★ 7 ago Batalla de Boyacá'},
  {n:13, t:2, d:'10–14 ago',         type:'activa',  u:'U3',   tema:'Moisés — Dios libra a su pueblo',               focus:'Éx 1–14'},
  {n:14, t:2, d:'17–21 ago ★',       type:'activa',  u:'U3',   tema:'El Éxodo — El mar Rojo',                        focus:'Éx 14–15. ★ 17 ago Asunción'},
  {n:15, t:2, d:'24–28 ago',         type:'activa',  u:'U3',   tema:'Sinaí — La Ley y el pacto',                     focus:'Éx 19–20'},
  {n:16, t:2, d:'31 ago–4 sep',      type:'activa',  u:'U3',   tema:'El tabernáculo — Dios habita con su pueblo',    focus:'Éx 25–40'},
  {n:17, t:2, d:'7–11 sep',          type:'activa',  u:'U3',   tema:'Josué — La tierra prometida',                   focus:'Jos 1–6'},
  {n:18, t:2, d:'14–18 sep',         type:'activa',  u:'U3',   tema:'Josué — Fidelidad e infidelidad',               focus:'Jos 24'},
  {n:19, t:2, d:'21–25 sep',         type:'activa',  u:'U3',   tema:'Rut — Fidelidad en tiempos difíciles',          focus:'Rut 1–4'},
  {n:20, t:2, d:'28 sep–2 oct',      type:'activa',  u:'U3',   tema:'Samuel — El pueblo pide rey',                   focus:'1 Sam 1–8'},
  {n:21, t:2, d:'5–9 oct',           type:'activa',  u:'U3',   tema:'Repaso T2',                                     focus:'Repaso acumulativo'},
  {n:22, t:2, d:'12–16 oct ★',       type:'colchon', u:'—',    tema:'Colchón T2',                                    focus:'★ 12 oct'},
  {n:23, t:2, d:'19–23 oct',         type:'repaso',  u:'—',    tema:'Consolidación T2',                              focus:'Repaso libre'},
  {n:24, t:2, d:'26–30 oct',         type:'repaso',  u:'—',    tema:'Consolidación T2 (cierre)',                     focus:'Portafolio T2'},
  {n:25, t:3, d:'2–6 nov ★',         type:'activa',  u:'U4',   tema:'David — El rey según el corazón de Dios',       focus:'★ 2 nov. 1 Sam 16–17; 2 Sam 7'},
  {n:26, t:3, d:'9–13 nov',          type:'activa',  u:'U4',   tema:'Salomón — La sabiduría y sus límites',          focus:'1 Rey 1–11'},
  {n:27, t:3, d:'16–20 nov ★',       type:'activa',  u:'U4',   tema:'Los profetas — Dios llama a su pueblo',         focus:'★ 16 nov Cartagena'},
  {n:28, t:3, d:'23–27 nov',         type:'activa',  u:'U4',   tema:'El exilio y el retorno',                        focus:'2 Rey 25; Esd 1'},
  {n:29, t:3, d:'30 nov–4 dic',      type:'activa',  u:'U4',   tema:'Profetas y Adviento I',                         focus:'Is 7:14; 9:6; 53'},
  {n:30, t:3, d:'7–11 dic ★',        type:'activa',  u:'U4',   tema:'Profetas y Adviento II',                        focus:'Miq 5; Mal 3–4. ★ 8 dic'},
  {n:31, t:3, d:'14–18 dic',         type:'activa',  u:'U4',   tema:'Adviento III — La espera se cumple',            focus:'Luc 1–2'},
  {n:32, t:3, d:'21–25 dic ★',       type:'navidad', u:'—',    tema:'Navidad — Pausa litúrgicamente formativa',      focus:'★ 25 dic'},
  {n:33, t:3, d:'28 dic–1 ene ★',    type:'navidad', u:'—',    tema:'Navidad / Año Nuevo',                           focus:'★ 1 ene'},
  {n:34, t:3, d:'4–8 ene',           type:'repaso',  u:'—',    tema:'Repaso T3 — Reentrada suave',                   focus:''},
  {n:35, t:3, d:'11–15 ene',         type:'repaso',  u:'—',    tema:'Repaso T3 (cierre)',                            focus:'Portafolio T3'},
  {n:36, t:3, d:'18–22 ene',         type:'colchon', u:'—',    tema:'Colchón / proyectos de integración',            focus:''},
  {n:37, t:4, d:'25–29 ene',         type:'cierre',  u:'U5-6', tema:'Cristo y Colombia — Integración anual',         focus:'U5 Cristo · U6 Colombia e iglesia Raah'},
  {n:38, t:4, d:'1–5 feb',           type:'eval',    u:'—',    tema:'Evaluación final, portafolio y celebración',    focus:''}
];

// ── APERTURA PACTUAL (reutilizable en todos los días) ──
const APERTURA = `<div class="aper">
<div class="aper-lbl">Apertura pactual — 15 min · todos los días</div>
<div class="aper-row"><div class="aper-n">1</div><div class="aper-t"><strong>Oración breve</strong> — mamá ora en voz alta, 3–4 frases</div></div>
<div class="aper-row"><div class="aper-n">2</div><div class="aper-t"><strong>Versículo de la semana</strong> — leer juntas, repetir con palmadas</div></div>
<div class="aper-row"><div class="aper-n">3</div><div class="aper-t"><strong>Catecismo</strong> — ver pestaña Catecismo para el desarrollo completo</div></div>
<div class="aper-row"><div class="aper-n">4</div><div class="aper-t"><strong>Himno de la iglesia</strong> — una estrofa que Elisabeth ya sepa</div></div>
</div>`;

// ── SEMANA 1 ──
const W1 = {
fm:`<div class="fm-section">
<div class="fm-title">Formación para mamá — Semana 1</div>
<div class="fm-sub">Lectura para antes de enseñar. Sábado o domingo, con calma, sin materiales a la mano.</div>
<div class="fm-block"><h4>Qué verdad bíblica gobierna esta semana</h4>
<p>Esta semana no comienza con "primer grado". Comienza con una confesión: <strong>Dios conoce a Elisabeth antes de que ella pueda producir algo</strong>. Jeremías 1:5 no es un versículo de motivación personal. Es la descripción de un Dios que gobierna la vida humana desde antes del nacimiento. Dios no reaccionó ante el nacimiento de Jeremías. Lo anticipó. Lo ordenó. Lo llamó. Eso mismo vale para Elisabeth.</p>
<p>Van Til nos ayuda a ver que esto no es solo religión añadida a la educación — es el fundamento de toda educación verdadera. Si el mundo pertenece a Dios, si los hechos no son autónomos, si Elisabeth no se pertenece a sí misma, entonces aprender a leer, contar, dibujar y observar son actos que ocurren <em>delante de Dios</em>. No hay letras neutrales. No hay números sin dueño. No hay cuerpos sin Creador.</p>
<p>El propósito pactual de la semana es este: Elisabeth comienza el año sabiendo que su historia no empezó con ella. La X que cierra, las frases que ya escribe, los ordinales que maneja, el frijol que abre, el dibujo que hace: todo ocurre en el mundo de Dios, bajo su mirada, como respuesta a lo que Él hizo primero.</p></div>
<div class="fm-block"><h4>Cómo enseñamos esto delante de Dios</h4>
<p>El peligro de la Semana 1 es convertirla en una semana emotiva sobre identidad. Elisabeth no necesita una experiencia intensa sobre "quién soy". Necesita una verdad clara sobre <strong>quién es Dios y cómo eso define quién es ella</strong>. La diferencia es importante: una arranca desde los afectos del niño, la otra arranca desde la Palabra.</p>
<p>Bavinck nos recuerda que la familia no es una máquina educativa. La Semana 1 no debe sentirse como un primer día de colegio trasladado a la casa. Debe sentirse como un hogar ordenando su vida delante de Dios: oración, Palabra, conversación, trabajo paciente, observación, canto, descanso. Nada espectacular. Todo real.</p>
<p>Por eso el árbol genealógico no es actividad emocional sino historia bajo providencia. Los ordinales no son ejercicio abstracto sino orden en el mundo de Dios. El frijol abierto no es experimento decorativo sino observación reverente de vida creada. La copia no es caligrafía vacía sino formación de atención y verdad.</p></div>
<div class="fm-block"><h4>Advertencias concretas para esta semana</h4>
<p><strong>Primera:</strong> Elisabeth ya lee frases y escribe con fluidez razonable. Esto significa que el nivel de los materiales debe subir. No hay que hacerla sentir que vuelve a lo que ya sabe. La X, Y y Z se cierran con <em>textos más complejos, narración, escritura independiente y comprensión</em>, no con repaso mecánico de sílabas.</p>
<p><strong>Segunda:</strong> No convertir el catecismo en examen de memoria. La pregunta 11 del Catecismo para Niños es una brújula, no un trámite. Si Elisabeth la dice de corrido sin entender nada, hemos fallado. Si la dice con pausas pero conecta "ver a Dios" con algo concreto de su vida, hemos avanzado.</p>
<p><strong>Tercera:</strong> La semana empieza el martes. No hay que recuperar el lunes ni añadir más actividades para compensar. Cuatro días bien hechos valen más que cinco días apresurados.</p>
<p><strong>Cuarta:</strong> El portafolio de esta semana tiene <em>una sola evidencia obligatoria</em>: la hoja "Mi historia bajo la providencia de Dios". Todo lo demás es opcional. No se documenta todo. Se guarda lo que muestra formación.</p></div>
<div class="fm-oracion"><div class="fo-lbl">Oración antes de enseñar</div>
<p>Señor, enséñame a mirar a mi hija como tú la miras: conocida por ti antes de nacer, puesta en esta familia por tu providencia, necesitada de tu gracia. Líbrame de la ansiedad por resultados. Ayúdame a enseñar con paciencia, claridad y amor sobrio. Que esta semana Elisabeth aprenda que su vida te pertenece, y que yo aprenda que los frutos son tuyos. Amén.</p>
</div></div>`,

martes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P11 · Día 1 — Apertura y ancla ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P11 · Día 1 — Apertura y ancla</div>
      <div class="lesson-meta">15–20 min · ¿Puedes ver a Dios? · Dios es Espíritu (Jn 4:24)</div>
      <div class="mats">
        <span class="mat">Biblia (NBLA)</span>
        <span class="mat">Catecismo CPN</span>
      </div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min · antes de enseñar</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> esta pregunta enseña dos cosas que deben mantenerse juntas: la <strong>espiritualidad de Dios</strong> (no tiene cuerpo, no cae bajo los sentidos) y la <strong>omnisciencia pactual</strong> (Él te ve siempre a ti). El peligro más común al enseñar esto a niños es cargar el acento en la segunda parte como amenaza: "Dios te ve cuando te portas mal." Eso no es el evangelio — es ley sin indicativo. El consuelo correcto es pactual: el Dios que no puede verse es el mismo que me conoce por nombre, que me sostiene, que nunca me deja fuera de su vista. <strong>No es una cámara de vigilancia. Es un Padre.</strong></p>
        <p><span class="lec-tag">Peligro a evitar:</span> no uses esta clase para producir conducta a través del miedo ("acuérdate que Dios te ve"). Eso es moralismo funcional. Si Eli necesita corrección, viene por otros medios — no por convertir la omnisciencia de Dios en herramienta disciplinaria.</p>
        <p><span class="lec-tag">Conexión cristológica:</span> nadie ha visto a Dios jamás — pero Jesús lo reveló (Jn 1:18). Jesús es la imagen visible del Dios invisible (Col 1:15). Si Eli pregunta "¿entonces cómo es Dios?", la respuesta honesta y rica es: <em>"Mira a Jesús."</em></p>
        <p><span class="lec-tag">Lo que estás formando:</span> asombro ante un Dios mayor que los sentidos, y consuelo real: soy conocida y amada por Alguien que me ve siempre, incluso cuando tengo miedo, incluso cuando estoy sola.</p>
        <div class="lec-bible">"Dios es Espíritu" — Juan 4:24 &nbsp;·&nbsp; "Oh Señor, tú me has examinado y conocido" — Salmo 139:1</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que esta verdad no produzca miedo en Eli sino descanso. Que aprenda que ser vista por ti es la cosa más segura que existe. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">15–20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · La pregunta concreta <span class="edc-mark E">E</span></div>
            <p>Siéntate con Eli y pregúntale: <em>"¿Puedes ver el viento?"</em> Espera respuesta.</p>
            <div class="guia-say">"No, ¿verdad? Pero sabes que está ahí porque mueve las hojas, porque lo sientes en la cara. El viento existe aunque no lo puedas ver. Hoy vamos a aprender algo parecido sobre Dios, pero mucho más importante."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Catecismo · La ancla <span class="edc-mark E">E</span></div>
            <p>Di la P y R juntas <strong>tres veces</strong>, despacio:</p>
            <div class="guia-say">P: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.</div>
            <p>Segunda vez: Eli repite solo la R. Tercera vez: Eli dice todo sola.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura · Qué dice la Biblia <span class="edc-mark E">E</span></div>
            <p>Abre y lee <strong>Juan 4:24</strong> (NBLA):</p>
            <div class="guia-bible"><span class="guia-bible-ref">Juan 4:24</span>"Dios es Espíritu, y los que le adoran, deben adorarle en espíritu y en verdad."</div>
            <div class="guia-say">"Dios es Espíritu. Eso significa que no tiene cuerpo como tú y como yo. No tiene manos de carne, no tiene cara que yo pueda fotografiar. Por eso no puedo verlo con mis ojos. Pero eso no significa que no sea real — al contrario, es más real que todo lo que vemos."</div>
            <p>Luego lee <strong>Salmo 139:1-3</strong> (simplifícalo así):</p>
            <div class="guia-bible"><span class="guia-bible-ref">Salmo 139:1-3</span>"Oh Señor, tú me conoces. Sabes cuándo me siento y cuándo me paro. Sabes lo que voy a decir antes de que yo lo diga."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Qué nos enseña esto <span class="edc-mark E">E</span></div>
            <div class="guia-say">"La Biblia nos enseña dos cosas hoy: <br>Primero: Dios no tiene cuerpo. Es Espíritu. Mis ojos solo ven cosas del mundo. Dios es mayor que el mundo. <br>Segundo: aunque yo no pueda ver a Dios, Él sí me ve a mí. Me ve siempre. No hay momento en que Dios no sepa dónde estoy."</div>
            <p>Aquí viene la parte más importante — <strong>no la des vuelta hacia amenaza</strong>. Pregunta a Eli:</p>
            <div class="guia-say">"¿Eso te da miedo o te da tranquilidad?"</div>
            <p>Espera. Escucha. Luego:</p>
            <div class="guia-say">"A mí me da tranquilidad. Significa que nunca estoy sola. Aunque esté a oscuras, aunque mamá no esté, Dios me ve. Eso es seguridad."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión con Jesús <span class="edc-mark D">D</span></div>
            <p>Pregunta: <em>"¿Cómo podemos saber cómo es Dios si no lo podemos ver?"</em> Espera respuesta.</p>
            <div class="guia-say">"La Biblia dice que Jesús es la imagen de Dios invisible. Eso significa que cuando leemos cómo Jesús cargó a los niños, cómo sanó a los enfermos, cómo murió por nosotros — estamos viendo cómo es Dios por dentro. Jesús nos mostró al Padre."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación pactual <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Porque Dios te ve siempre, tú puedes hablarle en cualquier momento. En el cuarto, en el auto, cuando tengas miedo, cuando estés contenta. Él ya te está viendo. La oración es responderle a alguien que ya está mirándote."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">7</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración <span class="edc-mark E">E</span></div>
            <p>Ora tú primero. Breve, concreta:</p>
            <div class="guia-say">"Señor, gracias porque Eli no puede verte, pero tú sí la ves. Gracias porque ser vista por ti es lo más seguro. Ayúdala a descansar en eso. En el nombre de Jesús. Amén."</div>
            <p>Luego invita a Eli a orar con una frase, si quiere.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">8</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Revisión final <span class="edc-mark E">E</span></div>
            <p>Termina con la P y R una vez más, juntas.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E · Emergente</td><td>No recuerda la R; confunde "Dios me ve" con amenaza</td><td>Repite P/R 3 veces más. Énfasis: <em>"Eso nos da tranquilidad."</em> No avances.</td></tr>
        <tr class="D"><td class="lvl">D · Con apoyo</td><td>Recuerda la R pero no explica por qué es bueno que Dios la vea</td><td>Pregunta: <em>"¿Es bueno o malo que Dios te vea?"</em> Acompáñala a articular.</td></tr>
        <tr class="C"><td class="lvl">C · Fluida</td><td>Recita sola y dice con sus palabras que ser vista por Dios es seguridad</td><td>Registra en portafolio. Lista para P12 el miércoles.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Imprimible · A4 vertical · letra grande</strong></p>
        <ul>
          <li>Encabezado con la P y R en letra grande (28pt)</li>
          <li>4 líneas guía para que Eli copie la respuesta</li>
          <li>Recuadro 10×10 cm para dibujar "un lugar donde tú estás — y sabes que Dios te ve allí"</li>
          <li>Pregunta abierta con 3 líneas: <em>"¿Por qué es bueno que Dios te vea siempre?"</em></li>
          <li>Salmo 139:1 en cinta dorada al pie</li>
        </ul>
        <p style="font-size:.8rem;color:var(--muted);font-style:italic;margin-top:8px">Guarda el dibujo en el portafolio con la fecha — vale la pena compararlo en un año.</p>

        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha CPN P11</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado y pactual.

CONTEXTO:
- Eli ya lee frases con fluidez y escribe oraciones propias
- Estamos en Semana 1, Martes, Catecismo CPN P11
- La pregunta y respuesta del catecismo:
  P: ¿Puedes ver a Dios?
  R: Yo no puedo verlo, pero Él me mira continuamente.

CONTENIDO DE LA HOJA (A4 vertical, una sola página):
1. Encabezado con la P y R en letra grande
2. Etiqueta "✏️ Copia la respuesta aquí:" + 4 líneas guía para escritura infantil (alto 12 mm entre línea base y media)
3. Recuadro de dibujo de 10×10 cm con instrucción: "Dibuja un lugar donde tú estás — y donde sabes que Dios te ve allí"
4. Pregunta abierta con 3 líneas guía: "¿Por qué es bueno que Dios te vea siempre?"
5. Cinta inferior dorada con el versículo: "Oh Señor, tú me has examinado y conocido. — Salmo 139:1"

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0)
- Color acento del tema: violeta (#6B3FAA) para catecismo
- Bordes y detalles: dorado suave (#C49A2A)
- Tipografía: Georgia o serif clásico para títulos; sans-serif legible (Verdana o similar) para instrucciones de niño
- Tamaño de letra mínimo 16pt para instrucciones; 24pt+ para la pregunta del catecismo
- Espacio amplio, no saturar la hoja
- Estilo digno y reverente, contemplativo
- Borde decorativo suave (esquinas o cintas), no excesivo
- No usar caricaturas exageradas
- No usar colores neón
- No usar estética infantil saturada
- No usar imágenes que pretendan representar a Dios
- No usar halos, rayos místicos ni ojos flotantes

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con todos los espacios en blanco visibles para que Eli escriba y dibuje.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir, manteniendo márgenes amplios y líneas de escritura claras.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span><span class="lsec-sub">si el día está difícil</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repetir la P y R tres veces juntas</li>
          <li>Una frase: <em>"Dios te ve y eso es lo más seguro que existe"</em></li>
          <li>Oración breve</li>
          <li>Listo. (El dibujo y la explicación son [D]. La copia es opcional si hay cansancio.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA X ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · X cierra con dignidad</div>
      <div class="lesson-meta">40 min · Lectura + escritura propia + narración</div>
      <div class="mats">
        <span class="mat">Mamá enséñame a leer (sección X)</span>
        <span class="mat">Aprendamos todos a leer</span>
        <span class="mat">Cuaderno</span>
        <span class="mat">Lápiz</span>
      </div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min · antes de enseñar</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Diagnóstico real:</span> Eli ya lee frases y escribe con fluidez razonable. La X <strong>no se trabaja como repaso de sílabas</strong>. Se cierra con dignidad para dar paso a la Y (S2) y la Z (S3). El objetivo no es consolidar — es <em>cerrar bien</em>.</p>
        <p><span class="lec-tag">Marco pedagógico:</span> Charlotte Mason enseña que la <strong>narración</strong>, no el examen, es la forma más fiel de saber si un niño está aprendiendo. Cuando Eli te cuenta con sus palabras lo que leyó, está formando intelecto, voluntad y afecto a la vez. Ese trabajo es más valioso que cualquier ejercicio de completar espacios.</p>
        <p><span class="lec-tag">Conexión teológica:</span> la palabra escrita no es habilidad neutral. Bavinck insiste en que la escritura humana imita la economía divina: Dios habla y crea (Gn 1), Dios escribe y ordena la vida (Éx 31:18). Cuando Eli escribe sus propias frases, hace algo profundamente humano: pone orden donde antes había desorden, usando el regalo del lenguaje que solo Dios da. <strong>No hay letras neutrales.</strong></p>
        <p><span class="lec-tag">Peligro a evitar:</span> no convertir esta sesión en evaluación ansiosa. Mamá <strong>observa</strong>, no corrige durante el proceso. Una sola corrección al final, máximo dos. La fluidez se forma con paciencia, no con interrupción.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> lectura comprensiva, escritura propia con voz, atención al texto como dádiva.</p>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que las letras sean para Eli un regalo que reciba con gratitud, no una tarea que aguanta. Que las palabras que lea y escriba hoy la formen para escuchar tu Palabra. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">40 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura expresiva del texto X <span class="edc-mark E">E</span> · 12 min</div>
            <p>Abre "Mamá enséñame a leer" o "Aprendamos todos a leer" en la sección de la X.</p>
            <div class="guia-say">"Hoy vas a leerme tú el texto de la X. Yo te escucho. No te interrumpo. Si te trabas, respira y vuelve."</div>
            <p>Eli lee en voz alta. Mamá observa en silencio: ¿lee de corrido o silabea? ¿comprende lo que lee o solo recita?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Comprensión activa <span class="edc-mark D">D</span> · 5 min</div>
            <p>Haz <strong>2 preguntas</strong> que requieran pensar, no solo recordar:</p>
            <div class="guia-say">"¿Por qué crees que Ximena hizo eso?"<br>"¿Qué significa que algo esté 'en extinción'?"</div>
            <p>Eli responde con frases completas. Si solo da una palabra, devuelve la pregunta: <em>"¿Me lo dices con una oración completa?"</em></p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura independiente <span class="edc-mark C">C</span> · 15 min</div>
            <p><strong>Sin dictado. Sin copia.</strong> Eli toma su cuaderno y mamá da UNA sola instrucción:</p>
            <div class="guia-say">"Escribe en el cuaderno 3 cosas que sabes sobre la letra X:<br>1. Una palabra que la tenga<br>2. Cómo suena<br>3. Una frase propia tuya con esa palabra."</div>
            <p>Eli escribe sola. Mamá observa postura, presión del lápiz, fluidez. <strong>NO interrumpe.</strong> Al terminar, señala UNA sola cosa a mejorar (mayúscula, espacio, punto), no más.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración oral <span class="edc-mark E">E</span> · 8 min</div>
            <div class="guia-say">"Ahora cuéntame con tus palabras lo que leíste hoy. Sin mirar el libro."</div>
            <p>Eli narra. Mamá no ayuda, no completa frases. Al terminar:</p>
            <div class="guia-say">"¿Qué palabra con X te pareció más interesante? ¿Por qué?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Las palabras son regalos de Dios. Cuando lees y escribes, estás usando algo que solo Él te pudo dar. Eso es ser hecha a su imagen."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Silabea al leer; comprende poco; escritura solo copia patrones</td><td>Releer juntas el texto. Mamá narra primero, luego Eli intenta.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Lee con comprensión básica; escritura propia con apoyo</td><td>Modelar UNA frase, luego que Eli intente la suya. No corregir gramática menor.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Lee con entonación, comprende, escribe frases propias con fluidez</td><td>Registrar narración (audio o foto del cuaderno) como evidencia. Adelante.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Imprimible · A4 vertical · letra grande</strong></p>
        <ul>
          <li>Texto corto rico en palabras con X (8–10 líneas: <em>Ximena, examen, taxi, saxofón, extinción, exótico</em>)</li>
          <li>3 preguntas de comprensión abiertas</li>
          <li>Sección "Yo escribo" — espacio libre con prompt: "3 cosas que sé sobre la X"</li>
          <li>Caja "Mi narración del texto" — 4 líneas guía</li>
        </ul>

        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Lectoescritura X</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de lectoescritura en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado y pactual.

CONTEXTO:
- Eli ya lee frases con fluidez y escribe oraciones propias
- Estamos cerrando la letra X (último día) antes de pasar a la Y la próxima semana
- Necesita lectura con comprensión, escritura propia y narración — no repaso de sílabas
- Nivel de desafío elevado para su edad

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado: "La letra X — palabras especiales" + ilustración pequeña
2. Texto corto (8 a 10 líneas) sobre un personaje llamado Ximena, rico en palabras con X. Vocabulario sugerido: Ximena, examen, taxi, saxofón, extinción, exótico, xilófono, México. El texto debe tener trama (no lista de palabras), ser apropiado para 6 años, con valores sanos (curiosidad, familia, asombro por la creación). Letra grande (mínimo 18pt) para que Eli lo lea sola.
3. Bloque "Preguntas — responde con oraciones completas" con 3 preguntas que requieran inferencia, no solo memoria. Ejemplos: "¿Por qué crees que Ximena hizo eso?" / "¿Qué significa que algo esté en extinción?" / "¿Qué palabra del texto te parece más interesante y por qué?" Cada pregunta con 3 líneas guía.
4. Sección "Yo escribo" con prompt: "Escribe 3 cosas que sabes sobre la letra X: una palabra, cómo suena, una frase propia." Espacio amplio con líneas guía.
5. Sección "Mi narración del texto" con 4 líneas guía para que Eli escriba lo que recuerda.

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0)
- Color acento del tema: azul lectura (#2A6090) en encabezados y bordes
- Tipografía: Georgia para títulos, Verdana o Lexend para texto infantil (16-20pt)
- Líneas guía: altura mínima 10mm para la escritura de un niño de 6 años
- Espacio amplio; cada bloque visualmente separado por un recuadro o cinta de color
- Si incluyes ilustración, que sea sencilla y respetuosa, no caricaturesca
- Sin emojis excesivos — uno o dos discretos como acentos

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con espacios en blanco visibles para escritura y dibujo.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span><span class="lsec-sub">si el día está difícil</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli lee el texto X una vez en voz alta</li>
          <li>Mamá pregunta: <em>"¿De qué se trató?"</em></li>
          <li>Eli escribe UNA frase propia con una palabra que tenga X</li>
          <li>Listo. (Las 3 cosas son [D]. La narración formal es [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: HISTORIA PROVIDENCIAL ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">📜</div>
    <div>
      <div class="lesson-ttl">Historia Providencial · Mi historia comienza antes de mí</div>
      <div class="lesson-meta">30 min · ⭐ Evidencia obligatoria del portafolio</div>
      <div class="mats">
        <span class="mat">Biblia</span>
        <span class="mat">Hoja grande</span>
        <span class="mat">Colores</span>
        <span class="mat">Tarjetas CC (apoyo)</span>
      </div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min · antes de enseñar</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> este no es un día de "manualidad sobre mi familia". Es la <strong>primera clase del año de Historia Providencial</strong>, y la pregunta central es: <em>¿quién gobierna la historia?</em> La respuesta reformada es clara: Dios, desde antes del fundamento del mundo (Ef 1:4), sostiene la historia humana entera y la de cada hijo del pacto.</p>
        <p><span class="lec-tag">Marco vantiliano:</span> no existen "hechos brutos" sin interpretación divina. La historia de Eli no es un dato neutral al que añadimos religión. Es, ya en sí misma, providencia desplegada. Su nacimiento no fue accidente biológico ni decisión humana primaria: fue <strong>acto de Dios</strong>.</p>
        <p><span class="lec-tag">Jeremías 1:5:</span> no es versículo de motivación personal. Es descripción de un Dios que <strong>ordena la vida humana desde antes del nacimiento</strong>. Si vale para Jeremías, vale para Eli: Dios la conocía antes de que sus padres se conocieran.</p>
        <p><span class="lec-tag">Conexión pactual:</span> el bautismo es la señal visible de esto. Eli no fue bautizada porque "creyó primero" — fue bautizada porque <strong>pertenece al pacto</strong>, porque Dios la marcó como suya antes de que pudiera responder. Eso es gracia preveniente. Eso es Reformado.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que esta clase se vuelva sentimental ("mi familia es bonita"). El peligro es centrar en los afectos del niño en lugar de en el gobierno de Dios. Una arranca desde Eli, la otra arranca desde Dios.</p>
        <p><span class="lec-tag">Sobre las tarjetas de Classical Conversations:</span> son apoyo de memoria, no currículo. Hoy NO las uses — la primera clase debe construirse desde la Biblia y el bautismo de Eli, no desde una secuencia ajena.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> conciencia de providencia, gratitud por pertenecer al pacto antes de entender nada, identidad anclada en Dios y no en sentimientos.</p>
        <div class="lec-bible">Génesis 1:1 — "En el principio creó Dios los cielos y la tierra." &nbsp;·&nbsp; Jeremías 1:5a — "Antes que te formase en el vientre te conocí."</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que Eli salga de esta clase no pensando "qué especial soy" sino "qué grande es Dios que me conocía". Que esta verdad la sostenga toda la semana. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">30 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pregunta de inicio <span class="edc-mark E">E</span> · 5 min</div>
            <div class="guia-say">"Eli, ¿desde cuándo crees que Dios sabe tu nombre?"</div>
            <p>Espera. Escucha sin corregir. Toma nota mental — la respuesta dirá mucho sobre dónde está Eli. No la apresures.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración pactual <span class="edc-mark E">E</span> · 5 min</div>
            <p>Narra con tus propias palabras (no leas, narra mirando a Eli):</p>
            <div class="guia-say">"Antes de que tú nacieras, antes de que papá y yo nos casáramos, antes de que existiera nuestra iglesia, Dios ya te conocía. Él hizo todo lo que existe — incluyéndote a ti. Te puso en esta familia, en esta ciudad, bajo su gobierno. <strong>Eso no es accidente. Es providencia.</strong>"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura bíblica <span class="edc-mark E">E</span> · 5 min</div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Génesis 1:1</span>"En el principio creó Dios los cielos y la tierra."</div>
            <div class="guia-say">"Y eso te incluye a ti, Eli."</div>
            <p>Luego:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Jeremías 1:5a</span>"Antes que te formase en el vientre te conocí."</div>
            <p>Pregunta:</p>
            <div class="guia-say">"¿A quién le está hablando Dios aquí?"</div>
            <p>(Respuesta esperada: a Jeremías.) Luego:</p>
            <div class="guia-say">"Y lo que vale para Jeremías, ¿vale también para ti?"</div>
            <p>(Sí. Porque Dios es el mismo Dios.)</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Mapa de lugar <span class="edc-mark D">D</span> · 8 min</div>
            <p>En una hoja grande, dibujen juntas círculos concéntricos:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Centro: <strong>Casa</strong> (Eli escribe su nombre)</li>
              <li>Siguiente: <strong>Nuestra iglesia</strong> (Raah, Bogotá)</li>
              <li>Siguiente: <strong>Bogotá</strong></li>
              <li>Siguiente: <strong>Colombia</strong></li>
              <li>Borde: <strong>El mundo de Dios</strong></li>
            </ul>
            <div class="guia-say">"Este es el lugar exacto donde Dios te puso. Otros niños nacieron en otros lugares — pero a ti te puso aquí, en esta familia, en esta iglesia. Eso es providencia."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura/dibujo propio <span class="edc-mark C">C</span> · 5 min · ⭐ Evidencia obligatoria</div>
            <p>Eli toma su propia hoja en blanco. Mamá da una sola instrucción:</p>
            <div class="guia-say">"Dibuja y escribe: 'Mi historia bajo la providencia de Dios'. Pon a tu familia, nuestra iglesia, tu ciudad."</div>
            <p><strong>Para nivel C:</strong> Eli escribe además una frase propia explicando qué significa que Dios la conocía antes de nacer.</p>
            <p>Mamá NO corrige durante el proceso. Observa.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión pactual al cerrar <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Cuando fuiste bautizada, eso fue una señal visible de que perteneces al pueblo de Dios. Él te conocía antes de que tú entendieras nada. Eso es gracia."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Responde "desde que nací" o "desde el cielo". Dibujo sin contexto pactual</td><td>Releer Jer 1:5 y narrar de nuevo, con énfasis: "antes" significa antes.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende que Dios la conocía antes pero no articula por qué importa</td><td>Pregunta: "Si Dios te conocía antes, ¿qué dice eso de su poder?"</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula con sus palabras "Dios me puso aquí, esto no es accidente" + escribe frase propia</td><td>Guardar hoja en portafolio con fecha. Evidencia obligatoria cumplida.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "Mi historia bajo la providencia de Dios" · A4 vertical</strong></p>
        <ul>
          <li>Encabezado con Jer 1:5 destacado</li>
          <li>Círculos concéntricos predibujados — casa → iglesia → Bogotá → Colombia → mundo</li>
          <li>Espacio para árbol genealógico simple (mamá, papá, Eli, abuelos)</li>
          <li>Pregunta final con 4 líneas: <em>"¿Qué significa que Dios te conocía antes de nacer?"</em></li>
        </ul>

        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Historia Providencial</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de Historia Providencial en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado y pactual.

CONTEXTO:
- Primera clase del año de Historia Providencial
- Tema: "Mi historia comienza antes de mí" — providencia de Dios
- Versículo: Jeremías 1:5a ("Antes que te formase en el vientre te conocí")
- Eli fue bautizada como hija del pacto
- Familia: Eli (6), papá Andrés, mamá [nombre], en Bogotá, Colombia, miembros de la Iglesia Raah

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Título: "Mi historia bajo la providencia de Dios"
2. Cinta con el versículo: "Antes que te formase en el vientre te conocí — Jeremías 1:5"
3. Círculos concéntricos PREDIBUJADOS (5 anillos) para que Eli escriba/dibuje dentro:
   - Centro (más pequeño): "Mi casa" — espacio para escribir su nombre
   - Anillo 2: "Mi iglesia (Raah)"
   - Anillo 3: "Bogotá"
   - Anillo 4: "Colombia"
   - Anillo exterior: "El mundo de Dios"
4. Recuadro lateral o inferior: "Mi familia" — árbol genealógico simple (4-6 espacios con líneas: abuelos paternos, abuelos maternos, papá, mamá, Eli)
5. Pregunta final con 4 líneas: "¿Qué significa que Dios te conocía antes de nacer?"
6. Cinta pie con: "Eli, hija del pacto. Bautizada en [fecha si la pongo]. Conocida por Dios desde antes."

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0)
- Color acento del tema: dorado tierra (#C49A2A) — historia/providencia
- Bordes decorativos suaves (no caricaturescos)
- Tipografía: Georgia para títulos, sans-serif legible para texto
- Letra mínimo 16pt para instrucciones, 22pt+ para títulos
- Círculos concéntricos en colores cálidos suaves (terracota, dorado, sage)
- Estilo digno y reverente — esta es una hoja "histórica" que se guardará en el portafolio

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con espacios en blanco visibles para escribir y dibujar.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span><span class="lsec-sub">si el día está difícil</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Narrar: "Dios te conocía antes de nacer"</li>
          <li>Leer Jer 1:5 con voz pausada</li>
          <li>Eli hace UN dibujo simple (casa con flecha al cielo) — guardar como evidencia mínima</li>
          <li>Listo. (El mapa completo y la frase escrita son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: MATEMÁTICAS ORDINALES ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · Ordinales — cerrar pp. 77–78 con razonamiento</div>
      <div class="lesson-meta">30 min · ¡Activa tu mente! antes de avanzar a 11–20</div>
      <div class="mats">
        <span class="mat">Pensar sin Límites 1A pp. 77-78</span>
        <span class="mat">10 objetos del hogar</span>
        <span class="mat">Regletas Cuisenaire</span>
        <span class="mat">Ábaco</span>
      </div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min · antes de enseñar</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> los números no son convencionalismos humanos. Son revelación. <strong>Dios ordenó el mundo, y el orden es contable.</strong> Génesis 1 mismo cuenta los días — el primero, el segundo, el tercero. Eso ya es matemática. Cuando Eli aprende los ordinales, está aprendiendo a leer el orden divino del mundo.</p>
        <p><span class="lec-tag">Marco pedagógico (Charlotte Mason + Singapur):</span> el número se enseña con objetos físicos primero, con razonamiento después, y solo al final con símbolos abstractos. Singapur sigue exactamente esta secuencia: <strong>concreto → pictórico → abstracto</strong> (C-P-A). Hoy estás en concreto + pictórico. El símbolo viene después.</p>
        <p><span class="lec-tag">Punto exacto de Eli:</span> ordinales sólidos por diagnóstico. Esta semana cerramos pp. 77-78 con razonamiento lógico (¡Activa tu mente!) — no para repasar, sino para verificar que la comprensión está antes de avanzar a 11-20 el miércoles. Si Eli las hace rápido, el desafío es que las <strong>explique en voz alta</strong>. "Por qué" importa más que "cuál".</p>
        <p><span class="lec-tag">Peligro a evitar:</span> hacer las páginas mecánicamente sin verbalización. Si Eli da la respuesta correcta sin explicar, no está consolidado — está adivinando bien. La explicación es la prueba real.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> razonamiento lógico, comprensión de orden y posición, fundamento para la suma (jueves) y el valor posicional (miércoles).</p>
        <div class="lec-bible">"Tú lo has dispuesto todo por medida, número y peso" — Sabiduría 11:20 (texto usado por Agustín y los Reformadores como marco de la cosmología pactual)</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque tu mundo es ordenado. Que Eli vea en cada número un eco de tu ordenamiento. Que las matemáticas sean adoración, no carga. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">30 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Calentamiento con objetos <span class="edc-mark E">E</span> · 5 min</div>
            <p>Pon 5 objetos en fila (lápiz, borrador, regla, libro, taza). De izquierda a derecha.</p>
            <div class="guia-say">"Señala el 3°. Ahora desde la derecha — ¿cuál es el 3°? ¿Es el mismo objeto?"</div>
            <p>Eli responde con la mano y con palabras. Objetivo: que vea que la posición depende de desde dónde se cuenta.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Problema lógico p. 77 <span class="edc-mark D">D</span> · 10 min</div>
            <p>Abre el libro en p. 77 y lee el problema. Si no lo tiene, usa este:</p>
            <div class="guia-bible"><span class="guia-bible-ref">¡Activa tu mente!</span>"Gato Gastón es el último. Ratón Ramón no es el 2°. Hay 3 animales en fila. ¿Quién ocupa el lugar del medio?"</div>
            <div class="guia-say">"Antes de escribir, organízalo con objetos. Toma 3 cosas y ponlas en fila como si fueran los animales."</div>
            <p>Eli organiza físicamente. Razona en voz alta. Luego escribe la respuesta en el libro.</p>
            <p><strong>Si se atora:</strong> mamá pregunta con preguntas, no con respuestas:</p>
            <div class="guia-say">"¿Quién es el último?" · "¿Quién NO es el 2°?" · "¿Entonces quién queda en el medio?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Desafío p. 78 <span class="edc-mark C">C</span> · 8 min</div>
            <div class="guia-bible"><span class="guia-bible-ref">Desafío</span>"Tomás es 4.° desde la derecha y 2.° desde la izquierda. ¿Cuántos niños hay en la banca?"</div>
            <p>Eli dibuja diagrama con puntos: ⚪ ⚪ ⚪ ⚪ ⚪. Cuenta 4 desde derecha y 2 desde izquierda. Verifica con objetos si lo necesita. Encuentra que Tomás es el mismo punto. <strong>Respuesta: 5.</strong></p>
            <p>CLAVE — esto es lo que mide [C]:</p>
            <div class="guia-say">"¿Cómo lo supiste? Explícame con tus palabras."</div>
            <p>No aceptes "porque sí" ni "porque conté". La explicación debe articular: "Tomás está contado dos veces porque…"</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Generalización <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"Si alguien es 3.° desde la izquierda y la fila tiene 7 personas, ¿qué posición tiene desde la derecha?"</div>
            <p>Eli razona con objetos (7 cosas en fila, marca la 3ª desde izquierda, cuenta desde la derecha). Respuesta: 5°.</p>
            <p>Si lo logra con objetos: <em>"Ahora sin objetos, solo pensando."</em></p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Los números no son inventos de los hombres. Dios ordenó su mundo y nosotros lo descubrimos. El 1°, el 2°, el 3° — eso ya es ver el orden de Dios. Por eso las matemáticas son una forma de adoración."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Confunde ordinal con cardinal. No puede resolver con objetos</td><td>Volver a pp. 75-76 y reforzar con objetos físicos. NO avances hoy.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Resuelve con objetos pero no puede explicar el por qué</td><td>Pedir verbalización paso a paso. Modelar la explicación primero, luego que Eli la repita con sus palabras.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Resuelve, explica con razonamiento, generaliza con números mayores</td><td>Registrar como evidencia. Adelante con 11-20 el miércoles.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Imprimible · A4 vertical · objetos en fila para señalar y razonar</strong></p>
        <ul>
          <li>3 problemas de ordinales con dibujos coloridos (animales o niños en fila)</li>
          <li>Un "desafío Tomás" variante (otros nombres y contexto)</li>
          <li>Espacio para que Eli dibuje su propio problema de ordinales</li>
          <li>Caja "Yo explico" — 3 líneas para que escriba CÓMO lo resolvió</li>
        </ul>

        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Matemáticas Ordinales</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de matemáticas en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado y metodología Singapur.

CONTEXTO:
- Eli tiene ordinales sólidos (primero, segundo, tercero... hasta décimo)
- Hoy es el último día de ordinales antes de pasar a números 11-20 mañana
- Metodología Singapur: concreto → pictórico → abstracto
- Énfasis en RAZONAMIENTO, no en velocidad. Eli debe explicar el "por qué", no solo dar respuestas

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado: "Ordinales — orden y posición" + ilustración pequeña

2. Problema 1 (apoyo concreto): Una fila de 6 niños dibujados, cada uno con un sombrero de color distinto. Pregunta: "Señala el 3° desde la izquierda. ¿De qué color es su sombrero? Ahora cuenta desde la derecha — ¿qué posición tiene el mismo niño?" Espacio para responder con 2 líneas.

3. Problema 2 (lógico tipo p.77): "Pez Pepe es el último. Tortuga Tita no es la 2ª. Hay 3 animales en fila en el acuario. ¿Quién está en el medio?" Ilustración simple del acuario con 3 espacios numerados. Espacio para que Eli ordene escribiendo nombres en cada espacio.

4. Problema 3 (desafío estilo p.78): "Lucía es 3ª desde la derecha y 2ª desde la izquierda. ¿Cuántas niñas hay en la fila?" Espacio cuadriculado para que Eli dibuje puntos y cuente.

5. Sección "Yo invento un problema" — espacio libre con líneas para que Eli escriba su propio problema de ordinales.

6. Caja final: "Yo explico" — 3 líneas para que Eli escriba CÓMO resolvió el desafío 3.

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0)
- Color acento del tema: rojo cálido (#B94020) — matemáticas
- Tipografía: Georgia para títulos, sans-serif clara y grande para texto (mín. 18pt para instrucciones de niño)
- Cada problema en su propia caja con borde redondeado
- Ilustraciones SIMPLES, line-art o flat color suave, no caricatura saturada
- Líneas guía de escritura de 12mm de altura
- Numerar problemas con círculos grandes de color

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con espacios en blanco visibles para escritura y dibujo.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span><span class="lsec-sub">si el día está difícil</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli señala el 3° de 5 objetos en fila — desde izquierda y desde derecha</li>
          <li>Mamá lee el problema de p. 77, Eli lo resuelve CON OBJETOS</li>
          <li>Mamá pregunta: "¿Cómo lo supiste?" — escucha la explicación</li>
          <li>Listo. (P. 78 y generalización son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>`,

miercoles:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P11 · Día 2 — "Dios me ve" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P11 · Día 2 — "Dios me ve"</div>
      <div class="lesson-meta">10–12 min · Profundización con Salmo 139</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> ayer Eli aprendió la primera mitad de la respuesta — "no puedo ver a Dios" (Dios es Espíritu, Juan 4:24). Hoy nos enfocamos en la <strong>segunda mitad</strong>: "pero Él me mira continuamente". Este es el corazón del consuelo pactual: la asimetría entre lo que yo puedo ver y lo que Dios ve.</p>
        <p><span class="lec-tag">El Salmo 139 como texto ancla:</span> el salmista no dice "Dios me ve y por eso tengo cuidado". Dice "Dios me ve y por eso le pido que me examine MÁS". El versículo 23 cierra: <em>"Examíname, oh Dios, y conoce mi corazón."</em> El conocido pide ser conocido más. Eso es consuelo, no vigilancia.</p>
        <p><span class="lec-tag">Bullinger lo enseña así:</span> Dios no nos ve como espectador que descubre. Nos ve porque nos creó. Su mirada no depende de observar — depende de su acto creador. Eli no es vigilada por Dios. Es <strong>conocida desde antes</strong> por el Dios que la formó.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que "Dios me ve" se convierta en "Dios te ve cuando te portas mal". Eso es moralismo funcional. La verdad pactual es otra: Dios te ve porque te ama, porque te conoce, porque te creó. Su mirada es la del Padre, no la del policía.</p>
        <p><span class="lec-tag">Conexión con Martes:</span> ayer la pregunta era "¿se puede ver a Dios?" — hoy es "¿qué pasa cuando Dios me ve?". Misma respuesta del catecismo, ángulo distinto.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> consuelo, no vigilancia. Hábito de pensar "Dios me ve" como abrazo, no como amenaza.</p>
        <div class="lec-bible">Salmo 139:1-4 — "Oh Señor, tú me has examinado y conocido. Tú sabes mi sentarme y mi levantarme; entiendes desde lejos mi pensamiento... pues aún no está la palabra en mi boca y ya, oh Señor, tú la sabes toda." &nbsp;·&nbsp; Salmo 139:23 — "Examíname, oh Dios, y conoce mi corazón."</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que Eli aprenda hoy que tu mirada sobre ella es cuidado, no espionaje. Que descanse en saber que la ves siempre. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">10–12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de ayer <span class="edc-mark E">E</span> · 2 min</div>
            <p>Antes de empezar, repite con Eli la P y R completa que aprendió ayer:</p>
            <div class="guia-say">P: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.</div>
            <p>Pregunta de enganche:</p>
            <div class="guia-say">"Ayer aprendimos que tus ojos no pueden ver a Dios. ¿Pero qué dice el otro lado de la respuesta? 'Pero Él me mira continuamente'. Hoy vamos a entrar en esa parte."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">El Salmo 139 <span class="edc-mark E">E</span> · 4 min</div>
            <p>Abre la Biblia en Salmos 139. Lee despacio versículos 1-4:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Salmo 139:1-4</span>"Oh Señor, tú me has examinado y conocido. Tú sabes mi sentarme y mi levantarme; entiendes desde lejos mi pensamiento... pues aún no está la palabra en mi boca y ya, oh Señor, tú la sabes toda."</div>
            <div class="guia-say">"¿Te das cuenta? Dios sabe cuándo te sientas. Sabe cuándo te paras. Sabe lo que vas a decir antes de que abras la boca. Sabe lo que piensas incluso cuando estás lejos. <strong>Eso es ver de verdad.</strong>"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Ver es cuidar <span class="edc-mark D">D</span> · 3 min</div>
            <p>Aquí está el corazón de la clase de hoy. <strong>No la apresures.</strong></p>
            <div class="guia-say">"Cuando una mamá ve a su bebé, no lo vigila — lo cuida. Sabe cuándo tiene hambre, cuándo tiene frío, cuándo está triste. Eso no es porque lo esté espiando. Es porque lo ama. Pues Dios te ve así, pero perfectamente."</div>
            <p>Pregunta clave (pausa entre cada una):</p>
            <div class="guia-say">"¿Sentirías miedo si yo supiera que tienes hambre antes de que me lo digas?... No, ¿verdad?... Es BUENO que mamá sepa. Así te puedo cuidar."</div>
            <div class="guia-say">"Dios te ve así. No para sorprenderte cuando haces algo malo. Te ve porque te ama y te quiere cuidar."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · La oración como respuesta <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Mira esto: porque Dios ya te ve, cuando oras no le estás contando algo nuevo. Le estás respondiendo a Alguien que ya te está mirando. Es como cuando vienes a mí llorando — yo ya vi que te caíste; tu llanto es tu respuesta. La oración es tu respuesta a Dios que ya está mirándote."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Recitar P y R completa <span class="edc-mark C">C</span> · 1 min</div>
            <p>Eli dice la P y R sola, sin ayuda. Si lo logra: gran felicitación.</p>
            <div class="guia-say">P: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración <span class="edc-mark E">E</span> · 1 min</div>
            <p>Ora breve:</p>
            <div class="guia-say">"Señor, gracias porque tú me ves. Gracias porque eso es cuidado, no vigilancia. Ayuda a Eli a descansar en que tú la miras siempre. Amén."</div>
            <p>Invítala a orar con una frase si quiere.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Olvidó la P y R de ayer. Confunde "Dios me ve" con vigilancia o amenaza</td><td>Repetir P y R 3 veces. Énfasis ÚNICO: <em>"Ver es cuidar."</em> Sin presión.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la P y R pero no articula que "ver" es bueno</td><td>Pregunta: <em>"¿Es bueno o malo que Dios te vea siempre?"</em> Acompáñala a articular.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita sola y dice con sus palabras que ser vista por Dios es consuelo, no vigilancia</td><td>Registrar. Lista para el ángulo cristológico mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional · la grande va el viernes</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)"><strong>Nota:</strong> la ficha grande de portafolio se hace el viernes (síntesis de toda la semana). Hoy puede ser una hoja simple complementaria.</p>
        <p>Sugerencia rápida sin Claude: que Eli dibuje en su cuaderno "los ojos de Dios mirándome" y escriba debajo: <em>"Dios me ve y eso es cuidado."</em></p>
        <p style="margin-top:8px">Si quieres material extra:</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja "Dios me ve"</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado.

CONTEXTO:
- Estamos profundizando el Catecismo CPN P11: "¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente."
- HOY (Día 2 de la semana) el ángulo es: "Dios me ve" — la omnisciencia como cuidado, no vigilancia
- Texto ancla: Salmo 139:1-4
- Eli ya sabe la P y R desde el martes

CONTENIDO DE LA HOJA (A4 vertical, una página, breve):
1. Encabezado: "Dios me ve siempre"
2. Cinta superior con la R del catecismo (sin la P, para reforzar la respuesta): "No puedo ver a Dios, pero Él me mira continuamente."
3. Sección central "Lo que dice la Biblia" — texto adaptado del Salmo 139:1-4 en una caja decorativa con la referencia
4. Recuadro 12×8 cm: "Dibuja un momento de tu día en el que sientes que Dios te ve"
5. Pregunta abierta con 4 líneas: "¿Qué cambia cuando recuerdo que Dios siempre me ve?"
6. Cinta inferior dorada con: "Examíname, oh Dios, y conoce mi corazón. — Salmo 139:23"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Color del tema: violeta (#6B3FAA) con cintas doradas (#C49A2A)
- Tipografía: Georgia para títulos, sans-serif clara para texto
- Letra mín. 16pt; 22pt para la cinta del catecismo
- Estilo: digno, reverente, sin caricaturas. Decoración: pequeñas estrellas o rayos sutiles sugiriendo "mirada"

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escribir y dibujar.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso de P y R (la misma que ayer)</li>
          <li>Leer Salmo 139:1-3</li>
          <li>Una frase: <em>"Dios te ve y eso es cuidado, no vigilancia."</em></li>
          <li>Listo. (Aplicación a la oración es [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA · DICTADO + FÁBULA ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · Dictado expresivo + Lectura viva</div>
      <div class="lesson-meta">40 min · Fábula de Esopo + escritura propia</div>
      <div class="mats"><span class="mat">Cuaderno</span><span class="mat">Lápiz</span><span class="mat">Fábulas de Esopo (libro o impreso)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> el <strong>dictado expresivo</strong> no es el dictado escolar tradicional (palabras sueltas para "evaluar ortografía"). Es Eli oyendo lenguaje real, con pausas naturales, y escribiéndolo. Charlotte Mason lo llamaba "transcripción del oído al papel". Lo que se forma no es la ortografía mecánica — es la <strong>atención sostenida y la conexión sonido-grafía-sentido</strong>.</p>
        <p><span class="lec-tag">Marco pedagógico:</span> Mason también enseña que la <strong>narración</strong> después de escuchar es la prueba más fiel de comprensión. Por eso hoy mamá lee la fábula y Eli la narra — sin libro. Si Eli puede contar lo que escuchó con sus palabras, entendió. Si no puede, no entendió. No hay otra prueba.</p>
        <p><span class="lec-tag">Conexión teológica:</span> los Reformadores formaron pueblos lectores porque <em>Sola Scriptura</em> exige saber leer. Calvino fundó escuelas para que los niños pudieran abrir la Biblia ellos mismos. Cada hora que Eli pasa leyendo es una hora que la prepara para abrir la Palabra de Dios sola, sin intermediarios.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> corregir cada error en tiempo real durante el dictado. Eso quiebra el flujo. Mamá observa, escribe ella misma en su hoja, y compara DESPUÉS. Una sola corrección por sesión.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> atención auditiva, conexión sonido-letra, comprensión profunda por narración, gusto por las palabras como dádiva.</p>
        <div class="lec-bible">"La fe viene del oír, y el oír, por la Palabra de Cristo" — Romanos 10:17</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que estas frases que Eli escriba y esta fábula que escuche sean un entrenamiento de su oído para tu Palabra. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">40 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Preparación <span class="edc-mark E">E</span> · 2 min</div>
            <p>Cuaderno abierto, lápiz afilado, ambiente sin distractores. Mamá tiene su propia hoja para escribir junto con Eli.</p>
            <div class="guia-say">"Hoy vamos a escribir frases que yo te voy a leer. Yo también las voy a escribir conmigo. Al final comparamos. No es para corregirte — es para que veas."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dictado de 4 frases <span class="edc-mark D">D</span> · 15 min</div>
            <p>Lee cada frase <strong>dos veces</strong>: primero completa para que Eli la oiga entera, luego con pausas naturales para que escriba.</p>
            <div class="guia-bible"><span class="guia-bible-ref">Frases del dictado · nivel elevado</span>1. "Ximena tiene un saxofón."<br>2. "México está lejos de Colombia."<br>3. "El examen fue difícil para todos."<br>4. "El taxi pasó rápido por la calle."</div>
            <p>Mamá NO corrige durante el proceso. Solo lee. Eli escribe sola.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Comparación sin reproche <span class="edc-mark D">D</span> · 5 min</div>
            <p>Mamá pone su hoja al lado de la de Eli. Sin reproche, sin "está mal":</p>
            <div class="guia-say">"Compara las dos. ¿Qué viste? ¿Qué notaste?"</div>
            <p>Eli señala diferencias. Mamá no las marca, deja que Eli las vea. Al final, mamá elige <strong>UN SOLO</strong> aspecto a mejorar (mayúscula al inicio, punto final, o un acento) y lo nombra:</p>
            <div class="guia-say">"Yo veo que en mi hoja escribí 'Ximena' con mayúscula porque es nombre propio. ¿Quieres marcarlo en la tuya?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura viva · Fábula de Esopo <span class="edc-mark E">E</span> · 8 min</div>
            <p>Elige una fábula corta (La liebre y la tortuga, El león y el ratón, El pastor mentiroso). Eli <strong>no mira el libro</strong>. Mamá lee en voz alta, despacio, con voces si quiere.</p>
            <div class="guia-say">"Hoy yo te voy a leer una fábula. Tú escucha bien con los oídos — no necesitas mirar. Cuando termine, tú me la vas a contar a mí."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración por Eli <span class="edc-mark C">C</span> · 7 min</div>
            <div class="guia-say">"Ahora cuéntame tú la fábula. Como si yo no la conociera."</div>
            <p>Eli narra sin ayuda. Mamá NO completa frases, NO sugiere palabras. Si Eli se atora, espera. La narración mide comprensión más que cualquier examen.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pregunta de inferencia <span class="edc-mark C">C</span> · 3 min</div>
            <div class="guia-say">"¿Por qué crees que el personaje hizo eso? ¿Qué habría pasado si hubiera elegido diferente?"</div>
            <p>No hay respuesta "correcta" — hay razonamiento o no lo hay. Si Eli razona, está en [C]. Si solo repite la historia, está en [D].</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Pide repetir cada palabra del dictado. No puede narrar la fábula sin pistas</td><td>Dictar 2 frases en vez de 4. Releer la fábula. No avances en velocidad.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Dictado con 1-2 errores menores. Narra la fábula con apoyo de mamá</td><td>Normal. Marca una sola corrección. Felicita la narración.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Dictado limpio. Narra la fábula completa y responde la inferencia con razonamiento</td><td>Guarda narración como evidencia (audio o transcripción). Adelante.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "Yo escucho, yo escribo, yo cuento"</strong></p>
        <ul>
          <li>4 líneas guía amplias para las frases del dictado</li>
          <li>Texto de fábula corta de Esopo impreso (para repaso después de narrar)</li>
          <li>3 preguntas de comprensión con líneas guía</li>
          <li>Caja "Yo invento un final diferente" — espacio creativo</li>
        </ul>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Fábula en 2 imágenes</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear imágenes educativas en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado. Eli lee con fluidez, escribe oraciones propias y trabajamos con un enfoque tipo Charlotte Mason: lectura atenta, narración, dictado expresivo, comprensión e inferencia.

Quiero una hoja de trabajo visual, amable, clara y hermosa para una niña de 6 años. Debe ser A4 vertical, lista para imprimir, con diseño infantil sobrio: colores vivos pero armónicos, ilustraciones tipo acuarela infantil, buen espacio en blanco, márgenes amplios y texto muy legible.

REGLAS GENERALES:
- Usar español natural para niña de 6 años.
- No saturar la página.
- Mantener letras grandes y claras.
- Para texto de lectura usar fuente tipo Georgia o serif infantil clara, mínimo 18 pt.
- Para instrucciones usar fuente sans serif clara, mínimo 16 pt.
- Las líneas de escritura deben ser amplias, con altura aproximada de 12 mm.
- Usar ilustraciones que apoyen la comprensión narrativa, no solo decoración.
- Evitar estética escolar fría o recargada.
- Mantener un tono tierno, ordenado y familiar.
- No incluir caricaturas irreverentes ni contenido secular agresivo.
- Si hay una enseñanza moral, debe ser compatible con un hogar cristiano reformado: sobria, sencilla, sin moralismo pesado.

Esta ficha es una fábula, así que hazla en DOS IMÁGENES SEPARADAS:

═══════════════════════════════════════
IMAGEN 1 — LECTURA DE LA FÁBULA
═══════════════════════════════════════

Título superior:
"Una fábula de Esopo"

Título principal:
[Nombre de la fábula]

Contenido:
- Incluir la fábula completa, no un resumen.
- Adaptar el lenguaje para una niña de 6 años, pero conservar la narración completa.
- Dividir el texto en párrafos cortos.
- Usar letra grande y muy legible.
- Incluir 2 o 3 ilustraciones narrativas tipo acuarela suave que muestren momentos clave de la historia.
- Incluir al final una caja de "Moraleja".
- La página debe parecer una página hermosa de libro infantil, no una ficha escolar.

═══════════════════════════════════════
IMAGEN 2 — TRABAJO SOBRE LA FÁBULA
═══════════════════════════════════════

Título superior:
"Yo cuento · Yo pienso · Yo escribo"

Secciones:

1. "Yo cuento la fábula"
   Instrucción: "Escribe con tus palabras lo que entendiste de la fábula."
   Incluir 5 líneas guía amplias (altura 12 mm).

2. "Yo pienso"
   Incluir 2 preguntas de inferencia, cada una con 2 líneas guía:
   - "¿Por qué crees que [personaje] hizo eso?"
   - "¿Qué habrías hecho tú en su lugar?"

3. "Mi final diferente"
   Instrucción: "Si tú escribieras el final, ¿cómo terminaría la fábula?"
   Incluir una caja grande en blanco para escribir.

4. "Palabras nuevas"
   Incluir 4 o 5 palabras importantes de la fábula, cada una con una línea para escribir su significado con sus propias palabras.

5. "Para recordar"
   Pregunta: "¿Cuál es la enseñanza de la fábula?"
   Incluir 2 líneas guía.

Diseño de la imagen 2:
- Debe ser una hoja de trabajo hermosa, no una página llena de texto.
- Usar íconos pequeños: libro, lápiz, estrella, flor, animal de la fábula.
- Mantener líneas de escritura claras y amplias.
- Dejar suficiente espacio para que Eli escriba.
- Usar ilustraciones pequeñas en esquinas o dentro de cajas, sin quitar espacio de escritura.

═══════════════════════════════════════
TEMA DE HOY:
═══════════════════════════════════════
Fábula: El león y el ratón (Esopo)
Personajes principales: el león majestuoso, el ratoncito humilde
Versículo de fondo (no aparece en la ficha): "Un siervo verdadero ayuda a quien lo necesita." Esta enseñanza encaja con el doble amor de Mateo 22:39.
Nivel: 6 años, lectora fluida
Objetivo: lectura, narración, comprensión, inferencia y escritura propia.

NOTA: si prefieres otra fábula adecuada para 6 años (La liebre y la tortuga, El pastor mentiroso, La hormiga y la cigarra), puedes cambiarla. Pero conserva la estructura de 2 imágenes.

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Genera primero la IMAGEN 1 en A4 vertical 1:1.414, alta resolución, estilo libro infantil con ilustraciones tipo acuarela. Luego, cuando yo diga "Haz la imagen 2 con el resto", genera la IMAGEN 2 también en A4 vertical 1:1.414, alta resolución, con espacios en blanco visibles para escritura.

Si la IA genera HTML:
Crear dos artifacts separados (uno por imagen), HTML completo con CSS embebido, ambos A4 vertical, imprimibles sin márgenes del navegador.

Si la IA genera PDF:
Crear un PDF de 2 páginas (página 1 = lectura, página 2 = trabajo), A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente las imágenes.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 minutos</div>
        <ol>
          <li>Dictar 2 frases (en vez de 4)</li>
          <li>Mamá lee UNA fábula corta</li>
          <li>Eli narra con sus palabras</li>
          <li>Listo. (Las 4 frases y la pregunta de inferencia son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: MATEMÁTICAS 11-20 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · Primer encuentro con 11–20</div>
      <div class="lesson-meta">25 min · 1 decena + unidades · Concreto → Pictórico</div>
      <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Ábaco</span><span class="mat">Pensar sin Límites 1A p.79</span><span class="mat">Mamut VP p.13</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> el sistema posicional decimal — base 10 — no es invento humano arbitrario. <strong>Tenemos 10 dedos porque Dios diseñó el cuerpo humano así</strong>. Los pueblos antiguos contaron con los dedos, y de ahí salió el sistema decimal. El "10" tiene incluso resonancias bíblicas: los 10 mandamientos, el diezmo, las 10 plagas. <em>El 10 organiza el orden divino.</em></p>
        <p><span class="lec-tag">Marco pedagógico (Singapur):</span> hoy Eli pasa por <strong>todas las etapas C-P-A</strong> en la misma clase. CONCRETO con regletas (toca, mueve). PICTÓRICO en su mente (visualiza el grupo de 10 más algunas unidades). ABSTRACTO al final con el símbolo "12". Si pasa al símbolo sin haber pasado por lo concreto, no entendió — memorizó.</p>
        <p><span class="lec-tag">Estructura clave:</span> los nombres 11-15 son <strong>irregulares en español</strong> (once, doce, trece, catorce, quince — no "diez y uno"). Pero del 16 al 19 sí: dieci-séis, dieci-siete, etc. Esto importa porque Eli puede aprender 11-15 como nombres memorizados, pero 16-19 los puede deducir. Aprovéchalo.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> ir a la página del libro antes de manipular regletas. Si Eli ve el número "12" antes de tocar 1 decena + 2 unidades, lo aprenderá como símbolo huérfano. La regleta naranja (10) más la blanca (1) más la blanca (1) es la <em>verdad</em> detrás del número 12.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> comprensión del valor posicional como ventana al orden del 10. Fundamento para suma, resta, y eventualmente centenas.</p>
        <div class="lec-bible">"Tú lo has dispuesto todo por medida, número y peso." — Sabiduría 11:20</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por el orden de tu creación. Que Eli vea hoy que el 10 no es número mágico — es tu ordenamiento del mundo, escrito incluso en sus manos. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso del 10 con regletas <span class="edc-mark E">E</span> · 3 min</div>
            <p>Mamá pone la regleta naranja (10) en la mesa.</p>
            <div class="guia-say">"Esta es la regleta del 10. Ya la conoces. ¿Cuántas regletas blancas (de 1) caben en ella?"</div>
            <p>Eli las coloca encima. Diez. Confirma que la naranja representa diez unidades.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Construir 11-15 con regletas <span class="edc-mark D">D</span> · 10 min</div>
            <p>Mamá pone una naranja (10) + una blanca (1):</p>
            <div class="guia-say">"Aquí tengo una decena y una unidad. Esto se llama ONCE. Tú lo dices."</div>
            <p>Eli arma y dice: <em>"Once."</em> Luego mamá agrega otra blanca:</p>
            <div class="guia-say">"Una decena y DOS unidades. Esto es DOCE."</div>
            <p>Continúa así hasta 15. Cada vez, Eli arma con sus manos, dice el nombre. SIN papel todavía.</p>
            <div class="guia-bible"><span class="guia-bible-ref">Patrón visual</span>11 = ▮ + ▫<br>12 = ▮ + ▫▫<br>13 = ▮ + ▫▫▫<br>14 = ▮ + ▫▫▫▫<br>15 = ▮ + ▫▫▫▫▫</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Con el ábaco <span class="edc-mark D">D</span> · 5 min</div>
            <p>Si tienes ábaco: pon 10 cuentas (una decena) en una columna, agrega 1 en otra.</p>
            <div class="guia-say">"Mira: aquí tengo el grupo del 10. Y aquí 1 cuenta más. Eso es 11."</div>
            <p>Pídele que arme 13, luego 14. Eli mueve cuentas, dice el número.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Si fluye: 16-20 <span class="edc-mark C">C</span> · 5 min</div>
            <p>Solo si los 11-15 están sólidos. Introduce la regla del "dieci-":</p>
            <div class="guia-say">"Del 16 en adelante el nombre nos ayuda a saber. Dieciséis = diez-y-seis. Diecisiete = diez-y-siete. ¿Puedes armar el 18 con regletas? Es diez-y-ocho."</div>
            <p>Eli arma 16, 17, 18, 19, 20. Si lo logra: gran felicitación.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Mira tus manos. Diez dedos. Dios diseñó tus manos así para que pudieras contar. El 10 organiza todo: los grupos de 10 forman los números más grandes. Eso es el orden de Dios."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No conecta la regleta naranja con "decena". Confunde 11 con 1+1</td><td>Volver al 10 con regletas. Solo armar el 11. No avanzar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Arma 11-15 con regletas y dice los nombres correctos</td><td>Normal. Repetir mañana con 16-20.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Arma 11-20 con regletas, explica la estructura "1 decena y X unidades"</td><td>Registrar como evidencia. Lista para suma simple.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "Los números del 11 al 20"</strong></p>
        <ul>
          <li>Imagen pictórica: regletas naranja + blancas para representar cada número</li>
          <li>Eli escribe el número correspondiente</li>
          <li>Sección inversa: dado el número, Eli dibuja las regletas</li>
          <li>Caja "Yo cuento mis dedos" — espacio para que Eli explique cómo el 10 organiza el sistema</li>
        </ul>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Números 11-20</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de matemáticas en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con metodología Singapur y regletas Cuisenaire (no usamos bloques base diez ni ábacos para esta ficha).

CONTEXTO:
- Eli está aprendiendo los números 11-20 por primera vez
- Trabajamos con regletas Cuisenaire (la naranja = 10, la blanca = 1)
- Énfasis en valor posicional: 1 decena + X unidades
- Metodología: concreto → pictórico → abstracto. Esta ficha es la etapa PICTÓRICA (entre la manipulación física y el símbolo abstracto)

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado: "Los números del 11 al 20" + ilustración simple de regletas
2. Sección 1 "Cuenta y escribe el número" (de pictórico a abstracto):
   - 5 ejercicios mostrando regletas dibujadas (naranja + blancas en distintas cantidades)
   - Bajo cada uno: línea para escribir el número
   - Ejemplo: ▮ + ▫▫▫ = ___
3. Sección 2 "Dibuja con regletas" (de abstracto a pictórico):
   - 5 números dados (12, 15, 17, 19, 20)
   - Espacio con cuadrícula para que Eli dibuje las regletas correspondientes
   - Recuadro guía mostrando que ▮ = decena (naranja) y ▫ = unidad (blanca)
4. Sección 3 "Yo escribo la estructura":
   - 3 ejercicios donde Eli completa: "13 = ___ decena y ___ unidades"
5. Caja final: "Yo descubro" — pregunta abierta con 3 líneas: "¿Por qué crees que contamos en grupos de 10?"

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0)
- Color del tema: rojo cálido matemáticas (#B94020)
- Color naranja para representar las regletas decena (#F39C2A)
- Color crema/blanco con borde fino para regletas unidad
- Tipografía: Georgia para títulos, sans-serif grande (mín. 18pt) para texto
- Espacio generoso, no saturar
- Numerar secciones con círculos de color

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con espacios en blanco visibles para que Eli escriba y dibuje.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Mamá pone naranja (10) + blanca (1) = 11. Eli dice el nombre.</li>
          <li>Repetir hasta 13 con regletas</li>
          <li>Eli dice los nombres en orden: 10, 11, 12, 13</li>
          <li>Listo. (Hasta 20 y la explicación de estructura son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: HISTORIA · MI FAMILIA ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">📜</div>
    <div>
      <div class="lesson-ttl">Historia · Mi familia en la historia de Dios</div>
      <div class="lesson-meta">20 min · Árbol genealógico · Conexión pactual</div>
      <div class="mats"><span class="mat">Hoja grande</span><span class="mat">Colores</span><span class="mat">Foto de abuelos (opcional)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> la <strong>familia es célula del pacto</strong>. Cuando Dios hizo pacto con Abraham (Gn 17), no fue con un individuo — fue con él y con su descendencia. La promesa baja por linaje, generación tras generación: <em>"yo seré el Dios tuyo y de tu descendencia después de ti"</em>. Eli no nació en una familia cualquiera. Nació en una familia del pacto.</p>
        <p><span class="lec-tag">Por qué los abuelos importan:</span> no son anécdotas familiares. Son <strong>eslabones de providencia</strong>. Si los abuelos de Eli hubieran vivido en otra ciudad, conocido a otras personas, decidido otras cosas — Eli no existiría. Pero Dios los puso donde están, hizo que se conocieran, que tuvieran hijos, que sus hijos tuvieran a Eli. <em>Eso no es accidente. Es providencia desplegada en varias generaciones.</em></p>
        <p><span class="lec-tag">Conexión vantiliana:</span> no hay "historia neutral". La historia familiar de Eli no es solo "biografía" — es teología en concreto. Cada eslabón del árbol genealógico es una decisión de Dios. Eli aprenderá a leer su historia familiar con ojos pactuales: <em>"Dios trajo a mi abuela aquí, conoció a mi abuelo, tuvieron a mi mamá, mi mamá conoció a mi papá, y aquí estoy yo. Dios hizo todo eso."</em></p>
        <p><span class="lec-tag">Sobre las tarjetas de Classical Conversations:</span> hoy puedes usarlas como apoyo de memoria si quieres mostrar "la historia es una línea de tiempo larga", pero no construyas la clase sobre ellas. La <strong>historia central de Eli hoy es su propia familia bajo Dios</strong>, no Mesopotamia.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> hablar mal de algún miembro de la familia. El árbol no es para "ay, ese tío fue terrible". Es para mostrar providencia. Si hay miembros difíciles, simplemente nómbralos y sigue. Eli no necesita conocer los conflictos hoy.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> conciencia de que su existencia es resultado de decisiones de Dios a lo largo de generaciones. Gratitud por herencia espiritual. Conexión emocional con personas que la antecedieron.</p>
        <div class="lec-bible">"Yo seré el Dios tuyo y de tu descendencia después de ti." — Génesis 17:7 &nbsp;·&nbsp; "Lo que oímos y entendimos, y nuestros padres nos contaron, no lo encubriremos a sus hijos." — Salmo 78:3-4</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por la línea de personas que pusiste antes de Eli. Gracias porque nada en su historia es accidente. Que Eli vea hoy tu mano en su árbol. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pregunta inicial <span class="edc-mark E">E</span> · 3 min</div>
            <div class="guia-say">"¿Conoces a tus abuelos? ¿Sabes dónde nacieron? ¿Te imaginas cómo se conocieron?"</div>
            <p>Eli responde lo que sabe. Si no sabe, mamá cuenta brevemente.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dibujar el árbol <span class="edc-mark D">D</span> · 10 min</div>
            <p>En una hoja grande, mamá y Eli dibujan juntas el árbol con esta estructura simple (no abrumar):</p>
            <div class="guia-bible"><span class="guia-bible-ref">Estructura del árbol</span>     Abuelos paternos   Abuelos maternos<br>            \\   /                    \\   /<br>            Papá                     Mamá<br>                  \\                   /<br>                       ELI</div>
            <p>Para cada persona: nombre, ¿dónde nació? ¿qué trabajo hacía o hace? Si Eli no sabe, mamá completa.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión pactual <span class="edc-mark D">D</span> · 5 min</div>
            <p>Mamá señala los abuelos:</p>
            <div class="guia-say">"Mira. Si tu abuela nunca hubiera conocido a tu abuelo, tu mamá no existiría. Si tu mamá no me hubiera conocido a mí — no, espera, soy tu mamá. Bueno, si yo no hubiera conocido a tu papá, tú no existirías. Dios hizo que todas esas personas se conocieran. Eso no es coincidencia. Es providencia."</div>
            <p>Luego conecta con el pacto:</p>
            <div class="guia-say">"Y en algún punto, Dios trajo el Evangelio a nuestra familia. Por eso nosotros conocemos a Jesús, vamos a la iglesia, te bautizamos. Tu árbol no es solo familia — es <strong>familia del pacto</strong>."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Todos en este árbol — los abuelos, papá, mamá, tú — Dios los conocía antes de nacer. Tu historia viene de muy atrás y sigue hacia adelante. Algún día, si Dios quiere, tendrás hijos, y ellos también estarán en este árbol. Tu vida es parte de una historia más grande."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No reconoce a sus abuelos por nombre. No entiende el concepto de generaciones</td><td>Mostrar fotos. Repetir nombres. Volver al árbol mañana.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Identifica abuelos y entiende "fueron antes de mamá y papá"</td><td>Normal. Felicitar el dibujo. Guardar en portafolio si quiere.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que su existencia depende de decisiones de Dios en generaciones</td><td>Evidencia opcional. Lista para conectar con patriarcas en S5+.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "Mi árbol bajo la providencia de Dios"</strong></p>
        <ul>
          <li>Árbol predibujado con espacios numerados para cada persona</li>
          <li>Espacios para nombres, lugar de nacimiento, fecha</li>
          <li>Pequeño espacio circular para foto pegada o dibujo (opcional)</li>
          <li>Pregunta inferior: "¿Cómo ves la mano de Dios en tu familia?"</li>
        </ul>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Árbol genealógico pactual</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Tema: árbol genealógico con marco reformado pactual.

CONTEXTO:
- Eli está aprendiendo que su familia es parte de la historia de Dios
- Marco: teología reformada del pacto — familias como células del pacto (Génesis 17:7)
- Eli es hija de Andrés y [mamá], nieta de [abuelos paternos] y [abuelos maternos]
- Familia presbiteriana en Bogotá, Colombia

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado: "Mi árbol bajo la providencia de Dios"
2. Cinta con versículo: "Yo seré el Dios tuyo y de tu descendencia. — Génesis 17:7"
3. Árbol genealógico predibujado en 3 niveles:
   - Nivel superior (4 espacios): Abuelos paternos (2) y Abuelos maternos (2). Cada espacio con líneas para: nombre completo, ciudad y país de nacimiento, año.
   - Nivel medio (2 espacios): Papá y Mamá. Mismos datos.
   - Nivel inferior (1 espacio grande): Eli. Con espacio para nombre, fecha y lugar de nacimiento, fecha de bautismo.
   - Líneas conectoras delicadas entre cada nivel (estilo línea suave dorada)
4. Pequeños recuadros circulares junto a cada persona para pegar foto o dibujo (opcional)
5. Sección inferior "Yo descubro" — pregunta con 4 líneas guía: "¿Cómo ves la mano de Dios en tu familia?"
6. Cinta de pie: "Eli, hija del pacto. Dios la conocía desde antes."

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0)
- Color del tema: dorado tierra (#C49A2A) para historia/providencia
- Estilo: digno, contemplativo, NO infantil saturado
- Líneas del árbol: dorado suave, delgadas, decorativas
- Tipografía: Georgia para encabezados, sans-serif clara para texto a escribir
- Letras grandes pero no infantilizadas (Eli ya escribe bien) — mínimo 14pt
- Decoración floral o ramas estilizadas en los bordes (sutil)

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con espacios en blanco visibles para que Eli escriba y dibuje.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha. Esta hoja se guardará en el portafolio — pensar para conservar.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Mamá nombra a los abuelos (4 personas)</li>
          <li>Dibujar árbol simple con 7 nombres (Eli, papá, mamá, 4 abuelos)</li>
          <li>Una frase: <em>"Dios los conocía a todos antes de nacer."</em></li>
          <li>Listo. (Lugares, fechas y la pregunta de reflexión son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>`,

jueves:`${APERTURA}

<!-- ⚠️ AVISO IMPORTANTE: PREPARAR FRIJOLES MARTES POR LA NOCHE -->
<div class="strip s-rust" style="margin-bottom:14px;font-weight:600">
  ⚠️ <strong>RECUERDA:</strong> los frijoles debieron ponerse en agua el martes en la noche. Si los olvidaste, hoy ponlos en agua caliente por 1 hora y verás algo de hinchazón, aunque ideal era toda la noche.
</div>

<!-- ═══════════════ BLOQUE 1: CATECISMO P11 · Día 3 — "Mira a Jesús" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P11 · Día 3 — "Mira a Jesús"</div>
      <div class="lesson-meta">12 min · El invisible se hizo visible · Jesús es la imagen de Dios</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> esta es la clase más importante teológicamente de la semana. Si Eli internaliza HOY este giro cristológico, P11 deja de ser una abstracción y se convierte en Evangelio. La pregunta es: <em>si Dios es Espíritu y no podemos verlo, ¿estamos condenados a no conocerlo?</em> La respuesta del Nuevo Testamento es <strong>no</strong>: el Dios invisible se hizo visible en Jesús.</p>
        <p><span class="lec-tag">Los dos textos clave:</span></p>
        <p>• <strong>Juan 1:18</strong> — "A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer." Juan empieza su evangelio reconociendo lo que P11 dice: nadie ha visto a Dios. Pero termina la frase con un giro pactual: <em>Jesús lo dio a conocer</em>. La visión de Dios viene por la encarnación.</p>
        <p>• <strong>Colosenses 1:15</strong> — "Él es la imagen del Dios invisible, el primogénito de toda creación." Pablo enseña lo mismo: Cristo es la <em>eikon</em> (imagen visible) del Dios invisible. Si Eli quiere saber cómo es Dios, no mira al cielo abstracto — <strong>mira a Jesús</strong>.</p>
        <p><span class="lec-tag">Calvino lo enseña así:</span> "Cristo es el espejo en el cual contemplamos al Dios invisible." Esa frase debe quedar como sustrato en la mente de Eli. No hay otro camino de conocer a Dios. Sola Christus.</p>
        <p><span class="lec-tag">El cuento de hoy (Mt 19:13-15):</span> Jesús bendice a los niños. Lo elegimos porque Eli puede identificarse directamente. Si quieres ver cómo trata Dios a los niños, mira cómo trató Jesús a los niños. Cuando los discípulos los rechazaron, Jesús los abrazó. <em>Esa</em> es la cara del Padre.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> presentar a Jesús como "el ayudante visible de Dios" — como si fueran dos. Jesús es Dios. Cuando Eli mira a Jesús, mira al Dios trino. No es analogía, no es ilustración — es revelación directa.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> conexión cristológica de toda la doctrina. Hábito de pensar "Dios = Jesús" cuando se busca conocer a Dios. Apertura a leer los evangelios con devoción.</p>
        <div class="lec-bible">"A Dios nadie le vio jamás; el unigénito Hijo... él le ha dado a conocer." — Juan 1:18 &nbsp;·&nbsp; "Él es la imagen del Dios invisible." — Colosenses 1:15 &nbsp;·&nbsp; "Dejad a los niños venir a mí." — Mateo 19:14</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor Jesús, gracias porque te hiciste visible para que pudiéramos conocer al Padre. Que Eli vea hoy que mirarte a ti es mirar al Dios invisible. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · La pregunta natural <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, ya aprendimos que no podemos ver a Dios porque Él es Espíritu. Y aprendimos que Dios sí nos ve. Pero queda una pregunta importante: <strong>si nunca podemos ver a Dios, ¿cómo sabemos cómo es?</strong> Hoy la Biblia nos da la respuesta. Y la respuesta es preciosa."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de P y R <span class="edc-mark E">E</span> · 1 min</div>
            <p>Eli dice la P y R completas:</p>
            <div class="guia-say">P: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Juan 1:18 <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-bible"><span class="guia-bible-ref">Juan 1:18</span>"A Dios nadie le vio jamás; el unigénito Hijo... él le ha dado a conocer."</div>
            <div class="guia-say">"Mira lo que dice Juan: nadie ha visto a Dios jamás — eso lo sabíamos. Pero después dice algo importante: <strong>Jesús</strong> nos lo dio a conocer. Eso significa que cuando queremos saber cómo es Dios, miramos a Jesús."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Jesús es la imagen visible <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-bible"><span class="guia-bible-ref">Colosenses 1:15</span>"Él es la imagen del Dios invisible."</div>
            <div class="guia-say">"Es como un espejo, Eli. Dios es invisible — pero Jesús es como un espejo donde vemos a Dios. Si quieres saber cómo es Dios cuando ama, mira cómo Jesús amaba a la gente. Si quieres saber cómo es Dios cuando perdona, mira cómo Jesús perdonó. Si quieres saber cómo es Dios cuando está triste, mira cómo Jesús lloró por Lázaro. Todo lo que Jesús es, eso es Dios."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración · Jesús bendice a los niños <span class="edc-mark D">D</span> · 3 min</div>
            <p>Narra con tus propias palabras Mateo 19:13-15 (lectura cómoda para Eli):</p>
            <div class="guia-say">"Un día, varios papás y mamás trajeron a sus hijos a Jesús para que los bendijera. Los discípulos los regañaron — pensaban que Jesús estaba muy ocupado para los niños. Pero ¿sabes qué hizo Jesús? Se enojó con los discípulos y dijo: '<strong>Dejad a los niños venir a mí, porque de los tales es el reino de los cielos</strong>'. Luego los abrazó y los bendijó uno por uno."</div>
            <p>Pregunta clave:</p>
            <div class="guia-say">"Eli, ¿sabes lo que eso nos enseña sobre Dios? Que el Dios invisible al que no podemos ver — ama a los niños. Quiere a los niños cerca. Los abraza. Eso es Dios."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación <span class="edc-mark C">C</span> · 1 min</div>
            <div class="guia-say">"Entonces, cuando alguien te pregunte '¿cómo es Dios?', ¿qué le contestas? Le dices: 'Mira a Jesús. Él es la imagen del Dios invisible.'"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">7</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor Jesús, gracias porque cuando te miramos te vemos a ti, pero también vemos al Padre. Gracias porque amas a los niños. Ayuda a Eli a mirar tu rostro cada vez que quiera saber cómo es Dios. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No conecta a Jesús con "ver a Dios". Cree que son dos seres distintos</td><td>Releer Col 1:15. Decir: <em>"Jesús ES Dios — no es un ayudante."</em></td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende que Jesús nos muestra a Dios pero no articula por qué</td><td>Pregunta: <em>"Si Jesús abrazó niños, ¿qué dice eso de cómo es Dios?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula con sus palabras: "Para ver a Dios miro a Jesús porque Jesús es Dios"</td><td>Registrar. Lista para síntesis del viernes.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional · la grande va el viernes</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)"><strong>Nota:</strong> la ficha de portafolio se hace el viernes. Hoy puede ser una hoja simple o solo cuaderno.</p>
        <p>Sugerencia rápida sin Claude: que Eli dibuje en su cuaderno la escena de Jesús bendiciendo a los niños, y escriba: <em>"Para ver a Dios, miro a Jesús."</em></p>
        <p style="margin-top:8px">Si quieres una hoja extra:</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja "Mira a Jesús"</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado.

CONTEXTO:
- Estamos profundizando el Catecismo CPN P11: "¿Puedes ver a Dios? — No, pero Él me mira continuamente."
- HOY (Día 3 de la semana) el ángulo es la conexión cristológica: el Dios invisible se hizo visible en Jesús
- Textos: Juan 1:18, Colosenses 1:15
- Narración bíblica del día: Mateo 19:13-15 (Jesús bendice a los niños)
- Eli ya conoce la P y R desde el martes

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "Para ver a Dios, miro a Jesús"
2. Cinta superior con la R del catecismo (recordatorio): "No puedo ver a Dios, pero Él me mira continuamente."
3. Caja decorativa con Col 1:15: "Él es la imagen del Dios invisible."
4. Sección "Jesús bendice a los niños" — pequeño relato adaptado de Mateo 19:13-15 (4-5 líneas para 6 años) + un espacio en blanco para que Eli dibuje la escena. Sin caricatura — ilustración suave o solo línea sugerente.
5. Pregunta abierta con 4 líneas: "Cuando quiero saber cómo es Dios, ¿qué hago? ¿Por qué?"
6. Sección "Tres cosas que aprendo de Dios mirando a Jesús" — 3 líneas guía cortas, ejemplos: "Dios ama a los niños" / "Dios perdona" / "Dios cuida"
7. Cinta inferior dorada: "A Dios nadie le vio jamás; el Hijo... le ha dado a conocer. — Juan 1:18"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Color del tema: violeta (#6B3FAA) con cintas doradas (#C49A2A)
- Tipografía Georgia para títulos, sans-serif clara para texto
- Letra mín. 16pt
- Estilo: digno y reverente. Cualquier ilustración: simple, sobria, ojos cerrados o mirada baja en los personajes (no caras infantiles caricaturizadas)

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escritura.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso de P y R</li>
          <li>Mamá narra brevemente: Jesús bendice a los niños (Mt 19:13-15)</li>
          <li>Una frase: <em>"Para ver a Dios, miro a Jesús."</em></li>
          <li>Listo. (Col 1:15 y articulación son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA · INICIO Y ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · Inicio de Y + composición propia</div>
      <div class="lesson-meta">40 min · ¿Avanzar a Y o consolidar X otro día?</div>
      <div class="mats"><span class="mat">Mamá enséñame a leer (Y)</span><span class="mat">Aprendamos todos a leer (Y)</span><span class="mat">Cuaderno</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Decisión clave hoy:</span> ¿avanzar a la Y o consolidar X otro día? <strong>El criterio no es el calendario — es la consolidación real.</strong> Si Eli en martes y miércoles leyó con comprensión, escribió frases propias con fluidez y narró la fábula bien, avanza a Y hoy. Si hubo dudas, ansiedad o pedir mucha ayuda, da un día más a la X con textos más exigentes.</p>
        <p><span class="lec-tag">Marco pedagógico:</span> Charlotte Mason advierte contra el avance prematuro. Cada letra debe estar <em>realmente</em> consolidada antes de pasar a la siguiente. No es ralentizar — es construir cimientos firmes. Eli puede recuperar velocidad cuando los cimientos estén. No puede recuperar cimientos perdidos.</p>
        <p><span class="lec-tag">La Y en español:</span> tiene dos sonidos importantes — consonante (yo, yema, mayo) y conjunción (mamá y papá). Pero hoy enfócate en el sonido consonante. La conjunción es para la próxima semana cuando se trabaje en frases más complejas.</p>
        <p><span class="lec-tag">Sobre la composición propia:</span> esto NO es ejercicio de gramática. Es Eli usando palabras para decir algo suyo. Mason llamaba a esto "composición original" — un acto creativo que distingue al niño que ha sido <em>formado</em> del niño que solo ha sido <em>instruido</em>. No corrijas la sintaxis; observa la voz.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> transición fluida entre letras, reconocimiento de patrones (la metodología ya la conoce), voz propia en escritura.</p>
        <div class="lec-bible">"Y al que tiene sed venga; y el que quiera, tome del agua de la vida gratuitamente." — Apocalipsis 22:17 (versículo con muchas Y, para mostrar la letra como puente entre ideas)</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que Eli avance con paz y no con ansiedad. Que la Y sea otro regalo más de tu Palabra. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">40 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Decisión inicial — ¿avanzar? <span class="edc-mark D">D</span> · 3 min</div>
            <p>Pregúntale a Eli sobre el martes-miércoles:</p>
            <div class="guia-say">"Eli, ¿cómo te sentiste leyendo y escribiendo estos días? ¿Las palabras con X te parecen ya fáciles?"</div>
            <p>Escucha. Si dice "fácil" y se ve segura: avanza a Y. Si dice "regular" o "difícil": haz un día más de X con un texto nuevo (puedes pedírselo a Claude con el prompt de S1 Martes).</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Sonido de la Y <span class="edc-mark E">E</span> · 5 min</div>
            <p>Abre "Mamá enséñame a leer" o "Aprendamos todos a leer" en la sección Y.</p>
            <div class="guia-say">"La letra Y. ¿Sabes cómo suena? Yo, yema, mayo, payaso. Repite: ya, ye, yi, yo, yu."</div>
            <p>Eli repite. Mamá observa si transfiere lo aprendido de X sin necesidad de reexplicar la metodología.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Palabras con Y <span class="edc-mark D">D</span> · 10 min</div>
            <p>Lee con Eli palabras del libro. Luego, sin libro:</p>
            <div class="guia-say">"Ahora dime tú palabras con Y. Yo empiezo: 'mayo'. Tu turno."</div>
            <p>Eli aporta. Si se traba, mamá ayuda con UNA palabra. Lista mental: yo, yegua, yate, yema, yogur, payaso, ayer, hoy, leyenda, joya.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Frase propia con Y <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"Escribe una frase tuya que tenga al menos 2 palabras con Y."</div>
            <p>Eli escribe sola. Sin modelo. Si se atora, mamá lee las palabras de la lista mental.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Composición creativa elevada <span class="edc-mark C">C</span> · 15 min</div>
            <p>Esta es la tarea más exigente del día. Mamá da SOLO el primer verso:</p>
            <div class="guia-say">"Yo vivo en Bogotá..."</div>
            <p>Eli continúa al menos 3 frases más sobre su vida, su familia o su casa. Sin modelo. Sin copia. Solo ideas propias. <strong>El resultado no debe ser perfecto; debe ser SUYO.</strong></p>
            <p>Mamá guarda la hoja: es evidencia de portafolio.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Lo que escribiste salió de tu mente, que Dios diseñó. Las ideas que tienes son regalo suyo. Cuando escribes, estás usando algo que solo los humanos tenemos."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Necesita reexplicación del método. Composición es solo 1-2 frases con apoyo</td><td>Volver a hacer X otro día. No forzar Y todavía.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Reconoce Y, escribe frase propia, composición de 3 frases con apoyo mínimo</td><td>Normal. Guardar composición. Avanzar a Y completa mañana.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Transfiere método sin reexplicación, composición fluida y propia de 4+ frases</td><td>Evidencia destacada. Eli adelantada — adaptar dificultad próxima semana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "La letra Y + Mi vida en Bogotá"</strong></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Letra Y + composición</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de lectoescritura en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado.

CONTEXTO:
- Eli está aprendiendo la letra Y por primera vez (en su variante consonante)
- Ya domina la X y lee/escribe con fluidez
- Hoy debe hacer composición creativa propia: 3-4 frases sobre su vida en Bogotá

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "La letra Y" + ilustración simple (un yate o yema)
2. Sección "Yo conozco la Y" — sílabas grandes para repasar: ya, ye, yi, yo, yu (con caja de cada una en color)
3. Sección "Palabras con Y" — 6 imágenes pequeñas (yo, yema, payaso, mayo, joya, yegua) con líneas debajo para que Eli escriba la palabra
4. Sección "Yo escribo mi frase" — espacio amplio con líneas guía (12mm) y prompt: "Escribe una frase tuya con al menos 2 palabras con Y"
5. Sección "Mi vida en Bogotá" — la actividad principal. Letra grande arriba diciendo "Yo vivo en Bogotá..." como inicio dado. Debajo, 6-8 líneas guía amplias para que Eli continúe libremente
6. Cinta inferior: "Lo que escribo es un regalo de Dios."

DISEÑO VISUAL:
- Fondo crema (#FAF6F0), color tema azul lectura (#2A6090)
- Ilustraciones simples line-art o flat color
- Tipografía Georgia/sans-serif, mín. 18pt para instrucciones, 24pt para sílabas
- Espacio amplio, no saturar
- La composición de "Mi vida en Bogotá" debe ocupar mitad inferior de la página — el espacio invita a escribir

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escribir y dibujar.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Repasar sonido Y: ya, ye, yi, yo, yu</li>
          <li>Eli dice 3 palabras con Y</li>
          <li>Eli escribe UNA frase con Y</li>
          <li>Listo. (La composición creativa es [C] — guárdala para otro día si hay cansancio.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: CIENCIAS · FRIJOL BEBÉ ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico verde">🌱</div>
    <div>
      <div class="lesson-ttl">Ciencias · Experimento "Frijol bebé" — dentro de la semilla</div>
      <div class="lesson-meta">25 min · Observación directa · Diario de naturaleza</div>
      <div class="mats"><span class="mat">10-12 frijoles pinto remojados</span><span class="mat">Lupa (si tienes)</span><span class="mat">Diario de naturaleza</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> dentro de cada semilla está la <strong>planta entera predeterminada por Dios</strong>. No hay "azar evolutivo" en el frijol — hay diseño. Cuando Eli abre el frijol y ve la pequeña planta enrollada adentro (la radícula, los cotiledones, la plúmula), está viendo lo que Bavinck llama <em>el orden interno de la creación</em>: cada cosa contiene en sí su propia ley.</p>
        <p><span class="lec-tag">Marco pedagógico (Charlotte Mason):</span> el "diario de naturaleza" no es manualidad — es <strong>entrenamiento de la atención reverente</strong>. Mason creía que enseñar a observar la creación con detalle y cuidado era enseñar a leer la Palabra de Dios escrita en la naturaleza (el "libro de la creación" como lo llamaron los Reformadores). Eli no está "haciendo ciencia"; está adorando con sus ojos.</p>
        <p><span class="lec-tag">Antes de explicar, escucha:</span> el orden importa. Mamá NO empieza explicando las partes. Empieza preguntando "¿qué ves?". Eli mira primero, conjetura, articula sus propias observaciones. <em>Eso</em> es educación científica reformada: respeto por la capacidad observadora del niño, no inundación de información.</p>
        <p><span class="lec-tag">Conexión bíblica:</span> Mateo 13:31-32 — el Reino es como un grano de mostaza. La semilla pequeña que contiene un árbol grande. Dios usa la imagen botánica para enseñar verdad espiritual. Esto no es coincidencia — es el patrón de cómo Dios estructuró el mundo: lo grande está oculto en lo pequeño.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> presentar esto como "interesante curiosidad de ciencia" sin marco teológico. La ciencia reformada no es teología decorada — es observar la obra de Dios y dar gracias por ella.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> reverencia ante el diseño divino, atención observadora, hábito de preguntar antes de aceptar información, gusto por la naturaleza como revelación.</p>
        <div class="lec-bible">"¿Quién levantará en alto los cielos? El que nombra a las estrellas todas, por la grandeza de su fuerza, y porque es fuerte en poder, ninguna faltará." — Isaías 40:26 &nbsp;·&nbsp; "El Reino de los cielos es semejante al grano de mostaza..." — Mateo 13:31</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por lo que está oculto en una semilla. Que Eli vea hoy tu diseño y te dé gracias. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Preparación · Antes de abrir <span class="edc-mark E">E</span> · 3 min</div>
            <p>Pon 3-4 frijoles remojados sobre un plato. Mamá NO dice nada todavía.</p>
            <div class="guia-say">"Eli, mira estos frijoles. Han estado en agua toda la noche. ¿Cómo se ven distintos a los frijoles secos de la cocina?"</div>
            <p>Eli observa: están más grandes, más blandos, la cáscara se ve floja.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Abrir el frijol — observar primero <span class="edc-mark D">D</span> · 7 min</div>
            <p>Mamá quita suavemente la cáscara de UN frijol. Lo abre por la mitad (los dos lados se separan naturalmente). NO explica nada todavía.</p>
            <div class="guia-say">"Mira muy de cerca. ¿Qué ves adentro? Tómate tu tiempo. Dime lo que ves, no lo que crees que es."</div>
            <p>Eli observa, con lupa si tienes. Articula lo que ve: "Veo algo blanco... parece una cosita pequeña enrollada... tiene dos partes grandes blancas..."</p>
            <p>Mamá escucha. No corrige. Toma nota mental.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Nombrar las partes <span class="edc-mark D">D</span> · 5 min</div>
            <p>Ahora sí, mamá nombra lo que Eli observó:</p>
            <div class="guia-say">"Eso pequeño enrollado que viste es la <strong>plantita</strong> — sí, dentro del frijol hay una planta diminuta esperando a crecer. Esos dos lados blancos grandes son la <strong>comida</strong> que Dios le puso al frijol para que la plantita pueda crecer hasta que tenga raíces y hojas. Y la cáscara afuera la protege."</div>
            <p>Resumen sencillo: PLANTITA + COMIDA + CÁSCARA.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dibujar en el diario <span class="edc-mark C">C</span> · 7 min</div>
            <p>Eli abre su diario de naturaleza y dibuja lo que vio. Mamá la acompaña, no la corrige.</p>
            <div class="guia-say">"Dibuja lo que ves, no lo que crees que debe ser. Pon las flechas con las etiquetas: plantita, comida, cáscara."</div>
            <p>Si Eli quiere, dicta una frase: <em>"Hoy abrí un frijol y vi una plantita muy pequeña enrollada adentro."</em> Mamá la escribe ella o Eli la copia.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión pactual <span class="edc-mark E">E</span> · 3 min</div>
            <div class="guia-say">"Dios diseñó que dentro de ese frijol hubiera todo lo que la planta necesita para nacer. La plantita, la comida, la cáscara protectora — todo está adentro desde antes. Así es el orden de la creación: Dios pone TODO lo necesario desde el inicio. Jesús dijo que el Reino de Dios es como una semilla pequeña que crece y se vuelve grande. Lo que parece pequeño hoy puede ser muy grande en las manos de Dios."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No observa con detalle. Solo quiere terminar rápido</td><td>Volver a la observación. Pedir 3 detalles más antes de avanzar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Observa, nombra las partes correctamente, dibuja con etiquetas</td><td>Normal. Guardar dibujo en diario de naturaleza.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Observa con asombro, conecta con la frase de Jesús sobre la mostaza, hace preguntas propias</td><td>Evidencia destacada. Plantar un frijol en algodón para seguir la germinación días siguientes.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "Lo que hay dentro de un frijol"</strong></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Frijol bebé</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha de ciencias imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado (creacionismo bíblico, observación reverente de la creación).

CONTEXTO:
- Eli acaba de abrir un frijol pinto remojado y observar las partes internas: la plantita diminuta enrollada (radícula + plúmula), la "comida" almacenada (cotiledones), y la cáscara protectora (testa)
- Marco: Charlotte Mason — diario de naturaleza como atención reverente
- Conexión bíblica: Mateo 13:31 (la mostaza como semilla del Reino), Génesis 1 (Dios creó las plantas con su semilla en sí)

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "Lo que hay dentro de un frijol" + ilustración pequeña
2. Sección "Lo que vi con mis ojos" — un círculo grande con líneas guía donde Eli dibuja lo que observó del frijol abierto (con espacio para 3 etiquetas: plantita, comida, cáscara) — flechas predibujadas
3. Sección "Las tres partes que Dios diseñó" — tres mini-cajas explicando cada parte con texto sencillo:
   • PLANTITA: "Está enrollada, esperando a crecer. Va a ser raíz y hojas."
   • COMIDA: "Dos partes grandes con alimento para la plantita."
   • CÁSCARA: "Cubre y protege todo."
4. Sección "Mi observación" — 4 líneas guía con prompt: "Escribe una frase sobre lo que más te asombró."
5. Sección "Pregunta de Eli" — espacio con 2 líneas para que Eli escriba UNA pregunta que le surgió al observar
6. Cinta inferior con Mateo 13:31: "El Reino es como un grano de mostaza, la más pequeña de las semillas, que se hace árbol."

DISEÑO VISUAL:
- Fondo crema (#FAF6F0), color tema verde naturaleza (#4A7A5A) con acentos cálidos (terracota suave)
- Ilustración del frijol abierto: estilo naturalista delicado, no caricatura
- Tipografía Georgia para títulos, sans-serif clara grande para instrucciones
- Bordes orgánicos sutiles (líneas de hojas estilizadas en esquinas)
- Estilo reverente, contemplativo — esta hoja es para un diario de naturaleza

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escribir y dibujar.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha. Lista para que Eli la pegue o guarde en su diario de naturaleza.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Abrir UN frijol remojado, separar las dos partes</li>
          <li>Mamá pregunta: <em>"¿Qué ves?"</em></li>
          <li>Eli dibuja en el diario lo que vio, con UNA flecha y etiqueta</li>
          <li>Una frase de mamá: <em>"Dios puso toda la planta dentro de esta semilla."</em></li>
          <li>Listo. (Las 3 partes nombradas y la pregunta propia son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: MATEMÁTICAS · CONSOLIDACIÓN 11-20 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · Consolidación 11–20 + valor posicional verbal</div>
      <div class="lesson-meta">25 min · Verbalización antes que papel</div>
      <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Ábaco</span><span class="mat">Mamut VP p.13 ej. 2</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> hoy <strong>verbalizar es más importante que escribir</strong>. Si Eli no puede DECIR la estructura ("una decena y dos unidades es doce") con sus propias palabras, no la entiende — aunque pueda escribir "12" correctamente. La verbalización fuerza la articulación interna del concepto. Es el paso intermedio entre lo concreto y lo abstracto.</p>
        <p><span class="lec-tag">Marco Singapur:</span> ayer fue introducción. Hoy es consolidación. La diferencia es que ayer Eli construyó cada número desde cero; hoy mamá le da el número y Eli debe descomponerlo. Es razonamiento <em>inverso</em>. Si lo hace bien, está en [C].</p>
        <p><span class="lec-tag">Sobre el desafío verbal:</span> "Si tengo 1 decena y 9 unidades, ¿qué número es?" — este tipo de pregunta es donde se ve la diferencia entre memorizar y comprender. Eli que memorizó dirá los nombres en orden pero no podrá saltar. Eli que entiende puede ir directo al 19.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> avanzar al papel demasiado rápido. El libro de Mamut p.13 ejercicio 2 es SOLO si el oral está consolidado. Si Eli no puede hacer el oral, NO le des el ejercicio impreso — la frustración solo confirmará que no entendió.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> articulación verbal del valor posicional, fluidez de descomposición numérica, fundamento para la suma con llevadas.</p>
        <div class="lec-bible">"Tú lo has dispuesto todo por medida, número y peso." — Sabiduría 11:20</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por la mente que diseñaste en Eli. Que pueda decir lo que entiende, no solo escribirlo. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso 11-15 con regletas <span class="edc-mark E">E</span> · 8 min</div>
            <p>Mamá pone una combinación de regletas (ej: naranja + 3 blancas). Eli dice:</p>
            <div class="guia-say">"Una naranja y tres blancas. Es una decena y tres unidades. Eso es trece."</div>
            <p>Mamá repite con varias combinaciones (12, 14, 15). Eli verbaliza la estructura cada vez. Si Eli solo dice "trece" sin estructura, mamá pide: <em>"Pero dime qué tiene adentro."</em></p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Introducir 16-20 <span class="edc-mark D">D</span> · 8 min</div>
            <p>Mamá: una naranja + 6 blancas.</p>
            <div class="guia-say">"Mira: una decena y seis unidades. ¿Cómo se dice? Dieciséis. ¿Por qué se llama así? Porque diez-y-seis."</div>
            <p>Repite con 17, 18, 19, 20. Énfasis en que el nombre TIENE la estructura adentro (dieci-séis). Eli construye con regletas y dice el nombre.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Desafío verbal · razonamiento inverso <span class="edc-mark C">C</span> · 5 min</div>
            <p>Ahora SIN regletas, SIN papel — solo conversación:</p>
            <div class="guia-say">"Si tengo 1 decena y 9 unidades, ¿qué número es?"<br>(Respuesta: 19)<br>"¿Y si tengo 2 decenas?"<br>(Respuesta: 20)<br>"¿Y si tengo 1 decena y 5 unidades?"<br>(15)</div>
            <p>Eli razona y responde. Si se traba, mamá le permite usar regletas. Pero el oral es la meta.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Primera ficha breve · Mamut VP p.13 ej.2 <span class="edc-mark D">D</span> · 4 min</div>
            <p><strong>SOLO si el oral está sólido.</strong> Si Eli dudó en el paso 3, NO le des el ejercicio escrito. Repítelo verbalmente otro día.</p>
            <p>Si avanzaste: Eli completa el ejercicio sola. Mamá observa.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Necesita regletas para todo. No verbaliza la estructura</td><td>Más práctica concreta. NO al ejercicio escrito todavía.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Verbaliza con regletas, responde el desafío oral con apoyo</td><td>Normal. Avanzar al ejercicio del libro.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Verbaliza sin regletas, responde el desafío oral en seco</td><td>Adelante con suma simple a partir de mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span></div>
      <div class="ficha-eli">
        <p><strong>Si Eli avanzó: Mamut VP p.13 ej. 2 (ya impreso). No requiere ficha adicional hoy.</strong></p>
        <p>Si quieres material extra:</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha consolidación 11-20</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de matemáticas en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con metodología Singapur y regletas Cuisenaire.

CONTEXTO:
- Eli está consolidando los números 11-20
- Énfasis en valor posicional verbalizado: "1 decena y X unidades"
- Ya manipula regletas Cuisenaire. Esta ficha es para reforzar verbal/abstracto

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "Decenas y unidades — del 11 al 20"
2. Sección 1 "Completa la estructura" — 6 ejercicios:
   • 13 = ___ decena y ___ unidades
   • 17 = ___ decena y ___ unidades
   • 20 = ___ decenas y ___ unidades
   • etc.
3. Sección 2 "Cuál soy yo" — 4 acertijos con líneas para responder:
   • "Tengo 1 decena y 4 unidades, soy ___"
   • "Tengo 1 decena y 8 unidades, soy ___"
   • "Tengo 2 decenas, soy ___"
   • "Tengo 1 decena y 6 unidades, soy ___"
4. Sección 3 "Yo digo en voz alta" — pequeño recordatorio con dibujo de boquita feliz: "Estas no las escribas, dilas a mamá:" + 3 preguntas más complejas verbal
5. Caja final "Yo dibujo con regletas" — 2 números (15, 19) con espacio cuadriculado para que Eli dibuje las regletas correspondientes

DISEÑO VISUAL:
- Fondo crema (#FAF6F0), color tema rojo cálido (#B94020)
- Tipografía Georgia/sans-serif, mín. 18pt
- Cada sección con número de color en círculo
- Espacio amplio, líneas guía gruesas

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco para escritura.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Repaso oral con regletas del 11 al 15</li>
          <li>Una pregunta verbal: <em>"¿Cuántas unidades tiene el número 17 además de la decena?"</em></li>
          <li>Listo. (16-20 con regletas y el desafío sin regletas son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 5: MÚSICA · HIMNO + MELODÍA ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">🎵</div>
    <div>
      <div class="lesson-ttl">Música · Himno + melodía propia del versículo</div>
      <div class="lesson-meta">20 min · Memorizar versículo cantándolo</div>
      <div class="mats"><span class="mat">Himnario o app</span><span class="mat">Piano (opcional)</span><span class="mat">Canto de geografía (español)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué cantar el versículo:</span> la <strong>melodía es el mejor mnemónico que existe</strong>. Eli puede recitar Jeremías 1:5 con esfuerzo, pero si lo canta, lo retendrá por años. No es entretenimiento — es pedagogía clásica: los pueblos memorizaron los Salmos cantándolos. Calvino mismo musicalizó los Salmos para que el pueblo los aprendiera de memoria.</p>
        <p><span class="lec-tag">Sin presión musical:</span> mamá no necesita saber música. La melodía no tiene que ser "buena" — tiene que ser tuya y de Eli. Una melodía simple y repetitiva sobre 3 notas es más efectiva pedagógicamente que una compleja.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> memoria del versículo por canto, gozo del himno familiar, exposición temprana a contenido educativo cantado (nuestro canto de geografía en español).</p>
        <div class="lec-bible">"Hablando entre vosotros con salmos, con himnos y cánticos espirituales, cantando y alabando al Señor en vuestros corazones." — Efesios 5:19</div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Himno conocido <span class="edc-mark E">E</span> · 5 min</div>
            <p>Canten juntas un himno que Eli ya conozca (por la iglesia). Si tienes piano, acompáñalo. Si no, a capella está perfecto. <strong>Repetir 2 veces.</strong> El segundo turno con más volumen y confianza.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Inventar melodía para Jer 1:5 <span class="edc-mark D">D</span> · 10 min</div>
            <div class="guia-say">"Vamos a inventarle una melodía a nuestro versículo de la semana. 'Antes que te formase en el vientre te conocí.' Yo voy a tararear así..."</div>
            <p>Mamá tararea una melodía simple sobre 3-4 notas (por ejemplo: do-re-mi-re repetidos). Eli imita. Juntas la repiten varias veces.</p>
            <div class="guia-say">"Ahora pongámosle las palabras."</div>
            <p>Cantan el versículo completo 5 veces. Esa melodía será la que Eli use cuando le pregunten el versículo.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Nuestro canto de geografía (español) <span class="edc-mark E">E</span> · 5 min</div>
            <p>En español y nuestro (nada de canciones en inglés). Canten el canto de los continentes señalando un mapa. Sin exigir memorización todavía — solo disfrutar y repetir.</p>
            <div class="guia-bible"><span class="guia-bible-ref">🎵 Canto de los continentes</span>América, Europa, Asia,<br>África, Oceanía, Antártida —<br>seis continentes hizo Dios:<br>¡toda la tierra es del Señor!</div>
            <div class="guia-say">"Cantemos nuestro canto del mundo que Dios hizo."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 min</div>
        <ol>
          <li>Cantar el himno conocido UNA vez</li>
          <li>Tararear la melodía del versículo + decir el versículo cantando</li>
          <li>Listo. (El canto de geografía es bonus.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>`,

viernes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P11 · Día 4 — Síntesis + ⭐ Portafolio ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P11 · Día 4 — Síntesis + ⭐ Hoja de portafolio</div>
      <div class="lesson-meta">20 min · Repaso de los 3 ángulos + hoja final</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span><span class="mat">Hoja imprimible del prompt Claude</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes:</span> hoy NO se introduce nada nuevo. Se <strong>sintetiza</strong>. Eli ha vivido con P11 toda la semana — la conoce, la sabe, le ha dado vueltas. Hoy es el día de <em>celebrar lo aprendido y dejar huella física</em> (la hoja de portafolio).</p>
        <p><span class="lec-tag">Los 3 ángulos en perspectiva:</span></p>
        <p>• <strong>Martes</strong> (Día 1): la pregunta y el ancla. Dios es Espíritu (Jn 4:24).<br>• <strong>Miércoles</strong> (Día 2): Dios me ve. La omnisciencia como cuidado (Sal 139).<br>• <strong>Jueves</strong> (Día 3): Mira a Jesús. El Dios invisible se hizo visible (Jn 1:18; Col 1:15).<br>• <strong>Viernes</strong> (Día 4 — hoy): síntesis. Eli articula con sus palabras lo que aprendió.</p>
        <p><span class="lec-tag">El método pedagógico de hoy:</span> es <strong>narración libre</strong> (Charlotte Mason en su forma más pura). Mamá pregunta y Eli cuenta. Lo que recuerda + lo que articula = lo que de verdad aprendió. Lo que no diga, no se le quedó. Y eso es información buena, no fallo.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> el "examen severo". Si Eli olvida algo, no se reprocha. Mamá lo dice, ella lo repite, se sigue. El viernes celebra, no examina.</p>
        <p><span class="lec-tag">La hoja de portafolio:</span> es la evidencia que se guarda. Esta es la hoja que va al sobre de Semana 1 y que vale la pena comparar en un año. Las 3-4 que se hicieron entre semana son borradores; ésta es la versión final.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> hábito de articular con palabras lo que se ha aprendido. Memoria física tangible (la hoja). Asociación: catecismo + cuidado + Jesús + alegría.</p>
        <div class="lec-bible">"De su plenitud todos hemos recibido, y gracia sobre gracia." — Juan 1:16 (continuación del prólogo de Juan que vimos ayer)</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por esta primera semana del año. Que Eli salga hoy con alegría, con tu Palabra en la mente, con tu Hijo en el corazón. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Recitación de la P y R completa <span class="edc-mark C">C</span> · 2 min</div>
            <p>Eli dice la P y R sin ayuda:</p>
            <div class="guia-say">P: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.</div>
            <p>Si lo logra de corrido: gran felicitación, abrazo. Eso es lo que el viernes celebra.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración libre — los 3 ángulos <span class="edc-mark C">C</span> · 5 min</div>
            <p>Mamá pregunta una sola pregunta. No interrumpe.</p>
            <div class="guia-say">"Eli, cuéntame con tus palabras todo lo que aprendiste esta semana sobre 'no puedo ver a Dios, pero Él me ve'. Lo que recuerdes. Sin orden."</div>
            <p>Eli narra. Mamá escucha y mentalmente identifica:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>¿Mencionó "Dios es Espíritu" / "no tiene cuerpo"? (Día 1 ✓)</li>
              <li>¿Mencionó el Salmo 139 / "Dios me ve siempre" / "ver es cuidar"? (Día 2 ✓)</li>
              <li>¿Mencionó a Jesús como manera de ver a Dios? (Día 3 ✓)</li>
            </ul>
            <p>Si menciona los 3, está en [C]. Si menciona 2, [D]. Si menciona solo 1, [E]. Esta es información para ti — Eli no necesita saberlo.</p>
            <p>Al terminar:</p>
            <div class="guia-say">"¡Qué hermoso lo que recuerdas! Vamos a hacer una hoja para guardar todo eso."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Hoja de portafolio <span class="edc-mark C">C</span> · 12 min · Evidencia obligatoria</div>
            <p>Saca la hoja generada con Claude esta semana (la del prompt al final de esta sección). Si no la generaste, hazlo ahora:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Eli escribe su nombre y la fecha</li>
              <li>Copia la respuesta de P11 en el espacio</li>
              <li>Dibuja con cuidado (no rápido) lo que se le pide</li>
              <li>Responde la pregunta abierta</li>
            </ul>
            <p>Mamá la acompaña pero NO la corrige. Esta hoja es de Eli. Cuando termine: mamá firma en el espacio para firma de mamá. La hoja entra al sobre/carpeta de Semana 1 del portafolio.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración de cierre semanal <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor, gracias por esta primera semana del año. Gracias porque aunque no podemos verte, tú nos ves a Eli y a mí. Gracias porque nos diste a Jesús para conocerte. Continúa enseñándole esta semana y todas. En el nombre de Jesús. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C semanal · P11</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Recuerda solo la P y R memorizada. Narración libre incluye solo 1 de los 3 ángulos</td><td>Repasar P11 toda la próxima semana como repaso encadenado. NO avanzar a nueva pregunta.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la P y R. Narra 2 de los 3 ángulos con sus palabras</td><td>Avanzar a la próxima pregunta. Mencionar P11 ocasionalmente como repaso.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita y articula los 3 ángulos: Espíritu + ve + Jesús, con sus propias palabras</td><td>⭐ CELEBRACIÓN. Hoja al portafolio. Lista para nueva pregunta en S2.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli · ⭐ Portafolio</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja "Lo que aprendí esta semana sobre P11" — esta es la hoja que se guarda</strong></p>
        <p>Generada con el prompt completo abajo. Imprimir A4 y trabajar con Eli en el paso 3 de la guía.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja portafolio P11 — Semana 1</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible "resumen de portafolio" en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado pactual. Esta hoja se conserva en su portafolio durante años.

CONTEXTO:
- Es el viernes de la Semana 1. Eli vivió toda la semana con UNA pregunta del catecismo: CPN P11.
- La pregunta y respuesta:
  P: ¿Puedes ver a Dios?
  R: Yo no puedo verlo, pero Él me mira continuamente.
- A lo largo de la semana exploramos 3 ángulos:
  • Día 1 (Martes): Dios es Espíritu — Juan 4:24
  • Día 2 (Miércoles): Dios me ve — Salmo 139:1-4 (ver es cuidar, no vigilar)
  • Día 3 (Jueves): Mira a Jesús — Juan 1:18, Colosenses 1:15 (el invisible se hizo visible)
- Esta hoja es la EVIDENCIA del portafolio — se guarda y vale la pena comparar en un año.

CONTENIDO DE LA HOJA (A4 vertical, una sola página):
1. Encabezado destacado: "Lo que aprendí de Dios — Semana 1"
2. Sub-encabezado: "Familia Espinoza · 19-23 mayo 2026 · Catecismo P11"
3. Cuadro central GRANDE con la P y R completa en letra grande (Georgia 24pt):
   "¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente."
4. Sección "Tres cosas que aprendí esta semana" — tres líneas guía decoradas con pequeños iconos:
   • 🌬️ "Dios es ____________________________________" (espacio para que Eli complete: Espíritu / no tiene cuerpo)
   • 👁️ "Dios me ve y eso es ____________________________" (cuidado / amor / bueno)
   • ✝️ "Para ver a Dios, miro a ___________________________" (Jesús)
5. Recuadro 12×10 cm para dibujo libre con etiqueta: "Mi dibujo: 'Dios me ve siempre'"
6. Pregunta abierta con 4 líneas: "Lo que más me asombró esta semana fue: ____________"
7. Espacio firmas (dos cajas pequeñas lado a lado):
   • "Eli — fecha: ___ de mayo de 2026"
   • "Mamá: ____________________"
8. Cinta inferior dorada con: "Tú me has examinado y conocido. — Salmo 139:1"
9. Pie pequeño: "Familia Espinoza · Creciendo en el Pacto · 2026-27"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema: violeta (#6B3FAA) con acentos dorados (#C49A2A)
- Estilo: contemplativo, digno, NO infantil saturado — esta hoja se guarda durante años
- Bordes decorativos suaves (esquinas con motivos delicados)
- Tipografía: Georgia para P y R y títulos, sans-serif limpia para instrucciones
- La pregunta y respuesta del catecismo en formato HONORÍFICO — destacar como joya central de la hoja
- Líneas guía altura 10mm (Eli ya escribe bien)
- Si incluyes iconos para los 3 ángulos: minimalistas, line-art, dorados o violeta suaves

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escribir y dibujar.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha. Esta es la hoja que va al portafolio.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli dice la P y R sola</li>
          <li>Mamá pregunta: <em>"¿Qué aprendiste esta semana sobre 'no puedo ver a Dios'?"</em></li>
          <li>Escuchar la narración libre</li>
          <li>Si no hay hoja impresa: que Eli dibuje en su cuaderno "Dios me ve" y escriba "P11" + la respuesta corta</li>
          <li>Oración de cierre</li>
          <li>Listo. (La hoja de portafolio puede hacerse el sábado si hoy no hay tiempo.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 2: REPASO Y EVALUACIÓN ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">🔄</div>
    <div>
      <div class="lesson-ttl">Repaso y evaluación de la semana</div>
      <div class="lesson-meta">40 min · Sin material nuevo · 4 áreas en oral + escritura libre</div>
      <div class="mats"><span class="mat">Texto nuevo de Esopo</span><span class="mat">10 objetos</span><span class="mat">Regletas</span><span class="mat">Mapa de Colombia</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes:</span> NO es evaluar para corregir. Es <strong>celebrar lo aprendido y diagnosticar lo que sigue</strong>. Esta sesión es información para ti como educadora, no examen para Eli. Si Eli sale del viernes pensando "fui evaluada", fallamos. Si sale pensando "qué semana tan rica", acertamos.</p>
        <p><span class="lec-tag">Marco pedagógico:</span> Charlotte Mason advierte contra el "examen ansioso" semanal. Su modelo es la <strong>narración libre</strong> al cierre — el niño cuenta lo que recuerda, sin libro, sin presión. Si recuerda, comprendió. Si no recuerda, hay que volver a tocar el tema, sin reproche.</p>
        <p><span class="lec-tag">Lectura evaluativa con texto NUEVO:</span> el truco está aquí. Si Eli puede leer un texto que no ha visto antes con entonación y comprensión, sabes que está leyendo de verdad. Si solo recita textos memorizados, no lo sabes. Por eso hoy <strong>texto nuevo</strong>, mínimo, de complejidad similar.</p>
        <p><span class="lec-tag">Escritura libre:</span> "Escribe lo que recuerdas de la historia bíblica de esta semana." Esta es la pregunta más rica del viernes. Lo que Eli escribe te dirá QUÉ se le quedó, qué le impactó, qué memoria pactual está formándose. Esa hoja va al portafolio sin corrección.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> Eli ve el viernes como cierre alegre de la semana. Tú recoges información real sobre dónde está. Ambas cosas a la vez.</p>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que el viernes sea celebración y no juicio. Que Eli salga gozosa y yo salga con claridad para la próxima semana. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">40 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Catecismo y versículo <span class="edc-mark D">D</span> · 8 min</div>
            <p>Eli recita la cadena P11-P14 (ya cubierto en bloque anterior). Luego:</p>
            <div class="guia-say">"Ahora el versículo de la semana — sin ayuda. ¿Listo? Jeremías 1:5."</div>
            <p>Eli dice "Antes que te formase en el vientre te conocí." Si lo cantó toda la semana con la melodía del jueves, lo recordará. Celebrar sin importar nivel.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura evaluativa <span class="edc-mark C">C</span> · 10 min</div>
            <p>Mamá tiene un texto NUEVO listo (otra fábula de Esopo que Eli no ha visto, o un párrafo de Beatrix Potter, o algo de su nivel).</p>
            <div class="guia-say">"Hoy vas a leer un texto nuevo. Yo no te ayudo. Tómate tu tiempo. Tú puedes."</div>
            <p>Eli lee en voz alta por PRIMERA vez. Mamá escucha: ¿entonación? ¿comprensión? ¿silabeo en palabras difíciles? Toma nota mental.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Escritura libre evaluativa <span class="edc-mark C">C</span> · 10 min · ⭐ Evidencia portafolio</div>
            <div class="guia-say">"Toma tu cuaderno. Escribe lo que recuerdas de la historia bíblica que hablamos esta semana. Sin ayuda. Mínimo 3 frases, máximo 5. No tiene que ser perfecto. Solo tuyo."</div>
            <p>Eli escribe sola. Mamá NO interviene. <strong>Esta hoja va al portafolio sin corrección.</strong> Es evidencia genuina de comprensión.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Matemáticas oral <span class="edc-mark D">D</span> · 7 min</div>
            <p>Mamá pone 10 objetos en fila.</p>
            <div class="guia-say">"Señala el 5° desde la izquierda. Ahora desde la derecha. ¿Qué posición tiene?"</div>
            <p>Eli responde. Luego mamá pone regletas:</p>
            <div class="guia-say">"Dime los números del 11 al 20 con regletas."</div>
            <p>Eli dice los nombres y la estructura ("1 decena y 2 unidades = doce") sin ayuda.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Historia y geografía · narración libre <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"En tus palabras: ¿qué aprendimos de Dios esta semana? ¿Qué fue lo más importante para ti?"</div>
            <p>Eli narra libremente. Lo que diga revela qué se quedó. Mamá NO corrige el contenido teológico — solo escucha. Si Eli dice algo confuso, lo notará para refinar la próxima semana.</p>
            <p>Cierre: señala Colombia en el mapa. <em>"Aquí es donde Dios te puso a vivir esta semana, y la próxima, y la otra. Tu lugar exacto en el mundo de Dios."</em></p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C consolidada</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Olvida cadena. No lee texto nuevo. Escritura libre solo 1-2 frases con dificultad</td><td>Repetir contenido de S1 la próxima semana. Bajar dificultad de S2.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Cadena con apoyo. Lee texto nuevo silabeando. Escribe 3 frases recordando la historia</td><td>Continuar a S2 según plan. Reforzar lectura fluida.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Cadena perfecta. Lee texto nuevo con entonación. Escribe 4+ frases con voz propia</td><td>Subir el desafío en S2. Eli adelantada — adaptar contenido.</td></tr>
      </table>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: DIAGNÓSTICO DE LA EDUCADORA ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">📋</div>
    <div>
      <div class="lesson-ttl">Diagnóstico de la educadora · 8 preguntas clave</div>
      <div class="lesson-meta">15 min · Solo para mamá · Registrar en pestaña Registro</div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Para mamá — antes de responder</span></div>
      <div class="lec-mama">
        <p>Estas preguntas las contestas <strong>tú, no Eli</strong>. Son tu termómetro semanal. Hazlo el viernes en la tarde con calma, no apurada. Las respuestas alimentan la planificación de la próxima semana. Registra en la pestaña <em>"✏️ Registro"</em> de la app.</p>
        <p><strong>Antes de empezar:</strong> respira. La semana 1 nunca es perfecta. El objetivo no es que Eli haya cumplido todo — es que tú entiendas dónde está y qué ajustar.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📝</span><span class="lsec-ttl">Las 8 preguntas</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura</div>
            <p>¿Lee textos nuevos con comprensión y entonación, o todavía silabea palabras complejas? ¿Comprende lo que lee al primer paso?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura propia</div>
            <p>¿Puede escribir frases propias sin modelo? ¿Su composición del jueves ("Yo vivo en Bogotá...") fue 3+ frases coherentes propias?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Letras X e Y</div>
            <p>¿Cerró la X con dignidad? ¿Inició la Y sin necesidad de reexplicación del método? ¿Lista para la Z en S2?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Ordinales (pp. 77-78)</div>
            <p>¿Resolvió el problema de Tomás con explicación verbal del razonamiento? ¿O solo dijo la respuesta?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Números 11-20</div>
            <p>¿Comprende valor posicional (1 decena + X unidades) o solo memorizó nombres? ¿Puede responder verbal sin regletas?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Catecismo (cadena P11-P14)</div>
            <p>¿Logró la cadena completa hoy? ¿Articula que el conocer/poder/ver de Dios es cuidado, no amenaza?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">7</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Historia + naturaleza</div>
            <p>¿La hoja "Mi historia bajo la providencia de Dios" del martes refleja comprensión pactual o solo descripción familiar? ¿El frijol bebé generó asombro o solo curiosidad?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">8</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Ritmo para mamá</div>
            <p>¿El ritmo de 4 días fue sostenible PARA TI? ¿Hubo algún día que casi no llegas? ¿Qué necesitas ajustar para S2: tiempos, horarios, profundidad?</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Si solo tienes 5 minutos</span></div>
      <div class="minima">
        <div class="minima-ttl">Las 3 preguntas mínimas</div>
        <ol>
          <li>¿Qué área avanzó más esta semana?</li>
          <li>¿Qué área necesita más atención la próxima semana?</li>
          <li>¿Cómo está Eli emocionalmente con el ritmo? ¿Cómo estoy YO?</li>
        </ol>
      </div>
    </div>

  </div>
</div>`
};

// ── SEMANA 2 ──
const W2 = {
fm:`<div class="fm-section">
<div class="fm-title">Formación para mamá — Semana 2</div>
<div class="fm-sub">Creación · 5 días (martes a sábado) · Catecismo P12</div>

<!-- ═══ CARTA PASTORAL ═══ -->
<div class="fm-block" style="border-left:4px solid var(--gold);background:linear-gradient(135deg,#FFF8E8,#FAF0D0)">
<h4 style="color:var(--gold)">💛 Una carta para ti antes de empezar</h4>
<p>Amada esposa: leí tu registro de la Semana 1 y quiero detenerme antes de seguir. Hiciste algo grande. <strong>Elisabeth entendió los tres ángulos de la pregunta del catecismo</strong> — que Dios es Espíritu, que la mira como Padre que cuida, y que en la Biblia y en Jesús podemos conocerlo. Eso es <em>doctrina formándose en una niña de 6 años</em>, y eso es resultado directo de tu trabajo paciente, no del plan en papel.</p>
<p>El plan tiene cosas que ajustar — y tú me las dijiste con claridad: faltó el frijol porque no estaba comprado, faltó arte porque no había guía, faltó historia porque el tiempo no alcanzó. Eso no es tu falta. Es <strong>diseño del plan que tengo que mejorar</strong>. Esta semana 2 ya viene con todo eso corregido: lista de materiales al inicio, guía explícita para arte y naturaleza, sábado activado para recuperar pendientes.</p>
<p>Sobre el ritmo: vamos a probar <strong>5 días — de martes a sábado</strong>. El sábado funcionará como día de cierre suave: recuperar lo que no alcanzamos en la semana, hacer arte, observar la creación con calma. Si después de 2-3 semanas ves que 5 días te ahoga, volvemos a 4. Tú decides.</p>
<p>Y una cosa más: <strong>los frutos no dependen de ti</strong>. Tú siembras con fidelidad, Dios da el crecimiento. Eli salió de la primera semana sabiendo que Dios la mira — eso vale más que cualquier página completada. Sigue así.</p>
<p style="text-align:right;font-style:italic;color:var(--muted);margin-top:.8rem">— Tu esposo y compañero en esta tarea</p>
</div>

<!-- ═══ VERSÍCULO DE LA SEMANA — DESTACADO ═══ -->
<div class="fm-block" style="border-left:4px solid var(--gold);background:#fff8e6">
<h4 style="color:#8B6A00">📖 VERSÍCULO PARA MEMORIZAR esta semana</h4>
<div style="text-align:center;padding:14px 10px;background:#fff;border-radius:8px;border:1.5px dashed var(--gold);margin:8px 0">
<div style="font-family:Georgia,serif;font-size:1.2rem;font-style:italic;color:var(--ink);line-height:1.5">"Oh Señor, tú me has examinado y conocido."</div>
<div style="font-size:.85rem;color:var(--gold);font-weight:700;margin-top:6px">— Salmo 139:1</div>
</div>
<p style="font-size:.86rem"><strong>Plan de memorización (5 días):</strong></p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.85rem">
<li><strong>Martes:</strong> mamá lee el versículo 3 veces. Eli escucha. Hablar de qué significa "examinado".</li>
<li><strong>Miércoles:</strong> repetir 3 veces juntas. Eli lo dice solita después.</li>
<li><strong>Jueves:</strong> inventar una melodía simple para cantarlo (eso fija memoria mejor que repetirlo).</li>
<li><strong>Viernes:</strong> Eli lo dice de memoria, sin ayuda. ⭐ si lo logra.</li>
<li><strong>Sábado:</strong> escribirlo en el cuaderno (escritura propia, no copia).</li>
</ul>
<p style="font-size:.85rem;color:var(--muted);font-style:italic">Este versículo conecta directamente con la pregunta P12 del catecismo de esta semana: "¿Sabe Dios todas las cosas?" — Sí, Él te ha examinado y conocido.</p>
</div>

<!-- ═══ MATERIALES SEMANALES ═══ -->
<div class="fm-block" style="border-left:4px solid var(--rust);background:#fff5f0">
<h4 style="color:var(--rust)">🛒 Materiales que necesitas esta semana</h4>
<p style="font-size:.86rem;font-weight:600">Para no quedarte sin nada cuando llegue el día, revisa esto el <strong>lunes en la noche o domingo</strong>:</p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>Para todo:</strong> Biblia (NBLA), Catecismo CPN, cuadernos de Eli, lápices, colores, regletas Cuisenaire, ábaco</li>
<li><strong>Martes:</strong> hoja grande para terminar el árbol genealógico de S1 (con datos de abuelos)</li>
<li><strong>Miércoles:</strong> ⚠️ <strong>10-12 frijoles pinto en agua DESDE LA NOCHE DEL MARTES</strong>. Si los olvidaste, en agua caliente 2 horas también sirve</li>
<li><strong>Jueves:</strong> hoja blanca para diario de naturaleza · acuarelas o crayolas para arte · lupa si tienes</li>
<li><strong>Viernes:</strong> texto nuevo para evaluación de lectura (cualquier libro infantil que Eli no haya visto)</li>
<li><strong>Sábado:</strong> mapa de Colombia y del mundo (impreso o digital)</li>
</ul>
</div>

<!-- ═══ PLAN PERSONALIZADO PARA ELI (basado en S1) ═══ -->
<div class="fm-block" style="border-left:4px solid var(--violet);background:#faf0ff">
<h4 style="color:var(--violet)">🎯 Plan personalizado para Eli — esta semana</h4>
<p style="font-size:.86rem">Basado en tu registro de la Semana 1, esto es lo que necesita reforzar:</p>
<table style="width:100%;border-collapse:collapse;font-size:.84rem;margin-top:8px">
<tr style="background:rgba(107,63,170,.1)"><th style="text-align:left;padding:6px 8px">Área</th><th style="text-align:left;padding:6px 8px">Lo que viste en S1</th><th style="text-align:left;padding:6px 8px">Plan para S2</th></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Lectura</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">D — todavía no fluida</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Más tiempo de lectura simple diaria</strong> (no avanzar de letra). 15 min lectura en voz alta de Eli + mamá escucha sin corregir.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Escritura</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">D — frases más largas pero sin reglas</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Regla del día: el PUNTO FINAL.</strong> Toda frase termina con punto. Mamá señala UN solo punto faltante por día.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Matemáticas</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">C ordinales · cuesta antes/después</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Antes/después de cada número</strong> con regletas (martes). Luego empezar 11-20 paso a paso.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Catecismo</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">C P11 — los 3 ángulos</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>P12 esta semana</strong>: ¿Sabe Dios todas las cosas? Misma estructura de 3 ángulos.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Historia</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Sin terminar — falta genealogía</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Martes terminamos genealogía</strong>. Luego Génesis 1 (creación).</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Arte + Naturaleza</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Sin hacer (sin guía)</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Jueves dedicado a arte + diario de naturaleza</strong> con guía clara (ver bloque del día).</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Frijol bebé</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Sin hacer (sin frijoles)</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Miércoles</strong> — frijoles remojados desde el martes en la noche.</td></tr>
</table>
</div>

<!-- ═══ MARCO TEOLÓGICO DE LA SEMANA ═══ -->
<div class="fm-block">
<h4>¿Qué verdad bíblica gobierna esta semana?</h4>
<p>La Semana 1 enseñó que Dios <strong>nos mira</strong> aunque no lo veamos. La Semana 2 amplía esto: Dios <strong>nos conoce</strong>. La omnisciencia divina. Catecismo P12: "¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios."</p>
<p>Pero — y esto es lo central — <em>conocer no es vigilar</em>. Una mamá conoce a su bebé porque lo ama, no porque lo espía. Dios conoce a Eli porque la creó. Su saber todo de ella es cuidado paterno, no cámara de vigilancia. <strong>Eli debe terminar la semana sintiendo paz, no miedo.</strong></p>
<p>El versículo de memoria (Sal 139:1) y los textos de la semana (Job 24:23, Mt 10:29-30, Is 43:1) están elegidos para enseñar exactamente eso: Dios me ve, me conoce, me llama por mi nombre — y eso es seguridad.</p>
</div>

<!-- ═══ CÓMO ENSEÑAR ESTO ═══ -->
<div class="fm-block">
<h4>Cómo enseñar P12 a Eli — sin moralismo</h4>
<p>El peligro de "Dios sabe todo" es convertirlo en amenaza: "Dios sabe cuando te portas mal". Esa interpretación es <strong>moralismo funcional</strong> — no es el evangelio. Es ley sin gracia. Bullinger lo dice así: el conocimiento de Dios no es información que acumula, es <em>conocimiento creador</em>. Dios te conoce <strong>desde antes</strong>, no porque te observa.</p>
<p>Charlotte Mason agrega: a los 6 años, los niños no entienden bien abstracciones. Necesitan imágenes concretas. Por eso los textos de esta semana son visuales: Job y el camino (martes), los pajaritos y los cabellos contados (miércoles), Dios llamando por nombre (jueves). Esas imágenes se quedan.</p>
<p>Bavinck nos da el marco final: <strong>Dios no es Aladino</strong>. Su saber todo no nos da poder mágico. Es <em>cuidado paterno</em>. La omnisciencia nos lleva a la oración, no al miedo.</p>
</div>

<!-- ═══ EL RITMO DE 5 DÍAS ═══ -->
<div class="fm-block">
<h4>El nuevo ritmo: martes a sábado</h4>
<p>Esta semana probamos 5 días — tú me lo propusiste y tiene mucho sentido. Aquí el reparto:</p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>Martes:</strong> apertura fuerte. Catecismo P12 Día 1 + recuperar genealogía S1 + lectoescritura + mate ordinales finales</li>
<li><strong>Miércoles:</strong> Catecismo P12 Día 2 + lectoescritura + <strong>frijol bebé (experimento)</strong> + mate 11-20 introducción</li>
<li><strong>Jueves:</strong> Catecismo P12 Día 3 + <strong>arte + diario de naturaleza</strong> + lectura</li>
<li><strong>Viernes:</strong> Catecismo P12 Día 4 síntesis + portafolio + evaluación semanal</li>
<li><strong>Sábado:</strong> día suave — geografía (Colombia/mundo) + recuperación de cualquier pendiente + repaso versículo cantado + tiempo libre familiar</li>
</ul>
<p>El sábado <strong>no es escuela completa</strong>. Es 2 horas máximo en la mañana, con tono distinto: más conversación, más exploración, menos producción.</p>
</div>

<!-- ═══ BLOQUES EXTERNOS ═══ -->
<div class="fm-block">
<h4>Bloques externos a coordinar</h4>
<p>Tu observación: incluir <strong>clase de inglés y práctica de piano</strong> en el horario. Estos NO son currículo de Creciendo en el Pacto — son bloques externos. Sugerencia:</p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>🇬🇧 Inglés:</strong> 30 min · martes y jueves (después del bloque académico, antes del almuerzo). Si quieres recursos para inglés en casa, tenemos la carpeta Memoria Press (Phonics + literatura) — pero la activaremos a partir de S11 cuando lectoescritura español esté consolidada.</li>
<li><strong>🎹 Piano:</strong> 20 min diarios · prefiriblemente al final del día académico, como cierre creativo. No es académico — es formación de atención y belleza.</li>
</ul>
</div>

<!-- ═══ PLAN DE LECTURA INTENCIONAL ═══ -->
<div class="fm-block" style="border-left:4px solid var(--blue);background:#f0f6ff">
<h4 style="color:var(--blue)">📚 PLAN DE LECTURA · Semana 2 · qué leeremos esta semana</h4>

<p style="font-size:.92rem"><strong>Cada semana tendrá lectura intencional</strong> — nada de "encuentra algo que leer". Eli necesita progresión. Esta semana leerá dos cosas conectadas con la pregunta del catecismo (P12 · Dios sabe todas las cosas):</p>

<table style="width:100%;border-collapse:collapse;font-size:.86rem;margin-top:10px">
<tr style="background:rgba(42,96,144,.1)"><th style="text-align:left;padding:6px 8px;width:115px">Día</th><th style="text-align:left;padding:6px 8px">Qué se lee</th><th style="text-align:left;padding:6px 8px">Conexión</th></tr>

<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Martes</strong></td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Salmo 139:1-6 adaptado</strong> para niña 6 años (texto completo en bloque de lectoescritura del día)</td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Es el versículo de la semana en su contexto. Eli oye y narra.</td></tr>

<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Miércoles</strong></td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Fábula de Esopo: "La hormiga y la cigarra"</strong> (texto completo + ilustraciones en hoja generada por IA)</td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Conexión con previsión, sabiduría, orden — temas que Dios conoce desde antes (P12).</td></tr>

<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Jueves</strong></td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Génesis 1:1-19 en versión adaptada</strong> (texto completo en bloque de historia)</td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">El Dios que sabe todo es el mismo Dios que ordenó la creación.</td></tr>

<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Viernes</strong></td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Texto NUEVO de evaluación</strong> — un texto corto que Eli no ha visto (cuento de Beatrix Potter "Peter Rabbit" capítulo 1, o el cuento que tú escojas). El propósito: ver si lee fluido por primera vez sin ayuda.</td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Evaluación real de lectura fluida en texto desconocido.</td></tr>

<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Sábado</strong></td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Una historia bíblica adaptada · "Dios examina el corazón de Samuel"</strong> (1 Sam 16 simplificado) o un Salmo cantado</td>
<td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Cierre devocional. Dios conoce el corazón.</td></tr>
</table>

<p style="font-size:.86rem;margin-top:10px"><span class="lec-tag">Cómo lo conseguimos sin que tú lo busques:</span></p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>Salmo 139 adaptado</strong> — viene en el bloque de lectoescritura del martes. Texto ya escrito.</li>
<li><strong>Fábula de Esopo</strong> — el bloque de lectoescritura del miércoles trae un prompt para IA que genera la fábula adaptada con ilustraciones. Tú copias, pegas, generas, imprimes.</li>
<li><strong>Génesis 1 adaptado</strong> — viene en el bloque de historia del jueves. Texto ya escrito.</li>
<li><strong>Texto nuevo viernes</strong> — el bloque de lectoescritura del viernes trae prompt para IA que genera un texto fresco apropiado para Eli.</li>
<li><strong>Historia bíblica sábado</strong> — viene en el bloque del sábado, texto ya escrito.</li>
</ul>

<p style="font-size:.85rem;background:#fff;padding:10px 12px;border-radius:6px;border-left:3px solid var(--blue);margin-top:10px">
<strong>💡 Lo importante:</strong> tú NO tienes que buscar qué leer. Está todo aquí o se genera con IA en 2 minutos. La progresión está pensada: del versículo de memoria (P12) → fábula → narración bíblica → evaluación de lectura → cierre devocional.
</p>
</div>

<!-- ═══ GUÍA EXTENDIDA — DIARIO DE NATURALEZA ═══ -->
<div class="fm-block" style="border-left:4px solid var(--sage);background:#f0fff7">
<h4 style="color:var(--sage)">🌱 GUÍA COMPLETA · El Diario de Naturaleza · cómo empezar con Eli</h4>

<p style="font-size:.92rem"><strong>El "Nature Diary" o "Diario de Naturaleza" no es manualidad ni clase de ciencias.</strong> Es uno de los hábitos centrales de la educación tipo Charlotte Mason. Te resumo lo esencial de lo que Mason enseña en <em>Home Education Vol. 1</em>:</p>

<p><span class="lec-tag">Qué es realmente:</span> es <strong>entrenamiento de la atención reverente</strong>. Mason creía que enseñar a observar la creación con detalle y cuidado era enseñar a leer la Palabra de Dios escrita en la naturaleza (el "libro de la creación" como lo llamaron los Reformadores). Eli no está "haciendo ciencia" — está adorando con los ojos.</p>

<p><span class="lec-tag">Lo que necesitas tener listo:</span></p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li>Un <strong>cuaderno de tapa dura</strong> dedicado SOLO al diario de naturaleza. Papel grueso que sirva para escribir y para acuarela.</li>
<li>Lápiz, colores o acuarelas básicas.</li>
<li>Lupa pequeña (opcional pero excelente).</li>
<li>Una bolsa de tela para llevar tesoros si salen a caminar.</li>
</ul>

<p><span class="lec-tag">Cómo iniciar con Eli ESTA SEMANA (4 sesiones de 20 min):</span></p>

<ol style="margin:6px 0 6px 1.2rem;font-size:.87rem;line-height:1.8">
<li><strong>Primera entrada (Sábado de S2)</strong> — comienza con UNA cosa única:
  <ul style="margin-top:4px">
    <li>Salir al jardín, balcón o calle 5 minutos. Eli elige UNA cosa que le llame la atención (hoja, flor, piedra, hormiga).</li>
    <li>Volver, sentarse con calma. Mirar la cosa <strong>3-5 minutos en SILENCIO</strong>. Sin dibujar todavía.</li>
    <li>Hablar: "¿Qué forma tiene? ¿Cuántas partes? ¿Qué colores? ¿Qué la hace única?"</li>
    <li>Eli dibuja en su cuaderno. CON CALMA. CON DETALLE. Sin presionar el resultado.</li>
    <li>Tú escribes (o Eli dicta) UNA frase sobre lo que descubrió. Tipo: "Hoy 30 de mayo de 2026 vi una hoja con muchas líneas pequeñas como caminos."</li>
  </ul>
</li>

<li><strong>Mason aconseja (cita directa):</strong>
<div class="guia-bible" style="font-size:.85rem;margin:6px 0"><em>"Como pueda escribir él mismo, el diario de naturaleza es fuente de deleite. Cada paseo le da algo que anotar: tres ardillas en un alerce, un arrendajo cruzando un campo, una oruga subiendo a una ortiga, dónde encontró hiedra terrestre, cómo crece."</em></div>
Es decir: NO le pidas a Eli grandes hallazgos. Las cosas comunes son las que importan. Una hormiga sobre una piedra es ya material para una entrada.
</li>

<li><strong>Sobre el dibujo:</strong> Mason dice que <strong>un niño de 6 años puede dibujar un diente de león, una amapola, una margarita, un lirio CON SUS HOJAS</strong> impulsado por su deseo de representar lo que ve. NO le des direcciones técnicas ("usa este color"). Dale principios: "el morado se hace mezclando azul y rojo". Y déjala libre.</li>

<li><strong>Lo que NO debes hacer:</strong>
  <ul style="margin-top:4px">
    <li>NO corregir su dibujo. Lo que ella dibuje es válido.</li>
    <li>NO meter el diario en horario escolar rígido. Es paseo, observación, deleite.</li>
    <li>NO saturar la sesión. Mejor UNA cosa bien vista que 5 a medias.</li>
    <li>NO usar el diario como tarea o evaluación.</li>
  </ul>
</li>

<li><strong>Llevar también un CALENDARIO de naturaleza:</strong> en una página al inicio del cuaderno, ir anotando "el primer X que vi este año". Por ejemplo: "primera mariposa amarilla: 30 de mayo". Al año siguiente Eli sabrá cuándo y dónde buscarlas. Esto Mason lo recomienda explícitamente.</li>

<li><strong>Conexión pactual al cerrar cada sesión:</strong> "Dios hizo esta hoja/flor/piedra con cuidado. Cuando miramos así, estamos leyendo el libro de su creación. Génesis dice: 'Y vio Dios que era bueno.'"</li>
</ol>

<p style="font-size:.85rem;background:#fff;padding:10px 12px;border-radius:6px;border-left:3px solid var(--sage)">
<strong>💡 Idea concreta para esta semana:</strong> El frijol que se quedó pendiente de S1 — sembrarlo el martes en algodón mojado. Hacer un seguimiento en el diario de naturaleza: día 1 (martes) el frijol cerrado. Día 4 (viernes) ya empieza a hincharse. Día 5 (sábado) Eli dibuja lo que ve. Continúa los siguientes sábados — esto se convierte en una historia natural larga.
</p>
</div>

<!-- ═══ MATEMÁTICAS — INTEGRACIÓN SINGAPUR + MAMUT ═══ -->
<div class="fm-block" style="border-left:4px solid var(--rust);background:#fff5f0">
<h4 style="color:var(--rust)">🔢 GUÍA · Cómo integrar Singapur + Mamut · y reforzar antes/después</h4>

<p style="font-size:.92rem"><strong>El método:</strong> Singapur es el currículo PRINCIPAL (secuencia, manual del maestro, libro del alumno). Mamut es el currículo de PRÁCTICA (hojas reproducibles para refuerzo). Classical Conversations viene como APOYO de memoria. (La geografía se trabaja con NUESTROS cantos en español, no con Geography Songs en inglés.) No los mezcles todos en una sesión — los integras en distintos momentos.</p>

<p><span class="lec-tag">Flujo concreto para cada sesión de matemáticas (25-30 min):</span></p>

<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin-top:8px">
<tr style="background:rgba(185,64,32,.1)"><th style="text-align:left;padding:6px 8px;width:90px">Tiempo</th><th style="text-align:left;padding:6px 8px">Qué haces · qué libro</th></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>5 min</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Concreto con regletas Cuisenaire</strong> · sin libro · Eli toca y arma</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>10 min</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Singapur — Manual del Maestro</strong> · tú lees la introducción del concepto del día y haces la demostración guiada con Eli</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>8 min</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Singapur — Libro del Alumno</strong> · Eli hace los ejercicios de la página correspondiente (1 página por sesión, no más)</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>5 min</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Mamut · refuerzo</strong> · solo si Eli mostró comprensión clara. Una página de Sumar 1 o Valor Posicional 1 según el tema</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>2 min</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Cierre pactual</strong> · "Dios ordenó este mundo con números. Estamos aprendiendo su orden."</td></tr>
</table>

<p style="font-size:.85rem;margin-top:10px"><span class="lec-tag">REGLA DE ORO:</span> si Eli NO entendió en lo concreto con regletas, NO pasamos al libro de alumno y NO pasamos a Mamut. Volvemos al concreto. El libro y Mamut son <strong>consecuencia de comprensión</strong>, no instrumento para producirla.</p>

<p style="margin-top:14px"><span class="lec-tag">Sobre el 'antes y después' que cuesta a Eli:</span></p>

<p style="font-size:.86rem">Tu observación de S1 fue clave: Eli sabe contar pero no puede decir qué número viene <em>antes</em> o <em>después</em> de un número dado. Esto es <strong>secuencia numérica</strong>, fundamento de toda matemática. Si no lo tiene sólido, la suma no se puede construir.</p>

<p><strong>Plan de refuerzo concreto · 5 min al inicio de cada sesión esta semana:</strong></p>
<ol style="margin:6px 0 6px 1.2rem;font-size:.86rem;line-height:1.8">
<li><strong>Día 1 (martes):</strong> Pon en fila las regletas naranjas y blancas para formar los números 5, 6, 7, 8, 9, 10 (cada uno con su composición). Eli señala. Pregunta: "¿Qué número viene ANTES del 7?" "¿Qué número viene DESPUÉS del 8?". Si se traba, le señalas con la mano. NO le digas la respuesta.</li>

<li><strong>Día 2 (miércoles):</strong> Sin regletas, solo oral. "Si estás en el 4 y das un paso hacia atrás, ¿en qué número estás? Si das un paso adelante, ¿en qué número estás?" Eli camina físicamente (saca 4 dedos, los baja a 3 / sube a 5). El cuerpo enseña la secuencia.</li>

<li><strong>Día 3 (jueves):</strong> Juego del "vecino del número". Le dices "soy el 6 — ¿quiénes son mis vecinos?" (5 y 7). Si lo logra: "soy el 12 — ¿quiénes son mis vecinos?" (11 y 13). Etcétera.</li>

<li><strong>Día 4 (viernes):</strong> Aplicación con sumas. "Si tengo 7 y sumo 1, ¿qué obtengo? Eso es lo que viene DESPUÉS." Conexión: <em>sumar 1 = el siguiente número</em>. Esto es comprensión profunda, no solo cálculo.</li>

<li><strong>Día 5 (sábado):</strong> Repaso ligero en el desayuno: "dime los vecinos del 9... del 14... del 20." Sin libros. Conversación.</li>
</ol>

<p style="font-size:.85rem;background:#fff;padding:10px 12px;border-radius:6px;border-left:3px solid var(--rust);margin-top:10px">
<strong>📚 Páginas concretas para esta semana:</strong><br>
• Singapur 1A — Manual del Maestro pp. 80-83 (introducción a 11-20) + Libro del Alumno pp. 80-83<br>
• Mamut Valor Posicional 1 — pp. 3-5 (decenas y unidades pictórico)<br>
• Mamut Sumar 1 — solo si Singapur está sólido, p. 2-3 (sumas de 1 dígito) para reforzar
</p>
</div>

<!-- ═══ CLASSICAL CONVERSATIONS CICLO 2 — QUÉ USAR ═══ -->
<div class="fm-block" style="border-left:4px solid var(--gold);background:#fff8e6">
<h4 style="color:#8B6A00">🏛️ GUÍA · Classical Conversations Ciclo 2 · qué usar y cuándo</h4>

<p style="font-size:.92rem"><strong>Ojo:</strong> CC Ciclo 2 está diseñado para Foundations (4-12 años) en formato comunitario semanal. Para Eli en casa, no usamos todo el ciclo — usamos elementos <strong>como apoyo de memoria</strong>, no como currículo rector.</p>

<p><span class="lec-tag">Lo que SÍ usaremos de CC Ciclo 2 esta semana:</span></p>

<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin-top:8px">
<tr style="background:rgba(196,154,42,.15)"><th style="text-align:left;padding:6px 8px;width:140px">Área CC</th><th style="text-align:left;padding:6px 8px">Cómo lo integramos en S2</th></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Timeline · Historia</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Las primeras tarjetas del Timeline (Creación · Caída · Noé · Babel · Abraham). Esta semana usar SOLO la tarjeta de <strong>Creación</strong> — Eli la ve, hablan de ella, la cuelgan en la pared. Una tarjeta por semana. Para sábado.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Historia memory work</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Cuando llegues a la sentencia de memoria del Cycle 2 — por ejemplo "1607 — Jamestown" o las que correspondan — NO las introduzcas todavía. Eli necesita primero anclar la historia bíblica. Las sentencias de CC Ciclo 2 son para SEMESTRE 2 (después de S20).</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Geografía</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Nuestro canto de geografía en español</strong> (los continentes) — cantarlo el sábado mientras señalan el mapa. Una canción por mes. Ver §9 Geografía. (Geography Songs, en inglés, queda solo como referencia.)</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Latín</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">No introducir todavía. Activaremos Prima Latina (Memoria Press) a partir de S20.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Ciencias</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">El currículo de ciencias para S2 viene de tu carpeta "Spanish Foundations Science Experiments" + Charlotte Mason (diario de naturaleza). NO de CC todavía.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Inglés / Math facts CC</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">No activarlos ahora. Esto es para semanas tardías.</td></tr>
</table>

<p style="font-size:.86rem;margin-top:10px"><span class="lec-tag">Geografía · cómo trabajarla (en español, nuestro):</span></p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>Mapa del pacto:</strong> un mapa mundi en la pared; cada semana marca dónde ocurre la historia bíblica + un sticker fijo en Colombia.</li>
<li><strong>Canto de los continentes</strong> (nuestro): "América, Europa, Asia, / África, Oceanía, Antártida — / seis continentes hizo Dios: / ¡toda la tierra es del Señor!". 5 min el sábado señalando el mapa; sin exigir memorización, viene sola con repetición.</li>
<li>El PDF "Geography Songs" (inglés) queda solo como referencia; NO se usa con Eli (la familia no habla inglés).</li>
</ul>

<p style="font-size:.86rem;margin-top:10px"><span class="lec-tag">Las tarjetas de memoria (memory cards) de CC:</span></p>
<p style="font-size:.86rem">Estas son las tarjetas con dibujos que sirven como ANCLAS visuales para conceptos. Útil pero NO esencial este año. <strong>Mi recomendación:</strong> abre el PDF "Clasical Siclo 2b.pdf" que tienes, revisa qué tarjetas hay, y selecciona MÁXIMO 5 para todo el año — relacionadas con eventos bíblicos que veremos (Creación, Caída, Abraham, Éxodo, Cristo). Las pegas en la pared. Cuando estés enseñando ese tema, las señalas. Eso es todo.</p>
</div>

<!-- ═══ CÓMO USAR CLAUDE IA EN CLASE ═══ -->
<div class="fm-block" style="border-left:4px solid var(--violet);background:#faf0ff">
<h4 style="color:var(--violet)">🤖 GUÍA · Cómo usar Claude IA en la clase con Eli (sin reemplazar tu rol)</h4>

<p style="font-size:.92rem"><strong>Sí, Claude puede ser tu compañero pedagógico</strong>. No reemplaza tu papel de madre-maestra — pero te quita carga en cosas operativas (generar hojas, ideas de actividades, ejemplos de problemas, traducir textos, explicar conceptos). Aquí 5 maneras concretas de usarlo:</p>

<p><span class="lec-tag">1. Para generar hojas de trabajo en el momento:</span></p>
<p style="font-size:.86rem">Ya cada día de la app tiene un botón "Copiar prompt para IA". Tú lo pegas en Claude.ai (o ChatGPT, Nano Banana). La IA te genera la hoja. La imprimes. La usas con Eli. <strong>Tiempo total: 2-3 minutos.</strong></p>

<p><span class="lec-tag">2. Para pedir ideas cuando te quedas sin recursos:</span></p>
<div style="background:#fff;padding:10px 12px;border-radius:6px;font-family:monospace;font-size:.78rem;margin:6px 0">
Hola Claude. Mi hija Eli de 6 años está aprendiendo "antes y después" en números cardinales y le cuesta. ¿Me das 5 juegos sencillos que pueda hacer con ella en casa, sin material especial, en 5-10 min cada uno? Marco reformado, sin moralismo.
</div>

<p><span class="lec-tag">3. Para preparar diálogos pastorales:</span></p>
<div style="background:#fff;padding:10px 12px;border-radius:6px;font-family:monospace;font-size:.78rem;margin:6px 0">
Hola Claude. Hoy Eli (6 años) me preguntó "¿si Dios me ve siempre, también ve cuando hago algo malo?". ¿Cómo le respondo desde un marco reformado, sin moralismo, mostrando el evangelio? Dame 3 frases que pueda decirle.
</div>

<p><span class="lec-tag">4. Para traducir/adaptar textos en inglés:</span></p>
<div style="background:#fff;padding:10px 12px;border-radius:6px;font-family:monospace;font-size:.78rem;margin:6px 0">
Hola Claude. Tengo este texto en inglés de Memoria Press: [pega el texto]. Por favor adáptalo a español para una niña de 6 años, marco reformado. No traducción literal — adaptación que conserve la enseñanza.
</div>

<p><span class="lec-tag">5. Para entender un capítulo bíblico antes de enseñarlo:</span></p>
<div style="background:#fff;padding:10px 12px;border-radius:6px;font-family:monospace;font-size:.78rem;margin:6px 0">
Hola Claude. Voy a leer con Eli Génesis 1 esta semana. ¿Me explicas en 5 puntos qué debe quedar claro para una niña de 6 años, desde marco reformado de Bavinck/Van Til? Sin teología densa, pero sin moralismo.
</div>

<p style="margin-top:10px;font-size:.86rem"><span class="lec-tag">⚠️ Límite importante:</span> Claude NO reemplaza la oración, ni el catecismo, ni la conversación contigo. Es <strong>herramienta operativa</strong>, no autoridad espiritual. Tú sigues siendo la maestra. La Biblia sigue siendo la fuente.</p>

<p style="font-size:.85rem;background:#fff;padding:10px 12px;border-radius:6px;border-left:3px solid var(--violet);margin-top:10px">
<strong>💡 Sugerencia práctica:</strong> deja una pestaña de Claude.ai abierta durante la clase (en tu celular o tablet). Cuando Eli pregunte algo que no sabes responder bien — tipo "¿cómo sabe Dios todo?" — escribe rápido la pregunta en Claude pidiendo "respuesta para niña de 6 años, reformado, sin moralismo". Lees, respondes. Eli no nota que usaste IA — y tú no quedas en blanco.
</p>
</div>

<!-- ═══ ORACIÓN ═══ -->
<div class="fm-oracion"><div class="fo-lbl">Oración antes de enseñar</div>
<p>Señor, gracias por la primera semana — por lo que sí pasó y por lo que no alcanzamos. Esta semana enséñame a mostrar a Eli que tu saberlo todo es tu cuidado, no tu vigilancia. Dame paciencia con los detalles que se me escapan, con el tiempo que se me acaba, con las cosas que no salen como las planeé. Y dale a Eli un corazón que descanse en saber que tú la conoces y la amas. En el nombre de Jesús. Amén.</p>
</div>
</div>`,

martes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P12 · Día 1 — Apertura y ancla ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P12 · Día 1 — Apertura y ancla</div>
      <div class="lesson-meta">12–15 min · ¿Sabe Dios todas las cosas? · Job 24:23</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min · antes de enseñar</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> P12 enseña la <strong>omnisciencia divina</strong>. Pero el peligro es enorme: convertir "Dios sabe todo" en "Dios sabe cuando te portas mal" — y eso es ley sin evangelio, vigilancia sin paternidad. La respuesta del CPN dice "ninguna cosa puede ocultarse de la vista de Dios" — pero el matiz pactual es que <em>no podemos escondernos porque Él es Padre</em>, no porque Él es cámara.</p>
        <p><span class="lec-tag">Conexión con P11:</span> P11 enseñó que aunque no podemos verlo, Él nos mira continuamente. P12 ahora amplifica eso: no solo nos ve — sabe TODO. Eli está aprendiendo capa por capa: Dios mira → Dios conoce → Dios puede (P13 viene la próxima semana) → todo esto lo aprendo en su Palabra (P14).</p>
        <p><span class="lec-tag">Bavinck lo enseña así:</span> Dios no conoce las cosas como espectador que descubre. Las conoce porque las decretó y las sostiene. Su omnisciencia no es información acumulada — es conocimiento creador. Eli no es <strong>vigilada</strong>: es <strong>conocida desde antes</strong>.</p>
        <p><span class="lec-tag">Job 24:23 como texto principal hoy:</span> "El les da seguridad y se afirman, y sus ojos están sobre los caminos de ellos." Job — en medio del sufrimiento — confiesa que Dios <strong>ve los caminos</strong> de los hombres. La omnisciencia aparece aquí no como amenaza, sino como aliento de confianza ante la prueba. <em>Dios ve mi camino. Aunque yo no lo entienda, Él lo conoce.</em></p>
        <p><span class="lec-tag">Peligro a evitar:</span> que la clase suene como "no puedes esconder tus malacrianzas". Eso es moralismo. La verdad pactual es: "Eli, tú puedes vivir tranquila porque hay Alguien que conoce tu camino entero — antes, ahora y después."</p>
        <p><span class="lec-tag">Lo que estás formando:</span> confianza en la omnisciencia de Dios como cuidado paterno, no vigilancia. Hábito mental: "Dios me conoce → Dios me cuida".</p>
        <div class="lec-bible">"El les da seguridad y se afirman, y sus ojos están sobre los caminos de ellos." — Job 24:23 &nbsp;·&nbsp; "Ni uno de ellos cae a tierra sin vuestro Padre. Pues aun vuestros cabellos están todos contados." — Mateo 10:29-30 (lo veremos mañana)</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que Eli aprenda hoy que conocerla todo es tu manera de cuidarla. Que tu omnisciencia sea su descanso, no su miedo. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">12–15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · El escondite imposible <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, ¿alguna vez has tratado de esconder algo y mamá lo encontró igual? ¿Qué pasa cuando juegas a las escondidas? Mamá te encuentra porque sabe los lugares. Pero hoy aprendemos algo más grande: hay Alguien que sabe TODO, todo, todo. Nada se le esconde."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de P11 + introducir P12 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Recuerda la P y R de la semana pasada:</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.</div>
            <p>Luego introduce P12 — léela despacio:</p>
            <div class="guia-say">P12: ¿Sabe Dios todas las cosas?<br>R: Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
            <p>Repite tres veces juntas. Segunda vez: Eli repite solo la R. Tercera: Eli la dice sola.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura bíblica · Job 24:23 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Cuéntale a Eli brevemente quién era Job:</p>
            <div class="guia-say">"Job era un hombre bueno que vivió hace mucho. Pasó por tiempos muy difíciles — perdió sus animales, su casa, sus hijos. Pero Job sabía algo importante de Dios."</div>
            <p>Lee Job 24:23:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Job 24:23</span>"El les da seguridad y se afirman, y sus ojos están sobre los caminos de ellos."</div>
            <div class="guia-say">"¿Ves? Aún cuando Job estaba pasando algo difícil, sabía que los ojos de Dios estaban sobre su camino. Dios sabía dónde estaba Job, cómo se sentía, qué necesitaba. Eso es saber TODO."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Conocer es cuidar <span class="edc-mark D">D</span> · 3 min</div>
            <div class="guia-say">"Hay dos maneras de saber cosas de una persona. Un policía sabe cosas de los criminales — los vigila porque les puede pasar algo malo. Pero una mamá sabe cosas de su hija — y ese saber es <strong>cuidado</strong>. Dios te conoce como Padre, no como policía. Sabe lo que sientes, lo que necesitas, lo que te asusta — y eso es buena noticia."</div>
            <p>Pregunta clave (pausa larga):</p>
            <div class="guia-say">"¿Te asusta que Dios sepa todo de ti?... ¿O te da paz?"</div>
            <p>Escucha la respuesta. Si dice "me asusta", no la corrijas duro — solo añade:</p>
            <div class="guia-say">"A veces nos asusta porque pensamos que nos va a regañar. Pero la Biblia dice que su mirada es para cuidarnos, no para acusarnos. Vamos a estar pensando en eso toda la semana."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación pactual <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Porque Dios sabe todo, cuando tú oras no le estás contando algo nuevo. Le estás respondiendo a Alguien que ya conoce. Cuando tienes miedo en la noche, Él ya sabe. Cuando estás contenta, Él ya sabe. Cuando estás triste, Él ya sabe. La oración es responderle, no informarle."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cierre <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Señor, gracias porque sabes todo. Gracias porque conoces el camino de Eli — antes, ahora y después. Que ese saber sea su descanso. Amén."</div>
            <p>Cierra repitiendo la P y R una vez más con Eli.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No recuerda la R. Confunde "Dios sabe todo" con amenaza ("me va a regañar")</td><td>Repetir P y R 3 veces más. Énfasis: <em>"Saber es cuidar, no espiar."</em></td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la R pero no articula que el saber de Dios es bueno</td><td>Pregunta: <em>"¿Es bueno o malo que Dios sepa lo que sientes?"</em> Acompáñala.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita y dice que ser conocida por Dios es paz, no miedo</td><td>Registrar. Lista para Mt 10:29-30 (pajaritos) mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional · la grande va el viernes</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">La hoja grande de portafolio se hace el viernes. Hoy basta con cuaderno o una hoja simple.</p>
        <p>Sugerencia rápida sin IA: que Eli dibuje en su cuaderno "los ojos de Dios sobre mi camino" y escriba debajo: <em>"Dios conoce mi camino."</em></p>
        <p style="margin-top:8px">Si quieres una hoja extra hoy:</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado.

CONTEXTO:
- Estamos en Semana 2, Día 1, Catecismo CPN P12
- Eli ya aprendió la semana pasada P11 ("Yo no puedo verlo, pero Él me mira continuamente")
- Hoy aprende P12:
  P: ¿Sabe Dios todas las cosas?
  R: Sí, ninguna cosa puede ocultarse de la vista de Dios.
- Texto ancla de hoy: Job 24:23

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado: "Dios sabe todas las cosas"
2. Cinta superior con la R en letra grande: "Ninguna cosa puede ocultarse de la vista de Dios"
3. Caja con Job 24:23: "Sus ojos están sobre los caminos de ellos. — Job 24:23"
4. Recuadro 10×10 cm: "Dibuja un camino — un camino donde Dios siempre te ve"
5. Pregunta abierta con 4 líneas: "¿Es bueno o asustador que Dios sepa todo de ti? ¿Por qué?"
6. Cinta inferior dorada con: "Tú me has examinado y conocido. — Salmo 139:1"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Color del tema: violeta (#6B3FAA) con cintas doradas (#C49A2A)
- Tipografía: Georgia para títulos, sans-serif clara para texto
- Letra mín. 16pt; 22pt para la R del catecismo
- Estilo digno, reverente, sin caricaturas
- Si hay decoración: un camino estilizado sutil cruzando la hoja como motivo de fondo

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con espacios en blanco visibles para escritura y dibujo.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repasar P11 (ya la sabe)</li>
          <li>Introducir P12 — repetir 3 veces juntas</li>
          <li>Leer Job 24:23 una vez</li>
          <li>Una frase: <em>"Dios sabe tu camino, y eso es cuidado."</em></li>
          <li>Listo. (Mt 10:29-30 y aplicación profunda son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA · Salmo 139 narrado ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · Salmo 139 — Dios me conoce</div>
      <div class="lesson-meta">35 min · Lectura + narración + escritura propia</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Cuaderno</span><span class="mat">Lápiz</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El plan de hoy:</span> Eli escucha el Salmo 139:1-6 adaptado, lo narra con sus palabras, y escribe 3 frases propias sobre "lo que Dios sabe de mí". Esto es <strong>Charlotte Mason puro</strong>: escuchar, narrar, escribir. La narración es prueba de comprensión — no preguntas con respuesta correcta, sino articulación libre.</p>
        <p><span class="lec-tag">Conexión con el catecismo:</span> hoy Eli aprendió P12 (Dios sabe todas las cosas). El Salmo 139 es <em>la versión poética de P12</em>. El catecismo enseña la doctrina; el Salmo la canta.</p>
        <p><span class="lec-tag">Regla del día (gramática):</span> el <strong>punto final</strong>. Toda frase termina con punto. Mamá señala UN solo punto faltante por sesión.</p>
        <p><span class="lec-tag">Sobre la fluidez de Eli:</span> tu feedback de S1 dijo que aún silabea. Hoy ELLA NO lee — mamá lee. Eli solo escucha y narra. Eso quita presión y forma comprensión.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">35 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, hoy te voy a leer un poema-oración del rey David. Se llama Salmo 139. Habla exactamente de lo que aprendimos hoy en catecismo: que Dios sabe TODO de nosotros. Tú solo escucha — no necesitas leer."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura del Salmo 139:1-6 adaptado · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá lee EN VOZ ALTA, despacio, con pausas. Eli escucha con ojos cerrados si quiere:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Salmo 139:1-6 · adaptado para 6 años</span>
"Señor, tú me conoces por completo.<br>
Tú sabes cuándo me siento y cuándo me paro.<br>
Aun desde lejos, tú entiendes lo que pienso.<br>
Tú me ves cuando salgo a caminar<br>
y cuando descanso en mi cama.<br>
Sabes muy bien todo lo que hago.<br><br>
Antes de que yo abra la boca para hablar,<br>
tú ya sabes lo que voy a decir.<br>
Tú me rodeas por todos lados;<br>
me cuidas con tu mano.<br><br>
Saber tanto de mí es algo demasiado maravilloso —<br>
es tan alto que no lo puedo entender."
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración por Eli · 7 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Ahora cuéntame con tus palabras lo que entendiste del salmo. No tienes que recordar todo. Solo lo que se te quedó."</div>
            <p>Eli narra. Mamá NO interrumpe ni corrige. Mamá escucha y, al terminar, hace UNA pregunta:</p>
            <div class="guia-say">"¿Qué es lo que más te asombró que Dios sepa de ti?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura propia · 15 min <span class="edc-mark C">C</span></div>
            <p>Eli abre su cuaderno. Mamá dicta UNA sola instrucción:</p>
            <div class="guia-say">"Escribe 3 frases sobre cosas que Dios sabe de ti. Cada frase con punto al final. Por ejemplo: 'Dios sabe que yo amo a mi mamá.'"</div>
            <p><strong>Mamá NO escribe el ejemplo</strong> — lo dice oralmente. Eli escribe sola. Mamá puede hacer otra cosa al lado (no supervisar).</p>
            <p>Al terminar, mamá señala SOLO una cosa: <strong>"¿pusiste el punto al final de cada frase?"</strong> Si falta uno, lo agrega Eli, no mamá.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Las palabras que escribiste son tuyas. Y Dios YA las conocía antes de que tú las escribieras — porque Él sabe todo de ti, incluso lo que vas a decir. Eso es lo que canta el salmo."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No narra el salmo · solo repite frases sueltas · escribe 1 frase con ayuda</td><td>Releer mamá despacio. Eli responde a preguntas concretas, no narración libre.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Narra 2-3 ideas clave del salmo · escribe 2 frases con punto, 1 sin</td><td>Normal. Marcar el punto faltante. Felicitar la narración.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Narra el sentido del salmo · escribe 3 frases con punto final · una de las frases es teológicamente correcta</td><td>Registrar como evidencia. Guardar el cuaderno con la fecha.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Mamá lee Sal 139:1-6 adaptado UNA vez</li>
          <li>Eli narra lo que recuerda (3 min sin presión)</li>
          <li>Eli escribe UNA frase propia: "Dios sabe que yo ___"</li>
          <li>Punto al final</li>
          <li>Listo. (Las 3 frases son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: HISTORIA · Cerrar genealogía + Anuncio Génesis 1 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">📜</div>
    <div>
      <div class="lesson-ttl">Historia Providencial · Cerrar genealogía + anuncio de Génesis 1</div>
      <div class="lesson-meta">25 min · Recuperación S1 + anuncio del tema de la semana</div>
      <div class="mats"><span class="mat">Hoja grande con árbol genealógico S1</span><span class="mat">Datos de los abuelos</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p>En S1 quedó pendiente terminar el árbol genealógico — anotar nombres, lugares y fechas de los abuelos. Hoy lo cerramos. Es <strong>recuperación de S1</strong>, no contenido nuevo. Después de cerrar, mamá anuncia lo que viene esta semana (Génesis 1) — solo el anuncio, sin entrar al texto. Eso se hace mañana.</p>
        <p><span class="lec-tag">Por qué importa cerrarlo:</span> el árbol genealógico de Eli no es manualidad bonita — es teología en concreto. Cada eslabón es providencia. Cerrarlo bien es importante porque será su primer documento de portafolio del año.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Sacar el árbol de S1 · 2 min</div>
            <p>Mamá saca la hoja grande del árbol genealógico que empezaron en S1. La pone sobre la mesa con Eli.</p>
            <div class="guia-say">"Eli, esto es lo que empezamos la semana pasada. Hoy lo terminamos."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Completar los datos · 15 min</div>
            <p>Para cada uno de los 4 abuelos, completar (mamá tiene los datos reales, Eli escribe con su mano):</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li><strong>Abuelos paternos</strong> (papás de Andrés): nombres completos, ciudad de nacimiento, año aproximado</li>
              <li><strong>Abuelos maternos</strong> (papás de mamá): nombres completos, ciudad de nacimiento, año aproximado</li>
            </ul>
            <p>Si los datos no son exactos, no importa — escribir el dato aproximado. Lo importante es el ejercicio de poner cara/nombre/lugar.</p>
            <p>Eli puede pegar fotos pequeñas si las tienen (o dibujar caritas si no).</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión pactual · 3 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Mira este árbol. Cada persona aquí Dios la conocía antes de nacer. Tu abuelo Y, tu abuela X — Dios sabía sus nombres antes de que existieran. Y Dios los puso en el lugar exacto para que se conocieran y tuvieran hijos. Y esos hijos somos tu papá y yo. Y por eso TÚ estás aquí. Nada de esto es accidente. Es providencia."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Anuncio del tema de la semana · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Esta semana en historia vamos a leer Génesis 1 — el primer capítulo de toda la Biblia. Es donde Dios crea TODO lo que existe. Cielo, tierra, mar, plantas, animales, personas. Empieza con la frase más importante de toda la Biblia: 'En el principio creó Dios los cielos y la tierra.' Mañana empezamos."</div>
            <p>Eli puede dibujar en la parte de atrás del árbol algo simple: "lo que creo que pasa en el día 1 de la creación".</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Guardar en portafolio · 2 min</div>
            <p>Mamá pone el árbol completo en el sobre del portafolio (carpeta de S1-S2). Le pone fecha por detrás: "Mi árbol bajo la providencia de Dios · familia Espinoza · cerrado 26 may 2026."</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No conecta abuelos con providencia · solo completa datos</td><td>Repetir la frase pactual. Sin presión.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Completa árbol · entiende que sus abuelos son parte de su historia</td><td>Normal. Guardar en portafolio.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula con sus palabras "Dios me puso aquí, esto no es accidente"</td><td>Registrar como C. Evidencia destacada.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Sacar el árbol de S1</li>
          <li>Completar mínimo los 4 nombres de abuelos (sin lugar/fecha si no se sabe)</li>
          <li>Una frase: <em>"Dios conocía a cada uno antes de nacer. Por eso estás aquí."</em></li>
          <li>Guardar en portafolio</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: MATEMÁTICAS · Antes y después con regletas ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · Antes y después + introducción 11-15</div>
      <div class="lesson-meta">30 min · Ejercicios completos en la app · sin libros externos</div>
      <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Cuaderno cuadriculado</span><span class="mat">Lápiz</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El objetivo de hoy:</span> Eli debe poder decir el número <strong>vecino antes</strong> y <strong>vecino después</strong> de cualquier número del 0 al 15. Esto es secuencia numérica — fundamento de la suma. Tu feedback de S1 dijo que aquí Eli tiene dificultad. Esta semana entera trabajamos esto.</p>
        <p><span class="lec-tag">Método (Singapur C-P-A):</span> hoy concreto (regletas tocadas y movidas) + pictórico al final (cuaderno cuadriculado). Mañana paso al pictórico completo. Pasado mañana ya verbal. <strong>No abro Singapur ni Mamut — todo está aquí.</strong></p>
        <p><span class="lec-tag">Regla de oro:</span> si Eli responde sin pensar (correctamente), es porque entendió. Si se traba, NO le digas la respuesta. Le señalas la regleta del número y dejas que su mano encuentre los vecinos.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">30 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Calentamiento · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá pone en fila las regletas 1-10 (blanca, roja, verde clara, rosa, amarilla, verde oscura, negra, marrón, azul, naranja). Eli las toca con el dedo y dice sus nombres de uno en uno.</p>
            <div class="guia-say">"Toca cada regleta y dime su número."</div>
            <p>Eli dice: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Antes y después · oral con regletas · 10 min <span class="edc-mark D">D</span></div>
            <p>Las regletas siguen en fila. Mamá hace estas 10 preguntas, una por una. Eli señala con el dedo Y dice el número:</p>
            <div class="guia-bible" style="font-size:.88rem;line-height:1.8">
<span class="guia-bible-ref">Banco de preguntas · 10 preguntas</span>
1. ¿Qué número viene <strong>antes</strong> del 7? &nbsp;&nbsp; <em style="color:var(--muted)">[6]</em><br>
2. ¿Qué número viene <strong>después</strong> del 4? &nbsp;&nbsp; <em style="color:var(--muted)">[5]</em><br>
3. ¿Qué número viene <strong>antes</strong> del 10? &nbsp;&nbsp; <em style="color:var(--muted)">[9]</em><br>
4. ¿Qué número viene <strong>después</strong> del 6? &nbsp;&nbsp; <em style="color:var(--muted)">[7]</em><br>
5. ¿Qué número viene <strong>antes</strong> del 3? &nbsp;&nbsp; <em style="color:var(--muted)">[2]</em><br>
6. ¿Qué número viene <strong>después</strong> del 8? &nbsp;&nbsp; <em style="color:var(--muted)">[9]</em><br>
7. ¿Qué número viene <strong>antes</strong> del 5? &nbsp;&nbsp; <em style="color:var(--muted)">[4]</em><br>
8. ¿Qué número viene <strong>después</strong> del 1? &nbsp;&nbsp; <em style="color:var(--muted)">[2]</em><br>
9. ¿Qué número viene <strong>antes</strong> del 9? &nbsp;&nbsp; <em style="color:var(--muted)">[8]</em><br>
10. ¿Qué número viene <strong>después</strong> del 3? &nbsp;&nbsp; <em style="color:var(--muted)">[4]</em>
            </div>
            <p style="font-size:.85rem;color:var(--muted)">Las respuestas entre corchetes son para mamá. NO se las digas a Eli.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Introducción 11-15 con regletas · 8 min <span class="edc-mark D">D</span></div>
            <p>Mamá pone <strong>una regleta naranja (10) + una blanca (1)</strong> juntas:</p>
            <div class="guia-say">"Mira: la naranja vale 10. Y esta blanca vale 1. Si las juntamos: 10 más 1 es ONCE."</div>
            <p>Mamá agrega una blanca más:</p>
            <div class="guia-say">"Naranja (10) más dos blancas: DOCE."</div>
            <p>Continúa hasta 15. Eli VE y oye cada número:</p>
            <div class="guia-bible" style="font-size:.9rem;line-height:1.7">
🟧 + ⬜ = 11<br>
🟧 + ⬜⬜ = 12<br>
🟧 + ⬜⬜⬜ = 13<br>
🟧 + ⬜⬜⬜⬜ = 14<br>
🟧 + ⬜⬜⬜⬜⬜ = 15
            </div>
            <p>Mamá repite 2 veces toda la secuencia. Después le pide a Eli que ARME cada número con sus manos. Sin papel todavía.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pictórico en cuaderno · 5 min <span class="edc-mark C">C</span></div>
            <p>Eli abre cuaderno cuadriculado. Mamá dicta:</p>
            <div class="guia-say">"Dibuja en cuadritos: para el 11 dibujas una barra larga de 10 cuadritos + 1 cuadrito separado. Pones el número 11 al lado. Hacemos solo 3: el 11, el 13 y el 15."</div>
            <p>Si Eli necesita modelo, mamá hace el 11 en su propia hoja. Eli copia el método. Después hace el 13 y el 15 sola.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Los números tienen orden. Antes y después. Dios ordenó así el mundo. Hasta los números tienen su historia: cada uno tiene un vecino antes y un vecino después. Eso es el orden de Dios."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Se traba en la mayoría de las preguntas antes/después · necesita ver regletas siempre</td><td>Repetir mañana solo el banco de preguntas. NO avanzar al 11-15 todavía.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Responde antes/después con regletas en mano · arma 11-15 con apoyo</td><td>Normal · esto es esperado.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Responde antes/después sin tocar regletas · arma 11-15 sola</td><td>Mañana avanza a pictórico completo (sin regletas físicas).</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional · si quieres hoja extra de práctica</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">Solo si Eli quiere más práctica. Los ejercicios de la app ya bastan para hoy.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja Antes/Después</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible de matemáticas en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con metodología Singapur y regletas Cuisenaire.

TEMA:
Antes y después de un número · números cardinales 0-15.

PROPÓSITO:
Eli necesita reforzar la secuencia numérica (qué viene antes y después de cada número). Esta hoja la ayuda a practicar.

CONTENIDO DE LA HOJA (A4 vertical, una página):

ENCABEZADO:
"Antes y después · los vecinos de cada número"

SECCIÓN 1 · "Vecinos de los pequeños" (6 ejercicios):
Para cada número entre 1 y 10, dibujar 3 casitas en fila — la del medio tiene el número, las de los lados están vacías para que Eli escriba el vecino antes y después.
Ejemplos: __ [5] __ · __ [8] __ · __ [3] __ · __ [7] __ · __ [9] __ · __ [4] __

SECCIÓN 2 · "Vecinos de los grandes" (4 ejercicios, números 11-15):
Igual formato pero con números más grandes: __ [11] __ · __ [13] __ · __ [12] __ · __ [14] __

SECCIÓN 3 · "Yo dibujo el número" (3 ejercicios):
3 cuadros con un número grande (12, 14, 15). Junto a cada uno, espacio cuadriculado donde Eli dibuja con regletas (barra naranja larga = 10, cuadritos blancos = 1).

SECCIÓN 4 · "Yo descubro":
Pregunta: "¿Qué número viene después del 9? ¿Y después del 10?"
Líneas guía para responder.

FORMATO:
- A4 vertical.
- Fondo crema #FAF6F0.
- Color principal rojo cálido #B94020.
- Regleta naranja #F39C2A.
- Tipografía: Georgia para títulos, sans-serif clara para texto. Mín. 18 pt.
- Casas/cuadros grandes y claros.
- Espacio amplio para escribir.

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escribir.

Si la IA genera HTML:
Artifact con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Regletas en fila 1-10. Eli las toca y nombra.</li>
          <li>Solo 5 preguntas antes/después (no 10). Las 5 primeras del banco.</li>
          <li>Mamá enseña 11 = 🟧 + ⬜. Eli arma.</li>
          <li>Listo. (12-15 y pictórico son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>`,

miercoles:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P12 · Día 2 — "Hasta los pajaritos" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P12 · Día 2 — "Hasta los pajaritos"</div>
      <div class="lesson-meta">10–12 min · Profundización con Mateo 10:29-30</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> ayer Job nos enseñó que los ojos de Dios están sobre los caminos de los hombres. Hoy Jesús lo lleva más profundo: el Padre conoce hasta a los pajaritos y los cabellos de la cabeza. Si Dios conoce algo tan pequeño como un pajarito que cae a tierra, ¿cuánto más a sus hijos del pacto?</p>
        <p><span class="lec-tag">Mateo 10:29-30 en su contexto:</span> Jesús está enviando a los doce a predicar. Les advierte de persecución. En medio del miedo y la prueba, les dice: "no temáis". ¿Por qué? Porque el Padre que conoce a los pajaritos los conoce a ellos. La omnisciencia divina aparece como <strong>fundamento de la confianza en medio del temor</strong>, no como amenaza.</p>
        <p><span class="lec-tag">Lo que dice del Padre:</span> Jesús usa la palabra "Padre" (no "Dios" abstracto). El Padre cuenta los cabellos. El Padre sabe si un pajarito cae. Esa es la imagen pactual: Dios como Padre que conoce a sus hijos uno por uno, con detalle, con ternura. Eli aprende hoy: <em>"yo soy más valiosa que un pajarito, y Dios cuenta hasta los cabellos del pajarito; cuánto más me cuida a mí."</em></p>
        <p><span class="lec-tag">Calvino sobre este texto:</span> "La providencia particular es la doctrina que más consuela al creyente." No es solo que Dios sostenga el universo en general — es que Dios cuida a cada uno de los suyos en particular. Esa es la diferencia entre un dios deísta y el Padre del pacto.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> hacer la clase puramente "tierna" — quedarse en "qué lindo, Dios cuida a los pajaritos". El punto teológico es más grande: si Dios conoce algo tan pequeño, <strong>su conocimiento es total</strong> — incluye a Eli en cada detalle de su vida.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> confianza ante el miedo. La omnisciencia divina como fuente de calma, no como amenaza.</p>
        <div class="lec-bible">"¿No se venden dos pajarillos por un cuarto? Con todo, ni uno de ellos cae a tierra sin vuestro Padre. Pues aun vuestros cabellos están todos contados. Así que, no temáis." — Mateo 10:29-31</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Padre, gracias porque cuentas los cabellos de Eli. Que aprenda hoy que tu conocimiento perfecto de ella es razón para no temer. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">10–12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de ayer <span class="edc-mark E">E</span> · 2 min</div>
            <p>Eli dice la P y R:</p>
            <div class="guia-say">P: ¿Sabe Dios todas las cosas?<br>R: Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
            <p>Pregunta de enlace:</p>
            <div class="guia-say">"Ayer Job nos enseñó que los ojos de Dios están sobre nuestro camino. Hoy Jesús nos va a decir algo aún más asombroso sobre cuánto conoce el Padre."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Mateo 10:29-31 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Mateo 10:29-31</span>"¿No se venden dos pajarillos por un cuarto? Con todo, ni uno de ellos cae a tierra sin vuestro Padre. Pues aun vuestros cabellos están todos contados. Así que, no temáis."</div>
            <div class="guia-say">"Eli, escucha esto: Jesús dice que ni un pajarito cae a tierra sin que el Padre lo sepa. Y dice algo más: ¡los cabellos de tu cabeza están todos contados! ¿Eso te parece increíble?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Actividad · Contar pelos no se puede <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Vamos a hacer la prueba. Trata de contar cuántos cabellos tienes. ¿Puedes? No, ni yo. Son miles. Pero Dios los cuenta TODOS. ¿Cómo? Porque Él lo sabe todo. No tiene que sentarse a contar — lo sabe porque Él te hizo."</div>
            <p>Eli probará a contar — se reirá, no podrá. Eso queda en su memoria.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · El argumento de Jesús <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Mira qué cosa interesante hizo Jesús. Dijo: 'Si el Padre conoce al pajarito, ¡cuánto más a ustedes!' Tú vales más que un pajarito. Y si Dios cuida a los pajaritos, te cuida muchísimo más a ti. <strong>Por eso Jesús termina diciendo: 'No teman.'</strong>"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · No temer <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Eli, ¿hay algo que te dé miedo? La oscuridad, los truenos, quedarte sola un rato. Quiero que pienses: el Dios que sabe TODO — que cuenta los cabellos del pajarito y los tuyos — está contigo en ese momento de miedo. Te conoce. Sabe lo que sientes. Por eso Jesús dijo: 'no temáis'."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + recitación final <span class="edc-mark E">E</span> · 1 min</div>
            <p>Eli recita la P y R sola. Luego oración:</p>
            <div class="guia-say">"Padre, gracias porque cuentas hasta los cabellos de Eli. Cuando tenga miedo, ayúdala a recordar que tú la conoces y la cuidas. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Olvidó la P y R de ayer. No conecta el conocimiento de Dios con su propia vida</td><td>Repetir la P y R. Releer Mt 10. Énfasis: <em>"Tú vales más que un pajarito."</em></td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la R. Entiende que Dios conoce a los pajaritos y a ella</td><td>Pregunta: <em>"Si Dios sabe esto, ¿qué hago cuando tengo miedo?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula con sus palabras: "Dios me conoce más que a un pajarito, por eso no temo"</td><td>Registrar. Lista para aplicación pactual mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">Hoja simple si quieres reforzar. La grande va el viernes.</p>
        <p>Sugerencia sin IA: que Eli dibuje un pajarito en su cuaderno y escriba "Dios cuenta hasta sus cabellos — y los míos."</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Estamos en Semana 2, Día 2, profundizando el Catecismo CPN P12: "¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios."
- Hoy el texto principal es Mateo 10:29-31 (los pajaritos y los cabellos contados)
- Foco: la omnisciencia divina como razón para no temer

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "Hasta los pajaritos"
2. Cinta superior con cita: "Ni uno de ellos cae a tierra sin vuestro Padre. — Mateo 10:29"
3. Sección "Aún los cabellos están contados" — dibujo simple de un pajarito en una rama con un sol detrás. Estilo sobrio, line-art.
4. Recuadro central con 4 líneas guía: "¿Qué cosa te asusta a veces? Escríbela aquí." (espacio para que Eli escriba)
5. Caja inferior con la frase: "Dios me cuida más que a un pajarito. Por eso no temo." con 2 líneas guía bajo: "Una cosa que ya no me da tanto miedo: ____________"
6. Cinta inferior dorada: "No temáis; más valéis vosotros que muchos pajarillos. — Mateo 10:31"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Color del tema: violeta (#6B3FAA) con acentos dorados (#C49A2A)
- Ilustración del pajarito: simple, naturalista, no caricaturesca
- Tipografía Georgia para títulos, sans-serif clara para texto
- Letra mín. 16pt, 22pt para citas bíblicas
- Estilo digno y reverente, contemplativo
- No usar caricaturas exageradas, colores neón ni estética infantil saturada
- No usar imágenes que pretendan representar a Dios, halos, rayos místicos

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escritura y dibujo.

Si la IA genera HTML:
Artifact con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso de P y R</li>
          <li>Leer Mt 10:29-31</li>
          <li>Eli intenta contar sus cabellos (se reirá) — quedará la idea</li>
          <li>Una frase: <em>"Dios me cuenta hasta los cabellos. No temo."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA · Fábula de Esopo + comprensión ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · Fábula de Esopo "La hormiga y la cigarra"</div>
      <div class="lesson-meta">40 min · Lectura viva + narración + comprensión + escritura propia</div>
      <div class="mats"><span class="mat">Hoja de fábula (impresa o digital)</span><span class="mat">Cuaderno</span><span class="mat">Lápiz</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El método del día:</span> Charlotte Mason en su forma pura. Mamá lee EN VOZ ALTA la fábula completa. Eli escucha sin libro. Al terminar, Eli narra sin pistas. Esa narración es la prueba de comprensión, no preguntas con respuestas correctas.</p>
        <p><span class="lec-tag">Por qué esta fábula esta semana:</span> "La hormiga y la cigarra" enseña sobre <strong>previsión, sabiduría, orden</strong> — temas que conectan con P12 (Dios sabe todas las cosas, incluido lo que vendrá). La hormiga prevé el invierno; la cigarra no. Dios, en cambio, lo sabe TODO de antemano. Por eso podemos confiar en su providencia.</p>
        <p><span class="lec-tag">Cuidado con el moralismo:</span> la fábula tiene una moraleja sobre ser previsor. NO la conviertas en "tú debes ser como la hormiga". La enseñanza pactual es más profunda: Dios sabe lo que viene, y por eso provee para los suyos. La hormiga es figura pequeña de la sabiduría que Dios da.</p>
        <p><span class="lec-tag">Regla del día (gramática):</span> reforzar el <strong>punto final</strong>. Cada oración termina con punto.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">40 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, hoy te leo una fábula muy antigua de un autor que se llama Esopo. Vivió hace más de 2.500 años. Sus fábulas son cortas y tienen una enseñanza al final — una moraleja. Tú solo escucha. Después me la cuentas."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura en voz alta · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá lee la fábula despacio, con voces si quiere:</p>
            <div class="guia-bible" style="font-size:.9rem;line-height:1.8">
<span class="guia-bible-ref">La hormiga y la cigarra · Esopo · adaptado</span>
Era verano, y el sol calentaba la tierra. Una hormiga pequeña caminaba muy ocupada de un lado a otro. Llevaba granos de trigo a su casa para guardarlos.<br><br>
Una cigarra la vio desde un árbol cercano. La cigarra cantaba con su música alegre y reía.<br><br>
— ¡Hormiga! — dijo la cigarra. — ¿Por qué trabajas tanto? Hace calor, el día es hermoso. Ven a cantar conmigo.<br><br>
La hormiga respondió:<br>
— Estoy guardando comida para el invierno. Cuando lleguen los días fríos, no habrá granos en el campo. Si no guardo ahora, después no tendré qué comer.<br><br>
La cigarra se rió y siguió cantando todo el verano.<br><br>
Cuando llegó el invierno, hacía mucho frío. La cigarra tenía hambre y temblaba. Salió a buscar comida, pero no encontró nada.<br><br>
Vio la casa de la hormiga, calientita, llena de granos. Y entendió que mientras ella cantaba, la hormiga había trabajado con sabiduría.<br><br>
<strong>Moraleja:</strong> Es bueno disfrutar — pero también es bueno trabajar a su tiempo y guardar lo que Dios nos da.
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración por Eli · 7 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Ahora cuéntame tú la fábula con tus palabras. Como si yo no la conociera."</div>
            <p>Eli narra. Mamá no interrumpe ni corrige. Al terminar, mamá hace UNA pregunta:</p>
            <div class="guia-say">"¿Por qué crees que la hormiga sabía que el invierno iba a llegar?"</div>
            <p>Respuesta esperada (cualquiera de estas): porque ya había vivido inviernos antes, porque Dios le dio sabiduría, porque vio que el sol iba a cambiar. Cualquiera es válida.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Comprensión · 3 preguntas de inferencia · 5 min <span class="edc-mark D">D</span></div>
            <p>Mamá hace estas 3 preguntas. Eli responde con frases completas (no monosílabos):</p>
            <div class="guia-bible" style="font-size:.88rem;line-height:1.8">
<span class="guia-bible-ref">3 preguntas de inferencia</span>
1. <strong>¿Por qué la cigarra no quería trabajar?</strong><br>
2. <strong>¿Qué habrías hecho tú si fueras la cigarra?</strong><br>
3. <strong>¿Cómo crees que Dios usa el invierno en su creación?</strong>
            </div>
            <p style="font-size:.85rem;color:var(--muted)">No hay respuestas correctas. Si Eli razona, está bien.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura propia · 15 min <span class="edc-mark C">C</span></div>
            <div class="guia-say">"Ahora escribe en tu cuaderno tu propia versión: 3 frases sobre lo que aprendiste de la fábula. Cada frase con punto al final."</div>
            <p>Eli escribe sola. Mamá observa postura, presión del lápiz, espacios entre palabras. Al terminar, mamá señala SOLO si faltó algún punto. No corrige nada más.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"La hormiga era pequeña pero sabia. Salomón dice en Proverbios: 'mira la hormiga y considera sus caminos'. Dios nos enseña sabiduría hasta por las criaturas pequeñas. Y Él, que sabe TODO (P12), nos cuida con sabiduría aún mayor — porque sabe lo que vendrá antes de que llegue."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No narra · responde 1 sola pregunta de las 3 · escribe con dificultad</td><td>Releer la fábula. Hacer narración guiada con preguntas.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Narra con apoyo · responde 2 de 3 preguntas · escribe 2-3 frases con punto</td><td>Normal. Felicitar la narración. Esto es esperado.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Narra completa · razona en inferencia · escribe 3 frases con punto y voz propia</td><td>Registrar como evidencia. Guardar el cuaderno.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional · hoja con ilustración</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">Si quieres imprimirle la fábula con ilustraciones — útil para que Eli la conserve.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Fábula en 2 imágenes</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear imágenes educativas en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado. Eli lee con fluidez, escribe oraciones propias y trabajamos con enfoque tipo Charlotte Mason: lectura atenta, narración, comprensión e inferencia.

Esta ficha es una fábula, así que hazla en DOS IMÁGENES SEPARADAS:

REGLAS GENERALES:
- Español natural para niña de 6 años.
- No saturar la página.
- Letras grandes y claras.
- Texto de lectura en fuente Georgia o serif clara, mínimo 18 pt.
- Instrucciones en sans-serif clara, mínimo 16 pt.
- Líneas de escritura amplias, altura 12 mm.
- Ilustraciones que apoyen la comprensión narrativa.
- Tono tierno, ordenado y familiar.
- Sin caricaturas irreverentes ni contenido secular agresivo.
- Si hay enseñanza moral: compatible con hogar cristiano reformado, sobria, sin moralismo pesado.

═══════════════════════════════════════
IMAGEN 1 — LECTURA DE LA FÁBULA
═══════════════════════════════════════

Título superior: "Una fábula de Esopo"
Título principal: "La hormiga y la cigarra"

Contenido:
- Incluir la fábula completa adaptada para 6 años.
- Dividir en párrafos cortos.
- Letra grande y muy legible.
- 2-3 ilustraciones tipo acuarela suave: hormiga trabajando con grano (verano), cigarra cantando en árbol, invierno con la cigarra hambrienta.
- Caja final de "Moraleja": "Es bueno disfrutar — pero también es bueno trabajar a su tiempo y guardar lo que Dios nos da."
- La página debe parecer una página hermosa de libro infantil, no ficha escolar.

═══════════════════════════════════════
IMAGEN 2 — TRABAJO SOBRE LA FÁBULA
═══════════════════════════════════════

Título superior: "Yo cuento · Yo pienso · Yo escribo"

Secciones:

1. "Yo cuento la fábula" — 5 líneas guía de 12mm
2. "Yo pienso" — 3 preguntas con 2 líneas cada una:
   - "¿Por qué la cigarra no quería trabajar?"
   - "¿Qué habrías hecho tú si fueras la cigarra?"
   - "¿Cómo crees que Dios usa el invierno en su creación?"
3. "Mi final diferente" — caja grande blanca para escribir
4. "Palabras nuevas" — 4 palabras importantes (granos · invierno · sabiduría · moraleja) con línea para escribir significado
5. "Para recordar" — pregunta "¿Cuál es la enseñanza?" con 2 líneas

DISEÑO VISUAL:
- Fondo crema cálido #FAF6F0.
- Color principal azul lectura #2A6090.
- Acentos dorados #C49A2A.
- Estilo digno, contemplativo, sin caricaturas.

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Genera primero IMAGEN 1 (A4 vertical 1:1.414, alta resolución, libro infantil con ilustraciones tipo acuarela). Luego cuando diga "Haz la imagen 2", genera IMAGEN 2 (A4 vertical 1:1.414, espacios en blanco visibles para escribir).

Si la IA genera HTML:
Dos artifacts separados, ambos A4 vertical, imprimibles sin márgenes.

Si la IA genera PDF:
PDF de 2 páginas A4 vertical.

No responder con explicación. Generar directamente las imágenes.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Mamá lee la fábula UNA vez</li>
          <li>Eli narra lo que recuerda</li>
          <li>Mamá hace SOLO la pregunta 1 ("¿Por qué la cigarra no quería trabajar?")</li>
          <li>Eli escribe UNA frase: "Lo que aprendí: ___."</li>
          <li>Listo. (Preguntas 2-3 y las 3 frases son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: HISTORIA · Génesis 1:1-5 · Días 1 y 2 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">📜</div>
    <div>
      <div class="lesson-ttl">Historia Providencial · Génesis 1:1-5 — En el principio</div>
      <div class="lesson-meta">25 min · Día 1 y 2 de la creación · narración + timeline</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Hoja blanca grande</span><span class="mat">Colores</span><span class="mat">Tarjeta timeline "Creación"</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El plan de la semana:</span> esta semana leemos Génesis 1 completo, pero por etapas. Hoy solo los <strong>2 primeros días de la creación</strong>: la luz (día 1) y el firmamento (día 2). Jueves los días 3-4. Viernes los días 5-6. El sábado celebramos el día 7 (reposo de Dios).</p>
        <p><span class="lec-tag">El énfasis hoy NO es "ciencia":</span> no entres en debates sobre edad de la tierra, evolución, días literales/figurativos. Para Eli de 6 años, lo central es: <strong>Dios habló y las cosas existieron</strong>. Dios es el origen. Antes de la creación: solo Dios. Después: todo lo que existe.</p>
        <p><span class="lec-tag">Van Til lo enseña así:</span> Génesis 1 no es teoría científica disfrazada. Es <em>revelación pactual</em>. Dios se presenta como Creador soberano, no como uno de varios dioses. Esa es la base de todo lo que sigue en la Biblia.</p>
        <p><span class="lec-tag">Conexión con catecismo P12:</span> el Dios que sabe todo (P12) es el mismo que creó todo. Su conocimiento es el conocimiento del Creador, no del observador externo.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pregunta de apertura · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, antes de que existieran las flores, los animales, las personas, el sol — ¿qué crees que había?"</div>
            <p>Eli responde. Mamá escucha. Si dice "nada", mamá responde: "no nada — había Alguien. Solo Dios". Si dice "Dios", mamá afirma.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura del texto · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá abre la Biblia en Génesis 1. Lee versículos 1-5 despacio:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:1-5 · NBLA adaptado</span>
"En el principio Dios creó los cielos y la tierra.<br><br>
La tierra estaba sin orden y vacía. La oscuridad cubría todo, y el Espíritu de Dios se movía sobre las aguas.<br><br>
Entonces Dios dijo: '¡Que haya luz!' Y hubo luz. Dios vio que la luz era buena, y separó la luz de la oscuridad.<br><br>
Llamó a la luz 'día', y a la oscuridad 'noche'.<br><br>
Y fue la tarde y la mañana del PRIMER DÍA."
            </div>
            <p>Después pasa al día 2:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:6-8 · NBLA adaptado</span>
"Entonces Dios dijo: '¡Que haya un cielo entre las aguas para separarlas!'<br><br>
Y así fue. Dios hizo el firmamento y separó las aguas que estaban abajo de las que estaban arriba. Y llamó al firmamento 'cielo'.<br><br>
Y fue la tarde y la mañana del SEGUNDO DÍA."
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración por Eli · 5 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Cuéntame qué hizo Dios en el día 1 y en el día 2."</div>
            <p>Eli narra. Si recuerda solo uno de los días, mamá vuelve a leer el otro y pregunta de nuevo.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dibujo en hoja grande · 10 min <span class="edc-mark D">D</span></div>
            <p>Mamá saca hoja blanca grande. La divide en 7 partes (con líneas suaves) — una por cada día de la creación. Le dice:</p>
            <div class="guia-say">"Esta hoja va a tener los 7 días de la creación. Hoy dibujamos el día 1 (luz y oscuridad) y el día 2 (el cielo separando aguas). Los otros días los hacemos mañana y viernes."</div>
            <p>Eli dibuja el día 1 (algo simple: una mitad iluminada, otra oscura) y el día 2 (cielo arriba, agua abajo). Mamá no corrige el arte.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Timeline · 2 min <span class="edc-mark D">D</span></div>
            <p>Mamá saca la tarjeta del Timeline de CC "Creación" (o hace una simple: una tarjeta con "Creación · Dios hace el mundo" + una fecha simbólica "En el principio"). La pegan en una pared o en una hoja grande de timeline.</p>
            <div class="guia-say">"Esta es la primera tarjeta de tu timeline. Aquí empieza toda la historia."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No recuerda los días · solo dice "Dios creó todo"</td><td>Releer. Mostrar el día 1 con linterna apagada/prendida.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Distingue día 1 (luz) y día 2 (cielo) · dibuja con ayuda</td><td>Normal.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Narra los dos días con detalles · articula que antes solo había Dios</td><td>Registrar como evidencia.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Leer Gén 1:1-5 una vez</li>
          <li>Eli dibuja en una hoja "el día 1: luz y oscuridad"</li>
          <li>Una frase: <em>"En el principio Dios creó todo."</em></li>
          <li>Listo. (Día 2 puede esperar a jueves.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: MATEMÁTICAS · 11-20 pictórico con regletas ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · Números 11-20 · pictórico</div>
      <div class="lesson-meta">25 min · Construir 16-20 + valor posicional · sin libros externos</div>
      <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Cuaderno cuadriculado</span><span class="mat">Lápiz</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Continúa lo del martes:</span> ayer Eli aprendió antes/después + construyó 11-15. Hoy completamos hasta 20 + reforzamos el valor posicional (1 decena + X unidades).</p>
        <p><span class="lec-tag">Patrón a observar:</span> del 11 al 15 los nombres son irregulares (once, doce, trece, catorce, quince). Del 16 al 20 son regulares (diez-y-seis, diez-y-siete...). Esto Eli lo entiende intuitivamente — solo hay que mostrárselo.</p>
        <p><span class="lec-tag">REGLA DE ORO de la semana:</span> si Eli construye con regletas, NO le pides escribir el número abstracto todavía. Mañana (jueves) hacemos verbal sin regletas. Pasado mañana (viernes) abstracto en cuaderno. Hoy: <strong>solo concreto + pictórico</strong>.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso 11-15 · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá pone las regletas en fila: 🟧 + ⬜ = 11. Eli construye, dice. Igual con 12, 13, 14, 15. Velocidad.</p>
            <p>Si se traba, mamá vuelve al 11 y suben juntos uno por uno.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Construir 16-20 · 8 min <span class="edc-mark D">D</span></div>
            <p>Mamá agrega una blanca más al 15:</p>
            <div class="guia-say">"Mira: si al 15 le pongo UNA blanca más, obtengo 16. Lo decimos 'diez-y-seis'. ¿Lo escuchas? Diez + seis = dieciséis."</div>
            <p>Continúa con cada número:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.7">
🟧 + ⬜⬜⬜⬜⬜⬜ = 16 (diez-y-seis)<br>
🟧 + ⬜⬜⬜⬜⬜⬜⬜ = 17 (diez-y-siete)<br>
🟧 + ⬜⬜⬜⬜⬜⬜⬜⬜ = 18 (diez-y-ocho)<br>
🟧 + ⬜⬜⬜⬜⬜⬜⬜⬜⬜ = 19 (diez-y-nueve)<br>
🟧 + 🟧 = 20 (dos decenas)
            </div>
            <p>El 20 es especial: NO es 1 decena + 10 unidades, sino 2 decenas. Mamá quita las 10 blancas y pone OTRA regleta naranja al lado de la primera:</p>
            <div class="guia-say">"Mira: cuando junto 10 unidades, se vuelven UNA decena nueva. Dos decenas son veinte."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pictórico en cuaderno · 8 min <span class="edc-mark C">C</span></div>
            <p>Eli abre cuaderno cuadriculado. Mamá dicta:</p>
            <div class="guia-say">"Dibuja en cuadritos los números 16, 18 y 20. Barra de 10 + las unidades que falten. Y pon el número grande al lado."</div>
            <p>Para el 20, Eli debe dibujar DOS barras de 10 (no una con 20). Si dibuja una sola larga, mamá señala: "el 20 son dos decenas — dibújalo así".</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura inversa · 2 min <span class="edc-mark C">C</span></div>
            <p>Mamá ahora pone regletas SIN decir el número. Eli lee:</p>
            <div class="guia-say">"¿Qué número es este? (mamá pone 🟧 + ⬜⬜⬜⬜⬜⬜⬜⬜)"</div>
            <p>Respuesta esperada: 18. Si Eli cuenta uno por uno, está bien. Si reconoce de un vistazo, ya tiene visión de número.</p>
            <p>Repite con 14, 17, 20.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Tu mano tiene 5 dedos. Tus dos manos tienen 10. Eso es UNA decena. Dios diseñó tu cuerpo así. Por eso contamos en grupos de 10. Hasta tu propio cuerpo te enseña matemáticas. Eso es orden de Dios."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Confunde nombres 11-15 con 16-19 · no entiende que 20 = 2 decenas</td><td>Volver a 11-15 mañana antes de avanzar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Construye 16-20 con regletas · dibuja en cuadernos con apoyo</td><td>Normal.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Lee número de la representación sin contar uno por uno · entiende que 20 = 2 decenas</td><td>Mañana avanza a verbal sin regletas.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Repaso 11-15 con regletas (rápido)</li>
          <li>Mamá enseña SOLO 16, 17, 18 con regletas (no 19-20 todavía)</li>
          <li>Eli dibuja en cuaderno el 17</li>
          <li>Listo. (18-20 puede esperar a jueves.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 5: CIENCIAS · Frijol bebé ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico verde">🌱</div>
    <div>
      <div class="lesson-ttl">Ciencias · Frijol bebé — dentro de la semilla</div>
      <div class="lesson-meta">25 min · Recuperación de S1 · observación reverente</div>
      <div class="mats"><span class="mat">⚠️ 10-12 frijoles pinto REMOJADOS desde anoche</span><span class="mat">Plato pequeño</span><span class="mat">Lupa si tienes</span><span class="mat">Diario de naturaleza</span><span class="mat">Lápiz + colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué hoy:</span> esto se quedó pendiente de S1 porque no tenías frijoles remojados. Hoy lo recuperamos. Si todavía no los tienes, ponlos en agua TIBIA por 1 hora — funcionará aunque no es ideal.</p>
        <p><span class="lec-tag">La verdad teológica:</span> dentro de cada semilla está la <strong>planta entera predeterminada por Dios</strong>. No hay azar evolutivo en el frijol — hay diseño. Cuando Eli abre el frijol y ve la pequeña planta enrollada adentro (radícula, cotiledones, plúmula), está viendo lo que Bavinck llama <em>el orden interno de la creación</em>: cada cosa contiene en sí su propia ley.</p>
        <p><span class="lec-tag">Charlotte Mason aplicada:</span> el "diario de naturaleza" no es manualidad — es entrenamiento de la atención reverente. Mason creía que enseñar a observar la creación con detalle era enseñar a leer la Palabra de Dios escrita en la naturaleza. Eli no está "haciendo ciencia" — está adorando con sus ojos.</p>
        <p><span class="lec-tag">El orden importa hoy:</span> mamá NO empieza explicando partes. Empieza preguntando "¿qué ves?". Eli mira primero, conjetura, articula. Después mamá nombra. Eso es educación científica reformada.</p>
        <p><span class="lec-tag">Conexión con catecismo P12:</span> Dios sabe TODO lo que está dentro del frijol — sabe que va a brotar, cuándo, cómo. Conocer así de profundo es ser Creador.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Antes de abrir · 3 min <span class="edc-mark E">E</span></div>
            <p>Mamá pone 3-4 frijoles remojados sobre el plato. NO dice nada todavía.</p>
            <div class="guia-say">"Eli, mira estos frijoles. Han estado en agua toda la noche. ¿Cómo se ven distintos a los frijoles secos de la cocina?"</div>
            <p>Eli observa: están más grandes, más blandos, la cáscara se ve floja. Mamá escucha. No corrige.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Abrir el frijol · observar primero · 7 min <span class="edc-mark D">D</span></div>
            <p>Mamá quita suavemente la cáscara de UN frijol. Lo abre por la mitad (los dos lados se separan naturalmente). NO explica nada todavía.</p>
            <div class="guia-say">"Mira muy de cerca. ¿Qué ves adentro? Tómate tu tiempo. Dime lo que ves, no lo que crees que es."</div>
            <p>Eli observa, con lupa si tienen. Articula:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>"Veo algo blanco pequeño y enrollado..."</li>
              <li>"Veo dos partes grandes blancas..."</li>
              <li>"Tiene como una cosita curveada..."</li>
            </ul>
            <p>Mamá escucha. Toma nota mental. No corrige.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Nombrar las partes · 5 min <span class="edc-mark D">D</span></div>
            <p>Ahora sí, mamá nombra lo que Eli observó:</p>
            <div class="guia-say">"Eso pequeño enrollado que viste es la <strong>plantita</strong>. Sí — dentro del frijol hay una planta diminuta esperando a crecer. Esos dos lados blancos grandes son la <strong>comida</strong> que Dios le puso al frijol para alimentar a la plantita hasta que tenga raíces y hojas. Y la cáscara afuera la protege."</div>
            <p>Resumen sencillo (3 palabras): <strong>PLANTITA · COMIDA · CÁSCARA.</strong></p>
            <p>Mamá repite las 3 palabras dos veces. Eli las repite.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dibujar en el diario de naturaleza · 8 min <span class="edc-mark C">C</span></div>
            <p>Eli abre su diario de naturaleza (cuaderno tapa dura). Dibuja lo que vio. Mamá la acompaña, no la corrige.</p>
            <div class="guia-say">"Dibuja lo que viste, no lo que crees que debe ser. Pon las flechas con las etiquetas: plantita · comida · cáscara."</div>
            <p>Eli dibuja el frijol abierto. Mamá la ayuda solo a escribir las 3 etiquetas si Eli las pide.</p>
            <p>Al terminar, Eli dicta una frase. Mamá la escribe en el cuaderno (o Eli la copia):</p>
            <div class="guia-say">"Hoy 27 de mayo de 2026 abrí un frijol y vi una plantita pequeña enrollada adentro."</div>
            <p>Recordar: <strong>punto al final</strong>.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Sembrar un frijol · 2 min</div>
            <p>Mamá pone un frijol remojado en un frasco con algodón húmedo. Lo pone en la ventana.</p>
            <div class="guia-say">"Vamos a observar este frijol cada día esta semana. Veremos cómo crece la plantita que ya estaba adentro."</div>
            <p>Eli marca el frasco con la fecha.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No observa con detalle · solo quiere terminar</td><td>Volver a la observación. Pedir 3 detalles más.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Observa, nombra plantita/comida/cáscara, dibuja con etiquetas</td><td>Normal. Guardar en diario.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Observa con asombro, conecta con creación de Dios, hace preguntas propias</td><td>Evidencia destacada.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Abrir UN frijol remojado, separar las dos partes</li>
          <li>Mamá pregunta: <em>"¿Qué ves?"</em></li>
          <li>Eli dibuja en su cuaderno lo que vio</li>
          <li>Una frase de mamá: <em>"Dios puso toda la planta dentro de esta semilla."</em></li>
          <li>Listo. (Etiquetas y siembra son [D]/[C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>`,

jueves:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P12 · Día 3 — Aplicación pactual ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P12 · Día 3 — "Dios conoce mi nombre"</div>
      <div class="lesson-meta">10–12 min · Aplicación pactual · Isaías 43:1</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> ayer Mt 10 nos enseñó que el Padre conoce hasta los cabellos. Hoy damos el paso pactual: <strong>Dios no solo me conoce — Dios sabe mi nombre</strong>. La omnisciencia divina toma forma personal en Isaías 43:1: <em>"Te puse nombre, mío eres tú."</em> Esto no es teoría — es la manera en que un Padre conoce a sus hijos.</p>
        <p><span class="lec-tag">El movimiento de la semana:</span> Día 1 (Job): Dios ve mi camino. Día 2 (Mt 10): Dios cuenta hasta mis cabellos. Día 3 (Isaías 43): Dios conoce mi nombre. Cada día estrecha más el círculo: del camino → al cuerpo → a la identidad personal. Eli debe terminar esta semana pensando "Dios sabe MI nombre".</p>
        <p><span class="lec-tag">Bavinck sobre el nombre:</span> en la Escritura, el nombre no es etiqueta — es identidad. Cuando Dios dice "te puse nombre", está diciendo "yo te definí, yo te llamé, yo te conozco en lo profundo". Eli tiene un nombre que sus padres le pusieron — pero detrás de ese nombre humano hay un Dios que la conoce antes de que ningún nombre fuera pronunciado (Jer 1:5).</p>
        <p><span class="lec-tag">Conexión con el bautismo:</span> en el bautismo, el nombre del niño se pronuncia delante de la congregación. Es señal pactual: "este niño tiene nombre delante de Dios y delante del pueblo". Cuando Eli fue bautizada, su nombre se dijo en alta voz. Dios conoce ese nombre. La hoja del portafolio del viernes puede incluir esto.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> hacer la clase sentimental ("qué especial soy"). El centro no es la especialidad de Eli — es la <strong>fidelidad de Dios</strong> que conoce a los suyos uno por uno.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> identidad pactual. Eli aprende que tiene nombre delante de Dios. Su identidad no depende de logros — depende del Dios que la conoce.</p>
        <div class="lec-bible">"Ahora, así dice el Señor, tu Creador, oh Jacob, y el que te formó, oh Israel: No temas, porque yo te he redimido, te he llamado por tu nombre; mío eres tú." — Isaías 43:1 &nbsp;·&nbsp; "Antes que te formase en el vientre te conocí, y antes que nacieses te santifiqué." — Jeremías 1:5</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque conoces el nombre de Eli. Que aprenda hoy que tu conocimiento es personal — no genérico. Que descanse en ser tuya. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">10–12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de los 2 días anteriores <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, repasemos: el martes aprendimos con Job que los ojos de Dios están sobre nuestro camino. El miércoles aprendimos con Jesús que Dios cuenta hasta los cabellos. Hoy vamos a aprender algo aún más personal."</div>
            <p>Eli recita la P y R:</p>
            <div class="guia-say">P: ¿Sabe Dios todas las cosas?<br>R: Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pregunta de enganche <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, ¿cuál es tu nombre completo? Dilo despacio. Bien. ¿Quién te puso ese nombre? Papá y yo, sí. Pero hoy vamos a descubrir algo: hay Alguien que sabía tu nombre antes de que naciéramos nosotros, antes de que existiera tu familia, antes que el mundo."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Isaías 43:1 <span class="edc-mark E">E</span> · 3 min</div>
            <div class="guia-bible"><span class="guia-bible-ref">Isaías 43:1</span>"No temas, porque yo te he redimido, te he llamado por tu nombre; mío eres tú."</div>
            <div class="guia-say">"Mira lo que dice Dios: 'te he llamado por tu nombre'. No dice 'a mucha gente'. Dice 'a ti'. Dios sabe tu nombre, Eli. Tu nombre exacto. Y dice algo más: 'mío eres tú'. Eso significa que perteneces a Él."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión bautismal <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"¿Recuerdas que te bautizaron? El pastor dijo tu nombre en voz alta delante de toda la iglesia: 'Elisabeth'. ¿Por qué? Porque Dios te conoce por nombre y la iglesia te recibe con tu nombre. Tu nombre es tuyo delante de Dios. Eso no es accidente — es pacto."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · La oración pactual <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Cuando ores, recuerda: el Dios al que oras te conoce por nombre. No tienes que explicarle quién eres. Él ya sabe. La oración es hablar con Alguien que te llama por tu nombre."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración personal <span class="edc-mark C">C</span> · 2 min</div>
            <p>Hoy invita a Eli a orar primero. Una frase. Si quiere.</p>
            <p>Si no quiere o no le sale, ora tú:</p>
            <div class="guia-say">"Señor, gracias porque conoces a Eli por su nombre. Gracias porque ella es tuya. Que descanse hoy en saber que tú la llamas. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No conecta su nombre con la identidad pactual. Solo recita</td><td>Repetir Is 43:1 con su nombre: <em>"Eli, mía eres tú."</em></td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende que Dios la conoce, recita la P y R, no articula la conexión pactual</td><td>Conectar explícitamente con su bautismo: <em>"Cuando te bautizaron, Dios ya sabía tu nombre."</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula con sus palabras que ser conocida por Dios es ser pertenecida</td><td>Registrar. Lista para síntesis del viernes.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">La hoja grande va el viernes. Hoy basta con cuaderno.</p>
        <p>Sugerencia sin IA: que Eli escriba su nombre completo en grande en su cuaderno, lo decore con colores, y escriba debajo: <em>"Dios me llama por mi nombre."</em></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado pactual.

CONTEXTO:
- Semana 2, Día 3, profundizando el Catecismo CPN P12 ("¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios").
- Hoy el texto principal es Isaías 43:1 — "Te he llamado por tu nombre; mío eres tú."
- Eli fue bautizada como hija del pacto. Su nombre se pronunció delante de la iglesia.

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "Dios me llama por mi nombre"
2. Caja central GRANDE con espacio amplio: "Mi nombre es ______________________________" (líneas guía de 12mm — Eli escribirá su nombre completo en grande)
3. Cinta con Isaías 43:1: "Te he llamado por tu nombre; mío eres tú. — Isaías 43:1"
4. Recuadro decorativo donde Eli puede pegar una foto pequeña suya O dibujar su autorretrato (8×8 cm)
5. Pregunta abierta: "¿Qué significa que Dios sepa mi nombre?" — 4 líneas guía
6. Sección "Mi bautismo" — recordatorio con espacio para que mamá complete: "Fui bautizada el ___ de ___ del año ___. Mi nombre se dijo delante de la iglesia." (mamá llena con los datos reales)
7. Cinta inferior dorada: "Antes que te formase en el vientre te conocí. — Jeremías 1:5"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Color del tema: violeta (#6B3FAA) con acentos dorados (#C49A2A)
- Estilo: digno, contemplativo, esta hoja se guarda
- Tipografía Georgia para títulos y citas, sans-serif clara para texto
- Decoración: pequeñas estrellas o motivos delicados, sin caricaturas
- La caja para el nombre de Eli debe ser visualmente prominente — es el centro de la hoja

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escritura.

Si la IA genera HTML:
Artifact con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso de P y R</li>
          <li>Leer Isaías 43:1 con el nombre de Eli: <em>"Te he llamado por tu nombre, Elisabeth, mía eres tú."</em></li>
          <li>Una frase: <em>"Dios me conoce por mi nombre."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA · Escritura propia 'Yo vivo en Bogotá' ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · Mi propio párrafo "Yo vivo en Bogotá"</div>
      <div class="lesson-meta">35 min · Composición creativa propia con punto final</div>
      <div class="mats"><span class="mat">Cuaderno</span><span class="mat">Lápiz</span><span class="mat">Hoja blanca</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El objetivo de hoy:</span> Eli escribe un párrafo de 3-5 frases <strong>sin modelo, sin dictado, sin copia</strong>. Solo su mano y sus ideas. Mamá da el primer verso ("Yo vivo en Bogotá...") y Eli continúa libre.</p>
        <p><span class="lec-tag">Por qué es importante:</span> Charlotte Mason llama a esto "composición original" — un acto creativo que distingue al niño <em>formado</em> del niño <em>solo instruido</em>. Eli ya hizo dictado el miércoles. Hoy hace lo opuesto: produce, no recibe.</p>
        <p><span class="lec-tag">Regla del día:</span> punto final (continuamos reforzando). Si Eli escribe 4 frases y solo pone punto en 1, mamá señala: "¿pusiste el punto al final de cada frase?". Eli las completa ella misma.</p>
        <p><span class="lec-tag">Cuidado:</span> NO corregir ortografía. NO corregir gramática. Eli en S2 está en escritura PROPIA, no en perfeccionamiento. La voz propia importa más que la corrección. Eso vendrá en S6-S10.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">35 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conversación de apertura · 5 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, ¿cómo describirías Bogotá a alguien que nunca ha venido? ¿Qué tiene Bogotá? ¿Qué hay cerca de tu casa? ¿Qué te gusta de aquí?"</div>
            <p>Eli habla libremente. Mamá escucha, hace seguimiento ("¿y qué más?"), no apunta. Esto activa su mente antes de escribir.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Mamá da el primer verso · 1 min <span class="edc-mark E">E</span></div>
            <p>Mamá escribe en una hoja, en grande, esta frase para que Eli la copie como primera línea:</p>
            <div class="guia-bible" style="font-size:1.1rem;text-align:center;font-family:Georgia,serif">"Yo vivo en Bogotá."</div>
            <div class="guia-say">"Esta es la primera frase. Cópiala en tu cuaderno. Luego TÚ continúas con 3 o 4 frases más sobre tu vida aquí. Sin modelo. Solo lo que tú quieras contar."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura libre · 20 min <span class="edc-mark C">C</span></div>
            <p>Eli escribe en su cuaderno. Mamá no la mira por encima del hombro. Puede hacer otra cosa al lado (no supervisar).</p>
            <p>Si Eli pregunta "¿cómo se escribe X?": mamá NO le da la palabra completa. Le dice los sonidos: "Bo-go-tá empieza con B, después o, después... ¿qué sigue?" Eli reconstruye.</p>
            <p>Si Eli se traba en ideas: mamá pregunta: "¿qué más viste hoy en la calle?" o "¿qué hace papá en Bogotá?". NO le da frases hechas.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Revisión · solo el punto final · 3 min <span class="edc-mark D">D</span></div>
            <p>Eli termina. Mamá lee lo que escribió EN VOZ ALTA — celebrando lo que dijo, no corrigiendo.</p>
            <p>Después dice una sola cosa:</p>
            <div class="guia-say">"¿Pusiste el punto al final de cada frase? Vamos a contar: 1, 2, 3, 4 puntos."</div>
            <p>Si falta algún punto, Eli lo agrega ella misma. No mamá.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Eli lee SU párrafo en voz alta · 4 min <span class="edc-mark C">C</span></div>
            <div class="guia-say">"Ahora léeme tu párrafo en voz alta. Como si me lo estuvieras presentando."</div>
            <p>Eli lee. Mamá escucha con interés genuino. Le hace una sola pregunta: "¿Cuál de tus frases es tu favorita?"</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Lo que escribiste salió de TU mente, que Dios diseñó. Las ideas que tienes son regalo suyo. Cuando escribes, estás usando algo que solo los humanos tenemos — porque fuimos hechos a su imagen."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Escribe 1-2 frases con dificultad · pide ayuda en muchas palabras</td><td>Normal en composición original. Pasar a dictado mañana en lugar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Escribe 3 frases propias · 1-2 sin punto · ortografía con errores menores</td><td>Normal. Marcar el punto faltante. Felicitar el contenido.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Escribe 4+ frases con voz propia · puntos al final · lee con entonación</td><td>Guardar el cuaderno como evidencia. Foto.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Conversación 3 min: "¿qué te gusta de Bogotá?"</li>
          <li>Mamá da: "Yo vivo en Bogotá."</li>
          <li>Eli escribe 2 frases más (mínimo)</li>
          <li>Revisión solo del punto</li>
          <li>Listo. (4-5 frases con voz propia son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: HISTORIA · Génesis 1:6-19 · Días 2 a 4 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">📜</div>
    <div>
      <div class="lesson-ttl">Historia Providencial · Génesis 1:6-19 — Días 3 y 4</div>
      <div class="lesson-meta">25 min · La tierra, las plantas, el sol y la luna</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Hoja grande de 7 días (iniciada miércoles)</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Continúa lo del miércoles:</span> ayer leímos Gén 1:1-5 (creación inicial y día 1 + 2). Hoy avanzamos al <strong>día 3 (tierra y plantas) + día 4 (sol, luna, estrellas)</strong>. Mañana terminamos con días 5-6.</p>
        <p><span class="lec-tag">Lo central pastoral hoy:</span> en el día 4 Dios crea sol, luna y estrellas <em>para marcar tiempos</em>. Esto es importante: Dios ordenó incluso el tiempo. Los días, las estaciones, las cosechas — todo está bajo su orden. Eli aprende que <strong>nada del mundo natural funciona "por sí solo"</strong>; todo es providencia.</p>
        <p><span class="lec-tag">Sin debates científicos:</span> si Eli pregunta "pero, ¿el sol apareció después de la luz?", responde simplemente: "sí, fue así porque así Dios lo dispuso. La luz del día 1 no es la luz del sol del día 4 — son distintas". No entres a explicaciones astronómicas. Para 6 años basta con "Dios habló y así fue".</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso miércoles · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, ¿qué creó Dios en el día 1? ¿Y en el día 2?"</div>
            <p>Eli responde: día 1 luz, día 2 cielo (firmamento). Si se traba, mamá saca la hoja grande con los dibujos de los 7 días y le muestra.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · día 3 · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá lee Génesis 1:9-13 (adaptado):</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:9-13 · adaptado</span>
"Entonces Dios dijo: '¡Que se junten las aguas debajo del cielo en un solo lugar, y que aparezca la tierra seca!' Y así fue.<br><br>
Dios llamó a la parte seca 'tierra', y a las aguas las llamó 'mares'. Y Dios vio que era bueno.<br><br>
Entonces Dios dijo: '¡Que la tierra produzca plantas: hierba con semillas y árboles con frutos!' Y así fue. Y Dios vio que era bueno.<br><br>
Y fue la tarde y la mañana del TERCER DÍA."
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · día 4 · 5 min <span class="edc-mark E">E</span></div>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:14-19 · adaptado</span>
"Entonces Dios dijo: '¡Que haya luces en el cielo para separar el día de la noche! Servirán para marcar los tiempos: los días, los años y las estaciones.'<br><br>
Dios hizo dos lumbreras grandes: la luz mayor (el sol) para gobernar el día, y la luz menor (la luna) para gobernar la noche. También hizo las estrellas.<br><br>
Dios las puso en el cielo para iluminar la tierra. Y Dios vio que era bueno.<br><br>
Y fue la tarde y la mañana del CUARTO DÍA."
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración + dibujo · 10 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Cuéntame qué hizo Dios en el día 3 y en el día 4."</div>
            <p>Eli narra. Después dibuja en la hoja grande de los 7 días:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li><strong>Día 3:</strong> tierra seca con un mar y plantas/árboles</li>
              <li><strong>Día 4:</strong> sol, luna, estrellas</li>
            </ul>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Mira lo que dijo Dios en el día 4: 'que las luces marquen los tiempos'. Eso significa que hasta los días que vivimos están bajo el orden de Dios. Cuando vemos el sol salir cada mañana, Dios está cumpliendo lo que dijo en el día 4. Eso es providencia continua, no solo creación inicial."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Confunde día 3 con día 4</td><td>Releer cada día por separado y dibujar uno por vez.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Distingue los dos días · dibuja sol/luna y tierra/plantas</td><td>Normal.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Narra detalles · articula que el sol marca los tiempos</td><td>Registrar evidencia.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Leer Gén 1:9-19 una vez</li>
          <li>Eli dibuja UNA cosa de cada día en la hoja grande</li>
          <li>Una frase: <em>"Día 3: tierra y plantas. Día 4: sol, luna y estrellas."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: MATEMÁTICAS · Consolidación 11-20 VERBAL ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · 11-20 sin regletas · solo verbal</div>
      <div class="lesson-meta">25 min · Etapa abstracta · sin libros externos</div>
      <div class="mats"><span class="mat">Cuaderno cuadriculado</span><span class="mat">Lápiz</span><span class="mat">Regletas (solo de respaldo)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El objetivo de hoy:</span> Eli debe responder antes/después + valor posicional <strong>sin tocar regletas</strong>. Esto es etapa abstracta (Singapur A). Si todavía necesita regletas, las tenemos cerca como apoyo, pero hoy intentamos sin ellas.</p>
        <p><span class="lec-tag">Cómo evaluar si está lista:</span> el viernes hace ejercicios escritos en cuaderno (pictórico→abstracto). Si hoy no responde verbal sin regletas, el viernes hace pictórico con regletas dibujadas, no abstracto. Sigue el ritmo de Eli, no el calendario.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cadena oral 11 → 20 · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, vamos a contar del 11 al 20 en voz alta, en orden. Yo empiezo: 11... ¿qué sigue?"</div>
            <p>Eli completa: 12, 13, 14, 15, 16, 17, 18, 19, 20. Si se traba en alguno, mamá repite ese número y sigue.</p>
            <p>Después al revés: del 20 al 11.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Vecinos de los grandes · 10 preguntas · 7 min <span class="edc-mark D">D</span></div>
            <p>Mamá hace estas 10 preguntas (alternando antes/después). Eli responde verbal, SIN tocar regletas:</p>
            <div class="guia-bible" style="font-size:.88rem;line-height:1.8">
<span class="guia-bible-ref">Banco de preguntas · 10 preguntas verbales</span>
1. Después del 13 está el ___ &nbsp;&nbsp; <em style="color:var(--muted)">[14]</em><br>
2. Antes del 17 está el ___ &nbsp;&nbsp; <em style="color:var(--muted)">[16]</em><br>
3. Después del 19 está el ___ &nbsp;&nbsp; <em style="color:var(--muted)">[20]</em><br>
4. Antes del 12 está el ___ &nbsp;&nbsp; <em style="color:var(--muted)">[11]</em><br>
5. Vecinos del 15 son ___ y ___ &nbsp;&nbsp; <em style="color:var(--muted)">[14 y 16]</em><br>
6. Vecinos del 18 son ___ y ___ &nbsp;&nbsp; <em style="color:var(--muted)">[17 y 19]</em><br>
7. Después del 11 está el ___ &nbsp;&nbsp; <em style="color:var(--muted)">[12]</em><br>
8. Antes del 20 está el ___ &nbsp;&nbsp; <em style="color:var(--muted)">[19]</em><br>
9. Vecinos del 13 son ___ y ___ &nbsp;&nbsp; <em style="color:var(--muted)">[12 y 14]</em><br>
10. Si tengo 14 y le sumo 1, obtengo ___ &nbsp;&nbsp; <em style="color:var(--muted)">[15]</em>
            </div>
            <p style="font-size:.85rem;color:var(--muted)">La última pregunta es clave: conecta <strong>sumar 1 = el siguiente número</strong>. Esto es preparación para suma.</p>
            <p>Si Eli se traba en 3 o más, sacar regletas y volver a concreto. NO pasar al siguiente paso.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Valor posicional verbal · 6 preguntas · 7 min <span class="edc-mark C">C</span></div>
            <p>Sin regletas. Solo verbal:</p>
            <div class="guia-bible" style="font-size:.88rem;line-height:1.8">
<span class="guia-bible-ref">Preguntas de estructura</span>
1. El 14 tiene ___ decena y ___ unidades. &nbsp;&nbsp; <em style="color:var(--muted)">[1 y 4]</em><br>
2. El 17 tiene ___ decena y ___ unidades. &nbsp;&nbsp; <em style="color:var(--muted)">[1 y 7]</em><br>
3. El 20 tiene ___ decenas y ___ unidades. &nbsp;&nbsp; <em style="color:var(--muted)">[2 y 0]</em><br>
4. Si tengo 1 decena y 5 unidades, soy el número ___ &nbsp;&nbsp; <em style="color:var(--muted)">[15]</em><br>
5. Si tengo 1 decena y 9 unidades, soy el número ___ &nbsp;&nbsp; <em style="color:var(--muted)">[19]</em><br>
6. Si tengo 2 decenas, soy el número ___ &nbsp;&nbsp; <em style="color:var(--muted)">[20]</em>
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura en cuaderno · 5 min <span class="edc-mark C">C</span></div>
            <p>Eli escribe en cuaderno cuadriculado, sin regletas:</p>
            <div class="guia-say">"Escribe los números del 11 al 20 en orden, uno por cuadrito. Después al lado escribe en palabras: 'once', 'doce', 'trece'... hasta 'veinte'."</div>
            <p>Mamá ayuda con los nombres irregulares si Eli pregunta. NO le da escritos.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Hoy hiciste todo en tu cabeza, sin tocar regletas. Eso significa que los números ya viven dentro de tu mente. Ese es el regalo del aprendizaje — pasar de lo que tocas a lo que piensas."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Más de 3 errores en preguntas verbales · necesita regletas</td><td>Volver a etapa concreta el viernes. NO avanzar a abstracto.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Responde verbal con 1-2 errores · entiende valor posicional con apoyo</td><td>Normal. El viernes hace pictórico.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Responde verbal sin errores · escribe los nombres de los números</td><td>El viernes hace abstracto en cuaderno.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Cadena oral 11 → 20 y al revés</li>
          <li>Solo 5 preguntas vecinos (no las 10)</li>
          <li>Solo 3 preguntas valor posicional (no las 6)</li>
          <li>Listo. (Escritura es [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 5: MÚSICA · Himno + melodía versículo + canto de geografía ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">🎵</div>
    <div>
      <div class="lesson-ttl">Música · Himno + melodía del Salmo 139 + canto de geografía</div>
      <div class="lesson-meta">15 min · Memoria por canto · fijar versículo de la semana</div>
      <div class="mats"><span class="mat">Himnario o app de música</span><span class="mat">Piano (opcional)</span><span class="mat">Canto de geografía (español)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué cantar el versículo:</span> <strong>la melodía es el mejor mnemónico que existe</strong>. Eli puede recitar Sal 139:1 con esfuerzo, pero si lo canta, lo retendrá por años. No es entretenimiento — es pedagogía clásica. Calvino musicalizó los Salmos para que el pueblo los aprendiera de memoria.</p>
        <p><span class="lec-tag">Sin presión musical:</span> mamá no necesita saber música. La melodía no tiene que ser "buena" — tiene que ser tuya y de Eli. Una melodía simple sobre 3 notas es más efectiva pedagógicamente que una compleja.</p>
        <p><span class="lec-tag">Canto de geografía:</span> en español y nuestro (no inglés). Mamá canta con Eli el canto de los continentes mientras señala el mapa. NO se le pide memorizar; solo disfrutar. La memoria viene sola con repetición.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Himno conocido · 4 min <span class="edc-mark E">E</span></div>
            <p>Cantar juntas un himno que Eli ya conozca de la iglesia. Si tienes piano, acompáñalo. Si no, a capella.</p>
            <p><strong>Repetir 2 veces.</strong> Segundo turno con más volumen y confianza.</p>
            <p>Sugerencias: "Cuán grande es Él", "Cristo me ama", "Padre fiel", "Eterno Padre". Lo que sea más cercano para Eli.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Inventar melodía para Sal 139:1 · 6 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Vamos a inventarle una melodía a nuestro versículo de la semana. 'Oh Señor, tú me has examinado y conocido.' Yo voy a tararear así..."</div>
            <p>Mamá tararea una melodía simple sobre 3-4 notas (por ejemplo: do-mi-sol-mi-do repetidos). Eli imita. Juntas la repiten varias veces.</p>
            <div class="guia-say">"Ahora pongámosle las palabras."</div>
            <p>Cantan el versículo completo 5 veces. Esa melodía será la que Eli use cuando le pidan el versículo. Le quedará por años.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Nuestro canto de geografía (español) · 5 min <span class="edc-mark E">E</span></div>
            <p>En español y nuestro (nada de canciones en inglés). Canten el canto de los continentes señalando un mapa. Sin exigir memorización todavía — solo disfrutar.</p>
            <div class="guia-bible"><span class="guia-bible-ref">🎵 Canto de los continentes</span>América, Europa, Asia,<br>África, Oceanía, Antártida —<br>seis continentes hizo Dios:<br>¡toda la tierra es del Señor!</div>
            <div class="guia-say">"Cantemos nuestro canto del mundo que Dios hizo, señalando los continentes en el mapa."</div>
            <p>Mamá señala los continentes mientras cantan, sin pedirle nada a Eli.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 min</div>
        <ol>
          <li>Cantar el himno UNA vez</li>
          <li>Tararear la melodía del versículo + cantarlo con palabras 3 veces</li>
          <li>Listo. (El canto de geografía es bonus.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>`,

viernes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P12 · Día 4 — "Examíname Tú" (Sal 139:23-24) ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P12 · Día 4 — "Examíname Tú"</div>
      <div class="lesson-meta">15 min · La respuesta pactual · Salmo 139:23-24</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy · profundización final:</span> los tres días anteriores enseñaron lo que Dios HACE — me ve, me cuenta, me llama. Hoy enseñamos cómo el creyente RESPONDE al Dios que lo conoce: <em>pide ser conocido MÁS</em>. Esa es la respuesta pactual madura. El Salmo 139 termina así — Eli aprende a orar como David.</p>
        <p><span class="lec-tag">El movimiento del Salmo 139 completo:</span></p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li>vv. 1-6: Dios me conoce (lo que aprendió esta semana)</li>
          <li>vv. 7-12: no puedo escapar de su presencia</li>
          <li>vv. 13-18: me formaste, me conoces desde el vientre</li>
          <li>vv. 19-22: respuesta del salmista (lealtad)</li>
          <li><strong>vv. 23-24: petición final — "examíname, conoce mi corazón, guíame en el camino eterno"</strong></li>
        </ul>
        <p><span class="lec-tag">El giro pactual:</span> el salmista no termina diciendo "qué miedo que Dios me conozca tanto". Termina pidiendo: <em>"conóceme más, examíname, guíame"</em>. Esa es la respuesta del corazón pactual. <strong>Eli aprende hoy a invitar la mirada de Dios, no a esconderse de ella.</strong></p>
        <p><span class="lec-tag">Calvino sobre estos versos:</span> "El alma piadosa no teme la mirada de Dios; la busca. La pide. La quiere más cerca." Esa es la mente reformada formándose en una niña de 6 años.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que Eli piense "examinarme" como "castigarme". Aclárale: examinar = mirar con cuidado, como un médico examina para sanar, no como un juez para condenar.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> oración pactual — Eli aprende a invitar a Dios a su corazón. Esto es el primer paso de la oración como respuesta, no como petición egoísta.</p>
        <div class="lec-bible">"Examíname, oh Dios, y conoce mi corazón; pruébame y conoce mis inquietudes. Mira si hay en mí camino malo, y guíame en el camino eterno." — Salmo 139:23-24</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que Eli aprenda hoy no solo que tú la conoces — sino a pedirte que la conozcas más. Que tu mirada sea su invitación, no su miedo. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de los 3 días · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, esta semana hemos aprendido que Dios sabe todo. ¿Recuerdas las tres cosas que vimos?<br>• Día 1: los ojos de Dios sobre... (el camino)<br>• Día 2: Dios cuenta hasta... (los cabellos)<br>• Día 3: Dios me llama por... (mi nombre)"</div>
            <p>Eli completa. Si se traba, mamá ayuda sin presión.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">La pregunta del giro · 2 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Hoy tengo una pregunta nueva: si Dios sabe TODO de ti — todos tus pensamientos, hasta los que tú no sabes — ¿qué le respondes? ¿Te escondes? ¿O le pides que te conozca más?"</div>
            <p>Eli responde. Cualquier respuesta es válida — esta pregunta abre la clase.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Salmo 139:23-24 · 3 min <span class="edc-mark E">E</span></div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Salmo 139:23-24</span>"Examíname, oh Dios, y conoce mi corazón. Pruébame y conoce mis inquietudes. Mira si hay en mí camino malo, y guíame en el camino eterno."</div>
            <div class="guia-say">"¿Lo escuchaste? David — el que escribió este salmo — termina pidiéndole a Dios: 'examíname'. Le pide a Dios que lo MIRE más, que lo CONOZCA más. No se esconde. Eso es la oración del corazón pactual."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">"Examinar" no es castigar · 3 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Quiero que entiendas bien la palabra 'examinar'. Cuando vas al doctor, te examina — te mira la garganta, los oídos, te toma la temperatura. ¿Te hace daño? No. Te examina para CUIDARTE. Para saber si estás bien o si necesitas algo. Así es cuando le pedimos a Dios que nos examine. No le pedimos castigo. Le pedimos cuidado profundo."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración modelo · 2 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Vamos a orar esta semana como David. Yo te enseño la oración:"</div>
            <div class="guia-say">"Padre, tú me conoces. Conoces mi camino, mis cabellos, mi nombre. Hoy te pido: examíname más. Conoce mi corazón. Guíame en tu camino eterno. En el nombre de Jesús. Amén."</div>
            <p>Eli puede repetir frase por frase si quiere, o solo escuchar.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Mañana sábado vamos a hacer la hoja de toda la semana — el resumen. Hoy solo dejamos esta pregunta sembrada: ¿le pides a Dios que te conozca más? El sábado lo recordamos."</div>
            <p>Eli recita la P y R una vez más:</p>
            <div class="guia-say">P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Confunde "examinar" con castigar · no entiende el giro</td><td>Repetir analogía del doctor. Reforzar: examinar = cuidar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende el giro pactual pero no lo articula propia</td><td>Pregunta: <em>"¿Por qué David le pide a Dios que lo conozca más?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula: "Dios me examina para cuidarme, no para castigarme · le pido que me conozca más"</td><td>Registrar. Hoja completa de síntesis se hace mañana sábado.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 min</div>
        <ol>
          <li>Leer Sal 139:23-24</li>
          <li>Una frase: <em>"Examíname Tú · Dios me examina para cuidarme, no para castigarme."</em></li>
          <li>Oración modelo (puede repetir Eli o solo mamá)</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 2: LECTOESCRITURA · Texto NUEVO de evaluación ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico azul">📖</div>
    <div>
      <div class="lesson-ttl">Lectoescritura · Texto NUEVO de evaluación · ¿lee fluido?</div>
      <div class="lesson-meta">35 min · Evaluación real de lectura fluida + escritura libre</div>
      <div class="mats"><span class="mat">Texto nuevo no visto (cuento corto)</span><span class="mat">Cuaderno</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes en lectura:</span> evaluar si Eli puede leer un texto NUEVO (que no ha visto antes) con entonación y comprensión. Esto mide fluidez real, no memoria.</p>
        <p><span class="lec-tag">Cómo elegir el texto:</span> uno de estos 3 caminos (lo que tengas a mano):</p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li><strong>Camino 1:</strong> un cuento corto de la biblioteca de la casa que Eli no haya visto (4-8 líneas)</li>
          <li><strong>Camino 2:</strong> imprimir el prompt IA al final de esta sección para que te genere un texto fresco apropiado</li>
          <li><strong>Camino 3:</strong> abrir un Salmo corto NUEVO (Sal 23, Sal 8, Sal 100). Eli ya conoce Sal 139 — busca uno que no haya leído</li>
        </ul>
        <p><span class="lec-tag">Lo que observas:</span> ¿Eli silabea? ¿lee de corrido? ¿pone entonación en las preguntas y exclamaciones? ¿se traba en palabras largas? ¿pide ayuda? <strong>Toma nota mental.</strong> Esto va al registro del sábado.</p>
        <p><span class="lec-tag">Regla del día:</span> punto final · ya en su 5º día reforzándola. Para próxima semana introducimos la mayúscula al inicio de oración.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">35 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Preparación del texto · 3 min</div>
            <p>Mamá tiene el texto NUEVO listo (impreso o en libro). Eli no lo ha visto. Mamá se lo entrega.</p>
            <div class="guia-say">"Eli, hoy vas a leer un texto que no has visto antes. No te apures. Si una palabra te cuesta, intenta. Si después de un intento no sale, yo te ayudo. No es un examen — es para ver qué tan bien lees hoy."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura en voz alta · 7 min <span class="edc-mark C">C</span></div>
            <p>Eli lee en voz alta. Mamá NO interrumpe, NO corrige errores menores. Solo ayuda si Eli se queda más de 3 segundos atrancada.</p>
            <p><strong>Mamá observa en silencio:</strong></p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>¿Lee corrido o silabea?</li>
              <li>¿Pone entonación en las preguntas, exclamaciones?</li>
              <li>¿Pasa por encima de palabras largas o las dice bien?</li>
              <li>¿Comprende lo que lee (se ve en su rostro)?</li>
            </ul>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración por Eli · 5 min <span class="edc-mark C">C</span></div>
            <div class="guia-say">"Ahora cuéntame con tus palabras lo que leíste. Sin mirar el texto."</div>
            <p>Eli narra. Si recuerda todo: comprensión sólida. Si recuerda solo fragmentos: comprende a medias. Si no recuerda nada: solo decodificó letras, no entendió.</p>
            <p>Esta narración va al registro del sábado.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura libre · 15 min <span class="edc-mark C">C</span></div>
            <p>Eli abre el cuaderno. Mamá da una sola instrucción:</p>
            <div class="guia-say">"Escribe en tu cuaderno 4 o 5 frases sobre lo que TÚ pensaste mientras leías. No qué dice el texto — lo que TÚ pensaste. Cada frase con punto al final."</div>
            <p>Eli escribe sola. Mamá no supervisa por encima.</p>
            <p>Al terminar, revisar solo el punto final. No corregir nada más.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Cada palabra que leíste hoy es un regalo. Hace 2 años ni siquiera podías abrir un libro y entender. Hoy lees y piensas. Dios te dio una mente y la está formando. Eso es providencia en tu cabeza."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C de la semana en lectura</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Silabea texto nuevo · narra fragmentos · escribe 1-2 frases con dificultad</td><td>S3 sigue con textos cortos. NO avanzar a textos largos.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Lee texto nuevo con esfuerzo · narra el sentido · escribe 3 frases con punto</td><td>Normal. Continuar.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Lee fluido texto nuevo · narra completo · escribe 4+ frases con voz propia</td><td>S3 puede introducir textos más largos · mayúscula al inicio.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional · si quieres generar texto nuevo</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">Si no tienes texto a mano, esto te genera uno con IA.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Texto de lectura evaluativa</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de lectoescritura en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado.

TEMA:
Texto NUEVO de lectura para evaluación de fluidez · viernes de la semana 2 · marco reformado.

PROPÓSITO:
Eli necesita un texto que NO haya visto antes para evaluar si lee fluido con entonación y comprende sin haber memorizado. El texto debe ser breve, apropiado para 6 años, con valores compatibles con un hogar cristiano reformado.

CONTENIDO DE LA HOJA (A4 vertical):

ENCABEZADO:
"Mi lectura del viernes · texto nuevo"

CUERPO:
Un cuento original corto (8-12 líneas) sobre uno de estos temas (elige el que mejor encaje):
- Un niño que observa la creación (animales, plantas) y agradece a Dios
- Un acto sencillo de amor al prójimo (ayudar a alguien que lo necesita)
- Una pequeña aventura de descubrimiento en la naturaleza
- Una conversación entre niño y abuelo sobre algo aprendido

Características del texto:
- Vocabulario apropiado para 6 años, lectora fluida en progresión.
- Frases de 6-10 palabras máximo.
- Letra grande (mínimo 18 pt, fuente Georgia o similar).
- Incluir algunas palabras con puntuación variada (signos de interrogación, exclamación) para evaluar entonación.
- Una ilustración simple tipo acuarela suave que acompañe el texto sin ocupar todo el espacio.

PREGUNTAS DE COMPRENSIÓN:
Debajo del texto, 3 preguntas con líneas guía:
1. "¿De qué se trató el cuento?" (3 líneas)
2. "¿Qué pensaste mientras lo leías?" (3 líneas)
3. "¿Qué cosa nueva aprendiste?" (2 líneas)

CARACTERÍSTICAS DEL CUENTO:
- Tono sobrio, sin moralismo pesado.
- Sin caricatura ni infantilismo saturado.
- Compatible con marco cristiano reformado.
- Si menciona a Dios, hacerlo con reverencia y naturalidad (no decoración).

FORMATO:
- A4 vertical.
- Fondo crema #FAF6F0.
- Color principal azul lectura #2A6090.
- Tipografía Georgia para texto del cuento, sans-serif para preguntas.

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escribir.

Si la IA genera HTML:
Artifact con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Eli lee texto nuevo UNA vez</li>
          <li>Mamá pregunta: "¿de qué se trató?"</li>
          <li>Eli escribe DOS frases con punto al final</li>
          <li>Listo. (Las 5 frases son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: HISTORIA · Génesis 1:20-31 · Días 5 y 6 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">📜</div>
    <div>
      <div class="lesson-ttl">Historia · Génesis 1:20-31 — Días 5 y 6 · Animales y el hombre</div>
      <div class="lesson-meta">25 min · Día 5 (peces, aves) · Día 6 (animales terrestres + hombre imagen de Dios)</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Hoja grande de 7 días (continúa)</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Hoy se cierra Génesis 1:</span> días 5 (peces y aves) y 6 (animales terrestres + hombre). El día 7 (reposo) lo vemos el sábado.</p>
        <p><span class="lec-tag">El momento central del día 6:</span> Génesis 1:26-27 — Dios crea al hombre <strong>a imagen suya</strong>. Esto es la doctrina del <em>imago Dei</em>. Eli no necesita el término técnico, pero sí debe entender: <em>los humanos somos diferentes a los animales — fuimos hechos para parecernos a Dios en algo</em>.</p>
        <p><span class="lec-tag">Sin dualismo ni reduccionismo:</span> el ser humano no es solo cuerpo (como los animales) ni solo espíritu (como los ángeles). Es ambos. Y es imagen de Dios — capacidad de relación con Él, de pensar, de gobernar la creación con responsabilidad.</p>
        <p><span class="lec-tag">"Y vio Dios que era bueno en gran manera":</span> en los días 1-5 Dios dice "era bueno" cuatro veces. Pero en el día 6, después de crear al hombre, dice <strong>"era bueno EN GRAN MANERA"</strong>. La creación del hombre eleva la creación entera. Esa es la dignidad humana — no en logros, sino en imagen.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Días 1, 2, 3, 4 — ¿qué creó Dios en cada uno?"</div>
            <p>Eli responde mirando la hoja grande de los 7 días. Si se traba, mamá ayuda.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Día 5 · 4 min <span class="edc-mark E">E</span></div>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:20-23 · adaptado</span>
"Entonces Dios dijo: '¡Que las aguas se llenen de peces, y que las aves vuelen sobre la tierra!'<br><br>
Dios creó los grandes peces y todos los seres del mar. También creó cada ave según su clase. Y Dios vio que era bueno.<br><br>
Y los bendijo: 'Sean fecundos y multiplíquense. Llenen el mar y la tierra.'<br><br>
Y fue la tarde y la mañana del QUINTO DÍA."
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Día 6 — primera parte · 4 min <span class="edc-mark E">E</span></div>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:24-25 · adaptado</span>
"Entonces Dios dijo: '¡Que la tierra produzca seres vivos: animales del campo, ganado, reptiles!'<br><br>
Y Dios hizo a los animales según su clase: cada uno con su forma. Y Dios vio que era bueno."
            </div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Día 6 — segunda parte (el hombre) · 4 min <span class="edc-mark D">D</span></div>
            <p>Mamá lee más despacio porque esto es el corazón de la creación:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Génesis 1:26-27, 31 · adaptado</span>
"Entonces Dios dijo: 'Hagamos al hombre <strong>a nuestra imagen</strong>, conforme a nuestra semejanza. Que gobierne a los peces del mar, a las aves del cielo y a todos los animales.'<br><br>
Y Dios creó al hombre a su imagen. Macho y hembra los creó.<br><br>
Dios miró todo lo que había hecho. Y vio que era bueno en gran manera. Y fue la tarde y la mañana del SEXTO DÍA."
            </div>
            <div class="guia-say">"Eli, escucha esto: en el día 6 Dios crea a los animales. Pero al final del día crea algo distinto: a las personas. Y dice algo único — 'hagamos al hombre a nuestra IMAGEN'. Los animales son creados a su clase. Pero las personas somos creadas a IMAGEN de Dios. Eso significa que tú te pareces a Dios en algo importante. Nos creó para conocerlo, hablar con Él, gobernar el mundo con cuidado."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración + dibujo · 8 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Cuéntame qué creó Dios en el día 5 y 6."</div>
            <p>Eli narra. Después completa los dibujos de los días 5 y 6 en la hoja grande de los 7 días.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Cuando Dios miró todo al final del día 6, dijo: 'era bueno EN GRAN MANERA'. ¿Por qué? Porque ahora estaba TÚ — bueno, no tú literal, pero un ser hecho a su imagen, capaz de conocerlo y amarlo. Tú estás en esa imagen. Eres parte de lo que Dios llamó 'muy bueno'."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Confunde días 5 y 6 · no entiende imagen de Dios</td><td>El sábado repasamos. Énfasis en la diferencia humano vs. animal.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Distingue los días · entiende que el hombre es especial</td><td>Normal.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que el ser humano es imagen de Dios · puede explicar la diferencia</td><td>Adelantar P21 (creó santos y felices) en S5+.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Leer Gén 1:20-31 una vez</li>
          <li>Eli dibuja en la hoja: día 5 (un pez), día 6 (un humano)</li>
          <li>Una frase: <em>"Dios hizo al hombre a su imagen. Por eso te pareces a Él."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 4: MATEMÁTICAS · 11-20 ABSTRACTO en cuaderno ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🔢</div>
    <div>
      <div class="lesson-ttl">Matemáticas · 11-20 escritos · etapa abstracta</div>
      <div class="lesson-meta">25 min · Solo símbolos · sin regletas · sin libros externos</div>
      <div class="mats"><span class="mat">Cuaderno cuadriculado</span><span class="mat">Lápiz</span><span class="mat">Regletas (solo si Eli se traba)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El cierre de la semana en mate:</span> Eli ya hizo concreto (mar), pictórico con regletas dibujadas (mié), verbal (jue). Hoy va al abstracto puro — escribe números y resuelve secuencias en cuaderno.</p>
        <p><span class="lec-tag">REGLA DE ORO:</span> si Eli responde mal o se traba, vuelve a regletas físicas. No abandones a la abstracción. Singapur dice: cuando algo se rompe, regresa al concreto antes de seguir.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Calentamiento oral · 3 min <span class="edc-mark E">E</span></div>
            <p>3 preguntas rápidas (responder verbal):</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>"Vecinos del 14" → <em style="color:var(--muted)">[13 y 15]</em></li>
              <li>"Vecinos del 17" → <em style="color:var(--muted)">[16 y 18]</em></li>
              <li>"Después del 19" → <em style="color:var(--muted)">[20]</em></li>
            </ul>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Ejercicio 1 · Completar la secuencia · 8 min <span class="edc-mark C">C</span></div>
            <p>Eli abre cuaderno cuadriculado. Mamá dicta estos ejercicios. Eli los escribe y completa los blancos:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Ejercicio 1 · Completa la secuencia</span>
a) 10 · 11 · ___ · 13 · ___ · 15<br>
b) 14 · ___ · 16 · 17 · ___<br>
c) ___ · 12 · 13 · ___ · 15<br>
d) 17 · 18 · ___ · 20<br>
e) 11 · ___ · ___ · 14
            </div>
            <p style="font-size:.85rem;color:var(--muted)">Respuestas: a) 12, 14 · b) 15, 18 · c) 11, 14 · d) 19 · e) 12, 13</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Ejercicio 2 · Estructura del número · 6 min <span class="edc-mark C">C</span></div>
            <p>Eli completa en cuaderno:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Ejercicio 2 · Decenas y unidades</span>
13 = ___ decena + ___ unidades<br>
15 = ___ decena + ___ unidades<br>
17 = ___ decena + ___ unidades<br>
20 = ___ decenas + ___ unidades<br>
1 decena + 6 unidades = ___<br>
1 decena + 8 unidades = ___
            </div>
            <p style="font-size:.85rem;color:var(--muted)">Respuestas: 1+3, 1+5, 1+7, 2+0, 16, 18</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Ejercicio 3 · "Sumar 1 = el siguiente" · 4 min <span class="edc-mark C">C</span></div>
            <p>Esta es la conexión a suma:</p>
            <div class="guia-bible" style="font-size:.92rem;line-height:1.8">
<span class="guia-bible-ref">Ejercicio 3 · Suma sencilla</span>
11 + 1 = ___<br>
14 + 1 = ___<br>
17 + 1 = ___<br>
19 + 1 = ___
            </div>
            <p style="font-size:.85rem;color:var(--muted)">Respuestas: 12, 15, 18, 20</p>
            <div class="guia-say">"¿Te das cuenta? Cuando sumas 1 a un número, obtienes el siguiente. Sumar es como dar un paso adelante en los números."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Hoy escribiste números, completaste secuencias, sumaste. Todo sin regletas — solo con tu mente. Los números viven dentro de ti ahora. Esa es la diferencia entre saber y memorizar."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C de la semana en mate</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Resuelve solo con regletas · más de 3 errores en abstracto</td><td>S3 sigue con concreto-pictórico. NO avanzar a suma todavía.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Resuelve abstracto con 1-2 errores · entiende valor posicional escrito</td><td>Normal. S3 puede empezar suma con regletas.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Resuelve sin errores · entiende sumar 1 = siguiente</td><td>S3 introduce suma 0-10 formal.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Calentamiento oral 3 preguntas</li>
          <li>Solo ejercicio 1 (completar secuencia) — primeros 3 items</li>
          <li>Solo ejercicio 3 (suma 1) — primeros 2 items</li>
          <li>Listo. (Ejercicio 2 puede esperar al sábado.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>
        <p><span class="lec-tag">Conexión con P11:</span> dos semanas, dos preguntas, una sola arquitectura: Dios <em>me mira</em> (P11) + Dios <em>me conoce</em> (P12). La próxima semana sumamos P13 (Dios <em>puede</em>).</p>
        <p><span class="lec-tag">Cómo evaluar la narración libre:</span> mamá pregunta UNA cosa: <em>"¿Qué aprendiste esta semana sobre que Dios lo sabe todo?"</em> y escucha. Si Eli menciona los 3 ángulos (ojos sobre el camino + cuenta cabellos + me llama por mi nombre), [C]. Si menciona 2, [D]. Si solo 1, [E]. Cero reproche — solo información.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> hábito semanal de síntesis. Evidencia física que se guarda. Asociación cumulativa P11+P12.</p>
        <div class="lec-bible">"Tu camino es vida y paz." — Romanos 8:6 (eco del descanso pactual) &nbsp;·&nbsp; "Pero el que ama a Dios, es conocido por él." — 1 Corintios 8:3</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por esta segunda semana. Que Eli salga sabiendo que tú la miras (P11) y la conoces (P12). Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Recitación cumulativa P11 + P12 <span class="edc-mark C">C</span> · 3 min</div>
            <p>Eli dice ambas P y R, sin ayuda. Si lo logra: ⭐ celebración.</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios?<br>R: Yo no puedo verlo, pero Él me mira continuamente.<br><br>P12: ¿Sabe Dios todas las cosas?<br>R: Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración libre — los 3 ángulos <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"Eli, cuéntame todo lo que aprendiste esta semana sobre que Dios lo sabe todo. Lo que recuerdes."</div>
            <p>Mamá escucha sin interrumpir. Identifica mentalmente:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>¿Mencionó "los ojos de Dios sobre el camino" (Job)? (Día 1 ✓)</li>
              <li>¿Mencionó los pajaritos o los cabellos contados (Mt 10)? (Día 2 ✓)</li>
              <li>¿Mencionó que Dios sabe su nombre o "mío eres tú" (Is 43)? (Día 3 ✓)</li>
            </ul>
            <div class="guia-say">"¡Qué bonito todo lo que recuerdas! Ahora hagamos la hoja para guardar."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Hoja de portafolio <span class="edc-mark C">C</span> · 10 min · Evidencia obligatoria</div>
            <p>Saca la hoja impresa del prompt al final de esta sección. Si no la generaste, hazlo ahora.</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Eli escribe su nombre y la fecha</li>
              <li>Copia la R de P12 en el espacio</li>
              <li>Dibuja con cuidado lo que se le pide</li>
              <li>Completa las 3 frases (ángulos de la semana)</li>
              <li>Mamá firma al final</li>
            </ul>
            <p>La hoja entra al sobre de Semana 2 del portafolio.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración de cierre <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Señor, gracias por esta segunda semana. Eli ahora sabe que tú la miras y la conoces. Gracias por su nombre, por su camino, por contarle hasta los cabellos. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C semanal · P12</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Recita la R memorizada. Narración solo incluye 1 ángulo</td><td>Repasar P12 toda la próxima semana como encadenado. NO abandonar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita P y R, narra 2 de los 3 ángulos con sus palabras</td><td>Avanzar a P13. Mencionar P12 ocasionalmente como repaso.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita y articula los 3 ángulos: camino + cabellos + nombre</td><td>⭐ CELEBRACIÓN. Hoja al portafolio. Lista para P13 en S3.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli · ⭐ Portafolio</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja resumen de la semana — esta es la que se guarda</strong></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible "resumen de portafolio" en español para mi hija Elisabeth ("Eli"), de 6 años. Familia presbiteriana en Bogotá, marco reformado pactual. Esta hoja se conserva en su portafolio durante años.

CONTEXTO:
- Es el viernes de la Semana 2. Eli vivió toda la semana con UNA pregunta del catecismo: CPN P12.
- La P y R:
  P: ¿Sabe Dios todas las cosas?
  R: Sí, ninguna cosa puede ocultarse de la vista de Dios.
- A lo largo de la semana exploramos 3 ángulos:
  • Día 1 (Martes): Job 24:23 — los ojos de Dios sobre el camino
  • Día 2 (Miércoles): Mateo 10:29-30 — Dios cuenta hasta los cabellos. No temo.
  • Día 3 (Jueves): Isaías 43:1 — Dios me llama por mi nombre. Soy suya.
- Esta hoja es la EVIDENCIA del portafolio — se guarda y se compara en un año.

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado destacado: "Lo que aprendí de Dios — Semana 2"
2. Sub-encabezado: "Familia Espinoza · 25-29 mayo 2026 · Catecismo P12"
3. Cuadro central GRANDE con la P y R completa (Georgia 24pt): "¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios."
4. Sección "Tres cosas que aprendí esta semana" — tres líneas con iconos:
   • 🛤️ "Dios mira ____________________________________" (espacio: mi camino)
   • 🐦 "Dios cuenta hasta ____________________________" (mis cabellos / los pajaritos)
   • ✍️ "Dios me llama por ____________________________" (mi nombre)
5. Recuadro 10×10 cm para dibujo libre con etiqueta: "Mi dibujo: lo que más me asombró esta semana"
6. Pregunta abierta con 4 líneas: "Cuando recuerdo que Dios sabe todo de mí, yo siento ________"
7. Espacio firmas: "Eli — fecha: ___ de ___ de 2026" + "Mamá: ____________________"
8. Cinta inferior dorada: "Te he llamado por tu nombre; mío eres tú. — Isaías 43:1"
9. Pie pequeño: "Familia Espinoza · Creciendo en el Pacto · 2026-27"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema: violeta (#6B3FAA) con acentos dorados (#C49A2A)
- Estilo: contemplativo, digno, NO infantil saturado — se guarda durante años
- Bordes decorativos suaves
- Tipografía: Georgia para P y R y títulos, sans-serif limpia para instrucciones
- Cita central del catecismo como joya destacada
- Líneas guía altura 10mm
- Iconos para los 3 ángulos: minimalistas, line-art, dorados o violeta suaves

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con todos los espacios en blanco visibles para escritura y dibujo.

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical, lista para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli dice P11 + P12 cumulativas</li>
          <li>Mamá pregunta: <em>"¿Qué aprendiste de que Dios lo sabe todo?"</em></li>
          <li>Escuchar narración libre</li>
          <li>Si no hay hoja impresa: cuaderno con dibujo + R de P12</li>
          <li>Oración de cierre</li>
          <li>Listo. (Hoja portafolio puede hacerse el sábado.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>
`,

sabado:`${APERTURA}

<!-- ═══════════════ DÍA 5 — SÁBADO · DÍA SUAVE DE CIERRE Y CREACIÓN ═══════════════ -->
<div class="strip s-teal" style="margin-bottom:14px">
<strong>📅 Sábado · 30 mayo 2026 · 2 horas máximo (8:00-10:30 am sugerido)</strong><br>
Día suave de cierre. NO es escuela completa. Es: repaso del catecismo cantado, naturaleza, geografía y arte. Recuperar pendientes de la semana si los hay. Tono distinto al resto de la semana: más conversación, más exploración, menos producción.
</div>

<!-- ═══════════════ BLOQUE 1: Versículo cantado + Repaso P11+P12 ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">🎵</div>
    <div>
      <div class="lesson-ttl">Apertura cantada · Versículo + Catecismo P11+P12</div>
      <div class="lesson-meta">15 min · Memoria por música, no por repetición</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span><span class="mat">Cuaderno de Eli</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p>El sábado en este plan no es para introducir nada nuevo. Es para <strong>sellar lo aprendido</strong>. Y la mejor manera de sellar es cantando. Los Reformadores musicalizaron los Salmos por la misma razón: lo que se canta, se recuerda toda la vida.</p>
        <p>Hoy Eli va a cantar el versículo de la semana (Sal 139:1) y recitar la cadena P11+P12 cumulativa. Eso es todo. No corrijas pronunciación ni melodía — celebra que lo está aprendiendo.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía rápida</span></div>
      <div class="guia">
        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cantar el versículo de la semana · 5 min</div>
            <p>Eli y mamá cantan juntas Salmo 139:1 con la melodía que inventaron el jueves:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Salmo 139:1</span>"Oh Señor, tú me has examinado y conocido."</div>
            <p>Tararear primero, después con palabras. 3 veces. ⭐ celebrar si Eli lo canta sola.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escribir el versículo en el cuaderno · 5 min</div>
            <p>Eli escribe el versículo en su cuaderno — escritura propia, NO copia. Mamá dicta despacio. Eli aplica la regla del punto final.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cadena cumulativa P11 + P12 · 5 min</div>
            <p>Eli recita las dos preguntas seguidas:</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br><br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
            <p>Si Eli lo dice de corrido, abrazo grande. Esa es la primera vez en su vida que une dos verdades del catecismo en una sola secuencia.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 2: Síntesis P12 + ⭐ Hoja de Portafolio ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Síntesis P12 + ⭐ Hoja de Portafolio cumulativa</div>
      <div class="lesson-meta">25 min · Narración libre de los 4 ángulos + hoja final que se guarda</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Hoja del prompt IA (generada antes)</span><span class="mat">Colores</span><span class="mat">Cuaderno</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del bloque:</span> Eli vivió toda la semana con P12 desde 4 ángulos distintos (camino, cabellos, nombre, examíname). Hoy sintetiza con sus palabras y deja huella física en la hoja de portafolio que se guardará durante años.</p>
        <p><span class="lec-tag">Los 4 ángulos de la semana:</span></p>
        <p>• <strong>Día 1 (Martes)</strong>: Job 24:23 — los ojos de Dios sobre el camino<br>• <strong>Día 2 (Miércoles)</strong>: Mt 10:29-30 — Dios cuenta los cabellos · no temas<br>• <strong>Día 3 (Jueves)</strong>: Is 43:1 — Dios me llama por mi nombre<br>• <strong>Día 4 (Viernes)</strong>: Sal 139:23-24 — yo le pido que me conozca más</p>
        <p><span class="lec-tag">Cómo evaluar:</span> mamá pregunta "¿qué aprendiste de que Dios sabe todas las cosas?" y escucha. Si menciona 4 ángulos: [C]. 3: [D]. 2 o menos: [E]. Sin reproche — esto es información para mamá, no examen para Eli.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cadena cumulativa P11 + P12 · 3 min <span class="edc-mark C">C</span></div>
            <p>Eli recita las DOS preguntas seguidas, sin ayuda. Si lo logra → ⭐ celebración fuerte.</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br><br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración libre — los 4 ángulos · 7 min <span class="edc-mark C">C</span></div>
            <div class="guia-say">"Eli, cuéntame todo lo que aprendiste esta semana sobre que Dios sabe todas las cosas. Como tú lo recuerdes."</div>
            <p>Mamá escucha sin interrumpir. Identifica mentalmente:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>¿Mencionó los ojos de Dios sobre el camino (Job)? — Día 1 ✓</li>
              <li>¿Mencionó los cabellos contados o los pajaritos (Mt 10)? — Día 2 ✓</li>
              <li>¿Mencionó que Dios sabe su nombre (Is 43)? — Día 3 ✓</li>
              <li>¿Mencionó "examíname Tú" o "Dios examina para cuidar" (Sal 139)? — Día 4 ✓</li>
            </ul>
            <p>Anotar mentalmente cuántos ángulos mencionó. Esto va al registro de la semana.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Hoja de portafolio · 12 min <span class="edc-mark C">C</span></div>
            <p>Mamá saca la hoja impresa generada con IA (prompt al final de esta sección). Si no se ha generado todavía, hacerlo ahora — toma 3 min con cualquier IA.</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Eli escribe su nombre y la fecha en la hoja</li>
              <li>Copia la R de P12 en el espacio para escribir</li>
              <li>Dibuja en el recuadro lo que se le pide</li>
              <li>Completa las 4 frases (una por ángulo de la semana)</li>
              <li>Mamá firma al final</li>
            </ul>
            <p>La hoja entra al sobre de Semana 2 del portafolio. Si tienes botón de respaldo (☁️), exporta backup digital también.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración de cierre semanal · 3 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Padre, gracias por esta segunda semana. Eli ahora sabe que tú la miras (P11), conoces (P12), cuentas sus cabellos, sabes su nombre, y la examinas para cuidarla. Que viva toda la semana con eso adentro del corazón. En el nombre de Jesús. Amén."</div>
            <p>Invitar a Eli a orar con UNA frase si quiere.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C semanal · P12</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Recita memorizada · narra solo 1-2 ángulos</td><td>Repasar P12 una semana más como encadenado. NO avanzar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita P y R · narra 3 de los 4 ángulos</td><td>Avanzar a P13 en S3.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita y articula los 4 ángulos: camino + cabellos + nombre + examíname</td><td>⭐ CELEBRACIÓN. Hoja al portafolio. Lista para P13.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Hoja de portafolio · ⭐ La que se guarda</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja resumen de la semana — esta es la que se conserva en el portafolio.</strong></p>
        <p style="font-size:.85rem;color:var(--muted)">Si todavía no la has generado, copia el prompt abajo y pégalo en Claude/GPT/Nano Banana. Imprime el resultado antes de empezar este bloque.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja portafolio P12</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible "resumen de portafolio" en español para mi hija Elisabeth ("Eli"), de 6 años. Familia presbiteriana en Bogotá, marco reformado pactual. Esta hoja se conserva en su portafolio durante años.

TEMA:
Catecismo CPN P12 · Semana 2 · 4 ángulos profundizados.

PROPÓSITO:
Eli vivió toda la semana con UNA pregunta del catecismo (P12) desde 4 ángulos. Esta hoja es la evidencia física que se guarda. Debe parecer lámina coleccionable, no tarea escolar.

CONTENIDO BÍBLICO:
P: ¿Sabe Dios todas las cosas?
R: Sí, ninguna cosa puede ocultarse de la vista de Dios.

LOS 4 ÁNGULOS DE LA SEMANA:
- Día 1 (Martes): Job 24:23 — los ojos de Dios sobre el camino
- Día 2 (Miércoles): Mt 10:29-30 — Dios cuenta los cabellos · no temas
- Día 3 (Jueves): Is 43:1 — Dios me llama por mi nombre
- Día 4 (Viernes): Sal 139:23-24 — yo le pido a Dios que me conozca más

FORMATO:
- Una página A4 vertical, lista para imprimir.
- Diseño contemplativo, lámina coleccionable, NO infantil saturado.
- Márgenes amplios.

ESTILO VISUAL:
- Fondo crema cálido #FAF6F0.
- Color tema: violeta profundo #6B3FAA con acentos dorados #C49A2A.
- Estilo digno, reverente, contemplativo.
- No caricaturas exageradas, colores neón, ni estética infantil saturada.
- No representar a Dios. No halos místicos.

TIPOGRAFÍA:
- Encabezados en Georgia o serif clásica.
- Texto en sans-serif clara.
- Mín. 14 pt instrucciones, 22+ pt para P y R.

CONTENIDO DE LA HOJA:

ENCABEZADO:
"Lo que aprendí de Dios — Semana 2"

SUBTÍTULO:
"Familia Espinoza · 26-30 mayo 2026 · Catecismo P12"

CUADRO CENTRAL GRANDE:
La P y R completa en serif grande:
"¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios."

SECCIÓN "4 cosas que aprendí esta semana":
4 líneas con iconos para que Eli complete:
- 🛤️ "Dios ve mi __________________________" (camino)
- 🐦 "Dios cuenta hasta mis _______________" (cabellos)
- ✍️ "Dios me llama por mi __________________" (nombre)
- 🔍 "Yo le pido a Dios que me _______________ más" (examine / conozca)

RECUADRO PARA DIBUJO 10×10 cm:
"Mi dibujo: cómo me siento cuando recuerdo que Dios sabe todo de mí"

PREGUNTA ABIERTA con 4 líneas:
"Cuando recuerdo que Dios sabe todo de mí, yo siento ___________"

ESPACIO FIRMAS:
"Eli — fecha: ___ de mayo de 2026"
"Mamá: __________________"

CINTA INFERIOR DORADA:
"Examíname, oh Dios, y conoce mi corazón. — Salmo 139:23"

PIE PEQUEÑO:
"Familia Espinoza · Creciendo en el Pacto · 2026-27"

CRITERIOS IMPORTANTES:
- Lámina conservable, no tarea escolar.
- Iconos minimalistas line-art, no caricatura.
- Espacio real para escribir.

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

Si la IA genera HTML:
Artifact HTML completo con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 min</div>
        <ol>
          <li>Eli dice P11 + P12 cumulativas</li>
          <li>Mamá pregunta: <em>"¿Qué aprendiste de que Dios sabe todo?"</em></li>
          <li>Escuchar narración libre</li>
          <li>Si no hay hoja impresa: cuaderno con dibujo + R de P12</li>
          <li>Oración de cierre</li>
          <li>Listo. (Hoja portafolio formal puede hacerse el domingo si hoy se quedó sin tiempo.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 3: Diario de Naturaleza ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico verde">🌱</div>
    <div>
      <div class="lesson-ttl">Diario de Naturaleza · Observar la creación de Dios</div>
      <div class="lesson-meta">30 min · Charlotte Mason — atención reverente · Génesis 1 vivido</div>
      <div class="mats"><span class="mat">Cuaderno de naturaleza</span><span class="mat">Lápiz + colores o crayolas</span><span class="mat">Lupa si tienes</span><span class="mat">Bolsa para llevar tesoros</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Qué es el diario de naturaleza:</span> NO es manualidad. NO es ciencia escolar. Es <strong>entrenamiento de la atención reverente</strong>. Charlotte Mason enseñaba que mirar de cerca una hoja, una piedra, una flor, es aprender a leer la Palabra de Dios escrita en la naturaleza. Los Reformadores la llamaban "el libro de la creación".</p>
        <p><span class="lec-tag">Por qué importa para Eli:</span> a los 6 años, ver bien una flor durante 5 minutos enseña más sobre el orden de Dios que un libro entero de biología. Es lectura del mundo. El diario de naturaleza forma <em>el ojo que sabe mirar</em>.</p>
        <p><span class="lec-tag">Cómo funciona en la práctica:</span></p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li>1. Salir a buscar algo de la creación: una hoja, una flor pequeña, una piedra, una rama. En el jardín, balcón, o paseo corto de 5 min por la cuadra.</li>
          <li>2. Sentarse con calma a mirarla 3-5 minutos. SIN dibujar todavía. Solo mirar.</li>
          <li>3. Hablar de lo que se ve: "¿Qué forma tiene? ¿Cuántas partes? ¿Qué colores? ¿Qué la hace ÚNICA?"</li>
          <li>4. Después de mirar bien, Eli dibuja en su cuaderno de naturaleza lo que vio. Con calma, con detalle.</li>
          <li>5. Mamá escribe (o Eli dicta) UNA frase sobre lo que descubrió.</li>
        </ul>
        <p><span class="lec-tag">El cierre pactual:</span> "Dios hizo esta hoja/flor/piedra con cuidado. Cada parte tiene un porqué. Cuando miramos así, estamos leyendo el libro de su creación."</p>
        <p><span class="lec-tag">No saturar:</span> 1 sola hoja/flor/piedra por sesión. Mejor mirar UNA cosa bien que 5 cosas mal.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía rápida</span></div>
      <div class="guia">
        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Salir a buscar tesoros de la creación · 10 min</div>
            <p>Mamá y Eli salen al jardín, balcón, o calle. Eli elige UNA cosa que le llame la atención. La trae al diario.</p>
            <div class="guia-say">"Eli, hoy somos exploradoras del mundo de Dios. Vamos a buscar UNA cosa que te asombre. Solo una. Cuando la veas, dime."</div>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Mirarla bien · 5 min en silencio</div>
            <div class="guia-say">"Antes de dibujarla, mirémosla bien. ¿Qué forma tiene? ¿Cuántas partes? ¿Qué colores? ¿Hay algo escondido si miramos de cerca?"</div>
            <p>Si tienes lupa, sácala. Eli mira con la lupa. Eso engancha la atención.</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dibujar con calma · 10 min</div>
            <p>Eli dibuja en su cuaderno la cosa que eligió. Mamá NO corrige. Solo acompaña.</p>
            <p>Si Eli quiere agregar etiquetas (pétalo, tallo, hoja), mamá la ayuda con la palabra correcta.</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escribir una frase · 3 min</div>
            <div class="guia-say">"Ahora escribe UNA frase sobre lo que descubriste."</div>
            <p>Por ejemplo: "Hoy vi una hoja con muchas líneas pequeñas que parecen caminos." Recordatorio: <strong>el punto final al terminar</strong> (regla del día).</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min</div>
            <div class="guia-say">"Dios hizo esta hoja (o flor, o piedra) con cuidado. Cuando la miramos bien, estamos leyendo el libro de su creación. Génesis dice: 'Y vio Dios que era bueno.' Esto que dibujaste hoy es parte de lo que Él hizo y llamó bueno."</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Recoger UNA cosa de la naturaleza (hoja, flor)</li>
          <li>Mirarla 3 min en silencio</li>
          <li>Dibujarla en el cuaderno</li>
          <li>UNA frase: "Hoy vi…"</li>
          <li>Listo. (Sin lupa, sin etiquetas, sin cierre pactual está bien.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 4: Geografía · Mi lugar en el mundo de Dios ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">🌍</div>
    <div>
      <div class="lesson-ttl">Geografía · Mi lugar en el mundo de Dios</div>
      <div class="lesson-meta">20 min · Colombia y el mundo · Conexión Génesis 1</div>
      <div class="mats"><span class="mat">Mapa de Colombia (impreso o digital)</span><span class="mat">Mapa del mundo</span><span class="mat">Lápiz</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué geografía en esta semana:</span> en Semana 1 dijimos a Eli que Dios la puso en este lugar exacto del mundo. Hoy hacemos eso visible con mapas. La geografía no es decoración curricular: es <strong>mostrar que la providencia de Dios tiene coordenadas</strong>. Eli no nació "en algún lugar" — nació en Bogotá, en Colombia, en América del Sur, en este mundo que Dios hizo.</p>
        <p><span class="lec-tag">Cómo funciona:</span> sin presión. Solo señalar, dibujar y hablar.</p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li>1. Sacar el mapa del mundo. Encontrar América del Sur. Encontrar Colombia.</li>
          <li>2. Dentro de Colombia, encontrar Bogotá. Pintarla de un color.</li>
          <li>3. Si Eli quiere, dibujar dónde está nuestra casa, nuestra iglesia.</li>
          <li>4. Conversación: "Otros niños viven en otros países. Dios puso a cada uno en un lugar."</li>
        </ul>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía rápida</span></div>
      <div class="guia">
        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">El mundo entero · 5 min</div>
            <p>Mostrar el mapa del mundo a Eli.</p>
            <div class="guia-say">"Eli, mira: este es el mundo entero. Dios hizo todo esto. Hay muchos países. ¿Puedes encontrar nuestro continente? América del Sur."</div>
            <p>Si Eli no lo encuentra, mamá lo señala con calma. Sin presión.</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Colombia · 5 min</div>
            <p>Hacer zoom (o pasar al mapa de Colombia).</p>
            <div class="guia-say">"Aquí está Colombia. Y aquí está Bogotá — donde vivimos. Píntala del color que más te guste."</div>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Nuestra casa y nuestra iglesia · 5 min</div>
            <p>Eli dibuja en una hoja (o sobre el mapa) un círculo para nuestra casa y otro para la iglesia Raah. Conversación: ¿qué tan cerca están?</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 3 min</div>
            <div class="guia-say">"En todos los países del mundo hay niños que Dios conoce, igual que te conoce a ti. Otros viven en Egipto, en Estados Unidos, en China, en África. Dios no se olvida de ninguno. Pero a ti te puso aquí, en Bogotá, en esta familia, en nuestra iglesia. Eso es providencia."</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 5: Arte intencional · Los 5 elementos visuales (Monart) ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🎨</div>
    <div>
      <div class="lesson-ttl">Arte · Los 5 elementos del lenguaje visual</div>
      <div class="lesson-meta">30 min · Método Monart (Mona Brookes · Drawing With Children) · ejercicio intencional, no libre</div>
      <div class="mats"><span class="mat">Hoja blanca A4</span><span class="mat">Marcadores finos negros</span><span class="mat">Lápiz</span><span class="mat">Borrador</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">4 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué arte intencional, no libre:</span> el dibujo libre tiene su lugar — pero <strong>los niños aprenden a dibujar de verdad cuando alguien les enseña los elementos básicos</strong>. Mona Brookes (método Monart) demostró con miles de niños desde los 4 años que el dibujo es enseñable como cualquier otra disciplina. No es "talento" — es <em>lenguaje visual</em>.</p>
        <p><span class="lec-tag">Los 5 elementos del lenguaje visual:</span> según Brookes, <strong>todas las imágenes del mundo se pueden descomponer en 5 elementos</strong>:</p>
        <ol style="margin:6px 0 6px 1.2rem;font-size:.88rem;line-height:1.8">
          <li><strong>•   Punto / pequeños toques</strong></li>
          <li><strong>—   Línea recta</strong></li>
          <li><strong>~   Curva / línea ondulada</strong></li>
          <li><strong>&lt;   Ángulo / línea quebrada</strong></li>
          <li><strong>○   Forma circular</strong></li>
        </ol>
        <p>Cuando Eli aprende a IDENTIFICAR estos 5 elementos en cualquier objeto del mundo, puede dibujarlo. Eso es el secreto del método.</p>
        <p><span class="lec-tag">El plan del año en arte:</span></p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li><strong>S2 (hoy):</strong> Aprender los 5 elementos · ejercicio de reconocimiento</li>
          <li><strong>S3:</strong> Dibujar un objeto simple usando solo los 5 elementos (una flor de tu jardín)</li>
          <li><strong>S4:</strong> Apreciación de una obra clásica + identificar los 5 elementos en ella</li>
          <li><strong>S5+:</strong> Dibujar de gráficos (copiar un dibujo de animal/objeto)</li>
          <li><strong>S10+:</strong> Dibujar de naturaleza muerta (objetos reales en mesa)</li>
          <li><strong>S20+:</strong> Sombreado · positivo/negativo · proporciones</li>
        </ul>
        <p><span class="lec-tag">Conexión pactual:</span> Dios creó usando palabra. Cuando Eli dibuja, usa elementos visuales — y al hacerlo, <em>imita</em> la actividad creadora de Dios. El arte no es decoración; es ejercicio del imago Dei.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">30 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Presentar los 5 elementos · 5 min <span class="edc-mark E">E</span></div>
            <p>Mamá dibuja en una hoja, en grande, los 5 elementos uno por uno. Los nombra:</p>
            <div class="guia-bible" style="font-size:.95rem;line-height:1.8">
<span class="guia-bible-ref">Los 5 elementos del lenguaje visual</span>
1. <strong>Punto:</strong> • &nbsp;•&nbsp; • &nbsp; (pequeños toques)<br>
2. <strong>Línea recta:</strong> ─── (vertical, horizontal, diagonal)<br>
3. <strong>Curva:</strong> ⌒ ⌣ ~~~ (ondas y curvas)<br>
4. <strong>Ángulo:</strong> ∠ &lt; &gt; (líneas quebradas)<br>
5. <strong>Forma circular:</strong> ○ ◯ ⊙ (círculo cerrado)
            </div>
            <div class="guia-say">"Eli, todas las cosas del mundo que vemos están hechas con estos 5 elementos. Una flor tiene círculo (su centro), líneas (su tallo), curvas (sus pétalos). Una casa tiene líneas rectas y ángulos. Hasta tu carita tiene círculo (tu cara), curvas (tus mejillas), puntos (tus pecas si tienes)."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Eli practica cada elemento · 5 min <span class="edc-mark D">D</span></div>
            <p>Eli toma su propia hoja. Mamá nombra los elementos en orden. Eli los dibuja:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>5 puntos en una fila</li>
              <li>3 líneas rectas: una vertical, una horizontal, una diagonal</li>
              <li>3 curvas distintas: una ondulada, una en arco, una en S</li>
              <li>3 ángulos: uno agudo, uno recto, uno abierto</li>
              <li>3 círculos: pequeño, mediano, grande</li>
            </ul>
            <p>Mamá NO corrige el resultado. Solo observa.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Juego de reconocimiento · 10 min <span class="edc-mark D">D</span></div>
            <p>Mamá toma un objeto cualquiera de la casa — una taza, una flor, un juguete simple. Lo pone frente a Eli.</p>
            <div class="guia-say">"Mira este objeto. Vamos a buscar los 5 elementos en él. ¿Dónde ves un círculo? ¿Dónde ves una línea recta? ¿Dónde ves una curva? ¿Dónde ves un ángulo? ¿Dónde ves puntos?"</div>
            <p>Eli señala. Mamá afirma cada hallazgo. Repetir con 2-3 objetos distintos.</p>
            <p style="font-size:.85rem;color:var(--muted);font-style:italic">Esto es lo que Brookes llama "visual perception game" — entrenar el ojo para ver los elementos antes de dibujar.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Dibujo guiado · una flor de campo · 8 min <span class="edc-mark C">C</span></div>
            <p>Mamá guía a Eli paso a paso usando solo los 5 elementos. Lo dibuja a la vez en su propia hoja:</p>
            <div class="guia-bible" style="font-size:.88rem;line-height:1.8">
<span class="guia-bible-ref">Una flor — paso a paso</span>
1. <strong>Centro:</strong> dibuja un <em>círculo</em> pequeño en el medio de la hoja.<br>
2. <strong>Pétalos:</strong> dibuja 6 <em>curvas</em> alrededor del centro, como pétalos.<br>
3. <strong>Tallo:</strong> baja una <em>línea recta</em> desde la flor.<br>
4. <strong>Hojas:</strong> a los lados del tallo, dibuja 2 <em>curvas</em> como hojas.<br>
5. <strong>Detalles:</strong> agrega <em>puntos</em> en el centro de la flor.<br>
6. <strong>Suelo:</strong> dibuja una <em>línea recta</em> debajo del tallo.
            </div>
            <p>Al terminar, Eli y mamá comparan sus flores. Mamá señala los 5 elementos en la flor de Eli.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre pactual · 2 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Eli, hoy aprendiste algo grande: el mundo entero — desde una flor hasta tu casa — está hecho con 5 elementos. Dios creó usando palabra; nosotros creamos usando esos elementos. Cuando dibujas, no es solo entretenimiento — es ejercicio de tu mente, formación de tu ojo, e imitación de Dios el Creador."</div>
            <p>Eli pega su flor en el portafolio. Mamá escribe en la parte de atrás: "Mi primera flor con los 5 elementos · 30 mayo 2026."</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No distingue elementos · dibuja sin guía</td><td>Repetir solo nombres + práctica el sábado siguiente.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Dibuja los 5 elementos · identifica algunos en objetos</td><td>Normal · esto es esperado.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Identifica los 5 elementos en cualquier objeto · dibuja flor guiada bien</td><td>S3 puede pasar a dibujar de gráficos.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 15 min</div>
        <ol>
          <li>Mamá dibuja los 5 elementos. Eli los repite.</li>
          <li>Identificar los 5 en UN solo objeto</li>
          <li>Dibujar la flor guiada (saltarse pasos 5-6 si hay cansancio)</li>
          <li>Listo. (Juego con varios objetos y refinamiento son [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 6: Apreciación de obra de arte clásica ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico dorado">🖼️</div>
    <div>
      <div class="lesson-ttl">Apreciación · Una obra clásica conectada con la creación</div>
      <div class="lesson-meta">15 min · Mirar, hablar, conectar · Charlotte Mason "picture study"</div>
      <div class="mats"><span class="mat">Imagen impresa o en pantalla</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Qué es "picture study":</span> Charlotte Mason introdujo el "estudio de pintura" como ejercicio formativo. <strong>Mostrar a Eli UNA obra maestra · que la mire por minutos · que la describa · que la recuerde después.</strong> No es clase de historia del arte — es educación de la mirada.</p>
        <p><span class="lec-tag">Obra sugerida esta semana (Creación):</span> <em>"El Jardín del Edén"</em> de Jan Brueghel el Joven (siglo XVII) o <em>"La creación de Adán"</em> de Miguel Ángel (Capilla Sixtina). Ambas son hijas del mundo reformado-protestante (Brueghel fue protestante) o del Renacimiento católico — pero ambas representan visualmente Gén 1.</p>
        <p><span class="lec-tag">Cómo conseguir la imagen:</span></p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li>Google Images: "Jan Brueghel Jardín del Edén" o "Miguel Ángel Creación de Adán"</li>
          <li>Wikipedia → descargar imagen en alta calidad</li>
          <li>Imprimir o mostrar en pantalla</li>
        </ul>
        <p><span class="lec-tag">El plan del año en apreciación:</span> una obra por mes, conectada con el tema del catecismo/historia:</p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li><strong>Mes 1 (S1-S4):</strong> Creación · Caída — Brueghel "Jardín del Edén"</li>
          <li><strong>Mes 2 (S5-S9):</strong> Abraham · patriarcas — Rembrandt "Sacrificio de Isaac"</li>
          <li><strong>Mes 3 (S10-S14):</strong> Éxodo · Moisés — Botticelli "Pruebas de Moisés"</li>
          <li><strong>Mes 4 (S15-S19):</strong> David · Reyes — obras renacentistas de David</li>
          <li>Y así sucesivamente — Antiguo Testamento contado en obras maestras</li>
        </ul>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Mostrar la obra · mirar en silencio · 4 min <span class="edc-mark E">E</span></div>
            <p>Mamá muestra la imagen a Eli. Sin decir nada los primeros 30 segundos.</p>
            <div class="guia-say">"Eli, esta es una pintura muy antigua. Mírala con calma. Toma todo el tiempo. Cuando termines, vamos a hablar."</div>
            <p>Eli mira 3-4 minutos. Mamá no presiona ni pregunta.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Describir lo visto · 5 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Cuéntame todo lo que ves en este cuadro. Sin importar el orden. Solo lo que tus ojos encuentran."</div>
            <p>Eli describe. Mamá afirma con "ajá", "qué bueno que viste eso". Si Eli se queda corta, mamá pregunta: "¿y eso del fondo qué es?", "¿qué animales puedes ver?", "¿qué hace esa persona?"</p>
            <p>El objetivo NO es que diga "Adán y Eva" — es que use sus ojos.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conexión con la Biblia · 3 min <span class="edc-mark D">D</span></div>
            <div class="guia-say">"Este cuadro lo pintó alguien que leyó Génesis 1 y 2. Estaba imaginando cómo era el mundo cuando Dios lo acabó de crear. ¿Recuerdas el día 6 que vimos ayer? Dios miró todo y dijo 'era bueno en gran manera'. El pintor quiso mostrar ese momento."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Identificar los 5 elementos en la pintura · 2 min <span class="edc-mark C">C</span></div>
            <p>Conectar con el bloque anterior. Mamá pregunta:</p>
            <div class="guia-say">"¿Dónde ves un círculo en esta pintura? ¿Dónde ves curvas? ¿Dónde líneas rectas? ¿Dónde ángulos? ¿Dónde puntos?"</div>
            <p>Eli señala. Esto cierra el círculo: el arte clásico también está hecho con los 5 elementos que ella acaba de aprender.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre · 1 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"El pintor que hizo esto vivió hace cientos de años. Pero leyó la misma Biblia que tú lees. Y quiso mostrar lo que su corazón sintió al leer Génesis 1. Cada vez que veamos una pintura juntas, vamos a recordar: alguien la hizo para mostrar algo importante."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 8 min</div>
        <ol>
          <li>Mostrar la imagen · Eli mira 1-2 min</li>
          <li>Mamá pregunta: "¿qué ves?"</li>
          <li>Una frase: <em>"Este pintor leyó Génesis 1 y quiso mostrarlo."</em></li>
          <li>Listo. (Identificar 5 elementos es [C].)</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 7: Apreciación musical · Vivaldi y la creación ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">🎼</div>
    <div>
      <div class="lesson-ttl">Música · Apreciación de Vivaldi "La Primavera"</div>
      <div class="lesson-meta">10 min · Escuchar música clásica conectada con la creación</div>
      <div class="mats"><span class="mat">YouTube o Spotify · "Vivaldi Primavera Allegro"</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué música clásica:</span> Bach decía que toda su música era <em>"Soli Deo Gloria"</em>. Vivaldi era sacerdote y compositor. La música clásica occidental nació en gran parte en iglesias y para Dios. Cuando Eli escucha estos compositores, no solo desarrolla oído — recibe arte que fue creado <em>delante de Dios</em>.</p>
        <p><span class="lec-tag">Obra de esta semana:</span> <strong>Antonio Vivaldi · "La Primavera"</strong> (primera de las 4 Estaciones), primer movimiento Allegro. 3 minutos. Música que evoca la naturaleza recién creada, los pájaros cantando, la brisa, el agua corriendo.</p>
        <p><span class="lec-tag">Cómo escucharla:</span></p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li>Buscar "Vivaldi Spring Allegro" en YouTube o Spotify</li>
          <li>Versión recomendada: cualquiera de Il Giardino Armonico o Akademie für Alte Musik Berlin</li>
          <li>Reproducir solo el primer movimiento (3-4 min, no la pieza completa de 40 min)</li>
        </ul>
        <p><span class="lec-tag">El plan del año en música:</span> una obra por mes, conectada con el tema:</p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
          <li><strong>Mes 1:</strong> Vivaldi "Primavera" (creación)</li>
          <li><strong>Mes 2:</strong> Haendel "Messiah · And the glory of the Lord" (patriarcas / promesa)</li>
          <li><strong>Mes 3:</strong> Bach "Cantata BWV 4" Cristo yace (Pascua)</li>
          <li><strong>Mes 4:</strong> Mendelssohn "Elías" (profeta)</li>
          <li>etc — el Antiguo Testamento contado por compositores</li>
        </ul>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">10 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Presentar al compositor · 2 min</div>
            <div class="guia-say">"Eli, vamos a escuchar música hecha por un hombre llamado Antonio Vivaldi. Vivió hace casi 300 años. Era músico, pero también era sacerdote en Italia. Compuso esta pieza para mostrar cómo es la primavera — cuando las flores empiezan a salir, los pájaros cantan, los animales se despiertan. Es como si Vivaldi hubiera leído Génesis 1 y quisiera mostrarlo con música."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escuchar sin distracciones · 4 min <span class="edc-mark E">E</span></div>
            <p>Reproducir el Allegro de "La Primavera". Eli puede:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Cerrar los ojos y escuchar</li>
              <li>Acostarse en el sofá</li>
              <li>Dibujar lo que oye en una hoja</li>
            </ul>
            <p>NO hablar durante la música. Solo escuchar.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conversación · 3 min <span class="edc-mark D">D</span></div>
            <p>Al terminar la música:</p>
            <div class="guia-say">"¿Qué imaginaste mientras escuchabas? ¿Qué partes te parecieron felices? ¿Cuál parte te pareció más fuerte? ¿Escuchaste algo que parecía un pájaro? ¿Algo que parecía agua corriendo?"</div>
            <p>Eli responde libremente. Cualquier asociación es válida.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre · 1 min <span class="edc-mark E">E</span></div>
            <div class="guia-say">"Vivaldi quiso que su música mostrara cómo es el mundo cuando empieza la vida nueva. La creación de Dios es así — llena de sonidos, de movimiento, de vida. Cada vez que oigas pájaros cantando esta semana, recuerda esta música."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 min</div>
        <ol>
          <li>Una frase de introducción: "Música de Vivaldi sobre la primavera, hecha hace 300 años"</li>
          <li>Reproducir solo 2 min del Allegro</li>
          <li>Una pregunta: "¿qué imaginaste?"</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 8: Diagnóstico de mamá · 8 preguntas semanales ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">📋</div>
    <div>
      <div class="lesson-ttl">Diagnóstico de la educadora · 8 preguntas clave</div>
      <div class="lesson-meta">15 min · Solo para mamá · registrar en pestaña Registro</div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Para mamá — antes de responder</span></div>
      <div class="lec-mama">
        <p>Estas preguntas las contestas <strong>tú, no Eli</strong>. Son tu termómetro semanal. Hazlo con calma — al final del sábado, en una taza de café. Las respuestas alimentan la planificación de la próxima semana. Registra en la pestaña <em>"✏️ Registro"</em> de la app y luego exporta respaldo con el botón ☁️.</p>
        <p><strong>Antes de empezar:</strong> respira. La semana 2 no es perfecta. El objetivo no es que Eli haya cumplido todo — es que tú entiendas dónde está y qué ajustar.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📝</span><span class="lsec-ttl">Las 8 preguntas</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura</div>
            <p>¿Leyó el texto NUEVO del viernes con entonación o todavía silabea? ¿Comprende lo que lee al primer paso? ¿Cómo va comparado con S1?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Escritura propia</div>
            <p>¿El párrafo del jueves "Yo vivo en Bogotá" salió con voz propia? ¿Cuántas frases · cuántas con punto final? ¿Aplicó la regla del día consistentemente?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Matemáticas — antes/después</div>
            <p>¿Resolvió antes/después con regletas (martes), con apoyo verbal (jueves), y abstracto en cuaderno (viernes)? ¿Cuál nivel alcanzó? ¿Lista para suma 0-10 en S3?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Números 11-20</div>
            <p>¿Comprende valor posicional (1 decena + X unidades) o solo memorizó nombres? ¿Entiende que 20 = 2 decenas (no 1+10)?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Catecismo P12 (cadena P11+P12)</div>
            <p>¿Logró la cadena cumulativa hoy en el bloque 2? ¿Articuló los 4 ángulos (camino + cabellos + nombre + examíname)? ¿Está lista para P13 en S3?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Historia · Génesis 1 completo</div>
            <p>¿La hoja grande de los 7 días quedó completa? ¿Recuerda qué pasó cada día? ¿Entendió imago Dei (Gén 1:26-27)?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">7</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Naturaleza · Arte · Música</div>
            <p>¿El frijol del miércoles produjo asombro? ¿La entrada del diario de naturaleza tiene dibujo + frase? ¿Reconoce los 5 elementos visuales? ¿Le gustó Vivaldi?</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">8</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Ritmo PARA TI</div>
            <p>¿El ritmo de 5 días martes-sábado fue sostenible PARA TI? ¿Hubo algún día que casi no llegas? ¿Algo del plan se siente sobrecargado? ¿Qué necesitas ajustar para S3?</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">💾</span><span class="lsec-ttl">Después del diagnóstico — RESPALDO</span></div>
      <div class="ficha-eli">
        <p style="font-size:.9rem"><strong>Antes de cerrar la semana:</strong></p>
        <ol style="margin:6px 0 6px 1.2rem;font-size:.86rem;line-height:1.8">
          <li>Ir a la pestaña <strong>✏️ Registro</strong> de esta semana</li>
          <li>Llenar las observaciones por área (lectura, escritura, mate, historia, catecismo)</li>
          <li>Marcar los E/D/C de cada competencia en la pestaña <strong>Progreso E/D/C</strong></li>
          <li>Tocar el botón <strong>☁️ Respaldo</strong> en la barra superior</li>
          <li>Elegir <strong>"Enviar a Drive / iCloud / Gmail"</strong> y guardarlo en tu carpeta de la familia</li>
        </ol>
        <p style="font-size:.85rem;color:var(--muted);font-style:italic">Así nunca pierdes el trabajo de la semana y puedes abrir el respaldo desde cualquier dispositivo.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Si solo tienes 5 minutos</span></div>
      <div class="minima">
        <div class="minima-ttl">Las 3 preguntas mínimas</div>
        <ol>
          <li>¿Qué área avanzó más esta semana?</li>
          <li>¿Qué área necesita más atención la próxima semana?</li>
          <li>¿Cómo está Eli emocionalmente con el ritmo? ¿Cómo estoy YO?</li>
        </ol>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════ BLOQUE 9: Recuperación de pendientes (opcional) ═══════════════ -->
<div class="strip s-rust" style="margin:14px 0">
<strong>🔄 Si quedó algo pendiente esta semana, este es el momento:</strong><br>
Si no alcanzaron a hacer alguna de las actividades de martes-viernes (frijol, diario de naturaleza, alguna sección del catecismo), pueden tomar este último bloque del sábado para hacerlo con calma. NO es obligatorio. Si todo se hizo, simplemente terminen aquí y disfruten el resto del sábado en familia.<br><br>
<strong>Pendientes posibles a recuperar:</strong>
<ul style="margin:8px 0 0 1.2rem;font-size:.86rem">
<li>Genealogía de los abuelos (si no se terminó el martes)</li>
<li>Experimento del frijol (si no había frijoles el miércoles)</li>
<li>Hoja del portafolio P12 (si no se completó en el bloque 2)</li>
<li>Lectura de algún texto que no se alcanzó</li>
<li>Algún ejercicio de matemáticas pendiente</li>
</ul>
</div>

<!-- ═══════════════ CIERRE DEL SÁBADO ═══════════════ -->
<div class="strip s-sage" style="margin:14px 0">
<strong>🙏 Cierre de la semana — oración en familia (5 min):</strong><br>
"Señor, gracias por esta semana. Gracias porque cantamos tu Palabra, miramos tu creación, dibujamos lo que nos enseñaste. Gracias porque conoces a Eli, conoces a papá y a mamá, conoces nuestro lugar en el mundo. Que esta semana que descansamos hoy quede sembrada en su corazón. En el nombre de Jesús. Amén."<br><br>
<strong>Después de la oración:</strong> el resto del sábado es FAMILIA — descanso, juego, comida, lo que la familia quiera hacer junta. Eso también es paideia.
</div>`
};

// ── SEMANA 3 ──
const W3 = {
fm:`<div class="fm-section">
<div class="fm-title">Formación para mamá — Semana 3</div>
<div class="fm-sub">El hombre, imagen de Dios · 5 días (mar-sáb) · Catecismo P13</div>

<!-- CARTA PASTORAL -->
<div class="fm-block" style="border-left:4px solid var(--gold);background:linear-gradient(135deg,#FFF8E8,#FAF0D0)">
<h4 style="color:var(--gold)">💛 Carta para ti — antes de empezar</h4>
<p>Amada esposa: tu retroalimentación de la Semana 2 fue oro. La escuché toda y esta semana viene <strong>rediseñada según lo que viviste</strong>. Lo más importante primero: <strong>Eli hiló P11 y P12 con todas las explicaciones</strong> — eso es doctrina formándose en su corazón, y es fruto de tu fidelidad. La creación con dibujos le encantó. Va bien en matemáticas. Está escribiendo sus frases. Celebremos eso.</p>
<p>Ahora lo que ajusté por ti: <strong>(1)</strong> cada clase ahora dura máximo 30 minutos, con <strong>pausas activas marcadas</strong> entre materias — ya no pasas de una a otra sin respirar. <strong>(2)</strong> El catecismo ya NO repite cada día la narración libre ni el portafolio — eso me lo señalaste con razón, era un defecto. Ahora cada día es UN ángulo nuevo y corto; la síntesis es solo el sábado. <strong>(3)</strong> La naturaleza pasó al jueves (mitad de semana). <strong>(4)</strong> Agregué ciencias de verdad, dos veces. <strong>(5)</strong> El arte ahora es estilo Classical: miramos una obra maestra. <strong>(6)</strong> El himno trae su historia y la biografía del autor. <strong>(7)</strong> El día 7 de la creación tiene su propio espacio. <strong>(8)</strong> La lectura se conecta con "Mamá enséñame a leer".</p>
<p>Y recuerda: <strong>los frutos no dependen de ti.</strong> Tú siembras con fidelidad; Dios da el crecimiento (1 Co 3:6-7). Domingo descansamos, el lunes preparas con calma. Sigue así.</p>
<p style="text-align:right;font-style:italic;color:var(--muted);margin-top:.6rem">— Tu esposo y compañero en esta tarea</p>
</div>

<!-- VERSÍCULO DE MEMORIA -->
<div class="fm-block" style="border-left:4px solid var(--gold);background:#fff8e6">
<h4 style="color:#8B6A00">📖 VERSÍCULO PARA MEMORIZAR esta semana</h4>
<div style="text-align:center;padding:14px 10px;background:#fff;border-radius:8px;border:1.5px dashed var(--gold);margin:8px 0">
<div style="font-family:Georgia,serif;font-size:1.2rem;font-style:italic;color:var(--ink);line-height:1.5">"Y creó Dios al hombre a su imagen, a imagen de Dios lo creó."</div>
<div style="font-size:.85rem;color:var(--gold);font-weight:700;margin-top:6px">— Génesis 1:27</div>
</div>
<p style="font-size:.85rem"><strong>Plan (un poquito cada día):</strong> Mar — mamá lo lee 3 veces, hablar de "imagen". Mié — repetir, Eli lo dice sola. Jue — inventar melodía y cantarlo. Vie — Eli lo dice de memoria. Sáb — escribirlo en el cuaderno.</p>
</div>

<!-- MATERIALES -->
<div class="fm-block" style="border-left:4px solid var(--rust);background:#fff5f0">
<h4 style="color:var(--rust)">🛒 Materiales — revisa el LUNES (día de preparación)</h4>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>Siempre:</strong> Biblia, Catecismo CPN, "Mamá enséñame a leer" (sección Y), cuadernos, lápices, colores, regletas Cuisenaire.</li>
<li><strong>Martes:</strong> mapa simple del Edén / Medio Oriente (impreso o en pantalla).</li>
<li><strong>Miércoles:</strong> el frasco con el frijol germinado de S2 · regla para medir.</li>
<li><strong>Jueves:</strong> cuaderno de naturaleza · ropa para salir al paseo · bolsa para tesoros.</li>
<li><strong>Viernes:</strong> nada especial (experimento de los 5 sentidos usa cosas de la casa: algo para oler, algo suave, algo para probar).</li>
<li><strong>Sábado:</strong> imagen impresa o en pantalla de <em>"La creación de Adán"</em> de Miguel Ángel · hoja blanca para dibujar.</li>
</ul>
</div>

<!-- PLAN PERSONALIZADO -->
<div class="fm-block" style="border-left:4px solid var(--violet);background:#faf0ff">
<h4 style="color:var(--violet)">🎯 Plan personalizado para Eli — según tu registro de S2</h4>
<table style="width:100%;border-collapse:collapse;font-size:.84rem;margin-top:8px">
<tr style="background:rgba(107,63,170,.1)"><th style="text-align:left;padding:6px 8px">Área</th><th style="text-align:left;padding:6px 8px">Lo que viste en S2</th><th style="text-align:left;padding:6px 8px">Plan para S3</th></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Lectura</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Aún silabea · cuando ELLA lee no explica bien</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Separamos decodificar de comprender.</strong> Textos cortos que pueda leer fluido + lectura en eco. La comprensión profunda se trabaja con lo que TÚ le lees. Conexión con "Mamá enséñame a leer" letra Y (donde va Eli de verdad).</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Escritura</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Mejorando · escribe sus frases</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Regla del día: <strong>mayúscula al inicio</strong> (S2 fue el punto final).</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Matemáticas</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Bien con 11-20 · viernes costó por cansancio</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Consolidar 11-20 + <strong>iniciar la suma</strong> como "juntar". Si un día está cansada, usar versión mínima sin culpa.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Catecismo</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">¡Excelente! Hiló P11+P12</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>P13</strong> esta semana, mismo modelo de ángulos, pero corto cada día.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Historia</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Muy fructífero · pero el día 7 quedó suelto</td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">Empezamos cerrando el <strong>día 7 (reposo)</strong>, luego el hombre como imagen de Dios.</td></tr>
</table>
</div>

<!-- HORARIO -->
<div class="fm-block">
<h4>⏱️ El nuevo horario — 30 min por clase, con pausas</h4>
<p style="font-size:.86rem">Cada día tiene el mismo ritmo (igual intensidad). Verás el horario completo arriba de cada día. La clave que pediste: <strong>pausas activas entre materias.</strong></p>
<div class="horario" style="margin-top:8px">
<div class="horario-ttl">Horario tipo · igual cada día</div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual (oración + versículo)</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo — 1 ángulo del día</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa (agua, saltar, estirarse)</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Lectoescritura</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Matemáticas</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Historia Providencial</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:35</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:45</span><span class="horario-act">Materia del día (Geo / Ciencias / Naturaleza / Arte)</span></div>
<div class="horario-row"><span class="horario-time">11:15</span><span class="horario-act">Inglés</span></div>
<div class="horario-row"><span class="horario-time">11:45</span><span class="horario-act">Piano</span></div>
</div>
<p style="font-size:.84rem;margin-top:8px"><strong>Menú de pausas activas (5-10 min):</strong> tomar agua · comer fruta · saltar 20 veces · estirarse como un gato · correr al patio y volver · bailar una canción · respirar profundo 5 veces · abrazar a mamá.</p>
</div>

<!-- PLAN DE LECTURA -->
<div class="fm-block" style="border-left:4px solid var(--blue);background:#f0f6ff">
<h4 style="color:var(--blue)">📚 Plan de lectura · Semana 3 (conectado con "Mamá enséñame a leer")</h4>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li><strong>Mar:</strong> Letra <strong>Y</strong> en "Mamá enséñame a leer" — sonido y sílabas (ya, ye, yi, yo, yu) + la "y" que une (Gén 1:1). Eli lee palabras cortas con Y.</li>
<li><strong>Mié:</strong> texto decodificable corto con Y + <strong>lectura en eco</strong> (mamá lee una línea, Eli la repite). Comprensión oral.</li>
<li><strong>Jue:</strong> dictado expresivo (frases con Y) + Eli escribe 3 frases propias.</li>
<li><strong>Vie:</strong> texto NUEVO que mamá le lee (Eli comprende mejor escuchando) + Eli narra.</li>
<li><strong>Sáb:</strong> Eli escribe el versículo de memoria (Gén 1:27).</li>
</ul>
<p style="font-size:.85rem;background:#fff;padding:8px 12px;border-radius:6px;border-left:3px solid var(--blue)"><strong>Clave que pediste:</strong> Eli aún silabea, y al silabear su mente no tiene espacio para comprender — es normal a su edad. Por eso esta semana <strong>separamos</strong>: cuando ELLA lee, usamos textos cortos y fáciles (para fluidez); la comprensión profunda la trabajamos con textos que TÚ le lees. Las dos cosas crecen, pero por caminos distintos.</p>
</div>

<!-- NOTA DE CRIANZA DEL CORAZÓN -->
<div class="fm-block" style="border-left:4px solid var(--rust);background:#fff5f0">
<h4 style="color:var(--rust)">🐑 Nota de crianza del corazón (Cap 10 del libro)</h4>
<p style="font-size:.86rem">Si Eli se cansa, se frustra o se resiste esta semana (pasó el viernes de S2 por cansancio), recuerda: la disciplina cristiana <strong>no es modificar conducta con versículos</strong>. Es llevarla al corazón y al evangelio. En vez de "haz esto porque te lo digo", prueba: <em>"Veo que estás cansada. Dios entiende el cansancio — hasta Jesús se cansó. Hagamos la versión corta hoy, descansamos, y mañana seguimos."</em> No hay culpa en usar la versión mínima. La fidelidad no es perfección.</p>
</div>

<!-- IGLESIA -->
<div class="fm-block" style="border-left:4px solid var(--violet);background:#faf0ff">
<h4 style="color:var(--violet)">⛪ Conexión con la iglesia Raah (Cap 21)</h4>
<p style="font-size:.86rem">El domingo ordena la semana. El <strong>día 7 de la creación (reposo de Dios)</strong> que vemos el martes conecta directo con el Día del Señor: Dios reposó, y nos llama a reposar en Él. Habla con Eli el domingo: "Hoy es el día que Dios apartó. Por eso vamos a la iglesia, oímos su Palabra, descansamos." Si el sermón o la escuela dominical de Eli toca la creación o el ser humano, conéctalo con lo que vimos esta semana.</p>
</div>

<!-- ORACIÓN -->
<div class="fm-oracion"><div class="fo-lbl">Oración antes de enseñar</div>
<p>Señor, gracias por la segunda semana — por lo que floreció y por lo que ajustamos. Esta semana enséñame a mostrarle a Eli que ella es hecha a tu imagen, con dignidad y propósito. Dame ritmo sin prisa, sustancia sin agobio. Que descansemos en que tú puedes todo lo que es bueno. En el nombre de Jesús. Amén.</p>
</div>
</div>`,

martes:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Martes · Geografía es la materia del día</div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P13 · Día 1</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Lectoescritura · Letra Y</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Matemáticas · repaso 11-20 + orden</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Historia · Día 7, Dios reposó</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:35</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:45</span><span class="horario-act">Geografía · El Edén</span></div>
<div class="horario-row"><span class="horario-time">11:15</span><span class="horario-act">Inglés</span></div>
<div class="horario-row"><span class="horario-time">11:45</span><span class="horario-act">Piano</span></div>
</div>

<!-- CATECISMO P13 DÍA 1 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P13 · Día 1 — Nadie detiene su mano</div>
    <div class="lesson-meta">20 min · ¿Puede Dios hacer todo? · Daniel 4:35</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span><span class="lsec-sub">léelo el lunes</span></div>
    <div class="lec-mama">
      <p><span class="lec-tag">La verdad:</span> P13 enseña la omnipotencia, pero el catecismo es preciso: Dios puede hacer todo <strong>conforme a su santa y soberana voluntad</strong>. No es magia ni capricho. No puede mentir ni pecar — eso no es debilidad, es perfección.</p>
      <p><span class="lec-tag">Sin moralismo:</span> el poder de Dios no es para asustar. Es para confiar — Él puede cumplir todo lo que prometió. Daniel 4:35: "no hay quien detenga su mano."</p>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Apertura · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Eli, ¿tú podrías hacer que el sol salga mañana? ¿O que crezca un árbol en un minuto? No. Hay cosas que no podemos hacer. Hoy aprendemos que hay Alguien que SÍ puede todo lo que quiere."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Repaso breve + P13 · 5 min <span class="edc-mark E">E</span></div>
        <p>Repaso de 30 segundos: Eli dice P11 y P12. Luego presenta P13:</p>
        <div class="guia-say">P13: ¿Puede Dios hacer todo?<br>R: Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.</div>
        <p>Repetir 3 veces. Subrayar "santa y soberana voluntad".</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Daniel 4:35 · 7 min <span class="edc-mark D">D</span></div>
        <p>Cuenta: el rey Nabucodonosor era el más poderoso de su tiempo, pero Dios le mostró que su poder era prestado. Lee:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Daniel 4:35</span>"Hace según su voluntad... y no hay quien detenga su mano."</div>
        <div class="guia-say">"Nadie puede parar la mano de Dios. Ni reyes, ni ejércitos. Cuando Dios decide algo bueno, se hace."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre + oración · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Señor, gracias porque tu poder es santo. Nadie detiene tu mano. Ayúdanos a confiar. Amén."</div>
        <p>Eli repite P13 una vez más.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Confunde "puede todo" con magia/deseos</td><td>Énfasis: "Dios no es Aladino; su poder es santo."</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Recita P13, no articula "santa voluntad"</td><td>Preguntar: "¿Puede Dios hacer algo malo?" (No)</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Recita y explica que el poder de Dios sirve a su voluntad buena</td><td>Registrar. Lista para Día 2.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Repaso P11+P12</li><li>P13 tres veces</li><li>"Nadie detiene la mano de Dios"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> agua + saltar 20 veces + estirarse. Vuelvan cuando Eli esté lista.</div></div>

<!-- LECTOESCRITURA Y -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · La letra Y</div>
    <div class="lesson-meta">30 min · "Mamá enséñame a leer" sección Y · donde Eli va de verdad</div>
    <div class="mats"><span class="mat">Mamá enséñame a leer (Y)</span><span class="mat">Biblia</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span><span class="lsec-sub">léelo el lunes</span></div>
    <div class="lec-mama">
      <p><span class="lec-tag">La verdad que gobierna la clase:</span> el lenguaje no es una destreza neutral. Es <strong>don de Dios</strong>, porque Dios habla, nombra y promete ("Y dijo Dios…", Gén 1). Leer es <strong>recibir la realidad</strong> que Él hizo; escribir es <strong>aprender a decir la verdad</strong> (9.º mandamiento — Cap 12). Enseñar la letra Y no es "rellenar fonética": es formar a una testigo veraz que recibe y dice lo que es verdad.</p>
      <p><span class="lec-tag">La Y tiene dos rostros — y los dos son su naturaleza:</span> (1) <strong>consonante</strong> en ya, ye, yi, yo, yu (yo, yema, mayo, payaso); (2) la palabra pequeñita <strong>"y"</strong> que <strong>une</strong>. La Biblia empieza usándola: "creó los cielos <strong>y</strong> la tierra" (Gén 1:1). El lenguaje junta lo que Dios junta: día y noche, sol y luna. No es barniz cristiano — es la función real de la letra, mostrada en las propias palabras de la Escritura.</p>
      <p><span class="lec-tag">Tu observación, aplicada:</span> Eli decodifica silabeando y comprende mejor cuando <strong>escucha</strong> que cuando lee ella. Hoy <strong>separamos</strong> las dos cosas: primero decodificar la Y sin presión; la comprensión se trabaja con mamá leyendo en voz alta y Eli contándolo de vuelta. Y conectamos de verdad con "Mamá enséñame a leer" (sección Y) — pero todo lo necesario está aquí; no dependes del libro en plena clase.</p>
      <p><span class="lec-tag">Oración antes de enseñar:</span> "Señor, tú hablaste y todo existió. Gracias por el don de las palabras. Que Eli reciba tu verdad y aprenda a decirla. En el nombre de Jesús. Amén."</p>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Sonido de la Y (consonante) · 5 min <span class="edc-mark E">E</span></div>
        <p>Sigue el método de "Mamá enséñame a leer" (sección Y). Solo decodificar; aún no pidas significados.</p>
        <div class="guia-say">"Esta es la letra Y. Escucha: yo, yema, mayo. Ahora tú: ya, ye, yi, yo, yu."</div>
        <p>Repite las sílabas despacio 2 veces. Celebra el intento, no la perfección.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">La "y" que une · 5 min <span class="edc-mark D">D</span></div>
        <p>Abre la Biblia en Génesis 1:1 y señala con el dedo la palabra "y".</p>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 1:1</span>"En el principio creó Dios los cielos <strong>y</strong> la tierra."</div>
        <div class="guia-say">"¿Ves esta letrita sola, la 'y'? Une dos cosas: los cielos Y la tierra. Dime tú otras dos cosas que van juntas…"</div>
        <p><em>Espera.</em> Deja que Eli proponga sus propias parejas (papá y mamá, sol y luna). No corrijas, celebra.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Decodificar palabras con Y · 8 min <span class="edc-mark D">D</span></div>
        <p>Eli lee despacio, decodificando. No le pidas el significado ahora — solo que las lea. Celebra cada una que logra sola:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Palabras (Eli las lee en voz alta)</span>yo · ya · yema · mayo · payaso · yate · rey · ley · hoy · muy</div>
        <p style="font-size:.85rem;color:var(--muted)">Para mamá: en <em>rey, ley, hoy, muy</em> la Y suena como "i" al final — también es la Y. No hace falta explicarlo; basta que las lea.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Comprender ESCUCHANDO · 7 min <span class="edc-mark D">D</span></div>
        <p>Ahora al revés: <strong>tú lees, Eli solo escucha</strong> (sin decodificar). Después ella te cuenta con sus palabras lo que oyó — eso es <em>narración</em>, y así sabes que comprendió.</p>
        <div class="guia-bible"><span class="guia-bible-ref">Mamá lee con buena entonación</span>Hoy es un día que hizo el Señor. El Rey del cielo y de la tierra cuida a Eli. Yo soy pequeña, y Él es muy grande, y me ama.</div>
        <div class="guia-say">"Ahora cuéntame tú: ¿qué dije? ¿Quién cuida a Eli?"</div>
        <p><em>Escucha sin corregir</em> cómo lo cuenta. Lo importante es que comprendió, no que repita igual.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">5</div><div class="guia-step-body"><div class="guia-step-ttl">Escribir la Y (decir la verdad) · 5 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Escribe 'yo' y una frase corta que sea verdad, con una palabra que tenga Y. Empieza con mayúscula y termina con punto."</div>
        <p>Eli escribe sola. Mamá señala SOLO una cosa hoy: que la Y esté bien formada (o la mayúscula inicial). Escribir con cuidado es aprender a decir la verdad con cuidado.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Le cuesta el sonido /y/ o las sílabas ya-ye-yi-yo-yu</td><td>Quedarse en sílabas hoy; las palabras, mañana. Sin prisa.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Decodifica palabras con Y silabeando · comprende cuando mamá lee</td><td>Es lo normal y esperado. Separa decodificar de comprender; celebra ambas.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Lee fluido · reconoce la "y" que une · te narra lo que oyó</td><td>Registrar. Lista para lectura en eco (miércoles).</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha + prompt para IA</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p><strong>Imprimible · A4 vertical · letra grande</strong> — refuerzo de la letra Y: sílabas, palabras, la "y" que une, una línea de copia y un recuadro para dibujar.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Ficha Lectoescritura Y</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible de lectoescritura en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado y pactual.

TEMA: La letra Y, con sus dos usos: consonante (ya, ye, yi, yo, yu) y la palabra "y" que une.
PROPÓSITO: reforzar la decodificación de la letra Y y practicar la escritura. Eli decodifica silabeando y está aprendiendo esta letra con el método "Mamá enséñame a leer".
MARCO DOCTRINAL: reformado pactual · sin moralismo · el lenguaje es don de Dios (Él habla y nombra) y escribir bien es aprender a decir la verdad. Nada de "sé buena niña".

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado: "La letra Y" con una ilustración pequeña y sencilla (un yate o una yema de huevo).
2. Recuadro "Yo leo las sílabas": ya · ye · yi · yo · yu, cada una en una cajita grande de color.
3. Recuadro "Yo leo palabras": yo, yema, mayo, payaso, yate, rey, ley, hoy (letra mínimo 18pt).
4. Recuadro "La y que une": la frase "los cielos y la tierra" con la "y" resaltada, y dos líneas para que Eli escriba su propia pareja unida por "y".
5. Sección "Yo escribo": prompt "Escribe 'yo' y una frase verdadera con una palabra que tenga Y. Mayúscula al inicio, punto al final." Líneas guía de 10 mm.
6. Recuadro de dibujo: "Dibuja algo que empiece con Y".

DISEÑO VISUAL:
- Fondo: crema cálido (#FAF6F0).
- Color acento del tema: azul lectura (#2A6090) en encabezados y bordes.
- Tipografía: Georgia para títulos; Verdana o Lexend para texto infantil (16-20pt).
- Líneas guía: altura mínima 10 mm. Espacio amplio; cada bloque separado por un recuadro o cinta de color.
- No caricaturas exageradas · no colores neón · ilustración sencilla y respetuosa · no representar a Dios.

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical (proporción 1:1.414), alta resolución, con espacios en blanco visibles para escribir y dibujar.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible sin márgenes del navegador.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Sílabas ya-ye-yi-yo-yu</li><li>Eli lee 4 palabras con Y (yo, ya, rey, hoy)</li><li>Mamá lee una frase, Eli la cuenta de vuelta</li><li>Eli escribe "yo"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min):</b> comer algo, moverse. Es el descanso más largo del día.</div></div>

<!-- MATEMÁTICAS -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Repaso 11-20 + ordenar</div>
    <div class="lesson-meta">30 min · mayor/menor · todo en la app</div>
    <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Cuaderno</span><span class="mat">Opc: Singapur 1A p.84-85</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Consolidamos 11-20 y agregamos <strong>ordenar</strong> (¿cuál es mayor? ¿cuál es menor?). Todo escrito aquí — no necesitas abrir libros. Si quieres ver el vínculo: Singapur 1A pp.84-85 / Mamut Valor Posicional. Recuerda: si Eli se cansa, versión mínima sin culpa.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Repaso veloz 11-20 · 7 min <span class="edc-mark E">E</span></div>
        <p>Mamá pone regletas (naranja + blancas) formando 13, 16, 19. Eli dice el número. Luego al revés: mamá dice "17", Eli lo arma.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Mayor y menor · 12 min <span class="edc-mark D">D</span></div>
        <p>Mamá pone dos números con regletas (ej. 12 y 17). Pregunta:</p>
        <div class="guia-say">"¿Cuál es mayor? ¿Cuál tiene más? El que es más largo con regletas es el mayor."</div>
        <div class="guia-bible"><span class="guia-bible-ref">5 parejas (respuestas para mamá)</span>14 y 11 → mayor 14 · 18 y 20 → mayor 20 · 13 y 15 → mayor 15 · 19 y 16 → mayor 19 · 12 y 17 → mayor 17</div>
        <p>Eli responde con regletas si lo necesita.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Escribir en orden · 8 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Escribe estos números del menor al mayor: 15, 11, 18, 13."</div>
        <p style="font-size:.85rem;color:var(--muted)">Respuesta: 11, 13, 15, 18.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Los números tienen orden, del menor al mayor. Dios ordenó su mundo así."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No distingue mayor/menor sin regletas</td><td>Usar regletas siempre; comparar largos.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Compara con regletas · ordena con apoyo</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Compara y ordena sin regletas</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Repaso 11-20 con regletas</li><li>3 parejas mayor/menor</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> correr al patio y volver, o bailar una canción.</div></div>

<!-- HISTORIA DÍA 7 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">📜</div><div>
    <div class="lesson-ttl">Historia · Día 7 — Dios reposó</div>
    <div class="lesson-meta">30 min · Cierre de la creación · Génesis 2:1-3</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Hoja grande de 7 días (de S2)</span><span class="mat">Colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>En S2 quedó suelto el día 7 (me lo señalaste). Hoy lo cerramos bien. Dios no reposó por cansancio — reposó porque su obra estaba <strong>completa y buena</strong>. Ese reposo es el fundamento del <strong>Día del Señor</strong>: somos llamados a reposar en Dios. Conexión directa con el domingo en Raah.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Repaso de los 6 días · 5 min <span class="edc-mark E">E</span></div>
        <p>Saca la hoja grande de S2. Eli repasa qué creó Dios cada día (1-6).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Lectura · Génesis 2:1-3 · 7 min <span class="edc-mark E">E</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 2:1-3 · adaptado</span>"Así quedaron terminados los cielos y la tierra. En el día séptimo Dios había terminado su obra, y reposó. Y bendijo el día séptimo y lo santificó, porque en él reposó de toda su obra."</div>
        <div class="guia-say">"Dios no se cansó como nosotros. Reposó porque todo estaba terminado y era muy bueno. Y apartó ese día como especial."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Conexión con el domingo · 5 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"¿Sabes por qué descansamos el domingo y vamos a la iglesia? Porque Dios nos enseñó a reposar en Él. El domingo es nuestro día de reposo, como el día 7 de Dios."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Dibujar el día 7 · 10 min <span class="edc-mark D">D</span></div>
        <p>Eli completa el último cuadro de la hoja grande: el día 7. Puede dibujar a la familia descansando, o todo el mundo creado con un sol de paz. Mamá no corrige el arte.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">5</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"La creación está completa. Dios hizo todo bueno y reposó. ¡Y mañana aprendemos lo más especial que creó!"</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Cree que Dios reposó por cansancio</td><td>Aclarar: reposó porque terminó, no por cansancio.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende el día 7 y lo dibuja</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta el día 7 con el domingo</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Leer Gén 2:1-3</li><li>Dibujar el día 7</li><li>"Dios reposó; por eso descansamos el domingo"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> agua, estirarse, mirar por la ventana.</div></div>

<!-- GEOGRAFÍA -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🗺️</div><div>
    <div class="lesson-ttl">Geografía · ¿Dónde estaba el Edén?</div>
    <div class="lesson-meta">30 min · El mundo de la Biblia · Génesis 2:10-14</div>
    <div class="mats"><span class="mat">Mapa Medio Oriente (impreso o pantalla)</span><span class="mat">Colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Geografía conectada con la historia (lo que pediste: que sea clara y útil). El Edén estaba donde hoy están los ríos Tigris y Éufrates (Irak actual). Eli aprende que la Biblia ocurre en lugares reales, no en "había una vez". Dios pone a las personas en lugares concretos — providencia con coordenadas.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">El mundo es real · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"La Biblia no pasó en un lugar inventado. Pasó en lugares reales que todavía existen. Vamos a buscar dónde estaba el primer jardín, el Edén."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Leer Génesis 2:10-14 · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 2:10-14 · adaptado</span>"Un río salía del Edén para regar el jardín... uno se llama Tigris y otro Éufrates."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">En el mapa · 12 min <span class="edc-mark D">D</span></div>
        <p>Muestra el mapa. Encuentren juntas los ríos Tigris y Éufrates (hoy Irak). Eli los pinta de azul. Luego encuentren Colombia/Bogotá y comparan: "el Edén estaba lejos, pero el mismo Dios que puso a Adán allí te puso a ti aquí."</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios pone a cada persona en un lugar. A Adán en el Edén. A ti en Bogotá. Nada es accidente."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Mostrar mapa, encontrar los dos ríos</li><li>Pintarlos de azul</li><li>"La Biblia pasó en lugares reales"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<!-- INGLÉS + PIANO -->
<div class="strip s-sage" style="margin-top:14px">
<strong>🇬🇧 Inglés (30 min):</strong> bloque externo. Si usas un recurso, este es su espacio. Sugerencia simple hoy: repasar colores y números 1-10 en inglés con Eli, o ver un video corto en inglés apropiado.<br>
<strong>🎹 Piano (20 min):</strong> práctica diaria como cierre creativo. No es académico — es formación de atención y belleza (Cap 16: el arte forma el alma).
</div>`,

miercoles:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Miércoles · Ciencias es la materia del día</div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P13 · Día 2</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Lectoescritura · lectura en eco</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Matemáticas · comparar</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Historia · imagen de Dios</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:35</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:45</span><span class="horario-act">Ciencias · el frijol crece</span></div>
<div class="horario-row"><span class="horario-time">11:15</span><span class="horario-act">Inglés</span></div>
<div class="horario-row"><span class="horario-time">11:45</span><span class="horario-act">Piano</span></div>
</div>

<!-- CATECISMO P13 DÍA 2 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P13 · Día 2 — Para Dios todo es posible</div>
    <div class="lesson-meta">20 min · Mateo 19:26</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Ayer: nadie detiene la mano de Dios (cósmico). Hoy: la omnipotencia se vuelve personal — "para Dios todo es posible" (Mt 19:26). El sujeto es DIOS, no "yo si creo lo suficiente". Yo no puedo cambiar mi corazón; Dios sí.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Repaso 30 seg + enganche · 3 min <span class="edc-mark E">E</span></div>
        <p>Eli dice P13. Luego:</p>
        <div class="guia-say">"Ayer: nadie detiene la mano de Dios. Hoy Jesús dice algo sobre lo que Dios puede hacer EN nosotros."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Mateo 19:26 · 7 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Mateo 19:26</span>"Para los hombres esto es imposible, pero para Dios todo es posible."</div>
        <div class="guia-say">"Hay cosas que nosotros NO podemos: cambiar nuestro corazón, dejar de tener miedo solos, salvarnos. Pero Dios SÍ puede. Por eso le pedimos a Él."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Aplicar · 7 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"¿Recuerdas cuando te costó calmarte o pedir perdón? Eso no lo cambiamos solos. Pero Dios puede ayudarte. La oración es decir: 'Dios, tú puedes, ayúdame.'"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Oración · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Señor, para ti todo es posible. Cuando algo nos parezca imposible, ayúdanos a recordar que tú puedes. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Cree "yo puedo todo si creo"</td><td>Corregir: el que puede es DIOS.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende que para Dios todo es posible</td><td>Conectar con su propia vida.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Dice "yo no puedo sola, pero Dios puede"</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Repaso P13</li><li>Leer Mt 19:26</li><li>"Yo no puedo sola, Dios sí"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> agua + saltar + estirarse.</div></div>

<!-- LECTOESCRITURA ECO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · Lectura en eco + comprensión</div>
    <div class="lesson-meta">30 min · decodificar fluido + entender escuchando</div>
    <div class="mats"><span class="mat">Texto corto con Y</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy la técnica clave para tu observación: <strong>lectura en eco</strong>. Tú lees una línea con buena entonación; Eli la repite. Así oye cómo suena leer fluido y comprende mejor. Después hablamos de qué dijo el texto (comprensión oral, sin la carga de decodificar).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Texto corto · 10 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Texto con Y (mamá lee, Eli repite cada línea)</span>Hoy es un día nuevo y bonito.<br>Yo miro el cielo y la tierra.<br>El Rey del cielo hizo todo.<br>Dios me cuida hoy y siempre.</div>
        <p>Mamá lee la 1ª línea con entonación → Eli la repite. Así con cada línea. Luego Eli lee sola las que pueda.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Comprensión oral · 8 min <span class="edc-mark D">D</span></div>
        <p>Preguntas (Eli responde hablando, no leyendo):</p>
        <div class="guia-say">"¿Qué miras tú en el cielo y la tierra? ¿Quién hizo todo? ¿Quién te cuida hoy?"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Copiar una línea · 10 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Copia tu línea favorita del texto. Mayúscula al inicio, punto al final."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Cuando lees, tu voz le da vida a las palabras. Es un don de Dios."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Solo repite en eco, no lee sola</td><td>Bien — el eco ya forma fluidez. Sin presión.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Lee algunas líneas sola · responde comprensión oral</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Lee fluido · comprende · copia con mayúscula y punto</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Mamá lee, Eli repite en eco</li><li>1 pregunta de comprensión</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- MATEMÁTICAS COMPARAR -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Comparar: más que, menos que</div>
    <div class="lesson-meta">30 min · concreto con objetos · todo en la app</div>
    <div class="mats"><span class="mat">Regletas u objetos (botones, fichas)</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Comparar cantidades (más/menos/igual) prepara para la suma y resta. Concreto primero: dos grupos de objetos, ¿cuál tiene más? Opcional: Mamut Valor Posicional p.6.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Con objetos · 12 min <span class="edc-mark D">D</span></div>
        <p>Mamá pone dos grupos (ej. 7 botones y 4 botones). Pregunta: "¿Cuál grupo tiene MÁS? ¿Cuántos más?" Eli cuenta y compara. Repetir con varias parejas.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">"Igual" · 6 min <span class="edc-mark D">D</span></div>
        <p>Mamá pone dos grupos iguales (5 y 5). "¿Cuál tiene más? Ninguno — son IGUALES." Introduce la idea de igualdad (base del = en la suma).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">En el cuaderno · 8 min <span class="edc-mark C">C</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Completa con "más", "menos" o "igual"</span>8 es ___ que 5 · 3 es ___ que 9 · 6 es ___ que 6 · 10 es ___ que 7</div>
        <p style="font-size:.85rem;color:var(--muted)">Respuestas: más · menos · igual · más.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Comparar es ver cuánto hay. Mañana empezamos a JUNTAR — eso se llama sumar."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No compara sin contar uno por uno</td><td>Está bien contar; reforzar con objetos.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Compara grupos · entiende "igual"</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Completa más/menos/igual sin objetos</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>2 grupos de objetos, ¿cuál tiene más?</li><li>2 grupos iguales</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- HISTORIA IMAGEN DE DIOS -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">📜</div><div>
    <div class="lesson-ttl">Historia · El hombre, imagen de Dios</div>
    <div class="lesson-meta">30 min · Génesis 1:26-27 · lo más especial de la creación</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Espejo pequeño</span><span class="mat">Hoja · colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>El corazón de la semana. El ser humano NO es un animal más: es <strong>imagen de Dios</strong> (Gén 1:26-27). Eli se parece a Dios en algo: puede pensar, amar, hablar, crear, conocer a Dios, gobernar el mundo con cuidado. Esto le da dignidad — no por lo que logra, sino por cómo fue hecha. Sin sentimentalismo ("qué especial soy"); con doctrina ("qué bueno es el Dios que me hizo a su imagen").</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">¿Qué es una imagen? · 5 min <span class="edc-mark E">E</span></div>
        <p>Dale un espejo a Eli.</p>
        <div class="guia-say">"¿Qué ves? Tu imagen — algo que se parece a ti. Hoy aprendemos que tú eres la IMAGEN de Dios: te pareces a Él en cosas importantes."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Génesis 1:26-27 · 7 min <span class="edc-mark E">E</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 1:26-27 · adaptado</span>"Dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza... Y creó Dios al hombre a su imagen; varón y hembra los creó."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">¿En qué me parezco a Dios? · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Los animales no pueden hacer lo que tú haces. Tú puedes: pensar, hablar con palabras, amar, decidir entre el bien y el mal, crear cosas bonitas, y conocer a Dios. En eso te pareces a Él."</div>
        <p>Eli da ejemplos de cosas que ella puede hacer y un perro no.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Dibujar · 8 min <span class="edc-mark D">D</span></div>
        <p>Eli se dibuja a sí misma y escribe: "Soy imagen de Dios."</p></div></div>
      <div class="guia-step"><div class="guia-step-n">5</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Eres imagen de Dios. Eso te da dignidad — no por lo que haces, sino por cómo Dios te hizo."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No distingue humano de animal</td><td>Repetir ejemplos concretos (hablar, pensar, orar).</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende que es imagen de Dios</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Da ejemplos de en qué se parece a Dios</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Espejo: "tú eres imagen de Dios"</li><li>Leer Gén 1:27</li><li>Una cosa que ella puede y un animal no</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- CIENCIAS FRIJOL -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🌱</div><div>
    <div class="lesson-ttl">Ciencias · El frijol crece</div>
    <div class="lesson-meta">30 min · seguimiento del frijol de S2 · Dios hace crecer</div>
    <div class="mats"><span class="mat">Frasco con frijol germinado</span><span class="mat">Regla</span><span class="mat">Diario de naturaleza</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Ciencias de verdad (lo que pediste). Seguimos el frijol que sembramos en S2. Observar, medir, registrar — método científico sencillo. La verdad: nosotros sembramos y regamos, pero <strong>Dios hace crecer</strong> (1 Co 3:6-7) — el mismo principio que la crianza. Si el frijol no germinó, observamos por qué (poca agua/luz) — también es aprendizaje.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Observar · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Mira el frijol. ¿Qué cambió desde la semana pasada? ¿Salió raíz? ¿Salió un tallito verde? Dime todo lo que ves."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Medir · 7 min <span class="edc-mark D">D</span></div>
        <p>Con la regla, miden cuánto creció (raíz o tallo) en centímetros. Eli dice el número. (Conecta con matemáticas — medir es contar.)</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Registrar en el diario · 10 min <span class="edc-mark C">C</span></div>
        <p>Eli dibuja cómo está el frijol hoy y escribe: "Hoy mi frijol mide ___ cm." (con fecha).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre pactual · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Nosotros pusimos el frijol y el agua. Pero, ¿quién lo hace crecer? Dios. La Biblia dice: 'yo planté, pero Dios dio el crecimiento.' Lo mismo pasa contigo: mamá y papá te enseñan, pero Dios te hace crecer."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Observa poco, quiere terminar</td><td>Pedir 3 detalles antes de seguir.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Observa, mide, registra</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta "Dios hace crecer"</td><td>Registrar. Seguir midiendo cada semana.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Observar el frijol</li><li>Dibujar cómo está hoy</li><li>"Dios lo hace crecer"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-sage" style="margin-top:14px">
<strong>🇬🇧 Inglés (30 min)</strong> · bloque externo. <strong>🎹 Piano (20 min)</strong> · cierre del día.
</div>`,

jueves:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Jueves · Naturaleza es la materia del día (¡salimos!)</div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P13 · Día 3</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Lectoescritura · dictado + escritura</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Matemáticas · iniciar la suma</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Historia · cuerpo y alma (Gén 2:7)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:35</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:45</span><span class="horario-act">🌿 Naturaleza · paseo + diario</span></div>
<div class="horario-row"><span class="horario-time">11:15</span><span class="horario-act">Inglés</span></div>
<div class="horario-row"><span class="horario-time">11:45</span><span class="horario-act">Piano</span></div>
</div>

<!-- CATECISMO P13 DÍA 3 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P13 · Día 3 — ¿Hay algo difícil para Dios?</div>
    <div class="lesson-meta">20 min · Génesis 18:14 · la historia de Sara</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy el poder de Dios se ve en una historia concreta: Sara, anciana, se ríe cuando Dios promete que tendrá un hijo. Dios pregunta: "¿Hay para Dios alguna cosa difícil?" (Gén 18:14). Isaac nació. Dios cumple lo que promete, aunque parezca imposible.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Repaso + historia de Sara · 8 min <span class="edc-mark E">E</span></div>
        <p>Eli dice P13. Luego cuenta:</p>
        <div class="guia-say">"Abraham y Sara eran muy ancianos y no tenían hijos. Dios les prometió un hijo. Sara se rió — le parecía imposible. Pero Dios le preguntó: '¿Hay algo difícil para mí?'"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Génesis 18:14 · 5 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 18:14</span>"¿Hay para Dios alguna cosa difícil?"</div>
        <div class="guia-say">"Y Sara tuvo a su bebé, Isaac. Dios cumplió. Nada es difícil para Dios."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Aplicar · 4 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Dios prometió en la Biblia perdonar a los que creen en Jesús, y cuidar a sus hijos. ¿Crees que puede cumplirlo? Sí, porque nada es difícil para Él."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Oración · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Señor, nada es difícil para ti. Ayúdanos a confiar en tus promesas. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No recuerda la historia</td><td>Volver a contarla simple.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Recuerda Sara/Isaac · recita P13</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta "nada es difícil para Dios" con sus promesas</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Contar Sara e Isaac</li><li>Leer Gén 18:14</li><li>"Nada es difícil para Dios"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- LECTOESCRITURA DICTADO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · Dictado + escritura propia</div>
    <div class="lesson-meta">30 min · frases con Y · mayúscula y punto</div>
    <div class="mats"><span class="mat">Cuaderno</span><span class="mat">Lápiz</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy Eli escribe (no decodifica). Dictado de 3 frases cortas con Y, luego escritura propia. Reforzamos mayúscula al inicio y recordamos la "y" que une (lo del martes). Sin corregir cada error — una sola corrección. Escribir bien es decir la verdad con cuidado (9.º mandamiento).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Dictado · 12 min <span class="edc-mark D">D</span></div>
        <p>Mamá dicta despacio, cada frase 2 veces:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Dictado (3 frases)</span>1. Hoy yo doy gracias a Dios.<br>2. El cielo y la tierra son de Dios.<br>3. Yo soy de Jesús.</div>
        <p>Eli escribe sola. Al final compara y corrige UNA cosa (la mayúscula inicial).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Escritura propia · 13 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Escribe 2 frases tuyas sobre algo que Dios hizo. Mayúscula al inicio, punto al final."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 5 min <span class="edc-mark E">E</span></div>
        <p>Eli lee sus frases en voz alta. Mamá celebra el contenido.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Pide repetir cada palabra</td><td>Dictar 1 frase en vez de 3.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Dictado con errores menores · escribe 2 frases</td><td>Marcar solo la mayúscula.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Dictado limpio · frases propias con mayúscula y punto</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Dictar 1 frase</li><li>Eli escribe 1 frase propia</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- MATEMÁTICAS INICIAR SUMA -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Iniciar la suma — juntar</div>
    <div class="lesson-meta">30 min · suma hasta 5 · concreto con regletas</div>
    <div class="mats"><span class="mat">Regletas u objetos</span><span class="mat">Cuaderno</span><span class="mat">Opc: Mamut Sumar 1 p.2</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>¡Primer día de suma! Sumar = <strong>juntar dos grupos</strong> y contar cuántos hay en total. Hoy solo hasta 5, todo concreto. El signo + significa "junta", el = significa "es igual a / en total hay". No prisa — que entienda el concepto, no que memorice.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Juntar con las manos · 10 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Pon 2 objetos aquí y 1 acá. Si los JUNTAMOS, ¿cuántos hay? Cuéntalos. Eso es sumar: juntar y contar el total."</div>
        <p>Repetir: 2+1, 3+1, 2+2, 1+1.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">El signo + y = · 8 min <span class="edc-mark D">D</span></div>
        <p>Mamá escribe "2 + 1 = 3" y explica: el + dice "junta", el = dice "en total hay". Eli arma con objetos y dice el total.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">En el cuaderno · 8 min <span class="edc-mark C">C</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Sumas (Eli arma con objetos y escribe el total)</span>2 + 1 = ___ · 3 + 2 = ___ · 1 + 4 = ___ · 2 + 2 = ___</div>
        <p style="font-size:.85rem;color:var(--muted)">Respuestas: 3, 5, 5, 4.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Sumar es juntar. Ya eres matemática. Dios ordenó el mundo con números."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No entiende "juntar"</td><td>Solo manos/objetos, sin signos aún.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Suma con objetos · entiende + y =</td><td>Normal · es el primer día.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Resuelve sumas hasta 5 y escribe el total</td><td>Mañana suma hasta 10.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Juntar 2 + 1 con objetos</li><li>"Sumar es juntar"</li><li>2 sumas más</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- HISTORIA CUERPO Y ALMA -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">📜</div><div>
    <div class="lesson-ttl">Historia · Cuerpo y aliento de vida</div>
    <div class="lesson-meta">30 min · Génesis 2:7 · del polvo + aliento de Dios</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Un poco de tierra/polvo (opcional)</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Génesis 2:7: Dios formó al hombre del <strong>polvo</strong> (cuerpo) y sopló <strong>aliento de vida</strong> (alma). El ser humano es cuerpo Y alma. Esto prepara el catecismo P18-P19 (almas inmortales). Eli aprende: tengo un cuerpo que un día descansará, y un alma que vivirá para siempre.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">El polvo · 6 min <span class="edc-mark E">E</span></div>
        <p>Si tienes un poco de tierra, muéstrala.</p>
        <div class="guia-say">"¿Sabes de qué hizo Dios el cuerpo del primer hombre? De polvo de la tierra. Y luego hizo algo que NO hizo con ningún animal..."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Génesis 2:7 · 7 min <span class="edc-mark E">E</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 2:7 · adaptado</span>"Entonces Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y el hombre llegó a ser un ser viviente."</div>
        <div class="guia-say">"Dios sopló su aliento. Por eso tienes un cuerpo Y un alma. El cuerpo se puede cansar; el alma vive para siempre."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cuerpo y alma · 12 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Tu cuerpo es lo que se ve: manos, ojos, piernas. Tu alma es lo que piensa, ama, cree, ora — lo que no se ve pero es muy real. Las dos cosas son tuyas."</div>
        <p>Eli dibuja: su cuerpo (lo visible) y al lado un corazón/sol que representa su alma (lo invisible).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios te dio cuerpo y alma. Por eso cuidamos los dos: el cuerpo con descanso y comida, el alma con su Palabra y oración."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No distingue cuerpo de alma</td><td>Cuerpo = lo que se ve; alma = lo que piensa/ama.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende cuerpo y alma · dibuja</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Articula que el alma vive para siempre</td><td>Registrar. Prepara P18-19.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Leer Gén 2:7</li><li>"Tienes cuerpo y alma"</li><li>Dibujar ambos</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min) — y prepárense para SALIR.</b></div></div>

<!-- NATURALEZA PASEO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🌿</div><div>
    <div class="lesson-ttl">Naturaleza · Paseo de observación</div>
    <div class="lesson-meta">30 min · Charlotte Mason · aprender a ver la creación</div>
    <div class="mats"><span class="mat">Diario de naturaleza</span><span class="mat">Bolsa para tesoros</span><span class="mat">Lupa (opcional)</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>La naturaleza a mitad de semana (lo que pediste). NO es manualidad — es <strong>aprender a ver</strong> (Cap 16). Salir, elegir UNA cosa, mirarla con calma, dibujarla. El hombre fue puesto para nombrar y cuidar la creación (Gén 2) — Eli hace eso hoy. No saturar: una sola cosa bien vista.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Salir y buscar · 10 min <span class="edc-mark E">E</span></div>
        <p>Salgan al jardín, balcón o cuadra. Eli elige UNA cosa que le llame la atención (hoja, flor, piedra, insecto).</p>
        <div class="guia-say">"Hoy somos exploradoras del mundo de Dios. Busca UNA cosa que te asombre."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Mirar en silencio · 5 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Mírala bien, sin dibujar todavía. ¿Qué forma tiene? ¿Cuántas partes? ¿Qué colores? ¿Qué la hace única?"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Dibujar en el diario · 12 min <span class="edc-mark C">C</span></div>
        <p>Eli dibuja con calma lo que vio. Escribe (o dicta) una frase: "Hoy vi ___." Mamá no corrige el dibujo.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre pactual · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios hizo esto con cuidado. Mirar bien su creación es leer el libro que Él escribió en el mundo. Y tú, como imagen de Dios, cuidas lo que Él hizo."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">15 min</div><ol><li>Salir, recoger una hoja o flor</li><li>Mirarla 3 min</li><li>Dibujarla + "Hoy vi…"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-sage" style="margin-top:14px">
<strong>🇬🇧 Inglés (30 min)</strong> · <strong>🎹 Piano (20 min)</strong> · cierre del día.
</div>`,

viernes:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Viernes · Ciencias es la materia del día</div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P13 · Día 4</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Lectoescritura · texto nuevo (mamá lee)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Matemáticas · suma hasta 10</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Historia · Adán cuida el huerto</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:35</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:45</span><span class="horario-act">Ciencias · los 5 sentidos</span></div>
<div class="horario-row"><span class="horario-time">11:15</span><span class="horario-act">Inglés</span></div>
<div class="horario-row"><span class="horario-time">11:45</span><span class="horario-act">Piano</span></div>
</div>

<!-- CATECISMO P13 DÍA 4 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P13 · Día 4 — Santa y soberana voluntad</div>
    <div class="lesson-meta">20 min · hágase tu voluntad · Mateo 6:10</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Último ángulo: las dos palabras del catecismo. <strong>Santa</strong> = buena, sin pecado. <strong>Soberana</strong> = manda, no pide permiso. La respuesta del creyente: "hágase tu voluntad" (Mt 6:10) — confianza, no resignación, porque su voluntad es buena.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Las dos palabras · 8 min <span class="edc-mark D">D</span></div>
        <p>Eli dice P13. Luego:</p>
        <div class="guia-say">"<strong>Santa</strong> significa buena, perfecta — Dios nunca quiere algo malo. <strong>Soberana</strong> significa que Él manda; nadie le da órdenes. Su poder y su bondad van juntos."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Hágase tu voluntad · 6 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Mateo 6:10</span>"Hágase tu voluntad, como en el cielo, así también en la tierra."</div>
        <div class="guia-say">"En el Padre Nuestro decimos 'hágase tu voluntad'. Es confiar: 'Dios, tu voluntad es mejor que la mía.' No es triste — es confianza alegre, porque su voluntad es buena."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Oración · 6 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Padre, tu voluntad es santa y buena. Ayúdanos a confiar. Hágase tu voluntad. Amén."</div>
        <p>Eli dice P13 una última vez (mañana es la síntesis).</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No distingue santa de soberana</td><td>Santa = buena; soberana = manda.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende ambas palabras</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Dice "hágase tu voluntad" entendiendo que es confianza</td><td>Registrar. Síntesis mañana.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Santa = buena, Soberana = manda</li><li>"Hágase tu voluntad"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- LECTOESCRITURA TEXTO NUEVO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · Texto nuevo (mamá lee, Eli comprende)</div>
    <div class="lesson-meta">30 min · comprensión profunda escuchando + narración</div>
    <div class="mats"><span class="mat">Un cuento corto o pasaje</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Tu observación clave: Eli comprende mejor cuando ESCUCHA que cuando lee ella. Hoy aprovechamos eso. TÚ lees un cuento corto; Eli escucha y narra. Así crece la comprensión sin la carga de decodificar. (La fluidez se trabaja los otros días con textos cortos.)</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Mamá lee · 8 min <span class="edc-mark E">E</span></div>
        <p>Mamá lee en voz alta un cuento corto (de un libro de la casa, una fábula, o un relato bíblico breve). Con entonación. Eli solo escucha.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Eli narra · 10 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Ahora cuéntame con tus palabras lo que entendiste."</div>
        <p>Eli narra sin ayuda. Mamá observa la comprensión (aquí Eli brilla, según tu registro).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Dibujar la parte favorita · 10 min <span class="edc-mark C">C</span></div>
        <p>Eli dibuja su parte favorita y escribe una frase debajo.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Escuchar bien es un don. Algún día leerás tú sola con la misma facilidad."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Narra fragmentos sueltos</td><td>Releer; narración guiada con preguntas.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Narra el sentido del cuento</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Narra completo con detalles · dibuja y escribe</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Mamá lee un cuento corto</li><li>Eli narra</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- MATEMÁTICAS SUMA HASTA 10 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Suma hasta 10</div>
    <div class="lesson-meta">30 min · juntar grupos · pictórico</div>
    <div class="mats"><span class="mat">Regletas u objetos</span><span class="mat">Cuaderno</span><span class="mat">Opc: Mamut Sumar 1 p.3-4</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Ayer sumamos hasta 5. Hoy hasta 10. Sigue siendo "juntar y contar". Si Eli se cansa (como el viernes pasado), versión mínima sin culpa — la nota de crianza del corazón aplica.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Repaso suma hasta 5 · 5 min <span class="edc-mark E">E</span></div>
        <p>2+2, 3+1, 2+3 con objetos. Rápido.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Sumar hasta 10 · 12 min <span class="edc-mark D">D</span></div>
        <p>Eli arma con objetos y dice el total:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Sumas hasta 10</span>5 + 3 = ___ · 4 + 4 = ___ · 6 + 2 = ___ · 7 + 3 = ___ · 5 + 5 = ___</div>
        <p style="font-size:.85rem;color:var(--muted)">Respuestas: 8, 8, 8, 10, 10.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Dibujar una suma · 8 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Dibuja 4 manzanas y 3 manzanas. ¿Cuántas en total? Escribe 4 + 3 = ___"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Ya sumas hasta 10. ¡Qué bien! Dios te dio una mente que crece."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Necesita objetos para cada suma</td><td>Está bien · sigue concreto.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Suma hasta 10 con objetos</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Suma hasta 10 dibujando o mental</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>3 sumas con objetos</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- HISTORIA ADÁN CUIDA EL HUERTO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">📜</div><div>
    <div class="lesson-ttl">Historia · Adán cuida el huerto y nombra los animales</div>
    <div class="lesson-meta">30 min · Génesis 2:15,19-20 · mayordomía</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Hoja · colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Como imagen de Dios, Adán recibe trabajo: cuidar el huerto y nombrar los animales (Gén 2:15,19-20). Esto es <strong>mayordomía</strong>: Dios nos da el mundo para cuidarlo, no para destruirlo. Eli también es mayordoma — cuida sus cosas, su cuarto, las plantas, los animales. El trabajo es bueno; existía antes de la caída.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Adán tiene trabajo · 6 min <span class="edc-mark E">E</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 2:15 · adaptado</span>"Tomó Dios al hombre y lo puso en el huerto del Edén, para que lo cultivara y lo cuidara."</div>
        <div class="guia-say">"Dios le dio a Adán un trabajo: cuidar el jardín. El trabajo es bueno — Dios lo dio antes de que existiera el pecado."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Adán nombra los animales · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 2:19-20 · adaptado</span>"Dios trajo los animales al hombre para ver cómo los llamaría; y el nombre que el hombre les puso, ese es su nombre."</div>
        <div class="guia-say">"Dios dejó que Adán le pusiera nombre a cada animal. ¡Qué tarea tan importante! Solo un ser hecho a imagen de Dios puede nombrar y cuidar."</div>
        <p>Juego: mamá dice un animal, Eli lo "nombra" o inventa un nombre.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Yo también soy mayordoma · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Tú también cuidas el mundo de Dios: tus juguetes, tu cuarto, las plantas, las mascotas. Eso es ser mayordoma — cuidar lo que Dios te dio."</div>
        <p>Eli dibuja algo que ella cuida.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 8 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios te hizo a su imagen y te dio cosas que cuidar. Cuidar bien es parecerse a Dios, que cuida todo."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No conecta con su propia mayordomía</td><td>Ejemplo concreto: "¿qué cuidas tú?"</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende que Adán cuidaba y nombraba</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Articula que ella también es mayordoma</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Leer Gén 2:15</li><li>"Adán cuidaba el jardín; tú cuidas tus cosas"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- CIENCIAS 5 SENTIDOS -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🔬</div><div>
    <div class="lesson-ttl">Ciencias · Los cinco sentidos</div>
    <div class="lesson-meta">30 min · Dios nos dio sentidos para conocer su mundo</div>
    <div class="mats"><span class="mat">Algo para oler, tocar, probar, escuchar (cosas de casa)</span><span class="mat">Diario de naturaleza</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Segundo bloque de ciencias de la semana (lo que pediste, 2x). Conecta con imagen de Dios: Él nos dio cuerpo con sentidos para conocer y disfrutar su creación. Experimento sensorial sencillo con cosas de la casa. Sin materiales especiales.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Los 5 sentidos · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios te dio 5 maneras de conocer su mundo: ver (ojos), oír (oídos), oler (nariz), gustar (lengua), tocar (piel). ¿Puedes nombrarlos y señalarlos?"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Experimento sensorial · 15 min <span class="edc-mark D">D</span></div>
        <p>Mamá prepara pequeñas pruebas (ojos cerrados cuando aplique):</p>
        <ul style="margin:6px 0 6px 1.2rem;font-size:.85rem">
        <li><strong>Oler:</strong> algo de la cocina (café, limón, canela) — ¿qué es?</li>
        <li><strong>Tocar:</strong> algo suave y algo áspero — ¿cómo se siente?</li>
        <li><strong>Gustar:</strong> algo dulce y algo ácido — ¿a qué sabe?</li>
        <li><strong>Oír:</strong> un sonido (palmada, agua) — ¿qué es?</li>
        </ul>
        <p>Eli adivina usando cada sentido.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Registrar · 7 min <span class="edc-mark C">C</span></div>
        <p>En el diario, Eli dibuja los 5 sentidos (ojo, oído, nariz, lengua, mano) y escribe su sentido favorito.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre pactual · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios te dio sentidos para conocer y disfrutar su mundo. Cada vez que hueles una flor o escuchas música, estás usando un regalo de Dios."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No nombra los 5 sentidos</td><td>Repasar señalando cada órgano.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Usa los sentidos para adivinar</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta los sentidos con conocer el mundo de Dios</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Nombrar los 5 sentidos</li><li>Oler y tocar 2 cosas</li><li>"Dios me dio sentidos"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-sage" style="margin-top:14px">
<strong>🇬🇧 Inglés (30 min)</strong> · <strong>🎹 Piano (20 min)</strong> · cierre del día.
</div>`,

sabado:`${APERTURA}

<div class="strip s-teal" style="margin-bottom:14px">
<strong>📅 Sábado · día de cierre (mismo ritmo, ~2.5 h)</strong><br>
Hoy: síntesis del catecismo + hoja de portafolio · Arte estilo Classical · Música/Himno con su historia. Cerramos la semana con gozo.
</div>

<div class="horario">
<div class="horario-ttl">📅 Sábado · Arte y Música son las materias del día</div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo · SÍNTESIS P11+P12+P13 + portafolio</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:40</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:50</span><span class="horario-act">Lectoescritura ligera · escribir el versículo</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:15</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:30</span><span class="horario-act">🎨 Arte · La creación de Adán (Miguel Ángel)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:00</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:10</span><span class="horario-act">🎵 Música · Himno "Grande es tu fidelidad"</span></div>
<div class="horario-row"><span class="horario-time">10:40</span><span class="horario-act">Inglés + Piano (más relajados)</span></div>
</div>

<!-- SÍNTESIS + PORTAFOLIO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Síntesis P13 + ⭐ Hoja de portafolio</div>
    <div class="lesson-meta">30 min · narración libre + cadena cumulativa + hoja que se guarda</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Hoja del prompt IA</span><span class="mat">Colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>HOY sí es el día de síntesis (no entre semana — corregido según tu observación). Eli vivió P13 en 4 ángulos. Hoy: cadena cumulativa P11+P12+P13, narración libre de lo aprendido, y la hoja de portafolio que se guarda. Esto NO se repitió cada día — solo hoy.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">⭐ Cadena cumulativa · 5 min <span class="edc-mark C">C</span></div>
        <p>Eli dice las TRES preguntas seguidas. Si lo logra: ¡celebración grande!</p>
        <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.<br>P13: ¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Narración libre · 7 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Cuéntame todo lo que aprendiste esta semana sobre que Dios puede todo."</div>
        <p>Mamá escucha. Identifica si menciona: nadie detiene su mano (Dn) · para Dios todo es posible (Mt 19) · nada es difícil/Sara (Gn 18) · santa y soberana voluntad (Mt 6).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">⭐ Hoja de portafolio · 15 min <span class="edc-mark C">C</span></div>
        <p>Saca la hoja impresa (prompt abajo). Eli escribe su nombre y fecha, copia la R de P13, dibuja, completa los ángulos. Mamá firma. Va al portafolio. Exporta respaldo ☁️.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Oración de cierre · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Señor, gracias por esta semana. Eli sabe que tú ves, conoces y puedes todo. Y sabe que ella es tu imagen. Descansamos en ti. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Hoja de portafolio · ⭐</span></div>
    <div class="ficha-eli">
      <p style="font-size:.85rem;color:var(--muted)">Genera la hoja con el prompt (pégalo en cualquier IA). Imprime antes de empezar.</p>
      <div class="prompt-claude">
        <div class="prompt-claude-hd"><span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Portafolio P13</span><button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button></div>
        <div class="prompt-claude-body">Necesito crear una hoja imprimible "resumen de portafolio" en español para mi hija Elisabeth ("Eli"), de 6 años. Familia presbiteriana en Bogotá, marco reformado pactual. Se conserva en su portafolio durante años.

TEMA: Catecismo CPN P13 · Semana 3 · 4 ángulos.
PROPÓSITO: Eli vivió la semana con P13. Esta hoja es la evidencia que se guarda. Lámina coleccionable, no tarea escolar.

CONTENIDO BÍBLICO:
P: ¿Puede Dios hacer todo?
R: Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.

LOS 4 ÁNGULOS:
- Día 1: Daniel 4:35 — nadie detiene su mano
- Día 2: Mateo 19:26 — para Dios todo es posible
- Día 3: Génesis 18:14 — nada es difícil para Dios (Sara e Isaac)
- Día 4: Mateo 6:10 — hágase tu voluntad (santa y soberana)

FORMATO: A4 vertical, 1:1.414 si imagen, márgenes amplios.
ESTILO VISUAL: fondo crema #FAF6F0, tema violeta #6B3FAA con dorado #C49A2A, contemplativo, sin caricaturas, sin neón, sin representar a Dios ni halos.
TIPOGRAFÍA: Georgia títulos, sans-serif texto, mín 14pt, 22pt+ para P y R.

CONTENIDO DE LA HOJA:
- Encabezado: "Lo que aprendí de Dios — Semana 3"
- Subtítulo: "Familia Espinoza · Catecismo P13"
- Cuadro central grande con la P y R.
- "4 cosas que aprendí" con líneas: 🤚 "Nadie detiene la ___ de Dios" / ✨ "Para Dios todo es ___" / 👵 "Nada es ___ para Dios" / 🙏 "Hágase tu ___"
- Recuadro 10×10cm: "Mi dibujo".
- Pregunta: "Cuando recuerdo que Dios puede todo, yo siento ___" (4 líneas).
- Firmas: "Eli — fecha" y "Mamá".
- Cinta dorada: "Hágase tu voluntad, como en el cielo así también en la tierra. — Mateo 6:10"
- Pie: "Familia Espinoza · Creciendo en el Pacto · 2026-27"

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.
Si la IA genera HTML: artifact con CSS embebido, A4 vertical, imprimible.
Si la IA genera PDF: A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
      </div>
    </div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Eli dice P11+P12+P13</li><li>"¿Qué aprendiste de que Dios puede todo?"</li><li>Si no hay hoja: cuaderno con dibujo + R de P13</li><li>Oración. Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack.</b></div></div>

<!-- ARTE CLASSICAL -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🎨</div><div>
    <div class="lesson-ttl">Arte · "La creación de Adán" de Miguel Ángel</div>
    <div class="lesson-meta">30 min · estudio de obra maestra (estilo Classical) + dibujo</div>
    <div class="mats"><span class="mat">Imagen de la obra (impresa o pantalla)</span><span class="mat">Hoja · lápiz · colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Arte estilo Classical (lo que pediste — no dibujar por dibujar). Hoy <strong>estudiamos una obra maestra</strong>: "La creación de Adán" de Miguel Ángel (Capilla Sixtina, 1512). Conecta perfecto con la semana (imagen de Dios). El método Classical/Mason: mirar en silencio → describir → conectar → dibujar. Aprendemos a VER (Cap 16).</p>
    <p style="font-size:.84rem"><strong>Datos para ti:</strong> Miguel Ángel pintó el techo de la Capilla Sixtina en Roma, acostado en un andamio durante 4 años. "La creación de Adán" muestra a Dios extendiendo su dedo hacia Adán, dándole vida. Los dedos casi se tocan — ese pequeño espacio es famoso en todo el mundo.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Mirar en silencio · 5 min <span class="edc-mark E">E</span></div>
        <p>Muestra la obra. Eli la mira 2 minutos sin hablar. Solo observa.</p>
        <div class="guia-say">"Mira esta pintura con calma. No digas nada todavía. Solo mira."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Describir · 7 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Ahora cuéntame: ¿qué ves? ¿Quiénes son? ¿Qué están haciendo? ¿Qué pasa con sus manos?"</div>
        <p>Eli describe. Mamá guía: "Dios (a la derecha) le da vida a Adán (a la izquierda) con su dedo."</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Conectar · 5 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Esta semana aprendimos que Dios creó al hombre a su imagen y le dio aliento de vida. El pintor Miguel Ángel quiso mostrar ese momento: Dios dando vida a Adán. El arte puede contar la verdad de la Biblia."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Dibujar (elementos OiLS) · 11 min <span class="edc-mark C">C</span></div>
        <p>Eli dibuja dos manos que casi se tocan (como en la obra), usando líneas y curvas. Recordatorio del lenguaje del dibujo (Classical OiLS / Monart): <strong>puntos, líneas, curvas, ángulos, círculos</strong> — todo dibujo se hace con esos 5 elementos.</p>
        <div class="guia-say">"Una mano se hace con curvas (los dedos) y líneas. Empieza despacio, mirando tu propia mano."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">5</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios fue el primer artista — hizo un mundo bello. Tú, como su imagen, también puedes crear belleza."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Mira poco, no describe</td><td>Hacer preguntas concretas: "¿cuántas personas ves?"</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Describe la obra · dibuja las manos</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta la obra con la creación del hombre · usa los elementos al dibujar</td><td>Registrar. Guardar el dibujo.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">15 min</div><ol><li>Mirar la obra en silencio</li><li>"¿Qué ves?"</li><li>Conectar: Dios da vida a Adán</li><li>Dibujar dos manos. Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa.</b></div></div>

<!-- MÚSICA HIMNO CON HISTORIA -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">🎵</div><div>
    <div class="lesson-ttl">Música · "Grande es tu fidelidad" — su historia</div>
    <div class="lesson-meta">30 min · historia del himno + biografía del autor + cantar</div>
    <div class="mats"><span class="mat">Letra del himno</span><span class="mat">Audio o piano (opcional)</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>El himno CON su historia (lo que pediste). No solo cantar — conocer de dónde viene. <strong>"Grande es tu fidelidad"</strong> conecta con la semana: Dios sostiene fielmente su creación día a día (el día 7, la providencia).</p>
    <p style="font-size:.84rem"><strong>La historia (para que la cuentes a Eli):</strong> El autor es <strong>Thomas Chisholm</strong> (1866-1960), un maestro de escuela y luego ministro en Estados Unidos. No tuvo una vida dramática ni espectacular — fue de salud frágil y trabajos sencillos. Pero escribió este himno meditando en <strong>Lamentaciones 3:22-23</strong>: "Por la misericordia del Señor no hemos sido consumidos... nuevas son cada mañana; grande es tu fidelidad." Chisholm dijo que el himno nació de su experiencia diaria de la fidelidad de Dios en lo ordinario — no en grandes milagros, sino en cada amanecer. Por eso el himno habla de "cada mañana": el sol que sale, las estaciones, el cuidado diario. Igual que Dios reposó el día 7 y sigue sosteniendo el mundo.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">La historia del himno · 8 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Este himno lo escribió un señor llamado Thomas Chisholm, hace como 100 años. No era famoso ni rico — era un maestro con salud delicada. Pero cada mañana veía que Dios era fiel: salía el sol, tenía lo que necesitaba. Y escribió esta canción leyendo la Biblia, en Lamentaciones: 'nuevas son cada mañana tus misericordias; grande es tu fidelidad.'"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">El versículo que lo inspiró · 5 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Lamentaciones 3:22-23</span>"Por la misericordia del Señor no hemos sido consumidos... nuevas son cada mañana; grande es tu fidelidad."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cantar · 12 min <span class="edc-mark D">D</span></div>
        <p>Cantar juntas el coro: "¡Oh, tu fidelidad! ¡Oh, tu fidelidad! Cada momento la veo en mí..." Si tienes audio o piano, acompañen. Repetir 2-3 veces.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Conectar + cierre · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Esta semana vimos que Dios reposó el día 7 y sigue cuidando el mundo cada día. Eso es su fidelidad: cada mañana, sin fallar. Por eso cantamos 'grande es tu fidelidad.'"</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>No recuerda la historia · solo canta</td><td>Cantar está bien; repetir la historia otro día.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Recuerda que el autor vio la fidelidad diaria de Dios</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta "fidelidad cada mañana" con el cuidado de Dios en la creación</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Contar quién fue Thomas Chisholm</li><li>Leer Lamentaciones 3:22-23</li><li>Cantar el coro</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-sage" style="margin-top:14px">
<strong>🇬🇧 Inglés + 🎹 Piano</strong> · el sábado más relajados. Después, ¡tiempo en familia! El domingo descansamos y vamos a la iglesia Raah.
</div>`
};

// ── SEMANA 4 ──
const W4 = {
fm:`<div class="fm-section">
<div class="fm-title">Formación para mamá — Semana 4</div>
<div class="fm-sub">Lectura para el lunes (preparación). Con calma, sin materiales a la mano. Tema: la caída y la promesa · catecismo P14.</div>

<div class="fm-block"><h4>Qué verdad bíblica gobierna esta semana</h4>
<p>Génesis 3 no es la historia de "una niña que desobedeció y le fue mal". Eso sería moralismo. Es la historia de cómo <strong>el pecado desordena lo que Dios hizo bueno</strong> — y de cómo <strong>Dios no abandona su plan</strong>. Adán y Eva no solo rompieron una regla: le volvieron la espalda a Dios y prefirieron sus propias ideas. El mundo bueno quedó roto, y nosotros nacemos con esa rotura (no podemos arreglarla solos).</p>
<p>Pero en medio del juicio, Dios pronuncia una promesa: Génesis 3:15 — alguien vendría a vencer al enemigo. Es el <strong>primer evangelio</strong>. Por eso la semana NO termina en el pecado, sino en la promesa que apunta a Cristo. Schenck nos recuerda que los hijos del pacto tienen pecado real, necesidad real de Cristo y promesa real de gracia: no les ocultamos el quebranto, pero tampoco los dejamos ahí.</p></div>

<div class="fm-verse"><div class="fm-verse-lbl">📖 Versículo de la semana — memorización</div>
<div class="fm-verse-txt">"Toda la Escritura es inspirada por Dios, y útil para enseñar… a fin de que el hombre de Dios sea enteramente preparado para toda buena obra." — 2 Timoteo 3:16-17</div>
<div class="fm-verse-plan">Mar: leer juntas · Mié: primera mitad · Jue: segunda mitad · Vie: completo con palmadas · Sáb: Eli lo dice sola.</div></div>

<div class="fm-block"><h4>🛒 Materiales de la semana (consíguelos el lunes)</h4>
<ul>
<li>Biblia · Catecismo para Niños · "Mamá enséñame a leer" (sección <strong>Z</strong>) · cuaderno · colores.</li>
<li>Regletas Cuisenaire · <strong>Mamut Restar 1</strong>.</li>
<li>Un <strong>mapa del mundo</strong> (impreso o en pantalla) para geografía.</li>
<li>⚠️ <strong>Para el viernes (ciencias):</strong> un recipiente hondo con <strong>agua</strong> + varios objetos pequeños (una piedra, un corcho o tapa, una cuchara de metal, una hoja, un juguete) para ver qué <strong>flota</strong> y qué se <strong>hunde</strong>.</li>
</ul></div>

<div class="fm-block"><h4>🎯 Plan personalizado para Eli (según tu informe de S3)</h4>
<table class="eval-tabla"><tr><th>Área</th><th>Dónde está</th><th>Acción esta semana</th></tr>
<tr class="D"><td class="lvl">Lectura</td><td>Silabea aún; comprende mejor escuchando que leyendo ella</td><td>Letra Z al estándar: decodificar sin presión + comprensión por escucha (mamá lee → Eli narra).</td></tr>
<tr class="D"><td class="lvl">Escritura</td><td>Mejorando; frases propias</td><td>Copia breve (la Z bien hecha) + mayúscula y punto.</td></tr>
<tr class="C"><td class="lvl">Mate</td><td>Ya inició la suma (S3)</td><td>Avanza a la <strong>resta</strong> (quitar) con regletas, conectada con la suma (familias de números).</td></tr>
<tr class="C"><td class="lvl">Catecismo</td><td>Hila muy bien P11–P13</td><td>P14 con peso teológico (4 dimensiones); cierra el primer ciclo.</td></tr>
</table></div>

<div class="fm-block"><h4>🐑 Nota de crianza del corazón (Cap 10)</h4>
<p>Esta semana se habla del pecado. Cuídate de dos extremos: hablar del pecado con <strong>dureza</strong> (asustar) o con <strong>ligereza</strong> (restarle peso). Cuando Eli desobedezca esta semana, no uses Génesis 3 como amenaza ("mira lo que pasa por desobedecer"). Úsalo como espejo y como evangelio: "todos tenemos esa rotura; por eso necesitamos a Jesús, que Dios prometió desde el principio". El pecado se nombra para llevar a Cristo, no para modificar conducta.</p></div>

<div class="fm-block"><h4>⛪ Conexión con la iglesia (Raah)</h4>
<p>Lo que Eli aprende —que conocemos a Dios solamente en su Palabra (P14)— es exactamente lo que pasa el domingo: nos sentamos bajo la predicación de esa Palabra. Dile el sábado: "mañana, en Raah, vamos a escuchar la Biblia que aprendimos a amar esta semana".</p></div>

<div class="fm-prayer"><div class="pry-lbl">🙏 Oración antes de enseñar</div>
<p>"Señor, enséñame a hablar del pecado sin dureza y de la gracia sin ligereza. Que mi hija aprenda que necesita a Cristo, no como doctrina abstracta, sino como verdad que toca su vida. Y que el nuevo camino en lectura sea también una oportunidad de ver tu providencia en cosas pequeñas. En el nombre de Jesús. Amén."</p></div>
</div>`,

martes:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Martes · Geografía es la materia del día <span style="font-weight:400">· día liviano (piano 2pm + inglés)</span></div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P14 · Día 1</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Geografía · el mundo fuera del Edén</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Lectoescritura · la letra Z</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Matemáticas · la resta (quitar) — corto</span></div>
<div class="horario-row"><span class="horario-time">2:00pm</span><span class="horario-act">🎹 Piano + 🇬🇧 Inglés (externos)</span></div>
</div>

<div class="strip s-sage"><strong>Día protegido:</strong> hoy Eli tiene piano e inglés en la tarde. Mantén la <strong>profundidad</strong> pero <strong>menos carga</strong>: mate corto, sin alargar. La materia dinámica (geografía) va entre catecismo y lectoescritura para no encadenar dos materias de alta concentración.</div>

<!-- CATECISMO P14 DÍA 1 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P14 · Día 1 — La Palabra es la voz de Dios</div>
    <div class="lesson-meta">20 min · ¿En dónde aprendes a obedecer y amar a Dios? · 2 Timoteo 3:16</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span><span class="lsec-sub">léelo el lunes</span></div>
    <div class="lec-mama">
      <p><span class="lec-tag">La pregunta:</span> P14 — <strong>¿En dónde aprendes a obedecer y amar a Dios? R: Solamente en la Biblia.</strong> Cierra el primer ciclo (P11 Dios me mira · P12 Dios sabe · P13 Dios puede · P14 Dios me habla en su Palabra).</p>
      <p><span class="lec-tag">Las 4 dimensiones (hazlas visibles):</span> <strong>textual</strong> (el versículo dice "inspirada por Dios"), <strong>doctrinal</strong> (la Biblia es la voz de Dios, no palabras humanas), <strong>cosmovisión</strong> (la naturaleza nos dice que Dios existe, pero solo la Biblia nos dice quién es y qué hizo Cristo), <strong>aplicación</strong> (vamos a la Biblia ANTES que a los sentimientos o las opiniones).</p>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Apertura · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Eli, ¿dónde aprendes a sumar? (en el libro de mate, con regletas). ¿Dónde aprendes a leer? (en libros). ¿Y dónde aprendes a amar y obedecer a Dios? Hoy aprendemos la respuesta más importante."</div>
        <p>Presenta P14 y repite 3 veces. Subraya la palabra <strong>"solamente"</strong>: "no dice 'en muchos lugares'. Dice SOLAMENTE."</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Textual + doctrinal · 7 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">2 Timoteo 3:16</span>"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia."</div>
        <div class="guia-say">"'Inspirada por Dios' significa que Dios mismo guió a los que la escribieron. Por eso las palabras de la Biblia no son simples palabras humanas — son la voz de Dios. Y dice 'TODA': toda la Biblia, no solo algunas partes."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cosmovisión · 6 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Cuando miras una flor, sabes que hay un Creador. Cuando ves el cielo, sabes que es grande. Eso es bueno — la creación nos dice que Dios existe. PERO la flor no te dice cómo se llama Dios, ni que envió a Jesús, ni cómo orar. Eso solo lo dice la Biblia. Por eso es especial: es Dios mismo hablándonos."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Aplicación + oración · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Cuando queremos saber qué quiere Dios, vamos a la Biblia PRIMERO — antes que los sentimientos, antes que las opiniones. ¿Dónde buscamos a Dios? Solamente en su Palabra."</div>
        <div class="guia-say">"Señor, gracias porque nos diste tu Palabra. Que Eli te busque siempre allí — solamente allí. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Recita pero no distingue Biblia de otros libros</td><td>Volver a la flor: "nos dice QUE Dios existe, no QUIÉN es".</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Recita P14 y entiende "solamente"</td><td>Preguntar: "¿la naturaleza te dice que Jesús murió por ti?" (No — eso solo la Biblia).</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Explica por qué la Biblia es la voz de Dios y va a ella primero</td><td>Registrar. Lista para Día 2.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Repaso P11+P12+P13</li><li>P14 tres veces</li><li>"Conocemos a Dios SOLAMENTE en la Biblia"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> agua + saltar 20 veces + estirarse.</div></div>

<!-- GEOGRAFÍA -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🗺️</div><div>
    <div class="lesson-ttl">Geografía · El mundo fuera del Edén</div>
    <div class="lesson-meta">30 min · el mundo ancho que Dios hizo · Génesis 3:23 · Salmo 24:1</div>
    <div class="mats"><span class="mat">Mapa del mundo (en español)</span><span class="mat">Mapa de Colombia</span><span class="mat">Colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>La semana pasada vimos el Edén (un lugar real). Hoy ampliamos: cuando Adán y Eva salieron del Edén (Gén 3:23), salieron al <strong>mundo ancho que Dios hizo</strong>. Pregunta de fondo: <em>"¿qué aspecto del mundo de Dios estamos aprendiendo a ver?"</em> → que la tierra entera es de Dios (Sal 24:1). Inicia el <strong>eje del año</strong>: del Edén nos abriremos al mundo, y al final llegaremos a Colombia. <strong>Todo en español</strong> — material nuestro, nada de canciones en inglés.</p>
    <p><span class="lec-tag">El mapa del pacto:</span> pega un mapa mundi en la pared. Cada semana marcamos con un sticker DÓNDE ocurre la historia bíblica + un sticker fijo en <strong>Colombia</strong>. Así Eli ve la historia viajar por el mundo real hacia nosotras.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Del Edén al mundo · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Adán y Eva tuvieron que salir del jardín. ¿A dónde fueron? Al mundo grande que Dios también había hecho. Vamos a mirar ese mundo entero."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">El mapa del mundo · 12 min <span class="edc-mark D">D</span></div>
        <p>Muestra el mapa. Señalen la tierra y el mar (azul). Cuenta los <strong>continentes</strong> y los <strong>océanos</strong>. Eli colorea el mar de azul. Pongan el primer sticker del "mapa del pacto" en el Medio Oriente (donde empezó la historia) y otro fijo en <strong>Colombia</strong>.</p>
        <div class="guia-say">"Todo esto —cada continente, cada mar— lo hizo Dios y le pertenece. 'De Jehová es la tierra y su plenitud.' No hay un solo lugar que no sea de Él."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Nuestro canto de los continentes · 5 min <span class="edc-mark E">E</span></div>
        <p>En español y nuestro. Repítanlo señalando cada continente en el mapa (ritmo de palmadas; melodía libre):</p>
        <div class="guia-bible"><span class="guia-bible-ref">🎵 Canto de los continentes</span>América, Europa, Asia,<br>África, Oceanía, Antártida —<br>seis continentes hizo Dios:<br>¡toda la tierra es del Señor!</div></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"El mundo es grande, pero todo es de Dios. Cada semana marcaremos en el mapa dónde pasó la Biblia… hasta llegar a nosotras en Colombia."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha + prompt para IA</span><span class="lsec-sub">opcional · mapa en español</span></div>
      <div class="ficha-eli">
        <p><strong>Imprimible · A4</strong> — un mapa mundi infantil <strong>en español</strong> (continentes y océanos rotulados, Colombia resaltada) para colorear y usar como "mapa del pacto".</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Mapa del mundo (español)</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una ficha imprimible en español para mi hija Elisabeth ("Eli"), de 6 años. Educamos en casa con marco reformado y pactual.

TEMA: Un mapa del mundo sencillo para niños, en ESPAÑOL.
PROPÓSITO: que Eli vea el mundo que Dios hizo, coloree el mar y ubique los continentes; servirá de "mapa del pacto" para marcar cada semana dónde ocurre la historia bíblica.
MARCO DOCTRINAL: reformado pactual · sin moralismo · "de Jehová es la tierra y su plenitud" (Sal 24:1). Toda la tierra es de Dios.

CONTENIDO DE LA HOJA (A4 horizontal, una página):
1. Encabezado: "El mundo que Dios hizo".
2. Un planisferio sencillo y claro, con los seis continentes ROTULADOS EN ESPAÑOL: América, Europa, Asia, África, Oceanía, Antártida.
3. Los océanos rotulados en español (Pacífico, Atlántico, Índico, Glacial Ártico, Glacial Antártico).
4. COLOMBIA resaltada con un corazón o estrella pequeña, para que Eli ubique su país.
5. El mar en líneas suaves para que Eli lo coloree de azul.
6. Cinta al pie con el versículo: "De Jehová es la tierra y su plenitud." (Salmo 24:1)

DISEÑO VISUAL:
- Fondo crema cálido (#FAF6F0). Acento verde/azulado para el mar y los bordes.
- Tipografía: Georgia para títulos; sans-serif clara para los rótulos (mínimo 14pt, legible para una niña).
- Trazos sencillos, no saturado; ilustración respetuosa, no caricaturesca; no representar a Dios.

OUTPUT SEGÚN LA IA USADA:
Si la IA genera imagen: A4 horizontal, alta resolución, con el mar en blanco/líneas para colorear.
Si la IA genera HTML: artifact con CSS embebido, A4 horizontal, imprimible sin márgenes del navegador.
Si la IA genera PDF: A4 horizontal, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Mostrar el mapa, señalar tierra y mar</li><li>Cantar el canto de los continentes</li><li>Marcar el "mapa del pacto" (historia + Colombia)</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- LECTOESCRITURA Z -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · La letra Z</div>
    <div class="lesson-meta">30 min · "Mamá enséñame a leer" sección Z · decodificar</div>
    <div class="mats"><span class="mat">Mamá enséñame a leer (Z)</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Tras la Y (S3), cerramos el alfabeto con la <strong>Z</strong>, al mismo estándar: hoy el foco es <strong>decodificar</strong> (leer la letra sin presión de comprensión). Sigue la sección Z de "Mamá enséñame a leer"; todo lo necesario está aquí. Recuerda: leer es recibir la realidad, escribir bien es decir la verdad (9.º mandamiento).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Sonido de la Z · 6 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Esta es la letra Z. Escucha: zapato, zorro, luz. Ahora tú: za, ze, zi, zo, zu."</div>
        <p>Repite las sílabas despacio 2 veces. Celebra el intento.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Decodificar palabras · 14 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Palabras (Eli las lee en voz alta)</span>zapato · zorro · taza · pozo · azul · nariz · luz · paz · feliz · cruz</div>
        <p>Sin prisa, decodificando. No pidas significado aún. Celebra cada una que logra sola. <em>(Bonito: "paz", "luz" y "cruz" — palabras que también dicen algo del evangelio.)</em></p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Escribir la Z · 10 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Escribe una frase corta y verdadera con una palabra que tenga Z. Mayúscula al inicio, punto al final."</div>
        <p>Eli escribe sola. Mamá señala SOLO una cosa: que la Z esté bien hecha (o la mayúscula).</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Le cuesta el sonido /z/ o las sílabas</td><td>Quedarse en sílabas hoy; palabras mañana.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Decodifica palabras con Z silabeando</td><td>Es lo normal. Celebra; marca solo la mayúscula.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Lee fluido y escribe una frase con mayúscula y punto</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Sílabas za-ze-zi-zo-zu</li><li>Eli lee 4 palabras con Z</li><li>Escribe "luz" o "paz"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- MATEMÁTICAS -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · La resta — quitar (introducción)</div>
    <div class="lesson-meta">20 min (día liviano) · concreto con regletas</div>
    <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>En S3 Eli aprendió a <strong>juntar</strong> (sumar). Esta semana aprende lo contrario: <strong>quitar</strong> (restar) — algo nuevo y motivante. (a) <strong>Manipulativo:</strong> regletas. (b) <strong>Concepto Singapur:</strong> del TODO quito una PARTE y queda la otra (misma familia "parte-parte-todo" de la suma, al revés). (c) <strong>Mamut:</strong> entramos a Mamut Restar 1 el jueves. Hoy solo <strong>concreto</strong>. Marco: el orden de los números es del mundo que Dios hizo (Prov 3:19-20).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Quitar con regletas · 12 min <span class="edc-mark D">D</span></div>
        <p>Pon 5 regletas blancas. Quita 2. ¿Cuántas quedan?</p>
        <div class="guia-say">"Tenía 5 y quito 2. ¿Cuántas quedan? Quitar es lo contrario de juntar — el grupo se hace más pequeño."</div>
        <p style="font-size:.85rem;color:var(--muted)">5 − 2 = 3. Repite con 4−1, 6−3, 5−4, 7−2 (concreto, sin escribir todavía).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Suma y resta son familia · 6 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Si 3 y 2 juntos son 5… entonces de 5 quito 2 y quedan 3. ¡Son la misma familia! Juntar y quitar van de la mano."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 2 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Restar es quitar una parte del total. Mañana lo hacemos otra vez con las regletas."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">8 min</div><ol><li>Quitar: 5 − 2 con regletas</li><li>"Quitar es lo contrario de juntar"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-gold" style="margin-top:14px"><strong>🎹 Piano + 🇬🇧 Inglés (2:00 pm, externos):</strong> bloques de la tarde. No son currículo de la app. Hoy el día académico cierra temprano para dejar espacio.</div>`,

miercoles:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Miércoles · Ciencias es la materia del día <span style="font-weight:400">· día ligero (natación 2pm)</span></div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P14 · Día 2</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Ciencias · el agua que Dios nos da</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Lectoescritura · Z en eco (repaso)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Matemáticas · resta con regletas (corto)</span></div>
<div class="horario-row"><span class="horario-time">2:00pm</span><span class="horario-act">🏊 Natación (externo)</span></div>
</div>

<div class="strip s-sage"><strong>Día ligero:</strong> natación en la tarde. Actividades <strong>cortas y activas</strong>; ciencias (observar el agua) es práctica y se intercala entre catecismo y lectoescritura. Lectoescritura es repaso en eco, sin presión.</div>

<!-- CATECISMO P14 DÍA 2 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P14 · Día 2 — La Biblia se resume en dos amores</div>
    <div class="lesson-meta">15 min · Mateo 22:37-40 · amar a Dios y al prójimo</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Ayer: la Biblia es la voz de Dios. Hoy: ¿qué dice, en resumen? Jesús mismo lo resumió en <strong>dos amores</strong> (Mt 22:37-40). 4 dimensiones: <strong>textual</strong> (el mandamiento mayor), <strong>doctrinal</strong> (toda la ley depende de estos dos), <strong>cosmovisión</strong> (la cruz tiene dos brazos: a Dios y al prójimo), <strong>aplicación</strong> (dos preguntas: ¿esto ama a Dios? ¿esto ama al prójimo?).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">15 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Textual · 5 min <span class="edc-mark E">E</span></div>
        <p>Cuenta: un hombre quiso poner a prueba a Jesús: "¿cuál es el mandamiento más grande?" Jesús contestó con DOS:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Mateo 22:37-40</span>"Amarás al Señor tu Dios con todo tu corazón… Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo. De estos dos mandamientos depende toda la ley."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Doctrinal + cosmovisión · 6 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"TODA la Biblia depende de estos dos: amar a Dios + amar al prójimo. Mira tus brazos: uno hacia arriba (amar a Dios), otro al lado (amar al prójimo). Los dos juntos hacen una cruz. La cruz de Jesús nos enseña los dos amores."</div>
        <div class="guia-say">"¿Quién es tu prójimo? No solo los de cerca. Es cualquier persona que Dios pone en tu camino: papá, mamá, la abuela, la amiga de la iglesia, la señora que ayuda en casa."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Aplicación + oración · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Cuando no sepas qué hacer, hazte dos preguntas: ¿esto ama a Dios? ¿esto ama al prójimo? Si las dos son SÍ, vas bien."</div>
        <div class="guia-say">"Señor, gracias porque toda tu Palabra se resume en amor. Ayuda a Eli a amarte a ti y a los que pones a su lado. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Recuerda un amor, no los dos</td><td>Volver a los dos brazos / la cruz.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Dice los dos amores</td><td>Preguntar quién es su prójimo hoy.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Aplica las dos preguntas a un caso suyo</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Repaso P14</li><li>Los dos amores (los dos brazos)</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> agua, estirarse.</div></div>

<!-- CIENCIAS CONCEPTUAL -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🔬</div><div>
    <div class="lesson-ttl">Ciencias · El agua que Dios nos da</div>
    <div class="lesson-meta">30 min · observar antes de explicar · Génesis 1 · (hilo: el agua)</div>
    <div class="mats"><span class="mat">Un vaso de agua</span><span class="mat">Un cubo de hielo</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>El hilo de ciencias de la semana es <strong>el agua</strong> (algo nuevo — no el frijol). Hoy la sesión <strong>conceptual</strong>; el <strong>viernes</strong>, el <strong>experimento</strong> (flota o se hunde) — mismo hilo. Método Mason: <strong>observar antes de explicar</strong> — pregunta "¿qué ves?" antes de nombrar. Marco: Dios hizo el agua (Gén 1:2, 6-10) y por ella sostiene toda la vida. Sin cientificismo: observamos con reverencia.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Observar · 8 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Mira este vaso de agua. ¿Qué ves? ¿Tiene color? ¿Tiene forma propia, o toma la forma del vaso? Toca: ¿moja?"</div>
        <p><em>Deja que Eli describa.</em> El agua es transparente, no tiene forma propia, moja.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Las formas del agua · 10 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"El agua puede ser LÍQUIDA (la que bebemos), SÓLIDA (el hielo: frío y duro) y también vapor (cuando hierve y sube). Mira este hielo: es agua dura. Si lo dejamos un rato, ¿qué pasará?"</div>
        <p>Dejen el hielo a un lado para verlo derretir más tarde (mini-observación).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">¿Quién necesita agua? · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"¿Quién necesita agua para vivir? Las plantas, los animales, las personas… todos. Dios hizo el agua y por ella cuida la vida. El viernes vamos a jugar a ver qué cosas flotan y qué cosas se hunden."</div>
        <p>Eli dibuja el vaso y el hielo en su cuaderno.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios hizo el agua y la dio como un regalo para toda la vida. Hasta un vaso de agua habla de su bondad."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Observa pero no describe</td><td>Nombra tú una propiedad, ella repite.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Dice 1-2 formas del agua y quién la necesita</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Explica las formas (sólido/líquido) y por qué es importante</td><td>Registrar. Lista para el experimento del viernes.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Observar el agua: "¿qué ves?"</li><li>Líquida y sólida (el hielo)</li><li>"Dios la hizo; todos la necesitan"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- LECTOESCRITURA Z — ECO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · Z en lectura en eco + comprensión</div>
    <div class="lesson-meta">25 min · decodificar fluido + entender escuchando</div>
    <div class="mats"><span class="mat">Texto corto con Z</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Repaso de la Z con <strong>lectura en eco</strong>: tú lees una línea con buena entonación, Eli la repite. Así oye cómo suena leer fluido y comprende mejor. Día ligero: corto y sin presión.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">25 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Texto en eco · 12 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Texto con Z (mamá lee, Eli repite cada línea)</span>Hoy hace sol y hay mucha luz.<br>El zorro veloz corre feliz.<br>La paz viene de Dios.<br>Jesús nos dio paz en la cruz.</div>
        <p>Mamá lee cada línea → Eli la repite. Luego Eli lee sola las que pueda.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Comprensión oral · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"¿De dónde viene la paz? ¿Qué hizo Jesús en la cruz?"</div>
        <p>Eli responde hablando, no leyendo.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Copiar una línea · 5 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Copia tu línea favorita. Mayúscula al inicio, punto al final."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">8 min</div><ol><li>Mamá lee, Eli repite en eco</li><li>1 pregunta de comprensión</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- MATEMÁTICAS -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Resta con regletas (corto)</div>
    <div class="lesson-meta">20 min · concreto · quitar del total</div>
    <div class="mats"><span class="mat">Regletas Cuisenaire</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Día ligero: repaso corto de la resta. (a) <strong>Manipulativo:</strong> regletas. (b) <strong>Singapur:</strong> del todo quito una parte. (c) <strong>Mamut:</strong> mañana (jueves) entramos a la hoja (Restar 1). Hoy solo concreto.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Restas con regletas · 14 min <span class="edc-mark D">D</span></div>
        <p>Eli arma el total, quita y dice cuánto queda:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Restas (respuestas para mamá)</span>5 − 1 = 4 · 6 − 2 = 4 · 7 − 3 = 4 · 8 − 5 = 3 · 9 − 4 = 5</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 6 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Del total quitamos una parte y queda la otra. Mañana lo escribimos en la hoja de Mamut."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">8 min</div><ol><li>3 restas con regletas</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-gold" style="margin-top:14px"><strong>🏊 Natación (2:00 pm):</strong> bloque externo de la tarde. El día académico fue ligero a propósito.</div>`,

jueves:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Jueves · Historia + Naturaleza <span style="font-weight:400">· día completo (sin actividad de tarde)</span></div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P14 · Día 3</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Historia · la Caída y la promesa (Gén 3)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:15</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:30</span><span class="horario-act">Lectoescritura · dictado con Z</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:00</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:10</span><span class="horario-act">Matemáticas · Mamut Restar 1</span></div>
<div class="horario-row pausa-row"><span class="horario-time">10:40</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:50</span><span class="horario-act">🌿 Salida de naturaleza (el agua en la creación)</span></div>
</div>

<div class="strip s-sage"><strong>Día completo:</strong> el único sin actividad de tarde → es el ancla académica. Historia (densa) va temprano, intercalada entre catecismo y lectoescritura. La salida de naturaleza cierra el día y conecta con el hilo de ciencias (el agua).</div>

<!-- CATECISMO P14 DÍA 3 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P14 · Día 3 — Solamente la Biblia (la lámpara única)</div>
    <div class="lesson-meta">15 min · Salmo 119:105 · Sola Scriptura</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Linterna o vela (opcional)</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy el peso cae en la palabra <strong>"solamente"</strong> (Sola Scriptura). 4 dimensiones: <strong>textual</strong> (la Palabra es lámpara), <strong>doctrinal</strong> (la Biblia es la regla; lo demás se compara con ella), <strong>cosmovisión</strong> (el corazón puede engañar; la Biblia no), <strong>aplicación</strong> (por eso la leemos cada día). La Biblia es regla y es <em>suficiente</em>: tiene todo lo que necesitamos.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">15 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Textual (con la linterna) · 5 min <span class="edc-mark E">E</span></div>
        <p>Apaga la luz un momento: "¿ves qué difícil es caminar a oscuras? Con luz, todo cambia." Enciende la linterna.</p>
        <div class="guia-bible"><span class="guia-bible-ref">Salmo 119:105</span>"Lámpara es a mis pies tu palabra, y lumbrera a mi camino."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Doctrinal + cosmovisión · 7 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Si tuvieras 100 libros distintos sobre Dios, ¿cuál creerías? Sería un lío. Por eso Dios dio UNA Biblia y dijo: 'esta es mi voz; compara todo con esto.' Cuando un amiguito diga algo de Dios, lo comparas con la Biblia. Cuando sientas algo, lo comparas con la Biblia. Tu corazón puede engañarte; la Biblia no."</div>
        <div class="guia-say">"'Solamente' también significa que a la Biblia no le falta nada: para conocer a Dios, para el pecado, para orar, para amar — todo está ahí."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Aplicación + oración · 3 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Por eso leemos la Biblia cada día: es como abrir la luz de la mañana. Señor, gracias porque tu Palabra es nuestra luz. Que Eli te busque allí primero. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Repite "lámpara" sin la idea de "única"</td><td>Volver a los 100 libros vs. una Biblia.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Entiende que la Biblia es la regla</td><td>Preguntar: "¿qué haces si tu corazón te dice algo distinto a la Biblia?"</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Dice que la Biblia es única y suficiente</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Sal 119:105 con la linterna</li><li>"Solamente la Biblia es la regla"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min):</b> saltar, estirarse.</div></div>

<!-- HISTORIA GÉN 3 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">📜</div><div>
    <div class="lesson-ttl">Historia · La Caída y la promesa</div>
    <div class="lesson-meta">35 min · Génesis 3 · el primer evangelio (3:15)</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Cuaderno / colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>La historia de la semana (1 día, densa). NO la cuentes como moraleja ("desobedecer es malo"). Cuéntala como lo que es: el pecado desordenó el mundo bueno, <strong>y Dios prometió un Salvador en medio del juicio</strong> (Gén 3:15, el primer evangelio). Termina SIEMPRE en la promesa, no en el castigo.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">35 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">La rotura · 12 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Adán y Eva tenían todo lo bueno que Dios les dio. Pero el enemigo les dijo: 'Dios les escondió algo.' Y eligieron no confiar en Dios. Eso es el pecado: volverle la espalda a Dios y decir 'prefiero mis propias ideas'. Cuando eso pasó, todo cambió. El mundo bueno quedó roto. Nosotros también nacemos con esa rotura. No podemos arreglarlo solos."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">La promesa · 12 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Génesis 3:15 · adaptado</span>"Pondré enemistad entre ti y la mujer… él te herirá en la cabeza." (Dios le habla a la serpiente.)</div>
        <div class="guia-say">"Pero Dios dijo algo en medio del juicio: prometió que alguien vendría a vencer al enemigo. Esa promesa apunta a Cristo. Por eso, aunque el mundo se rompió, hay esperanza desde el primer día."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Narración + dibujo · 11 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Cuéntame con tus palabras: ¿qué pasó? ¿y qué prometió Dios?"</div>
        <p>Pregunta de comprensión elevada: <em>"¿Por qué crees que Dios no destruyó todo en ese momento? ¿Qué aprendemos de Dios al ver que prometió ayuda en medio del castigo?"</em> Eli responde y dibuja la promesa (no la serpiente como protagonista — la esperanza).</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Lo cuenta como "portarse mal"</td><td>Reencuadrar: el pecado es desconfiar de Dios; lo importante es la promesa.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Narra la caída y la promesa</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta la promesa (3:15) con Jesús</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">12 min</div><ol><li>"El pecado rompió el mundo bueno"</li><li>Leer Gén 3:15: "Dios prometió un Salvador"</li><li>Eli narra</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- LECTOESCRITURA Z — DICTADO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · Dictado con Z + escritura propia</div>
    <div class="lesson-meta">30 min · escribir · mayúscula y punto</div>
    <div class="mats"><span class="mat">Cuaderno</span><span class="mat">Lápiz</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy Eli escribe (no decodifica). Dictado de 3 frases con Z + escritura propia. Una sola corrección (la mayúscula o la Z). Escribir con cuidado es decir la verdad con cuidado (9.º mandamiento).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Dictado · 14 min <span class="edc-mark D">D</span></div>
        <p>Mamá dicta despacio, cada frase 2 veces:</p>
        <div class="guia-bible"><span class="guia-bible-ref">Dictado (3 frases)</span>1. La luz es un regalo de Dios.<br>2. Jesús nos da paz.<br>3. La cruz nos habla de su amor.</div>
        <p>Al final comparan y corrigen UNA cosa.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Escritura propia · 11 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Escribe 2 frases tuyas sobre algo que Dios hizo. Mayúscula al inicio, punto al final."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 5 min <span class="edc-mark E">E</span></div>
        <p>Eli lee sus frases en voz alta. Mamá celebra el contenido.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Dictar 1 frase</li><li>Eli escribe 1 frase propia</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- MATEMÁTICAS MAMUT -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Resta — a la hoja (Mamut Restar 1)</div>
    <div class="lesson-meta">30 min · concreto → pictórico → abstracto</div>
    <div class="mats"><span class="mat">Regletas</span><span class="mat">Mamut Restar 1</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy completamos C→P→A con la resta. (a) <strong>Manipulativo:</strong> regletas para 2-3 restas. (b) <strong>Singapur:</strong> del todo quito una parte, ahora con el signo −. (c) <strong>Mamut:</strong> <strong>Restar 1</strong> (pictórico→abstracto en la hoja). Secuencia inalterable: primero quita con regletas, luego tacha en el dibujo, luego escribe el número.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Concreto · 8 min <span class="edc-mark E">E</span></div>
        <p>Quita con regletas: 6−2, 7−4, 8−3. Eli dice cuánto queda.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Pictórico → abstracto (Mamut Restar 1) · 16 min <span class="edc-mark D">D</span></div>
        <p>Pasa a la hoja de Mamut Restar 1: primero tachar dibujos (pictórico), luego escribir el número con el signo −. Si no tienes la hoja a mano, en el cuaderno:</p>
        <div class="guia-bible"><span class="guia-bible-ref">En la hoja/cuaderno (respuestas)</span>6 − 2 = 4 · 7 − 4 = 3 · 8 − 3 = 5 · 9 − 5 = 4 · 10 − 6 = 4</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 6 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Ya sabes juntar y quitar. Dios te dio una mente que crece."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Necesita regletas para cada resta</td><td>Bien · sigue concreto.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Hace la hoja con apoyo</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Resta dentro de 10 en abstracto</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>2 sumas con regletas</li><li>2 sumas en la hoja</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min) antes de salir.</b></div></div>

<!-- NATURALEZA -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🌿</div><div>
    <div class="lesson-ttl">Salida de naturaleza · El agua en la creación</div>
    <div class="lesson-meta">30 min · diario de naturaleza · (conecta con ciencias)</div>
    <div class="mats"><span class="mat">Cuaderno de naturaleza</span><span class="mat">Colores</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>La salida va al CENTRO de la semana (jueves) y cierra el hilo: el miércoles hablamos del agua; hoy la buscamos en la creación. Método Mason: <strong>atención reverente</strong>. Salgan al patio, un parque o la ventana y busquen el agua: el cielo y las nubes (allí hay agua), la lluvia o un charco, el rocío en una hoja, una fuente. (Si no se ve agua, observen el cielo y las nubes.)</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Buscar el agua · 12 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"¿Dónde ves agua afuera? En el cielo (las nubes), en un charco, en una hoja con rocío. Mira las nubes: ¿qué forma tienen? ¿de qué color?"</div>
        <p>Sin prisa. Dios reparte el agua por todo el mundo.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Diario de naturaleza · 14 min <span class="edc-mark D">D</span></div>
        <p>Eli dibuja lo que observó (las nubes, un charco, una hoja con gotas) en su cuaderno de naturaleza y escribe una frase (la fecha, "Dios da el agua").</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Mañana jugaremos con agua para ver qué flota y qué se hunde. 'Riega los montes… del fruto de tus obras se sacia la tierra' (Sal 104:13). ¡Qué buen Creador!"</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">12 min</div><ol><li>Observar el cielo/las nubes o un charco</li><li>Dibujarlo en el diario</li><li>"Dios da el agua"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-sage" style="margin-top:14px"><strong>⚠️ Para mañana (viernes):</strong> ten listo un recipiente hondo con agua y varios objetos pequeños (piedra, corcho o tapa, cuchara, hoja, juguete) para el experimento de flotar y hundirse.</div>`,

viernes:`${APERTURA}

<div class="horario">
<div class="horario-ttl">📅 Viernes · Ciencias (experimento) <span style="font-weight:400">· día ligero (natación 2pm)</span></div>
<div class="horario-row"><span class="horario-time">8:00</span><span class="horario-act">Apertura pactual</span></div>
<div class="horario-row"><span class="horario-time">8:10</span><span class="horario-act">Catecismo P14 · Día 4 (la Biblia me lleva a Jesús)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">8:30</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">8:40</span><span class="horario-act">Ciencias · ¿flota o se hunde? (experimento)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:10</span><span class="horario-act">Pausa + snack</span></div>
<div class="horario-row"><span class="horario-time">9:25</span><span class="horario-act">Lectoescritura · texto nuevo (mamá lee, Eli comprende)</span></div>
<div class="horario-row pausa-row"><span class="horario-time">9:55</span><span class="horario-act">Pausa activa</span></div>
<div class="horario-row"><span class="horario-time">10:05</span><span class="horario-act">Matemáticas · familias de suma y resta — corto</span></div>
<div class="horario-row"><span class="horario-time">2:00pm</span><span class="horario-act">🏊 Natación (externo)</span></div>
</div>

<div class="strip s-sage"><strong>Día ligero:</strong> natación en la tarde. El experimento (flota o se hunde) es práctico/activo y va entre catecismo y lectoescritura. La lectoescritura de hoy es comprensión por escucha (donde Eli brilla), no decodificar bajo presión.</div>

<!-- CATECISMO P14 DÍA 4 -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Catecismo P14 · Día 4 — La Biblia me lleva a Jesús</div>
    <div class="lesson-meta">15 min · Juan 5:39 · el corazón de toda la Escritura</div>
    <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>El ángulo más importante para cerrar P14, y el antídoto contra el moralismo: la Biblia no es un libro de reglas para "portarnos bien" — su propósito último es <strong>llevarnos a Cristo</strong> (Jn 5:39; Lc 24:27). 4 dimensiones: <strong>textual</strong> (las Escrituras dan testimonio de Jesús), <strong>doctrinal</strong> (toda la Biblia, de Génesis a Apocalipsis, habla de Él), <strong>cosmovisión</strong> (leer la Biblia no es ganar información sino encontrarnos con una Persona), <strong>aplicación</strong> (cuando leemos, preguntamos: ¿qué me muestra esto de Jesús?). Conecta con la promesa de Gén 3:15 que vimos ayer.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">15 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Textual · 5 min <span class="edc-mark E">E</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Juan 5:39</span>"Escudriñad las Escrituras… ellas son las que dan testimonio de mí." (Jesús está hablando.)</div>
        <div class="guia-say">"Jesús dijo que toda la Biblia habla de ÉL. ¿Te acuerdas de la promesa de ayer (Gén 3:15)? Ese 'alguien que vencería al enemigo' es Jesús. La Biblia entera lo señala a Él."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Doctrinal + cosmovisión · 6 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Por eso 'aprender a obedecer y amar a Dios solamente en la Biblia' no es aprender una lista de reglas. Es conocer a Jesús, que nos amó primero. Leer la Biblia es encontrarnos con Él, no solo saber cosas."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Aplicación + oración · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Cuando leamos la Biblia, preguntemos: ¿qué me muestra esto de Jesús? Señor, gracias porque tu Palabra me lleva a tu Hijo. Que Eli te ame al leerla. Amén."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Ve la Biblia como reglas</td><td>Volver a Gén 3:15: la Biblia promete y muestra a Jesús.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Dice que la Biblia habla de Jesús</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta P14 con conocer a Cristo (no solo reglas)</td><td>Registrar. Lista para la síntesis del sábado.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">5 min</div><ol><li>Jn 5:39: "la Biblia habla de Jesús"</li><li>"Leerla es conocerlo a Él"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- CIENCIAS EXPERIMENTO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico verde">🔬</div><div>
    <div class="lesson-ttl">Ciencias · ¿Flota o se hunde? (experimento)</div>
    <div class="lesson-meta">30 min · experimento · cierra el hilo del agua</div>
    <div class="mats"><span class="mat">Recipiente con agua</span><span class="mat">Objetos: piedra, corcho/tapa, cuchara, hoja, juguete</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>El experimento que <strong>cierra el hilo</strong> del agua (el miércoles observamos el agua; hoy jugamos con ella). Lo importante es que Eli <strong>prediga</strong> antes de probar, luego compruebe y registre. Marco: Dios le dio a cada cosa su naturaleza —unas flotan, otras se hunden—; su mundo tiene orden y por eso podemos descubrirlo. Sin cientificismo: observamos con asombro.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">30 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Predecir · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Tenemos agua y varios objetos. Antes de probar, adivina: ¿la piedra flotará o se hundirá? ¿Y el corcho? ¿Y la cuchara? ¿Y la hoja?"</div>
        <p>Eli predice cada uno; mamá anota en dos columnas ("creo que flota" / "creo que se hunde").</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Probar · 12 min <span class="edc-mark D">D</span></div>
        <p>Uno por uno, Eli pone cada objeto en el agua y observa. Compara con su predicción: "¿acertaste?"</p>
        <div class="guia-say">"¡Mira! El corcho flota, la piedra se hunde. ¿Por qué será? Dios hizo que cada cosa tenga su manera de ser."</div>
        <p style="font-size:.85rem;color:var(--muted)">Idea sencilla (sin fórmula): lo liviano para su tamaño flota; lo pesado y compacto se hunde.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Registrar · 6 min <span class="edc-mark C">C</span></div>
        <p>Eli dibuja en su cuaderno qué flotó y qué se hundió (su "diario del experimento").</p></div></div>
      <div class="guia-step"><div class="guia-step-n">4</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 4 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Dios le dio a cada cosa su naturaleza, y por eso el mundo tiene orden y podemos descubrirlo. ¡Qué sabio es el Creador!"</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Prueba sin predecir</td><td>Bien — lo clave es observar. Predice tú en voz alta primero.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Predice y prueba · nota cuáles flotan</td><td>Normal.</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Conecta: Dios dio a cada cosa su naturaleza (orden)</td><td>Registrar.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Predecir: ¿flota o se hunde?</li><li>Probar 3-4 objetos</li><li>"Dios dio a cada cosa su manera de ser"</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa + snack (15 min).</b></div></div>

<!-- LECTOESCRITURA — TEXTO NUEVO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico azul">📖</div><div>
    <div class="lesson-ttl">Lectoescritura · Texto nuevo (mamá lee, Eli comprende)</div>
    <div class="lesson-meta">25 min · comprensión escuchando + narración · evaluación de la Z</div>
    <div class="mats"><span class="mat">Un cuento corto o pasaje</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Cierre de la semana de lectura: aprovechamos que Eli comprende mejor ESCUCHANDO. Tú lees un cuento corto; ella narra. Y antes, una mini-evaluación de la Z: que lea 4-5 palabras con Z para registrar su nivel (E/D/C) del cierre del alfabeto.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">25 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Mini-evaluación de la Z · 6 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Lee estas palabras: luz · paz · zorro · feliz · cruz."</div>
        <p>Mamá registra: ¿las lee sola (C)? ¿silabeando (D)? ¿con ayuda (E)? Esto cierra el alfabeto.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Mamá lee · 8 min <span class="edc-mark E">E</span></div>
        <p>Lee en voz alta un cuento corto (un libro de casa, una fábula o un relato bíblico breve). Con entonación. Eli solo escucha.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Eli narra · 11 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Cuéntame con tus palabras lo que entendiste."</div>
        <p>Eli narra sin ayuda (aquí brilla). Luego dibuja su parte favorita.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">E/D/C — cierre del alfabeto</span></div>
    <table class="eval-tabla"><tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
      <tr class="E"><td class="lvl">E</td><td>Lee las palabras con Z con ayuda</td><td>Un poco más de decodificación antes de la ruta de comprensión.</td></tr>
      <tr class="D"><td class="lvl">D</td><td>Lee silabeando · narra bien lo escuchado</td><td>Normal. Lista para empezar la ruta de comprensión (post-Z).</td></tr>
      <tr class="C"><td class="lvl">C</td><td>Lee fluido · narra con detalles</td><td>Registrar. Avanzar a la ruta de comprensión.</td></tr>
    </table></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Eli lee 4 palabras con Z</li><li>Mamá lee un cuento, Eli narra</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa activa (10 min).</b></div></div>

<!-- MATEMÁTICAS REPASO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico rojo">🔢</div><div>
    <div class="lesson-ttl">Matemáticas · Familias de suma y resta</div>
    <div class="lesson-meta">20 min · Singapur · juntar y quitar van juntos</div>
    <div class="mats"><span class="mat">Regletas</span><span class="mat">Cuaderno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Día ligero: cerramos la semana viendo que <strong>suma y resta son la misma familia</strong>. (a) <strong>Manipulativo:</strong> regletas. (b) <strong>Singapur:</strong> con tres números (las dos partes y el todo) salen 2 sumas y 2 restas. (c) <strong>Mamut:</strong> ninguna hoja nueva hoy.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Una familia de números · 14 min <span class="edc-mark D">D</span></div>
        <p>Con regletas, toma 3, 4 y 7 (las dos partes y el todo). Muestra las cuatro:</p>
        <div class="guia-bible"><span class="guia-bible-ref">La familia del 3, 4 y 7</span>3 + 4 = 7 · 4 + 3 = 7 · 7 − 3 = 4 · 7 − 4 = 3</div>
        <div class="guia-say">"¿Ves? Con los mismos tres números puedo juntar (sumar) y quitar (restar). ¡Son una familia!"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Cierre · 6 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Esta semana aprendiste a quitar, y viste que juntar y quitar van juntos. Los números se portan igual siempre porque Dios ordenó su mundo así."</div></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">8 min</div><ol><li>La familia 3, 4, 7 con regletas</li><li>2 sumas y 2 restas</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="strip s-gold" style="margin-top:14px"><strong>🏊 Natación (2:00 pm):</strong> bloque externo. Mañana (sábado) es el cierre suave de la semana.</div>`,

sabado:`<div class="aper">
<div class="aper-lbl">Sábado · cierre suave (~2 horas) · sin prisa</div>
<div class="aper-row"><div class="aper-n">♪</div><div class="aper-t"><strong>Apertura cantada</strong> — el himno de la semana (abajo) + oración breve</div></div>
</div>

<!-- SÍNTESIS DEL CATECISMO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico violeta">✝️</div><div>
    <div class="lesson-ttl">Síntesis · Cierre del primer ciclo (P11 → P14)</div>
    <div class="lesson-meta">25 min · narración libre + ⭐ hoja de portafolio</div>
    <div class="mats"><span class="mat">Catecismo CPN</span><span class="mat">Hoja de portafolio</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Hoy NO hay ángulo nuevo: recogemos el primer ciclo completo. Eli recita la cadena P11→P14 y narra libremente lo que aprendió. La síntesis (narración libre + cadena + portafolio) es SOLO del sábado (entre semana fue 1 ángulo por día).</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">25 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">La cadena completa · 8 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Cadena del primer ciclo</span>P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.<br>P13: ¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.<br>P14: ¿En dónde aprendes a obedecer y amar a Dios? — Solamente en la Biblia.</div></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Narración libre · 9 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"En este primer mes aprendimos cuatro cosas grandes: Dios me MIRA, Dios SABE, Dios PUEDE, y Dios me HABLA en su Palabra. ¿Cuál es tu favorita? ¿Por qué?"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">⭐ Hoja de portafolio · 8 min <span class="edc-mark C">C</span></div>
        <p>Eli completa la lámina coleccionable del primer ciclo. Cinta: <strong>"Dios MIRA · Dios SABE · Dios PUEDE · y nos habla en su PALABRA."</strong> Firma Eli + mamá. Va al portafolio.</p>
        <div class="guia-say">"Señor, gracias por este primer mes. Eli sabe que tú la miras, lo sabes todo, lo puedes todo, y que te conocemos en tu Palabra. En el nombre de Jesús. Amén."</div></div></div>
    </div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa (10 min):</b> moverse, agua.</div></div>

<!-- ARTE -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">🎨</div><div>
    <div class="lesson-ttl">Arte · Picture study + los 5 elementos</div>
    <div class="lesson-meta">25 min · "El paraíso terrenal" (Jan Brueghel) · Monart OiLS</div>
    <div class="mats"><span class="mat">Imagen de la obra (pantalla o impresa)</span><span class="mat">Hoja + lápiz</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>⚠️ <strong>Importante:</strong> elegimos una obra de la creación que <strong>NO representa a Dios</strong> (no usamos imágenes de Dios — 2.º mandamiento). "El paraíso terrenal" de Jan Brueghel muestra el Edén lleno de animales, sin figura de Dios — perfecto para el tema de la creación. Picture study (Mason): mirar en silencio → describir de memoria → conectar con la Biblia → identificar los elementos de Monart.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">25 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">Mirar en silencio · 6 min <span class="edc-mark E">E</span></div>
        <p>Muestra la obra 1 minuto en silencio. Luego tápala: "¿qué animales viste? ¿qué había?" Eli describe de memoria.</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Conectar con la Biblia · 7 min <span class="edc-mark D">D</span></div>
        <div class="guia-say">"Así de bueno y lleno de vida era el mundo que Dios hizo (Gén 1). El pintor quiso mostrar esa bondad. Aunque el mundo se rompió por el pecado, Dios prometió restaurarlo."</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Los 5 elementos + dibujar · 12 min <span class="edc-mark C">C</span></div>
        <div class="guia-say">"Busquemos los 5 elementos de Monart: puntos, líneas rectas, líneas curvas, ángulos y círculos. ¿Dónde ves curvas? (los animales). ¿Círculos? (ojos, frutas)."</div>
        <p>Eli dibuja un animal del Edén usando los elementos. Mamá NO corrige el arte; anima.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">10 min</div><ol><li>Mirar la obra y describir</li><li>"Así de bueno era el mundo de Dios"</li><li>Dibujar un animal con curvas y círculos</li><li>Listo.</li></ol></div></div>
  </div>
</div>

<div class="pausa"><span class="pausa-ico">☕</span><div><b>Pausa (10 min).</b></div></div>

<!-- HIMNO -->
<div class="lesson">
  <div class="lesson-hd"><div class="lesson-ico dorado">🎵</div><div>
    <div class="lesson-ttl">Himno · "Cuán grande es Él"</div>
    <div class="lesson-meta">20 min · la historia del himno + su autor</div>
    <div class="mats"><span class="mat">Letra del himno</span></div>
  </div></div>
  <div class="lesson-body">
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Prep para mamá</span></div>
    <div class="lec-mama"><p>Como pediste: el himno con su <strong>historia, autor y trasfondo</strong> (no solo cantar). Conecta con toda la semana: la creación nos lleva a adorar al Creador.</p></div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Clase</span><span class="lsec-sub">20 min</span></div>
    <div class="guia">
      <div class="guia-step"><div class="guia-step-n">1</div><div class="guia-step-body"><div class="guia-step-ttl">La historia · 8 min <span class="edc-mark E">E</span></div>
        <div class="guia-say">"Hace mucho, en Suecia, un hombre llamado Carl Boberg caminaba cuando lo sorprendió una tormenta fuerte. Cuando pasó, todo quedó en calma y los pájaros volvieron a cantar. Quedó tan maravillado de la grandeza de Dios en la creación que escribió este himno. Años después se tradujo a muchos idiomas — y aquí lo cantamos en español."</div>
        <p>Autor: <strong>Carl Boberg</strong> (1885, Suecia). Trasfondo: la grandeza de Dios vista en la naturaleza — justo lo que vimos esta semana (el mundo que Dios hizo, las plantas, la semilla).</p></div></div>
      <div class="guia-step"><div class="guia-step-n">2</div><div class="guia-step-body"><div class="guia-step-ttl">Cantar · 10 min <span class="edc-mark D">D</span></div>
        <div class="guia-bible"><span class="guia-bible-ref">Estrofa y coro</span>Señor mi Dios, al contemplar los cielos,<br>el firmamento y las estrellas mil…<br><br>Mi corazón se llena de emoción:<br>¡Cuán grande es Él! ¡Cuán grande es Él!</div>
        <div class="guia-say">"Cuando veas el cielo, una flor o tu semilla creciendo, puedes cantar esto: ¡cuán grande es Dios!"</div></div></div>
      <div class="guia-step"><div class="guia-step-n">3</div><div class="guia-step-body"><div class="guia-step-ttl">Diagnóstico de mamá · 2 min <span class="edc-mark E">E</span></div>
        <p>Anota en el informe de la semana (pestaña Informes): ¿cómo estuvo el ritmo de 5 días? ¿qué materia se alargó? ¿cómo va Eli en cada área? Eso personaliza la próxima semana.</p></div></div>
    </div></div>
    <div class="lsec"><div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
    <div class="minima"><div class="minima-ttl">8 min</div><ol><li>Contar la historia del himno (la tormenta)</li><li>Cantar el coro</li><li>"¡Cuán grande es Dios!"</li><li>Listo.</li></ol></div></div>
  </div>
</div>`
};

// ── SEMANA 5 ──
const W5 = {
fm:`<div class="fm-section">
<div class="fm-title">Formación para mamá — Semana 5</div>
<div class="fm-sub">Abraham · Dios llama y promete · Catecismo P15 (Quién escribió la Biblia)</div>
<div class="fm-block"><h4>Qué verdad bíblica gobierna esta semana</h4>
<p>Esta semana se abre el bloque de los <strong>patriarcas</strong>. Después de la caída (S4), la historia parece haber terminado mal: el pacto de obras quebrantado, el hombre culpable, la creación gimiendo. Pero Dios no abandona. Llama a un hombre — Abram — y le promete: "haré de ti una nación grande, y serán benditas en ti todas las familias de la tierra" (Gén 12:1-3). <em>Allí empieza la historia de la redención</em>.</p>
<p>Para Eli, la conexión es directa: si Dios llamó a Abraham y cumplió, también cumplirá lo que prometió a quienes pertenecen al pacto hoy. Su bautismo es el signo visible de esa misma promesa. Abraham no es personaje antiguo — es padre del pacto en el que Eli vive.</p>
<p>El paralelo con el catecismo es providencial: P15 trabaja la <strong>inspiración de la Escritura</strong>. La pregunta es "¿Quién escribió la Biblia?" — y la respuesta es "Unos santos varones que fueron inspirados por el Espíritu Santo". <em>Dios habla a través de hombres santos</em>. Lo hace con Abraham (le habla directamente, Gén 12). Lo hace con Moisés (le dicta la Torá). Lo hace con David (los Salmos). Lo hace con Pablo (las cartas). El mismo Dios que llamó a Abraham es el que inspiró la Biblia que la familia Espinoza lee cada día.</p></div>
<div class="fm-block"><h4>Cómo enseñamos esto delante de Dios</h4>
<p>Bavinck es claro sobre la inspiración: <strong>orgánica, no mecánica</strong>. Dios no convirtió a los autores en robots. Usó su personalidad, su cultura, su lenguaje. Moisés escribe como Moisés. David canta como David. Pablo argumenta como Pablo. Pero detrás de cada uno está el mismo Espíritu Santo guiando.</p>
<p>Para Eli a los 6 años, eso se traduce así: la Biblia tiene <em>autores humanos</em> (Moisés, David, Pablo, Juan...) y un solo <em>Autor divino</em> (el Espíritu Santo). Por eso podemos confiar en ella: porque viene de Dios. Y por eso es comprensible: porque viene a través de hombres como nosotros.</p>
<p>Sobre Abraham: no presentar la historia como "fábula moral" ("Abraham fue obediente, tú obedece también"). Presentarla como historia real de Dios cumpliendo su promesa. El énfasis no es Abraham — es <em>el Dios que llamó a Abraham</em>.</p></div>
<div class="fm-block"><h4>Advertencias para esta semana</h4>
<p><strong>Primera:</strong> el lunes 15 de junio es Corpus Christi (festivo en Colombia). La semana de Eli empieza martes 16. No tratar de "recuperar el lunes" añadiendo actividades extra.</p>
<p><strong>Segunda:</strong> si Eli ya completó cierre de Y y Z en S2-S3, ya inició el nuevo recurso de lectura en S4. Esta semana continúa con ese nuevo recurso. Si todavía no cambió de ruta, hacer una semana más de consolidación.</p>
<p><strong>Tercera:</strong> esta es la primera vez que Eli oye sobre Abraham con detalle. No saturarla con todos los capítulos de Génesis 12-25 esta semana. Solo Génesis 12:1-3 — la llamada y la promesa. Los siguientes episodios vienen en S6-S9.</p>
<p><strong>Cuarta:</strong> el frijol que se sembró en S1 ya debería estar germinando o creciendo. Esta semana es buena para registrar observaciones en el diario de naturaleza.</p></div>
<div class="fm-oracion"><div class="fo-lbl">Oración antes de enseñar</div>
<p>Señor, gracias porque tu pacto con Abraham es el mismo pacto en el que pusiste a Eli. Gracias porque tu Palabra que vamos a leer fue inspirada por tu Espíritu en hombres santos. Que esta semana Eli vea que tú eres fiel — desde Abraham hasta hoy. Amén.</p>
</div></div>
<div class="strip s-teal" style="margin-top:.75rem">
<strong>Lunes — festivo · descanso pactual:</strong><br>
Lunes 15 jun es Corpus Christi. No hay clase. Si la familia va a la iglesia, perfecto. Si no, simplemente descansa.
</div>`,

martes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P15 · Día 1 — Apertura y ancla ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P15 · Día 1 — Apertura y ancla</div>
      <div class="lesson-meta">12–15 min · ¿Quién escribió la Biblia? · 2 Pedro 1:21</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> P15 enseña la <strong>doctrina de la inspiración</strong>. Tras haber visto la semana pasada que solo la Biblia nos enseña a obedecer y amar a Dios (P14), ahora preguntamos: <em>¿cómo llegó la Biblia a nosotros?</em> La respuesta del catecismo es precisa: "Unos santos varones que fueron inspirados por el Espíritu Santo". Hay <strong>autores humanos</strong> reales — y hay un <strong>Autor divino</strong> que los inspiró.</p>
        <p><span class="lec-tag">Bavinck sobre la inspiración:</span> es <em>orgánica, no mecánica</em>. Dios no convirtió a Moisés, David, Pablo o Juan en robots dictándoles letra por letra. Usó su personalidad, su cultura, su lenguaje, sus circunstancias. Pero detrás de cada uno está el Espíritu Santo guiando. Por eso decimos: <strong>la Biblia es enteramente humana y enteramente divina</strong>, sin contradicción.</p>
        <p><span class="lec-tag">El texto principal de hoy — 2 Pedro 1:21:</span> "Porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo." Pedro contrasta dos posibilidades: profecía por <em>voluntad humana</em> (lo que el hombre inventa por sí mismo) versus profecía <em>inspirada por el Espíritu</em>. Toda la Escritura es lo segundo. <em>Nunca</em> la primera.</p>
        <p><span class="lec-tag">"Santos varones":</span> la palabra "santo" aquí no significa moralmente impecable (Moisés mató a un egipcio, David adulteró, Pablo perseguía cristianos). Significa <strong>apartado para el servicio de Dios</strong>. Los autores de la Biblia eran hombres con pecado, llamados por Dios y usados por su Espíritu. Eso es alentador para Eli: Dios usa instrumentos imperfectos para hablar palabras perfectas.</p>
        <p><span class="lec-tag">Conexión cumulativa:</span> P14 dijo "solamente en la Biblia". P15 dice "y la Biblia es esto: hombres inspirados por el Espíritu". Las dos preguntas juntas forman la doctrina de la Escritura. La próxima semana sumamos P16 (Adán y Eva).</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que Eli piense "Dios escribió la Biblia con su mano" (mecánico) o "los hombres la inventaron" (autonomista). La verdad bíblica está entre los dos: Dios habló POR MEDIO de hombres santos. Esa preposición — <em>por medio de</em> — es la doctrina entera.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> confianza en la Biblia como palabra de Dios mediada por hombres reales. Reverencia ante el texto. Comprensión inicial de la inspiración.</p>
        <div class="lec-bible">"Porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo." — 2 Pedro 1:21 &nbsp;·&nbsp; "Bien habló el Espíritu Santo por medio del profeta Isaías a nuestros padres." — Hechos 28:25</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque hablaste por medio de hombres santos para que tu Palabra llegara a nosotros. Que Eli aprenda hoy a leer la Biblia sabiendo que es tu voz. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">12–15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · ¿Cuántas manos escribieron la Biblia? <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, mira nuestra Biblia. ¿Crees que la escribió una sola persona? Trae casi 1000 páginas. ¿Sabes cuántos años tomó escribir toda la Biblia? Más de 1500 años. Así que NO la escribió una sola persona. Pero TAMPOCO la escribió cualquier persona. Vamos a aprender quién la escribió."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso cumulativo + introducir P15 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Eli recita la cadena P11+P12+P13+P14. Luego introduce P15:</p>
            <div class="guia-say">P15: ¿Quién escribió la Biblia?<br>R: Unos santos varones que fueron inspirados por el Espíritu Santo.</div>
            <p>Repite 3 veces. Subraya las dos palabras clave: <strong>"santos varones"</strong> y <strong>"inspirados"</strong>.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Dos autores en uno <span class="edc-mark D">D</span> · 3 min</div>
            <div class="guia-say">"La Biblia tiene dos clases de autores. Por un lado están los <strong>autores humanos</strong>: Moisés, David, Salomón, Pablo, Juan, Pedro y otros. Hombres reales, con familia, con trabajo. Por otro lado está el <strong>Autor divino</strong>: el Espíritu Santo. Él los guió mientras escribían."</div>
            <p>Aclaración importante:</p>
            <div class="guia-say">"Esto no significa que Dios les dictara como si fueran máquinas. Cada uno escribió a su manera. Pablo escribe como un maestro, David canta como un poeta, Moisés narra como un historiador. Pero todos escribieron lo que el Espíritu quería decir."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · 2 Pedro 1:21 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">2 Pedro 1:21</span>"Porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo."</div>
            <div class="guia-say">"Mira lo que dice Pedro. La Biblia NUNCA fue inventada por hombres por su cuenta. Siempre fue el Espíritu Santo guiando a los hombres santos."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">"Santos" no significa "perfectos" <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Una cosa importante: 'santos' en la Biblia no significa que no tuvieran pecado. Significa que Dios los apartó para usarlos. Moisés cometió pecados. David cometió pecados. Pablo perseguía cristianos antes de convertirse. Pero Dios los usó. Esa es la maravilla: Dios usa a personas como nosotros para dar su Palabra a otras personas como nosotros."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor, gracias por darnos tu Palabra a través de hombres santos. Gracias porque tu Espíritu los guió. Que Eli lea la Biblia sabiendo que es tu voz. Amén."</div>
            <p>Eli recita la cadena P11+P12+P13+P14+P15.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Olvida que hay autores humanos. Cree que Dios escribió con su mano</td><td>Repetir: "hombres inspirados". Mostrar nombres de autores en la Biblia.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la R. Entiende que hay autores humanos, pero no articula la inspiración</td><td>Pregunta: <em>"¿Si solo los hombres escribieron, sería palabra de Dios?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula con sus palabras: hombres reales + Espíritu Santo guiando = Palabra de Dios</td><td>Registrar. Lista para Hechos 28:25 mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">La hoja grande va el viernes.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja P15 Día 1</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

TEMA:
Catecismo CPN P15 · Día 1 — ¿Quién escribió la Biblia?

PROPÓSITO:
Que Eli vea que la Biblia tiene autores humanos reales (Moisés, David, Pablo...) pero un Autor divino (el Espíritu Santo) que los inspiró.

CONTENIDO BÍBLICO:
P: ¿Quién escribió la Biblia?
R: Unos santos varones que fueron inspirados por el Espíritu Santo.
Texto ancla: 2 Pedro 1:21

FORMATO:
- Una página A4 vertical, lista para imprimir.
- Proporción 1:1.414 si se genera como imagen.
- Diseño amplio, sobrio, conservable.

ESTILO VISUAL:
- Fondo crema cálido #FAF6F0.
- Color principal violeta profundo #6B3FAA (catecismo).
- Acentos dorados #C49A2A.
- Estilo digno, contemplativo, sin caricaturas.
- No usar colores neón ni estética infantil saturada.
- No representar a Dios, no halos místicos.

TIPOGRAFÍA:
- Encabezados en Georgia o serif clásica.
- Instrucciones en sans-serif clara.
- Mínimo 16 pt instrucciones, 22+ pt para P y R.

CONTENIDO DE LA HOJA:

ENCABEZADO:
"¿Quién escribió la Biblia?"

CAJA CENTRAL:
La P y R completa en letra grande.

ILUSTRACIÓN CENTRAL:
Una Biblia abierta con una pluma encima, y arriba de la pluma una paloma suave (símbolo del Espíritu Santo). Estilo line-art sobrio.

DOS COLUMNAS:
- "Hombres santos" (lado izquierdo): pequeña lista — Moisés, David, Pablo, Juan
- "Espíritu Santo" (lado derecho): "Guió a cada uno mientras escribían"

PREGUNTA ABIERTA con 4 líneas:
"¿Por qué podemos confiar en la Biblia?"

CINTA INFERIOR DORADA:
"Los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo. — 2 Pedro 1:21"

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles para escritura.

Si la IA genera HTML:
Artifact HTML completo con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso cumulativo P11+P12+P13+P14</li>
          <li>Introducir P15 — repetir 3 veces</li>
          <li>Leer 2 Pedro 1:21 una vez</li>
          <li>Una frase: <em>"Hombres santos escribieron. El Espíritu Santo los inspiró."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════════ BLOQUE 2: PLAN DEL DÍA — Lectoescritura · Historia · Mate ═══════════════ -->
<div class="strip s-sage" style="margin:14px 0">
  <strong>Plan del día martes — otras materias:</strong><br>
  📖 <strong>Lectoescritura</strong>: nuevo recurso de lectura — texto narrativo más largo, comprensión + escritura propia (25 min).<br>
  📜 <strong>Historia Providencial</strong>: <em>Abraham — Dios llama</em>. Lectura de Génesis 12:1-3. Mamá narra, Eli dibuja "Abraham saliendo de su tierra hacia lo desconocido" (20 min).<br>
  🔢 <strong>Matemáticas</strong>: continuación de suma 0-10 con regletas. Hoy: sumas que dan 6, 7, 8 con regletas (Mamut Sumar 1 p.4-5) (25 min).<br>
  🌱 <strong>Ciencias</strong>: observar y dibujar en el diario de naturaleza el progreso del frijol germinado de S1 (10 min).
</div>`,

miercoles:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P15 · Día 2 — "Habló por el Espíritu" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P15 · Día 2 — "Habló por el Espíritu"</div>
      <div class="lesson-meta">10–12 min · Profundización con Hechos 28:25</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> ayer aprendimos que la Biblia tiene autores humanos guiados por el Espíritu Santo (2 Pedro 1:21). Hoy entramos al ejemplo concreto: Pablo, en Hechos 28:25, cita al profeta Isaías y dice algo asombroso: <em>"Bien habló el Espíritu Santo por medio del profeta Isaías"</em>. Pablo está leyendo a Isaías como obra del Espíritu Santo — no como obra de Isaías solo.</p>
        <p><span class="lec-tag">La preposición clave: "por medio de":</span> el Espíritu habló POR MEDIO de Isaías. No EN LUGAR de Isaías (eso sería mecánico). No SIN Isaías (eso sería autonomista). POR MEDIO de Isaías. Pablo está enseñando la doctrina de la inspiración orgánica por instancia concreta.</p>
        <p><span class="lec-tag">Conexión con Abraham:</span> esta semana también vemos cómo Dios habla a Abraham (Gén 12). El paralelo es claro: el mismo Dios que habló a Abraham es el que después inspiró a Moisés a escribir esa historia. La revelación divina y su registro escrito vienen del mismo Espíritu.</p>
        <p><span class="lec-tag">Calvino sobre Hechos 28:25:</span> Pablo usa esta cita como autoridad final del argumento. No dice "Isaías sugirió" — dice "el Espíritu Santo habló". Para Pablo, citar a Isaías es citar a Dios. Esa misma confianza es la que queremos en Eli: cuando lee la Biblia, está oyendo a Dios.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> hacer la clase teórica sin aterrizar. Eli debe terminar pensando: "Cuando leo la Biblia, escucho a Dios. No solo a Moisés, no solo a Pablo. A DIOS."</p>
        <p><span class="lec-tag">Lo que estás formando:</span> el reflejo de leer la Biblia como Dios hablando. La doctrina de la inspiración como verdad práctica, no abstracción teológica.</p>
        <div class="lec-bible">"Bien habló el Espíritu Santo por medio del profeta Isaías a nuestros padres." — Hechos 28:25 &nbsp;·&nbsp; "Toda la Escritura es inspirada por Dios." — 2 Timoteo 3:16</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Espíritu Santo, gracias porque hablaste por medio de Isaías y todos los profetas. Que Eli aprenda hoy que cuando lee tu Palabra, te escucha a ti. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">10–12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso <span class="edc-mark E">E</span> · 2 min</div>
            <p>Eli recita la P y R:</p>
            <div class="guia-say">P15: ¿Quién escribió la Biblia?<br>R: Unos santos varones que fueron inspirados por el Espíritu Santo.</div>
            <p>Pregunta de enlace:</p>
            <div class="guia-say">"Ayer dijimos que el Espíritu Santo inspiró a los autores. Hoy Pablo nos muestra un ejemplo concreto."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Contexto · Pablo en Roma <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Pablo, el apóstol, fue llevado preso a Roma. Allí los judíos venían a verlo y él les hablaba de Jesús. Algunos creyeron, otros no. Y Pablo, cuando los que no creyeron se iban, les dijo unas palabras MUY importantes."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Hechos 28:25 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Hechos 28:25</span>"Bien habló el Espíritu Santo por medio del profeta Isaías a nuestros padres."</div>
            <div class="guia-say">"Pablo está citando algo que Isaías escribió hace cientos de años. Pero fíjate cómo lo dice: NO dice 'bien habló Isaías'. Dice 'bien habló el ESPÍRITU SANTO por medio de Isaías'. ¿Lo escuchas? El Espíritu Santo es el que HABLÓ. Isaías fue el medio."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · "Por medio de" <span class="edc-mark D">D</span> · 3 min</div>
            <p>Toma un lápiz como objeto para demostración.</p>
            <div class="guia-say">"Mira: cuando yo escribo con este lápiz, ¿quién está escribiendo? Yo, ¿verdad? El lápiz solo es el medio que uso. Pero las palabras son mías. Así fue con Isaías: el Espíritu Santo escribía POR MEDIO de Isaías. Isaías era el medio. Pero las palabras eran del Espíritu Santo."</div>
            <p>Aclaración importante:</p>
            <div class="guia-say">"No significa que Isaías fuera un robot. Isaías habló con su propio estilo, sus propias palabras. Pero el Espíritu lo guiaba para que dijera lo correcto."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · Leer la Biblia como Dios hablando <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Entonces, cuando lees la Biblia, no estás leyendo solo lo que Moisés pensó, o lo que David sintió, o lo que Pablo opinó. Estás leyendo lo que el ESPÍRITU SANTO QUISO DECIRTE por medio de ellos. Por eso cuando leemos la Biblia debemos escuchar con respeto — porque Dios está hablando."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Espíritu Santo, gracias porque hablaste por medio de hombres santos. Ayuda a Eli a escucharte cada vez que lee tu Palabra. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No entiende "por medio de". Confunde Isaías con el Espíritu</td><td>Repetir la demostración del lápiz. Énfasis: yo escribo, el lápiz es medio.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende "por medio de" pero no lo aplica a su lectura propia</td><td>Pregunta: <em>"Cuando leas tu Biblia mañana, ¿quién te está hablando?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que al leer la Biblia escucha a Dios mediante hombres santos</td><td>Registrar. Lista para los autores mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso P15</li>
          <li>Leer Hechos 28:25</li>
          <li>Demostración del lápiz: "Yo escribo, el lápiz es medio."</li>
          <li>Una frase: <em>"El Espíritu Santo habló por medio de los autores."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<div class="strip s-sage" style="margin:14px 0">
  <strong>Plan del día miércoles — otras materias:</strong><br>
  📖 <strong>Lectoescritura</strong>: dictado expresivo de 4 frases sobre Abraham + lectura del texto de la semana (30 min).<br>
  📜 <strong>Historia Providencial</strong>: <em>Abraham y la promesa</em>. Leer Génesis 12:2-3 ("en ti serán benditas todas las familias"). Eli dibuja el árbol que sale de Abraham hacia ella misma (20 min).<br>
  🔢 <strong>Matemáticas</strong>: sumas 6+_=_, 7+_=_ con regletas (Mamut Sumar 1 p.6-7) (25 min).<br>
  🎵 <strong>Música</strong>: cantar himno y melodía del versículo de la semana (10 min).
</div>`,

jueves:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P15 · Día 3 — "Los autores: Moisés, David, Pablo, Juan" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P15 · Día 3 — "Los autores que Dios usó"</div>
      <div class="lesson-meta">12 min · Diversidad de autores, unidad del mensaje</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> después de dos días entendiendo la inspiración en abstracto (autores humanos + Espíritu Santo), hoy <strong>aterrizamos con autores concretos</strong>. La Biblia no fue escrita por un anónimo "hombre santo" — fue escrita por personas con nombre, vida, oficio, época. Conocer algunos de esos autores hace que la doctrina cobre carne.</p>
        <p><span class="lec-tag">Los 4 que vamos a presentar hoy:</span></p>
        <p>• <strong>Moisés</strong> (1500 a.C. aprox.) — escribió los primeros 5 libros de la Biblia (Génesis, Éxodo, Levítico, Números, Deuteronomio). Fue líder del pueblo de Israel.<br>• <strong>David</strong> (1000 a.C.) — escribió muchos Salmos. Fue rey de Israel y pastor.<br>• <strong>Pablo</strong> (50-65 d.C.) — escribió cartas como Romanos, Corintios, Efesios. Fue apóstol misionero.<br>• <strong>Juan</strong> (60-90 d.C.) — escribió un Evangelio, 3 cartas y Apocalipsis. Fue discípulo amado de Jesús.</p>
        <p><span class="lec-tag">Por qué importa la diversidad:</span> Dios pudo haber dado toda su Palabra por un solo autor (como el Corán). Eligió no hacerlo. La diversidad de autores muestra que la Biblia atraviesa <em>distintas culturas, distintas épocas, distintos lenguajes</em> — pero el mensaje es uno: Dios redimiendo a su pueblo en Cristo. Eso es <strong>milagro literario</strong> imposible de explicar sin inspiración divina.</p>
        <p><span class="lec-tag">Bavinck sobre la unidad de la Escritura:</span> "La Biblia no es 66 libros sino UN libro escrito por 40 autores en 1500 años. Esa unidad solo se explica por un Autor último: el Espíritu Santo."</p>
        <p><span class="lec-tag">Conexión pactual:</span> Eli debe ver que cuando lee, por ejemplo, los Salmos, está oyendo al pastor-rey David que oró bajo el mismo pacto que ella tiene. Cuando lee a Pablo, oye a un apóstol que predicó a los gentiles — y Eli es hija de gentiles bautizada. La Biblia es <em>familia espiritual</em> que abarca generaciones.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> presentar la diversidad de autores como argumento académico ("mira qué bonito, hay autores diferentes"). Conectarlo con el evangelio: que Dios usó a tantos para llevarnos a Cristo.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> conciencia de que los autores bíblicos son personas reales — no mitos. Familiaridad inicial con nombres clave de la Escritura. Asombro ante la unidad de la Biblia.</p>
        <div class="lec-bible">"Habiendo Dios hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo." — Hebreos 1:1-2</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por los hombres santos que usaste para escribir tu Palabra. Que Eli vea hoy que tu Biblia es viva, real, escrita por personas reales que tú llamaste. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso <span class="edc-mark E">E</span> · 1 min</div>
            <p>Eli recita la P y R.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · ¿Cuántos autores tiene la Biblia? <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"La Biblia fue escrita por más de 40 personas distintas, durante más de 1500 años, en 3 idiomas. ¿Te imaginas? Cada uno escribió su parte. Y todas las partes se conectan en una historia: la historia de Dios salvando a su pueblo en Jesús. Hoy te presento a 4 de esos autores."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Moisés <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Primero: <strong>Moisés</strong>. Vivió hace más de 3000 años. Era el líder del pueblo de Israel. Dios lo usó para sacar al pueblo de Egipto. Y Moisés escribió los primeros 5 libros de la Biblia: Génesis, Éxodo, Levítico, Números, Deuteronomio. Los primeros 5 — los primeros que abrimos cuando vamos a Génesis 1."</div>
            <p>Muestra Génesis en la Biblia, dile el nombre: "Esto fue escrito por Moisés."</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">David <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Segundo: <strong>David</strong>. Vivió hace unos 3000 años también. Cuando era niño cuidaba ovejas. Después se convirtió en rey. Y David escribió muchos Salmos. ¿Sabes qué son los Salmos? Son canciones y oraciones a Dios. Cuando estamos tristes y leemos un Salmo, leemos lo que David escribió cuando él también estaba triste."</div>
            <p>Muestra los Salmos. Dile: "Esto lo escribió David, el pastor que llegó a ser rey."</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pablo <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Tercero: <strong>Pablo</strong>. Vivió hace casi 2000 años, después de Jesús. Al principio Pablo no creía en Jesús — perseguía a los cristianos. Pero Jesús se le apareció y Pablo cambió completamente. Después escribió muchas cartas a las iglesias que iba fundando. Esas cartas son parte de la Biblia: Romanos, Corintios, Efesios, Filipenses..."</div>
            <p>Muestra Romanos. Dile: "Pablo escribió esto a los cristianos de Roma."</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Juan <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Cuarto: <strong>Juan</strong>. Fue uno de los doce discípulos de Jesús — un amigo cercano de Jesús cuando estuvo en la tierra. Juan escribió un Evangelio (el Evangelio de Juan, que cuenta la vida de Jesús), 3 cartas y Apocalipsis (el último libro de la Biblia, que habla del fin de los tiempos)."</div>
            <p>Muestra el Evangelio de Juan.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">7</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Síntesis · Un solo mensaje <span class="edc-mark C">C</span> · 1 min</div>
            <div class="guia-say">"Cuatro hombres muy distintos: un líder, un rey-pastor, un apóstol misionero, un discípulo amado. Pero todos escribieron sobre lo MISMO: Dios salvando a su pueblo en Jesús. ¿Cómo es posible que 40 autores en 1500 años cuenten todos la misma historia? Porque el Espíritu Santo los inspiró a todos."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No recuerda los autores. Confunde nombres</td><td>Repetir solo 2 (Moisés y David). El resto puede esperar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Nombra a los 4 autores pero no los conecta con libros específicos</td><td>Mostrar libros uno por uno. Repetir el día siguiente.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Nombra y conecta: Moisés→Génesis, David→Salmos, Pablo→cartas, Juan→Evangelio. Articula la unidad</td><td>Registrar. Lista para síntesis del viernes.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 5 minutos</div>
        <ol>
          <li>Repaso P15</li>
          <li>Presentar solo 2 autores: Moisés (Génesis) y David (Salmos)</li>
          <li>Mostrar Génesis 1 y un Salmo en la Biblia</li>
          <li>Una frase: <em>"Dios usó a hombres distintos para escribir un solo mensaje."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<div class="strip s-sage" style="margin:14px 0">
  <strong>Plan del día jueves — otras materias:</strong><br>
  📖 <strong>Lectoescritura</strong>: escritura propia — Eli escribe 4 frases sobre Abraham con sus palabras (30 min).<br>
  📜 <strong>Historia Providencial</strong>: <em>Abraham y la fe</em>. Leer Gén 12:4 ("Y se fue Abram, como Jehová le dijo"). Conversación: ¿qué dejó Abraham? ¿qué siguió? (15 min).<br>
  🔢 <strong>Matemáticas</strong>: sumas que dan 9 y 10 con regletas. Énfasis: complementos del 10 (Mamut Sumar 1 p.8-9) (25 min).<br>
  🌱 <strong>Ciencias</strong>: observación de la planta de frijol — medir altura, dibujar (10 min).
</div>`,

viernes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P15 · Día 4 — Síntesis + ⭐ Portafolio ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P15 · Día 4 — Síntesis + ⭐ Hoja de portafolio</div>
      <div class="lesson-meta">20 min · Narración libre + hoja final</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span><span class="mat">Hoja del prompt IA</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes:</span> síntesis de los 3 ángulos vistos esta semana. Eli ya sabe la P y R; hoy articula con sus palabras y deja huella en la hoja de portafolio.</p>
        <p><span class="lec-tag">Los 3 ángulos:</span></p>
        <p>• <strong>Día 1 (Martes)</strong>: 2 Pedro 1:21 — autores humanos + Espíritu Santo (santos varones inspirados).<br>• <strong>Día 2 (Miércoles)</strong>: Hechos 28:25 — "Por medio de Isaías" (inspiración orgánica).<br>• <strong>Día 3 (Jueves)</strong>: Los autores con nombre — Moisés, David, Pablo, Juan (diversidad y unidad).<br>• <strong>Día 4 (hoy)</strong>: síntesis + portafolio.</p>
        <p><span class="lec-tag">Cadena cumulativa P11+P12+P13+P14+P15:</span> Dios mira (P11) · sabe (P12) · puede (P13) · habla solo en la Biblia (P14) · y la Biblia es hombres inspirados (P15). Cinco preguntas, una arquitectura doctrinal coherente.</p>
        <p><span class="lec-tag">Evaluación por narración libre:</span> mamá pregunta "¿Qué aprendiste de quién escribió la Biblia?" y escucha. Tres ángulos = [C]. Dos = [D]. Uno = [E].</p>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por esta quinta semana. Que Eli salga sabiendo que tu Palabra fue escrita por hombres santos guiados por tu Espíritu. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cadena cumulativa P11→P15 <span class="edc-mark C">C</span> · 4 min</div>
            <p>Eli dice las CINCO P y R seguidas, sin ayuda. Si lo logra: ⭐ celebración fuerte.</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br><br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.<br><br>P13: ¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.<br><br>P14: ¿En dónde aprendes a obedecer y amar a Dios? — Solamente en la Biblia.<br><br>P15: ¿Quién escribió la Biblia? — Unos santos varones que fueron inspirados por el Espíritu Santo.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración libre <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"Eli, cuéntame con tus palabras todo lo que aprendiste esta semana sobre quién escribió la Biblia."</div>
            <p>Mamá escucha. Identifica si menciona:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Santos varones + Espíritu Santo (2 P 1:21)? — Día 1 ✓</li>
              <li>"Por medio de" — el Espíritu habló (Hch 28:25)? — Día 2 ✓</li>
              <li>Autores con nombre (Moisés, David, Pablo, Juan)? — Día 3 ✓</li>
            </ul>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Hoja de portafolio <span class="edc-mark C">C</span> · 10 min</div>
            <p>Saca la hoja impresa del prompt al final. Eli completa: nombre, fecha, copia la R, dibuja, completa los 3 ángulos. Mamá firma.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración de cierre <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor, gracias por darnos tu Palabra a través de tantos hombres que tu Espíritu inspiró. Ayuda a Eli a leer tu Biblia toda su vida con el respeto que merece. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C semanal · P15</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Recita memorizada. Narra solo 1 ángulo</td><td>Repasar P15 una semana más como encadenado.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Cadena P11→P15. Narra 2 de los 3 ángulos</td><td>Avanzar a P16 (Adán y Eva) en S6.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Cadena perfecta. Articula los 3 ángulos + nombra autores</td><td>⭐ Hoja al portafolio. Lista para P16.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli · ⭐ Portafolio</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja resumen de la semana — esta es la que se guarda</strong></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Portafolio P15</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible "resumen de portafolio" en español para mi hija Elisabeth ("Eli"), de 6 años. Familia presbiteriana en Bogotá, marco reformado pactual. Esta hoja se conserva en su portafolio durante años.

TEMA:
Catecismo CPN P15 — Semana 5 — Quién escribió la Biblia.

PROPÓSITO:
Eli vivió toda la semana con UNA pregunta del catecismo (P15) desde 3 ángulos. Esta hoja es la evidencia que se guarda.

CONTENIDO BÍBLICO:
P: ¿Quién escribió la Biblia?
R: Unos santos varones que fueron inspirados por el Espíritu Santo.

LOS 3 ÁNGULOS DE LA SEMANA:
- Día 1 (Martes): 2 Pedro 1:21 — santos varones inspirados
- Día 2 (Miércoles): Hechos 28:25 — "por medio de" (inspiración orgánica)
- Día 3 (Jueves): Los autores con nombre — Moisés, David, Pablo, Juan

FORMATO:
- Una página A4 vertical, lista para imprimir.
- Proporción 1:1.414 si es imagen.
- Diseño contemplativo, conservable, no infantil saturado.

ESTILO VISUAL:
- Fondo crema cálido #FAF6F0.
- Color tema: violeta profundo #6B3FAA con acentos dorados #C49A2A.
- Estilo digno, reverente, contemplativo.
- No usar caricaturas exageradas, colores neón, ni estética infantil saturada.
- No representar a Dios. No halos ni rayos místicos.

TIPOGRAFÍA:
- Encabezados en Georgia o serif clásica.
- Texto en sans-serif clara.
- Mínimo 14 pt instrucciones, 22+ pt para P y R.

CONTENIDO DE LA HOJA:

ENCABEZADO:
"Lo que aprendí de Dios — Semana 5"

SUBTÍTULO:
"Familia Espinoza · 16-19 jun 2026 · Catecismo P15"

CUADRO CENTRAL GRANDE:
La P y R completa en serif grande:
"¿Quién escribió la Biblia? — Unos santos varones que fueron inspirados por el Espíritu Santo."

SECCIÓN "Tres cosas que aprendí esta semana":
Tres líneas con iconos para que Eli complete:
- 📜 "La Biblia fue escrita por _______________________" (hombres santos inspirados)
- 🕊️ "El Espíritu Santo habló _________________________" (por medio de ellos)
- ✍️ "Algunos autores son: ____________________________" (Moisés, David, Pablo, Juan)

RECUADRO PARA DIBUJO 10×10 cm:
"Mi dibujo: una Biblia abierta"

PREGUNTA ABIERTA con 4 líneas:
"Cuando leo la Biblia, ¿a quién escucho? ¿Por qué?"

ESPACIOS FIRMAS:
- "Eli — fecha: ___ de junio de 2026"
- "Mamá: __________________"

CINTA INFERIOR DORADA:
"Los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo. — 2 Pedro 1:21"

PIE:
"Familia Espinoza · Creciendo en el Pacto · 2026-27"

CRITERIOS:
- La hoja debe verse como lámina conservable, no tarea escolar.
- Espacio real para escribir.
- Contemplativa, digna.

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

Si la IA genera HTML:
Artifact HTML completo con CSS embebido, A4 vertical, imprimible.

Si la IA genera PDF:
A4 vertical, listo para imprimir.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli dice P11→P15 cumulativas</li>
          <li>Mamá pregunta: <em>"¿Qué aprendiste de quién escribió la Biblia?"</em></li>
          <li>Escuchar narración libre</li>
          <li>Si no hay hoja: cuaderno con R + dibujo de Biblia abierta</li>
          <li>Oración</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>

<div class="strip s-sage" style="margin:14px 0">
  <strong>Plan del día viernes — otras materias:</strong><br>
  📖 <strong>Lectoescritura</strong>: lectura evaluativa (texto nuevo) + escritura libre 5 frases sobre Abraham (30 min).<br>
  📜 <strong>Historia Providencial</strong>: narración libre — "Cuéntame lo que aprendiste sobre Abraham esta semana" (15 min).<br>
  🔢 <strong>Matemáticas</strong>: repaso oral de sumas 0-10 con regletas (15 min).<br>
  📋 <strong>Diagnóstico de la madre</strong>: registrar en pestaña Registro (10 min).
</div>`
};

// ── MAPA DE CONTENIDOS ──
const WSDATA = { 1: W1, 2: W2, 3: W3, 4: W4, 5: W5 };
