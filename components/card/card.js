export function createCharacterCard(character) {
  const li = document.createElement("li");
  li.classList = "card";

  li.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    src=${character.results.image}
    alt=${character.results.name}
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character.results.name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${character.results.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${character.results.type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${character.results.episode}</dd>
  </dl>
</div>`;

  return li;
}
