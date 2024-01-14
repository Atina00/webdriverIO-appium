# Automation Suite 

This repository contains an automation suite for testing an iOS application called UIKitCatalog, implemented using Appium, WebDriverIO, and Mocha.

## Table of Contents

- [Project Overview](#project-overview)
- [Tools and Technologies](#tools-and-technologies)
- [Project Structure](#project-structure)
- [Process, Issues and Troubleshooting](#issues-and-troubleshooting)


## Project Overview

The automation suite is designed to perform testing of iOS application. It covers 3 scenarios: text present on the screen, validate any button on the screen, validate any error on the screen

## Tools and Technologies

The following tools and technologies were used in this project:

- Node.js: Used for running JavaScript-based automation scripts.
- NPM: It is the default package manager for Node.js, a JavaScript runtime environment.
- Homebrew: It allows you to easily install and manage software packages on your system.
- Carthage: It is specifically designed for managing external dependencies, such as libraries and frameworks, in Xcode projects.
- Appium: An open-source tool for automating mobile applications.
- Appium Inspector: Appium Inspector is a graphical user interface (GUI) tool to inspect and interact with mobile applications for the purpose of test automation. 
- Appium-doctor: To check if your OS meets the appium requirements, install this node package.
- Appium driver: xcuitest
- iOS application
- WebDriverIO: A JavaScript-based test automation framework.
- Mocha: A popular JavaScript test framework.
- Xcode: Required for iOS app testing.
- Xcode Simulator for testing

## Automation suit structure

 automation-suite/
├── test/
│   ├── pageobjects/
│   │   ├── AlertViewsPage.js
│   │   ├── DatePickerChange.js
│   │   └── SliderViewControllerPage.js
│   │
│   ├── specs/
│   │   ├── test1.js
│   │   ├── test2.js
│   │   └── test3.js
│   │
│   ├── package-lock.json
│   ├── package.json
│   ├── wdioappiumlog
│   └── wdio.conf.js
│
└── README.md
