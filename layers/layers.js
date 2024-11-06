var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_batasdesa_2 = new ol.format.GeoJSON();
var features_batasdesa_2 = format_batasdesa_2.readFeatures(json_batasdesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_2.addFeatures(features_batasdesa_2);
var lyr_batasdesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_2, 
                style: style_batasdesa_2,
                popuplayertitle: "batasdesa",
                interactive: true,
    title: 'batasdesa<br />\
    <img src="styles/legend/batasdesa_2_0.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/batasdesa_2_1.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/batasdesa_2_2.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/batasdesa_2_3.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/batasdesa_2_4.png" /> Rt 02 Rw 02<br />\
    <img src="styles/legend/batasdesa_2_5.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/batasdesa_2_6.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/batasdesa_2_7.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/batasdesa_2_8.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/batasdesa_2_9.png" /> <br />'
        });
var format_ptbangunan_3 = new ol.format.GeoJSON();
var features_ptbangunan_3 = format_ptbangunan_3.readFeatures(json_ptbangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptbangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptbangunan_3.addFeatures(features_ptbangunan_3);
var lyr_ptbangunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptbangunan_3, 
                style: style_ptbangunan_3,
                popuplayertitle: "ptbangunan",
                interactive: true,
                title: '<img src="styles/legend/ptbangunan_3.png" /> ptbangunan'
            });
var format_Mewek_Poly_4 = new ol.format.GeoJSON();
var features_Mewek_Poly_4 = format_Mewek_Poly_4.readFeatures(json_Mewek_Poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mewek_Poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mewek_Poly_4.addFeatures(features_Mewek_Poly_4);
var lyr_Mewek_Poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mewek_Poly_4, 
                style: style_Mewek_Poly_4,
                popuplayertitle: "Mewek_Poly",
                interactive: true,
                title: '<img src="styles/legend/Mewek_Poly_4.png" /> Mewek_Poly'
            });
var format_Lapangan_5 = new ol.format.GeoJSON();
var features_Lapangan_5 = format_Lapangan_5.readFeatures(json_Lapangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_5.addFeatures(features_Lapangan_5);
var lyr_Lapangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_5, 
                style: style_Lapangan_5,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_5.png" /> Lapangan'
            });
var format_Jalandesa_6 = new ol.format.GeoJSON();
var features_Jalandesa_6 = format_Jalandesa_6.readFeatures(json_Jalandesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalandesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalandesa_6.addFeatures(features_Jalandesa_6);
var lyr_Jalandesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalandesa_6, 
                style: style_Jalandesa_6,
                popuplayertitle: "Jalandesa",
                interactive: true,
                title: '<img src="styles/legend/Jalandesa_6.png" /> Jalandesa'
            });
var format_sawah_7 = new ol.format.GeoJSON();
var features_sawah_7 = format_sawah_7.readFeatures(json_sawah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_7.addFeatures(features_sawah_7);
var lyr_sawah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_7, 
                style: style_sawah_7,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_7.png" /> sawah'
            });
var format_warungmakan_8 = new ol.format.GeoJSON();
var features_warungmakan_8 = format_warungmakan_8.readFeatures(json_warungmakan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_warungmakan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warungmakan_8.addFeatures(features_warungmakan_8);
var lyr_warungmakan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_warungmakan_8, 
                style: style_warungmakan_8,
                popuplayertitle: "warung makan",
                interactive: true,
                title: '<img src="styles/legend/warungmakan_8.png" /> warung makan'
            });
var format_shop_9 = new ol.format.GeoJSON();
var features_shop_9 = format_shop_9.readFeatures(json_shop_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shop_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shop_9.addFeatures(features_shop_9);
var lyr_shop_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shop_9, 
                style: style_shop_9,
                popuplayertitle: "shop",
                interactive: true,
                title: '<img src="styles/legend/shop_9.png" /> shop'
            });
var format_kantor_10 = new ol.format.GeoJSON();
var features_kantor_10 = format_kantor_10.readFeatures(json_kantor_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantor_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor_10.addFeatures(features_kantor_10);
var lyr_kantor_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantor_10, 
                style: style_kantor_10,
                popuplayertitle: "kantor",
                interactive: true,
                title: '<img src="styles/legend/kantor_10.png" /> kantor'
            });
var format_kos_11 = new ol.format.GeoJSON();
var features_kos_11 = format_kos_11.readFeatures(json_kos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kos_11.addFeatures(features_kos_11);
var lyr_kos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kos_11, 
                style: style_kos_11,
                popuplayertitle: "kos",
                interactive: true,
                title: '<img src="styles/legend/kos_11.png" /> kos'
            });
var format_sekolah_12 = new ol.format.GeoJSON();
var features_sekolah_12 = format_sekolah_12.readFeatures(json_sekolah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_12.addFeatures(features_sekolah_12);
var lyr_sekolah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_12, 
                style: style_sekolah_12,
                popuplayertitle: "sekolah",
                interactive: true,
                title: '<img src="styles/legend/sekolah_12.png" /> sekolah'
            });
var format_Makam_13 = new ol.format.GeoJSON();
var features_Makam_13 = format_Makam_13.readFeatures(json_Makam_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_13.addFeatures(features_Makam_13);
var lyr_Makam_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_13, 
                style: style_Makam_13,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_13.png" /> Makam'
            });
var format_PT_14 = new ol.format.GeoJSON();
var features_PT_14 = format_PT_14.readFeatures(json_PT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_14.addFeatures(features_PT_14);
var lyr_PT_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PT_14, 
                style: style_PT_14,
                popuplayertitle: "PT",
                interactive: true,
                title: '<img src="styles/legend/PT_14.png" /> PT'
            });
var format_Home_15 = new ol.format.GeoJSON();
var features_Home_15 = format_Home_15.readFeatures(json_Home_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Home_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Home_15.addFeatures(features_Home_15);
var lyr_Home_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Home_15, 
                style: style_Home_15,
                popuplayertitle: "Home",
                interactive: true,
                title: '<img src="styles/legend/Home_15.png" /> Home'
            });
var format_Religion_16 = new ol.format.GeoJSON();
var features_Religion_16 = format_Religion_16.readFeatures(json_Religion_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Religion_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religion_16.addFeatures(features_Religion_16);
var lyr_Religion_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Religion_16, 
                style: style_Religion_16,
                popuplayertitle: "Religion",
                interactive: true,
                title: '<img src="styles/legend/Religion_16.png" /> Religion'
            });
var format_sungai_17 = new ol.format.GeoJSON();
var features_sungai_17 = format_sungai_17.readFeatures(json_sungai_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_17.addFeatures(features_sungai_17);
var lyr_sungai_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_17, 
                style: style_sungai_17,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_17.png" /> sungai'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_batasdesa_2.setVisible(true);lyr_ptbangunan_3.setVisible(true);lyr_Mewek_Poly_4.setVisible(true);lyr_Lapangan_5.setVisible(true);lyr_Jalandesa_6.setVisible(true);lyr_sawah_7.setVisible(true);lyr_warungmakan_8.setVisible(true);lyr_shop_9.setVisible(true);lyr_kantor_10.setVisible(true);lyr_kos_11.setVisible(true);lyr_sekolah_12.setVisible(true);lyr_Makam_13.setVisible(true);lyr_PT_14.setVisible(true);lyr_Home_15.setVisible(true);lyr_Religion_16.setVisible(true);lyr_sungai_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_batasdesa_2,lyr_ptbangunan_3,lyr_Mewek_Poly_4,lyr_Lapangan_5,lyr_Jalandesa_6,lyr_sawah_7,lyr_warungmakan_8,lyr_shop_9,lyr_kantor_10,lyr_kos_11,lyr_sekolah_12,lyr_Makam_13,lyr_PT_14,lyr_Home_15,lyr_Religion_16,lyr_sungai_17];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_batasdesa_2.set('fieldAliases', {'id': 'id', 'nama rw': 'nama rw', });
lyr_ptbangunan_3.set('fieldAliases', {'id': 'id', 'namapt': 'namapt', });
lyr_Mewek_Poly_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'Jenis': 'Jenis', });
lyr_Lapangan_5.set('fieldAliases', {'id': 'id', 'namalap': 'namalap', });
lyr_Jalandesa_6.set('fieldAliases', {'id': 'id', 'namajln': 'namajln', 'lebar': 'lebar', });
lyr_sawah_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_warungmakan_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_shop_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_kantor_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_kos_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sekolah_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_Makam_13.set('fieldAliases', {'id': 'id', 'Namamakam': 'Namamakam', });
lyr_PT_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_Home_15.set('fieldAliases', {'id_0': 'id_0', 'nama': 'nama', });
lyr_Religion_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_sungai_17.set('fieldAliases', {'id': 'id', 'namasungai': 'namasungai', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_batasdesa_2.set('fieldImages', {'id': 'TextEdit', 'nama rw': 'TextEdit', });
lyr_ptbangunan_3.set('fieldImages', {'id': '', 'namapt': '', });
lyr_Mewek_Poly_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Lapangan_5.set('fieldImages', {'id': 'TextEdit', 'namalap': 'TextEdit', });
lyr_Jalandesa_6.set('fieldImages', {'id': 'TextEdit', 'namajln': 'TextEdit', 'lebar': 'TextEdit', });
lyr_sawah_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_warungmakan_8.set('fieldImages', {'id': '', 'nama': '', });
lyr_shop_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_kantor_10.set('fieldImages', {'id': '', 'nama': '', 'type': '', });
lyr_kos_11.set('fieldImages', {'id': '', 'nama': '', });
lyr_sekolah_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'type': 'TextEdit', });
lyr_Makam_13.set('fieldImages', {'id': 'TextEdit', 'Namamakam': 'TextEdit', });
lyr_PT_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'type': 'TextEdit', });
lyr_Home_15.set('fieldImages', {'id_0': 'TextEdit', 'nama': 'TextEdit', });
lyr_Religion_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'type': 'TextEdit', });
lyr_sungai_17.set('fieldImages', {'id': 'TextEdit', 'namasungai': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_batasdesa_2.set('fieldLabels', {'id': 'no label', 'nama rw': 'inline label - always visible', });
lyr_ptbangunan_3.set('fieldLabels', {'id': 'no label', 'namapt': 'inline label - always visible', });
lyr_Mewek_Poly_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'Jenis': 'no label', });
lyr_Lapangan_5.set('fieldLabels', {'id': 'no label', 'namalap': 'inline label - always visible', });
lyr_Jalandesa_6.set('fieldLabels', {'id': 'no label', 'namajln': 'inline label - visible with data', 'lebar': 'no label', });
lyr_sawah_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_warungmakan_8.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_shop_9.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_kantor_10.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'type': 'no label', });
lyr_kos_11.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_sekolah_12.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'type': 'no label', });
lyr_Makam_13.set('fieldLabels', {'id': 'no label', 'Namamakam': 'header label - always visible', });
lyr_PT_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'type': 'inline label - always visible', });
lyr_Home_15.set('fieldLabels', {'id_0': 'no label', 'nama': 'inline label - visible with data', });
lyr_Religion_16.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'type': 'no label', });
lyr_sungai_17.set('fieldLabels', {'id': 'no label', 'namasungai': 'inline label - always visible', });
lyr_sungai_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});