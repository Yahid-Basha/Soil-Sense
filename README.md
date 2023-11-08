# Fertiliser Predictor App

The Fertiliser Predictor App is a cutting-edge tool designed to assist farmers in making informed decisions about fertiliser application for cotton plants. Utilizing IoT technology, the app simplifies the process of determining the optimal fertiliser composition based on real-time soil data.

## Table of Contents

- [Introduction](#introduction)
- [App Screens](#app-screens)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Home Screen](#home-screen)
  - [Prediction Screen](#prediction-screen)
- [API Integration](#api-integration)
- [Limitations and Future Scope](#limitations-and-future-scope)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This app leverages a custom-built API to predict the necessary fertiliser based on soil conditions. Farmers can input soil moisture, nitrogen, phosphorous, and potassium values via an IoT device. These values are then received by the app, and with a simple press of the 'Predict' button, the farmer is provided with the fertiliser recommendation.

## App Screens
![FotoJet (1)](https://github.com/Yahid-Basha/Fertiliser-Predictor-App/assets/97111767/ff5ee293-0c8f-436b-a254-b66701e55dbb)


## Features

- Real-time soil data analysis.
- Easy-to-use interface with minimal input required.
- Accurate fertiliser predictions for cotton plants.
- IoT device integration for automated data capture.

## Getting Started

### Prerequisites

- An IoT device capable of measuring soil moisture, nitrogen, phosphorous, and potassium levels.
- Internet connectivity for API communication.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yahid-Basha/Fertiliser-Predictor-App.git
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd Fertiliser-Predictor-App
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Usage

### Home Screen

The home screen is the launchpad of the app where the farmer can view the latest soil data received from the IoT device.

### Prediction Screen

After the soil data is updated, the farmer can navigate to the prediction screen and press the 'Predict' button to receive the fertiliser recommendation.

## API Integration

The app is integrated with a custom API for fertiliser prediction, which is available at:
[https://github.com/Yahid-Basha/fertiliserpredictor-api.git](https://github.com/Yahid-Basha/fertiliserpredictor-api.git)

## Limitations and Future Scope

Currently, the app supports fertiliser prediction for cotton plants only. We are planning to expand our dataset to include other crops for broader applicability.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.
