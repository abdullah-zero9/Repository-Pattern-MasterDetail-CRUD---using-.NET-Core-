# Master-Detail CRUD Operations with .NET using Repository Pattern

## Overview

This project demonstrates how to perform Create, Read, Update, and Delete (CRUD) operations using the Master-Detail pattern. It utilizes the .NET framework and follows best practices for code-first development, repository pattern, clean code, Bootstrap, and Font Awesome for an enhanced user interface.

## SalesMaster Model

The SalesMaster model represents the master record for a sales transaction. It includes the following properties:

- **SalesMasterId:** A unique identifier for each sales record.
- **InvoiceNumber:** The invoice associated with the sale.
- **CustomerName:** The customer's name.
- **MobileNo:** Contact number of the customer.
- **Address:** Customer's address.
- **SalesDetails:** A navigation property that forms a master-detail relationship with SalesDetails. This indicates that one SalesMaster record can have multiple associated SalesDetails records.

## SalesDetails Model

The SalesDetails model represents the details of each product sold within a sales transaction. It includes the following properties:

- **SalesDetailsId:** A unique identifier for each sales detail record.
- **ProductCode:** Code to describe the product being sold.
- **ProductName:** Name of the product.
- **Price:** Unit price of the product.
- **Quantity:** Quantity of the product sold.
- **SalesMasterId:** A foreign key that links each SalesDetails record to its parent SalesMaster record.

## Display Attributes

Display attributes are used to provide user-friendly labels for ProductCode and ProductName. This enhances the user interface.

## CRUD Operations

This project allows you to perform the following operations:

- **Create:** Add new sales records, including both master and detail records.
- **Read:** View existing sales transactions, including their associated products.
- **Update:** Modify the details of sales transactions.
- **Delete:** Remove sales transactions or individual products from a transaction.
- ![image](https://github.com/abdullah-zero9/Repository-Pattern-MasterDetail-CRUD---using-.NET-Core-/assets/126222065/5b82b21b-50a5-4eb3-8f28-33facd782e33)

![image](https://github.com/abdullah-zero9/Repository-Pattern-MasterDetail-CRUD---using-.NET-Core-/assets/126222065/860686b6-3e82-4b2e-a0c0-e163f1b373e7)

## Repository Pattern

The repository pattern is implemented for data access, ensuring a separation of concerns and clean code. It abstracts data access logic and provides a clean and organized structure for managing data.

## Clean Code

The code in this project follows clean code principles, ensuring readability and maintainability. It adheres to best practices for coding style, naming conventions, and documentation.

## User Interface

The project is styled using Bootstrap and incorporates Font Awesome for enhanced visualization and user experience.

Feel free to explore and use this project as a reference for building your own applications that involve master-detail relationships and CRUD operations for sales records.

**Note:** Ensure that you have the necessary environment and tools set up to run this project successfully. Make sure to configure your database connection and migrations for the code-first approach.

For any questions or issues, please don't hesitate to reach out for assistance.
