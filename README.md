# AccommodoApp

A full-stack accommodation booking platform that allows guests to search and reserve accommodations, owners to manage their listings, and administrators to moderate the system.

## Tech stack

- React.js = frontend
- Node.js (Express) = backend
- PostgreSQL = database

## Project overview

AccommodoApp is a role-based reservation system with three main user roles:

- guest
- owner
- administrator

Unregistered users can browse available accommodations, while authenticated users can interact with the system based on their role.

## Key features

### Guest

- Browse all available accommodations
- Search by:
  - Location
  - Date range (check-in / check-out)
  - Number of guests
- View:
  - Accommodation details
  - Availability calendar
- Reviews
  - Make reservations with full upfront payment
  - View past and active reservations
  - Cancel active reservations

### Owner

- Submit accommodation for approval
- Manage listing update requests (requires admin approval)
- Edit accommodation details:
  - Image
  - Name
  - Address
  - Price
  - Capacity
  - Parking spots
- View:
- Booking calendar
- Guest reviews
- Reservation insights

### Administrator

- Approve or reject owner submission requests
- Manage all accommodations in the system
- View request history and details
- Moderate reviews (hide/show reviews)
- Manage users (delete accounts if necessary)

## Accommodation Model

Each accommodation includes:

- Owner information
- Type of accommodation
- Name and location
- Price and capacity
- Parking availability
- Profile image
- Guest reviews
- Occupancy calendar

## Request System

Owners can submit two types of requests:

- Add new accommodation
- Update existing accommodation

Requests include:

- Accommodation data
- Ownership documents (PDF: ownership proof + categorization)

All requests must be approved by an administrator before changes are applied.

## Reservation System

A reservation includes:

- Guest information
- Accommodation reference
- Stay period (check-in / check-out)
- Number of guests
- Reservation date
- Payment status
- Cancellation status

## Reviews

Only guests who stayed can leave reviews

Reviews include:

- Rating
- Comment
- Admin can:
- Hide reviews
- Restore visibility

## Authentication

- Role-based access control (RBAC)
- Guest / Owner / Admin permissions
- Secure API routes

## Live demo

Frontend: <a href="https://accommodoapp.onrender.com/">https://accommodoapp.onrender.com/</a>

Backend: <a href="https://accommodoapp-backend.onrender.com/">https://accommodoapp-backend.onrender.com/</a>
