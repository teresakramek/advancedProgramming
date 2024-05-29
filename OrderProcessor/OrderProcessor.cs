public class OrderProcessor
{
    private IOrderService _orderService;

    public OrderProcessor(IOrderService orderService)
    {
        _orderService = orderService;
    }

    public void ProcessOrder(string product, int quantity)
    {
        // Przetwarzanie zamówienia
        _orderService.PlaceOrder(product, quantity);
    }
}