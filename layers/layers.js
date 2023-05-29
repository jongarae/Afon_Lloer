var wms_layers = [];

var lyr_Foel_Lloer_Hillshade_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Foel_Lloer_Hillshade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Foel_Lloer_Hillshade_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-445793.418062, 7005281.824358, -444037.981472, 7008661.734851]
                            })
                        });
var lyr_Foel_Lloer_Lidar_HS_A230_H45_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Foel_Lloer_Lidar_HS_A230_H45",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Foel_Lloer_Lidar_HS_A230_H45_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-445793.418062, 7005281.824358, -444037.981472, 7008661.734851]
                            })
                        });
var lyr_Foel_Lloer_Lidar_SLRM_R23_2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Foel_Lloer_Lidar_SLRM_R23_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Foel_Lloer_Lidar_SLRM_R23_2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-445793.418062, 7005281.824358, -444037.981472, 7008661.734851]
                            })
                        });
var format_E_Modern_Fencecopy_3 = new ol.format.GeoJSON();
var features_E_Modern_Fencecopy_3 = format_E_Modern_Fencecopy_3.readFeatures(json_E_Modern_Fencecopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Modern_Fencecopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Modern_Fencecopy_3.addFeatures(features_E_Modern_Fencecopy_3);
var lyr_E_Modern_Fencecopy_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Modern_Fencecopy_3, 
                style: style_E_Modern_Fencecopy_3,
                interactive: false,
                title: '<img src="styles/legend/E_Modern_Fencecopy_3.png" /> E_Modern_Fence copy'
            });
var format_E_Sheep_Foot_Pathcopy_4 = new ol.format.GeoJSON();
var features_E_Sheep_Foot_Pathcopy_4 = format_E_Sheep_Foot_Pathcopy_4.readFeatures(json_E_Sheep_Foot_Pathcopy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Sheep_Foot_Pathcopy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Sheep_Foot_Pathcopy_4.addFeatures(features_E_Sheep_Foot_Pathcopy_4);
var lyr_E_Sheep_Foot_Pathcopy_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Sheep_Foot_Pathcopy_4, 
                style: style_E_Sheep_Foot_Pathcopy_4,
                interactive: false,
                title: '<img src="styles/legend/E_Sheep_Foot_Pathcopy_4.png" /> E_Sheep_Foot_Path copy'
            });
var format_Afon_Lloer_SouthS_Footpathcopy_5 = new ol.format.GeoJSON();
var features_Afon_Lloer_SouthS_Footpathcopy_5 = format_Afon_Lloer_SouthS_Footpathcopy_5.readFeatures(json_Afon_Lloer_SouthS_Footpathcopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SouthS_Footpathcopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SouthS_Footpathcopy_5.addFeatures(features_Afon_Lloer_SouthS_Footpathcopy_5);
var lyr_Afon_Lloer_SouthS_Footpathcopy_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SouthS_Footpathcopy_5, 
                style: style_Afon_Lloer_SouthS_Footpathcopy_5,
                interactive: false,
                title: '<img src="styles/legend/Afon_Lloer_SouthS_Footpathcopy_5.png" /> Afon_Lloer_South — S_Footpath copy'
            });
var format_Afon_Lloer_SWSW_Footpathcopy_6 = new ol.format.GeoJSON();
var features_Afon_Lloer_SWSW_Footpathcopy_6 = format_Afon_Lloer_SWSW_Footpathcopy_6.readFeatures(json_Afon_Lloer_SWSW_Footpathcopy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SWSW_Footpathcopy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SWSW_Footpathcopy_6.addFeatures(features_Afon_Lloer_SWSW_Footpathcopy_6);
var lyr_Afon_Lloer_SWSW_Footpathcopy_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SWSW_Footpathcopy_6, 
                style: style_Afon_Lloer_SWSW_Footpathcopy_6,
                interactive: false,
                title: '<img src="styles/legend/Afon_Lloer_SWSW_Footpathcopy_6.png" /> Afon_Lloer_SW — SW_Footpath copy'
            });
var format_E_Modern_Fencecopy_7 = new ol.format.GeoJSON();
var features_E_Modern_Fencecopy_7 = format_E_Modern_Fencecopy_7.readFeatures(json_E_Modern_Fencecopy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Modern_Fencecopy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Modern_Fencecopy_7.addFeatures(features_E_Modern_Fencecopy_7);
var lyr_E_Modern_Fencecopy_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Modern_Fencecopy_7, 
                style: style_E_Modern_Fencecopy_7,
                interactive: false,
                title: '<img src="styles/legend/E_Modern_Fencecopy_7.png" /> E_Modern_Fence copy'
            });
var format_E_Sheep_Foot_Pathcopy_8 = new ol.format.GeoJSON();
var features_E_Sheep_Foot_Pathcopy_8 = format_E_Sheep_Foot_Pathcopy_8.readFeatures(json_E_Sheep_Foot_Pathcopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Sheep_Foot_Pathcopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Sheep_Foot_Pathcopy_8.addFeatures(features_E_Sheep_Foot_Pathcopy_8);
var lyr_E_Sheep_Foot_Pathcopy_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Sheep_Foot_Pathcopy_8, 
                style: style_E_Sheep_Foot_Pathcopy_8,
                interactive: false,
                title: '<img src="styles/legend/E_Sheep_Foot_Pathcopy_8.png" /> E_Sheep_Foot_Path copy'
            });
var format_Afon_Lloer_SouthS_Footpathcopy_9 = new ol.format.GeoJSON();
var features_Afon_Lloer_SouthS_Footpathcopy_9 = format_Afon_Lloer_SouthS_Footpathcopy_9.readFeatures(json_Afon_Lloer_SouthS_Footpathcopy_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SouthS_Footpathcopy_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SouthS_Footpathcopy_9.addFeatures(features_Afon_Lloer_SouthS_Footpathcopy_9);
var lyr_Afon_Lloer_SouthS_Footpathcopy_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SouthS_Footpathcopy_9, 
                style: style_Afon_Lloer_SouthS_Footpathcopy_9,
                interactive: false,
                title: '<img src="styles/legend/Afon_Lloer_SouthS_Footpathcopy_9.png" /> Afon_Lloer_South — S_Footpath copy'
            });
var format_Afon_Lloer_SWSW_Footpathcopy_10 = new ol.format.GeoJSON();
var features_Afon_Lloer_SWSW_Footpathcopy_10 = format_Afon_Lloer_SWSW_Footpathcopy_10.readFeatures(json_Afon_Lloer_SWSW_Footpathcopy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SWSW_Footpathcopy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SWSW_Footpathcopy_10.addFeatures(features_Afon_Lloer_SWSW_Footpathcopy_10);
var lyr_Afon_Lloer_SWSW_Footpathcopy_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SWSW_Footpathcopy_10, 
                style: style_Afon_Lloer_SWSW_Footpathcopy_10,
                interactive: false,
                title: '<img src="styles/legend/Afon_Lloer_SWSW_Footpathcopy_10.png" /> Afon_Lloer_SW — SW_Footpath copy'
            });
var format_CurrentMainCourseofAfonLloer_11 = new ol.format.GeoJSON();
var features_CurrentMainCourseofAfonLloer_11 = format_CurrentMainCourseofAfonLloer_11.readFeatures(json_CurrentMainCourseofAfonLloer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurrentMainCourseofAfonLloer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurrentMainCourseofAfonLloer_11.addFeatures(features_CurrentMainCourseofAfonLloer_11);
var lyr_CurrentMainCourseofAfonLloer_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurrentMainCourseofAfonLloer_11, 
                style: style_CurrentMainCourseofAfonLloer_11,
                interactive: false,
                title: '<img src="styles/legend/CurrentMainCourseofAfonLloer_11.png" /> Current Main Course of Afon Lloer'
            });
var format_Afon_Lloer_Walls_Ground_12 = new ol.format.GeoJSON();
var features_Afon_Lloer_Walls_Ground_12 = format_Afon_Lloer_Walls_Ground_12.readFeatures(json_Afon_Lloer_Walls_Ground_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_Walls_Ground_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_Walls_Ground_12.addFeatures(features_Afon_Lloer_Walls_Ground_12);
var lyr_Afon_Lloer_Walls_Ground_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_Walls_Ground_12, 
                style: style_Afon_Lloer_Walls_Ground_12,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_Walls_Ground_12.png" /> Afon_Lloer_Walls_Ground'
            });
var format_Afon_Lloer_Wallsdigitized_13 = new ol.format.GeoJSON();
var features_Afon_Lloer_Wallsdigitized_13 = format_Afon_Lloer_Wallsdigitized_13.readFeatures(json_Afon_Lloer_Wallsdigitized_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_Wallsdigitized_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_Wallsdigitized_13.addFeatures(features_Afon_Lloer_Wallsdigitized_13);
var lyr_Afon_Lloer_Wallsdigitized_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_Wallsdigitized_13, 
                style: style_Afon_Lloer_Wallsdigitized_13,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_Wallsdigitized_13.png" /> Afon_Lloer_Walls — digitized'
            });
var format_Afon_Lloer_Walls_Aerial_14 = new ol.format.GeoJSON();
var features_Afon_Lloer_Walls_Aerial_14 = format_Afon_Lloer_Walls_Aerial_14.readFeatures(json_Afon_Lloer_Walls_Aerial_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_Walls_Aerial_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_Walls_Aerial_14.addFeatures(features_Afon_Lloer_Walls_Aerial_14);
var lyr_Afon_Lloer_Walls_Aerial_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_Walls_Aerial_14, 
                style: style_Afon_Lloer_Walls_Aerial_14,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_Walls_Aerial_14.png" /> Afon_Lloer_Walls_Aerial'
            });
var format_E_Sheep_Foot_Path_15 = new ol.format.GeoJSON();
var features_E_Sheep_Foot_Path_15 = format_E_Sheep_Foot_Path_15.readFeatures(json_E_Sheep_Foot_Path_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Sheep_Foot_Path_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Sheep_Foot_Path_15.addFeatures(features_E_Sheep_Foot_Path_15);
var lyr_E_Sheep_Foot_Path_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Sheep_Foot_Path_15, 
                style: style_E_Sheep_Foot_Path_15,
                interactive: true,
                title: '<img src="styles/legend/E_Sheep_Foot_Path_15.png" /> E_Sheep_Foot_Path'
            });
var format_E_Modern_Fence_16 = new ol.format.GeoJSON();
var features_E_Modern_Fence_16 = format_E_Modern_Fence_16.readFeatures(json_E_Modern_Fence_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Modern_Fence_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Modern_Fence_16.addFeatures(features_E_Modern_Fence_16);
var lyr_E_Modern_Fence_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Modern_Fence_16, 
                style: style_E_Modern_Fence_16,
                interactive: true,
                title: '<img src="styles/legend/E_Modern_Fence_16.png" /> E_Modern_Fence'
            });
var format_E_Ground_Ale_17 = new ol.format.GeoJSON();
var features_E_Ground_Ale_17 = format_E_Ground_Ale_17.readFeatures(json_E_Ground_Ale_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Ground_Ale_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Ground_Ale_17.addFeatures(features_E_Ground_Ale_17);
var lyr_E_Ground_Ale_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Ground_Ale_17, 
                style: style_E_Ground_Ale_17,
                interactive: true,
                title: '<img src="styles/legend/E_Ground_Ale_17.png" /> E_Ground_Ale'
            });
var format_E_Ground_18 = new ol.format.GeoJSON();
var features_E_Ground_18 = format_E_Ground_18.readFeatures(json_E_Ground_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Ground_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Ground_18.addFeatures(features_E_Ground_18);
var lyr_E_Ground_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Ground_18, 
                style: style_E_Ground_18,
                interactive: true,
                title: '<img src="styles/legend/E_Ground_18.png" /> E_Ground'
            });
var format_E_digitised_19 = new ol.format.GeoJSON();
var features_E_digitised_19 = format_E_digitised_19.readFeatures(json_E_digitised_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_digitised_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_digitised_19.addFeatures(features_E_digitised_19);
var lyr_E_digitised_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_digitised_19, 
                style: style_E_digitised_19,
                interactive: true,
                title: '<img src="styles/legend/E_digitised_19.png" /> E_digitised'
            });
var format_E_Aerial_20 = new ol.format.GeoJSON();
var features_E_Aerial_20 = format_E_Aerial_20.readFeatures(json_E_Aerial_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Aerial_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Aerial_20.addFeatures(features_E_Aerial_20);
var lyr_E_Aerial_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_E_Aerial_20, 
                style: style_E_Aerial_20,
                interactive: true,
                title: '<img src="styles/legend/E_Aerial_20.png" /> E_Aerial'
            });
var format_S_Ground_Ale_21 = new ol.format.GeoJSON();
var features_S_Ground_Ale_21 = format_S_Ground_Ale_21.readFeatures(json_S_Ground_Ale_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_Ground_Ale_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Ground_Ale_21.addFeatures(features_S_Ground_Ale_21);
var lyr_S_Ground_Ale_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S_Ground_Ale_21, 
                style: style_S_Ground_Ale_21,
                interactive: true,
                title: '<img src="styles/legend/S_Ground_Ale_21.png" /> S_Ground_Ale'
            });
var format_S_Ground_22 = new ol.format.GeoJSON();
var features_S_Ground_22 = format_S_Ground_22.readFeatures(json_S_Ground_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_Ground_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Ground_22.addFeatures(features_S_Ground_22);
var lyr_S_Ground_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S_Ground_22, 
                style: style_S_Ground_22,
                interactive: true,
                title: '<img src="styles/legend/S_Ground_22.png" /> S_Ground'
            });
var format_S_Digitised_23 = new ol.format.GeoJSON();
var features_S_Digitised_23 = format_S_Digitised_23.readFeatures(json_S_Digitised_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_Digitised_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Digitised_23.addFeatures(features_S_Digitised_23);
var lyr_S_Digitised_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S_Digitised_23, 
                style: style_S_Digitised_23,
                interactive: true,
                title: '<img src="styles/legend/S_Digitised_23.png" /> S_Digitised'
            });
var format_Afon_Lloer_SouthS_Footpath_24 = new ol.format.GeoJSON();
var features_Afon_Lloer_SouthS_Footpath_24 = format_Afon_Lloer_SouthS_Footpath_24.readFeatures(json_Afon_Lloer_SouthS_Footpath_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SouthS_Footpath_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SouthS_Footpath_24.addFeatures(features_Afon_Lloer_SouthS_Footpath_24);
var lyr_Afon_Lloer_SouthS_Footpath_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SouthS_Footpath_24, 
                style: style_Afon_Lloer_SouthS_Footpath_24,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_SouthS_Footpath_24.png" /> Afon_Lloer_South — S_Footpath'
            });
var format_S_Aerial_25 = new ol.format.GeoJSON();
var features_S_Aerial_25 = format_S_Aerial_25.readFeatures(json_S_Aerial_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_Aerial_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Aerial_25.addFeatures(features_S_Aerial_25);
var lyr_S_Aerial_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S_Aerial_25, 
                style: style_S_Aerial_25,
                interactive: true,
                title: '<img src="styles/legend/S_Aerial_25.png" /> S_Aerial'
            });
var format_Afon_Lloer_SW_Digitized_26 = new ol.format.GeoJSON();
var features_Afon_Lloer_SW_Digitized_26 = format_Afon_Lloer_SW_Digitized_26.readFeatures(json_Afon_Lloer_SW_Digitized_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SW_Digitized_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SW_Digitized_26.addFeatures(features_Afon_Lloer_SW_Digitized_26);
var lyr_Afon_Lloer_SW_Digitized_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SW_Digitized_26, 
                style: style_Afon_Lloer_SW_Digitized_26,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_SW_Digitized_26.png" /> Afon_Lloer_SW_Digitized'
            });
var format_Afon_Lloer_SWSW_Footpath_27 = new ol.format.GeoJSON();
var features_Afon_Lloer_SWSW_Footpath_27 = format_Afon_Lloer_SWSW_Footpath_27.readFeatures(json_Afon_Lloer_SWSW_Footpath_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_SWSW_Footpath_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_SWSW_Footpath_27.addFeatures(features_Afon_Lloer_SWSW_Footpath_27);
var lyr_Afon_Lloer_SWSW_Footpath_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_SWSW_Footpath_27, 
                style: style_Afon_Lloer_SWSW_Footpath_27,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_SWSW_Footpath_27.png" /> Afon_Lloer_SW — SW_Footpath'
            });
var format_SW_Aerial_28 = new ol.format.GeoJSON();
var features_SW_Aerial_28 = format_SW_Aerial_28.readFeatures(json_SW_Aerial_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_Aerial_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_Aerial_28.addFeatures(features_SW_Aerial_28);
var lyr_SW_Aerial_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SW_Aerial_28, 
                style: style_SW_Aerial_28,
                interactive: true,
                title: '<img src="styles/legend/SW_Aerial_28.png" /> SW_Aerial'
            });
var format_SW_Ground_29 = new ol.format.GeoJSON();
var features_SW_Ground_29 = format_SW_Ground_29.readFeatures(json_SW_Ground_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_Ground_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_Ground_29.addFeatures(features_SW_Ground_29);
var lyr_SW_Ground_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SW_Ground_29, 
                style: style_SW_Ground_29,
                interactive: true,
                title: '<img src="styles/legend/SW_Ground_29.png" /> SW_Ground'
            });
var format_Afon_Lloer_W_Ground_Ale_30 = new ol.format.GeoJSON();
var features_Afon_Lloer_W_Ground_Ale_30 = format_Afon_Lloer_W_Ground_Ale_30.readFeatures(json_Afon_Lloer_W_Ground_Ale_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_W_Ground_Ale_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_W_Ground_Ale_30.addFeatures(features_Afon_Lloer_W_Ground_Ale_30);
var lyr_Afon_Lloer_W_Ground_Ale_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_W_Ground_Ale_30, 
                style: style_Afon_Lloer_W_Ground_Ale_30,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_W_Ground_Ale_30.png" /> Afon_Lloer_W_Ground_Ale'
            });
var format_Afon_Lloer_WDigitised_Ale_31 = new ol.format.GeoJSON();
var features_Afon_Lloer_WDigitised_Ale_31 = format_Afon_Lloer_WDigitised_Ale_31.readFeatures(json_Afon_Lloer_WDigitised_Ale_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_WDigitised_Ale_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_WDigitised_Ale_31.addFeatures(features_Afon_Lloer_WDigitised_Ale_31);
var lyr_Afon_Lloer_WDigitised_Ale_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_WDigitised_Ale_31, 
                style: style_Afon_Lloer_WDigitised_Ale_31,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_WDigitised_Ale_31.png" /> Afon_Lloer_W — Digitised_Ale'
            });
var format_CS_Ground_Ale_32 = new ol.format.GeoJSON();
var features_CS_Ground_Ale_32 = format_CS_Ground_Ale_32.readFeatures(json_CS_Ground_Ale_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS_Ground_Ale_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CS_Ground_Ale_32.addFeatures(features_CS_Ground_Ale_32);
var lyr_CS_Ground_Ale_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CS_Ground_Ale_32, 
                style: style_CS_Ground_Ale_32,
                interactive: true,
                title: '<img src="styles/legend/CS_Ground_Ale_32.png" /> CS_Ground_Ale'
            });
var format_CS_Ground_33 = new ol.format.GeoJSON();
var features_CS_Ground_33 = format_CS_Ground_33.readFeatures(json_CS_Ground_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS_Ground_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CS_Ground_33.addFeatures(features_CS_Ground_33);
var lyr_CS_Ground_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CS_Ground_33, 
                style: style_CS_Ground_33,
                interactive: true,
                title: '<img src="styles/legend/CS_Ground_33.png" /> CS_Ground'
            });
var format_CS_Digitised_34 = new ol.format.GeoJSON();
var features_CS_Digitised_34 = format_CS_Digitised_34.readFeatures(json_CS_Digitised_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS_Digitised_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CS_Digitised_34.addFeatures(features_CS_Digitised_34);
var lyr_CS_Digitised_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CS_Digitised_34, 
                style: style_CS_Digitised_34,
                interactive: true,
                title: '<img src="styles/legend/CS_Digitised_34.png" /> CS_Digitised'
            });
var format_CS_Aerial_35 = new ol.format.GeoJSON();
var features_CS_Aerial_35 = format_CS_Aerial_35.readFeatures(json_CS_Aerial_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS_Aerial_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CS_Aerial_35.addFeatures(features_CS_Aerial_35);
var lyr_CS_Aerial_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CS_Aerial_35, 
                style: style_CS_Aerial_35,
                interactive: true,
                title: '<img src="styles/legend/CS_Aerial_35.png" /> CS_Aerial'
            });
var format_Afon_Lloer_NorthNC_Digitised_36 = new ol.format.GeoJSON();
var features_Afon_Lloer_NorthNC_Digitised_36 = format_Afon_Lloer_NorthNC_Digitised_36.readFeatures(json_Afon_Lloer_NorthNC_Digitised_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_NorthNC_Digitised_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_NorthNC_Digitised_36.addFeatures(features_Afon_Lloer_NorthNC_Digitised_36);
var lyr_Afon_Lloer_NorthNC_Digitised_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_NorthNC_Digitised_36, 
                style: style_Afon_Lloer_NorthNC_Digitised_36,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_NorthNC_Digitised_36.png" /> Afon_Lloer_North — NC_Digitised'
            });
var format_Afon_Lloer_NorthN_Aerial_37 = new ol.format.GeoJSON();
var features_Afon_Lloer_NorthN_Aerial_37 = format_Afon_Lloer_NorthN_Aerial_37.readFeatures(json_Afon_Lloer_NorthN_Aerial_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afon_Lloer_NorthN_Aerial_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afon_Lloer_NorthN_Aerial_37.addFeatures(features_Afon_Lloer_NorthN_Aerial_37);
var lyr_Afon_Lloer_NorthN_Aerial_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afon_Lloer_NorthN_Aerial_37, 
                style: style_Afon_Lloer_NorthN_Aerial_37,
                interactive: true,
                title: '<img src="styles/legend/Afon_Lloer_NorthN_Aerial_37.png" /> Afon_Lloer_North — N_Aerial'
            });
var format_N_Ground_38 = new ol.format.GeoJSON();
var features_N_Ground_38 = format_N_Ground_38.readFeatures(json_N_Ground_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N_Ground_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N_Ground_38.addFeatures(features_N_Ground_38);
var lyr_N_Ground_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N_Ground_38, 
                style: style_N_Ground_38,
                interactive: true,
                title: '<img src="styles/legend/N_Ground_38.png" /> N_Ground'
            });
var format_Contours_39 = new ol.format.GeoJSON();
var features_Contours_39 = format_Contours_39.readFeatures(json_Contours_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_39.addFeatures(features_Contours_39);
var lyr_Contours_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_39, 
                style: style_Contours_39,
                interactive: false,
                title: '<img src="styles/legend/Contours_39.png" /> Contours'
            });
var group_Afon_Lloer_North = new ol.layer.Group({
                                layers: [lyr_Afon_Lloer_NorthNC_Digitised_36,lyr_Afon_Lloer_NorthN_Aerial_37,lyr_N_Ground_38,],
                                title: "Afon_Lloer_North"});
var group_Afon_Lloer_Central = new ol.layer.Group({
                                layers: [lyr_CS_Ground_Ale_32,lyr_CS_Ground_33,lyr_CS_Digitised_34,lyr_CS_Aerial_35,],
                                title: "Afon_Lloer_Central"});
var group_Afon_Lloer_W = new ol.layer.Group({
                                layers: [lyr_Afon_Lloer_W_Ground_Ale_30,lyr_Afon_Lloer_WDigitised_Ale_31,],
                                title: "Afon_Lloer_W"});
var group_Afon_Lloer_SW = new ol.layer.Group({
                                layers: [lyr_Afon_Lloer_SW_Digitized_26,lyr_Afon_Lloer_SWSW_Footpath_27,lyr_SW_Aerial_28,lyr_SW_Ground_29,],
                                title: "Afon_Lloer_SW"});
var group_Afon_Lloer_South = new ol.layer.Group({
                                layers: [lyr_S_Ground_Ale_21,lyr_S_Ground_22,lyr_S_Digitised_23,lyr_Afon_Lloer_SouthS_Footpath_24,lyr_S_Aerial_25,],
                                title: "Afon_Lloer_South"});
var group_Afon_Lloer_East = new ol.layer.Group({
                                layers: [lyr_E_Sheep_Foot_Path_15,lyr_E_Modern_Fence_16,lyr_E_Ground_Ale_17,lyr_E_Ground_18,lyr_E_digitised_19,lyr_E_Aerial_20,],
                                title: "Afon_Lloer_East"});
var group_Afon_Lloer_Walls = new ol.layer.Group({
                                layers: [lyr_Afon_Lloer_Walls_Ground_12,lyr_Afon_Lloer_Wallsdigitized_13,lyr_Afon_Lloer_Walls_Aerial_14,],
                                title: "Afon_Lloer_Walls"});
var group_AfonLloerSurveyArea = new ol.layer.Group({
                                layers: [lyr_E_Modern_Fencecopy_7,lyr_E_Sheep_Foot_Pathcopy_8,lyr_Afon_Lloer_SouthS_Footpathcopy_9,lyr_Afon_Lloer_SWSW_Footpathcopy_10,lyr_CurrentMainCourseofAfonLloer_11,],
                                title: "Afon Lloer Survey Area"});
var group_Modern_Features = new ol.layer.Group({
                                layers: [lyr_E_Modern_Fencecopy_7,lyr_E_Sheep_Foot_Pathcopy_8,lyr_Afon_Lloer_SouthS_Footpathcopy_9,lyr_Afon_Lloer_SWSW_Footpathcopy_10,],
                                title: "Modern_Features"});
var group_Afon_Lloer_Lidar_Layers = new ol.layer.Group({
                                layers: [lyr_Foel_Lloer_Hillshade_0,lyr_Foel_Lloer_Lidar_HS_A230_H45_1,lyr_Foel_Lloer_Lidar_SLRM_R23_2_2,],
                                title: "Afon_Lloer_Lidar_Layers"});

lyr_Foel_Lloer_Hillshade_0.setVisible(true);lyr_Foel_Lloer_Lidar_HS_A230_H45_1.setVisible(true);lyr_Foel_Lloer_Lidar_SLRM_R23_2_2.setVisible(true);lyr_E_Modern_Fencecopy_3.setVisible(true);lyr_E_Sheep_Foot_Pathcopy_4.setVisible(true);lyr_Afon_Lloer_SouthS_Footpathcopy_5.setVisible(true);lyr_Afon_Lloer_SWSW_Footpathcopy_6.setVisible(true);lyr_E_Modern_Fencecopy_7.setVisible(true);lyr_E_Sheep_Foot_Pathcopy_8.setVisible(true);lyr_Afon_Lloer_SouthS_Footpathcopy_9.setVisible(true);lyr_Afon_Lloer_SWSW_Footpathcopy_10.setVisible(true);lyr_CurrentMainCourseofAfonLloer_11.setVisible(true);lyr_Afon_Lloer_Walls_Ground_12.setVisible(true);lyr_Afon_Lloer_Wallsdigitized_13.setVisible(true);lyr_Afon_Lloer_Walls_Aerial_14.setVisible(true);lyr_E_Sheep_Foot_Path_15.setVisible(true);lyr_E_Modern_Fence_16.setVisible(true);lyr_E_Ground_Ale_17.setVisible(true);lyr_E_Ground_18.setVisible(true);lyr_E_digitised_19.setVisible(true);lyr_E_Aerial_20.setVisible(true);lyr_S_Ground_Ale_21.setVisible(true);lyr_S_Ground_22.setVisible(true);lyr_S_Digitised_23.setVisible(true);lyr_Afon_Lloer_SouthS_Footpath_24.setVisible(true);lyr_S_Aerial_25.setVisible(true);lyr_Afon_Lloer_SW_Digitized_26.setVisible(true);lyr_Afon_Lloer_SWSW_Footpath_27.setVisible(true);lyr_SW_Aerial_28.setVisible(true);lyr_SW_Ground_29.setVisible(true);lyr_Afon_Lloer_W_Ground_Ale_30.setVisible(true);lyr_Afon_Lloer_WDigitised_Ale_31.setVisible(true);lyr_CS_Ground_Ale_32.setVisible(true);lyr_CS_Ground_33.setVisible(true);lyr_CS_Digitised_34.setVisible(true);lyr_CS_Aerial_35.setVisible(true);lyr_Afon_Lloer_NorthNC_Digitised_36.setVisible(true);lyr_Afon_Lloer_NorthN_Aerial_37.setVisible(true);lyr_N_Ground_38.setVisible(true);lyr_Contours_39.setVisible(true);
var layersList = [group_Afon_Lloer_Lidar_Layers,group_Modern_Features,group_AfonLloerSurveyArea,group_Afon_Lloer_Walls,group_Afon_Lloer_East,group_Afon_Lloer_South,group_Afon_Lloer_SW,group_Afon_Lloer_W,group_Afon_Lloer_Central,group_Afon_Lloer_North,lyr_Contours_39];
lyr_E_Modern_Fencecopy_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', });
lyr_E_Sheep_Foot_Pathcopy_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_Afon_Lloer_SouthS_Footpathcopy_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_Afon_Lloer_SWSW_Footpathcopy_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_E_Modern_Fencecopy_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', });
lyr_E_Sheep_Foot_Pathcopy_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_Afon_Lloer_SouthS_Footpathcopy_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_Afon_Lloer_SWSW_Footpathcopy_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_CurrentMainCourseofAfonLloer_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Afon_Lloer_Walls_Ground_12.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Afon_Lloer_Wallsdigitized_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', });
lyr_Afon_Lloer_Walls_Aerial_14.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_E_Sheep_Foot_Path_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_E_Modern_Fence_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', });
lyr_E_Ground_Ale_17.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_E_Ground_18.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_E_digitised_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Afon_Lloer_Site': 'Afon_Lloer_Site', 'Comment': 'Comment', });
lyr_E_Aerial_20.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_S_Ground_Ale_21.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_S_Ground_22.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_S_Digitised_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Afon_Lloer_Site': 'Afon_Lloer_Site', 'Comment': 'Comment', });
lyr_Afon_Lloer_SouthS_Footpath_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_S_Aerial_25.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_Afon_Lloer_SW_Digitized_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Afon_Lloer_Site': 'Afon_Lloer_Site', 'Comment': 'Comment', });
lyr_Afon_Lloer_SWSW_Footpath_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Comments': 'Comments', 'Afon_Lloer_Site': 'Afon_Lloer_Site', });
lyr_SW_Aerial_28.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Description': 'Description', 'id': 'id', });
lyr_SW_Ground_29.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_Afon_Lloer_W_Ground_Ale_30.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Afon_Lloer_WDigitised_Ale_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Afon_Lloer_SIte': 'Afon_Lloer_SIte', 'Description': 'Description', });
lyr_CS_Ground_Ale_32.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Afon_Lloer_Site': 'Afon_Lloer_Site', 'id': 'id', });
lyr_CS_Ground_33.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_CS_Digitised_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Afon_Lloer_Site': 'Afon_Lloer_Site', 'Comment': 'Comment', });
lyr_CS_Aerial_35.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', });
lyr_Afon_Lloer_NorthNC_Digitised_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'SID': 'SID', 'Comments': 'Comments', });
lyr_Afon_Lloer_NorthN_Aerial_37.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'SID': 'SID', 'id': 'id', });
lyr_N_Ground_38.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'id': 'id', 'Afon_Lloer_Site_id': 'Afon_Lloer_Site_id', });
lyr_Contours_39.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV_MIN': 'ELEV_MIN', 'ELEV_MAX': 'ELEV_MAX', });
lyr_E_Modern_Fencecopy_3.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', });
lyr_E_Sheep_Foot_Pathcopy_4.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_Afon_Lloer_SouthS_Footpathcopy_5.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_Afon_Lloer_SWSW_Footpathcopy_6.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_E_Modern_Fencecopy_7.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', });
lyr_E_Sheep_Foot_Pathcopy_8.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_Afon_Lloer_SouthS_Footpathcopy_9.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_Afon_Lloer_SWSW_Footpathcopy_10.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_CurrentMainCourseofAfonLloer_11.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Afon_Lloer_Walls_Ground_12.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Afon_Lloer_Wallsdigitized_13.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', });
lyr_Afon_Lloer_Walls_Aerial_14.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_E_Sheep_Foot_Path_15.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_E_Modern_Fence_16.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', });
lyr_E_Ground_Ale_17.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_E_Ground_18.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_E_digitised_19.set('fieldImages', {'fid': '', 'id': '', 'Afon_Lloer_Site': '', 'Comment': '', });
lyr_E_Aerial_20.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_S_Ground_Ale_21.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_S_Ground_22.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_S_Digitised_23.set('fieldImages', {'fid': '', 'id': '', 'Afon_Lloer_Site': '', 'Comment': '', });
lyr_Afon_Lloer_SouthS_Footpath_24.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_S_Aerial_25.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_Afon_Lloer_SW_Digitized_26.set('fieldImages', {'fid': '', 'id': '', 'Afon_Lloer_Site': '', 'Comment': '', });
lyr_Afon_Lloer_SWSW_Footpath_27.set('fieldImages', {'fid': '', 'id': '', 'Comments': '', 'Afon_Lloer_Site': '', });
lyr_SW_Aerial_28.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Description': 'TextEdit', 'id': 'Range', });
lyr_SW_Ground_29.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_Afon_Lloer_W_Ground_Ale_30.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Afon_Lloer_WDigitised_Ale_31.set('fieldImages', {'fid': '', 'id': '', 'Afon_Lloer_SIte': '', 'Description': '', });
lyr_CS_Ground_Ale_32.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Afon_Lloer_Site': '', 'id': 'Range', });
lyr_CS_Ground_33.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_CS_Digitised_34.set('fieldImages', {'fid': '', 'id': '', 'layer': '', 'path': '', 'Afon_Lloer_Site': '', 'Comment': '', });
lyr_CS_Aerial_35.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', });
lyr_Afon_Lloer_NorthNC_Digitised_36.set('fieldImages', {'fid': '', 'id': '', 'SID': '', 'Comments': '', });
lyr_Afon_Lloer_NorthN_Aerial_37.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'SID': '', 'id': 'Range', });
lyr_N_Ground_38.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'id': 'Range', 'Afon_Lloer_Site_id': 'Range', });
lyr_Contours_39.set('fieldImages', {'fid': '', 'ID': '', 'ELEV_MIN': '', 'ELEV_MAX': '', });
lyr_E_Modern_Fencecopy_3.set('fieldLabels', {});
lyr_E_Sheep_Foot_Pathcopy_4.set('fieldLabels', {});
lyr_Afon_Lloer_SouthS_Footpathcopy_5.set('fieldLabels', {});
lyr_Afon_Lloer_SWSW_Footpathcopy_6.set('fieldLabels', {});
lyr_E_Modern_Fencecopy_7.set('fieldLabels', {});
lyr_E_Sheep_Foot_Pathcopy_8.set('fieldLabels', {});
lyr_Afon_Lloer_SouthS_Footpathcopy_9.set('fieldLabels', {});
lyr_Afon_Lloer_SWSW_Footpathcopy_10.set('fieldLabels', {});
lyr_CurrentMainCourseofAfonLloer_11.set('fieldLabels', {});
lyr_Afon_Lloer_Walls_Ground_12.set('fieldLabels', {});
lyr_Afon_Lloer_Wallsdigitized_13.set('fieldLabels', {});
lyr_Afon_Lloer_Walls_Aerial_14.set('fieldLabels', {});
lyr_E_Sheep_Foot_Path_15.set('fieldLabels', {});
lyr_E_Modern_Fence_16.set('fieldLabels', {});
lyr_E_Ground_Ale_17.set('fieldLabels', {});
lyr_E_Ground_18.set('fieldLabels', {});
lyr_E_digitised_19.set('fieldLabels', {});
lyr_E_Aerial_20.set('fieldLabels', {});
lyr_S_Ground_Ale_21.set('fieldLabels', {});
lyr_S_Ground_22.set('fieldLabels', {});
lyr_S_Digitised_23.set('fieldLabels', {});
lyr_Afon_Lloer_SouthS_Footpath_24.set('fieldLabels', {});
lyr_S_Aerial_25.set('fieldLabels', {});
lyr_Afon_Lloer_SW_Digitized_26.set('fieldLabels', {});
lyr_Afon_Lloer_SWSW_Footpath_27.set('fieldLabels', {});
lyr_SW_Aerial_28.set('fieldLabels', {});
lyr_SW_Ground_29.set('fieldLabels', {});
lyr_Afon_Lloer_W_Ground_Ale_30.set('fieldLabels', {});
lyr_Afon_Lloer_WDigitised_Ale_31.set('fieldLabels', {});
lyr_CS_Ground_Ale_32.set('fieldLabels', {});
lyr_CS_Ground_33.set('fieldLabels', {});
lyr_CS_Digitised_34.set('fieldLabels', {});
lyr_CS_Aerial_35.set('fieldLabels', {});
lyr_Afon_Lloer_NorthNC_Digitised_36.set('fieldLabels', {});
lyr_Afon_Lloer_NorthN_Aerial_37.set('fieldLabels', {});
lyr_N_Ground_38.set('fieldLabels', {});
lyr_Contours_39.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV_MIN': 'inline label', 'ELEV_MAX': 'no label', });
lyr_Contours_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});