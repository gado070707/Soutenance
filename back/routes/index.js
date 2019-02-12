// routes/index.js

/**
 * Une route est liée a un controller
 * le controlleur fait appel au service
 * le service fait appel au model
 * le model permet d'effectuer toutes les operations d'une table dans la BDD
 */

require("./user");
require("./adresse");
require("./category");
require("./ligneCarte");
require("./ligneCommande");
require("./presence");
require("./product");
require("./role");
require("./statut");
require("./truck");
require("./truckOwner");
require("./type");
