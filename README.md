# piedra-papel-tijera-lagarto-spock-serverless

Serverless de Vercel básico creado en [NodeJs](https://nodejs.org/)

## Tecnologías

Este proyecto trabaja con las siguientes tecnologías

- [Node.js](https://nodejs.org/) - Es un entorno de ejecución JavaScript de código abierto y multiplataforma.
- [Vercel](https://vercel.com/) - Es una plataforma en la nube para crear, implementar y escalar aplicaciones web y serverless.
- [Sentry](https://sentry.io) - Es una plataforma de monitoreo de errores en aplicaciones en línea.

## Instalación y uso de manera local

#### Clona este repositorio [GitHub](https://github.com/metalpoch/piedra-papel-tijera-lagarto-spock-serverless.git)

```bash
git clone https://github.com/metalpoch/piedra-papel-tijera-lagarto-spock-serverless.git
```

#### Utilice [npm](https://www.npmjs.com/) para instalar las dependencias

```bash
cd piedra-papel-tijera-lagarto-spock-serverless
npm install
```

#### Ejecutar con Vercel CLI

```bash
vercel dev
```

```bash
# en caso de no funcionar la primera opción, ejecute:
./node_modules/vercel/dist/index.js dev
```

## Reglas del juego:

"Piedra, papel, tijera, lagarto, Spock" es una variación del clásico juego "piedra , papel o tijera" que se hizo popular gracias a la serie de televisión "The Big Bang Theory". Las reglas básicas son las mismas que las de "piedra, papel o tijera": cada jugador elige una de las tres opciones (piedra, papel o tijera) y el ganador es el que hace la elección más efectiva según las reglas. En "Piedra, papel, tijera, lagarto, Spock", se agregan dos nuevas opciones: lagarto y Spock. Aquí están las reglas completas:

- Piedra aplasta tijera.
- Tijera corta papel.
- Papel cubre piedra.
- Piedra aplasta lagarto.
- Lagarto envenena Spock.
- Spock destroza tijera.
- Tijera decapita lagarto.
- Lagarto come papel.
- Papel refuta Spock.
- Spock vaporiza piedra.

Estas reglas pueden ser difíciles de recordar, ¡así que asegúrese de practicar antes de enfrentar a un oponente habilidoso en "Piedra, papel, tijera, lagarto, Spock"!

Para usar este serveless ve al endpoint "/api/play" y no olvides enviar el parámetro "hand" con tu jugada.
Por ejemplo:

- local: http://localhost/api/play?hand=spock
- remoto: https://pptls-serverless.vercel.app/api/play?hand=spock
