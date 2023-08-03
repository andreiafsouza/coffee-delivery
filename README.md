<h1 align="center"> Express Coffee Delivery </h1>

![home](https://drive.google.com/uc?export=view&id=11-4MZUhSHo3-WzviPgCMJYHlBkw7BbHa)

## ☕🛒 What is this project about?

This is a web app where you can order a variety of coffee types to be delivered right where you are (the delivery system only operates within Brazil). Simply choose your favorite coffees and add them to the shopping cart, specify the desired delivery address (you can select your current location with just one click), and choose the preferred payment method.

<a href="https://coffee-delivery-git-main-andreiafsouza.vercel.app/" style="text-decoration: underline; color: white; font-size: 18px;">Here you can access the app</a>

## 🛠️ What technologies and tools were used to build this project?

🔸 React<br>
🔸 TypeScript<br>
🔸 Styled Components<br>
🔸 Vite<br>
🔸 Zod<br>
🔸 Context API<br>
🔸 Google Maps JavaScript API<br>
🔸 Google Places API<br>

## 💻 Features

🔸 Select products and add to shopping cart<br>
🔸 Fill up form and save address information<br>
🔸 Autofill address form using suggestions from google places api<br>
🔸 Autofill address form using only the postal code information<br>
🔸 Select the preferred payment method<br>
🔸 Place your order<br>

## What do I need to do to run this project?

You'll need to create a Google Cloud project, enable the Maps JavaScript API and Places API, and set up a restricted access token. After that, you can create a .env file in the root folder of the project and assign the token to the VITE_REACT_APP_MAPS_API_KEY variable.

```cl
VITE_REACT_APP_MAPS_API_KEY="place your token here"
```

You can use **npm install** to install all dependencies.
After that, just initialize the project.

```cl
npm run dev
```
