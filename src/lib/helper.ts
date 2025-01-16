import { userWorkValues } from "./constant";
import { filterFields, userObj } from "./types";

export const createUser = (filter: filterFields) => {
  const userObj: userObj = {};

  if (filter.ethnicity) {
    userObj.ethnicity =
      filter.ethnicity[Math.floor(Math.random() * filter.ethnicity.length)];
  }
  if (filter.gender) {
    userObj.gender =
      filter.gender[Math.floor(Math.random() * filter.gender.length)];
  }

  if (filter.religion) {
    userObj.religion =
      filter.religion[Math.floor(Math.random() * filter.religion.length)];
  }

  if (filter.work) {
    switch (filter.work[0]) {
      case userWorkValues.Offering:
        userObj.work = userWorkValues.Seeking;
        break;

      default:
        userObj.work = userWorkValues.Offering;
        break;
    }
  }

  if (filter.relation) {
    userObj.relation = generateRelationCombination(
      filter.relation[Math.floor(Math.random() * filter.relation.length)]
    );
  }

  if (filter.help) {
    userObj.help = !!filter.help.length;
  }

  if (filter.other) {
    userObj.other = !!filter.other.length;
  }

  return userObj;
};

function generateRelationCombination(selectedRelation: string) {
  const relationOptions = ["Shorterm", "Longterm", "Casual"];

  // Validate input
  if (!relationOptions.includes(selectedRelation)) {
    throw new Error("Invalid relation option provided");
  }

  // Create array of other options (excluding the selected one)
  const otherOptions = relationOptions.filter(
    (option) => option !== selectedRelation
  );

  // Randomly decide how many additional options to include (0, 1, or 2)
  const additionalCount = Math.floor(Math.random() * (otherOptions.length + 1));

  // Randomly select additional options
  const selectedAdditional = [];
  const tempOptions = [...otherOptions];

  for (let i = 0; i < additionalCount; i++) {
    const randomIndex = Math.floor(Math.random() * tempOptions.length);
    selectedAdditional.push(tempOptions[randomIndex]);
    tempOptions.splice(randomIndex, 1);
  }

  // Combine selected option with random additional options
  const result = [selectedRelation, ...selectedAdditional];

  // Sort alphabetically and join with commas
  return result.sort().join(", ");
}
