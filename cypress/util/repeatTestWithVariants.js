export default function repeatTestWithVariants(TEST_CASE_NAME, VIEW_PORTS, AB_TEST_NAME, AB_TEST_VARIATIONS, testCallback) {
  VIEW_PORTS.forEach((viewPortName) => {
    AB_TEST_VARIATIONS.forEach((variantName) => {
      const testName = `${TEST_CASE_NAME} - ${viewPortName} - ${AB_TEST_NAME}: ${variantName}`;
      testCallback(testName, viewPortName, AB_TEST_NAME, variantName);
    });
  })
}
