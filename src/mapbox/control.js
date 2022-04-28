import { useStore } from "vuex";
export default function () {
  const store = useStore();
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2lhbjEyIiwiYSI6ImNsMHFiNzE2cjI4bGwzaW41aHE3bWJmMnEifQ._HOz562SugTkbgaH5Zlxog";
  const map = new mapboxgl.Map({
    container: "mapDiv", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [116, 40], // starting position
    zoom: 2, // starting zoom
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
  store.commit("setMap", map);

  map.on("load", () => {
    // Add a custom vector tileset source. This tileset contains
    // point features representing museums. Each feature contains
    // three properties. For example:
    // {
    //     alt_name: "Museo Arqueologico",
    //     name: "Museo Inka",
    //     tourism: "museum"
    // }
    map.addSource("city-source", {
      type: "raster",
      tiles: [
        // "http://localhost:6080/arcgis/rest/services/test/xz4490/MapServer/export?dpi=96&transparent=true&format=png8&layers=&bbox={bbox-epsg-3857}&f=image&bboxSR=4490&imageSR=4490",
        "http://localhost:6080/arcgis/rest/services/test/xz4490/MapServer/export?dpi=96&transparent=true&format=png8&layers=&bbox={bbox-epsg-3857}&f=image&bboxSR=102100&imageSR=3857",
      ],
      // 'tiles':['http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/export?dpi=96&transparent=true&format=png8&layers=&bbox={bbox-epsg-3857}&f=image&bboxSR=3857&imageSR=3857'],
      // "tiles": ['http://221.239.0.144:6080/arcgis/rest/services/oceanname_vector/MapServer/export?bbox={bbox-epsg-3857}&f=image&transparent=true&format=png8&bboxSR=102100&imageSR=102100'],
      tileSize: 256,
    });
    map.addLayer({
      id: "sity-layer",
      type: "raster",
      source: "city-source",
    });
    map.addSource("city-source2", {
      type: "raster",
      tiles: [
        "http://localhost:6080/arcgis/rest/services/test/p38577/MapServer/export?dpi=96&transparent=true&format=png8&layers=&bbox={bbox-epsg-3857}&f=image&bboxSR=102100&imageSR=3857",
      ],
      // tiles:['http://localhost:6080/arcgis/rest/services/MyMapService/MapServer/export?dpi=96&transparent=true&format=png8&layers=&bbox={bbox-epsg-3857}&f=image&bboxSR=3857&imageSR=3857'],
      // "tiles": ['http://221.239.0.144:6080/arcgis/rest/services/oceanname_vector/MapServer/export?bbox={bbox-epsg-3857}&f=image&transparent=true&format=png8&bboxSR=102100&imageSR=102100'],
      tileSize: 256,
    });
    map.addLayer({
      id: "sity-layer2",
      type: "raster",
      source: "city-source2",
    });
    // Add the Mapbox Terrain v2 vector tileset. Read more about
    // the structure of data in this tileset in the documentation:
    // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/
  });
  //用button addlayers
  let addlayer_button = document.getElementById("addlayer");
  addlayer_button.addEventListener("click", () => {
    console.log("fsdkjflsdkhg");

    let layers = map.getStyle().layers;
    var firstSymbolId; //增加一个第一个图层id的变量，为了存储id
    for (var i = 0; i < layers.length; i++) {
      //遍历所有的图层找到为symbol（第一层）的id赋值给firstSymbolId
      if (layers[i].type === "symbol") {
        firstSymbolId = layers[i].id;
        break;
      }
    }

    map.addLayer(
      {
        //增加图层
        id: "urban-areas-fill",
        type: "fill",
        source: {
          type: "geojson",
          data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson",
        },
        layout: {},
        paint: {
          "fill-color": "black",
          "fill-opacity": 0.4,
        },
        //这是这个例子的重要部分:addLayer
        //方法有两个参数: 层作为一个对象， 和一个字符串
        //表示另一层的名称。
        //如果另一个图层
        //已经存在于样式表中，新层将被定位
        //就在堆栈的那一层的前面，使它能够放置
        //“覆盖”层堆栈的任何地方。
        //将该层插入到第一个符号层的下面。
      },
      firstSymbolId
    );
    console.log("layers", layers);
    console.log("firstSymbolId", firstSymbolId);

    //有那个 map.loadImage 才出来的
    //可能是已经加进去了，但是没在map上显示 map.layers看看
    //mapbox layerlist
  });
  return {
    map,
  };
}
