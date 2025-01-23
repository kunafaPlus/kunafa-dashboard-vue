import { ref, computed } from 'vue';
import axios from 'axios';
import { PRODUCTS } from '@/constants/dummyDataEndpoints.js';
import { formatCurrency } from '@/formatters/currencyFormatter.js';
import { formatStock } from '@/formatters/stockFormatter.js';
import { formatThumbnail } from '@/formatters/thumbnailFormatter.js';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(PRODUCTS);
        return response.data.products;
    } catch (error) {
        console.error('Error while fetching products data in productsService:', error);
        return [];
    }
};

export const formattedProducts = (products) => {
    return computed(() => {
        return products.value.map(product => ({
            ...product,
            price: formatCurrency(product.price),
        }));
    });
};

export const productsTableHeaders = ref([
    { text: "id", value: "id" },
    { text: "title", value: "title"},
    { text: "description", value: "description"},
    { text: "price", value: "price"},
    { text: "discountPercentage", value: "discountPercentage"},
    { text: "rating", value: "rating"},
    { text: "stock", value: "stock"},
    { text: "brand", value: "brand"},
    { text: "category", value: "category"},
]);
