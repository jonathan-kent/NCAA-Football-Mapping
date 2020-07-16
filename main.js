class School {
  constructor(name, wins, lat, long){
    this.name = name;
    this.wins = wins;
    this.lat = lat;
    this.long = long;
    this.weight = 0;
    this.lastWin = 0;
  }
}

var schools = [new School('Princeton', [1869, 1870, 1872, 1873, 1874, 1875, 1877, 1878, 1879, 1880, 1881, 1884, 1885, 1886, 1889, 1893, 1896, 1898, 1899, 1903, 1906, 1911, 1920, 1922, 1933, 1935], 40.342694, -74.654704),
               new School('Yale', [1874, 1876, 1877, 1880, 1881, 1882, 1883, 1884, 1886, 1887, 1888, 1891, 1892, 1894, 1900, 1907, 1909, 1927], 41.316195, -72.922445),
               new School('Alabama', [1925, 1926, 1930, 1934, 1961, 1964, 1965, 1973, 1978, 1979, 1992, 2009, 2011, 2012, 2015, 2017], 33.213781, -87.539018),
               new School('Notre Dame', [1919, 1924, 1929, 1930, 1943, 1946, 1947, 1949, 1964, 1966, 1973, 1977, 1988], 41.703906, -86.235714),
               new School('Michigan', [1901, 1902, 1903, 1904, 1918, 1923, 1932, 1933, 1947, 1948, 1997], 42.278274, -83.738229),
               new School('USC', [1928, 1931, 1932, 1962, 1967, 1972, 1974, 1978, 2003, 2004], 34.021978, -118.285251),
               new School('Pittsburgh', [1910, 1915, 1916, 1918, 1929, 1931, 1936, 1937, 1976], 40.444157, -79.960851),
               new School('Harvard', [1875, 1890, 1898, 1899, 1910, 1912, 1913, 1919], 42.376749, -71.116494),
               new School('Ohio State', [1942, 1954, 1957, 1961, 1968, 1970, 2002, 2014], 40.006631, -83.030499),
               new School('Oklahoma', [1950, 1955, 1956, 1974, 1975, 1985, 2000], 35.205683, -97.445698),
               new School('Minnesota', [1934, 1935, 1936, 1940, 1941, 1960], 44.973815, -93.227712),
               new School('Penn', [1894, 1895, 1897, 1904, 1907, 1908], 39.952021, -75.193273),
               new School('Army', [1914, 1916, 1944, 1945, 1946], 41.373007, -73.962448),
               new School('Miami', [1983, 1987, 1989, 1991, 2001], 25.720918, -80.278875),
               new School('Nebraska', [1970, 1971, 1994, 1995, 1997], 40.82001, -96.700535),
               new School('California', [1920, 1921, 1922, 1937], 37.871637, -122.258524),
               new School('Georgia Tech', [1917, 1928, 1952, 1990], 33.775288, -84.39628),
               new School('Illinois', [1914, 1919, 1923, 1927], 40.101673, -88.227156),
               new School('LSU', [1908, 1958, 2003, 2007, 2019], 30.41298, -91.18004),
               new School('Michigan State', [1951, 1952, 1965, 1966], 42.701549, -84.48222),
               new School('Penn State', [1911, 1912, 1982, 1986], 40.797994, -77.859967),
               new School('Tennessee', [1938, 1950, 1951, 1998], 35.954183, -83.929434),
               new School('Texas', [1963, 1969, 1970, 2005], 30.283697, -97.73385),
               new School('Auburn', [1913, 1957, 2010], 32.59314, -85.495215),
               new School('Cornell', [1915, 1921, 1922], 42.453235, -76.47353),
               new School('Florida', [1996, 2006, 2008], 29.643371, -82.354968),
               new School('Florida State', [1993, 1999, 2013], 30.441665, -84.298376),
               new School('Lafayette', [1896, 1921, 1926], 40.699879, -75.208187),
               new School('Georgia', [1942, 1980], 33.947765, -83.377327),
               new School('Ole Miss', [1960, 1962], 34.365879, -89.535105),
               new School('Texas A&M', [1919, 1939], 30.618507, -96.336504),
               new School('TCU', [1935, 1938], 32.709233, -97.363651),
               new School('Arkansas', [1964], 36.068481, -94.174928),
               new School('Boston College', [1940], 42.335422, -71.168554),
               new School('BYU', [1984], 40.251524, -111.649364),
               new School('Chicago', [1905], 41.7884, -87.598762),
               new School('Clemson', [1981, 2016, 2018], 34.673623, -82.83686),
               new School('Colorado', [1990], 40.007285, -105.265969),
               new School('Dartmouth', [1925], 43.704223, -72.288731),
               new School('Iowa', [1958], 41.662488, -91.554873),
               new School('Maryland', [1953], 38.986701, -76.942581),
               new School('SMU', [1935], 32.840902, -96.784555),
               new School('Stanford', [1926], 37.427253, -122.169671),
               new School('Syracuse', [1959], 43.03895, -76.135143),
               new School('UCLA', [1954], 34.06861, -118.445197),
               new School('Washington', [1991], 47.655162, -122.303547)];


function weightedCenter(year){
  for (let i=0; i<schools.length; i++){
    var weight = 0;
    for (let j=0; j<schools[i].wins.length; j++){
      if (schools[i].wins[j] <= year){
        var split = 0;
        for (let k=0; k<schools.length; k++){
          if (schools[k].wins.includes(schools[i].wins[j])) split++;
        }
        weight += 1/split;
      }
    }
    schools[i].weight = weight;
  }

  var wgtMeanLat = 0;
  var wgtMeanLong = 0;
  var wgtSum = 0;
  for (let i=0; i<schools.length; i++){
    wgtMeanLat += schools[i].weight * schools[i].lat;
    wgtMeanLong += schools[i].weight * schools[i].long;
    wgtSum += schools[i].weight;
  }
  wgtMeanLat = wgtMeanLat / wgtSum;
  wgtMeanLong = wgtMeanLong / wgtSum;
  return [wgtMeanLat, wgtMeanLong];
}

function lastWins(year){
  for (let i=0; i<schools.length; i++){
    var mostRecent = 0;
    for (let j=0; j<schools[i].wins.length; j++){
      if (schools[i].wins[j] <= year) mostRecent = schools[i].wins[j];
    }
    schools[i].lastWin = year - mostRecent;
  }
}
var year = 2019;
var center = weightedCenter(year);
lastWins(year);




require(["esri/Map",
         "esri/views/SceneView",
         "esri/layers/FeatureLayer",
         "esri/Graphic",
         "esri/geometry/Point"],
         function (Map, SceneView, FeatureLayer, Graphic, Point) {

           function createSchoolLayer(){
             graphics = []
             for (let i=0; i<schools.length; i++){
               graphics.push(schoolToGraphic(schools[i]));
             }
             return new FeatureLayer({
               source: graphics,
               fields: [{
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid"
              }, {
                name: "LASTWIN",
                alias: "LASTWIN",
                type: "double"
              }, {
                name: "WEIGHT",
                alias: "WEIGHT",
                type: "double"
              }],
              objectIdField: "ObjectID",
              geometryType: "point",
              renderer: schoolRenderer
            })
           }

           function createCenterLayer(){
             graphics = [];
             graphics.push(centerToGraphic(center));
             return new FeatureLayer({
               source: graphics,
               fields: [{
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid"
              }],
              objectIdField: "ObjectID",
              geometryType: "point",
              renderer: centerRenderer
            })
           }

           function centerToGraphic(center){
             const location = new Point({
               latitude: center[0],
               longitude: center[1]
             });
             return new Graphic({
               geometry: location
             })
           }

           function schoolToGraphic(school){
             const location = new Point({
               latitude: school.lat,
               longitude: school.long
             });
             return new Graphic({
               geometry: location,
               attributes: {
                 LASTWIN: school.lastWin,
                 WEIGHT: school.weight
               },
               LASTWIN: school.lastWin,
               WEIGHT: school.weight
             })
           }

           var centerRenderer = {
             type: "simple",
             symbol: {
               type: "simple-marker",
               color: [0, 255, 0],
               size: "10px",
               outline: {
                 color: [0, 150, 0],
                 width: 1
               }
             },
             label: "center location"
           };

           var schoolRenderer = {
            type: "simple",
            symbol: {
              type: "point-3d",
              symbolLayers: [
                {
                  type: "object",
                  resource: {
                    primitive: "cylinder"
                  },
                  width: 40000 // width of the symbol in meters
                }
              ]
            },
            label: "school location",
            visualVariables: [
              {
                type: "color",
                field: "LASTWIN",
                stops: [
                  {
                    value: 0,
                    color: "red"
                  },
                  {
                    value: 115,
                    color: "blue"
                  }
                ]
              },
              {
                type: "size",
                field: "WEIGHT",
                stops: [
                  {
                    value: 0,
                    size: 20000
                  },
                  {
                    value: 18,
                    size: 900000
                  }
                ],
                axis: "height"
              },
              {
                type: "size",
                axis: "width-and-depth",
                useSymbolValue: true
              }
            ],
          };

           var map = new Map({
             basemap: "gray-vector",
             layers: [createSchoolLayer(), createCenterLayer()]
           });

           var view = new SceneView({
             container: "viewDiv",
             map: map,
             ground: "world-elevation",
             center: [-90.90614554667947, 38.44811777828268], // longitude, latitude
             zoom: 4.288933173289792
           });


});
