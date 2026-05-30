# 🎬 Movie Discovery Platform

A modern Flutter application for discovering movies with real-time content management powered by Firebase Firestore.

## 🚀 Features

* Browse movies with beautiful UI
* Movie details screen with poster, overview, genres, and ratings
* Optional video trailer playback
* Favorites management
* Real-time Firestore updates
* Admin Dashboard

  * Add new movies
  * Edit existing movies
  * Delete movies
* Firebase-backed dynamic content
* Responsive design
* Loading and error states

## 🏗️ Architecture

The application follows a feature-based architecture using Riverpod for state management.

```text
lib/
├── features/
│   ├── home/
│   ├── movie_details/
│   ├── favorites/
│   └── admin/
├── models/
├── services/
├── providers/
├── widgets/
└── core/
```

## 🛠️ Tech Stack

* Flutter
* Dart
* Riverpod
* Firebase Core
* Cloud Firestore
* Go Router
* Video Player
* Shimmer

## 📱 Screenshots

### Home Screen

<img width="1080" height="2400" alt="home" src="https://github.com/user-attachments/assets/835beed5-b849-403c-8a56-9adfce8fd274" />


### Movie Details

<img width="1080" height="2400" alt="details" src="https://github.com/user-attachments/assets/a9edc13d-bd8f-4ac7-9a00-f642d01f58b0" />


### Admin Dashboard

<img width="1080" height="2400" alt="admin" src="https://github.com/user-attachments/assets/9a275dcb-107d-4c65-9772-67f9f68958c7" />


### Add Movie Screen

<img width="1080" height="2400" alt="add_movie" src="https://github.com/user-attachments/assets/2890cbb1-7389-4257-8568-ebc05c2054b4" />


## 🔥 Firebase Integration

* Cloud Firestore acts as the single source of truth.
* Movies are streamed in real time.
* Admin updates instantly reflect on the Home screen.
* Supports optional video trailer URLs.

## 🎯 Problem Solving Highlights

* Migrated from static JSON data to Firestore.
* Implemented real-time UI updates using Firestore streams.
* Added fallback image/video handling.
* Built an in-app admin dashboard instead of a separate web portal.
* Designed scalable feature-based architecture.

## 📦 Installation

```bash
git clone <repository-url>
cd DigiFyce_Task
flutter pub get
flutter run
```

## 👩‍💻 Developer

Keerthana G

* Flutter Developer
* iOS Developer

GitHub: https://github.com/KeerthanaGIT-ios
