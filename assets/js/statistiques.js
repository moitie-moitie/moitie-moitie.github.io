const getCagnottes = () => {
  let cagnottes = document.querySelectorAll("td:nth-child(2)");
  cagnottes = Array.from(cagnottes).reduce((resultat, cagnotte) => {
    const float = parseFloat(cagnotte.textContent.replace(",", "."));
    if (!isNaN(float)) {
      resultat.push(float);
    }
    return resultat;
  }, []);
  return cagnottes;
};
const getMontantInvesti = cagnottes => 10.00 * cagnottes.length;
const getMontantGagne = () => {
  const sourires = document.getElementsByClassName("fa-smile");
  let total = 0;
  Array.from(sourires).forEach(sourire => {
    total += parsefloat(sourire.parentElement.previousElementSibling.previousElementSibling.textContent.replace(",", "."));
  });
  return total;
}
const getNombreDeTirages = cagnottes => cagnottes.length;
const getArgent = nombre => nombre.toFixed(2).replace(".", ",") + "$";
const getPlusGrosseCagnotte = cagnottes => Math.max(...cagnottes);
const getCagnotteMoyenne = cagnottes => cagnottes.reduce((a, b) => a + b) / cagnottes.length;
const getPlusPetiteCagnotte = cagnottes => Math.min(...cagnottes);

const cagnottes = getCagnottes();
const montantInvesti = getMontantInvesti(cagnottes);
const montantGagne = getMontantGagne();

document.getElementById("nombre-de-tirages").textContent = getNombreDeTirages(cagnottes);
document.getElementById("plus-grosse-cagnotte").textContent = getArgent(getPlusGrosseCagnotte(cagnottes));
document.getElementById("cagnotte-moyenne").textContent = getArgent(getCagnotteMoyenne(cagnottes));
document.getElementById("plus-petite-cagnotte").textContent = getArgent(getPlusPetiteCagnotte(cagnottes));
document.getElementById("montant-investi").textContent = getArgent(montantInvesti);
document.getElementById("montant-gagne").textContent = getArgent(montantGagne);
document.getElementById("gains-nets").textContent = getArgent(montantInvesti - montantGagne);