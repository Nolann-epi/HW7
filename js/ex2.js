const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan",
];

const countryInput = document.getElementById("country");
const suggestionDiv = document.getElementById("suggestions");
countryInput.addEventListener("input", function() {
    suggestionDiv.innerHTML = "";
    const input = countryInput.value;

    if (!input) return;
    const list = countryList.filter(country => country.toLowerCase().startsWith(input.toLowerCase()));
    list.forEach(country => {
        const p = document.createElement("p");
        p.innerHTML = country;
        suggestionDiv.appendChild(p);
    })
});
