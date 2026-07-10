"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { Person } from "../models/Person";
import { v4 as uuidv4 } from "uuid";

export async function createRSVP(formData: FormData) {
  await connectDB();

  await Person.create({
    id: uuidv4(),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    attendingChurch: formData.get("attendingChurch") === "yes",
    attendingParty: formData.get("attendingParty") === "yes",
    allergies: formData.get("allergies"),
    song1: formData.get("song1"),
    song2: formData.get("song2"),
  });

  revalidatePath("/");
}
