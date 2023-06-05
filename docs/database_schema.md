Starting point for the database schema of the "Kitch n Decor" e-commerce application.

**Tables:**
1. **Users**
   - user_id (Primary Key)
   - username
   - password
   - name
   - contact_number
   - address

2. **Categories**
   - category_id (Primary Key)
   - title
   - description
   - picture

3. **Products**
   - product_id (Primary Key)
   - category_id (Foreign Key referencing Categories table)
   - name
   - description
   - price
   - availability

4. **ProductPictures**
   - picture_id (Primary Key)
   - product_id (Foreign Key referencing Products table)
   - picture_url

5. **Cart**
   - cart_id (Primary Key)
   - user_id (Foreign Key referencing Users table)
   - product_id (Foreign Key referencing Products table)
   - quantity

6. **WishList**
   - wishlist_id (Primary Key)
   - user_id (Foreign Key referencing Users table)
   - product_id (Foreign Key referencing Products table)

7. **Orders**
   - order_id (Primary Key)
   - user_id (Foreign Key referencing Users table)
   - order_date
   - total_amount

8. **OrderDetails**
   - order_detail_id (Primary Key)
   - order_id (Foreign Key referencing Orders table)
   - product_id (Foreign Key referencing Products table)
   - quantity
   - unit_price

Please note that this is an example schema, and depending on the specific requirements and complexity of the application, additional tables and fields may be needed.
