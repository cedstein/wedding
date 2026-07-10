import { model, models, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const personSchema = new Schema({
  id: { type: String, required: true /*  default: () => uuidv4()  */ },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  attending: { type: Boolean, required: false },
  attendingChurch: { type: Boolean, required: false },
  attendingParty: { type: Boolean, required: false },
  // Låtar
  song1Artist: { type: String, required: false },
  song1Title: { type: String, required: false },
  song2Artist: { type: String, required: false },
  song2Title: { type: String, required: false },
  // Allergi
  hasAllergies: { type: Boolean, required: false },
  allergyText: { type: String, required: false },
});

export const Person = models.person || model("person", personSchema);
