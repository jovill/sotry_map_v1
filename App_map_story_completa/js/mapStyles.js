/**** CartoCSS for styling tax lot data ****/
var app = app || {};

app.mapStyles = (function(){
    return {
        // default style, all lots are the same color

        regular: '#info_pto_inte_110ocupacao0irregular_wgs84{' +
        'marker-fill-opacity: 0.9;' +
        'marker-line-color: #FFF;' +
        'marker-line-width: 1;' +
        'marker-line-opacity: 1;' +
        'marker-placement: point;' +
        'marker-type: ellipse;' +
        'marker-width: 10;' +
        'marker-fill: #9B00B4;' +
        'marker-allow-overlap: true;' +
     '}',
        // red highlight                            
        //red : '#bushwick_pluto14v1 {' +
        //                              'polygon-fill: hsl(0,100%,30%);' +
        //                              'polygon-opacity: 0.75;' +
        //                              'line-color: #000;' +
        //                              'line-width: 0.2;' +
        //                              'line-opacity: 0.5;' +
        //                            '}',

        // category style based on zoning
        zoning: ' #info_pto_inte_110ocupacao0irregular_wgs84{' +
              'marker-fill-opacity: 0.9;' +
       ' marker-line-color: #FFF;' +
        'marker-line-width: 1;' +
       ' marker-line-opacity: 1;' +
        'marker-placement: point;' +
        'marker-type: ellipse;' +
        'marker-width: 15;' +
        'marker-fill: #FA0000;' +
        'marker-allow-overlap: true;' +
    '}',

        // choropleth style based on Built FAR                                
        //    builtFAR: ' #info_pto_inte_110ocupacao0irregular_wgs84{' +
        //          'marker-fill-opacity: 0.9;' +
        //   ' marker-line-color: #FFF;' +
        //    'marker-line-width: 1;' +
        //   ' marker-line-opacity: 1;' +
        //    'marker-placement: point;' +
        //    'marker-type: ellipse;' +
        //    'marker-width: 7;' +
        //    'marker-fill: #1DFA00;' +
        //    'marker-allow-overlap: true;' +
        //'}',

        // choropleth style based on Residential FAR
        //residFAR :  "#bushwick_pluto14v1 {" +
        //                           "polygon-fill: #FFFFB2;" +
        //                           "polygon-opacity: 0.8;" +
        //                           "line-color: #000;" +
        //                           "line-width: 0.2;" +
        //                           "line-opacity: 0.5;" +
        //                        "}" +                           
        //                        '#bushwick_pluto14v1[ residfar <= 3.44] { polygon-fill: #BD0026;}' +
        //                        '#bushwick_pluto14v1[ residfar <= 2.43] {polygon-fill: #F03B20;}' +
        //                        '#bushwick_pluto14v1[ residfar <= 0.9] {polygon-fill: #FD8D3C;}' +
        //                        '#bushwick_pluto14v1[ residfar <= 0.9] {polygon-fill: #FECC5C;}' +
        //                        '#bushwick_pluto14v1[ residfar <= 0.6] {polygon-fill: #FFFFB2;}',                             
        //// choropleth style for available FAR
        //availFAR : "#bushwick_pluto14v1{" +
        //                  "polygon-fill: #FFFFB2;" +
        //                  "polygon-opacity: 0.8;" +
        //                  "line-color: #000;" +
        //                  "line-width: 0.2;" +
        //                  "line-opacity: 0.5;" +
        //                  "}" +
        //                  "#bushwick_pluto14v1 [ availablefar <= 4] {" +
        //                  "polygon-fill: #BD0026;" +
        //                  "}" +
        //                  "#bushwick_pluto14v1 [ availablefar <= 3.2] {" +
        //                  "polygon-fill: #F03B20;" +
        //                  "}" +
        //                  "#bushwick_pluto14v1 [ availablefar <= 2.4000000000000004] {" +
        //                  "polygon-fill: #FD8D3C;" +
        //                  "}" +
        //                  "#bushwick_pluto14v1 [ availablefar <= 1.6] {" +
        //                  "polygon-fill: #FECC5C;" +
        //                  "}" +
        //                  "#bushwick_pluto14v1 [ availablefar <= 0.8] {" +
        //                  "polygon-fill: #FFFFB2;" +
        //                  "}",



        landuse: '#info_pto_inte_110ocupacao0irregular_wgs84{' +
       'marker-fill-opacity: 0.9;' +
       'marker-line-color: #FFF;' +
       'marker-line-width: 1;' +
       'marker-line-opacity: 1;' +
       'marker-placement: point;' +
       'marker-type: ellipse;' +
       'marker-width: 15;' +
       'marker-fill: #FA0000;' +
       'marker-allow-overlap: true;' +
    '}',

        // yearbuilt choropleth style;                  
        yearbuilt: '#info_pto_inte_110ocupacao0irregular_wgs84{'+
  'marker-fill: #FFCC00; '+
    'marker-width: 10; '+
    'marker-line-color: #FFF; '+
    'marker-line-width: 1; '+
    'marker-line-opacity: 1;'+ 
   ' marker-fill-opacity: 0.9; '+
   ' marker-comp-op: multiply; '+
    'marker-type: ellipse; '+
   ' marker-placement: point; '+
    'marker-allow-overlap: true; '+
  '  marker-clip: false; '+
   ' marker-multi-policy: largest; '+
'}'


    };
})();
