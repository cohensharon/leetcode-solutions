// type ClothingItem = {
//     id: string;
//     name: string;
//     category: "tops" | "bottoms" | "shoes" | "outerwear" | "accessories";
//     color: string;
//     season: "spring" | "summer" | "fall" | "winter" | "all";
//     price: number;
//     createdAt: string;
//   };
  
//   type QueryParams = {
//     category?: string;
//     color?: string;
//     season?: string;
//     minPrice?: number;
//     maxPrice?: number;
//     search?: string;
//     page?: number;
//     limit?: number;
//     sortBy?: "price" | "createdAt" | "name";
//     sortDirection?: "asc" | "desc";
//   };
  
//   type PaginatedResponse<T> = {
//     items: T[];
//     page: number;
//     limit: number;  
//     total: number;
//     totalPages: number;
//   };


/**
 * The function should:

1. Filter by exact fields:
    * category
    * color
    * season
2. Filter by price range:
    * minPrice
    * maxPrice
3. Search by name:
    * case-insensitive
    * partial match
4. Sort results:
    * default: createdAt desc
    * support price, createdAt, name
    * support asc and desc
5. Paginate results:
    * default page = 1
    * default limit = 10
    * return correct total and totalPages
6. Handle invalid input:
    * page less than 1 → use 1
    * limit less than 1 → use 10
    * unknown filters → ignore or handle gracefully
 * 
 */


/** 
 * example: 
 * getItems(items, {
  category: "shoes",
  color: "black",
  minPrice: 50,
  maxPrice: 200,
  page: 1,
  limit: 10,
  sortBy: "price",
  sortDirection: "asc"
});  

woud return -- Should return only matching black shoes between $50–$200, sorted by price, first page only.
 */

/**
 * -------------------------------------------------------------------------------------------------------------------------------
 */

// Implement: 

function getItems(
    items: ClothingItem[],
    query: QueryParams
  ): PaginatedResponse<ClothingItem> {

};