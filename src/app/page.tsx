'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Clock, Star, Cake, Coffee, Cookie } from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isScrolled, setIsScrolled] = useState(false)

  const products = [
    { id: 1, name: 'Roti Manis', category: 'bread', price: 'Rp 15.000', rating: 4.8 },
    { id: 2, name: 'Croissant', category: 'bread', price: 'Rp 20.000', rating: 4.9 },
    { id: 3, name: 'Cake Coklat', category: 'cake', price: 'Rp 85.000', rating: 4.7 },
    { id: 4, name: 'Donat', category: 'pastry', price: 'Rp 12.000', rating: 4.6 },
    { id: 5, name: 'Roti Gandum', category: 'bread', price: 'Rp 18.000', rating: 4.8 },
    { id: 6, name: 'Tart Buah', category: 'cake', price: 'Rp 120.000', rating: 4.9 },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <img
                  src="/bakery-logo.svg"
                  alt="NUR WULANDARI Bakery"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-900">NUR WULANDARI</h1>
                <p className="text-sm text-amber-700">Bakery & Cake - Premium Quality</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-amber-800 hover:text-amber-600 transition font-medium"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-amber-800 hover:text-amber-600 transition font-medium"
              >
                Produk
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-amber-800 hover:text-amber-600 transition font-medium"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-amber-800 hover:text-amber-600 transition font-medium"
              >
                Kontak
              </button>
              <a href="/privacy" className="text-amber-800 hover:text-amber-600 transition font-medium">Privacy</a>
              <a href="/terms" className="text-amber-800 hover:text-amber-600 transition font-medium">Terms</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
              Selamat Datang di <span className="text-orange-600">NUR WULANDARI</span>
            </h2>
            <p className="text-xl text-amber-700 mb-6">Roti dan Kue Premium dengan Cita Rasa Terbaik</p>
            <div className="flex justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
                <Star className="w-4 h-4 mr-1" /> 4.8 Rating
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2">
                <Clock className="w-4 h-4 mr-1" /> Buka Setiap Hari
              </Badge>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 transform hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => scrollToSection('products')}
            >
              Pesan Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-amber-600 text-amber-700 hover:bg-amber-50 transform hover:scale-105 transition-all duration-200"
            >
              Lihat Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-amber-200">
              <Cake className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Kue Premium</h3>
              <p className="text-amber-700">Berbagai pilihan kue dengan bahan berkualitas tinggi</p>
            </Card>
            <Card className="text-center p-6 border-amber-200">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Roti Segar</h3>
              <p className="text-amber-700">Roti yang dipanggang setiap hari dengan resep spesial</p>
            </Card>
            <Card className="text-center p-6 border-amber-200">
              <Cookie className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Pastry Artisan</h3>
              <p className="text-amber-700">Pastry buatan tangan dengan rasa yang autentik</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">Produk Unggulan Kami</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className={activeCategory === 'all' ? 'bg-orange-600 hover:bg-orange-700' : 'border-amber-600 text-amber-700'}
            >
              Semua
            </Button>
            <Button 
              variant={activeCategory === 'bread' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('bread')}
              className={activeCategory === 'bread' ? 'bg-orange-600 hover:bg-orange-700' : 'border-amber-600 text-amber-700'}
            >
              Roti
            </Button>
            <Button 
              variant={activeCategory === 'cake' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('cake')}
              className={activeCategory === 'cake' ? 'bg-orange-600 hover:bg-orange-700' : 'border-amber-600 text-amber-700'}
            >
              Kue
            </Button>
            <Button 
              variant={activeCategory === 'pastry' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('pastry')}
              className={activeCategory === 'pastry' ? 'bg-orange-600 hover:bg-orange-700' : 'border-amber-600 text-amber-700'}
            >
              Pastry
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border-amber-200">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  <Coffee className="w-16 h-16 text-orange-400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-bold text-orange-600">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-amber-700">{product.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Tambah ke Keranjang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Tentang <span className="text-orange-600">NUR WULANDARI</span></h2>
              <p className="text-amber-700 mb-4">
                NUR WULANDARI Bakery adalah usaha rumahan yang telah berdiri sejak tahun 2020, 
                berdedikasi untuk menyajikan roti dan kue berkualitas tinggi dengan bahan-bahan pilihan.
              </p>
              <p className="text-amber-700 mb-6">
                Kami menggunakan resep tradisional yang dipadukan dengan teknik modern untuk menghasilkan 
                produk yang lezat dan konsisten. Setiap produk dibuat dengan cinta dan perhatian pada detail.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-amber-700">Pelanggan Setia</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-amber-700">Varian Produk</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                <Cake className="w-32 h-32 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Hubungi Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-amber-200">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span className="text-amber-700">085353876138</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span className="text-amber-700">info@nurwulandari-bakery.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                  <span className="text-amber-700">
                    JALAN BENTENG GG. MUHAJIRIN, Desa/Kelurahan Pangkalan Sesai, 
                    Kec. Dumai Barat, Kota Dumai, Provinsi Riau
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-amber-700">Setiap Hari: 06:00 - 21:00</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-amber-200">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:border-orange-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:border-orange-400"
                />
                <textarea
                  placeholder="Pesan Anda"
                  rows={4}
                  className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:border-orange-400"
                />
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NUR WULANDARI</h3>
              <p className="text-amber-100">
                Bakery & Cake Premium dengan kualitas terbaik dan cita rasa yang autentik.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
              <ul className="space-y-2 text-amber-100">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition text-left w-full">Beranda</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition text-left w-full">Produk</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition text-left w-full">Tentang</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition text-left w-full">Kontak</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-amber-100">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-amber-800" />
          <div className="text-center text-amber-100">
            <p>&copy; 2024 NUR WULANDARI Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}