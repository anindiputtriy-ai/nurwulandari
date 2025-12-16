'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-900">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <img
                    src="/bakery-logo.svg"
                    alt="NUR WULANDARI Bakery"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-amber-900">NUR WULANDARI</h1>
                  <p className="text-xs text-amber-700">Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-orange-600" />
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Kebijakan Privasi <span className="text-orange-600">NUR WULANDARI</span>
            </h1>
            <p className="text-lg text-amber-700">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Di <strong>NUR WULANDARI Bakery</strong>, kami sangat menghargai privasi Anda dan 
                  berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  menyimpan, dan melindungi data pribadi Anda saat menggunakan layanan kami.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan 
                  dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-600" />
                  Pengumpulan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <h3 className="font-semibold text-amber-900">Informasi yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Data Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                  <li><strong>Data Pesanan:</strong> Produk yang dipesan, jumlah, tanggal pembelian</li>
                  <li><strong>Data Pembayaran:</strong> Metode pembayaran, informasi transaksi (diproses secara aman)</li>
                  <li><strong>Data Penggunaan:</strong> Riwayat pembelian, preferensi produk</li>
                  <li><strong>Data Teknis:</strong> Alamat IP, browser, perangkat yang digunakan</li>
                </ul>
                
                <h3 className="font-semibold text-amber-900 mt-4">Cara Kami Mengumpulkan Data:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Saat Anda melakukan pemesanan melalui website atau telepon</li>
                  <li>Saat Anda membuat akun pelanggan</li>
                  <li>Saat Anda berlangganan newsletter kami</li>
                  <li>Melalui cookies dan teknologi pelacakan lainnya</li>
                  <li>Saat Anda menghubungi layanan pelanggan kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-orange-600" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Kami menggunakan informasi pribadi Anda untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Memproses Pesanan:</strong> Menyiapkan dan mengirimkan produk yang Anda pesan</li>
                  <li><strong>Layanan Pelanggan:</strong> Merespons pertanyaan dan memberikan dukungan</li>
                  <li><strong>Personalisasi:</strong> Menampilkan produk dan penawaran yang relevan</li>
                  <li><strong>Peningkatan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas produk dan layanan</li>
                  <li><strong>Komunikasi:</strong> Mengirimkan informasi tentang produk baru, promosi, dan update</li>
                  <li><strong>Keamanan:</strong> Mencegah aktivitas penipuan dan menjaga keamanan platform</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Perlindungan Data</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  <strong>NUR WULANDARI Bakery</strong> berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi hanya untuk staf yang berwenang</li>
                  <li>Server yang aman dan terlindungi</li>
                  <li>Pembaruan keamanan reguler</li>
                  <li>Kebijakan retensi data yang jelas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Berbagi Data dengan Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                  untuk tujuan pemasaran, kecuali:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Penyedia Layanan:</strong> Jasa pengiriman, pemroses pembayaran, dan layanan teknis</li>
                  <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan</li>
                  <li><strong>Keamanan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Hak Anda</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Sebagai pelanggan, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Mengoreksi Data:</strong> Memperbarui informasi yang tidak akurat</li>
                  <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi (dengan batasan tertentu)</li>
                  <li><strong>Menolak Pemasaran:</strong> Berhenti menerima komunikasi pemasaran</li>
                  <li><strong>Portabilitas Data:</strong> Meminta transfer data ke layanan lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Kebijakan Cookies</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mengingat preferensi dan pengaturan Anda</li>
                  <li>Menganalisis traffic website dan penggunaan</li>
                  <li>Menyediakan fungsionalitas e-commerce</li>
                  <li>Menampilkan iklan yang relevan</li>
                </ul>
                <p>
                  Anda dapat mengontrol cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                  menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="bg-amber-50 p-4 rounded-lg space-y-2">
                  <p><strong>Nama:</strong> NUR WULANDARI Bakery</p>
                  <p><strong>Email:</strong> privacy@nurwulandari-bakery.com</p>
                  <p><strong>Telepon:</strong> 085353876138</p>
                  <p><strong>Alamat:</strong> JALAN BENTENG GG. MUHAJIRIN, Desa/Kelurahan Pangkalan Sesai, 
                  Kec. Dumai Barat, Kota Dumai, Provinsi Riau</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NUR WULANDARI Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}