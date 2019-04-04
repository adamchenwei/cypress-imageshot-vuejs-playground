import repeatTestWithVariants from "../../../util/repeatTestWithVariants";

const TEST_CASE_NAME = 'Login Page';

describe(TEST_CASE_NAME, () => {
  const VIEW_PORTS = [
    'macbook-15',
    'ipad-2',
    'iphone-6'
  ];
  const AB_TEST_NAME = '2019_04_STREAMLINED_LOGIN';
  const AB_TEST_VARIATIONS = [
    'CONTROL',
    'STREAMLINED'
  ];

  function emptyPageTest() {
    repeatTestWithVariants(
      TEST_CASE_NAME,
      VIEW_PORTS,
      AB_TEST_NAME,
      AB_TEST_VARIATIONS,
      (testName, viewPortName, AB_TEST_NAME, variantName) => {
        it(testName, () => {
          cy.reload();
          cy.viewport(viewPortName);
          cy.visit(`http://localhost:8080/app/login?experimentName=${AB_TEST_NAME}&experimentVariation=${variantName}#/`);
          cy.get('body')
            .matchImageSnapshot(testName);
        });
      }
    )
  }
  emptyPageTest();

});
