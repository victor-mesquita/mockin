import Vue from "vue";

function applyPattern(pattern, value) {
  let appliedValuePattern = "";
  const splittedValue = value.split("");
  const splittedPattern = pattern.split("");
  let currentEquivalentPatternIndex = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const char of splittedPattern) {
    const foundNumber = char === "0";

    if (foundNumber) {
      appliedValuePattern += splittedValue[currentEquivalentPatternIndex];
      currentEquivalentPatternIndex += 1;
      continue;
    }

    appliedValuePattern += char;
  }

  return appliedValuePattern;
}

const msisdnFormatDirective = Vue.directive("msisdnFormat", {
  inserted: el => {
    const numberPattern = "(00) 00000-0000";
    const unformatedPhoneNumber = el.innerHTML;

    const formattedNumber = applyPattern(numberPattern, unformatedPhoneNumber);

    el.innerHTML = formattedNumber;
  }
});

export default msisdnFormatDirective;
