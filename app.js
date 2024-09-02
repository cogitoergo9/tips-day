const express = require('express');
const bodyParser = require('body-parser')
const app = new express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/tips', (req, res) => {
    const tips = [
      // Tips para Desarrolladores
      "Divide tu código en funciones pequeñas y reutilizables.",
      "Escribe pruebas unitarias para tu código siempre que sea posible.",
      "Utiliza control de versiones como Git para todos tus proyectos.",
      "Documenta tu código para que otros desarrolladores puedan entenderlo.",
      "Mantén tu entorno de desarrollo limpio y organizado.",
      "Optimiza tus algoritmos para mejorar el rendimiento.",
      "Practica el principio de responsabilidad única en tus clases y funciones.",
      "Refactoriza regularmente tu código para mantenerlo legible y eficiente.",
      "Usa linters y formateadores automáticos para mantener la consistencia del código.",
      "Aprende patrones de diseño comunes como el Singleton y el Factory.",
      "Aprovecha las herramientas de depuración y los logs para encontrar errores.",
      "Mantente actualizado con las nuevas tecnologías y tendencias de desarrollo.",
      "Evita los comentarios innecesarios, escribe código autoexplicativo.",
      "Utiliza estructuras de datos adecuadas para optimizar el uso de memoria.",
      "No optimices prematuramente, enfócate primero en la funcionalidad.",
      "Participa en code reviews para aprender de otros y mejorar tu código.",
      "Usa manejo de excepciones para prevenir fallos inesperados.",
      "Aprende sobre seguridad en el desarrollo web y aplica buenas prácticas.",
      "Automatiza tareas repetitivas con scripts o herramientas como Gulp o Make.",
      "Prioriza la escritura de código que sea fácil de mantener.",
      "Haz uso de técnicas de desarrollo ágil como TDD (Test Driven Development).",
      "Estudia y utiliza metodologías de programación como SOLID o DRY.",
      "Dedica tiempo a aprender sobre la arquitectura de software.",
      "Usa herramientas de CI/CD para automatizar el proceso de despliegue.",
      "No temas eliminar código innecesario o redundante.",
      "Considera el uso de TypeScript para proyectos grandes en JavaScript.",
      
      // Tips para Project Managers
      "Define claramente los objetivos del proyecto y comunícalos al equipo.",
      "Mantén una comunicación constante y efectiva con todas las partes interesadas.",
      "Crea un plan de proyecto con hitos claros y plazos realistas.",
      "Usa herramientas de gestión de proyectos como Jira o Trello para organizar tareas.",
      "Fomenta una cultura de feedback continuo y constructivo en el equipo.",
      "Prioriza las tareas en función del impacto y urgencia.",
      "Implementa reuniones diarias o semanales para mantener el progreso del equipo.",
      "Facilita la colaboración y la resolución de conflictos dentro del equipo.",
      "Asegúrate de que todos los miembros del equipo entiendan sus roles y responsabilidades.",
      "Monitorea los riesgos del proyecto y ten un plan de contingencia.",
      "Realiza retrospectivas al final de cada sprint o proyecto para aprender de la experiencia.",
      "Escucha activamente a los miembros del equipo y apoya sus necesidades.",
      "Utiliza métricas para medir el progreso del proyecto y ajustar estrategias.",
      "Comunica los cambios del proyecto de manera clara y oportuna.",
      "Fomenta la transparencia en todas las etapas del proyecto.",
      "Ten siempre en mente la calidad del entregable final, no solo los plazos.",
      "Dedica tiempo a desarrollar habilidades de liderazgo y gestión emocional.",
      "Mantén una actitud positiva y motivadora, especialmente en momentos difíciles.",
      "Documenta las lecciones aprendidas para futuros proyectos.",
      "Usa técnicas de estimación como Planning Poker para calcular el esfuerzo necesario.",
      "Construye relaciones sólidas con los clientes y otros stakeholders.",
      "Establece un sistema de recompensas para reconocer los logros del equipo.",
      "Asegúrate de que todos tengan acceso a la información relevante del proyecto.",
      "No tengas miedo de ajustar el plan de proyecto si las circunstancias cambian.",
      "Utiliza diagramas de Gantt o Kanban para visualizar el progreso."
    ];
  
    // Escoge un tip al azar
    const tipDelDia = tips[Math.floor(Math.random() * tips.length)];
    res.json({ mensaje: tipDelDia });
  });
  
  app.listen(port, () => {
    console.log(`Servidor en ejecución ${port}`);
  });