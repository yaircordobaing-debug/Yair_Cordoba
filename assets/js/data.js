function getData() {
  const lang = localStorage.getItem('yc-lang') || 'es';

  const translations = {
    es: {
      profile: {
        name: "Yair Alexander Córdoba Palomeque",
        role: "Ingeniero de Sistemas & Investigador",
        tagline: "Todas las habilidades que necesitas en un solo lugar.",
        bio: "Potenciando el futuro a través de la ingeniería de sistemas, la investigación en el semillero SITEM y el desarrollo de software con propósito social y técnico.",
        email: "yair.cordoba.ing@gmail.com",
        github: "https://github.com/yaircordobaing-debug",
        linkedin: "https://www.linkedin.com/in/yair-cordoba/",
        codepen: "https://codepen.io/Yair-Cordoba",
        phone: "+57 300 818 7157",
        location: "Medellín, Colombia",
        education: [
          { degree: "Ingeniería de Sistemas", institution: "Politécnico Grancolombiano", year: "En curso" },
          { degree: "Misión TIC 2022", institution: "Universidad Tecnológica de Pereira (UTP)", year: "2022" }
        ]
      },
      projects: [
        {
          id: "autoproof-ia",
          title: "AutoProof Check IA",
          role: "Lead Developer",
          desc: "Solución de IA empresarial para el sector logístico que automatiza la inspección vehicular. Implementa firmas legales digitales, generación de reportes PDF y persistencia avanzada.",
          tech: "AI Integration, Supabase, PDF Engine",
          url: "https://github.com/yaircordobaing-debug/AutoProof-Check-IA",
          image: "../assets/images/project-ia.png",
          stars: "12",
          lastUpdate: "Abril 2026",
          tags: ["AI", "Python", "Enterprise"],
          details: {
            overview: "AutoProof Check IA es una herramienta diseñada para revolucionar el proceso de inspección de vehículos. Utiliza modelos de inteligencia artificial para detectar daños, procesar placas y generar documentos legales con firmas digitales en tiempo real.",
            architecture: "Basado en una arquitectura de microservicios con un core en Python para el procesamiento de IA y una capa de persistencia en Supabase. Utiliza workers asíncronos para la generación de reportes PDF pesados sin bloquear la UI.",
            stack: "Backend en Python (FastAPI), Base de Datos PostgreSQL via Supabase, Frontend en React y procesamiento de imágenes con OpenCV y TensorFlow.",
            keyPoints: [
              "Detección automática de daños mediante visión artificial.",
              "Firmas digitales con validez legal integradas.",
              "Sincronización en la nube inmediata."
            ]
          }
        },
        {
          id: "plancity",
          title: "PlanCity MVP 2.0",
          role: "Lead Architect",
          desc: "Plataforma social hiperlocal con CityFeed (estilo TikTok) y motor de descubrimiento urbano. Arquitectura sin servidor con dataset relacional masivo y soporte multirrol.",
          tech: "Next.js 16, TypeScript, Tailwind v4, Zustand, Framer Motion",
          url: "https://github.com/yaircordobaing-debug/PlanCity",
          image: "../assets/images/project-city.png",
          stars: "22",
          lastUpdate: "Abril 2026",
          tags: ["Next.js 16", "CityFeed", "TS"],
          details: {
            overview: "PlanCity es una plataforma social hiperlocal y motor de descubrimiento de ciudades. Este MVP 2.0 opera 100% como una plataforma funcional a través de un JSON Mock Masivo (plan_city_data.json), permitiendo flujos reales y experiencia de usuario asíncrona de alta fidelidad.",
            architecture: "Arquitectura moderna sin servidor físico tradicional. Utiliza una capa de abstracción de datos (lib/api.ts) que simula latencias de red y operaciones asíncronas sobre un dataset relacional masivo. Soporta un sistema de roles complejo (Administrador, Organizador, Turista, Artista) mediante un motor de permisos basado en JSON.",
            stack: "Next.js 16 (App Router) para SSR/ISR, TypeScript para modelado estricto, Tailwind CSS v4 para diseño atómico, Zustand para manejo de estado global (Zustand Stores) y Framer Motion para animaciones de grado nativo.",
            keyPoints: [
              "CityFeed inmersivo con scroll infinito estilo TikTok.",
              "Gestión multirrol simultánea por usuario.",
              "Módulo de pagos y validación de QR simulados.",
              "Estructura modular escalable lista para migración a SQL."
            ]
          }
        },
        {
          id: "algorithm-quest",
          title: "Algorithm Quest",
          role: "Software Engineer",
          desc: "SPA profesional para la visualización interactiva de algoritmos computacionales complejos. Herramienta educativa de alto rendimiento para estructuras de datos.",
          tech: "JavaScript, Algorithms, SPA",
          url: "https://github.com/yaircordobaing-debug/algorithm-quest-studio",
          image: "../assets/images/project-algo.png",
          stars: "15",
          lastUpdate: "Abril 2026",
          tags: ["EduTech", "Algorithms", "JS"],
          details: {
            overview: "Una plataforma diseñada para ingenieros y estudiantes que buscan entender visualmente el funcionamiento interno de algoritmos complejos como Dijkstra, A* y ordenamientos avanzados.",
            architecture: "Arquitectura basada en el patrón de diseño Observer para sincronizar el estado del algoritmo con la representación visual en el DOM. Implementa una máquina de estados para pausar, reanudar y ajustar la velocidad de ejecución.",
            stack: "Vanilla JavaScript (ES6+), CSS Grid para el lienzo de visualización, y algoritmos optimizados para minimizar el recalentamiento del DOM.",
            keyPoints: [
              "Ejecución paso a paso con explicación teórica integrada.",
              "Generador de casos de prueba aleatorios.",
              "Dashboard de rendimiento de complejidad Big O."
            ]
          }
        },
        {
          id: "webpulse-guardian",
          title: "WebPulse Guardian",
          role: "Security Researcher",
          desc: "Suite de observabilidad y seguridad para monitoreo de rendimiento web y detección de riesgos en tiempo real mediante análisis de telemetría.",
          tech: "JavaScript, Extension API, Security",
          url: "https://github.com/yaircordobaing-debug/WebPulse",
          image: "../assets/images/project-pulse.png",
          stars: "10",
          lastUpdate: "Abril 2026",
          tags: ["Security", "WebPerf", "JS"],
          details: {
            overview: "Una extensión de navegador que actúa como un centinela para la salud de las aplicaciones web, detectando fugas de memoria y riesgos de seguridad en tiempo real.",
            architecture: "Arquitectura de inyección de scripts segura que intercepta telemetría del navegador sin comprometer la privacidad. Utiliza un motor de reglas para identificar patrones de ataque conocidos.",
            stack: "Browser Extension API, JavaScript (Service Workers), y CSS dinámico para la capa de alertas 'Sentinel'.",
            keyPoints: [
              "Radar de riesgos de 5 ejes para evaluación inmediata.",
              "Detección predictiva de fugas de memoria (RAM).",
              "Auditoría de cookies y trackers en tiempo real."
            ]
          }
        },
        {
          id: "calculapro",
          title: "CalculaPro",
          role: "Full Stack Developer",
          desc: "Calculadora de derivadas interactiva de alto rendimiento. Implementa cálculo simbólico en tiempo real y visualización matemática avanzada.",
          tech: "MathJS, Vanilla JS, UI/UX",
          url: "https://github.com/yaircordobaing-debug/CalculaPro",
          image: "../assets/images/project-calc.png",
          stars: "8",
          lastUpdate: "Marzo 2026",
          tags: ["Math", "Tool", "JS"],
          details: {
            overview: "CalculaPro es una herramienta diseñada para estudiantes de ingeniería que necesitan validar procesos de derivación compleja con una interfaz fluida y profesional.",
            architecture: "Motor de procesamiento simbólico desacoplado de la UI, permitiendo cálculos instantáneos sin recarga de página.",
            stack: "Vanilla JavaScript (ES6), MathJS para álgebra simbólica y animaciones con CSS3.",
            keyPoints: [
              "Derivación paso a paso de funciones complejas.",
              "Soporte para múltiples variables.",
              "Interfaz minimalista de alta respuesta."
            ]
          }
        },
        {
          id: "calcfuerza",
          title: "Ley de Coulomb ⚡",
          role: "Physics Programmer",
          desc: "Simulador interactivo de fuerzas eléctricas con visualización animada de partículas y cálculo dinámico de campos vectoriales.",
          tech: "Physics Engine, Canvas, JS",
          url: "https://github.com/yaircordobaing-debug/CalcFuerzaElectrica",
          image: "../assets/images/project-physics.png",
          stars: "7",
          lastUpdate: "Febrero 2026",
          tags: ["Science", "Physics", "Visual"],
          details: {
            overview: "Simulador físico-matemático para la enseñanza de la electrostática, permitiendo la interacción directa con cargas eléctricas.",
            architecture: "Motor de partículas basado en vectores para representar fielmente las fuerzas de atracción y repulsión según la Ley de Coulomb.",
            stack: "HTML5 Canvas para el renderizado de partículas, JavaScript para el motor de física y CSS dinámico.",
            keyPoints: [
              "Visualización animada de vectores de fuerza.",
              "Manipulación de cargas en tiempo real.",
              "Resultados con precisión científica."
            ]
          }
        },
        {
          id: "optimath",
          title: "OptiMath 🚀",
          role: "Scientific Developer",
          desc: "Calculadora inteligente de optimización multivariable. Automatiza la búsqueda y clasificación de puntos críticos topológicos.",
          tech: "Numerical Analysis, JS, Plotly",
          url: "https://github.com/yaircordobaing-debug/multivariable-optimizer",
          image: "../assets/images/project-opt.png",
          stars: "14",
          lastUpdate: "Abril 2026",
          tags: ["Math", "Data", "Analysis"],
          details: {
            overview: "OptiMath es un optimizador de alto rendimiento que identifica máximos, mínimos y puntos de silla en superficies complejas.",
            architecture: "Algoritmos de análisis numérico para la detección de gradiente cero y clasificación mediante el determinante Hessiano.",
            stack: "JavaScript, MathJS para derivación parcial y Plotly para visualización de contornos.",
            keyPoints: [
              "Detección automática de puntos críticos.",
              "Clasificación Hessiana instantánea.",
              "Visualización topográfica interactiva."
            ]
          }
        },
        {
          id: "city-growth",
          title: "City Growth Dashboard",
          role: "Geospatial Analyst",
          desc: "Dashboard geoespacial en tiempo real para Medellín. Diseñado para potenciar PYMES del sector turístico mediante inteligencia de datos.",
          tech: "Leaflet, Data Vis, API Integration",
          url: "https://github.com/yaircordobaing-debug/city_growth",
          image: "../assets/images/project-map.png",
          stars: "11",
          lastUpdate: "Enero 2026",
          tags: ["Geo", "Dashboard", "Medellín"],
          details: {
            overview: "Prototipo de inteligencia urbana para la visualización de crecimiento comercial y flujo turístico en puntos estratégicos de Medellín.",
            architecture: "Integración de mapas interactivos con capas de datos dinámicas que representan el crecimiento comercial por zonas.",
            stack: "Leaflet.js para mapeo, GeoJSON para procesamiento de polígonos y CSS para el dashboard táctico.",
            keyPoints: [
              "Mapeo interactivo de zonas de alto impacto.",
              "Análisis de densidad comercial.",
              "Interfaz optimizada para la toma de decisiones."
            ]
          }
        },
        {
          id: "statcore",
          title: "StatCore Analysis",
          role: "Data Engineer",
          desc: "Ecosistema de análisis estadístico de alto rendimiento en el navegador. Procesamiento rápido de datos con interfaz ultra-limpia basada en Vite.",
          tech: "Vite, Vanilla JS, Statistics",
          url: "https://github.com/yaircordobaing-debug/statcore",
          image: "../assets/images/project-stat.png",
          stars: "5",
          lastUpdate: "Abril 2026",
          tags: ["Data", "Vite", "Analytics"],
          details: {
            overview: "StatCore es una herramienta ligera pero potente para científicos de datos que necesitan procesar sets de datos locales rápidamente sin subir información a la nube.",
            architecture: "Diseñado bajo un enfoque de 'Client-Side First'. Utiliza Web Workers para realizar cálculos estadísticos pesados en hilos secundarios, manteniendo la interfaz principal fluida.",
            stack: "Vite para el build dinámico, Vanilla JS para el motor de cálculo y Chart.js para la visualización de resultados.",
            keyPoints: [
              "Procesamiento de datasets CSV de hasta 50MB en el cliente.",
              "Gráficos interactivos generados en tiempo real.",
              "Exportación de reportes en formato PDF y Excel."
            ]
          }
        },
        {
          id: "lagrange-optimizer",
          title: "Multivariable Opt",
          role: "Scientific Programmer",
          desc: "Simulador matemático para la optimización multivariable utilizando multiplicadores de Lagrange. Visualización 3D de superficies y gradientes.",
          tech: "MathJS, Plotly, Science",
          url: "https://github.com/yaircordobaing-debug/simulador-optimizacion-lagrange",
          image: "../assets/images/project-math.png",
          stars: "6",
          lastUpdate: "Abril 2026",
          tags: ["Math", "3D", "Science"],
          details: {
            overview: "Herramienta educativa y profesional para resolver problemas de optimización con restricciones, visualizando geométricamente los puntos críticos.",
            architecture: "Implementa un motor de cálculo simbólico para derivar funciones en tiempo real y un renderizador de gráficos 3D interactivo.",
            stack: "MathJS para el análisis simbólico, Plotly.js para el renderizado 3D y JavaScript para la lógica de optimización.",
            keyPoints: [
              "Visualización de superficies y planos de restricción en 3D.",
              "Cálculo automático de gradientes y Hessianos.",
              "Interfaz amigable para la entrada de funciones matemáticas complejas."
            ]
          }
        }
      ]
    },
    en: {
      profile: {
        name: "Yair Alexander Córdoba Palomeque",
        role: "Systems Engineer & Researcher",
        tagline: "All the skills you need in one place.",
        bio: "Empowering the future through systems engineering, research at SITEM seedling, and software development with social and technical purpose.",
        email: "yair.cordoba.ing@gmail.com",
        github: "https://github.com/yaircordobaing-debug",
        linkedin: "https://www.linkedin.com/in/yair-cordoba/",
        codepen: "https://codepen.io/Yair-Cordoba",
        phone: "+57 300 818 7157",
        location: "Medellín, Colombia",
        education: [
          { degree: "Systems Engineering", institution: "Politécnico Grancolombiano", year: "In progress" },
          { degree: "Misión TIC 2022", institution: "Technological University of Pereira (UTP)", year: "2022" }
        ]
      },
      projects: [
        {
          id: "autoproof-ia",
          title: "AutoProof Check IA",
          role: "Lead Developer",
          desc: "Enterprise AI solution for the logistics sector that automates vehicle inspection. Implements digital legal signatures, high-fidelity PDF report generation, and advanced data persistence.",
          tech: "AI Integration, Supabase, PDF Engine",
          url: "https://github.com/yaircordobaing-debug/AutoProof-Check-IA",
          image: "../assets/images/project-ia.png",
          stars: "12",
          lastUpdate: "April 2026",
          tags: ["AI", "Python", "Enterprise"],
          details: {
            overview: "AutoProof Check IA is a tool designed to revolutionize the vehicle inspection process. It uses AI models to detect damage, process license plates, and generate legal documents with digital signatures in real-time.",
            architecture: "Based on a microservices architecture with a Python core for AI processing and a Supabase persistence layer. Uses asynchronous workers for heavy PDF report generation without blocking the UI.",
            stack: "Backend in Python (FastAPI), PostgreSQL Database via Supabase, Frontend in React, and image processing with OpenCV and TensorFlow.",
            keyPoints: [
              "Automatic damage detection via computer vision.",
              "Legal digital signatures integrated.",
              "Immediate cloud synchronization."
            ]
          }
        },
        {
          id: "plancity",
          title: "PlanCity MVP 2.0",
          role: "Lead Architect",
          desc: "Hyperlocal social platform with TikTok-style CityFeed and urban discovery engine. Serverless architecture with massive relational dataset and multi-role support.",
          tech: "Next.js 16, TypeScript, Tailwind v4, Zustand, Framer Motion",
          url: "https://github.com/yaircordobaing-debug/PlanCity",
          image: "../assets/images/project-city.png",
          stars: "22",
          lastUpdate: "April 2026",
          tags: ["Next.js 16", "CityFeed", "TS"],
          details: {
            overview: "PlanCity is a hyperlocal social platform and city discovery engine. This MVP 2.0 operates 100% as a functional platform through a Massive JSON Mock, allowing real flows and high-fidelity asynchronous user experience.",
            architecture: "Modern serverless architecture. Uses a data abstraction layer that simulates network latencies and asynchronous operations over a massive relational dataset. Supports a complex multi-role system.",
            stack: "Next.js 16 (App Router) for SSR/ISR, TypeScript for strict modeling, Tailwind CSS v4 for atomic design, Zustand for global state management, and Framer Motion for native-grade animations.",
            keyPoints: [
              "Immersive CityFeed with TikTok-style infinite scroll.",
              "Simultaneous multi-role management per user.",
              "Simulated payments and QR validation module.",
              "Scalable modular structure ready for SQL migration."
            ]
          }
        },
        {
          id: "algorithm-quest",
          title: "Algorithm Quest",
          role: "Software Engineer",
          desc: "Professional SPA for interactive visualization of complex computer algorithms. High-performance educational tool for data structures.",
          tech: "JavaScript, Algorithms, SPA",
          url: "https://github.com/yaircordobaing-debug/algorithm-quest-studio",
          image: "../assets/images/project-algo.png",
          stars: "15",
          lastUpdate: "April 2026",
          tags: ["EduTech", "Algorithms", "JS"],
          details: {
            overview: "A platform designed for engineers and students looking to visually understand the inner workings of complex algorithms like Dijkstra, A*, and advanced sorting.",
            architecture: "Architecture based on the Observer design pattern to sync algorithm state with visual representation in the DOM. Implements a state machine to pause, resume, and adjust execution speed.",
            stack: "Vanilla JavaScript (ES6+), CSS Grid for the visualization canvas, and algorithms optimized to minimize DOM layout thrashing.",
            keyPoints: [
              "Step-by-step execution with integrated theoretical explanation.",
              "Random test case generator.",
              "Big O complexity performance dashboard."
            ]
          }
        },
        {
          id: "webpulse-guardian",
          title: "WebPulse Guardian",
          role: "Security Researcher",
          desc: "Observability and security suite for web performance monitoring and real-time risk detection through telemetry analysis.",
          tech: "JavaScript, Extension API, Security",
          url: "https://github.com/yaircordobaing-debug/WebPulse",
          image: "../assets/images/project-pulse.png",
          stars: "10",
          lastUpdate: "April 2026",
          tags: ["Security", "WebPerf", "JS"],
          details: {
            overview: "A browser extension acting as a sentinel for web application health, detecting memory leaks and security risks in real-time.",
            architecture: "Secure script injection architecture that intercepts browser telemetry without compromising privacy. Uses a rule engine to identify known attack patterns.",
            stack: "Browser Extension API, JavaScript (Service Workers), and dynamic CSS for the 'Sentinel' alert layer.",
            keyPoints: [
              "5-axis risk radar for immediate evaluation.",
              "Predictive memory leak (RAM) detection.",
              "Real-time cookie and tracker auditing."
            ]
          }
        },
        {
          id: "calculapro",
          title: "CalculaPro",
          role: "Full Stack Developer",
          desc: "High-performance interactive derivative calculator. Implements real-time symbolic computation and advanced mathematical visualization.",
          tech: "MathJS, Vanilla JS, UI/UX",
          url: "https://github.com/yaircordobaing-debug/CalculaPro",
          image: "../assets/images/project-calc.png",
          stars: "8",
          lastUpdate: "March 2026",
          tags: ["Math", "Tool", "JS"],
          details: {
            overview: "CalculaPro is a tool designed for engineering students who need to validate complex derivation processes with a fluid and professional interface.",
            architecture: "Symbolic processing engine decoupled from the UI, allowing instant calculations without page reload.",
            stack: "Vanilla JavaScript (ES6), MathJS for symbolic algebra, and CSS3 animations.",
            keyPoints: [
              "Step-by-step derivation of complex functions.",
              "Support for multiple variables.",
              "Minimalist high-response interface."
            ]
          }
        },
        {
          id: "calcfuerza",
          title: "Coulomb's Law ⚡",
          role: "Physics Programmer",
          desc: "Interactive electric force simulator with animated particle visualization and dynamic vector field calculation.",
          tech: "Physics Engine, Canvas, JS",
          url: "https://github.com/yaircordobaing-debug/CalcFuerzaElectrica",
          image: "../assets/images/project-physics.png",
          stars: "7",
          lastUpdate: "February 2026",
          tags: ["Science", "Physics", "Visual"],
          details: {
            overview: "Physico-mathematical simulator for teaching electrostatics, allowing direct interaction with electric charges.",
            architecture: "Vector-based particle engine to faithfully represent attraction and repulsion forces according to Coulomb's Law.",
            stack: "HTML5 Canvas for particle rendering, JavaScript for the physics engine, and dynamic CSS.",
            keyPoints: [
              "Animated visualization of force vectors.",
              "Real-time charge manipulation.",
              "Scientific precision results."
            ]
          }
        },
        {
          id: "optimath",
          title: "OptiMath 🚀",
          role: "Scientific Developer",
          desc: "Smart multivariable optimization calculator. Automates the search and classification of topological critical points.",
          tech: "Numerical Analysis, JS, Plotly",
          url: "https://github.com/yaircordobaing-debug/multivariable-optimizer",
          image: "../assets/images/project-opt.png",
          stars: "14",
          lastUpdate: "April 2026",
          tags: ["Math", "Data", "Analysis"],
          details: {
            overview: "OptiMath is a high-performance optimizer that identifies maximums, minimums, and saddle points in complex surfaces.",
            architecture: "Numerical analysis algorithms for zero-gradient detection and classification using the Hessian determinant.",
            stack: "JavaScript, MathJS for partial derivation, and Plotly for contour visualization.",
            keyPoints: [
              "Automatic detection of critical points.",
              "Instant Hessian classification.",
              "Interactive topographic visualization."
            ]
          }
        },
        {
          id: "city-growth",
          title: "City Growth Dashboard",
          role: "Geospatial Analyst",
          desc: "Real-time geospatial dashboard for Medellín. Designed to empower tourism SMEs through data intelligence.",
          tech: "Leaflet, Data Vis, API Integration",
          url: "https://github.com/yaircordobaing-debug/city_growth",
          image: "../assets/images/project-map.png",
          stars: "11",
          lastUpdate: "January 2026",
          tags: ["Geo", "Dashboard", "Medellín"],
          details: {
            overview: "Urban intelligence prototype for visualizing commercial growth and tourism flow in strategic points of Medellín.",
            architecture: "Integration of interactive maps with dynamic data layers representing commercial growth by zones.",
            stack: "Leaflet.js for mapping, GeoJSON for polygon processing, and CSS for the tactical dashboard.",
            keyPoints: [
              "Interactive mapping of high-impact zones.",
              "Commercial density analysis.",
              "Interface optimized for decision making."
            ]
          }
        },
        {
          id: "statcore",
          title: "StatCore Analysis",
          role: "Data Engineer",
          desc: "High-performance browser-based statistical analysis ecosystem. Fast data processing with ultra-clean Vite-based interface.",
          tech: "Vite, Vanilla JS, Statistics",
          url: "https://github.com/yaircordobaing-debug/statcore",
          image: "../assets/images/project-stat.png",
          stars: "5",
          lastUpdate: "April 2026",
          tags: ["Data", "Vite", "Analytics"],
          details: {
            overview: "StatCore is a lightweight yet powerful tool for data scientists who need to process local datasets quickly without uploading information to the cloud.",
            architecture: "Designed with a 'Client-Side First' approach. Uses Web Workers for heavy statistical calculations in background threads, keeping the main UI fluid.",
            stack: "Vite for dynamic builds, Vanilla JS for the calculation engine, and Chart.js for result visualization.",
            keyPoints: [
              "Processing CSV datasets up to 50MB in the client.",
              "Real-time interactive charts.",
              "Export reports in PDF and Excel formats."
            ]
          }
        },
        {
          id: "lagrange-optimizer",
          title: "Multivariable Opt",
          role: "Scientific Programmer",
          desc: "Mathematical simulator for multivariable optimization using Lagrange multipliers. 3D visualization of surfaces and gradients.",
          tech: "MathJS, Plotly, Science",
          url: "https://github.com/yaircordobaing-debug/simulador-optimizacion-lagrange",
          image: "../assets/images/project-math.png",
          stars: "6",
          lastUpdate: "April 2026",
          tags: ["Math", "3D", "Science"],
          details: {
            overview: "Educational and professional tool for solving optimization problems with constraints, geometrically visualizing critical points.",
            architecture: "Implements a symbolic calculation engine to derive functions in real-time and an interactive 3D graphics renderer.",
            stack: "MathJS for symbolic analysis, Plotly.js for 3D rendering, and JavaScript for optimization logic.",
            keyPoints: [
              "3D visualization of surfaces and constraint planes.",
              "Automatic calculation of gradients and Hessians.",
              "Friendly interface for complex mathematical function entry."
            ]
          }
        }
      ]
    }
  };

  return translations[lang];
}
