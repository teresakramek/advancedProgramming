using CalculatorLib;
using TechTalk.SpecFlow;
using Xunit;

namespace CalculatorTests.Steps
{
    [Binding]
    public class CalculatorSteps
    {
        private readonly Calculator _calculator = new Calculator();
        private int _result;
        private int _firstNumber;
        private int _secondNumber;

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int number)
        {
            if (_firstNumber == 0)
                _firstNumber = number;
            else
                _secondNumber = number;
        }

        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            _result = _calculator.Add(_firstNumber, _secondNumber);
        }

        [When(@"I press subtract")]
        public void WhenIPressSubtract()
        {
            _result = _calculator.Subtract(_firstNumber, _secondNumber);
        }


        [When(@"I press multiply")]
        public void WhenIPressMultiply()
        {
            _result = _calculator.Multiply(_firstNumber, _secondNumber);
        }

        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int expectedResult)
        {
            Assert.Equal(expectedResult, _result);
        }
    }
}
