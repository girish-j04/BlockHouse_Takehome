# 🚀 AuthenticationApp

A simple React_native Authentication app built with expo.

---

## What's Inside?

- **React Native + Expo** – I dont own a Mac, so had to use Expo Go to run apps.
- **Formik + Yup** – form handling & validation.
- **React Navigation** – Easy screen navigation.
- **React Native Paper** – UI components.
- **Context API** – global state management.

---

## Getting Started

Once the repo is cloned:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Launch

   ```bash
   npx expo start
   ```

3. Scan the QR code with your Expo Go app (iOS/Android)

---

## Authentication Flow

1. **Login Screen:**

   - Enter email and password.
   - On success, navigate to the welcome page.
   - Input validation kicks in only when you interact with a field.

2. **Signup Screen:**

   - Fill in email, password, and confirm password.
   - Once all fields satisfy input conditions, app navigates to welcome page.
   - Navigate back to login if you're already a member.

3. **Welcome Screen:**

   - Basic Landing page

---

## 🛠 Tech Stack

- **Expo** – I didn't have an android phone on hand, and just had linux without android studio installed.
- **React Native Paper** – consistent UI.
- **Formik & Yup** – to keep forms in check.
- **Context API** – state management.

---
