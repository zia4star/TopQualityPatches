#!/bin/bash
cd /var/www/TopQualityPatches || exit
echo "🔄 Pulling latest changes..."
git pull origin main
echo "📦 Installing dependencies..."
npm install
echo "🏗️ Building project..."
npm run build
echo "🚀 Restarting app..."
pm2 restart nextjs-app
echo "✅ Deployment complete!"
