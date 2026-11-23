import test from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import { facts } from "../server.js";

const academics = JSON.parse(fs.readFileSync("data/academics.json", "utf8"));
const expectedBranches = ["cs-a", "cs-b", "aiml", "ch", "bt", "it", "el"];

test("All 7 official AITD first-year branches exist", () => {
  for (const bKey of expectedBranches) {
    const b = academics.branches[bKey];
    assert.ok(b, `Branch ${bKey} must exist in academics.json`);
    assert.ok(b.name, `${bKey} must have a name`);
    assert.ok(b.section, `${bKey} must have a section`);
    assert.ok(b.classroom, `${bKey} must have a classroom`);
    assert.deepEqual(b.groups, [1, 2], `${bKey} must have groups [1, 2]`);
    assert.equal(b.periods.length, 7, `${bKey} must define 7 timetable periods`);
    assert.ok(b.subjects.length >= 10, `${bKey} must define subjects`);
  }
});

test("Branches have correct home classrooms and sections", () => {
  assert.equal(academics.branches["cs-a"].classroom, "E-201");
  assert.equal(academics.branches["cs-b"].classroom, "E-202");
  assert.equal(academics.branches["aiml"].classroom, "B-202");
  assert.equal(academics.branches["ch"].classroom, "B-203");
  assert.equal(academics.branches["bt"].classroom, "B-210");
  assert.equal(academics.branches["it"].classroom, "B-211");
  assert.equal(academics.branches["el"].classroom, "E-210");
});

test("All 7 branches have full Monday to Saturday schedules", () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for (const bKey of expectedBranches) {
    const b = academics.branches[bKey];
    for (const d of days) {
      assert.ok(b.days[d], `Branch ${bKey} must have schedule for ${d}`);
      assert.ok(Array.isArray(b.days[d]), `${d} schedule must be an array`);
      assert.ok(b.days[d].length > 0, `${d} schedule must not be empty`);
    }
  }
});

test("AKTU Syllabus Hub contains units 1 to 5 and textbooks", () => {
  assert.ok(academics.syllabus, "academics.json must contain syllabus hub");
  const syllabusKeys = ["qpa", "chem", "cla", "fece", "fee", "fme", "plang", "pctw", "es", "iiks"];
  for (const sk of syllabusKeys) {
    const item = academics.syllabus[sk];
    assert.ok(item, `Syllabus for ${sk} must exist`);
    assert.ok(item.title, `Syllabus for ${sk} must have a title`);
    assert.equal(item.units.length, 5, `Syllabus for ${sk} must have 5 units`);
    assert.ok(item.textbooks.length > 0, `Syllabus for ${sk} must list recommended textbooks`);
  }
});

test("facts() generator produces accurate academic responses", () => {
  const b = academics.branches["aiml"];
  const sub = b.subjects.find((s) => s.id === "fece");
  assert.ok(sub, "FEcE subject must exist in AIML");

  const who = facts(b, sub, "who", 1);
  assert.match(who, /Shashank Srivastava/i);

  const where = facts(b, sub, "where", 1);
  assert.match(where, /B-202/i);

  const when = facts(b, sub, "when", 1);
  assert.match(when, /Monday/i);

  const marks = facts(b, sub, "marks", 1);
  assert.match(marks, /3 credits/i);
});
