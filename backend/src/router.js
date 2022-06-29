const express = require("express");

const {
  ItemController,
  SkillController,
  ProjectController,
  CategoryController,
  ProjectResultController,
  ProjectLifeController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/skills", SkillController.browse);
router.get("/projects", ProjectController.browse);
router.post("/projects", ProjectController.add);
router.get("/projectresults", ProjectResultController.browse);
router.get("/categories", CategoryController.browse);
router.get("/projectsteps", ProjectLifeController.browse);

module.exports = router;
