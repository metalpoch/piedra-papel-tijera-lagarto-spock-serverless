import rules from "../mock/play.json";

const randomValueFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const getWinner = (player, pc) => {
  if (player === pc) return { winner: "Empate", msg: null };
  if (rules[player][pc]) return { winner: "Jugador", msg: rules[player][pc] };
  if (rules[pc][player]) return { winner: "PC", msg: rules[pc][player] };
};

export default function (player) {
  const options = Object.keys(rules);

  if (typeof player === "undefined")
    throw new Error("Se esperaba el parametro 'hand' con un valor");

  if (!options.includes(player.toLowerCase()))
    throw new Error(
      `Se esperaba una de las siguientes opciones: ${options.join(", ")}`
    );

  player = player.toLowerCase();
  const pc = randomValueFromArray(options);
  const { winner, msg } = getWinner(player, pc);
  return { pc, player, winner, msg };
}
