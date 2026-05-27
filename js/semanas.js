// ── DATOS DE LAS 38 SEMANAS ──
const WEEKS = [
  {n:1,  t:1, d:'19–23 mayo 2026 ★', type:'activa',  u:'U0',   tema:'Mi historia bajo la providencia de Dios',      focus:'Inicia martes 19 — festivo lunes. Cierre X+Y, ordinales→11-20, Jer 1:5, CatN P11'},
  {n:2,  t:1, d:'25–29 mayo 2026',   type:'activa',  u:'U1',   tema:'Creación — Dios hace todas las cosas',          focus:'Gén 1. Y completa, Z inicia. Números hasta 20 consolidando. CatN P15'},
  {n:3,  t:1, d:'1–5 jun 2026',      type:'activa',  u:'U1',   tema:'Creación — El hombre como imagen de Dios',      focus:'Gén 1–2. Z cierra. Evaluación de ruta lectoescritura. Valor posicional 11–20'},
  {n:4,  t:1, d:'8–12 jun 2026',     type:'activa',  u:'U1-2', tema:'Caída y promesa — el pecado y la gracia',       focus:'Gén 3. Gén 3:15. Cambio de ruta lectoescritura. Suma 0-10'},
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
      <div class="mats"><span class="mat">Himnario o app</span><span class="mat">Piano (opcional)</span><span class="mat">Geography Songs</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué cantar el versículo:</span> la <strong>melodía es el mejor mnemónico que existe</strong>. Eli puede recitar Jeremías 1:5 con esfuerzo, pero si lo canta, lo retendrá por años. No es entretenimiento — es pedagogía clásica: los pueblos memorizaron los Salmos cantándolos. Calvino mismo musicalizó los Salmos para que el pueblo los aprendiera de memoria.</p>
        <p><span class="lec-tag">Sin presión musical:</span> mamá no necesita saber música. La melodía no tiene que ser "buena" — tiene que ser tuya y de Eli. Una melodía simple y repetitiva sobre 3 notas es más efectiva pedagógicamente que una compleja.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> memoria del versículo por canto, gozo del himno familiar, exposición temprana a contenido educativo cantado (Geography Songs como background).</p>
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
            <div class="guia-step-ttl">Geography Songs · exposición auditiva <span class="edc-mark E">E</span> · 5 min</div>
            <p>Pon "Continents and Oceans" o similar de Geography Songs. NO exijas memorización todavía — solo escuchar, dejar que el oído absorba. Eli puede bailar, dibujar, o solo escuchar mientras mamá guarda materiales.</p>
            <div class="guia-say">"Hoy solo escuchamos. La próxima semana empezamos a aprenderla."</div>
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
          <li>Listo. (Geography Songs es bonus.)</li>
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

<p style="font-size:.92rem"><strong>El método:</strong> Singapur es el currículo PRINCIPAL (secuencia, manual del maestro, libro del alumno). Mamut es el currículo de PRÁCTICA (hojas reproducibles para refuerzo). Geography Songs y Classical Conversations vienen como APOYO de memoria. No los mezcles todos en una sesión — los integras en distintos momentos.</p>

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
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Geografía</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Usar Geography Songs esta semana</strong>. El primer track "Continents and Oceans" → cantarlo con Eli el sábado mientras señalan el mapa. Una canción por mes, no más.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Latín</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">No introducir todavía. Activaremos Prima Latina (Memoria Press) a partir de S20.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Ciencias</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">El currículo de ciencias para S2 viene de tu carpeta "Spanish Foundations Science Experiments" + Charlotte Mason (diario de naturaleza). NO de CC todavía.</td></tr>
<tr><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)"><strong>Inglés / Math facts CC</strong></td><td style="padding:6px 8px;border-top:1px solid rgba(0,0,0,.1)">No activarlos ahora. Esto es para semanas tardías.</td></tr>
</table>

<p style="font-size:.86rem;margin-top:10px"><span class="lec-tag">Geography Songs · cómo usarlo concretamente:</span></p>
<ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
<li>Tienes el PDF "Geography Songs" en /Users/EN-ITAdmin/EDU-ELI/ (76 páginas, Larry & Kathy Troxel).</li>
<li>Esta semana solo: cantar "Continents and Oceans" con Eli. 5 min el sábado mientras pintan los continentes en el mapa.</li>
<li>NO exigir memorización. Solo exposición auditiva. Eli la oirá repetida durante semanas hasta que se la aprenda sola.</li>
<li>Si en YouTube buscas "Continents and Oceans song Audio Memory" sale la versión cantada.</li>
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
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📋</div><div><div class="act-ttl">Plan del día</div><div class="act-meta">Y: comprensión + actividad · 11–20 pictórico · Creación Gén 1</div></div></div>
<div class="act-body">
<div class="strip s-sage">Y: comprensión + actividad · 11–20 pictórico · Creación Gén 1 (continuación)</div>
<p style="font-size:.85rem;color:var(--muted);font-style:italic">Seguir el mismo ritmo del martes: Catecismo → Lectoescritura → Historia → Matemáticas.</p>
</div></div>`,

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
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📋</div><div><div class="act-ttl">Plan del día</div><div class="act-meta">Y: escritura creativa · Ciencias exp.54 Líneas telegráficas · Música</div></div></div>
<div class="act-body">
<div class="strip s-sage">Y: escritura creativa (párrafo propio) · Ciencias exp.54 Líneas telegráficas · Música: himno + Geography Songs</div>
</div></div>`,

viernes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P12 · Día 4 — Síntesis + ⭐ Portafolio ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P12 · Día 4 — Síntesis + ⭐ Hoja de portafolio</div>
      <div class="lesson-meta">20 min · Narración libre + hoja final para guardar</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span><span class="mat">Hoja del prompt IA</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes:</span> hoy NO se introduce nada nuevo. Eli ha vivido toda la semana con P12 desde 3 ángulos. Hoy: sintetiza, articula con sus palabras lo que entendió, y deja huella física en la hoja de portafolio.</p>
        <p><span class="lec-tag">Los 3 ángulos de la semana:</span></p>
        <p>• <strong>Día 1 (Martes)</strong>: Job 24:23 — los ojos de Dios sobre el camino.<br>• <strong>Día 2 (Miércoles)</strong>: Mt 10:29-30 — Dios cuenta hasta los cabellos. No temo.<br>• <strong>Día 3 (Jueves)</strong>: Is 43:1 — Dios me llama por mi nombre. Soy suya.<br>• <strong>Día 4 (Viernes — hoy)</strong>: síntesis y portafolio.</p>
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

<!-- ═══════════════ BLOQUE 2: Diario de Naturaleza ═══════════════ -->
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

<!-- ═══════════════ BLOQUE 3: Geografía · Mi lugar en el mundo de Dios ═══════════════ -->
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

<!-- ═══════════════ BLOQUE 4: Arte — Mi semana en colores ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico rojo">🎨</div>
    <div>
      <div class="lesson-ttl">Arte · Mi semana en colores</div>
      <div class="lesson-meta">25 min · Imagen de Dios creando — formación de la atención y belleza</div>
      <div class="mats"><span class="mat">Hoja blanca tamaño carta</span><span class="mat">Acuarelas, crayolas o colores</span><span class="mat">Lápiz</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">2 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">Por qué arte en este plan:</span> el arte no es entretenimiento. Es <strong>ejercicio del imago Dei</strong>. Dios fue el primer Artista — creó con palabra, color, forma, texto. Cuando Eli pinta, ejerce algo profundamente humano que solo nosotros tenemos: <em>la capacidad de crear cosas hermosas porque fuimos hechos a imagen del Creador</em>.</p>
        <p><span class="lec-tag">La técnica de hoy:</span> simple. Eli toma una hoja y un tema, y crea. Mamá NO dice cómo dibujar. Solo provee material, tiempo y aliento.</p>
        <p><span class="lec-tag">El tema del sábado:</span> <strong>"Mi semana en colores"</strong>. Eli elige UNA cosa que aprendió esta semana y la dibuja: puede ser el camino de Job (Día 1), los pajaritos contados (Día 2), su propio nombre escrito (Día 3), o lo que más le impactó. Es arte como narración visual de lo que recibió.</p>
        <p><span class="lec-tag">Cero presión:</span> el resultado NO tiene que verse "bonito" en sentido adulto. Si Eli dibuja un sol y dice "ese es Dios mirando", celebra. Si dibuja a la familia y dice "Dios conoce los nombres de todos", celebra. Lo que ella decida representar es válido.</p>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía rápida</span></div>
      <div class="guia">
        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Pregunta de elección · 2 min</div>
            <div class="guia-say">"Eli, esta semana aprendimos que Dios nos conoce — el camino, los cabellos, nuestro nombre. ¿Cuál de esas tres cosas te impactó más? Hoy vamos a dibujarla."</div>
            <p>Eli elige. Mamá no opina.</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Tiempo para crear · 20 min</div>
            <p>Eli dibuja, pinta, decora libremente. Mamá puede hacer su propio dibujo al lado (eso forma compañía sin supervisión).</p>
          </div>
        </div>
        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cierre · 3 min</div>
            <p>Eli muestra su dibujo y dice qué quiso representar. Mamá pregunta UNA cosa: "¿Cómo se llama tu dibujo?" Lo guardan en el portafolio con la fecha.</p>
            <div class="guia-say">"Dios te dio la mano que dibujó esto. Y el corazón que eligió este tema. Eso es ser hecha a su imagen."</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">Solo si quieres marco impreso. Una hoja blanca también funciona.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora · Hoja arte</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

TEMA:
Arte — sábado · Mi semana en colores

PROPÓSITO:
Eli elige UNA cosa que aprendió esta semana (los caminos que Dios mira, los pajaritos contados, o su nombre conocido por Dios) y la dibuja como cierre creativo de la semana.

FORMATO:
- Una página A4 vertical, lista para imprimir.
- Diseño con MARCO solamente — el centro va EN BLANCO para que Eli dibuje libremente.
- Márgenes muy amplios.

ESTILO VISUAL:
- Fondo crema cálido #FAF6F0.
- Color principal: rojo cálido suave #B94020 para el marco.
- Acentos: dorado tierra #C49A2A.
- Estilo: marco floral o de ramas estilizado, line-art delicado.
- No usar caricaturas, colores neón, ni estética infantil saturada.

CONTENIDO DE LA HOJA:

ENCABEZADO en serif:
"Mi semana en colores"

SUBTÍTULO pequeño:
"Una cosa que aprendí de Dios esta semana"

CUERPO CENTRAL:
Un marco rectangular grande EN BLANCO (al menos 18×22 cm) para que Eli dibuje libremente.

DEBAJO DEL MARCO:
- Línea para "Lo que dibujé se llama: ___________________"
- Línea para "Lo que aprendí: ___________________________"

PIE EN PEQUEÑO:
"Eli · Familia Espinoza · Semana 2"

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

  </div>
</div>

<!-- ═══════════════ BLOQUE 5: Recuperación de pendientes (opcional) ═══════════════ -->
<div class="strip s-rust" style="margin:14px 0">
<strong>🔄 Si quedó algo pendiente esta semana, este es el momento:</strong><br>
Si no alcanzaron a hacer alguna de las actividades de martes-viernes (frijol, diario de naturaleza, alguna sección del catecismo), pueden tomar este último bloque del sábado para hacerlo con calma. NO es obligatorio. Si todo se hizo, simplemente terminen aquí y disfruten el resto del sábado en familia.<br><br>
<strong>Pendientes posibles a recuperar:</strong>
<ul style="margin:8px 0 0 1.2rem;font-size:.86rem">
<li>Genealogía de los abuelos (si no se terminó el miércoles)</li>
<li>Experimento del frijol (si no había frijoles el miércoles)</li>
<li>Hoja del portafolio P12 (si no se completó el viernes)</li>
<li>Lectura de algún texto que no se alcanzó</li>
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
<div class="fm-sub">Imagen de Dios · Z · Evaluación de ruta lectoescritura</div>
<div class="fm-block"><h4>Qué verdad bíblica gobierna esta semana</h4>
<p>Génesis 1:26–28 no es solo un dato sobre el origen humano. Es la declaración de que Elisabeth fue hecha para conocer, responder, obedecer, crear, cuidar y adorar. Ser imagen de Dios significa que su educación no puede reducirse a entrenamiento de habilidades. Debe formar a una <em>persona completa delante de Dios</em>.</p>
<p>Esta semana cierra la Z y evalúa si el recurso de lectoescritura actual sigue siendo el apropiado. Al terminar X, Y y Z, Elisabeth habrá completado las letras "difíciles". La Semana 4 puede marcar el punto de cambio de ruta.</p></div>
<div class="fm-block"><h4>Evaluación de ruta — qué observar esta semana</h4>
<p>Al final de la Semana 3, mamá debe responder con honestidad: ¿El recurso actual lleva a Elisabeth al nivel siguiente? ¿Puede leer textos desconocidos con comprensión? ¿Puede escribir un párrafo propio con coherencia? Si sí, el siguiente recurso puede ser más exigente. Si hay brechas, se consolida antes de cambiar.</p>
<p><strong>Señales de que está lista para cambiar de ruta:</strong> lee textos nuevos de corrido (no conocidos de memoria), comprende sin releer, escribe frases propias sin copia, puede dictar un párrafo, narra con secuencia y detalle.</p></div>
<div class="fm-oracion"><div class="fo-lbl">Oración antes de enseñar</div>
<p>Señor, hiciste a mi hija a tu imagen. No para que produzca rendimiento, sino para que te conozca y te ame. Ayúdame a evaluar esta semana con honestidad y sin ansiedad. Que el cambio de ruta, si llega, sea un paso de fe y no de orgullo. Amén.</p>
</div></div>
<div class="strip s-teal" style="margin-top:.75rem">
<strong>Lunes — Catecismo para Niños P20:</strong><br>
P. 20: ¿Cómo sabes que tienes un alma?<br>
R: Porque la Biblia me lo dice.<br>
<em>Lunes nuevo: P20. Repaso rápido de P11–P19.</em>
</div>`,

martes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P13 · Día 1 — Apertura y ancla ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P13 · Día 1 — Apertura y ancla</div>
      <div class="lesson-meta">12–15 min · ¿Puede Dios hacer todo? · Daniel 4:35</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> P13 enseña la <strong>omnipotencia divina</strong>, pero el catecismo es teológicamente preciso: <em>"Dios puede hacer todo conforme a su santa y soberana voluntad"</em>. No dice "puede hacer cualquier cosa". El poder de Dios no es magia ni capricho — es santo, ordenado, soberano. Esa precisión es lo que diferencia al Dios bíblico de un genio mítico.</p>
        <p><span class="lec-tag">Por qué importa:</span> los niños suelen recibir "Dios puede todo" y saltan a "¿entonces por qué no detuvo X?". La respuesta reformada no es teodicea abstracta — es: <strong>Dios hace toda su santa voluntad, y esa voluntad es buena, sabia y soberana</strong>. Hoy no entres a teodicea, pero pon el cimiento: <em>el poder de Dios es santo.</em></p>
        <p><span class="lec-tag">Daniel 4:35 como texto principal:</span> "Hace según su voluntad en el ejército del cielo y en los habitantes de la tierra; y no hay quien detenga su mano, ni le diga: ¿Qué haces?" Nabucodonosor — el rey más poderoso de su tiempo — confiesa que su propio poder no es nada comparado con el de Dios. <em>Nadie detiene la mano de Dios.</em> Esa frase es el corazón de la omnipotencia bíblica.</p>
        <p><span class="lec-tag">Bavinck sobre la omnipotencia:</span> el poder de Dios no es poder bruto, es poder según su naturaleza. Dios no puede mentir, no puede pecar, no puede negarse a sí mismo. Esas "imposibilidades" no son límites — son perfecciones. Dios es tan poderoso que su poder está siempre en armonía con su santidad.</p>
        <p><span class="lec-tag">Cadena cumulativa:</span> P11 (mira) + P12 (sabe) + P13 (puede). Eli está construyendo su mapa del Dios todo-suficiente: el Padre que ve, conoce y puede cumplir. La próxima semana sumará P14 (su Palabra es donde lo conocemos).</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que "puede hacer todo" se convierta en "es como Aladino". Dios no concede deseos. Hace su voluntad santa. Si Eli pregunta "¿entonces por qué Dios no me da X?", responde con calma: <em>"porque su voluntad es santa y sabia, no como la nuestra."</em></p>
        <p><span class="lec-tag">Lo que estás formando:</span> reverencia ante un poder que es santo. Confianza en que Dios puede cumplir lo que prometió.</p>
        <div class="lec-bible">"Hace según su voluntad en el ejército del cielo y en los habitantes de la tierra; y no hay quien detenga su mano." — Daniel 4:35 &nbsp;·&nbsp; "Para los hombres esto es imposible, pero para Dios todo es posible." — Mateo 19:26</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, que Eli aprenda hoy que tu poder es santo y soberano. Que descanse en saber que nadie detiene tu mano. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">12–15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · El imposible <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, ¿podrías hacer que el sol salga mañana? ¿Podrías hacer que un árbol crezca en un minuto? ¿Podrías sanar a alguien que está muy enfermo? No, ¿verdad? Hay cosas que NO podemos hacer porque no tenemos poder. Hoy aprendemos: hay Alguien que SÍ puede todo lo que quiere."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de P11 + P12 + introducir P13 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Eli recita las dos anteriores:</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.</div>
            <p>Introduce P13:</p>
            <div class="guia-say">P13: ¿Puede Dios hacer todo?<br>R: Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.</div>
            <p>Repite 3 veces. Subraya: <strong>"santa y soberana voluntad"</strong> — esas son las palabras clave.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Daniel 4:35 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Cuéntale brevemente a Eli quién era Nabucodonosor:</p>
            <div class="guia-say">"Hace mucho tiempo había un rey muy, muy poderoso — se llamaba Nabucodonosor. Tenía ejércitos, palacios, todo. Pero un día Dios le mostró que su poder era prestado. Y Nabucodonosor dijo estas palabras..."</div>
            <p>Lee:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Daniel 4:35</span>"Hace según su voluntad en el ejército del cielo y en los habitantes de la tierra; y no hay quien detenga su mano."</div>
            <div class="guia-say">"¿Lo oíste? 'No hay quien detenga su mano.' Significa que cuando Dios decide algo, nadie lo puede parar. Ni reyes, ni ejércitos, ni nada."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Poder SANTO <span class="edc-mark D">D</span> · 3 min</div>
            <p>Aquí está el corazón de la clase. No la apresures.</p>
            <div class="guia-say">"Fíjate cómo dice el catecismo: 'Dios puede hacer todo conforme a su SANTA y SOBERANA voluntad.' No dice 'puede hacer cualquier cosa'. Hay cosas que Dios <strong>no puede</strong> hacer."</div>
            <p>Pausa. Eli abrirá los ojos.</p>
            <div class="guia-say">"¿Cómo? Dios no puede mentir. Dios no puede pecar. Dios no puede ser malo. ¿Por qué? Porque eso no sería santo, y Dios es santo. Su poder y su santidad van siempre juntos."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · Confianza en las promesas <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Esto es importante, Eli. Dios prometió cosas en su Palabra: que perdona a los que creen en Jesús, que cuida a sus hijos, que un día va a renovar todo. ¿Crees que tiene poder para cumplirlo? Sí. Porque puede hacer toda su santa voluntad. Lo que Dios promete, Dios lo cumple."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Señor, gracias porque tu poder es santo. Gracias porque nadie detiene tu mano. Ayuda a Eli a confiar en lo que prometiste. Amén."</div>
            <p>Cierra con la cadena P11 + P12 + P13.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Olvida P11 o P12. Confunde "puede todo" con "concede deseos"</td><td>Repetir P12 primero. Énfasis: <em>"Dios no es Aladino."</em></td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la cadena P11-P13 con apoyo. No articula "santa voluntad"</td><td>Pregunta: <em>"¿Puede Dios hacer cosas malas?"</em> Espera respuesta.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita y explica que el poder de Dios sirve a su voluntad santa</td><td>Registrar. Lista para Mt 19:26 mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">La hoja grande va el viernes. Hoy sugerencia simple.</p>
        <p>Sin IA: que Eli dibuje "la mano de Dios" en su cuaderno con la frase <em>"Nadie detiene su mano."</em></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Semana 3, Día 1, Catecismo CPN P13
- Eli ya sabe P11 ("Yo no puedo verlo, pero Él me mira continuamente") y P12 ("Sí, ninguna cosa puede ocultarse de la vista de Dios")
- Hoy aprende P13:
  P: ¿Puede Dios hacer todo?
  R: Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.
- Texto ancla: Daniel 4:35 (nadie detiene la mano de Dios)
- Énfasis en "santa y soberana voluntad" — el poder de Dios es santo

CONTENIDO DE LA HOJA (A4 vertical):
1. Encabezado: "Nadie detiene la mano de Dios"
2. Cinta superior con la R: "Sí, Dios puede hacer todo conforme a su santa y soberana voluntad"
3. Caja con Daniel 4:35: "No hay quien detenga su mano. — Daniel 4:35"
4. Recuadro 10×10 cm: "Dibuja la mano de Dios sosteniendo el mundo" (dibujo libre)
5. Pregunta abierta con 3 líneas: "¿Qué cosas NO puede hacer Dios? (Pista: cosas que no serían santas)"
6. Sección "Yo confío" — Eli completa: "Dios prometió ____________. Yo creo que Él lo cumple porque _____________"
7. Cinta inferior dorada: "Para Dios todo es posible. — Mateo 19:26"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Color del tema: violeta (#6B3FAA) con acentos dorados (#C49A2A)
- Tipografía Georgia para títulos, sans-serif clara para texto
- Letra mín. 16pt
- Estilo digno, reverente, contemplativo
- No usar caricaturas exageradas, colores neón ni estética infantil saturada
- No usar imágenes que pretendan representar a Dios, halos, rayos místicos

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
          <li>Repaso de P11+P12</li>
          <li>Introducir P13 — repetir 3 veces</li>
          <li>Leer Daniel 4:35 una vez</li>
          <li>Una frase: <em>"Nadie detiene la mano de Dios."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📖</div><div><div class="act-ttl">Lectoescritura · Z: texto, comprensión y escritura evaluativa</div><div class="act-meta">45 min · evaluación de ruta incluida</div></div></div>
<div class="act-body">
<p><strong>Texto de Z (20 min):</strong> Leer el texto de la sección Z con comprensión. Preguntas de inferencia y opinión: "¿Qué harías tú en ese lugar? ¿Por qué crees que...?"</p>
<p><strong>Evaluación de escritura (20 min):</strong> Mamá da un tema libre: "Escribe sobre alguien de tu familia y por qué esa persona es importante para ti." Elisabeth escribe sola, mínimo 5 frases. Sin dictado, sin modelo, sin ayuda. Este es el texto de evaluación de ruta.</p>
<div class="desafio"><div class="desafio-lbl">🔥 Criterios de evaluación de ruta</div><p>Leer el texto de Elisabeth observando: coherencia de ideas, uso de mayúsculas y puntos, variedad de vocabulario, longitud de frases. Si está en C en estos aspectos, la Semana 4 inicia el nuevo recurso. Si está en D, dedicar una semana más de consolidación.</p></div>
</div></div>
<div class="act-block">
<div class="act-hd"><div class="act-ico dorado">📜</div><div><div class="act-ttl">Historia · Imagen de Dios — dignidad y vocación</div><div class="act-meta">25 min · Gén 1:26–28</div></div></div>
<div class="act-body">
<div class="say"><div class="say-lbl">Mamá enseña</div><div class="say-txt">"Dios hizo el sol, la luna, las plantas, los animales. Todos son buenos. Pero cuando hizo al hombre y a la mujer, dijo algo diferente: 'los haré a mi imagen.' Eso no lo dijo de los árboles ni de los leones. Solo de la persona. Eso significa que Elisabeth no es solo un animal inteligente. Es alguien que puede conocer a Dios, responder a Dios, obedecer a Dios, crear cosas, cuidar la creación y adorar."</div></div>
<p>Leer Gén 1:26–28. Narración de Elisabeth. Luego: "¿Qué cosas puedes hacer tú que un animal no puede hacer?" — Elisabeth responde con ejemplos concretos.</p>
</div></div>
<div class="act-block">
<div class="act-hd"><div class="act-ico rojo">🔢</div><div><div class="act-ttl">Matemáticas · Valor posicional: del dibujo al número y viceversa</div><div class="act-meta">25 min · Mamut VP p.13–14 · consolidación completa</div></div></div>
<div class="act-body">
<p><strong>Ejercicios Mamut VP (15 min):</strong> Elisabeth completa p.13–14 con comprensión. Mamá no explica primero — Elisabeth intenta sola, luego revisan juntas.</p>
<div class="desafio"><div class="desafio-lbl">🔥 Problema de aplicación</div><p>"Tengo 1 decena 7 unidades de canicas. Mi amiga tiene 2 decenas. ¿Quién tiene más? ¿Cuántas tiene mi amiga?" — Elisabeth resuelve oral primero, luego puede escribir.</p></div>
</div></div>`,

miercoles:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P13 · Día 2 — "Todo es posible" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P13 · Día 2 — "Para Dios todo es posible"</div>
      <div class="lesson-meta">10–12 min · Profundización con Mateo 19:26</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> ayer Daniel 4:35 nos enseñó que nadie detiene la mano de Dios en el plano cósmico (reyes, ejércitos, naturaleza). Hoy Mateo 19:26 trae la omnipotencia al plano personal: <strong>la salvación es posible solo porque Dios puede lo que parece imposible</strong>.</p>
        <p><span class="lec-tag">Mateo 19:26 en contexto:</span> el joven rico se acaba de ir triste. Los discípulos están conmocionados: <em>"¿Quién, pues, podrá ser salvo?"</em> Jesús los mira y dice: <em>"Para los hombres esto es imposible, pero para Dios todo es posible."</em> El milagro de la salvación no es ético — es ontológico. Solo Dios puede cambiar un corazón.</p>
        <p><span class="lec-tag">Calvino lo enseña así:</span> la salvación es obra del Espíritu, no esfuerzo humano. Si dependiera de nosotros, nadie sería salvo. Porque Dios <em>puede</em>, hay esperanza. La omnipotencia divina no es decoración doctrinal — es el fundamento del evangelio.</p>
        <p><span class="lec-tag">El movimiento del día:</span> Día 1 fue cósmico (Dios manda en la creación entera). Día 2 es personal (Dios puede cambiar corazones, incluido el mío). Eli debe terminar la clase pensando: <em>"Si Dios puede hacer todo, también puede ayudarme a obedecerle."</em></p>
        <p><span class="lec-tag">Peligro a evitar:</span> que Eli se quede en "todo es posible si tengo fe" (estilo prosperidad). El sujeto del verbo es DIOS, no la fe. "Para Dios todo es posible" — no "todo lo que yo crea con suficiente fe". Esa distinción salva del autoengaño.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> dependencia. Eli aprende que ella no puede salvarse, pero Dios SÍ puede salvarla. La omnipotencia divina como evangelio.</p>
        <div class="lec-bible">"Para los hombres esto es imposible, pero para Dios todo es posible." — Mateo 19:26 &nbsp;·&nbsp; "¿Hay para Dios alguna cosa difícil?" — Génesis 18:14</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque tu poder hace posible lo que para nosotros sería imposible. Que Eli aprenda hoy a depender de ti. Amén.
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
            <p>Eli recita la P y R de ayer:</p>
            <div class="guia-say">P13: ¿Puede Dios hacer todo?<br>R: Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.</div>
            <p>Pregunta de enlace:</p>
            <div class="guia-say">"Ayer aprendimos con Daniel que nadie detiene la mano de Dios en el mundo entero. Hoy Jesús va a enseñar algo aún más asombroso sobre lo que Dios puede hacer EN nosotros."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración bíblica · El joven rico <span class="edc-mark E">E</span> · 3 min</div>
            <div class="guia-say">"Un día un joven muy rico llegó a Jesús y le preguntó qué tenía que hacer para tener vida eterna. Jesús le dijo: 'Vende lo que tienes, dáselo a los pobres y sígueme.' Pero el joven se entristeció y se fue. Era demasiado para él."</div>
            <div class="guia-say">"Los discípulos estaban impresionados y preguntaron: '¿Quién, pues, podrá ser salvo?' Pensaban: si este joven bueno no puede, ¿quién puede?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Mateo 19:26 <span class="edc-mark E">E</span> · 2 min</div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Mateo 19:26</span>"Para los hombres esto es imposible, pero para Dios todo es posible."</div>
            <div class="guia-say">"Mira qué importante: hay cosas que NOSOTROS no podemos hacer. Por ejemplo, nosotros no podemos cambiar nuestro propio corazón. No podemos hacer que de pronto nos guste obedecer. No podemos salvarnos a nosotros mismos. Pero DIOS sí puede."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · La omnipotencia y el evangelio <span class="edc-mark D">D</span> · 3 min</div>
            <div class="guia-say">"Esto es lo más bonito de hoy, Eli. Si Dios no pudiera todo, no habría salvación. Porque salvarnos es algo que ningún ser humano puede hacer — ni el más rico, ni el más bueno, ni el más inteligente. Solo Dios. Y Dios PUEDE. Por eso hay evangelio."</div>
            <p>Pregunta:</p>
            <div class="guia-say">"¿Recuerdas cuando te enojaste y no querías pedir perdón? ¿O cuando te dio mucho miedo y no podías calmarte? Esos momentos no podemos cambiarlos solos. Pero Dios puede ayudarte. ¿Cómo? Porque para Él todo es posible."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · La oración como dependencia <span class="edc-mark D">D</span> · 1 min</div>
            <div class="guia-say">"Cuando algo te parezca imposible — obedecer, perdonar, perder el miedo — la oración no es decir 'yo puedo'. Es decir 'Dios, tú puedes, ayúdame'. Esa es la diferencia."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor, gracias porque para ti todo es posible. Cuando algo nos parezca imposible, ayúdanos a recordar que tú puedes. Amén."</div>
            <p>Eli recita P11 + P12 + P13.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Confunde "todo es posible" con "puedo lograr cualquier cosa si creo"</td><td>Corregir: el sujeto es DIOS. Volver al texto.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende que para Dios todo es posible pero no lo conecta consigo misma</td><td>Pregunta: <em>"¿Qué cosa difícil de tu vida quieres que Dios haga posible?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que ella no puede sola pero Dios puede ayudarle</td><td>Registrar. Lista para "santa voluntad" mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">La hoja grande va el viernes.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Semana 3, Día 2, profundizando Catecismo CPN P13 ("¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad")
- Hoy texto principal: Mateo 19:26 — "Para los hombres esto es imposible, pero para Dios todo es posible."
- Foco: la omnipotencia divina como fundamento del evangelio. No "yo puedo si creo" sino "Dios puede".

CONTENIDO (A4 vertical):
1. Encabezado: "Para Dios todo es posible"
2. Cinta superior con Mateo 19:26
3. Dos columnas:
   • Columna izquierda: "Lo que YO no puedo" — 3 líneas guía para que Eli escriba
   • Columna derecha: "Lo que DIOS puede" — 3 líneas
4. Recuadro 10×8 cm con instrucción: "Dibuja algo que parece imposible pero que sabes que Dios puede hacer"
5. Pregunta abierta con 3 líneas: "¿Qué le pides hoy a Dios que tú no puedes solo/a?"
6. Cinta inferior dorada: "No hay quien detenga su mano. — Daniel 4:35"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema: violeta (#6B3FAA) con acentos dorados (#C49A2A)
- Tipografía Georgia + sans-serif clara
- Letra mín. 16pt
- Estilo digno, reverente, contemplativo
- No usar caricaturas exageradas, colores neón ni estética infantil saturada
- No usar imágenes que pretendan representar a Dios, halos, rayos místicos

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
          <li>Leer Mateo 19:26 una vez</li>
          <li>Una frase: <em>"Yo no puedo sola, pero Dios puede."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📋</div><div><div class="act-ttl">Plan del día</div><div class="act-meta">Z: actividades comprensión · Valor posicional · Imagen de Dios Gén 1:26</div></div></div>
<div class="act-body"><div class="strip s-sage">Z: actividades comprensión · Valor posicional Mamut VP p.13 · Imagen de Dios Gén 1:26</div></div></div>`,

jueves:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P13 · Día 3 — "Santa y soberana voluntad" ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P13 · Día 3 — "Santa y soberana voluntad"</div>
      <div class="lesson-meta">10–12 min · Las palabras clave del catecismo · Romanos 9:20-21</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span><span class="mat">Plastilina o barro (opcional)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> hoy nos detenemos en las palabras precisas del catecismo: <em>"conforme a su santa y soberana voluntad"</em>. <strong>Santa</strong> = sin pecado, sin malicia, perfecta. <strong>Soberana</strong> = sin necesidad de pedir permiso a nadie. Esas dos palabras juntas describen el carácter del poder divino.</p>
        <p><span class="lec-tag">Por qué importa la distinción:</span> un poder soberano sin santidad sería tiranía. Una santidad sin soberanía sería impotencia. La gloria del Dios bíblico es que su poder absoluto está al servicio de su santidad perfecta. Dios no es ni déspota ni ausente — es el Padre santo todopoderoso.</p>
        <p><span class="lec-tag">Romanos 9:20-21 como imagen central:</span> Pablo usa la imagen del alfarero y el barro. El alfarero (Dios) tiene poder sobre el barro (nosotros) para hacer de él lo que quiera. La imagen es deliberadamente fuerte para resaltar la soberanía. Pero Pablo no presenta esto como amenaza — lo presenta como apologética: <em>"¿Quién eres tú para que alterques con Dios?"</em></p>
        <p><span class="lec-tag">Bavinck sobre esto:</span> "La voluntad de Dios es la causa última de todo lo que existe." Esa frase, dicha sin el adjetivo "santa", suena fatalista. Pero en Bavinck, la voluntad divina es siempre <strong>voluntad santa</strong> — sabia, buena, justa. Ese es el matiz pactual que diferencia al calvinismo del fatalismo musulmán o pagano.</p>
        <p><span class="lec-tag">Aplicación a la vida de Eli:</span> el modo correcto de orar no es "Dios, haz lo que yo quiero" sino "Dios, hágase tu voluntad". Esto NO es resignación pasiva — es confianza activa en un Padre cuya voluntad es santa.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que la soberanía de Dios suene como "Dios hace lo que se le da la gana". No. Dios hace lo que es santo, sabio y bueno — esa es su voluntad. Eli debe terminar la clase pensando: <em>"Dios manda en todo, y lo que manda es bueno."</em></p>
        <p><span class="lec-tag">Lo que estás formando:</span> sumisión gozosa a la voluntad de Dios. Hábito de orar "hágase tu voluntad" como expresión de confianza, no de resignación.</p>
        <div class="lec-bible">"Mas antes, oh hombre, ¿quién eres tú, para que alterques con Dios? ¿Tendrá derecho el alfarero sobre el barro?" — Romanos 9:20-21 &nbsp;·&nbsp; "Hágase tu voluntad, como en el cielo, así también en la tierra." — Mateo 6:10</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque tu voluntad es santa y soberana. Que Eli aprenda hoy a confiar en ti como Padre alfarero. Amén.
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
            <div class="guia-say">"Eli, ya sabemos: Dios PUEDE TODO (Daniel 4:35) y PARA DIOS TODO ES POSIBLE (Mateo 19:26). Hoy vamos a entender las dos palabras del catecismo más importantes: <strong>santa</strong> y <strong>soberana</strong> voluntad. Esas son las palabras que hacen que el Dios bíblico sea distinto a los dioses falsos."</div>
            <p>Eli recita la P y R.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Definir "santa" <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"<strong>Santa</strong> significa: sin pecado, perfecta, buena. La voluntad de Dios siempre es buena. Nunca quiere algo malo. Por eso decíamos antes: Dios NO puede mentir, NO puede pecar. Eso no es porque sea débil — es porque es perfectamente santo."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Definir "soberana" <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"<strong>Soberana</strong> significa: no necesita pedir permiso a nadie. Dios no le pregunta a nadie qué hacer. Es como un rey, pero el Rey de todos los reyes. Soberano significa: Él manda."</div>
            <p>Pregunta:</p>
            <div class="guia-say">"¿Conoces a alguien que mande sobre tu mamá o tu papá? Hay personas que mandan en algunas cosas — el pastor en la iglesia, el presidente en el país. Pero Dios manda sobre todos. Nadie le manda a Él."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">El alfarero y el barro <span class="edc-mark D">D</span> · 3 min</div>
            <p>Si tienes plastilina o barro, sácalo ahora. Toma un trozo en tus manos.</p>
            <div class="guia-say">"Mira, el barro. Yo decido qué hago con él. Si quiero, hago un platito. Si quiero, hago una pelota. El barro no me discute. La Biblia dice que Dios es como un alfarero — el que hace cosas con barro. Y nosotros somos como el barro. Dios decide qué hace con su creación."</div>
            <p>Lee:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Romanos 9:21</span>"¿O no tiene potestad el alfarero sobre el barro para hacer de la misma masa un vaso para honra y otro para deshonra?"</div>
            <div class="guia-say">"Esto puede sonar fuerte. Pero recuerda: el alfarero es SANTO. Lo que hace con el barro siempre es bueno y sabio. No es un alfarero malo — es un alfarero perfecto. Por eso podemos confiar."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · "Hágase tu voluntad" <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"En el Padre Nuestro hay una frase muy importante: 'Hágase tu voluntad'. ¿Sabes lo que significa? Es decirle a Dios: 'Tu voluntad es mejor que la mía. Confío en ti.' No es resignación triste — es confianza alegre, porque sabemos que su voluntad es SANTA."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Padre, tu voluntad es santa y soberana. Ayúdanos a confiar en ti como el barro confía en el alfarero. Hágase tu voluntad. Amén."</div>
            <p>Eli recita P11+P12+P13.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No distingue "santa" de "soberana". Las palabras suenan iguales</td><td>Definir una por una con ejemplos sencillos.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende cada palabra por separado. No las junta</td><td>Pregunta: <em>"¿Es bueno que Dios mande TODO?"</em> Explorar.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que la voluntad de Dios es buena Y soberana, y eso es confianza, no miedo</td><td>Registrar. Lista para síntesis del viernes.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">Sugerencia sin IA: que Eli moldee algo con plastilina en su cuaderno y escriba debajo: <em>"Dios es el alfarero. Yo soy el barro. Confío."</em></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Semana 3, Día 3, profundizando Catecismo CPN P13 ("Sí, Dios puede hacer todo conforme a su santa y soberana voluntad")
- Hoy textos: Romanos 9:20-21 (el alfarero y el barro) + Mateo 6:10 ("Hágase tu voluntad")
- Foco: las dos palabras clave del catecismo — santa + soberana

CONTENIDO (A4 vertical):
1. Encabezado: "Santa y soberana voluntad"
2. Dos cajas lado a lado:
   • Izquierda · "SANTA" en violeta: "Significa BUENA, sin pecado. Lo que Dios quiere siempre es bueno."
   • Derecha · "SOBERANA" en dorado: "Significa que MANDA. Nadie le da órdenes a Dios."
3. Sección central "El alfarero y el barro" — imagen sencilla line-art de manos haciendo algo con barro, con la cita: "¿No tiene potestad el alfarero sobre el barro? — Romanos 9:21"
4. Recuadro 10×8 cm: "Dibuja: si tú fueras el barro, ¿qué haría el Padre alfarero contigo?"
5. Sección "Yo oro" — Eli completa: "Padre, hágase tu voluntad en _____________________" (4 líneas guía)
6. Cinta inferior dorada: "Hágase tu voluntad, como en el cielo, así también en la tierra. — Mateo 6:10"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema: violeta (#6B3FAA) y dorado (#C49A2A) en igual prominencia (representan santa y soberana)
- Estilo: contemplativo
- Tipografía Georgia + sans-serif
- Letra mín. 16pt

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
          <li>Definir SANTA (buena) y SOBERANA (manda)</li>
          <li>Decir juntas: "Hágase tu voluntad"</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📋</div><div><div class="act-ttl">Plan del día</div><div class="act-meta">Z: escritura evaluativa · Ciencias exp.57 Mezclando · Música + himno</div></div></div>
<div class="act-body"><div class="strip s-sage">Z: escritura evaluativa · Ciencias exp.57 Mezclando colores · Música + himno</div></div></div>`,

viernes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P13 · Día 4 — Síntesis + ⭐ Portafolio ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P13 · Día 4 — Síntesis + ⭐ Hoja de portafolio</div>
      <div class="lesson-meta">20 min · Narración libre + hoja final</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span><span class="mat">Hoja del prompt IA</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes:</span> hoy NO se introduce nada nuevo. Eli vivió toda la semana con P13 desde 3 ángulos. Hoy: sintetiza, articula y deja huella física en la hoja de portafolio.</p>
        <p><span class="lec-tag">Los 3 ángulos:</span></p>
        <p>• <strong>Día 1 (Martes)</strong>: Daniel 4:35 — nadie detiene la mano de Dios.<br>• <strong>Día 2 (Miércoles)</strong>: Mateo 19:26 — para Dios todo es posible (yo no puedo, Dios sí).<br>• <strong>Día 3 (Jueves)</strong>: Romanos 9 + Mt 6:10 — santa y soberana voluntad (el alfarero y el barro).<br>• <strong>Día 4 (Viernes — hoy)</strong>: síntesis y portafolio.</p>
        <p><span class="lec-tag">Cadena cumulativa P11+P12+P13:</span> Dios <em>mira</em> + Dios <em>sabe</em> + Dios <em>puede</em>. Eli debería poder recitar las tres preguntas seguidas. La próxima semana sumará P14.</p>
        <p><span class="lec-tag">Evaluación por narración libre:</span> mamá pregunta "¿Qué aprendiste esta semana sobre que Dios puede todo?" y escucha. Si menciona los 3 ángulos: [C]. Dos: [D]. Uno: [E]. Cero reproche.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> síntesis semanal. Memoria de la fidelidad de Dios. Conexión cumulativa entre las tres preguntas trabajadas.</p>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por esta tercera semana. Que Eli salga sabiendo que tú miras, conoces y puedes — y eso es paz. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">20 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Cadena cumulativa P11+P12+P13 <span class="edc-mark C">C</span> · 3 min</div>
            <p>Eli dice las tres P y R seguidas, sin ayuda. Si lo logra: ⭐ celebración fuerte.</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br><br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.<br><br>P13: ¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración libre — los 3 ángulos <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"Eli, cuéntame con tus palabras todo lo que aprendiste esta semana sobre que Dios puede todo."</div>
            <p>Mamá escucha sin interrumpir. Identifica:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>¿Mencionó "nadie detiene la mano de Dios" (Daniel)? (Día 1 ✓)</li>
              <li>¿Mencionó "para Dios todo es posible" o "yo no puedo, Dios sí" (Mt 19)? (Día 2 ✓)</li>
              <li>¿Mencionó "santa y soberana" o el alfarero (Romanos)? (Día 3 ✓)</li>
            </ul>
            <div class="guia-say">"¡Qué bonito todo lo que recuerdas! Hagamos la hoja para guardar."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Hoja de portafolio <span class="edc-mark C">C</span> · 10 min</div>
            <p>Saca la hoja impresa del prompt al final de esta sección.</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Eli escribe su nombre y fecha</li>
              <li>Copia la R de P13</li>
              <li>Dibuja</li>
              <li>Completa las 3 frases (los ángulos)</li>
              <li>Mamá firma</li>
            </ul>
            <p>La hoja entra al sobre de Semana 3 del portafolio.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración de cierre <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Señor, gracias por esta semana. Eli ya sabe que tú miras (P11), conoces (P12), y puedes (P13). Continúa enseñándole. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C semanal · P13</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Recita memorizada. Narra solo 1 ángulo. Confunde poder con magia</td><td>Repasar P13 una semana más. NO abandonar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita P11+P12+P13. Narra 2 de los 3 ángulos</td><td>Avanzar a P14.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Cadena cumulativa perfecta. Articula los 3 ángulos + santidad del poder</td><td>⭐ Hoja al portafolio. Lista para P14.</td></tr>
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
- Es el viernes de la Semana 3. Eli vivió toda la semana con UNA pregunta del catecismo: CPN P13.
- P y R:
  P: ¿Puede Dios hacer todo?
  R: Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.
- 3 ángulos:
  • Día 1: Daniel 4:35 — nadie detiene la mano de Dios
  • Día 2: Mateo 19:26 — para Dios todo es posible (yo no puedo, Dios sí)
  • Día 3: Romanos 9 + Mateo 6:10 — santa y soberana voluntad (el alfarero y el barro)

CONTENIDO DE LA HOJA (A4 vertical, una página):
1. Encabezado destacado: "Lo que aprendí de Dios — Semana 3"
2. Sub-encabezado: "Familia Espinoza · 1-5 junio 2026 · Catecismo P13"
3. Cuadro central GRANDE con la P y R completa: "¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad."
4. Sección "Tres cosas que aprendí esta semana" — tres líneas con iconos:
   • 🤚 "Nadie detiene la ___________________________" (mano de Dios)
   • ✨ "Para Dios todo es _________________________" (posible)
   • 🏺 "Dios es el alfarero, yo soy el ____________" (barro) — pequeño dibujo del alfarero
5. Recuadro 10×10 cm para dibujo: "Mi dibujo: el alfarero y el barro"
6. Pregunta abierta con 4 líneas: "Cuando recuerdo que Dios puede todo, yo siento _____________"
7. Espacios firmas: "Eli — fecha" + "Mamá"
8. Cinta inferior dorada: "Hágase tu voluntad, como en el cielo así también en la tierra. — Mateo 6:10"
9. Pie pequeño: "Familia Espinoza · Creciendo en el Pacto · 2026-27"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema: violeta (#6B3FAA) + dorado (#C49A2A)
- Estilo contemplativo, digno
- Tipografía Georgia + sans-serif
- La cita central del catecismo destacada
- Iconos minimalistas, line-art

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli dice P11+P12+P13 cumulativas</li>
          <li>Mamá pregunta: <em>"¿Qué aprendiste de que Dios puede todo?"</em></li>
          <li>Escuchar narración libre</li>
          <li>Si no hay hoja impresa: cuaderno con dibujo + R de P13</li>
          <li>Oración</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico dorado">🔄</div><div><div class="act-ttl">Evaluación de ruta lectoescritura · Repaso semanal · Diario p.3</div><div class="act-meta">40 min</div></div></div>
<div class="act-body">
<p>Evaluación de ruta lectoescritura · Repaso semanal · Completar Diario de naturaleza página 3.</p>
</div></div>`
};

// ── SEMANA 4 ──
const W4 = {
fm:`<div class="fm-section">
<div class="fm-title">Formación para mamá — Semana 4</div>
<div class="fm-sub">Caída y promesa · Cambio de ruta en lectoescritura</div>
<div class="fm-block"><h4>Qué verdad bíblica gobierna esta semana</h4>
<p>Génesis 3 es el capítulo más difícil de enseñar sin moralismo. El error más común es convertirlo en una historia de obediencia: "Adán y Eva desobedecieron, y eso fue malo; tú no desobedezcas." Pero eso reduce el relato a lección de conducta y pierde la doctrina.</p>
<p>Lo que Gén 3 revela sobre Dios es lo más importante: <strong>el pecado desordena lo que Dios hizo bueno, pero Dios no abandona su plan</strong>. La promesa de Gén 3:15 — el primer evangelio — aparece en medio del juicio. Eso es lo que debe formar la semana: Elisabeth aprende que el pecado es real, que lo afecta a ella también, y que Dios mismo provee la solución.</p>
<p>Schenck nos ayuda a ver que los hijos del pacto no deben ser tratados como si el pecado no fuera real en ellos, ni como si estuvieran fuera de las promesas de Dios. El lenguaje correcto es: hay pecado real, hay necesidad real de Cristo, hay promesa real de gracia.</p></div>
<div class="fm-block"><h4>Cambio de ruta en lectoescritura</h4>
<p>Si la evaluación de la Semana 3 mostró que Elisabeth está en C en escritura y comprensión, esta semana inicia el nuevo recurso. Si está en D, se hace una semana más de consolidación antes de cambiar.</p>
<p><strong>Para el cambio de ruta:</strong> el nuevo recurso debe exigir lectura de textos más largos, comprensión de texto no visto antes, escritura de párrafos con estructura, y vocabulario más amplio.</p></div>
<div class="fm-block"><h4>Advertencias para esta semana</h4>
<p><strong>Primera:</strong> No enseñes Gén 3 solo con énfasis en consecuencias. La promesa de Gén 3:15 es la buena noticia dentro del juicio. Termina allí, no en el castigo.</p>
<p><strong>Segunda:</strong> Si hay resistencia al nuevo recurso de lectura, es normal. Un cambio de ruta toma adaptación. No interpretar resistencia como fracaso.</p>
<p><strong>Tercera:</strong> Esta semana las matemáticas pasan a suma: suma de 0–10 con comprensión de partes y total, no solo memorización de resultados.</p></div>
<div class="fm-oracion"><div class="fo-lbl">Oración antes de enseñar</div>
<p>Señor, enséñame a hablar del pecado sin dureza y de la gracia sin ligereza. Que mi hija aprenda que necesita a Cristo, no como doctrina abstracta, sino como verdad que toca su vida. Y que el nuevo camino en lectura sea también una oportunidad de ver tu providencia en cosas pequeñas. Amén.</p>
</div></div>
<div class="strip s-teal" style="margin-top:.75rem">
<strong>Lunes — Catecismo para Niños P25:</strong><br>
P. 25: ¿Qué prometió Dios en el pacto de obras?<br>
R: Recompensar a Adán con vida si le obedecía.<br>
<em>Lunes nuevo: P25. Repaso rápido de P11–P24.</em>
</div>`,

martes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P14 · Día 1 — Apertura y ancla ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P14 · Día 1 — Apertura y ancla</div>
      <div class="lesson-meta">12–15 min · ¿En dónde aprendes? · 2 Timoteo 3:16</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">La verdad que gobierna esta clase:</span> P14 cierra el bloque inicial del catecismo. Las tres primeras semanas hablaron de QUIÉN es Dios (mira, sabe, puede). Esta semana habla de DÓNDE lo conocemos. La respuesta es exacta: <em>"Solamente en la Biblia"</em>. Esa palabra "solamente" es Sola Scriptura formulada para niños.</p>
        <p><span class="lec-tag">La precisión del catecismo:</span> no dice "en la Biblia" (lo cual sería verdad pero insuficiente). Dice "solamente en la Biblia". La diferencia está en lo que excluye: no la naturaleza sola (aunque revela a Dios), no la tradición sola (aunque ayude), no la experiencia personal, no los sueños, no los sentimientos. <strong>Solo la Biblia es la fuente normativa del conocimiento de Dios y de su voluntad.</strong></p>
        <p><span class="lec-tag">Calvino lo enseña así:</span> "La creación nos dice que hay Dios. Solo la Escritura nos dice quién es Dios y qué quiere de nosotros." La naturaleza puede llevar a un dios genérico — solo la Palabra revela al Dios trino del evangelio. Por eso Sola Scriptura no es opinión protestante — es necesidad teológica.</p>
        <p><span class="lec-tag">2 Timoteo 3:16 como texto principal:</span> "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." Toda. No partes. No solo los Evangelios o los Salmos — TODA. Eso incluye Levítico, las genealogías, los profetas. Eli debe aprender desde ya que la Biblia no se elige a pedazos.</p>
        <p><span class="lec-tag">Conexión cumulativa con P11-P13:</span> Dios mira (P11) + Dios sabe (P12) + Dios puede (P13) + lo conocemos en su Palabra (P14). La cadena es completa: Dios se conoce solo donde Él se ha revelado. La Biblia no es libro sobre Dios — es Dios hablando.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que "obedecer y amar a Dios" suene a moralismo ("la Biblia me dice qué reglas seguir"). El punto es relacional: la Biblia es donde Dios se da a conocer para ser amado. Conocemos para amar; amamos para obedecer. Ese orden importa.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> hábito de buscar a Dios en su Palabra, no en sentimientos o intuiciones. Confianza en la Biblia como suficiente y autoritativa.</p>
        <div class="lec-bible">"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra." — 2 Timoteo 3:16-17</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por darnos tu Palabra. Que Eli aprenda hoy que tu Biblia es donde te conoce — toda, no a pedazos. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">12–15 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Apertura · ¿Dónde aprendo? <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Eli, dime: ¿dónde aprendes a sumar? (Respuesta: en el libro de matemáticas / con regletas). ¿Dónde aprendes a leer? (En libros de lectura). ¿Y dónde aprendes a amar y obedecer a Dios? Hoy aprendemos la respuesta más importante."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso cumulativo + introducir P14 <span class="edc-mark E">E</span> · 3 min</div>
            <p>Eli recita la cadena P11+P12+P13. Luego introduce P14:</p>
            <div class="guia-say">P14: ¿En dónde aprendes a obedecer y amar a Dios?<br>R: Solamente en la Biblia.</div>
            <p>Repite 3 veces. Subraya: <strong>"solamente"</strong>.</p>
            <div class="guia-say">"Fíjate que no dice 'en muchos lugares'. Dice 'SOLAMENTE'. Esa palabra es muy importante."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · ¿Por qué "solamente"? <span class="edc-mark D">D</span> · 3 min</div>
            <div class="guia-say">"Hay otras cosas que nos dicen <em>algo</em> de Dios. Cuando miras una flor, sabes que hay un Creador. Cuando ves el cielo, sabes que es grande. Eso es bueno — la naturaleza nos dice que Dios existe."</div>
            <p>Pausa.</p>
            <div class="guia-say">"Pero la flor no te dice cómo se llama Dios. No te dice que Dios envió a Jesús. No te dice qué pecado es. No te dice cómo orar. Eso solo lo dice la Biblia. Por eso la Biblia es <strong>especial</strong>: es Dios mismo hablándonos."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · 2 Timoteo 3:16 <span class="edc-mark E">E</span> · 2 min</div>
            <p>Lee despacio:</p>
            <div class="guia-bible"><span class="guia-bible-ref">2 Timoteo 3:16</span>"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia."</div>
            <div class="guia-say">"'Inspirada por Dios' significa que Dios mismo guió a los que la escribieron. Por eso las palabras de la Biblia no son simples palabras humanas — son la voz de Dios. Y dice <strong>'toda'</strong>: toda la Biblia, no solo algunas partes."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · La Biblia abierta <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Hay una manera muy importante de vivir. ¿Cómo respondemos cuando algo nos pasa? ¿Lo que sentimos? ¿Lo que la gente dice? Cuando queremos saber qué quiere Dios, vamos a la Biblia. La Biblia es nuestra primera fuente — antes que sentimientos, antes que opiniones."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Señor, gracias porque nos diste tu Palabra. Que Eli aprenda a buscarte siempre allí — solamente allí. Amén."</div>
            <p>Eli recita la cadena completa P11+P12+P13+P14.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Omite "solamente". Confunde Biblia con cualquier libro religioso</td><td>Énfasis en "solamente". Repetir varias veces.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita la R pero no articula por qué "solamente"</td><td>Pregunta: <em>"¿La flor te dice que Jesús murió por ti?"</em> Responde "no, solo la Biblia".</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Recita y explica que solo la Biblia es la voz de Dios escrita</td><td>Registrar. Lista para Mt 22 mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <p style="font-size:.85rem;color:var(--muted)">La hoja grande va el viernes.</p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Semana 4, Día 1, Catecismo CPN P14
- Eli ya sabe P11, P12, P13
- Hoy aprende P14:
  P: ¿En dónde aprendes a obedecer y amar a Dios?
  R: Solamente en la Biblia.
- Texto ancla: 2 Timoteo 3:16
- Énfasis en "solamente" (Sola Scriptura)

CONTENIDO (A4 vertical):
1. Encabezado: "Solamente en la Biblia"
2. Cinta superior con la R en letra grande
3. Ilustración central simple: una Biblia abierta con un rayo de luz saliendo (line-art, sobria)
4. Caja con 2 Timoteo 3:16
5. Dos columnas pequeñas:
   • "La naturaleza me dice que HAY Dios" — espacio para que Eli dibuje algo de naturaleza
   • "La Biblia me dice QUIÉN es Dios" — espacio para que Eli dibuje una Biblia abierta
6. Pregunta abierta con 4 líneas: "¿Por qué la Biblia es especial?"
7. Cinta inferior dorada: "Toda la Escritura es inspirada por Dios. — 2 Timoteo 3:16"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema violeta + dorado
- Estilo digno y reverente, contemplativo
- No usar caricaturas exageradas, colores neón ni estética infantil saturada
- No usar imágenes que pretendan representar a Dios, halos, rayos místicos

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
          <li>Repasar cadena P11+P12+P13</li>
          <li>Introducir P14 — repetir 3 veces. Énfasis: "SOLAMENTE"</li>
          <li>Una frase: <em>"Solo la Biblia es la voz de Dios escrita."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📖</div><div><div class="act-ttl">Lectoescritura · Cambio de ruta o consolidación (según evaluación S3)</div><div class="act-meta">45 min</div></div></div>
<div class="act-body">
<div class="strip s-rust"><strong>Decisión de ruta según S3:</strong> Si Elisabeth está en C → iniciar nuevo recurso hoy. Si está en D → un día más de escritura propia antes de cambiar.</div>
<p><strong>Con el nuevo recurso (si aplica):</strong> Primera sesión de exploración. Mamá no explica el método completo. Le da el libro y dice: "Mira cómo está organizado. ¿Qué ves que es diferente?" Elisabeth observa, hace preguntas. Luego hacen la primera actividad juntas.</p>
<div class="desafio"><div class="desafio-lbl">🔥 Primera evidencia del nuevo recurso</div><p>Al terminar la primera sesión: Elisabeth lee un párrafo del nuevo material en voz alta. Mamá registra: nivel de fluidez, dificultad, motivación. Esta evidencia va al portafolio.</p></div>
</div></div>
<div class="act-block">
<div class="act-hd"><div class="act-ico dorado">📜</div><div><div class="act-ttl">Historia · Caída y promesa — el pecado desordena, Dios promete</div><div class="act-meta">30 min · Gén 3 · primer evangelio</div></div></div>
<div class="act-body">
<div class="say"><div class="say-lbl">Mamá enseña Génesis 3</div><div class="say-txt">"Adán y Eva tenían todo lo bueno que Dios les había dado. Pero el enemigo les dijo: 'Dios les escondió algo.' Y eligieron no confiar en Dios. Eso es el pecado: es volverle la espalda a Dios y decir 'prefiero mis propias ideas'. Y cuando eso pasó, todo cambió. El mundo que era bueno quedó roto. Nosotros también nacemos con esa rotura. No podemos arreglarlo solos."</div></div>
<p>Leer Gén 3:15. "Pero Dios dijo algo en medio del juicio. Prometió que alguien vendría a vencer al enemigo. Esa promesa apunta a Cristo."</p>
<div class="desafio"><div class="desafio-lbl">🔥 Pregunta de comprensión elevada</div><p>"¿Por qué crees que Dios no destruyó todo desde ese momento? ¿Qué aprendemos de Dios en que prometió ayuda en medio del castigo?" — Elisabeth responde con sus palabras.</p></div>
</div></div>
<div class="act-block">
<div class="act-hd"><div class="act-ico rojo">🔢</div><div><div class="act-ttl">Matemáticas · Inicio de suma: partes y total</div><div class="act-meta">25 min · Mamut Sumar 1 + regletas</div></div></div>
<div class="act-body">
<p><strong>Concepto (10 min):</strong> "Suma es juntar dos partes para encontrar el total." Usar regletas: poner 3 + 4, ver el total. No fórmula todavía — solo concepto visual.</p>
<div class="say"><div class="say-lbl">Mamá dice</div><div class="say-txt">"Aquí hay 3 canicas y aquí hay 4. ¿Cuántas en total? ¿Cómo lo sabes? Puedes contarlas, puedes poner las regletas juntas, puedes pensar en el número."</div></div>
<p><strong>Ejercicios concretos (10 min):</strong> 3 sumas con regletas antes de tocar papel.</p>
<div class="desafio"><div class="desafio-lbl">🔥 Si tiene fluidez</div><p>"¿Puedes pensar en dos números que juntos den 9? ¿Y otros dos que también den 9?" — Este es el pensamiento relacional de Singapur.</p></div>
</div></div>`,

miercoles:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P14 · Día 2 — Amar a Dios y al prójimo ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P14 · Día 2 — "Amar a Dios y al prójimo"</div>
      <div class="lesson-meta">10–12 min · Mateo 22:37-40 · resumen de toda la ley</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> ayer establecimos que SOLO la Biblia nos enseña a obedecer y amar a Dios. Hoy preguntamos: <em>¿y qué nos enseña concretamente?</em> La respuesta de Jesús es asombrosa: toda la Escritura se resume en dos mandamientos — amar a Dios y amar al prójimo. Toda. Mateo 22:37-40 es la clave hermenéutica que Jesús mismo da para leer Su Palabra.</p>
        <p><span class="lec-tag">Por qué importa:</span> sin esta llave, la Biblia se vuelve un libro de reglas inconexas. Con esta llave, todo se ordena: los Diez Mandamientos son aplicaciones del doble amor. Los profetas predicaron contra la falta de amor a Dios y al prójimo. Jesús cumplió perfectamente este doble amor en lugar nuestro. La cruz es el doble amor en acción: amó al Padre obedeciendo + amó a los suyos muriendo por ellos.</p>
        <p><span class="lec-tag">Bavinck sobre esto:</span> el doble amor no es dos mandamientos separados — es uno solo en dos direcciones. Amar a Dios sin amar al prójimo es hipocresía religiosa. Amar al prójimo sin amar a Dios es filantropía sin fundamento. El amor cristiano siempre tiene las dos direcciones a la vez.</p>
        <p><span class="lec-tag">Aplicación pactual a Eli:</span> esto le ayuda a ordenar su vida. Cuando se pregunte "¿qué debo hacer?", la respuesta no es una regla específica para cada situación — es preguntarse: <em>¿esto ama a Dios y ama al prójimo?</em> Esa pregunta cubre todo.</p>
        <p><span class="lec-tag">Conexión con el catecismo:</span> P14 dice "obedecer y amar". Hoy aprendemos que esos dos verbos son uno solo. La obediencia que Dios pide no es cumplimiento mecánico — es amor. Y el amor no es sentimentalismo — es la disposición real del corazón hacia Dios y hacia el prójimo, expresada en hechos.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que esto suene a "sé buena con todos" (moralismo). El centro no es la conducta — es el AMOR como afecto formado por el evangelio. Amamos porque Él nos amó primero (1 Jn 4:19).</p>
        <p><span class="lec-tag">Lo que estás formando:</span> Eli aprende que toda la Biblia tiene un centro: amor. Y ese amor tiene dos brazos: arriba (a Dios) y al lado (al prójimo).</p>
        <div class="lec-bible">"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo. De estos dos mandamientos depende toda la ley y los profetas." — Mateo 22:37-40</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque tu Palabra se resume en amor. Que Eli aprenda hoy a leer toda la Biblia con esta clave. Amén.
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
            <div class="guia-say">P14: ¿En dónde aprendes a obedecer y amar a Dios?<br>R: Solamente en la Biblia.</div>
            <p>Pregunta de enlace:</p>
            <div class="guia-say">"Ayer aprendimos que la Biblia es donde Dios nos enseña. Hoy vamos a aprender la pregunta que ordena toda la Biblia: si tuvieras que resumirla en pocas palabras, ¿qué dice? Jesús mismo nos dio la respuesta."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración · La pregunta a Jesús <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Un día, un hombre que sabía mucho de la Biblia se acercó a Jesús con una pregunta difícil. Le preguntó: '¿Cuál es el mandamiento más grande de todos?' Era una pregunta para ver si Jesús se equivocaba. Pero Jesús contestó con dos cosas, no una. Y son las dos cosas más importantes de toda la Biblia."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Lectura · Mateo 22:37-40 <span class="edc-mark E">E</span> · 3 min</div>
            <div class="guia-bible"><span class="guia-bible-ref">Mateo 22:37-40</span>"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo. De estos dos mandamientos depende toda la ley y los profetas."</div>
            <div class="guia-say">"¿Lo escuchaste? Jesús dijo que TODA la Biblia depende de estos DOS mandamientos: amar a Dios + amar al prójimo. No uno solo — los dos."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Los dos brazos del amor <span class="edc-mark D">D</span> · 2 min</div>
            <p>Pídele a Eli que extienda los brazos en cruz.</p>
            <div class="guia-say">"Mira tus brazos. Tienes un brazo hacia arriba (señala al cielo) — ese es para amar a Dios. Y otro brazo hacia el lado (señala a alguien al lado) — ese es para amar al prójimo. Los DOS brazos juntos hacen una cruz. La cruz de Jesús nos enseña los dos amores."</div>
            <p>Pregunta:</p>
            <div class="guia-say">"¿Quién es tu prójimo, Eli? ¿Solo los que viven cerca? No. Tu prójimo es cualquier persona que Dios pone en tu camino. Papá. Mamá. La abuela. La amiga de la iglesia. La señora del aseo. Todos son prójimo."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · La pregunta para tu día <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"Cuando no sepas qué hacer, hazte dos preguntas: ¿Esto ama a Dios? ¿Esto ama al prójimo? Si las dos respuestas son SÍ, vas bien. Si una respuesta es NO, hay que pensar otra vez."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor, gracias porque toda tu Palabra se resume en amor. Ayuda a Eli a amarte a ti y a amar a los que pones en su vida. Amén."</div>
            <p>Eli recita la cadena P11+P12+P13+P14.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Solo recuerda uno de los dos amores</td><td>Repetir con los brazos: "arriba a Dios, al lado al prójimo". Memoria física.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recuerda los dos amores. No los aplica a su día</td><td>Pregunta: <em>"¿Algo que hiciste hoy ama a Dios? ¿Al prójimo?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que toda la Biblia se resume en amar a Dios y al prójimo</td><td>Registrar. Lista para Sola Scriptura mañana.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Semana 4, Día 2, profundizando Catecismo CPN P14
- Hoy texto principal: Mateo 22:37-40 (los dos mandamientos)
- Foco: toda la Biblia se resume en amar a Dios y al prójimo

CONTENIDO (A4 vertical):
1. Encabezado: "Los dos amores"
2. Ilustración central: una cruz con flechas — la vertical etiquetada "AMAR A DIOS" hacia arriba, la horizontal etiquetada "AMAR AL PRÓJIMO" hacia los lados. Estilo line-art simple, dorado y violeta.
3. Cinta con Mateo 22:40: "De estos dos mandamientos depende toda la ley."
4. Dos cajas pequeñas:
   • "Una cosa para amar a Dios hoy" — 3 líneas guía
   • "Una cosa para amar al prójimo hoy" — 3 líneas guía
5. Recuadro 10×8 cm: "Dibuja a alguien que Dios puso en tu vida para amar (tu prójimo)"
6. Cinta inferior dorada: "Amarás al Señor tu Dios... y amarás a tu prójimo como a ti mismo. — Mateo 22:37,39"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema violeta + dorado
- Estilo digno, reverente, contemplativo
- No usar caricaturas exageradas, colores neón ni estética infantil saturada
- No usar imágenes que pretendan representar a Dios, halos, rayos místicos

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
          <li>Leer Mateo 22:37-40</li>
          <li>Eli extiende los brazos en cruz — "arriba a Dios, al lado al prójimo"</li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📋</div><div><div class="act-ttl">Plan del día</div><div class="act-meta">Nuevo recurso / consolidación · Suma con regletas · Gén 3 narración</div></div></div>
<div class="act-body"><div class="strip s-sage">Nuevo recurso / consolidación · Suma con regletas · Narración de Gén 3</div></div></div>`,

jueves:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P14 · Día 3 — "Solamente la Biblia" (Sola Scriptura) ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P14 · Día 3 — "Solamente la Biblia"</div>
      <div class="lesson-meta">10–12 min · Sola Scriptura · La Palabra como lámpara</div>
      <div class="mats"><span class="mat">Biblia (NBLA)</span><span class="mat">Catecismo CPN</span><span class="mat">Linterna o vela (opcional)</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El ángulo de hoy:</span> hoy enfocamos la palabra clave del catecismo — <strong>"solamente"</strong>. Esta es la doctrina de Sola Scriptura formulada para una niña de 6 años. La Biblia es la fuente <em>única, suficiente y autoritativa</em> del conocimiento de Dios y de su voluntad. No suma. No complemento. <strong>Solamente.</strong></p>
        <p><span class="lec-tag">Por qué los Reformadores lucharon por esto:</span> en la época de la Reforma, la Iglesia Romana sostenía que la Biblia + Tradición de la Iglesia juntas eran la fuente de autoridad. Calvino, Lutero, los puritanos vieron que esto efectivamente quita autoridad a la Palabra de Dios. Si "Biblia + algo más" gobierna, entonces ese "algo más" termina gobernando sobre la Biblia. La única manera de que la Palabra sea autoridad final es: <strong>solamente</strong> la Palabra.</p>
        <p><span class="lec-tag">Las tres atribuciones de la Escritura:</span> Sola Scriptura está conectada con tres confesiones reformadas — la Escritura es <em>necesaria</em> (sin ella no conocemos a Dios), <em>suficiente</em> (no falta nada para vivir según Dios), y <em>autoritativa</em> (es la voz de Dios que está sobre toda otra voz). Hoy Eli aprende esto en forma simple.</p>
        <p><span class="lec-tag">Salmo 119:105 como imagen central:</span> "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." En tiempos antiguos no había luz eléctrica. Una lámpara era literalmente lo único que iluminaba el camino de noche. Si no la tenías, te perdías o te caías. Esa es la imagen: la Biblia es la luz que ilumina cómo vivir. Sin ella, andamos en oscuridad.</p>
        <p><span class="lec-tag">Calvino sobre la suficiencia:</span> "La Escritura es como anteojos: para los miopes, los anteojos correctos revelan claramente lo que sin ellos se ve borroso. Así la Biblia revela claramente a Dios — quien sin ella se ve borroso aunque exista." Eli no necesita anteojos literales, pero la imagen de Calvino funciona: la Biblia es los anteojos para ver a Dios bien.</p>
        <p><span class="lec-tag">Peligro a evitar:</span> que Sola Scriptura suene a "solo importa lo que dice la Biblia, no la iglesia ni los pastores". No es así. La iglesia ENSEÑA la Biblia, no le añade nada. Los pastores predican la Palabra, no inventan doctrina. Sola Scriptura sostiene la autoridad de la Biblia <em>sobre</em> la iglesia, no la elimina.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> conciencia de que la Biblia tiene autoridad. Reflejo de ir a la Palabra antes que a los sentimientos. Reverencia ante el texto.</p>
        <div class="lec-bible">"Lámpara es a mis pies tu palabra, y lumbrera a mi camino." — Salmo 119:105 &nbsp;·&nbsp; "Cierto es que la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos." — Hebreos 4:12</div>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias porque tu Palabra es lámpara. Que Eli aprenda hoy a usar la Biblia como su luz, no sus sentimientos ni sus dudas. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">10–12 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Demostración · La oscuridad <span class="edc-mark E">E</span> · 3 min</div>
            <p>Si puedes, oscurece una habitación. Camina con Eli unos pasos. Quizá tropiece. Luego enciende una linterna o vela.</p>
            <div class="guia-say">"¿Ves qué difícil es caminar en oscuridad? Pero cuando hay luz, todo cambia. Ahora ves dónde pisas. Lo mismo dice la Biblia sobre la Palabra de Dios — es la luz que nos muestra cómo caminar en la vida."</div>
            <p>Lee:</p>
            <div class="guia-bible"><span class="guia-bible-ref">Salmo 119:105</span>"Lámpara es a mis pies tu palabra, y lumbrera a mi camino."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Repaso de P14 + énfasis en "solamente" <span class="edc-mark E">E</span> · 2 min</div>
            <p>Eli recita la P y R:</p>
            <div class="guia-say">P14: ¿En dónde aprendes a obedecer y amar a Dios?<br>R: Solamente en la Biblia.</div>
            <div class="guia-say">"Hoy quiero que escuches bien la palabra <strong>'solamente'</strong>. ¿Por qué Dios no nos dio muchos libros para conocerlo? ¿Por qué solo uno?"</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Doctrina · Por qué "solamente" <span class="edc-mark D">D</span> · 3 min</div>
            <div class="guia-say">"Imagina que tuvieras 100 libros con cosas distintas sobre Dios. ¿Cómo sabrías cuál creer? Sería un lío. Por eso Dios nos dio una sola Biblia, y dijo: 'Esto es mi voz. Cualquier otra cosa que te digan, comparen con esto.' La Biblia es la regla — no las otras voces."</div>
            <p>Aplicación concreta:</p>
            <div class="guia-say">"Cuando un amiguito te diga 'Dios es así o asá', ¿cómo sabes si es verdad? Lo comparas con la Biblia. Cuando sientas algo en tu corazón, ¿cómo sabes si es de Dios? Lo comparas con la Biblia. Tu corazón puede engañarte. La Biblia no."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">La Biblia es SUFICIENTE <span class="edc-mark D">D</span> · 2 min</div>
            <div class="guia-say">"También 'solamente' significa que la Biblia tiene <strong>todo</strong> lo que necesitamos. No le falta nada. Para conocer a Dios, para saber qué hacer con el pecado, para saber cómo orar, para saber cómo amar — todo está allí. No necesitamos más."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Aplicación · El hábito diario <span class="edc-mark D">D</span> · 1 min</div>
            <div class="guia-say">"Por eso leemos la Biblia todos los días. No es una tarea más — es como abrir la luz de la mañana. Es cómo Dios nos habla cada día."</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">6</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración + cadena <span class="edc-mark E">E</span> · 1 min</div>
            <div class="guia-say">"Señor, gracias porque tu Palabra es nuestra luz. Que Eli aprenda a buscar respuestas en tu Biblia primero. Amén."</div>
            <p>Eli recita cadena P11+P12+P13+P14.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>No entiende por qué "solamente". Confunde Biblia con otros libros</td><td>Repetir la demostración de oscuridad y luz. Visual memorable.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Entiende que la Biblia es especial pero no articula la unicidad</td><td>Pregunta: <em>"¿Qué pasa si alguien dice algo distinto a la Biblia?"</em></td></tr>
        <tr class="C"><td class="lvl">C</td><td>Articula que la Biblia es la regla sobre todo lo demás, incluida su propia opinión</td><td>Registrar. Lista para síntesis del viernes.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli</span><span class="lsec-sub">opcional</span></div>
      <div class="ficha-eli">
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible breve en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado.

CONTEXTO:
- Semana 4, Día 3, profundizando Catecismo CPN P14 ("Solamente en la Biblia")
- Hoy: Sola Scriptura simplificada — la Biblia como ÚNICA regla
- Texto: Salmo 119:105 (lámpara y lumbrera)

CONTENIDO (A4 vertical):
1. Encabezado: "Solamente la Biblia"
2. Ilustración central: una Biblia abierta con un rayo de luz claro saliendo, iluminando un camino. Estilo line-art, sobrio, dorado y violeta.
3. Cinta con Salmo 119:105: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
4. Sección "Lo que la Biblia me dice" — pequeño marco con 4 líneas: "Que Dios __________ / Que yo __________ / Que el pecado __________ / Que Jesús __________"
5. Recuadro pregunta: "¿Por qué la Biblia es ESPECIAL? ¿Qué significa 'solamente'?" — 4 líneas guía
6. Cinta inferior dorada: "Toda la Escritura es inspirada por Dios. — 2 Timoteo 3:16"

DISEÑO VISUAL:
- Fondo crema (#FAF6F0)
- Tema violeta + dorado
- Estilo digno y reverente, contemplativo
- No usar caricaturas exageradas, colores neón ni estética infantil saturada
- No usar imágenes que pretendan representar a Dios, halos, rayos místicos
- Letra mín. 16pt

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
A4 vertical 1:1.414, alta resolución, espacios en blanco visibles.

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
          <li>Oscurecer cuarto un momento + encender linterna</li>
          <li>Repaso P14 con énfasis en "SOLAMENTE"</li>
          <li>Leer Salmo 119:105</li>
          <li>Una frase: <em>"La Biblia es mi lámpara. Solamente ella."</em></li>
          <li>Listo.</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico azul">📋</div><div><div class="act-ttl">Plan del día</div><div class="act-meta">Lectura con nuevo recurso · Suma Mamut Sumar 1 p.2 · Ciencias exp.62 Polución</div></div></div>
<div class="act-body"><div class="strip s-sage">Lectura con nuevo recurso · Suma Mamut Sumar 1 p.2 · Ciencias exp.62 Polución</div></div></div>`,

viernes:`${APERTURA}

<!-- ═══════════════ BLOQUE 1: CATECISMO P14 · Día 4 — Síntesis + ⭐ Portafolio (cierre del primer ciclo) ═══════════════ -->
<div class="lesson">
  <div class="lesson-hd">
    <div class="lesson-ico violeta">✝️</div>
    <div>
      <div class="lesson-ttl">Catecismo CPN P14 · Día 4 — Síntesis + ⭐ Hoja de portafolio</div>
      <div class="lesson-meta">25 min · Cierre del primer ciclo P11→P14 + hoja final</div>
      <div class="mats"><span class="mat">Biblia</span><span class="mat">Catecismo CPN</span><span class="mat">Hoja del prompt IA</span><span class="mat">Colores</span></div>
    </div>
  </div>
  <div class="lesson-body">

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📖</span><span class="lsec-ttl">Lectura para mamá</span><span class="lsec-sub">3 min</span></div>
      <div class="lec-mama">
        <p><span class="lec-tag">El propósito del viernes:</span> hoy se cierra <strong>el primer ciclo de 4 preguntas</strong> del catecismo (P11→P14). Eli ha vivido un mes entero aprendiendo doctrina pactual — una pregunta por semana, profundizada cada día. Este viernes es doblemente significativo: cierre de P14 + cierre del bloque inicial.</p>
        <p><span class="lec-tag">Los 3 ángulos de esta semana:</span></p>
        <p>• <strong>Día 1 (Martes)</strong>: 2 Timoteo 3:16 — toda la Escritura es inspirada.<br>• <strong>Día 2 (Miércoles)</strong>: Mateo 22:37-40 — los dos amores resumen toda la Biblia.<br>• <strong>Día 3 (Jueves)</strong>: Salmo 119:105 — Sola Scriptura (la Biblia como única lámpara).<br>• <strong>Día 4 (Viernes — hoy)</strong>: síntesis + portafolio.</p>
        <p><span class="lec-tag">La cadena completa P11-P14 — primer mes:</span> esta es la arquitectura que Eli ha estado construyendo:</p>
        <p>• <strong>P11</strong>: Dios <em>mira</em> (omnipresencia)<br>• <strong>P12</strong>: Dios <em>sabe</em> (omnisciencia)<br>• <strong>P13</strong>: Dios <em>puede</em> (omnipotencia)<br>• <strong>P14</strong>: Lo conocemos <em>solamente en su Palabra</em> (Sola Scriptura)</p>
        <p>Esa es la doctrina de Dios + la doctrina de la revelación, sintetizadas para una niña de 6 años. <strong>Esto es lo mejor de la tradición reformada.</strong></p>
        <p><span class="lec-tag">Evaluación final:</span> mamá pregunta "¿Qué aprendiste este mes sobre Dios y su Palabra?" — y escucha. Si Eli articula los 4 atributos + Sola Scriptura, [C]. Si articula 3, [D]. Si menos, [E]. Esta es información para mamá sobre el progreso, no para Eli.</p>
        <p><span class="lec-tag">Lo que estás formando:</span> primera síntesis doctrinal sólida. Memoria larga (4 semanas de una verdad cada una). Hábito de portafolio cumulativo.</p>
        <div class="lec-prayer">
          <span class="pry-lbl">Oración antes de enseñar</span>
          Señor, gracias por este primer mes. Que Eli salga con tu Palabra escrita en el corazón. Que las 4 preguntas que aprendió la acompañen toda la vida. Amén.
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">🧑‍🏫</span><span class="lsec-ttl">Guía de la lección</span><span class="lsec-sub">25 min</span></div>
      <div class="guia">

        <div class="guia-step">
          <div class="guia-step-n">1</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Cadena completa del primer mes P11→P14 <span class="edc-mark C">C</span> · 5 min</div>
            <p>Eli dice las cuatro P y R seguidas, sin ayuda. Si lo logra: ⭐ <strong>celebración con todo</strong> — aplausos, abrazo, dulce. Este es el logro más grande del mes.</p>
            <div class="guia-say">P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.<br><br>P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.<br><br>P13: ¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.<br><br>P14: ¿En dónde aprendes a obedecer y amar a Dios? — Solamente en la Biblia.</div>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">2</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Narración libre de esta semana <span class="edc-mark C">C</span> · 5 min</div>
            <div class="guia-say">"Eli, cuéntame todo lo que aprendiste esta semana sobre que aprendemos a obedecer a Dios solamente en la Biblia."</div>
            <p>Mamá escucha sin interrumpir. Identifica:</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>¿Mencionó "toda la Escritura es inspirada" (2 Ti 3:16)? (Día 1 ✓)</li>
              <li>¿Mencionó los dos amores — Dios + prójimo (Mt 22)? (Día 2 ✓)</li>
              <li>¿Mencionó "solamente" / la lámpara (Sal 119)? (Día 3 ✓)</li>
            </ul>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">3</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Conversación sobre el primer mes completo <span class="edc-mark C">C</span> · 3 min</div>
            <div class="guia-say">"Eli, en este primer mes aprendimos cuatro cosas grandes sobre Dios y la Biblia. ¿Cuál es tu favorita? ¿Por qué?"</div>
            <p>Eli responde libremente. Mamá escucha — eso revela qué se quedó MÁS en el corazón. Si dice algo confuso, no corrijas duro — pregunta más.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">4</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">⭐ Hoja de portafolio del mes <span class="edc-mark C">C</span> · 10 min · Evidencia central del primer mes</div>
            <p>Saca la hoja impresa del prompt al final. Esta es la hoja MÁS importante del año hasta ahora — resumen del primer ciclo doctrinal.</p>
            <ul style="margin:6px 0 6px 1.2rem;font-size:.86rem">
              <li>Eli escribe su nombre y fecha en grande</li>
              <li>Copia las 4 preguntas en sus respectivas cajas</li>
              <li>Dibuja algo en cada sección</li>
              <li>Mamá firma la hoja</li>
            </ul>
            <p>La hoja entra al portafolio en una posición destacada — se puede plastificar o ponerla en la portada del sobre del primer mes.</p>
          </div>
        </div>

        <div class="guia-step">
          <div class="guia-step-n">5</div>
          <div class="guia-step-body">
            <div class="guia-step-ttl">Oración de cierre del primer mes <span class="edc-mark E">E</span> · 2 min</div>
            <div class="guia-say">"Señor, gracias por este primer mes. Eli ahora sabe que tú miras (P11), conoces (P12), puedes (P13), y que te conocemos solamente en tu Palabra (P14). Que estas verdades estén con ella siempre. Que la próxima semana sigamos aprendiendo. En el nombre de Jesús. Amén."</div>
          </div>
        </div>

      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">📋</span><span class="lsec-ttl">Evaluación E/D/C del primer mes</span></div>
      <table class="eval-tabla">
        <tr><th>Nivel</th><th>Señal</th><th>Acción</th></tr>
        <tr class="E"><td class="lvl">E</td><td>Recita memorizada 1-2 P/R. Olvida resto. Articula solo 1-2 ángulos del mes</td><td>Repasar todo el ciclo durante un mes adicional como encadenado. NO desanimar.</td></tr>
        <tr class="D"><td class="lvl">D</td><td>Recita 3 de las 4 P/R. Narra los conceptos generales de cada semana</td><td>Avanzar a P15. Repaso encadenado diario incluyendo P11-P14.</td></tr>
        <tr class="C"><td class="lvl">C</td><td>Cadena P11-P14 perfecta. Articula la arquitectura: Dios mira+sabe+puede+habla en Palabra</td><td>⭐ Celebración del primer mes. Portafolio destacado. Lista para P15.</td></tr>
      </table>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">✏️</span><span class="lsec-ttl">Ficha para Eli · ⭐ Hoja del primer mes</span></div>
      <div class="ficha-eli">
        <p><strong>Hoja resumen del primer ciclo P11-P14 — esta es LA hoja del primer mes</strong></p>
        <div class="prompt-claude">
          <div class="prompt-claude-hd">
            <span class="prompt-claude-ttl">🤖 Prompt para IA generadora</span>
            <button class="prompt-claude-copy" onclick="copyPromptInline(this)">📋 Copiar prompt</button>
          </div>
          <div class="prompt-claude-body">Necesito crear una hoja imprimible "resumen del primer mes" en español para mi hija Elisabeth ("Eli"), de 6 años. Marco reformado pactual. Esta hoja se conserva en su portafolio durante años — debe verse como una lámina coleccionable.

CONTEXTO:
- Es el viernes de la Semana 4. Cierra el PRIMER CICLO de catecismo (4 preguntas en 4 semanas)
- Esta hoja celebra y consolida un mes de doctrina
- Las 4 preguntas con sus respuestas EXACTAS:
  P11: ¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente.
  P12: ¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios.
  P13: ¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad.
  P14: ¿En dónde aprendes a obedecer y amar a Dios? — Solamente en la Biblia.
- Esta hoja se PLASTIFICA o se pone en lugar destacado del portafolio

CONTENIDO DE LA HOJA (A4 vertical, una página, diseño tipo cuadro coleccionable):
1. Encabezado principal: "Mi primer mes con el Catecismo"
2. Sub-encabezado: "Lo que aprendí de Dios y su Palabra"
3. Datos: "Familia Espinoza · Eli · mayo–junio 2026"
4. Cuatro cuadros del mismo tamaño organizados en 2×2, cada uno con su número y un icono pequeño:
   • Cuadro P11 (icono 👁️ ojo): "¿Puedes ver a Dios? — Yo no puedo verlo, pero Él me mira continuamente."
   • Cuadro P12 (icono 🧠 saber): "¿Sabe Dios todas las cosas? — Sí, ninguna cosa puede ocultarse de la vista de Dios."
   • Cuadro P13 (icono 🤚 mano poderosa): "¿Puede Dios hacer todo? — Sí, Dios puede hacer todo conforme a su santa y soberana voluntad."
   • Cuadro P14 (icono 📖 Biblia abierta): "¿En dónde aprendes a obedecer y amar a Dios? — Solamente en la Biblia."
5. Cinta central conectando los 4 cuadros: "Dios MIRA · Dios SABE · Dios PUEDE · Y nos habla en su PALABRA"
6. Pequeño espacio inferior: "Mi favorita esta semana fue P___ porque ____________________" (1 línea)
7. Espacio firmas grande: "Eli — firma:" + "Mamá — firma:" + "Fecha: ___"
8. Cinta de pie dorada: "Toda la Escritura es inspirada por Dios. — 2 Timoteo 3:16"

DISEÑO VISUAL:
- Fondo crema cálido (#FAF6F0)
- Tema: violeta (#6B3FAA) profundo en los marcos de los cuadros, dorado (#C49A2A) en cintas
- Los 4 cuadros: cada uno con un color de fondo distinto pero suave (violeta pálido, azul muy suave, verde muy suave, dorado pálido) — para que se distingan visualmente
- Estilo: ELEGANTE, contemplativo, NO infantil saturado — esta hoja debe verse como joya
- Tipografía: Georgia clásica para las P y R, sans-serif limpia para datos
- Iconos minimalistas, line-art dorado o violeta
- Bordes decorativos finos en cada cuadro
- Letra mín. 12pt para las respuestas (para que quepan), 16pt para las preguntas
- Layout claro y simétrico — esta hoja se enseña a familiares y se conserva

OUTPUT SEGÚN LA IA USADA:

Si la IA genera imagen:
Crear una imagen vertical A4, proporción 1:1.414, alta resolución, lista para imprimir, con los 4 cuadros distribuidos en grid 2×2, espacios en blanco visibles donde Eli debe escribir, estilo de "diploma" o "memoria de aprendizaje".

Si la IA genera HTML:
Crear un artifact HTML completo con CSS embebido, A4 vertical, imprimible sin márgenes. PRIORIDAD: que se vea como cuadro coleccionable, no como tarea escolar.

Si la IA genera PDF:
Crear una ficha PDF A4 vertical estilo lámina coleccionable, lista para imprimir y conservar.

No responder con explicación. Generar directamente la ficha.</div>
        </div>
      </div>
    </div>

    <div class="lsec">
      <div class="lsec-hd"><span class="lsec-emoji">⚡</span><span class="lsec-ttl">Versión mínima</span></div>
      <div class="minima">
        <div class="minima-ttl">Lo esencial — 10 minutos</div>
        <ol>
          <li>Eli intenta la cadena P11→P14 completa</li>
          <li>Mamá pregunta: <em>"¿Cuál es tu favorita de las 4 y por qué?"</em></li>
          <li>Si no hay hoja impresa: cuaderno con las 4 preguntas escritas y un dibujo</li>
          <li>Oración de cierre del mes</li>
          <li>Celebración (un dulce, un abrazo largo, lo que sea — esto vale la pena celebrar)</li>
          <li>Listo. (Hoja portafolio puede hacerse el sábado.)</li>
        </ol>
      </div>
    </div>

  </div>
</div>
<div class="act-block">
<div class="act-hd"><div class="act-ico dorado">🔄</div><div><div class="act-ttl">Repaso semanal · P11–P29 cadena · Portafolio · Diagnóstico</div><div class="act-meta">40 min</div></div></div>
<div class="act-body">
<p>Repaso semanal · Intentar cadena P11–P29 completa · Seleccionar evidencia para portafolio · Registrar diagnóstico de ruta lectoescritura.</p>
</div></div>`
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
