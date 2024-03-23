# Node-js Hall Booking Task

## Welcome to the greate karigalan Hall Booking System

This is an Express.js application for managing bookings and rooms at the greate karigalan Hall Booking System.

## Table of Contents

- [Usage](#usage)
- [Endpoints](#endpoints)
- [Data Structures](#data-structures)
- [Demo](#demo)

## Endpoints

### GET /

- **Description:** Returns a welcome message and instructions on how to use the API.
  

### GET /hallapi/allroomdetails

- **Description:** Retrieves details of all available rooms.
  
![All Rooms](image.png)


### POST /hallapi/createroom

- **Description:** Creates a new room.
![Create Room](image-1.png)


### POST /hallapi/bookingroom

- **Description:** Books a room for a customer.
![Booked Room](image-2.png)


### GET /hallapi/bookedroomdata

- **Description:** Retrieves data of all booked rooms.
![Booked Room Datas](image-3.png)


### GET /hallapi/customersbookeddata

- **Description:** Retrieves data of all customers with booked room details.
![Customer Details](image-4.png)


### GET /hallapi/customerbookingcount

- **Description:** Retrieves booking details for each customer along with booking count.
![alt text](image-5.png)

## Data Structures

### Room Object

```json
{
  "room_id": 1,
  "room_name": "Sunset Serenade Suite",
  "room_status": "available",
  "amenities": "Tv,Washing Machine,Iron Box",
  "seats": 5,
  "price_per_hour": 2500
}
```

### Booking Object

```json
{
  "roomID": 1,
  "customer_name": "Ashok",
  "start_time": "2024-03-06T10:00:00Z",
  "end_time": "2024-03-06T12:00:00Z",
  "Date": "2024-03-06",
  "booking_id": 1,
  "booking_date": "2024-03-06",
  "status": "Booked"
}
```
## Demo
