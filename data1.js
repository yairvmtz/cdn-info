

$(document).ready(function () {
	


	const nombresCarrera =
	{
		administracion: "Lic. en Administración de Empresas",
		contaduria: "Lic. en Contaduría Pública",
		informatica: "Lic. en Informática Administrativa",
		derecho: "Lic. en Derecho",
		pedagogia: "Lic. en Pedagogía",
		arquitectura: "Lic. en Arquitectura",
		lengua_inglesa: "Lic. en Lengua Inglesa",
		relaciones_industriales: "Lic. en Relaciones Industriales",
		administracion_negocios_internacionales: "Lic. en Administración de Negocios Internacionales",
		mercadotecnia: "Lic. en Mercadotecnia y Publicidad",
		empresas_turisticas: "Lic. en Administración de Empresas Turísticas"


	}





	const semestres = [
		{ id: "primero", nombre: "Primer semestre", logo: "images/primero.svg" },
		{ id: "segundo", nombre: "Segundo semestre", logo: "images/segundo.svg" },
		{ id: "tercero", nombre: "Tercer semestre", logo: "images/tercero.svg" },
		{ id: "cuarto", nombre: "Cuarto semestre", logo: "images/cuarto.svg" },
		{ id: "quinto", nombre: "Quinto semestre", logo: "images/quinto.svg" },
		{ id: "sexto", nombre: "Sexto semestre", logo: "images/sexto.svg" },
		{ id: "septimo", nombre: "Septimo semestre", logo: "images/septimo.svg" },
		{ id: "octavo", nombre: "Octavo semestre", logo: "images/octavo.svg" },

	]


	const datosDetalleCarrera =

	{
		administracion: [
			{
				descripcion: '<br><h3>¿Qué es un Lic. en Administración de Empresas?</h3>' +
					'<p class="text-justify"> ' +
					'El Licenciado en Administración de Empresas es el profesional cuyos conocimientos ' +
					'sobre las diversas herramientas administrativas le permiten diseñar y aplicar en' +
					'la práctica las estrategias que requiere una empresa para alcanzar con éxito sus' +
					'objetivos en el entorno competitivo actual.</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'• Organizaciones privadas de servicios, industriales y comerciales, sector gubernamental ' +
					'y profesional independiente en: Planeación y Dirección Estratégica, Finanzas y Presupuestos,' +
					'Desarrollo Organizacional, Mercadotecnia, Comercio Exterior, Personal, Relaciones Públicas, ' +
					'Producción, Control de Calidad, Investigación de Mercados, Ejecutivo de Banca y Bolsa, ' +
					'Consultor Empresarial.<br>' +
					'• Investigación y docencia en instituciones de educación superior.',
				logo: "images/ADMINISTRACION.svg",
				primero: [
					"Contabilidad Básica",
					"Teoría Económica",
					"Introducción a la Informática",
					"Matemáticas Básicas",
					"Administración",
					"Metodología de la Investigación"
				],
				segundo: [
					"Sistemas de Contabilidad",
					"Microeconomía",
					"Sistemas de Cómputo",
					"Administrativos",
					"Matemáticas Financieras",
					"Proceso Administrativo",
					"Introducción al Estudio del Derecho"
				],
				tercero: [
					"Macroeconomía",
					"Estadística Descriptiva",
					"Contabilidad Intermedia",
					"Introducción a los Costos",
					"Administración de Mercadotecnia",
					"Derecho Mercantil",
				],
				cuarto: [
					"Estadística Inferencial",
					"Investigación de Mercados",
					"Comunicación Orgainizacional",
					"Organización de Empresas",
					"Administración de Personal",
					"Títulos y Operaciones de Crédito",
				],
				quinto: [
					"Derecho Fiscal",
					"Capacitación y Desarrollo de Personal",
					"Dirección",
					"Introducción a las Finanzas",
					"Modelos Operacionales",
					"Dirección de Mercadotecnia",
				],
				sexto: [
					"Planeación Estratágica",
					"Evaluación de Personal",
					"Evaluación de Proyectos de Inversión",
					"Estrategias de Promoción",
					"Contabilidad Administrativa",
					"Comportamiento Humano en las Organizaciones",
				],
				septimo: [
					"Control de Gestión",
					"Comercio Exterior",
					"Estructura Financiera",
					"Administración de Sueldos y Salarios",
					"Administración de la Producción",
					"Seminario de ética",
				],
				octavo: [
					"Derecho Laboral",
					"Desarrollo Organizacional",
					"Auditoría Administrativa",
					"Administración de la Calidad",
					"Relaciones Públicas",
					"Sistemas Financieros",
				]

			}],
		contaduria: [
			{
				descripcion: '<h3>¿Qué es un Lic. en Contaduría Pública?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Contaduría Pública es el profesional cuya preparación ' +
					'le permite manejar eficazmente todo lo relacionado con los procesos contables,' +
					'administrativos, económicos, financieros y fiscales de cualquier empresa o institución,' +
					'tomando decisiones acertadas y contribuyendo al logro de los objetivos de la organización ' +
					'de manera óptima. Asimismo está capacitado para expresar su opinión profesional sobre ' +
					'los estados financieros e información financiera en general de cualquier entidad económica.</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-left"> ' +
					'• Empresas e instituciones públicas y privadas: Contralor, Auditor Interno, Asesor' +
					'Bursátil, Tesorero, Ejecutivo de Banca y Bolsa, Etc.<br>' +
					'• Profesional independiente: Asesor Contable y Financiero, Auditor Independiente,' +
					'   Asesor Fiscal, Etc.<br>' +
					'• Docencia e investigación en instituciones de educación superior.' +
					'			  </p>',
				logo: "images/contador.svg",
				primero: [
					"Contabilidad Básica",
					"Teoría Económica",
					"Introducción a la Informática",
					"Matemáticas Básicas",
					"Administración",
					"Metodología de la Investigación",
				],
				segundo: [
					"Sistemas de Contabilidad",
					"Microeconomía",
					"Sistemas de Cómputo Administrativos",
					"Matemáticas Financieras",
					"Proceso Administrativo",
					"Introducción al Estudio del Derecho",
				],
				tercero: [
					"Macroeconomía",
					"Estadística Descriptiva",
					"Contabilidad Intermedia",
					"Introducción a los Costos",
					"Administración de Mercadotecnia",
					"Derecho Mercantil"
				],
				cuarto: [
					"Estadística Inferencial",
					"Contabilidad de Sociedades",
					"Sistemas de Costos I",
					"Organización de Empresas",
					"Administración de Personal",
					"Títulos y Operaciones de Crédito"
				],
				quinto: [
					"Derecho Fiscal",
					"Auditoría de Estados Financieros",
					"Sistemas de Costos II",
					"Introducción a las Finanzas",
					"Modelos Operacionales",
					"Contabilidad Superior",
				],
				sexto: [
					"Contabilidades Especiale",
					"ISR Personas Morale",
					"Evaluación de Proyectos de Inversió",
					"Control Interno y Auditorí",
					"Contabilidad Administrativ",
					"Contabilidad Internacional",
				],
				septimo: [
					"ISR Personas Físicas",
					"Dictámenes e Informes de Auditoría",
					"Estructura Financiera",
					"Organización Contable",
					"Administración de la Producción",
					"Seminario de Ética",
				],
				octavo: [
					"Derecho Laboral",
					"Seguridad Social",
					"Seminario de Fiscal",
					"Reexpresión de Estados Financieros",
					"Auditoría Gubernamental",
					"Sistemas Financieros",
				]
			}
		],
		informatica: [
			{
				descripcion: '<h3>¿Qué es un Lic. en Informática Administrativa?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Informática Administrativa es el profesional que en forma interdisciplinaria ' +
					'es capaz de planear, organizar, dirigir y controlar sistemas de información en interacción' +
					'con las diferentes áreas de las empresas e instituciones: Contabilidad, Mercadotecnia, Recursos ' +
					'Humanos, Finanzas, Producción, Tesorería, etc.; de crear, desarrollar, mantener e implementar ' +
					'software de aplicación para la adecuada toma de decisiones en las organizaciones modernas, de ' +
					'proponer alternativas para solucionar los problemas que se presenten relacionados con el ' +
					'procesamiento y elaboración de información y de seleccionar y administrar equipos de cómputo ' +
					'en la creación y mantenimiento de centros de información.' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-left"> ' +
					'• Organizaciones privadas y gubernamentales: Como Asesor, Director, Gerente, Auditor Interno,' +
					'Líder de Proyecto, Jefe de Centros de Información, Analista de Sistemas, Capacitador de Recursos Humanos.<br>' +
					'• Profesional Independiente: Consultor, Asesor, Auditor Externo en todo lo relacionado con recursos ' +
					'Informáticos de las organizaciones.<br>' +
					'• Docencia e investigación en instituciones de educación superior.' +
					'			  </p>',

				logo: "images/informatica.svg",
				primero: [
					"Contabilidad Básica",
					"Teoría Económica",
					"Introducción a la Informática",
					"Matemáticas Básicas",
					"Administración ",
					"Metodología de la Investigación",
				],
				segundo: [
					"Sistemas de Contabilidad",
					"Microeconomía",
					"Sistemas de Cómputo Administrativos",
					"Matemáticas Financieras",
					"Proceso Administrativo ",
					"Introducción al Estudio del Derecho",
				],
				tercero: [
					"Diseño Estructurado de Algoritmos",
					"Introducción a los Costos",
					"Macroeconomía",
					"Estadística Descriptiva",
					"Administración de Mercadotecnia",
					"Derecho Mercantil",
				],
				cuarto: [
					"Estructura de Datos",
					"Arquitectura de Computadoras",
					"Organización de Empresas",
					"Estadística Inferencial",
					"Administración de Personal",
					"Derecho Informático",
				],
				quinto: [
					"Programación Estructurada",
					"Sistemas Operativos",
					"Dirección",
					"Introducción a las Finanzas",
					"Modelos Operacionales",
					"Redes",
				],
				sexto: [
					"Planeación Estratégica",
					"Evaluación de Personal",
					"Evaluación de Proyectos de Inversión",
					"Bases de Datos",
					"Contabilidad Administrativa",
					"Programación Orientada a Objetos",
				],
				septimo: [
					"Control de Gestión",
					"Ingeniería de Software",
					"Programación de Dispositivos Móviles",
					"Administración de Sueldos y Salarios",
					"Administración de la Producción",
					"Seminario de Ética",
				],
				octavo: [
					"Desarrollo Organizacional",
					"Auditoría Administrativa",
					"Administración de la Calidad",
					"Gestión y Auditoria  Informática",
					"Sistemas de Información Administrativos",
					"Derecho Laboral",
				]
			}
		],
		derecho: [
			{
				descripcion: '<h3>¿Qué es un Lic. en Derecho?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Derecho es el profesional cuyos conocimientos, habilidades y' +
					'destrezas le permiten entender a fondo la problemática de las relaciones ' +
					'existentes entre derecho y sociedad, aplicar la legislacion vigente en defensa ' +
					'de los derechos individuales y sociales, conciliar y/o enfrentar de manera ' +
					'eficaz las controversias que se le presenten y estudiar y criticar el orden ' +
					'jurídico existente a fin de estar en aptitud de proponer una mejor adecuación' +
					'de éste a las latentes y variables exigencias de la sociedad contemporánea.' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'• Instituciones y organizaciones privadas y gubernamentales: Asesor, Gestor,' +
					'Representante Jurídico y Fiscal, Juez, Magistrado, Agente del Ministerio' +
					'Público, Funcionario Legislativo y Asesor de grupos de esta naturaleza.<br>' +
					'• Profesional independiente: Abogado litigante de las diversas ramas del ' +
					'derecho como civil, mercantil, fiscal, penal, laboral, etc. Notario Público,' +
					'Corredor.<br>' +
					'• Docencia e investigación en instituciones de educación superior.' +
					'</p>',

				logo: "images/derecho.svg",
				primero: [
					"Derecho Civil y de Familia",
					"Derecho Romano",
					"Introducción al Estudio del Derecho",
					"Teoría Política ",
					"Teoría Económica",
					"Técnicas de Investigación Jurídica",
				],
				segundo: [
					"Sistemas Jurídicos Contemporáneos",
					"Derecho Reales y Sucesiones",
					"Teoría de la Constitución ",
					"Derecho Privado Romano",
					"Teoría del Derecho",
					"Teoría del Estado",
				],
				tercero: [
					"Obligaciones",
					"Derecho Constitucional Mexicano",
					"Derecho Penal y las Ciencias Penales",
					"Derecho Mercantil",
					"Derecho Administrativo",
					"Teoría General del Proceso",
				],
				cuarto: [
					"Contratos Civiles",
					"Garantías Constitucionales",
					"Teoría del Delito",
					"Títulos y Operaciones de Crédito",
					"Metodología Jurídica",
					"Derecho Internacional Público",
				],
				quinto: [
					"Derecho Procesal Civil",
					"Amparo",
					"Delitos en Particular",
					"Contratos Mercantiles",
					"Derecho Internacional Privado",
					"Derecho Fiscal",
				],
				sexto: [
					"Práctica Forense de Derecho Civil y Mercantil",
					"Proceso de Amparo",
					"Derecho Procesal Penal",
					"Derecho Laboral",
					"Derecho Electoral",
					"Derecho Procesal Administrativo y Fiscal",
				],
				septimo: [
					"Práctica Forense de Amparo",
					"Medicina Forense",
					"Concursos Mercantiles",
					"Derecho Procesal Laboral",
					"Argumentación Lógica y Jurídica ",
					"Filosofía del Derecho",
				],
				octavo: [
					"Práctica Forense de Derecho Penal",
					"Derecho Notarial",
					"Derecho Informático",
					"Seguridad Social",
					"Derecho Bancario y Bursátil",
					"Ética Jurídica",
				]
			}
		],
		pedagogia: [
			{
				descripcion: ' <h3>¿Qué es un Lic. en Pedagogía?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Pedagogía es el profesional cuyos conocimientos y habilidades' +
					'le permiten administrar correctamente el proceso educativo en todos sus niveles' +
					'(Básico, Medio Superior y Superior) en instituciones particulares y' +
					'gubernamentales, aplicando las bases teórico metodológicas de los' +
					'instrumentos y procedimientos más modernos de la Pedagogía. Es capaz de ' +
					'diseñar proyectos de investigación educativa y de aplicar en la práctica ' +
					'los resultados que tales investigaciones arrojen observando los paradigmas' +
					'predominantes de las principales corrientes ideológicas de las Ciencias de ' +
					'la Educación haciendo contribuciones propias en la materia. Conoce a fondo ' +
					'el proceso educativo y lo concibe como la permanente transformación del ser ' +
					'humano hacia un ideal de perfección y equidad de nuestra sociedad.' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-left"> ' +
					'• Instituciones educativas particulares y gubernamentales y como profesional ' +
					'independiente: Director o Administrador de Centros Educativos, Orientador ' +
					'Vocacional, Asesor de Desarrollo Humano, Diseño y Evaluación Curricular y' +
					'de Planes de Estudio, Controles Escolares, Elaboración de Programas de ' +
					'Formación y Actualización Docente, Laboral, Profesional y de Personal en' +
					'diversas organizaciones.<br>' +
					'• Docencia e investigación en instituciones educativas de cualquier tipo y nivel.' +
					'</p>',

				logo: "images/pedagogia.svg",
				primero: [
					'Introducción a la Pedagogía',
					'Sociología de la Educación',
					'Filosofía de la Educación',
					'Epistemología y Paradigmas de las Ciencias Sociales',
					'Psicología de la Educación',
					'Historia General de la Educación',
				],
				segundo: [
					'Pensamiento Pedagógico Contemporáneo',
					'Educación y Sociedad',
					'Ética',
					'Introducción a la Investigación Educativa',
					'Paradigmas Psicológicos y Educación',
					'Historia de la Educación en México',
				],
				tercero: [
					'Teoría Curricular',
					'Introducción a la Administración',
					'Teoría de la Orientación',
					'Métodos y Técnicas de  Investigación',
					'Psicología de la Infancia',
					'Educación Comparada',
				],
				cuarto: [
					'Diseño Curricular',
					'Administración de Instituciones Educativas',
					'Metodología de la Orientación',
					'Estadística Descriptiva',
					'Psicología de la Adolescencia y del Adulto',
					'Legsilación Educativa en México',
				],
				quinto: [
					'Evaluación Curricular',
					'Planeación Educativa',
					'Educación Especial',
					'Estadística Inferencial',
					'Pedagogía Diferencial',
					'Desarrollo Humano',
				],
				sexto: [
					'Didáctica General',
					'Supervisión Educativa',
					'Educación Permanente',
					'Metodología de la Investigación Educativa',
					'Evaluación de los Aprendizajes',
					'Comunicación y Educación',
				],
				septimo: [
					'Tecnología Educativa',
					'Control Total de Calidad de los Servicios Educativos',
					'Educación para Adultos',
					'Desarrollo Comunitario',
					'Análisis de la Práctica Docente',
					'Nuevas Tecnologías Aplicadas a la Educación',
				],
				octavo: [
					'Didáctica Crítica',
					'Estrategias de Gestión Directiva',
					'Temas Selectos de Orientación',
					'Dinámica de Grupos en Eduación',
					'Laboratorio de Docencia',
					'Diseño de Proyectos Didácticos',
				]
			}


		],
		arquitectura: [
			{
				descripcion: '<p class="mb-0 text-justify"> ' +
					'El Licenciado en Arquitectura es el profesional cuya formación le permite ' +
					'diseñar y construir proyectos arquitectónicos y urbano-arquitectónicos que' +
					'responden a las necesidades sociales integrando creativamente principios ' +
					'estéticos, teóricos, metodológicos y tecnológicos. Asimismo, está capacitado ' +
					'para resolver, con visión crítica, creativa e innovadora, los problemas del ' +
					'hábitat humano de manera integral preservando el medio natural y respetando ' +
					'el valor histórico del contexto físico y social. ' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-left"> ' +
					'• Organizaciones privadas, sector gubernamental y profesional independiente. ' +
					'Empresas constructoras: diseño arquitectónico, de mobiliario, de arquitectura' +
					'del paisaje, urbanismo, jardinería, supervisor de obras, diseñador y/o ' +
					'constructor independiente, restauración, remodelación y decoración de ' +
					'espacios existentes.' +
					'<br>' +
					'• Investigación y docencia en instituciones de educación superior.' +
					' </p>',

				logo: "images/arquitectura.svg",
				primero: [
					"Fundamentos del Diseño",
					"Geometría Básica",
					"Introducción a la Informática",
					"Matemáticas Básicas",
					"Introducción a la Arquitectura",
					"Metodología de la Investigación",
				],
				segundo: [
					"Geometría Descriptiva",
					"Dibujo Básico ",
					"Proceso Administrativo ",
					"Elementos de la Composición ",
					"Arquitectura en la Edad Antigua ",
					"Introducción a la Construcción ",
				],
				tercero: [
					'Metodología del Diseño Arquitectónico ',
					'Geometría Aplicada',
					'Dibujo Técnico ',
					'Arquitectura en la Edad Media ',
					'Conceptos Estructurales ',
					'Construcción: Obras Preliminares',

				],
				cuarto: [
					'Arquitectura y Función',
					'Arquitectura Moderna ',
					'Organización de Empresas',
					'Representación Arquitectónica',
					'Análisis y Diseño de Estructuras ',
					'Construcción: Cimentaciones',
				],
				quinto: [
					'Arquitectura y Espacio ',
					'Arquitectura Contemporánea',
					'Técnicas de Dibujo ',
					'Iniciación al Urbanismo ',
					'Diseño de Estructuras de Concreto ',
					'Construcción: Estructuras',
				],
				sexto: [
					'Arquitectura y Significado ',
					'Análisis de Costos y Presupuestos ',
					'Dibujo del Proyecto Arquitectónico ',
					'Análisis Urbano ',
					'Diseño de Estructuras de Acero y Madera',
					'Construcción: Acabados, Obra Exterior y Complementaria',
				],
				septimo: [
					'Arquitectura y Contexto ',
					'Informática en Arquitectura ',
					'Planeación y Diseño Urbano ',
					'Instalaciones Hidráulicas, Sanitarias, Eléctricas y de Gas',
					'Seminario de Ética',
					'Instalaciones Especiales',
				],
				octavo: [
					'Síntesis de Diseño Arquitectónico ',
					'Restauración Arquitectónica',
					'Visualización Avanzada',
					'Programación y Administración de Obras',
					'Diseño Urbano Ambiental ',
					'Proyectos Ejecutivos',
				]
			}

		],
		lengua_inglesa: [
			{
				descripcion: '<h3>¿Qué es un Lic. en Lengua Inglesa?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Lengua Inglesa es el profesional cuyas habilidades, ' +
					'conocimientos y dominio del idioma inglés le permiten realizar con eficiencia' +
					'y responsabilidad actividades de traducción, interpretación, investigación y ' +
					'docencia. Domina elementos lingüísticos gramaticales y sintácticos de la lengua' +
					'española e inglesa, las técnicas de interpretación simultánea y/o convencional' +
					'y cuenta con un amplio bagaje histórico, cultural y literario de los pueblos' +
					'de habla inglesa facilitando así la comunicación intercultural. ' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'• Organizaciones privadas de servicios, industriales y comerciales,' +
					'sector gubernamental y profesional independiente en: Traducción, ' +
					'Interpretación, Guía, Asesor y Consultor en todo lo relacionado con el ' +
					'dominio del idioma Inglés.' +
					'<br>' +
					'• Docencia e investigación en instituciones educativas de cualquier tipo y nivel.' +
					'			  </p>',

				logo: "images/lengua_inglesa.svg",
				primero: [
					"Inglés I",
					"Desarrollo Gramatical del Inglés I",
					"Español Básico ",
					"Historia General de la Educación",
					"Psicología de la Educación I",
				],
				segundo: [
					"Inglés II",
					"Desarrollo Gramatical del Inglés II",
					"Español Superior",
					"Psicología de la Educación II",
					"Introducción a la Investigación Educativa",
				],
				tercero: [
					"Desarrollo Gramatical del Inglés III",
					"Métodos y Técnicas de Investigación ",
					"Inglés III",
					"Lectura y Redacción ",
					"Corrientes Contemporáneas de la Lingüística",
				],
				cuarto: [
					"Inglés IV",
					"Redacción en Inglés ",
					"Redacción en Español ",
					"Ética",
					"Lingüística",
					"Cultura e Historia del Reino Unido",
				],
				quinto: [
					"Inglés V",
					"Redacción Aplicada en Inglés<",
					"Fonética y Fonología Inglesa",
					"Teoría de la Educación I",
					"Cultura e Historia de Norteamérica",
				],
				sexto: [
					"Inglés VI",
					"Teoría Literaria ",
					"Traducción Inglés-Español",
					"Teoría de la Educación II",
					"Interpretación",
				],
				septimo: [
					"Inglés VII ",
					"Gramática Comparada Inglés-Español",
					"Teoría y Práctica de la Enseñanza del Inglés I",
					"Literatura Inglesa",
					"Traducción Automatizada",
					"Interpretación Simultánea",
				],
				octavo: [
					"Inglés VIII",
					"Literatura Americana ",
					"Inglés para Propósitos Específicos ",
					"Teoría y Práctica de la Enseñanza del Inglés II",
					"Práctica de Traducción",
				]
			}

		],
		relaciones_industriales: [
			{
				descripcion: ' <h3>¿Qué es un Lic. en Relaciones Industriales?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Relaciones Industriales es el profesional capaz de conducir las' +
					'relaciones laborales de la empresa en un clima de armonía que propicie la calidad ' +
					'y productividad; así como el desarrollo integral del personal, administrando el ' +
					'esfuerzo humano y orientando su comportamiento en la organización logrando el ' +
					'desarrollo de una nueva cultura laboral en un marco de justicia y equidad.' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-left"> ' +
					'• Organizaciones privadas de servicios, industriales y comerciales, sector ' +
					'gubernamental y profesional independiente como: Director del área de recursos' +
					'humanos, Administrador de relaciones laborales, Conciliador de conflictos' +
					'laborales; Consultor, Asesor, etc. <br>' +
					'• Investigación y docencia en instituciones de educación superior.' +
					'			  </p>',

				logo: "images/relaciones_industriales.svg",
				primero: [
					"Contabilidad Básica",
					"Teoría Económica",
					"Introducción a la informática ",
					"Matemáticas Básicas",
					"Administración ",
					"Metodología de la Investigación",
				],
				segundo: [
					"Sistemas de Contabilidad",
					"Microeconomía ",
					"Sistemas de Cómputo Administrativos ",
					"Matemáticas Financieras ",
					"Proceso Administrativo ",
					"Introducción al Estudio del Derecho",
				],
				tercero: [
					"Macroeconomía ",
					"Estadística Descriptiva ",
					"Teoría de la Comunicación ",
					"Introducción a los Costos",
					"Administración de Mercadotecnia ",
					"Derecho Mercantil",
				],
				cuarto: [
					"Estadística Inferencial ",
					"Psicología Industrial ",
					"Comunicación Organizacional",
					"Organización de Empresas",
					"Administración de Personal ",
					"Títulos y Operaciones de Crédito ",
				],
				quinto: [
					"Administración de las Relaciones Laborales ",
					"Capacitación y Desarrollo de Personal ",
					"Dirección ",
					"Teoría de la Imagen ",
					"Modelos Operacionales ",
					"Motivación",
				],
				sexto: [
					"Planeación Estratégica",
					"Evaluación de Personal ",
					"Psicología de Grupos ",
					"Derecho Laboral ",
					"Contabilidad Administrativa",
					"Comportamiento Humano en las Organizaciones",
				],
				septimo: [
					"Control de Gestión ",
					"Seguridad e Higiene en el Trabajo ",
					"Conflictos Laborales ",
					"Administración de Sueldos y Salarios ",
					"Administración de la Producción ",
					"Seminario de Ética     ",
				],
				octavo: [
					"Desarrollo Organizacional ",
					"Auditoría Administrativa",
					"Administración de la Calidad",
					"Relaciones Públicas ",
					"Seguridad Social ",
					"Desarrollo Humano           ",
				]
			}

		],
		administracion_negocios_internacionales: [
			{
				descripcion: '<h3>¿Qué es un Lic. en Administración de Negocios Internacionales?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Administración de Negocios Internacionales  es el profesional ' +
					'cuya visión estratégica de las empresas le permite identificar las condiciones ' +
					'y oportunidades de negocios en un entorno global y local; sus conocimientos' +
					'sobre política comercial internacional, marco jurídico del comercio exterior ' +
					'y operaciones aduaneras contribuyen a mejorar y optimizar la actividad ' +
					'comercial y la resolución de problemas de los negocios internacionales.' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'• Organizaciones privados de servicios, industriales y comerciales, sector ' +
					'gubernamental y profesional independiente como: Director en empresas de ' +
					'exportación e importación de productos y servicios. Agente Aduanal, Asesor ' +
					'y Consultor de empresas de exportación e importación, etc.' +
					'<br>' +
					'• Docencia e investigación en instituciones de educación superior.' +
					'			  </p>',

				logo: "images/NEGOCIOS_INTERNACIONALES.svg",
				primero: [
					"Contabilidad Básica ",
					"Teoría Económica",
					"Introducción a la Informática",
					"Matemáticas Básicas",
					"Administración ",
					"Metodología de la Investigación",
				],
				segundo: [
					"Macroeconomía",
					"Estadística Descriptiva",
					"Derecho Internacional Público I",
					"Introducción a los Costos ",
					"Administración de Mercadotecnia ",
					"Derecho Mercantil",
				],
				tercero: [
					"Macroeconomía ",
					"Estadística Descriptiva ",
					"Teoría de la Comunicación ",
					"Introducción a los Costos",
					"Administración de Mercadotecnia ",
					"Derecho Mercantil",
				],
				cuarto: [
					"Estadística Inferencial ",
					"Investigación de Mercados ",
					"Derecho Internacional Público II",
					"Organización de Empresas",
					"Administración de Personal ",
					"Títulos y Operaciones de Crédito<",
				],
				quinto: [
					"Derecho Fiscal ",
					"Economía Internacional ",
					"Administración de Negocios Internacionales",
					"Introducción a las Finanzas ",
					"Modelos Operacionales ",
					"Derecho Internacional Privado",
				],
				sexto: [
					"Planeación Estratégica ",
					"Negociaciones Internacionales",
					"Evaluación de Proyectos de Inversión",
					"Régimen Jurídico del Comercio Exterior",
					"Contabilidad Administrativa",
					"Tratados y Acuerdos Comerciales Internacionales",
				],
				septimo: [
					"Estructura de Precios",
					"Comercio Exterior",
					"Estructura Financiera",
					"Derecho Aduanero",
					"Logística",
					"Seminario de Ética",
				],
				octavo: [
					"Relaciones Internacionales ",
					"Auditoría Administrativa",
					"Administración de la Calidad",
					"Nueva Formación de Bloques en el Mundo ",
					"Sistemas Financieros ",
					"Mercadotecnia Internacional",
				]
			}
		],
		mercadotecnia: [
			{
				descripcion: '<h3>¿Qué es un Lic. en Mercadotecnia y Publicidad?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Mercadotecnia y Publicidad es el profesional capaz de formular' +
					'planes estratégicos de mercadotecnia y de publicidad que logren armonizar los ' +
					'objetivos y recursos de la organización con las necesidades y oportunidades de ' +
					'la industria, el mercado y la sociedad para crear y mantener ventajas competitivas.' +
					'Sus conocimientos y habilidades le permiten dirigir y administrar con éxito todas ' +
					'las actividades relacionadas con la mercadotecnia y la publicidad con una filosofía' +
					'de innovación y cambio permanente adecuado al contexto actual.' +
					'</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'• Organizaciones privadas de servicios, industriales y comerciales, sector' +
					'gubernamental y profesional independiente como: Director en empresas dedicadas ' +
					'a la investigación de mercados, asesoría mercadológica, agencias de publicidad ' +
					'y comercializadoras de medios, asesor y consultor de una gran variedad de empresas' +
					'nacionales y multinacionales en el área de mercadotecnia, comercialización, ' +
					'ventas, promoción, relaciones públicas, imagen corporativa, publicidad,' +
					'diseño e investigación de productos; como Director en departamentos de ' +
					'comunicación de dependencias del sector público y privado.<br>' +
					'• Docencia e investigación en instituciones de educación superior.  ' +
					'			 </p>',

				logo: "images/marketing.svg",
				primero: [
					"Contabilidad Básica ",
					"Teoría Económica",
					"Introducción a la Informática",
					"Matemáticas Básicas ",
					"Administración ",
					"Metodología de la Investigación",
				],
				segundo: [
					"Sistemas de Contabilidad",
					"Microeconomía",
					"Sistemas de Cómputo Administrativos",
					"Matemáticas Financieras ",
					"Proceso Administrativo ",
					"Introducción al Estudio del Derecho",
				],
				tercero: [
					"Macroeconomía ",
					"Estadística Descriptiva ",
					"Teoría de la Comunicación ",
					"Introducción a los Costos ",
					"Administración de Mercadotecnia ",
					"Derecho Mercantil",
				],
				cuarto: [
					"Estadística Inferencial ",
					"Investigación de Mercados ",
					"Comunicación Organizacional ",
					"Organización de Empresas",
					"Administración de Personal ",
					"Psicología del Consumidor",
				],
				quinto: [
					"Comunicación de Masas",
					"Innovación de Productos ",
					"Canales de Distribución ",
					"Teoría de la Imagen ",
					"Modelos Operacionales ",
					"Dirección de Mercadotecnia",
				],
				sexto: [
					"Planeación Estratégica",
					"Marca",
					"Administración Publicitaria",
					"Estrategias de Promoción ",
					"Contabilidad Administrativa",
					"Medios Masivos de Comunicación",
				],
				septimo: [
					"Estructura de Precios ",
					"Comercio Exterior ",
					"Logística ",
					"Seminario de Ética",
					"Mercadotecnia Política",
					"Investigación de Medios Publicitarios",
				],
				octavo: [
					"Desarrollo Organizacional ",
					"Mercadotecnia de Servicios ",
					"Administración de la Calidad",
					"Relaciones Públicas ",
					"Mercadotecnia por Internet",
					"Mercadotecnia Internacional",
				]
			}

		],
		empresas_turisticas: [
			{
				descripcion: ' <h3>¿Qué es un Lic. en Administración de Empresas Turísticas?</h3>' +
					'<p class="mb-0 text-justify"> ' +
					'El Licenciado en Administración de Empresas Turísticas es el profesional que ' +
					'cuenta con los elementos teóricos, metodológicos y técnicos que le permiten ' +
					'desempeñarse con eficacia y eficiencia en la administración, dirección y ' +
					'planeación; en empresas, organizaciones e instituciones dedicadas a la ' +
					'promoción y prestación de servicios turísticos, así como en organismos ' +
					'públicos de gestión turística. Con capacidad para proponer alternativas ' +
					'que mejoren la actividad turística regional y local, nuevos desarrollos ' +
					'turísticos y turismo alternativo.</p>' +
					'<br><h3>¿Cuál es su campo de trabajo?</h3>' +
					'<p class="mb-0 text-left"> ' +
					'• Se desarrolla en las empresas del sector turístico, en donde puede desempeñarse' +
					'como: Ejecutivo del departamento de alimentos y bebidas; del departamento de división ' +
					'y cuartos; del departamento de mercadotecnia y ventas; del departamento de recursos ' +
					'humanos; del departamento de contraloría y finanzas; Responsable de calidad y servicios ' +
					'al cliente y de la administración y gestión de nuevos proyectos<br>' +
					'• Director y/o Ejecutivo en diversas empresas del sector turístico como: agencias de viajes,' +
					'líneas aéreas, restaurantes, hoteles, franquicias, desarrollos turísticos, centros de' +
					'diversión y otros servicios.<br>' +
					'• Consultor independiente en el área de servicios y negocios turísticos, emprender su' +
					'propia empresa en este sector y ocupar puestos directivos en empresas públicas o' +
					'privadas con el sector turístico a nivel nacional o internacional.' +
					'			  </p>',

				logo: "images/turisticas.svg",
				primero: [
					"Contabilidad Básica",
					"Teoría Económica",
					"Introducción a la Informática",
					"Matemáticas Básicas",
					"Administración",
					"Metodología de la Investigación",
				],
				segundo: [
					"Sistemas de Contabilidad",
					"Microeconomía",
					"Sistemas de Cómputo Administrativos",
					"Matemáticas Financieras",
					"Proceso Administrativo",
					"Introducción al Estudio del Derecho",
				],
				tercero: [
					"Teoría General del Turismo",
					"Introducción a los Costos",
					"Macroeconomía",
					"Estadística Descriptiva",
					"Administración de Mercadotecnia",
					"Derecho Mercantil",
				],
				cuarto: [
					"Investigación de Mercados",
					"Comunicación Organizacional",
					"Organización de Empresas",
					"Estadística Inferencial",
					"Administración de Personal",
					"Agencias de Viajes y Servicios de Transportación",
				],
				quinto: [
					"Legislación Turística",
					"Capacitación y Desarrollo de Personal",
					"Dirección",
					"Introducción a las Finanzas",
					"Patrimonio Geo-Turistico",
					"Dirección de Mercadotecnia",
				],
				sexto: [
					"Planeación Estratégica",
					"Evaluación de Personal",
					"Psicología de Grupos",
					"Estrategias de Promoción",
					"Contabilidad Administrativa",
					"Alimentos y Bebidas",
				],
				septimo: [
					"Control de Gestión",
					"Gastronomía y Enología",
					"Control de Alimentos y Bebidas",
					"Administración de Sueldos y Salarios",
					"Hotelería",
					"Seminario de Ética",
				],
				octavo: [
					"Desarrollo Organizacional",
					"Auditoría Administrativa",
					"Administración de la Calidad",
					"Relaciones Públicas",
					"Turismo Alternativo",
					"Derecho Laboral",
				]
			}

		]



	}

	var hamb = $('.hamburger');
	var header = $('.header');
	var hambActive = false;
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function () {
		setHeader();
	});

	$(document).on('scroll', function () {
		setHeader();
	});

	initHeroSlider();
	initSvg();
	initHamburger();
	initTestimonialsSlider();
	initParallax();



	function setHeader() {
		if (window.innerWidth < 992) {
			if ($(window).scrollTop() > 100) {
				header.addClass('scrolled');
			}
			else {
				header.removeClass('scrolled');
			}
		}
		else {
			if ($(window).scrollTop() > 100) {
				header.addClass('scrolled');
			}
			else {
				header.removeClass('scrolled');
			}
		}
		if (window.innerWidth > 991 && menuActive) {
			closeMenu();
		}
	}



	function initHeroSlider() {
		if ($('.hero_slider').length) {
			var owl = $('.hero_slider');

			owl.owlCarousel(
				{
					items: 1,
					loop: true,
					smartSpeed: 800,
					autoplay: true,
					nav: false,
					dots: false
				});


			function setAnimation(_elem, _InOut) {

				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each(function () {
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

					$elem.addClass($animationType).one(animationEndEvent, function () {
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

		
			owl.on('change.owl.carousel', function (event) {
				var $currentItem = $('.owl-item', owl).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation($elemsToanim, 'out');
			});

			owl.on('changed.owl.carousel', function (event) {
				var $currentItem = $('.owl-item', owl).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation($elemsToanim, 'in');
			})


			if ($('.hero_slider_left').length) {
				var owlPrev = $('.hero_slider_left');
				owlPrev.on('click', function () {
					owl.trigger('prev.owl.carousel');
				});
			}

			if ($('.hero_slider_right').length) {
				var owlNext = $('.hero_slider_right');
				owlNext.on('click', function () {
					owl.trigger('next.owl.carousel');
				});
			}
		}
	}



	function initSvg() {
		jQuery('img.svg').each(function () {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function (data) {
				
				var $svg = jQuery(data).find('svg');

				
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				
				$svg = $svg.removeAttr('xmlns:a');

				
				$img.replaceWith($svg);
			}, 'xml');
		});
	}



	function initHamburger() {
		if ($('.hamburger_container').length) {
			var hamb = $('.hamburger_container');

			hamb.on('click', function (event) {
				event.stopPropagation();

				if (!menuActive) {
					openMenu();

					$(document).one('click', function cls(e) {
						if ($(e.target).hasClass('menu_mm')) {
							$(document).one('click', cls);
						}
						else {
							closeMenu();
						}
					});
				}
				else {
					$('.menu_container').removeClass('active');
					menuActive = false;
				}
			});
		}
	}

	function openMenu() {
		var fs = $('.menu_container');
		fs.addClass('active');
		hambActive = true;
		menuActive = true;
	}

	function closeMenu() {
		var fs = $('.menu_container');
		fs.removeClass('active');
		hambActive = false;
		menuActive = false;
	}



	function initTestimonialsSlider() {
		if ($('.testimonials_slider').length) {
			var owl1 = $('.testimonials_slider');

			owl1.owlCarousel(
				{
					items: 1,
					loop: true,
					nav: false,
					autoplay: true,
					autoplayTimeout: 5000,
					smartSpeed: 1000
				});
		}
	}


	function initParallax() {
		// Add parallax effect to home slider
		if ($('.slider_prlx').length) {
			var homeBcg = $('.slider_prlx');

			var homeBcgScene = new ScrollMagic.Scene({
				triggerElement: homeBcg,
				triggerHook: 1,
				duration: "100%"
			})
				.setTween(TweenMax.to(homeBcg, 1, { y: '15%', ease: Power0.easeNone }))
				.addTo(ctrl);
		}

		
		if ($('.prlx_parent').length && $('.prlx').length) {
			var elements = $('.prlx_parent');

			elements.each(function () {
				var ele = this;
				var bcg = $(ele).find('.prlx');

				var slideParallaxScene = new ScrollMagic.Scene({
					triggerElement: ele,
					triggerHook: 1,
					duration: "200%"
				})
					.setTween(TweenMax.from(bcg, 1, { y: '-30%', ease: Power0.easeNone }))
					.addTo(ctrl);
			});
		}
	}



	const createAsignatures = function (carrera, semestre) {
		let contetSemestre = '<ul class="list-group list-group-flush">';

		if (datosDetalleCarrera[carrera] && datosDetalleCarrera[carrera].length === 1) {
			datosDetalleCarrera[carrera][0][semestre].forEach(materia => {
				contetSemestre += '<li class="list-group-item">' + materia + '</li>'
			})
			contetSemestre += '</ul>'
		} else {
			contetSemestre = '';
		}
		return contetSemestre;
	}


	const creacionVistaPlanEstudiosSemestre = function (carrera) {
		$('#data-carrer').empty();
		$('#nombre-carrera').empty();


		let contetCarrer = '<div class="row services_row">'
		contetCarrer += '<div class="col-lg-2 icon_container-carrer-big d-flex flex-column justify-content-end">'
		contetCarrer += '<img src="' + datosDetalleCarrera[carrera][0].logo + '" alt="">'
		contetCarrer += '</div>'
		contetCarrer += '<div class="col-lg-10 carrer-detail" >'
		contetCarrer += datosDetalleCarrera[carrera][0].descripcion
		contetCarrer += '</div>'
		semestres.forEach((semestre) => {
			contetCarrer += '<div class="col-lg-3 service_item text-left d-flex flex-column align-items-start justify-content-start">' +
				'<div id="' + carrera + '_' + semestre.id + '_data' + '" class="card d-flex flex-column justify-content-center" ">' +
				'	<div class="card-header">' +
				'<div class="icon_container-carrer d-flex flex-column justify-content-end">' +
				'<img src="' + semestre.logo + '" alt="">' +
				'</div>' +
				semestre.nombre +
				'</div>'
				+ (createAsignatures(carrera, semestre.id)) +
				'</div> ' + '</div> '
		});
		contetCarrer += ' </div>'
	
		$('#nombre-carrera').append(
			'<div class="col-lg-2 d-flex flex-column align-items-start justify-content-center">' +
			'<div class="logo">' +
			'<img src="images/logo.png" alt="">' +
			'</div>' +
			'</div>' +
			'<div class="col-lg-10  text-center d-flex flex-column align-items-center justify-content-center" >' +
			'<h2 class >Plan de estudios de ' + nombresCarrera[carrera] + '</h2>');
		'</div>' +
			$('#data-carrer').append(contetCarrer);
	}

	$("a").click(function ($event) {
		creacionVistaPlanEstudiosSemestre($event.target.id);
		$('#modal-detalle-carrera').modal('show')
	});


	// manejo de archivos de descarga para la sección de alumnos

	const listaDeArchivos = [
		{
			nombreUI: "CICLO 2023-2",
			rutaArchivo: "./documens/calendario23-2.pdf"
		},
		{
			nombreUI: "CICLO 2024-1",
			rutaArchivo: "./documens/calendario24-1.pdf"
		},
		{
			nombreUI: "PLANTEL XALAPA",
			rutaArchivo: "./reinscripcion_xalapa.html"
		},
		{
			nombreUI: "PLANTEL ORIZABA",
			rutaArchivo: "./reinscripcion_orizaba.html"
		}

	]

	const pobladoDeArchivosDocumento = function () {
		
		let contetSemestre= "";
		if ($('#descargables-admision').length) {
			$('#descargables-admision').empty();
			listaDeArchivos.forEach(archivo => {
				
				contetSemestre += '<li class="list-group-item main_nav_item"> <a href="'+archivo.rutaArchivo+'" target="_blank">'+archivo.nombreUI+'</a></li>'
			})
			$('#descargables-admision').append(contetSemestre);
		}
		




	}

	pobladoDeArchivosDocumento();



});
