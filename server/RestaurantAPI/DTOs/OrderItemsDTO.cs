﻿namespace RestaurantAPI.DTOs
{
    public class OrderItemsDTO
    {
        public int OrderItemId { get; set; }

        public int OrderId { get; set; }

        public int MenuItemId { get; set; }

        public int Quantity { get; set; }
    }
}