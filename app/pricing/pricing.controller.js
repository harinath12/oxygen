hmapp.controller('pricingController', pricingController);

pricingController.$inject = [ '$stateParams','$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function pricingController  ($stateParams, $rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {

  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
  $scope.plan= 'default';

  $scope.caldel= function(){
      $scope.pricing.delivery.turnover = ($scope.pricing.delivery.buy + $scope.pricing.delivery.sell) * $scope.pricing.delivery.qty;
      if($scope.plan == 'default'){
        $scope.pricing.delivery.actual_brokerage = $scope.pricing.delivery.turnover * (0.3/100);
        $scope.pricing.delivery.brokerage = $scope.pricing.delivery.actual_brokerage < 123 ? $scope.pricing.delivery.actual_brokerage : 123;
      }else {
        $scope.pricing.delivery.actual_brokerage = 0;
        if ($scope.pricing.delivery.buy) {
          $scope.pricing.delivery.actual_brokerage += 20;
        }
        if ($scope.pricing.delivery.sell) {
          $scope.pricing.delivery.actual_brokerage += 20;
        }
        $scope.pricing.delivery.brokerage = $scope.pricing.delivery.actual_brokerage;
      }
      
      
      $scope.pricing.delivery.stt = (($scope.pricing.delivery.buy + $scope.pricing.delivery.sell) * $scope.pricing.delivery.qty) * (0.1/100);
      $scope.pricing.delivery.transaction_charge = ($scope.pricing.delivery.turnover * 0.0000345);
      $scope.pricing.delivery.clearing_charge = $scope.pricing.delivery.turnover*0.000075;
      $scope.pricing.delivery.tax = ($scope.pricing.delivery.brokerage+$scope.pricing.delivery.transaction_charge+$scope.pricing.delivery.clearing_charge)* (18/100);
      $scope.pricing.delivery.sebi = $scope.pricing.delivery.turnover*0.0000005;
      $scope.pricing.delivery.stamp_charges = ($scope.pricing.delivery.buy*$scope.pricing.delivery.qty)*0.00015;
      $scope.pricing.delivery.total_charge = $scope.pricing.delivery.tax + $scope.pricing.delivery.brokerage+$scope.pricing.delivery.stt+$scope.pricing.delivery.transaction_charge+$scope.pricing.delivery.stamp_charges+$scope.pricing.delivery.sebi+$scope.pricing.delivery.clearing_charge;
      $scope.pricing.delivery.profit = ($scope.pricing.delivery.sell * $scope.pricing.delivery.qty) - ($scope.pricing.delivery.buy * $scope.pricing.delivery.qty);
      $scope.pricing.delivery.profit_realized = $scope.pricing.delivery.profit - $scope.pricing.delivery.total_charge;
      $scope.pricing.delivery.breakeven = ($scope.pricing.delivery.total_charge/$scope.pricing.delivery.qty);      
  }
  $scope.calintra= function(){
      $scope.pricing.intraday.turnover = ($scope.pricing.intraday.buy + $scope.pricing.intraday.sell) * $scope.pricing.intraday.qty;
      
      
if($scope.plan == 'default'){
        $scope.pricing.intraday.actual_brokerage = $scope.pricing.intraday.turnover * (0.03/100);
      $scope.pricing.intraday.brokerage = $scope.pricing.intraday.actual_brokerage < 123 ? $scope.pricing.intraday.actual_brokerage : 123;
      }else {
        $scope.pricing.intraday.actual_brokerage = 0;
        if ($scope.pricing.intraday.buy) {
          $scope.pricing.intraday.actual_brokerage += 20;
        }
        if ($scope.pricing.intraday.sell) {
          $scope.pricing.intraday.actual_brokerage += 20;
        }
        $scope.pricing.intraday.brokerage = $scope.pricing.intraday.actual_brokerage;
      }
      

      $scope.pricing.intraday.stt = ( $scope.pricing.intraday.sell * $scope.pricing.intraday.qty) * (0.025/100);
      $scope.pricing.intraday.transaction_charge = $scope.pricing.intraday.turnover * (0.00345/100);
      $scope.pricing.intraday.clearing_charge = $scope.pricing.intraday.turnover*0.0000075;
      $scope.pricing.intraday.tax = ($scope.pricing.intraday.brokerage+$scope.pricing.intraday.transaction_charge +$scope.pricing.intraday.clearing_charge)* (18/100);
      $scope.pricing.intraday.sebi = $scope.pricing.intraday.turnover*0.0000005;
      $scope.pricing.intraday.stamp_charges = ($scope.pricing.intraday.buy*$scope.pricing.intraday.qty)*0.00003;
      $scope.pricing.intraday.total_charge = $scope.pricing.intraday.tax + $scope.pricing.intraday.brokerage+$scope.pricing.intraday.stt+$scope.pricing.intraday.transaction_charge+$scope.pricing.intraday.stamp_charges+$scope.pricing.intraday.sebi+$scope.pricing.intraday.clearing_charge;
      $scope.pricing.intraday.profit = ($scope.pricing.intraday.sell * $scope.pricing.intraday.qty) - ($scope.pricing.intraday.buy * $scope.pricing.intraday.qty);
      $scope.pricing.intraday.profit_realized = $scope.pricing.intraday.profit - $scope.pricing.intraday.total_charge;
      $scope.pricing.intraday.breakeven = ($scope.pricing.intraday.total_charge/$scope.pricing.intraday.qty);
  }
  $scope.calfuture= function(){
      $scope.pricing.future.turnover = ($scope.pricing.future.buy + $scope.pricing.future.sell) * $scope.pricing.future.qty;
      if($scope.plan == 'default'){
        $scope.pricing.future.actual_brokerage = $scope.pricing.future.turnover * (0.03/100);
      $scope.pricing.future.brokerage = $scope.pricing.future.actual_brokerage < 123 ? $scope.pricing.future.actual_brokerage : 123;
      }else {
        $scope.pricing.future.actual_brokerage = 0;
        if ($scope.pricing.future.buy) {
          $scope.pricing.future.actual_brokerage += 20;
        }
        if ($scope.pricing.future.sell) {
          $scope.pricing.future.actual_brokerage += 20;
        }
        $scope.pricing.future.brokerage = $scope.pricing.future.actual_brokerage;
      }
      $scope.pricing.future.stt = ( $scope.pricing.future.sell* $scope.pricing.future.qty) * (0.01/100);
      $scope.pricing.future.transaction_charge = $scope.pricing.future.turnover * (0.002/100);
      $scope.pricing.future.clearing_charge = $scope.pricing.future.turnover*0.0000025;
      $scope.pricing.future.tax = ($scope.pricing.future.brokerage+$scope.pricing.future.transaction_charge+$scope.pricing.future.clearing_charge)* (18/100);
      
      $scope.pricing.future.sebi = $scope.pricing.future.turnover*0.0000005;
      $scope.pricing.future.stamp_charges = ($scope.pricing.future.buy*$scope.pricing.future.qty)*0.00002;
      $scope.pricing.future.total_charge = $scope.pricing.future.tax + $scope.pricing.future.brokerage+$scope.pricing.future.stt+$scope.pricing.future.transaction_charge+$scope.pricing.future.stamp_charges+$scope.pricing.future.sebi+$scope.pricing.future.clearing_charge;
      $scope.pricing.future.profit = ($scope.pricing.future.sell * $scope.pricing.future.qty) - ($scope.pricing.future.buy * $scope.pricing.future.qty);
      $scope.pricing.future.profit_realized = $scope.pricing.future.profit - $scope.pricing.future.total_charge;
      $scope.pricing.future.breakeven = ($scope.pricing.future.total_charge/$scope.pricing.future.qty);
  }
  $scope.caloption= function(){
      $scope.pricing.option.turnover = ($scope.pricing.option.buy + $scope.pricing.option.sell) * $scope.pricing.option.qty;
      if($scope.plan == 'default'){
        $scope.pricing.option.actual_brokerage = ((($scope.pricing.option.buy+$scope.pricing.option.strikeprice) + ($scope.pricing.option.sell+$scope.pricing.option.strikeprice)) * $scope.pricing.option.qty) * (0.03/100);
      $scope.pricing.option.brokerage = $scope.pricing.option.actual_brokerage < 123 ? $scope.pricing.option.actual_brokerage : 123;
      }else {
        $scope.pricing.option.actual_brokerage = 0;
        if ($scope.pricing.option.buy) {
          $scope.pricing.option.actual_brokerage += 20;
        }
        if ($scope.pricing.option.sell) {
          $scope.pricing.option.actual_brokerage += 20;
        }
        $scope.pricing.option.brokerage = $scope.pricing.option.actual_brokerage;
      }
      $scope.pricing.option.stt = ($scope.pricing.option.sell* $scope.pricing.option.qty) * (0.05/100);
      $scope.pricing.option.transaction_charge = $scope.pricing.option.turnover * (0.053/100);
      $scope.pricing.option.clearing_charge = $scope.pricing.option.turnover*0.00005;
      $scope.pricing.option.tax = ($scope.pricing.option.brokerage+$scope.pricing.option.transaction_charge+$scope.pricing.option.clearing_charge)* (18/100);
      
      $scope.pricing.option.sebi = $scope.pricing.option.turnover*0.0000005;
      $scope.pricing.option.stamp_charges = ($scope.pricing.option.buy*$scope.pricing.option.qty)*0.00003;
      $scope.pricing.option.total_charge = $scope.pricing.option.tax + $scope.pricing.option.brokerage+$scope.pricing.option.stt+$scope.pricing.option.transaction_charge+$scope.pricing.option.stamp_charges+$scope.pricing.option.sebi+$scope.pricing.option.clearing_charge;
      $scope.pricing.option.profit = ($scope.pricing.option.sell * $scope.pricing.option.qty) - ($scope.pricing.option.buy * $scope.pricing.option.qty);
      $scope.pricing.option.profit_realized = $scope.pricing.option.profit - $scope.pricing.option.total_charge;
      $scope.pricing.option.breakeven = ($scope.pricing.option.total_charge/$scope.pricing.option.qty);
         
  }
  $scope.calcurrencyfuture= function(){
      $scope.pricing.currencyfuture.turnover = (($scope.pricing.currencyfuture.buy + $scope.pricing.currencyfuture.sell) * $scope.pricing.currencyfuture.qty)*1000;
      if($scope.plan=='default'){
        $scope.pricing.currencyfuture.actual_brokerage = $scope.pricing.currencyfuture.turnover * (0.03/100);
      $scope.pricing.currencyfuture.brokerage = $scope.pricing.currencyfuture.actual_brokerage < 123 ? $scope.pricing.currencyfuture.actual_brokerage : 123;
      }else {
        $scope.pricing.currencyfuture.actual_brokerage = 0;
        if ($scope.pricing.currencyfuture.buy) {
          $scope.pricing.currencyfuture.actual_brokerage += 20;
        }
        if ($scope.pricing.currencyfuture.sell) {
          $scope.pricing.currencyfuture.actual_brokerage += 20;
        }
        $scope.pricing.currencyfuture.brokerage = $scope.pricing.currencyfuture.actual_brokerage;
      }
      $scope.pricing.currencyfuture.stt = 0;
      $scope.pricing.currencyfuture.transaction_charge = $scope.pricing.currencyfuture.turnover * (0.0009/100);
      $scope.pricing.currencyfuture.clearing_charge = $scope.pricing.currencyfuture.turnover*0.0000025;
      $scope.pricing.currencyfuture.tax = ($scope.pricing.currencyfuture.brokerage+$scope.pricing.currencyfuture.transaction_charge+$scope.pricing.currencyfuture.clearing_charge)* (18/100);
      $scope.pricing.currencyfuture.sebi = $scope.pricing.currencyfuture.turnover*0.0000005;
      $scope.pricing.currencyfuture.stamp_charges = $scope.pricing.currencyfuture.turnover*0.000001;
      $scope.pricing.currencyfuture.total_charge = $scope.pricing.currencyfuture.tax + $scope.pricing.currencyfuture.brokerage+$scope.pricing.currencyfuture.stt+$scope.pricing.currencyfuture.transaction_charge+$scope.pricing.currencyfuture.stamp_charges+$scope.pricing.currencyfuture.sebi+$scope.pricing.currencyfuture.clearing_charge;
      $scope.pricing.currencyfuture.profit = (($scope.pricing.currencyfuture.sell * ($scope.pricing.currencyoption.qty*1000)) - ($scope.pricing.currencyfuture.buy * ($scope.pricing.currencyoption.qty*1000)))*1000;
      $scope.pricing.currencyfuture.profit_realized = $scope.pricing.currencyfuture.profit - $scope.pricing.currencyfuture.total_charge;
      $scope.pricing.currencyfuture.breakeven = ($scope.pricing.currencyfuture.total_charge/($scope.pricing.currencyoption.qty*1000));   
  }
  $scope.calcurrencyoption= function(){
      $scope.pricing.currencyoption.turnover = (($scope.pricing.currencyoption.buy + $scope.pricing.currencyoption.sell) * $scope.pricing.currencyoption.qty)*1000;
      if($scope.plan== 'default'){
        $scope.pricing.currencyoption.actual_brokerage = (((($scope.pricing.currencyoption.buy+$scope.pricing.currencyoption.strikeprice) + ($scope.pricing.currencyoption.sell+$scope.pricing.currencyoption.strikeprice)) * $scope.pricing.currencyoption.qty) * (0.03/100))*1000;
      $scope.pricing.currencyoption.brokerage = $scope.pricing.currencyoption.actual_brokerage < 123 ? $scope.pricing.currencyoption.actual_brokerage : 123;
      }else {
        $scope.pricing.currencyoption.actual_brokerage = 0;
        if ($scope.pricing.currencyoption.buy) {
          $scope.pricing.currencyoption.actual_brokerage += 20;
        }
        if ($scope.pricing.currencyoption.sell) {
          $scope.pricing.currencyoption.actual_brokerage += 20;
        }
        $scope.pricing.currencyoption.brokerage = $scope.pricing.currencyoption.actual_brokerage;
      }
      $scope.pricing.currencyoption.stt = 0;
      $scope.pricing.currencyoption.transaction_charge = $scope.pricing.currencyoption.turnover *0.00035;
      $scope.pricing.currencyoption.clearing_charge = $scope.pricing.currencyoption.turnover*0.00005;
      $scope.pricing.currencyoption.tax = ($scope.pricing.currencyoption.brokerage+$scope.pricing.currencyoption.transaction_charge+$scope.pricing.currencyoption.clearing_charge)* (18/100);
      
      $scope.pricing.currencyoption.sebi = $scope.pricing.currencyoption.turnover*0.0000005;
      $scope.pricing.currencyoption.stamp_charges = ($scope.pricing.currencyoption.buy*($scope.pricing.currencyoption.qty*1000))*0.000001;
      $scope.pricing.currencyoption.total_charge = $scope.pricing.currencyoption.tax + $scope.pricing.currencyoption.brokerage+$scope.pricing.currencyoption.stt+$scope.pricing.currencyoption.transaction_charge+$scope.pricing.currencyoption.stamp_charges+$scope.pricing.currencyoption.sebi+$scope.pricing.currencyoption.clearing_charge;
      $scope.pricing.currencyoption.profit = ($scope.pricing.currencyoption.sell * ($scope.pricing.currencyoption.qty*1000)) - ($scope.pricing.currencyoption.buy * ($scope.pricing.currencyoption.qty*1000));
      $scope.pricing.currencyoption.profit_realized = $scope.pricing.currencyoption.profit - $scope.pricing.currencyoption.total_charge;
      $scope.pricing.currencyoption.breakeven = $scope.pricing.currencyoption.total_charge/($scope.pricing.currencyoption.qty*1000);
  }
  $scope.calcomfuture= function(){
      $scope.pricing.comfuture.turnover = ($scope.pricing.comfuture.commodity.lot*$scope.pricing.comfuture.commodity.weight)*($scope.pricing.comfuture.buy + $scope.pricing.comfuture.sell) * $scope.pricing.comfuture.qty;
      if($scope.plan== 'default'){
        $scope.pricing.comfuture.actual_brokerage = $scope.pricing.comfuture.turnover * (0.03/100);
        $scope.pricing.comfuture.brokerage = $scope.pricing.comfuture.actual_brokerage < 123 ? $scope.pricing.comfuture.actual_brokerage : 123;
      }else {
        $scope.pricing.comfuture.actual_brokerage = 0;
        if ($scope.pricing.comfuture.buy) {
          $scope.pricing.comfuture.actual_brokerage += 20;
        }
        if ($scope.pricing.comfuture.sell) {
          $scope.pricing.comfuture.actual_brokerage += 20;
        }
        $scope.pricing.comfuture.brokerage = $scope.pricing.comfuture.actual_brokerage;
      }
      $scope.pricing.comfuture.stt = (($scope.pricing.comfuture.commodity.lot*$scope.pricing.comfuture.commodity.weight) * ( $scope.pricing.comfuture.sell * $scope.pricing.comfuture.qty) )* $scope.pricing.comfuture.commodity.stt;
      $scope.pricing.comfuture.transaction_charge = $scope.pricing.comfuture.turnover*$scope.pricing.comfuture.commodity.transaction_charge;
      $scope.pricing.comfuture.clearing_charge = $scope.pricing.comfuture.turnover*0.000002;
      $scope.pricing.comfuture.tax = ($scope.pricing.comfuture.brokerage+$scope.pricing.comfuture.transaction_charge+$scope.pricing.comfuture.clearing_charge)* (18/100);
      
      if($scope.pricing.comfuture.commodity.agri) {
        $scope.pricing.comfuture.sebi = $scope.pricing.comfuture.turnover*0.0000001;
      } else {
        $scope.pricing.comfuture.sebi = $scope.pricing.comfuture.turnover*0.0000005;
      }
      $scope.pricing.comfuture.stamp_charges = ($scope.pricing.comfuture.commodity.lot*$scope.pricing.comfuture.commodity.weight)*(($scope.pricing.comfuture.buy*$scope.pricing.comfuture.qty)*0.00002);
      $scope.pricing.comfuture.total_charge = $scope.pricing.comfuture.tax + $scope.pricing.comfuture.brokerage+$scope.pricing.comfuture.stt+$scope.pricing.comfuture.transaction_charge+$scope.pricing.comfuture.stamp_charges+$scope.pricing.comfuture.sebi+$scope.pricing.comfuture.clearing_charge;
      $scope.pricing.comfuture.profit = ($scope.pricing.comfuture.commodity.lot*$scope.pricing.comfuture.commodity.weight*$scope.pricing.comfuture.sell * $scope.pricing.comfuture.qty) - ($scope.pricing.comfuture.commodity.lot*$scope.pricing.comfuture.commodity.weight*$scope.pricing.comfuture.buy * $scope.pricing.comfuture.qty);
      $scope.pricing.comfuture.profit_realized = $scope.pricing.comfuture.profit - $scope.pricing.comfuture.total_charge;
      $scope.pricing.comfuture.breakeven = ($scope.pricing.comfuture.total_charge/($scope.pricing.comfuture.commodity.lot*$scope.pricing.comfuture.commodity.weight));
  }
  $scope.calcomoption= function(){
      $scope.pricing.comoption.turnover = ($scope.pricing.comoption.commodity.lot*$scope.pricing.comoption.commodity.weight)*($scope.pricing.comoption.buy + $scope.pricing.comoption.sell) * $scope.pricing.comoption.qty;
      if($scope.plan=='default'){
        $scope.pricing.comoption.actual_brokerage = (($scope.pricing.comoption.commodity.lot*$scope.pricing.comoption.commodity.weight)*(($scope.pricing.comoption.buy+$scope.pricing.comoption.strikeprice) + ($scope.pricing.comoption.sell+$scope.pricing.comoption.strikeprice)) * $scope.pricing.comoption.qty) * (0.03/100);
      $scope.pricing.comoption.brokerage = $scope.pricing.comoption.actual_brokerage < 123 ? $scope.pricing.comoption.actual_brokerage : 123;
      }else {
        $scope.pricing.comoption.actual_brokerage = 0;
        if ($scope.pricing.comoption.buy) {
          $scope.pricing.comoption.actual_brokerage += 20;
        }
        if ($scope.pricing.comoption.sell) {
          $scope.pricing.comoption.actual_brokerage += 20;
        }
        $scope.pricing.comoption.brokerage = $scope.pricing.comoption.actual_brokerage;
      }
      $scope.pricing.comoption.stt = ($scope.pricing.comoption.sell * ($scope.pricing.comoption.qty*$scope.pricing.comoption.commodity.weight)) * 0.0005;
      $scope.pricing.comoption.transaction_charge = 0;
      $scope.pricing.comoption.clearing_charge = $scope.pricing.comoption.turnover*0.0005;
      $scope.pricing.comoption.tax = ($scope.pricing.comoption.brokerage+$scope.pricing.comoption.transaction_charge+$scope.pricing.comoption.clearing_charge)* (18/100);
      $scope.pricing.comoption.sebi = $scope.pricing.comoption.turnover*0.0000005;
      $scope.pricing.comoption.stamp_charges = ($scope.pricing.comoption.buy*($scope.pricing.comoption.qty*$scope.pricing.comoption.commodity.weight))*0.00003;
      $scope.pricing.comoption.total_charge = $scope.pricing.comoption.tax + $scope.pricing.comoption.brokerage+$scope.pricing.comoption.stt+$scope.pricing.comoption.transaction_charge+$scope.pricing.comoption.stamp_charges+$scope.pricing.comoption.sebi+$scope.pricing.comoption.clearing_charge;
      
      $scope.pricing.comoption.profit = ($scope.pricing.comoption.sell * ($scope.pricing.comoption.qty*$scope.pricing.comoption.commodity.weight)) - ($scope.pricing.comoption.buy * ($scope.pricing.comoption.qty*$scope.pricing.comoption.commodity.weight));
      $scope.pricing.comoption.profit_realized = $scope.pricing.comoption.profit - $scope.pricing.comoption.total_charge;
      $scope.pricing.comoption.breakeven = ($scope.pricing.comoption.total_charge/($scope.pricing.comoption.qty*$scope.pricing.comoption.commodity.weight)); 
  }
  
  $scope.commodities={
        ALUMINIUM:{
          scrip: 'ALUMINIUM',
          agri: false,
          lot: 5,
          weight:1000,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        CARDAMOM:{
          scrip: 'CARDAMOM',
          agri:true,
          lot:100,
          weight:1,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        CASTORSEED:{
          scrip: 'CASTORSEED',
          agri:true,
          lot:10,
          weight:10,
          option: false,
          transaction_charge:0.000005,
          stt:0,
        },
        COPPER:{
          scrip: 'COPPER',
          agri:false,
          lot:1,
          weight:2500,
          option: true,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        COTTON:{
          scrip: 'COTTON',
          agri:true,
          lot:1,
          weight:25,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        CPO:{
          scrip: 'CPO',
          agri:true,
          lot:10,
          weight:100,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        CRUDEOIL:{
          scrip: 'CRUDEOIL',
          agri:false,
          lot:100,
          weight:1,
          option: true,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        GOLD:{
          scrip: 'GOLD',
          agri:false,
          lot:1,
          weight:100,
          option: true,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        GOLDGUINEA:{
          scrip: 'GOLDGUINEA',
          agri:false,
          lot:8,
          weight:1/8,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        GOLDM:{
          scrip: 'GOLDM',
          agri:false,
          lot:100,
          weight:1/10,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        GOLDPETAL:{
          scrip: 'GOLDPETAL',
          agri:false,
          lot:1,
          weight:1,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        KAPAS:{
          scrip: 'KAPAS',
          agri:true,
          lot:4,
          weight:50,
          option: false,
          transaction_charge:0.000005,
          stt:0,
        },
        LEAD:{
          scrip: 'LEAD',
          agri:false,
          lot:5,
          weight:1000,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        MENTHAOIL:{
          scrip: 'MENTHAOIL',
          agri:true,
          lot:1080,
          weight:1080,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        NATURALGAS:{
          scrip: 'NATURALGAS',
          agri:false,
          lot:1250,
          weight:1250,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        NICKEL:{
          scrip: 'NICKEL',
          agri:false,
          lot:1500,
          weight:1500,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        PEPPER:{
          scrip: 'PEPPER',
          agri:true,
          lot:1,
          weight:10,
          option: false,
          transaction_charge:0.0000005,
          stt:0,
        },
        RUBBER:{
          scrip: 'RUBBER',
          agri:true,
          lot:1,
          weight:10,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        SILVER:{
          scrip: 'SILVER',
          agri:false,
          lot:30,
          weight:1,
          option: true,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        SILVERM:{
          scrip: 'SILVERM',
          agri:false,
          lot:5,
          weight:1,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        SILVERMIC:{
          scrip: 'SILVERMIC',
          agri:false,
          lot:1,
          weight:1,
          option: false,
          transaction_charge:0.000026,
          stt:0.0001,
        },
        ZINC:{
          scrip: 'ZINC',
          agri:false,
          lot:5,
          weight:5000,
          option: true,
          transaction_charge:0.000026,
          stt:0.0001,
        }


      };


  $scope.pricing = {
    delivery: {
      buy: 1000,
      sell: 1100,
      qty: 400
    },
    intraday: {
      buy: 1000,
      sell: 1100,
      qty: 400
    },
    future: {
      buy: 1000,
      sell: 1100,
      qty: 400
    },
    option: {
      strikeprice:14000,
      buy: 1000,
      sell: 1100,
      qty: 400
    },
    currencyfuture:{
      buy:73.0585,
      sell:73.0600,
      qty:1
    },
    currencyoption:{
      strikeprice:73,
      buy:0.1985,
      sell:0.1995,
      qty:1,
      weight:1000
    },
    comfuture:{

      buy:110,
      sell:112,
      qty:1
    },
    comoption:{
      strikeprice:600,
      buy:20.62,
      sell:21.62,
      qty:1,
    }

  };

  $scope.pricing.comfuture.commodity=$scope.commodities.ALUMINIUM;
  $scope.pricing.comoption.commodity=$scope.commodities.COPPER;

  $scope.init = function(){
    $scope.caldel();
    $scope.calintra();
    $scope.calfuture('future');
    $scope.caloption('option');
    $scope.calcurrencyfuture('currencyfuture');
    $scope.calcurrencyoption('currencyoption');
    $scope.calcomfuture('comfuture');
    $scope.calcomoption('comoption');
  };
  
  $scope.init();
}