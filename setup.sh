#!/usr/bin/env bash

# Angular Interview Prep Platform - Setup Script
# This script helps set up the development environment

set -e

echo "=========================================="
echo "Frontend Architect Interview Prep Setup"
echo "=========================================="
echo ""

# Check Node.js version
echo "Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION"

# Check npm version
echo "Checking npm version..."
NPM_VERSION=$(npm -v)
echo "npm version: $NPM_VERSION"

echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "Checking Angular CLI..."
if ! command -v ng &> /dev/null; then
    echo "Installing Angular CLI..."
    npm install -g @angular/cli@20
fi

echo ""
echo "=========================================="
echo "Setup Complete! 🎉"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Start development server: npm start"
echo "2. Navigate to: http://localhost:4200"
echo "3. Begin coding!"
echo ""
echo "Useful commands:"
echo "  npm start          - Start dev server"
echo "  npm run build:prod - Build for production"
echo "  npm test           - Run tests"
echo "  npm run format     - Format code"
echo "  npm run lint       - Lint code"
echo ""
