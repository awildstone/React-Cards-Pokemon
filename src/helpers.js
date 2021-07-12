/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

/** Formats the response data for playing cards. */
const formatCardData = (data) => {
  return { front: data.cards[0].image };
};

/** Formats the response data for Pokemon cards. */
const formatPokemonCardData = (data) => {
  return {
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({ value: stat.base_stat, name: stat.stat.name }))
  };
};

export { choice, formatCardData, formatPokemonCardData };