var newsApp = angular.module('newsApp',[]);
newsApp.controller('CardController',['$scope',function ($scope) {
	$scope.cards = [
		{
			link: '/Websitenya/assets/img/News1.jpg',
			belt:'#A186BE',
			TitleBelt: 'NEWS',
			Title: "Maintance Server",
			Isi: "MAINTENANCE SERVER -Rabu, 20 Juni2019Pukul 08:00 s/d 11:00 WIBKami sarankan untuk melakukan logout sebelum waktu Maintenance dimulai dan tidak melakukan percobaan login pada saat Maintenance sedang berlangsung.",
			Update: "Terakhir di update 5 hari yang lalu",
		},
		{
			link: '/Websitenya/assets/img/News2.jpg',
			belt:'#39B54A',
			TitleBelt: 'EVENT',
			Title: "Icarus Referral Event",
			Isi: "Makin banyak teman semakin banyak hadiah yang bisa kalian dapatkan....",
			Update: "Terakhir di update 10 hari yang lalu",
		},
		{
			link: '/Websitenya/assets/img/News3.jpg',
			belt:'#39B54A',
			TitleBelt: 'EVENT',
			Title: "Lebaran Package",
			Isi: "Ayo dapatkan kostume menarik dan set lainya dengan membeli Lebaran Package",
			Update: "Terakhir di update 20 hari yang lalu",
		},
		{
			link: '/Websitenya/assets/img/News4.jpg',
			belt:'#39B54A',
			TitleBelt: 'EVENT',
			Title: "Mana Stone Battle",
			Isi: "Halo Riders Ini dia nih.. Fitur yang kalian tunggu-tunggu yaitu MANASTONE BATTLE",
			Update: "Terakhir di update 1 bulan yang lalu",
		}
		];


}])
