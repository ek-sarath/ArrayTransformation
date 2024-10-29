"use strict";
function groupBy(arr, key) {
    return arr.reduce((acc, current) => {
        const value = current[key];
        if (value !== undefined || value !== null) {
            if (!acc[value]) {
                acc[value] = [];
            }
            acc[value].push(current);
        }
        return acc;
    }, {});
}
const products = [
    { id: 1, category: "electronics", subCategory: "adapter", price: 100 },
    { id: 2, category: "books", subCategory: "fiction", price: 20 },
    { id: 3, category: "electronics", subCategory: "mobile", price: 200 },
    { id: 4, category: "electronics", subCategory: "adapter", price: 250 },
    { id: 5, category: "books", subCategory: "fiction", price: 85 }
];
const grouped = groupBy(products, "category");
console.log(grouped);
const subCategory = groupBy(products, "subCategory");
console.log(subCategory);
