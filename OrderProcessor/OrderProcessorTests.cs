using Moq;
using NUnit.Framework;

[TestFixture]
public class OrderProcessorTests
{
    [Test]
    public void ProcessOrder_ShouldCallPlaceOrderWithCorrectParameters()
    {
        // Arrange
        Mock<IOrderService> orderServiceMock = new Mock<IOrderService>();
        OrderProcessor orderProcessor = new OrderProcessor(orderServiceMock.Object);

        // Act
        orderProcessor.ProcessOrder("ProductABC", 3);

        // Assert
        // Sprawdzenie, czy metoda PlaceOrder została wywołana dokładnie raz z odpowiednimi parametrami
        orderServiceMock.Verify(os => os.PlaceOrder("ProductABC", 3), Times.Once);
    }

    [Test]
    public void ProcessOrder_ShouldCallPlaceOrderMultipleTimes()
    {
        // Arrange
        Mock<IOrderService> orderServiceMock = new Mock<IOrderService>();
        OrderProcessor orderProcessor = new OrderProcessor(orderServiceMock.Object);

        // Act
        orderProcessor.ProcessOrder("Product1", 2);
        orderProcessor.ProcessOrder("Product2", 5);

        // Assert
        // Sprawdzenie, czy metoda PlaceOrder została wywołana dwukrotnie z odpowiednimi parametrami
        orderServiceMock.Verify(os => os.PlaceOrder("Product1", 2), Times.Once);
        orderServiceMock.Verify(os => os.PlaceOrder("Product2", 5), Times.Once);
    }
}