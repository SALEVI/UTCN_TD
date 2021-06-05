var api = require("./src/api.js").app;
const fs = require("fs");
const perfumesfilepath = "./src/perfumes.json";

api.get("/", function (request, response) {
  response.json("NodeJS REST API");
});

api.get("/perfumes", function (request, response) {
  response.json(getPerfumes());
});

api.get("/perfumes/:id", function (request, response) {
  let perfume = getPerfumeById(request.params.id);
  if (perfume) response.json(perfume);
  response.json("Nu se află.");
});

api.put("/perfumes", function (request, response) {
  savePerfume(request.body);
  response.json("Parfumul este adăugată cu succes.");
});

api.post("/perfumes", function (request, response) {
  let perfume = request.body;
  let perfumes = getPerfumes();
  for (let i = 0; i < perfumes.length; i++) {
    if (perfumes[i].id === perfume.id) {
      perfumes[i] = perfume;
    }
  }

  try {
    fs.writeFileSync(perfumesfilepath, JSON.stringify(perfumes));
  } catch (err) {
    console.error(err);
  }

  response.json("Parfumul este modificată cu succes.");
});

api.delete("/perfumes/:index", function (request, response) {
  let perfumes = getPerfumes();

  perfumes.splice(findIdInArray(request.params.index), 1);

  try {
    fs.writeFileSync(perfumesfilepath, JSON.stringify(perfumes));
  } catch (err) {
    console.error(err);
  }

  response.json(
    "Parfumul cu id " + request.params.index + " este ștearsă."
  );
});

api.listen(3000, function () {
  console.log("Server running @ localhost:3000");
});

function getPerfumes() {
  let perfumes = [];
  try {
    perfumes = JSON.parse(fs.readFileSync(perfumesfilepath, "utf8"));
  } catch (err) {
    console.error(err);
    return false;
  }
  return perfumes;
}

function savePerfume(perfume) {
  let perfumes = getPerfumes();
  let maxId = getMaxId(perfumes);
  perfume.id = maxId + 1;
  perfumes.push(perfume);
  try {
    fs.writeFileSync(perfumesfilepath, JSON.stringify(perfumes));
  } catch (err) {
    console.error(err);
  }
}

function getMaxId(perfumes) {
  let max = 0;
  for (var i = 0; i < perfumes.length; i++) {
    if (max < perfumes[i].id) {
      max = perfumes[i].id;
    }
  }
  return max;
}

function getPerfumeById(id) {
  let perfumes = getPerfumes();
  let selectedPerfume = null;
  for (var i = 0; i < perfumes.length; i++) {
    if (id == perfumes[i].id) selectedPerfume = perfumes[i];
  }
  return selectedPerfume;
}

function findIdInArray(id) {
  let perfumes = getPerfumes();
  for (var i = 0; i < perfumes.length; i++) {
    if (id == perfumes[i].id) return i;
  }
  return -1;
}
