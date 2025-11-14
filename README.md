# 🕓 Render Keep

A lightweight Node.js service that keeps Render-hosted apps awake by sending periodic pings to prevent them from going idle.

## Overview
Render’s free tier puts web services to sleep after a short period of inactivity.  
**Render Keep** solves that by automatically sending GET requests to your app’s URL at set intervals — keeping it warm and ready to respond instantly.

## Features
- Periodic pings using `axios`
- Customizable interval time
- Console logs with timestamps
- Optional GitHub Actions workflow for free scheduled pings
