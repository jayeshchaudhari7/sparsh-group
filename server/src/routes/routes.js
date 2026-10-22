import { Router } from "express";
import { createContact, getContacts } from "../controller/contactController.js"
import { validateContact } from "../validator/validateContact.js";

const router = Router();

router.post("/",validateContact, createContact);
router.get("/", getContacts); 

export default router;