# Inventory App

## Cara Penggunaan
1.  Download inventory-app dengan klik `Clone or Download` pilih Download ZIP.
2.  Ekstrak file .zip dengan Ekstrak here, maka didapat folder <b>inventory-app-master</b>
3.  Download dan install XAMPP, link <a href="https://www.apachefriends.org/download.html">https://www.apachefriends.org/download.html</a>.
4.  Copy atau pindahkan <b>inventory-app-master</b> kedalam folder instalasi xampp\htdocs, secara default seperti ini C:\xampp\htdocs. Folder inventory-app-master dimasukkan ke dalam folder htdocs.
5.  Buka XAMPP, kemudian tekan Start pada bagian Apache dan MySQL.
6.  Buka Browser, kemudian masuk ke phpmyadmin dengan alamat `localhost/phpmyadmin/`.
7.  Buat Database baru dengan klik New, kemudian namai database dengan `inventorydb`.
8.  Import file sql dengan cara klik database inventorydb kemudian pilih menu <b>Import</b> dibagian atas, pilih choose file dan pilih file <b>inventorydb.sql</b> pada folder inventory-app-master tadi. Setelah itu tekan <b>Go</b> pada bagian bawah.
9.  Localhost siap digunakan dengan masuk ke `localhost/[nama folder]` misalnya `localhost/inventory-app-master`.

## Cara Testing
1.  Buka Localhost aplikasi.
2.  Buka Console DevTools pada browser dengan `click kanan > inspect element > pilih tab console` atau tekan tombol <b>ctrl + shift + j</b>.
3.  Tuliskan perintah `setInput(<kuantitas pengecekan>, <kecepatan per sekali input dalam milisecond>)`. Contohnya <b>setInput(100, 20);</b> maka akan dilakukan input sebanyak 100 kali dengan kecepatan 20ms setiap satu kali inputnya.
4.  Gunakan perintah <b>deleteAll();</b> untuk menghapus seluruh data pada database dan memulai dari awal lagi.