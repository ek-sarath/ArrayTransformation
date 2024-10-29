    function groupBy<T extends Record<string, any>>(
        arr: T[],
        key: keyof T | string
    ): Record<string, T[]>
    
    {
        return arr.reduce((acc, current) => {
            const value = current[key as keyof T] as string | undefined;
            if (value !== undefined && value !== null) {
                if (!acc[value]) {
                    acc[value] = [];
                }
                acc[value].push(current);
            }
            return acc;
        }, {} as Record<string, T[]>);
    }
    
    interface product {    
        id: number;
        category: string;
        subCategory?: string;
        price: number;
    }
    
    const products: product[] = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "books", price: 20 },
    { id: 3, category: "electronics", price: 200 },
    { id: 4, category: "electronics", price: 250 },
    { id: 5, category: "books", price: 85 }
    ];
    
    const grouped = groupBy(products, "category");
    console.log(grouped);