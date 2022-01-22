document.getElementById('button').addEventListener('click', function() {
   let nama = document.getElementById('nama').value
   alert("Hi, " + nama)
   let kelas = document.getElementById('kelas').value
   alert("Apakah kamu benar kelas " + kelas + "?")
   let alamat = document.getElementById('alamat').value
   alert("Apakah kamu benar tinggal di " + alamat + "?")
   let about = document.getElementById('about').value
   alert("TMI kamu : " + about)
})