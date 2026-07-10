import { createRSVP } from "../actions/createRSVP";
import { ShowAdditionalGuest } from "../components/ShowAdditionalGuest";
import { connectDB } from "../lib/db";
import { Person } from "../models/Person";

export default async function RegisterForm() {
  await connectDB();
  const persons = await Person.find();

  return (
    <>
      <form action={createRSVP}>
        <div className="rounded-xl border p-8">
          <h2 className="mb-6 text-2xl">Person 1</h2>

          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="firstName-0">Förnamn</label>

            <input
              id="firstName-0"
              name="guests[0][firstName]"
              className="rounded-md border px-3 py-2"
              required
            />
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="lastName-0">Efternamn</label>

            <input
              id="lastName-0"
              name="guests[0][lastName]"
              className="rounded-md border px-3 py-2"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="email-0">E-post</label>

            <input
              id="email-0"
              name="guests[0][email]"
              type="email"
              className="rounded-md border px-3 py-2"
            />
          </div>

          <div className="mb-6">
            <p className="mb-2 font-medium">Kommer till vigseln?</p>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="church-0-yes"
                  name="guests[0][attendingChurch]"
                  value="yes"
                />
                <label htmlFor="church-0-yes">Ja</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="church-0-no"
                  name="guests[0][attendingChurch]"
                  value="no"
                />
                <label htmlFor="church-0-no">Nej</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-medium">Kommer till middagen?</p>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="party-0-yes"
                  name="guests[0][attendingParty]"
                  value="yes"
                />
                <label htmlFor="party-0-yes">Ja</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="party-0-no"
                  name="guests[0][attendingParty]"
                  value="no"
                />
                <label htmlFor="party-0-no">Nej</label>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="allergies-0">Allergier / Specialkost</label>

            <textarea
              id="allergies-0"
              name="guests[0][allergies]"
              rows={5}
              className="rounded-md border px-3 py-2"
            />
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="song1-0">Låt+Artist 1</label>

            <input
              id="song1-0"
              name="guests[0][song1]"
              className="rounded-md border px-3 py-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="song2-0">Låt+Artist 2</label>

            <input
              id="song2-0"
              name="guests[0][song2]"
              className="rounded-md border px-3 py-2"
            />
          </div>
          <ShowAdditionalGuest />

          <button>Spara</button>
        </div>
      </form>
      <ul className="space-y-2">
        {persons.map((p) => (
          <li key={p._id} className="border p-3 rounded">
            <div>
              <p>
                {p.firstName} {p.lastName}
              </p>
            </div>

            <div>{p.attendingParty ? "Kommer" : "Kommer inte"}</div>

            {p.allergies && <div> Allergier: {p.allergies}</div>}

            {(p.song1 || p.song2) && (
              <div>
                🎵 Låtar:
                <ul>
                  {p.song1 && <li>{p.song1}</li>}
                  {p.song2 && <li>{p.song2}</li>}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
