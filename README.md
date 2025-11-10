# 📦 Product Controller

This repository contains a simple Node.js controller for fetching product data, featuring powerful querying, filtering, sorting, field selection, and pagination capabilities using MongoDB (via Mongoose).

---

## ✨ Features

The `getAllProducts` endpoint offers robust data retrieval functionalities:

* **Filtering:** Filter products by `featured` status, `company`, and **partial name match**.
* **Numeric Filtering:** Filter by **price** and **rating** using comparison operators (`<`, `<=`, `=`, `>`, `>=`).
* **Sorting:** Sort results by any field, including multiple fields. Defaults to sorting by `createdAt`.
* **Field Selection:** Select specific fields to return in the response.
* **Pagination:** Limit the number of results per page and navigate between pages.
* **Static Endpoint:** A pre-configured endpoint (`getAllProductsStatic`) for a quick test or a specific use case.

---

## 🚀 Endpoints

### 1. Get All Products (Dynamic)

This is the main, flexible endpoint for querying products.

* **Method:** `GET`
* **Path:** `/api/v1/products` (Example path, depends on your router setup)

#### **Query Parameters**

| Parameter | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `featured` | `boolean` | Filter by featured status. | `?featured=true` |
| `company` | `string` | Filter by company name. | `?company=ikea` |
| `name` | `string` | Search for products with a name containing this string (case-insensitive). | `?name=shelf` |
| `sort` | `string` | Fields to sort by, separated by commas. Use `-` before a field for descending order. | `?sort=price,-name` |
| `fields` | `string` | Fields to include in the response, separated by commas. | `?fields=name,price,company` |
| `numericFilters` | `string` | Advanced filtering on **`price`** and **`rating`**. See **Numeric Filtering Format** below. | `?numericFilters=price>50,rating>=4.5` |
| `page` | `number` | The page number to retrieve (starts at 1). | `?page=2` |
| `limit` | `number` | The maximum number of results per page (defaults to 10). | `?limit=20` |

#### **Numeric Filtering Format**

Use a comma-separated list of filters in the format: **`field-operator-value`**.

| Operator | URL Representation |
| :--- | :--- |
| Greater Than | `>` |
| Greater Than or Equal To | `>=` |
| Equal To | `=` |
| Less Than | `<` |
| Less Than or Equal To | `<=` |

**Example:**
To find products with a price greater than 50 **AND** a rating greater than or equal to 4.5:
`?numericFilters=price>50,rating>=4.5`

### 2. Get All Products (Static)

A simple endpoint demonstrating a predefined query.

* **Method:** `GET`
* **Path:** `/api/v1/products/static` (Example path)

#### **Behavior**

This endpoint returns products that meet a specific, hardcoded condition:
* `price` is **greater than 34**.
* Results are **sorted by `price`**.
* Only the **`name`** and **`price`** fields are returned.