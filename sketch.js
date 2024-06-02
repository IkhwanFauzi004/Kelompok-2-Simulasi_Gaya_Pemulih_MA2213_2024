//BAGIAN SIMULASI 1
var mass2 = 10; // massa
//var k2 = 0.1; // konstanta pegas
var damping2 = 0; // faktor redaman
var x2 = 20; // posisi awal
var v2 = 0; // kecepatan awal
var a2 = 0; // percepatan awal
//var f_ext2 = 0; // gaya luar

var plotData2 = []; // variabel untuk menyimpan data plotss

//SIMULASI 2
var mass = 10; // massa
//var k = 0.1; // konstanta pegas
var x = 20; // posisi awal
var v = 0; // kecepatan awal
var a = 0; // percepatan awal
//var f_ext = 0; // gaya luar

var plotData = []; // variabel untuk menyimpan data plot

let frek;
let damp;
let amp;
let k;

let frek2;
let amp2;
let k2;

//IMAGE
let bg;
let logo;
let bgimage;
let profil;
let question;
let pb;
let pd;
let programmer;
let code;
let grafik;
let pers;
let bmkg;
let dapus;
let cocogoose;
let cocogoose1;
let josefin;
let josefin2;
let josefin3;
let Ani;


function preload(){
  bg = loadImage('kerambaapung.jpg')
  logo = loadImage('logoganda.png')
  bgimage = loadImage('frameimg.png')
  question = loadImage('question.png')
  pb = loadImage('pb.jpg')
  pd = loadImage('pd.jpg')
  code = loadImage('redaman.jpg')
  grafik1 = loadImage('redaman2.jpg')
  grafik2 = loadImage('woredaman2.jpg')
  pers = loadImage('quadcopy.png')
  bmkg = loadImage('bmkg.png')
  pnjlsn = loadImage("pnjlsn.png")
  dapus = loadImage("dapus.png")
  maratus = loadImage("maratus.jpg")
  fauzi = loadImage("fauzi.jpg")
  vinca = loadImage("vinca.jpg")
  Ani = loadImage("Ani.jpg")
  nazwa = loadImage("nazwa.jpg")
  ahmad = loadImage("ahmad.jpg")
 
  cocogoose = loadFont('Cocogoose Pro-trial.ttf'); 
  cocogoose1 = loadFont('Cocogoose Pro Light-trial.ttf');
  josefin = loadFont('JosefinSans-Medium.ttf');
  josefin2 = loadFont('JosefinSans-Regular.ttf');
  josefin3 = loadFont('JosefinSans-Light.ttf');
  
//BAGIAN SIMULASI
  home2=loadImage("air.png")
  
//BAGIAN SIMULASI 2
  home=loadImage("air.png")
}

function setup(){
  createCanvas(1450 , 2720);
  background("#FF7F50")
  image(bg, 0, 0, 1450, 300);
  image(logo, 650, -40, 120, 120);
  image(bgimage, 90, 2340, 300, 350);
  image(fauzi, 190, 2430, 90, 120);
  image(bgimage, 265, 2340, 300, 350);
  image(vinca, 370, 2430, 90, 120);
  image(bgimage, 440, 2340, 300, 350);
  image(Ani, 545, 2430, 90, 120);
  image(bgimage, 615, 2340, 300, 350);
  image(maratus, 720, 2430, 90, 120);
  image(bgimage, 790, 2340, 300, 350);
  image(nazwa, 890, 2430, 90, 120);
  image(bgimage, 965, 2340, 300, 350);
  image(ahmad, 1070, 2430, 90, 120);
  image(question, 50, 340, 160, 160);
  image(pnjlsn,1190,700,170,170);
  image(dapus, 650, 1900, 250, 250);

//------------------------------------------------------------//
//BAGIAN SIMULASI 1
  
 //input frekuensi
  u=createInput(0.01)
  u.position(385, 695)
  u.changed(frek2)
  frek2();
  
function frek2(){
   frekuensi2 = (u.value())
}
  
//input amplitudo
  q=createInput(30)
  q.position(385, 750)
  q.changed(amplitudo2)
  amplitudo2();
  
function amplitudo2(){
   amp2 = (q.value())
}
  
//input k
  f=createInput(0.1)
  f.position(385, 805)
  f.changed(kpegas2)
  kpegas2();
  
function kpegas2(){
   k2 = (f.value())
}
  
// mengatur skala plot
  plotData2.push(x2); // memasukkan posisi awal ke dalam data plot
  for (var i = 0; i < 100; i++) {
    plotData2.push(0); // mengisi data plot dengan 0
  } 
  
///BAGIAN SIMULASI 2
  
//input frekuensi
  p=createInput(0.01)
  p.position(385, 1515)
  p.changed(frek)
  frek();
  
function frek(){
   frekuensi = (p.value())
}
  
//input amplitudo
  l=createInput(30)
  l.position(385, 1570)
  l.changed(amplitudo)
  amplitudo();
  
function amplitudo(){
   amp = (l.value())
}

//input k
  g=createInput(0.1)
  g.position(385, 1625)
  g.changed(kpegas)
  kpegas();
  
function kpegas(){
   k = (g.value())
}

//input redaman
  t=createInput(5)
  t.position(385, 1680)
  t.changed(damp)
  damp();
  
function damp(){
   damping = (t.value())
}

// mengatur skala plot
  plotData.push(x); // memasukkan posisi awal ke dalam data plot
  for (var i = 0; i < 100; i++) {
    plotData.push(0); // mengisi data plot dengan 0
  }
}

function draw(){
  
//JUDUL
  textSize(66);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("white");
  noStroke();
  text("SIMULASI GAYA PEMULIH", 697, 152);
  
  textSize(66);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("#09499F");
  noStroke();
  text("SIMULASI GAYA PEMULIH", 700, 150);
  
//SUBJUDUL
  textSize(17);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("#09499F");
  stroke("white");
  strokeWeight(3);
  text("SIMULASI GELOMBANG LAUT PADA KERAMBA APUNG DENGAN PEREDAM DAN TANPA PEREDAM", 705, 170);
  
/////////////////////////////////////////////PROFIL DATA bagian bawah//////////////////////////////////////////////////
  
  fill("#09499F");
  noStroke()
  rect(530, 2310,300,40,20);

  textFont(cocogoose);
  fill("white");
  noStroke();
  text("Anggota Kelompok Dua :", 700, 2337,);

  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Ikhwan Fauzi", 230, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Ikhwan Fauzi", 232, 2410 )
  text("1 2 2 1 6 0 0 0 4", 240, 2575)
  
 
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Vinca Rahmawati", 413, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Vinca Rahmawati", 414, 2410 )
  text("1 2 2 1 6 0 0 0 8", 415, 2575)
  
  
  textSize(13);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Ani Riswanti", 588, 2412 )
  
  textSize(13);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Ani Riswanti", 589, 2410 )
  text("1 2 2 1 6 0 0 1 5", 590, 2575)
  
  
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Mar'atus Sholikhah", 763, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Mar'atus Sholikhah", 764, 2410 )
  text("1 2 2 1 6 0 0 1 9", 765, 2575)
  
  
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Nazwa Alya M", 938, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Nazwa Alya M", 939, 2410 )
  text("1 2 2 1 6 0 0 3 4", 940, 2575)
  

  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("Ahmad Ferdiansyah", 1115, 2412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("Ahmad Ferdiansyah", 1115, 2410 )
  text("1 2 2 1 6 0 0 6 9", 1115, 2575)
  
  
  fill("#09499F");
  noStroke()
  rect(100,2630,1150,30,10);
  
  textSize(17);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("note : web simulasi ini dibuat untuk memenuhi tugas besar mata kuliah Visualisasi dalam Sains program studi Matematika Institut Teknologi Sumatera", 670, 2650);
  
//////////////////////////////////////////////BAGIAN INTERMEZZO ATAS///////////////////////////////////////////////////////////////
  
  //SHAPE
  let lbcolor = color('#09499F');
  fill(lbcolor);
  noStroke();
  rect( 250, 350, 1015, 150, 20);
  
  //TEXT JUDUL
  textSize(24);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Peredam Pada Keramba Apung", 260, 380);

  //TEXT ISI
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Gaya apung adalah gaya yang diberikan oleh fluida (air) terhadap benda yang tenggelam atau terapung di dalamnya. Pada keramba ", 260, 403);
  text("apung, gaya apung menjaga keramba tetap terapung di permukaan air, meskipun ada gelombang yang menyebabkan gerakan naik-turun.", 260, 421);
  text("Fungsi peredam adalah untuk menjaga stabilitas gelombang, mengurangi resiko kerusakan keramba serta kesejahteraan ikan yang", 260, 439);
  text("dibudidayakan di dalamnya. Simulasi ini diperlukan untuk mengetahui gelombang yang terbentuk sebelum dan sesudah terdapat gaya", 260, 457);
  text("peredam dari gaya pemulih. ", 260, 475);

  
//PERSAMAAN  
  textSize(34);
  textAlign(RIGHT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Persamaan", 1000, 1300);
  
  textSize(34);
  textAlign(RIGHT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Persamaan", 1002, 1300);
  
  image(pers,250, 900, 2720,1050);
  image(pb, 1100, 1350, 250, 120);
  image(pd, 900, 1520, 500, 120);
  
//BEDA
  
  textSize(24);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("A. Beda", 1100, 1342);
  
//   //DIFERENSIAL
//   textSize(24);
//   textAlign(LEFT)
//   textFont(josefin);
//   fill("#09499F");
//   noStroke();
//   text("b. Diferensial", 750, 1302);
  
  textSize(24);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("B. Diferensial", 900, 1510);

  
//DAPUS
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Daftar Pustaka", 450, 2030);

  
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Daftar Pustaka", 452, 2032);
  
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("[1] Christopher G Piecucch, R. M. (2013). contrubution of wind forcing and surface heating to interannual", 260, 2130);
  text("    sea level variations in the atlantic ocean. journals ametsoc.", 260, 2150);
  text("[2] Herry, B. K. (2019). Analisa Performa Gaya Apung, Gaya TenggelamPurse Seine Cakalang KM Bintang", 260, 2190);
  text("    Surya. Saintek Perikanan: Indonesian Journal ofFisheries Science and Technology Vol.15 .", 260, 2210);
  text("[3] Suharyo, O. S. (2018). ancang Bangun Alat Pengukur Gelombang Permukaan Laut Presisi Tinggi", 260, 2250);
  text("    (A Prototype Design). journal2.unusa.", 260, 2270);

  fill("#09499F");
  rect(0,3276,1350,5);
  
  fill("white");
  rect(0,3280,1350,5);
  
  
//Visualisasi
  image(bmkg, 980, 520, 200, 160);
  textSize(35);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Visualisasi Gelombang dengan Redaman", 300, 570);
  text("        dan Tanpa Redaman", 350, 610);
  
  textSize(35);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Visualisasi Gelombang dengan Redaman", 302, 572);
  text("        dan Tanpa Redaman", 352, 612);
  
  textSize(40);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Penjelasan", 875, 825);
  
  textSize(40);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Penjelasan", 877, 827);
  
  textSize(18);
  textAlign(LEFT)
  textFont(josefin3);
  fill("white");
  noStroke();

  text("Dengan memahami konsep gaya apung dan peran peredam dalam struktur", 820, 895);
  text("keramba apung, kita dapat melihat bagaimana stabilitas dan keamanan", 820, 915);
  text("keramba serta kesejahteraan ikan yang dibudidayakan dapat ditingkatkan.", 820, 935);
  text("Simulasi ini memberikan gambaran visual sederhana tentang bagaimana", 820, 955);
  text("gelombang laut mempengaruhi keramba apung dengan dan tanpa peredam.", 820, 975);
  
  text("Tanpa Peredam: Keramba bergerak sesuai pola gelombang yang tidak teredam", 820, 1020);
  text("memperlihatkan gerakan naik-turun yang signifikan sesuai dengan amplitudo", 820, 1040);
  text("gelombang.", 820, 1060);
  
  text("Dengan Peredam: Simulasi menunjukkan peredam yang mengurangi amplitudo", 820, 1105);
  text("gelombang yang mencapai keramba. Meskipun dalam simulasi ini tidak ada", 820, 1125);
  text("perubahan nyata pada pergerakan keramba karena peredam hanya digambar-", 820, 1145);
  text("kan secara visual, dalam kenyataan, peredam akan mengurangi efek gelombang", 820, 1165);
  text("sehingga keramba lebih stabil.", 820, 1185);
  
  
  
  
  
 
  
//------------------------BAGIAN SIMULASI-------------------------//

///////////////////////TANPA REDAMAN//////////////////////////////
  noStroke()
  fill("white")
  rect(0,660,750,790,20);
  
  textSize(20);
  fill("black");
  text("A. Gelombang Tanpa Redaman", 15, 650);

//penamaan input
  textSize(15);
  textAlign(LEFT)
  fill("black");
  noStroke();
  text("Masukan nilai frekuensi ", 385, 685);
  text("Masukan nilai amplitudo ", 385, 740);
  text("Masukan nilai konstanta apung", 385, 795);
  
  // menghitung gaya total
  var f_spring2 = -k2 * x2; // gaya pegas
  var f_damping2 = -damping2 * v2; // gaya redaman
  var f_ext2 = amp2 * sin(frameCount / frekuensi2);
  var f_total2 = f_spring2 + f_damping2 + f_ext2; // gaya total

  // menghitung percepatan
  a2 = f_total2 / mass2;

  // menghitung kecepatan dan posisi baru
  v2 = v2 + a2 * 0.3; // 0.3 adalah delta waktu
  x2 = x2 + v2 * 0.3;

  // menambahkan posisi baru ke dalam data plot
  plotData2.push(x2);

  // menghapus data plot yang paling lama
  if (plotData2.length > 100) {
    plotData2.shift();
  }

  // menggambar grafik
  stroke("red");
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < plotData2.length; i++) {
    var x_plot2 = map(i, 0, plotData2.length - 1, 375, 745);
    var y_plot2 = map(plotData2[i], -60, 60, 760,1060 );
    vertex(x_plot2, y_plot2);
  }
  endShape();

  // menggambar massa dan pegas
  stroke(0);
  strokeWeight(2);
  fill(255);
  image(home2, 15, 790 + x2 * 10, mass2 * 40, mass2 * 35);
  
  stroke(0);
  strokeWeight(5);
  line(375, 662, 375,1450);
  
  
/////////////////////PAKAI REDAMAN///////////////////////////
  noStroke()
  fill("white")
  rect(0,1480,750,430,20);

  textSize(20);
  fill("black");
  text("B. Gelombang Dengan Redaman", 15, 1475);
  
  textSize(15);
  textAlign(LEFT)
  fill("black");
  noStroke();
  text("Masukan nilai frekuensi ", 385, 1505);
  text("Masukan nilai amplitudo ", 385, 1560);
  text("Masukan nilai konstanta apung", 385, 1615);
  text("Masukan nilai redaman", 385,1670);
  
// menghitung gaya total
  var f_spring = -k * x; // gaya pegas
  var f_damping = -damping * v; // gaya redaman
  var f_ext = amp * sin(frameCount / frekuensi);
  var f_total = f_spring + f_damping + f_ext; // gaya total

// menghitung percepatan
  a = f_total / mass;

// menghitung kecepatan dan posisi baru
  v = v + a * 0.3; // 0.3 adalah delta waktu
  x = x + v * 0.3; 

// menambahkan posisi baru ke dalam data plot
  plotData.push(x);

// menghapus data plot yang paling lama
  if (plotData.length > 100) {
    plotData.shift();
  }

// menggambar grafik
  stroke("red");
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < plotData.length; i++) {
    var x_plot = map(i, 0, plotData.length - 1, 375, 745);
    var y_plot = map(plotData[i], -80, 80, 1225, 2225);
    vertex(x_plot, y_plot);
  }
  endShape();

// menggambar massa dan pegas
  stroke(0);
  strokeWeight(2);
  fill(255);
  image(home, 15, 1420 + x * 10, mass * 40, mass * 35);
  
  stroke(0);
  strokeWeight(5);
  line(375, 1482, 375, 1908); 
}




//rgb(120,31,31)rgb(58,30,30)rgb(137,68,68)rgb(117,86,86)rgb(12,11,11)