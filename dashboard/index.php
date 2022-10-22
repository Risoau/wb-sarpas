<?php 

	require 'functions.php';
	$saranaDT = query("SELECT * FROM sarana");

	if( isset($_POST['telusuriButton']) ) {
		$saranaDT = srnSER($_POST["telusuriInput"]);
	};

	$showList = 10;

	if( five == 'five' ) {
		
	}

?>

<!DOCTYPE html>
<html lang="en">
<head>

	<!-- 

	If you are looking for a piece of content, press CTRL + F
	type what you want to find based on the data below:

		Inside head:
			1. Layout CSS Link
			2. Google Font
			3. Goole Icon
		
		Inside body:
			1. This is Header
			2. This is Navigation
			3. This is Main
			0. This is JavaScript Nest

	-->

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Dashboard Beta</title>

	<!-- Layout CSS Link -->
	<!-- <link rel="stylesheet" href="css/header.css"> -->
	<!-- <link rel="stylesheet" href="css/navigation.css"> -->
	<!-- <link rel="stylesheet" href="main.css">
	<link rel="stylesheet" href="css/index.css"> -->
	<link rel="stylesheet" href="css/index.css">

	<!-- Google Font -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fuzzy+Bubbles">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">

	<!-- Google Icon -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

	
</head>
<body>

	<!-- This is Header  -->
	<header>
		
		<p class="header-title">
			Sarpas
		</p>
		
		<ul class="header-menu">

			<li class="name-profile">
				Farhan Raditya Al Gazali
			</li>

			<li class="image-cover">
				<img src="profile/hutao.jpg">
			</li>
			
		</ul>
		
	</header>

	<!-- This is Navigation -->
	<div class="navigation">

		<ul>

			<!-- Dashboard -->
			<li class="lii dashboard active">

					<a>
						<span class="material-symbols-outlined navigationGIcon">
							Dashboard
						</span>
						
						<p>Dashboard</p>
					</a>
					
			</li>

			<!-- Update  -->
			<li class="lii update">

					<a>
						<span class="material-symbols-outlined navigationGIcon">
							Update
						</span>

						<p>Update</p>
					</a>
					
			</li>

			<!-- New  -->
			<li class="lii new">

					<a>
						<span class="material-symbols-outlined navigationGIcon">
							Magic_Button
						</span>

						<p>New</p>
					</a>
					
			</li>

			<!-- Report  -->
			<li class="lii report">

					<a>
						<span class="material-symbols-outlined navigationGIcon">
							Chat
						</span>

						<p>Report</p>
					</a>
					
			</li>

			<!-- Setting  -->
			<li class="lii setting">

					<a>
						<span class="material-symbols-outlined navigationGIcon">
							Settings
						</span>

						<p>Settings</p>
					</a>
					
			</li>
			
		</ul>
		
	</div>

	<!-- This is Main  -->

	<div class="main">

		<ul class="time">
			<li>
				<p class="says"><span class="ucapan" id="ucapan">Good Morning,</span> Farhan !</p>
			</li>

			<li class="clock" id="clock"></li>
			<li class="hari" id="hari"></li>
			
		</ul>

		<div class="welcome">

			<p class="randomText" id="randomTxt">"Akan tiba waktu nya hari tanpa kesedihan"</p>

			<span class="material-symbols-outlined timeIcon morningCon" id="morningCon">
				partly_cloudy_day
			</span>

			<span class="material-symbols-outlined timeIcon sunCon" id="sunCon">
				clear_day
			</span>

			<span class="material-symbols-outlined timeIcon nightCon" id="nightCon">
				nights_stay
			</span>

			<ul class="notifikasiWelcome">

				<!-- New  -->
				<li class="nof newNof">

					<a>
						<span class="material-symbols-outlined notifikasiGIcon">
							Magic_Button
						</span>

						<div class="nofDot"></div>
					</a>
					
				</li>

				<!-- Report  -->
				<li class="nof reportNof">

						<a>
							<span class="material-symbols-outlined notifikasiGIcon">
								Chat
							</span>

							<div class="nofDot"></div>
						</a>
						
				</li>
				
			</ul>

		</div>

		<div class="statis">

			<div class="cbox saranaBox">
				<p class="ctext">Sarana Chart</p>
				<canvas id="saranaChart"></canvas>
			</div>

			<div class="cbox biayaBox">
				<p class="ctext">Dana Chart</p>
				<canvas id="biayaChart"></canvas>
			</div>
			
		</div>

		<div class="gklama">
			<ul>

				<li>
					<button type="button" name="five" id="shFive"> 5 </button>
				</li>

				<li>
					<button type="button" name="seven" id="shSeven"> 7 </button>
				</li>

			</ul>
		</div>
		
		<div class="data">
			
			<table class="dataFormating">

				<tr class="trHead">
	
					<th class="tableHead nama-barang">Nama Barang</th>
					<th class="tableHead kode-barang">Kode</th>
					<th class="tableHead quantitas-barang">Quantitas</th>
	
					<th class="tableHead unit-barang">Unit</th>
					<th class="tableHead merk-barang">Merek</th>
					<th class="tableHead diperoleh-tahun-barang">Diperoleh Tahun</th>
	
					<th class="tableHead kondisi-barang">Kondisi</th>
					<th class="tableHead harga-barang">Harga Per Unit</th>
					<th class="tableHead validasi-barang">Validasi</th>
	
					<th class="tableHead diperoleh-dari-barang">Diperoleh Dari</th>
	
				</tr>

				<!-- Looping Disini -->

				<?php foreach(array_slice($saranaDT, 0, $showList) as $sDT ) : ?>

				<tr class="daTable">
	
					<td class="dataTable nama-is">
						<?= $sDT['namaxsrn']; ?>
					</td>

					<td class="dataTable kode-is">
						<?= $sDT['kodexsrn']; ?>
					</td>

					<td class="dataTable quantitas-is">
						<?= $sDT['quantitasxsrn']; ?>
					</td>
					
					<td class="dataTable unit-is">
						<?= $sDT['unitxsrn']; ?>
					</td>

					<td class="dataTable merk-is">
						<?= $sDT['merekxsrn']; ?>
					</td>

					<td class="dataTable diperoleh-is">
						<?= $sDT['dprxtahunxsrn']; ?>
					</td>
	
					<td class="dataTable kondisi-is">
						<?= $sDT['kondisixsrn']; ?>
					</td>

					<td class="dataTable harga-is">Rp 
						<?= $sDT['hargaxsrn']; ?>
					</td>

					<td class="dataTable validasi-is">
						<?= $sDT['validasixsrn']; ?>
					</td>
	
					<td class="dataTable diperoleh-dari-is">
						<?= $sDT['dprxdarixsrn']; ?>
					</td>

				</tr>

				<?php endforeach; ?>

				<!-- Sampai sini -->
				
			</table>
						
		</div>

	</div>

	<style>

		.gklama {
			position: relative;
			width: 1400px;
			left: 30px;

			border: 1px solid black;
		}
		
	</style>

	<!-- This is JavaScript Nest -->
	<script src="js/index.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script src="js/my_chart.js"></script>
		 
	
</body>
</html>