# Node.js 18 LTS kullan
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json'ı kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install --production

# Tüm dosyaları kopyala
COPY . .

# Port 8888'i expose et
EXPOSE 8888

# Uygulamayı başlat
CMD ["node", "server.js"]
