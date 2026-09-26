window.pageTranslations = {
  es: {
    caseNavBrief: "Reto", caseNavMethod: "Metodología", caseNavResults: "Resultados", caseNavLimits: "Limitaciones", caseNavFiles: "Entregables", caseNavPortfolio: "Portafolio",
    backPortfolio: "← Volver al portafolio de estrategia e investigación de mercados", caseKicker: "Caso pharma 01 · Tamaño de mercado", caseTitle: "Market sizing de hidradenitis supurativa en México.", caseDeck: "Un marco bayesiano y clínicamente explícito que convierte evidencia epidemiológica fragmentada en un escenario transparente de mercado tratado.", seeResults: "Ver resultados",
    geography: "Geografía", therapyArea: "Área terapéutica", immunoderm: "Inmunología · Dermatología", evidenceCut: "Corte de evidencia", sept2026: "Septiembre de 2026", tooling: "Herramientas",
    prevalentP50: "Población prevalente · P50", diagnosedP50: "Proxy diagnosticada · P50", moderateP50: "Diagnosticada moderada/severa · P50", persistentP50: "Pacientes-año persistentes públicos · P50",
    briefLabel: "El reto", briefTitle: "Prevalencia no es mercado tratado.", briefLede: "La pregunta comercial no era solamente cuántas personas viven con HS. Era cuántas podrían llegar y persistir plausiblemente en un biológico dentro del sector público mexicano, y cómo distribuir la oportunidad entre moléculas con indicaciones superpuestas.",
    briefQ1: "¿Cuántas personas viven con HS?", briefA1: "Transportar evidencia global heterogénea a la estructura por edad y sexo de México.", briefQ2: "¿Cuántas son clínicamente visibles?", briefA2: "Modelar inicio, duración, retraso diagnóstico y severidad.", briefQ3: "¿Cuántas llegan al tratamiento?", briefA3: "Hacer explícita e incierta cada transición de acceso público.", briefQ4: "¿Qué molécula podría atenderlas?", briefA4: "Separar HS de indicaciones competidoras y escenarios de lanzamiento.",
    decisionUse: "Uso para decisión", decisionUseText: "El resultado es un rango de planeación para evaluar la oportunidad, priorizar identificación de pacientes y generar evidencia; no una afirmación de demanda, ventas o participación observadas.",
    methodLabel: "Metodología", methodTitle: "Un modelo conectado, cinco módulos explícitos.", methodIntro: "Cada módulo responde una pregunta distinta y transfiere la incertidumbre completa —no sólo un estimado puntual— a la siguiente etapa.",
    observed: "Observado", observedText: "Conteos directos de estudios o datos poblacionales.", transported: "Transportado", transportedText: "Parámetros clínicos adaptados desde poblaciones externas.", assumed: "Supuesto de escenario", assumedText: "Priors editables de acceso cuando los datos mexicanos no son observables.",
    method1Tag: "Arquitectura de evidencia", method1Title: "Mantener separada la evidencia no comparable", method1Text: "La verosimilitud principal utiliza 247 casos con confirmación clínica entre 22,743 participantes de 23 países GHiSA bajo un protocolo armonizado. Estudios telefónicos, de claims y hospitalarios de Latinoamérica permanecen como benchmarks porque miden constructos distintos.", countries: "países", participants: "participantes", confirmedCases: "casos confirmados",
    method2Tag: "Prevalencia bayesiana", method2Title: "Estimar riesgo por edad y sexo y postestratificar a México", method2Text: "Un modelo jerárquico binomial-logit combina efectos de país con patrones regularizados de edad y sexo. Cada draw posterior se pondera con la pirámide mexicana de 2024 y recibe un efecto explícito de transportabilidad para un país no observado directamente.",
    method3Tag: "Journey clínico-demográfico", method3Title: "Vincular diagnóstico con duración de enfermedad, no sólo con edad", method3Text: "Perfiles sintéticos combinan inicio bimodal, edad actual y tiempo log-normal al diagnóstico. La severidad usa un prior Dirichlet descontado con evidencia comunitaria. El modelo no supone que toda persona mayor es automáticamente grave.", method3Note: "La sensibilidad prueba retrasos diagnósticos medios de 7, 10 y 14 años y mezclas alternativas de severidad.",
    method4Tag: "Acceso público", method4Title: "Modelar los cuellos de botella en lugar de inventar demanda", method4Text: "Como no fue observable una serie nacional de demanda negociada, entrega, dispensación o recetas privadas por indicación, el modelo usa priors Beta-PERT editables para actividad, falla convencional, compatibilidad clínica, cobertura pública, especialista, inicio y persistencia.",
    method5Tag: "Molécula e indicación", method5Title: "Asignar pacientes tratados sin dividir ventas entre indicaciones", method5Text: "Un escenario Dirichlet asigna pacientes-año persistentes entre adalimumab, secukinumab y bimekizumab. Pools separados por indicación estiman la participación potencial de HS en moléculas multiindicación. Los escenarios actual y de lanzamiento permanecen separados.",
    benefitsLabel: "Por qué este enfoque", benefitsTitle: "El modelo es útil porque estructura su incertidumbre.", benefitsIntro: "El objetivo no es complejidad por sí misma. Es evitar falsa precisión y conservar una estimación accionable y fácil de actualizar.",
    benefit1Title: "Sólo evidencia comparable", benefit1Text: "Evita promediar de forma ingenua encuestas, claims y expedientes hospitalarios que estiman poblaciones distintas.", benefit2Title: "Estructura específica de México", benefit2Text: "Usa la pirámide mexicana por edad y sexo en vez de asignar enfermedad aleatoriamente a un total nacional.", benefit3Title: "Incertidumbre de punta a punta", benefit3Text: "Propaga 50,000 draws por prevalencia, diagnóstico, severidad, acceso y asignación molecular.", benefit4Title: "Supuestos transparentes", benefit4Text: "Etiqueta lo observado, transportado y supuesto para que la revisión cuestione los inputs correctos.", benefit5Title: "Outputs para decidir", benefit5Text: "Muestra dónde se pierden pacientes y qué parámetro mejoraría más la estimación comercial.", benefit6Title: "Diseñado para actualizarse", benefit6Text: "Demanda, dispensación, recetas o validación experta pueden reemplazar priors sin reconstruir el modelo.",
    resultsLabel: "Resultados", resultsTitle: "Un rango epidemiológico amplio se convierte en una hipótesis específica de acceso.", resultsIntro: "Usa el control de cuantiles para revisar cada etapa. Los valores son vistas marginales P10, P50 y P90 para planeación, no tres cohortes deterministas.", lower: "Bajo", central: "Central", upper: "Alto",
    clinicalFunnel: "Funnel clínico", fromDisease: "De enfermedad subyacente a pool clínicamente visible", clinicalNote: "El diagnóstico se condiciona a la duración modelada; el estado moderado/severo es una distribución incierta separada.", truePrevalent: "HS prevalente verdadera", diagnosedProxy: "Proxy diagnosticada", diagnosedModSev: "Diagnosticada moderada/severa",
    publicAccess: "Acceso público", fromEligible: "De pool clínico a pacientes-año persistentes", accessNote: "Las pérdidas más relevantes para la decisión ocurren en evaluación por especialista e inicio de biológico; ambas son supuestos hasta contar con calibración mexicana.", publicPool: "Pool clínico del sector público", specialist: "Evaluada por especialista", initiated: "Biológico iniciado", persistent: "Pacientes-año persistentes",
    prevalenceRange: "Rango de prevalencia en México", posteriorTitle: "Escenarios predictivos posteriores de planeación", posteriorCaption: "La amplitud refleja heterogeneidad entre países y la ausencia de un estudio poblacional mexicano comparable, no sólo precisión muestral.",
    moleculeMix: "Asignación molecular", patientYearsP50: "Pacientes-año persistentes P50", current: "Actual", launch: "Lanzamiento", moleculeCaption: "El cero actual de bimekizumab es estructural: no se observó un ancla mexicana de incorporación pública para HS. No implica uso privado igual a cero.",
    delay7: "Diagnosticada con retraso medio de 7 años", delay10: "Diagnosticada con retraso medio de 10 años", delay14: "Diagnosticada con retraso medio de 14 años",
    limitsLabel: "Interpretación", limitsTitle: "Lo que el resultado puede —y no puede— sustentar.", limit1Title: "Sin estudio nacional mexicano de prevalencia", limit1Text: "La evidencia GHiSA se transporta mediante postestratificación demográfica y un término explícito de incertidumbre de país.", limit2Title: "Diagnóstico y severidad son proxies", limit2Text: "Ambos provienen de cohortes no mexicanas, se descuentan por indirectitud y se prueban en sensibilidad.", limit3Title: "El acceso es prior-predictivo", limit3Text: "No existe una serie nacional verificada de demanda, entrega, dispensación o recetas que condicione el funnel público.", limit4Title: "La mezcla molecular no es market share", limit4Text: "Es una asignación de escenario de pacientes-año potenciales, no ventas, compras ni pacientes tratados observados.",
    bestNextEvidence: "Siguiente evidencia de mayor valor", nextEvidenceTitle: "Calibrar con demanda, adjudicación y entrega por institución y presentación.", nextEvidenceText: "El modelo está construido para que estas observaciones actualicen los priors de acceso público. Conteos de recetas o pacientes por indicación serían la segunda adición más valiosa.",
    filesLabel: "Entregable", filesTitle: "El libro de evidencia permanece disponible para revisión.", filesIntro: "El Excel descargable contiene los inputs, outputs, diagnósticos y tablas de auditoría que sustentan el caso.", workbookTitle: "Libro de evidencia y escenarios", workbookText: "Inputs, outputs, diagnósticos y tablas de auditoría.",
    caseContactTitle: "¿Necesitas una respuesta transparente a un problema con datos incompletos?", caseContactText: "Construyo modelos de decisión que hacen visibles la evidencia, los supuestos y la incertidumbre.", moreCases: "Más casos →"
  }
};

const quantileData = {
  p10: { prevalent: 305713, diagnosed: 209776, moderate: 95420, public: 32871, specialist: 7803, initiated: 1856, persistent: 1184 },
  p50: { prevalent: 1175928, diagnosed: 805897, moderate: 377822, public: 130332, specialist: 32623, initiated: 8174, persistent: 5204 },
  p90: { prevalent: 4389377, diagnosed: 3007357, moderate: 1437556, public: 507556, specialist: 132211, initiated: 34293, persistent: 22069 }
};

const moleculeData = {
  current: { adalimumab: 4408, secukinumab: 716, bimekizumab: 0 },
  launch: { adalimumab: 3487, secukinumab: 1047, bimekizumab: 420 }
};

const numberFormat = new Intl.NumberFormat("en-US");

document.querySelectorAll("[data-quantile]").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.quantile;
    document.querySelectorAll("[data-quantile]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    Object.entries(quantileData[selected]).forEach(([key, value]) => {
      const node = document.querySelector(`[data-result="${key}"]`);
      if (node) node.textContent = numberFormat.format(value);
    });
  });
});

document.querySelectorAll("[data-scenario]").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.scenario;
    const values = moleculeData[selected];
    const max = Math.max(...Object.values(values));
    document.querySelectorAll("[data-scenario]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    Object.entries(values).forEach(([key, value]) => {
      const number = document.querySelector(`[data-molecule="${key}"]`);
      const bar = document.querySelector(`[data-molecule-bar="${key}"]`);
      if (number) number.textContent = numberFormat.format(value);
      if (bar) bar.style.setProperty("--width", `${max ? (value / max) * 100 : 0}%`);
    });
  });
});
