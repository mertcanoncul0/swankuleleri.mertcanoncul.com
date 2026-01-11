const express = require('express')
const path = require('path')

const app = express()
const PORT = 8888

// Static dosyaları serve et
app.use(express.static(path.join(__dirname)))

// Ana sayfa
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 SWAN Kuleleri sunucusu çalışıyor!`)
  console.log(`📱 http://localhost:${PORT} adresinden erişebilirsiniz`)
  console.log(`🦢 Port: ${PORT}`)
})
