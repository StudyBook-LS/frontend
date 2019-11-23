const format = object => {
  const study = { ...object };

  const eligibilityArr = study.eligibility.split("\n").filter(Boolean);
  const eligibility = {};
  let key = "inclusionCriteria";
  for (let i = 0; i < eligibilityArr.length; i += 1) {
    if (!eligibility[key]) eligibility[key] = [];
    if (eligibilityArr[i] === " Exclusion Criteria:") {
      key = "exclusionCriteria";
      if (!eligibility[key]) eligibility[key] = [];
    } else if (eligibilityArr[i - 1] === " Inclusion Criteria:") {
      eligibility[key].push(eligibilityArr[i].slice(1));
    } else if (eligibilityArr[i].slice(0, 3) === " - ") {
      const value =
        eligibilityArr[i + 1].slice(0, 3) !== " - "
          ? `${eligibilityArr[i].slice(3)} ${eligibilityArr[i + 1].slice(3)}`
          : eligibilityArr[i].slice(3);
      eligibility[key].push(value);
    } else if (eligibilityArr[i] === "Female" || eligibilityArr[i] === "Male") {
      key = "sex";
      if (!eligibility[key]) eligibility[key] = [];
      eligibility[key].push(eligibilityArr[i]);
    } else if (eligibilityArr[i].includes("Years")) {
      key = "age";
      if (!eligibility[key]) eligibility[key] = [];
      eligibility[key].push(
        Number(eligibilityArr[i].match(/^[0-9]*/g).join("")),
      );
    } else if (i === eligibilityArr.length - 1) {
      eligibility.acceptsHealthy = eligibilityArr[i] !== "No";
    }
  }

  const govId = study.url.substr(-11);

  return {
    ...study,
    eligibility,
    gov_id: govId,
    intervention: !study.intervention ? null : study.intervention.split("\n").filter(Boolean),
    lead_sponsor: !study.lead_sponsor ? null : study.lead_sponsor.split("\n").filter(Boolean),
    location: !study.location ? null : study.location.split("\n").filter(Boolean),
    sponsors: !study.sponsors ? null : study.sponsors.split("\n").filter(Boolean),
  };
};

export default format;
