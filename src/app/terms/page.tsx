'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, ShoppingCart, Package, AlertTriangle, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                  <p className="text-xs text-amber-700">Terms & Conditions</p>
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
            <FileText className="w-16 h-16 mx-auto mb-4 text-orange-600" />
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Syarat & Ketentuan <span className="text-orange-600">NUR WULANDARI</span>
            </h1>
            <p className="text-lg text-amber-700">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Pendahuluan</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Selamat datang di <strong>NUR WULANDARI Bakery</strong>. Syarat dan Ketentuan ini 
                  mengatur penggunaan layanan kami, pembelian produk, dan hubungan hukum antara 
                  Anda sebagai pelanggan dan kami sebagai penyedia layanan.
                </p>
                <p>
                  Dengan melakukan pembelian atau menggunakan layanan kami, Anda menyetujui 
                  untuk terikat oleh Syarat dan Ketentuan ini.
                </p>
              </CardContent>
            </Card>

            {/* Product Information */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-orange-600" />
                  Informasi Produk
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <h3 className="font-semibold text-amber-900">Kualitas Produk:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Semua produk dibuat dengan bahan-bahan berkualitas tinggi</li>
                  <li>Produk segar dipanggang setiap hari</li>
                  <li>Kami berhak mengubah komposisi produk tanpa pemberitahuan sebelumnya</li>
                  <li>Warna dan tampilan produk dapat sedikit berbeda dari foto</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Informasi Alergen:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Produk kami mengandung: tepung terigu, susu, telur, dan kacang-kacangan</li>
                  <li>Pelanggan dengan alergi dimohon untuk memberitahukan saat pemesanan</li>
                  <li>Kami tidak bertanggung jawab atas reaksi alergi yang tidak dilaporkan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ordering Process */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-orange-600" />
                  Proses Pemesanan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <h3 className="font-semibold text-amber-900">Cara Pemesanan:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Online:</strong> Melalui website resmi kami</li>
                  <li><strong>Telepon:</strong> 085353876138 (jam operasional)</li>
                  <li><strong>Langsung:</strong> Di toko kami</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Konfirmasi Pesanan:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pesanan akan dikonfirmasi melalui WhatsApp atau telepon</li>
                  <li>Pembayaran dapat dilakukan tunai atau transfer</li>
                  <li>Pesanan dianggap sah setelah pembayaran dikonfirmasi</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Batas Waktu Pemesanan:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pesanan reguler: minimal 2 jam sebelum pengambilan</li>
                  <li>Pesanan kue khusus: minimal 24 jam sebelumnya</li>
                  <li>Pesanan besar (di atas 20 item): minimal 1 hari sebelumnya</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing and Payment */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Harga dan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <h3 className="font-semibold text-amber-900">Harga:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Harga yang tercantum adalah harga akhir</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan</li>
                  <li>Untuk pesanan khusus, harga akan disesuaikan</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Metode Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Tunai:</strong> Saat pengambilan atau pengiriman</li>
                  <li><strong>Transfer:</strong> Bank BCA, Mandiri, atau BNI</li>
                  <li><strong>E-Wallet:</strong> GoPay, OVO, Dana</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Kebijakan Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pembayaran harus lunas sebelum produk diserahkan</li>
                  <li>Untuk pesanan besar, DP minimal 50% diperlukan</li>
                  <li>Bukti transfer harus dikirimkan untuk konfirmasi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Pengiriman</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <h3 className="font-semibold text-amber-900">Area Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kota Dumai dan sekitarnya</li>
                  <li>Untuk luar kota, menggunakan jasa ekspedisi</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Biaya Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dumai Barat: Rp 10.000 - Rp 15.000</li>
                  <li>Dumai Timur: Rp 15.000 - Rp 20.000</li>
                  <li>Luar kota: Sesuai tarif ekspedisi</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Waktu Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dalam kota: 1-2 jam setelah pesanan siap</li>
                  <li>Luar kota: 1-3 hari kerja</li>
                </ul>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-orange-600" />
                  Pengembalian dan Pengembalian Dana
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <h3 className="font-semibold text-amber-900">Kebijakan Pengembalian:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Produk dapat dikembalikan jika ada cacat produksi</li>
                  <li>Pengembalian harus dilakukan maksimal 2 jam setelah pengambilan</li>
                  <li>Produk yang sudah dikonsumsi tidak dapat dikembalikan</li>
                </ul>

                <h3 className="font-semibold text-amber-900 mt-4">Proses Pengembalian Dana:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dana akan dikembalikan dalam 3-5 hari kerja</li>
                  <li>Pengembalian menggunakan metode yang sama dengan pembayaran</li>
                  <li>Biaya pengiriman tidak dikembalikan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  <strong>NUR WULANDARI Bakery</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keterlambatan pengiriman di luar kendali kami</li>
                  <li>Kerusakan produk akibat handling yang salah</li>
                  <li>Reaksi alergi yang tidak dilaporkan sebelumnya</li>
                  <li>Kehilangan pesanan setelah diserahkan ke kurir</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Semua konten di website kami termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Logo dan merek dagang "NUR WULANDARI"</li>
                  <li>Foto produk dan resep</li>
                  <li>Desain dan tata letak website</li>
                  <li>Konten tertulis dan grafis</li>
                </ul>
                <p>
                  Dilindungi oleh hak cipta dan tidak boleh digunakan tanpa izin tertulis dari kami.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Kami berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan 
                  diberlakukan segera setelah dipublikasikan di website. Pelanggan disarankan 
                  untuk secara berkala meninjau Syarat dan Ketentuan ini.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-4">
                <p>
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-amber-50 p-4 rounded-lg space-y-2">
                  <p><strong>Nama:</strong> NUR WULANDARI Bakery</p>
                  <p><strong>Email:</strong> info@nurwulandari-bakery.com</p>
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