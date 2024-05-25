using NUnit.Framework;
using Moq;
using CalculatorLib;
using NUnit.Framework.Legacy;

namespace CalculatorTests;

[TestFixture]
public class CalculatorTests
{
    [Test]
    public void Add_ShouldSendDataToWebService()
    {
        // Arrange
        Mock<IWebService> webServiceMock = new Mock<IWebService>();
        Calculator calculator = new Calculator(webServiceMock.Object);

        // Act
        int result = calculator.Add(3, 5);

        // Assert
        ClassicAssert.AreEqual(8, result);

        // Verify that the SendData method was called with the expected argument
        webServiceMock.Verify(ws => ws.SendData("Add operation: 3 + 5 = 8"), Times.Once);
    }
}