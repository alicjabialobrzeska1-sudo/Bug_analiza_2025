var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_rok2025zobrazuSentinel_2 = new ol.format.GeoJSON();
var features_rok2025zobrazuSentinel_2 = format_rok2025zobrazuSentinel_2.readFeatures(json_rok2025zobrazuSentinel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rok2025zobrazuSentinel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rok2025zobrazuSentinel_2.addFeatures(features_rok2025zobrazuSentinel_2);
var lyr_rok2025zobrazuSentinel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rok2025zobrazuSentinel_2, 
                style: style_rok2025zobrazuSentinel_2,
                popuplayertitle: 'rok 2025 z obrazu Sentinel',
                interactive: false,
                title: '<img src="styles/legend/rok2025zobrazuSentinel_2.png" /> rok 2025 z obrazu Sentinel'
            });
var format_rok2002zVmap_3 = new ol.format.GeoJSON();
var features_rok2002zVmap_3 = format_rok2002zVmap_3.readFeatures(json_rok2002zVmap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rok2002zVmap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rok2002zVmap_3.addFeatures(features_rok2002zVmap_3);
var lyr_rok2002zVmap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rok2002zVmap_3, 
                style: style_rok2002zVmap_3,
                popuplayertitle: 'rok 2002 z Vmap',
                interactive: false,
                title: '<img src="styles/legend/rok2002zVmap_3.png" /> rok 2002 z Vmap'
            });
var format_rok1940zmapyhistorycznej_4 = new ol.format.GeoJSON();
var features_rok1940zmapyhistorycznej_4 = format_rok1940zmapyhistorycznej_4.readFeatures(json_rok1940zmapyhistorycznej_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rok1940zmapyhistorycznej_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rok1940zmapyhistorycznej_4.addFeatures(features_rok1940zmapyhistorycznej_4);
var lyr_rok1940zmapyhistorycznej_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rok1940zmapyhistorycznej_4, 
                style: style_rok1940zmapyhistorycznej_4,
                popuplayertitle: 'rok 1940 z mapy historycznej',
                interactive: false,
                title: '<img src="styles/legend/rok1940zmapyhistorycznej_4.png" /> rok 1940 z mapy historycznej'
            });
var format_Siatkaanalizzmianmidzylatami19402002_5 = new ol.format.GeoJSON();
var features_Siatkaanalizzmianmidzylatami19402002_5 = format_Siatkaanalizzmianmidzylatami19402002_5.readFeatures(json_Siatkaanalizzmianmidzylatami19402002_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siatkaanalizzmianmidzylatami19402002_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siatkaanalizzmianmidzylatami19402002_5.addFeatures(features_Siatkaanalizzmianmidzylatami19402002_5);
var lyr_Siatkaanalizzmianmidzylatami19402002_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siatkaanalizzmianmidzylatami19402002_5, 
                style: style_Siatkaanalizzmianmidzylatami19402002_5,
                popuplayertitle: 'Siatka analiz zmian między latami 1940 - 2002 [%]',
                interactive: false,
    title: 'Siatka analiz zmian między latami 1940 - 2002 [%]<br />\
    <img src="styles/legend/Siatkaanalizzmianmidzylatami19402002_5_0.png" /> -80 - -37<br />\
    <img src="styles/legend/Siatkaanalizzmianmidzylatami19402002_5_1.png" /> -37 - -9<br />\
    <img src="styles/legend/Siatkaanalizzmianmidzylatami19402002_5_2.png" /> -9 - 13<br />\
    <img src="styles/legend/Siatkaanalizzmianmidzylatami19402002_5_3.png" /> 13 - 43<br />\
    <img src="styles/legend/Siatkaanalizzmianmidzylatami19402002_5_4.png" /> 43 - 100<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_rok2025zobrazuSentinel_2.setVisible(false);lyr_rok2002zVmap_3.setVisible(false);lyr_rok1940zmapyhistorycznej_4.setVisible(false);lyr_Siatkaanalizzmianmidzylatami19402002_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_rok2025zobrazuSentinel_2,lyr_rok2002zVmap_3,lyr_rok1940zmapyhistorycznej_4,lyr_Siatkaanalizzmianmidzylatami19402002_5];
lyr_rok2025zobrazuSentinel_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Powierzchn': 'Powierzchn', 'Obwod': 'Obwod', 'Wsp_zmienn': 'Wsp_zmienn', });
lyr_rok2002zVmap_3.set('fieldAliases', {'Id': 'Id', });
lyr_rok1940zmapyhistorycznej_4.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Obwod': 'Obwod', 'Powierzchn': 'Powierzchn', 'Wsp_zawart': 'Wsp_zawart', });
lyr_Siatkaanalizzmianmidzylatami19402002_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'Pow_proc_H': 'Pow_proc_H', 'Pow_proc_V': 'Pow_proc_V', 'Pow_proc_S': 'Pow_proc_S', 'Roznica_hi': 'Roznica_hi', 'Roznica__1': 'Roznica__1', 'Roznica_vm': 'Roznica_vm', });
lyr_rok2025zobrazuSentinel_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Powierzchn': 'TextEdit', 'Obwod': 'TextEdit', 'Wsp_zmienn': 'TextEdit', });
lyr_rok2002zVmap_3.set('fieldImages', {'Id': 'Range', });
lyr_rok1940zmapyhistorycznej_4.set('fieldImages', {'Id': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'Shape_Le_2': '', 'Shape_Area': '', 'Obwod': '', 'Powierzchn': '', 'Wsp_zawart': '', });
lyr_Siatkaanalizzmianmidzylatami19402002_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'Pow_proc_H': 'TextEdit', 'Pow_proc_V': 'TextEdit', 'Pow_proc_S': 'TextEdit', 'Roznica_hi': 'TextEdit', 'Roznica__1': 'TextEdit', 'Roznica_vm': 'TextEdit', });
lyr_rok2025zobrazuSentinel_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Powierzchn': 'no label', 'Obwod': 'no label', 'Wsp_zmienn': 'no label', });
lyr_rok2002zVmap_3.set('fieldLabels', {'Id': 'no label', });
lyr_rok1940zmapyhistorycznej_4.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'Obwod': 'no label', 'Powierzchn': 'no label', 'Wsp_zawart': 'no label', });
lyr_Siatkaanalizzmianmidzylatami19402002_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'Pow_proc_H': 'no label', 'Pow_proc_V': 'no label', 'Pow_proc_S': 'no label', 'Roznica_hi': 'no label', 'Roznica__1': 'no label', 'Roznica_vm': 'no label', });
lyr_Siatkaanalizzmianmidzylatami19402002_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});