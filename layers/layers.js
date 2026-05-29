var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParquedosEucaliptos_2 = new ol.format.GeoJSON();
var features_ParquedosEucaliptos_2 = format_ParquedosEucaliptos_2.readFeatures(json_ParquedosEucaliptos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosEucaliptos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosEucaliptos_2.addFeatures(features_ParquedosEucaliptos_2);
var lyr_ParquedosEucaliptos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosEucaliptos_2, 
                style: style_ParquedosEucaliptos_2,
                popuplayertitle: 'Parque dos Eucaliptos',
                interactive: false,
                title: '<img src="styles/legend/ParquedosEucaliptos_2.png" /> Parque dos Eucaliptos'
            });
var format_rvoresmapeadas_3 = new ol.format.GeoJSON();
var features_rvoresmapeadas_3 = format_rvoresmapeadas_3.readFeatures(json_rvoresmapeadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresmapeadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresmapeadas_3.addFeatures(features_rvoresmapeadas_3);
var lyr_rvoresmapeadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresmapeadas_3, 
                style: style_rvoresmapeadas_3,
                popuplayertitle: 'Árvores mapeadas',
                interactive: true,
                title: '<img src="styles/legend/rvoresmapeadas_3.png" /> Árvores mapeadas'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_ParquedosEucaliptos_2.setVisible(true);lyr_rvoresmapeadas_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_ParquedosEucaliptos_2,lyr_rvoresmapeadas_3];
lyr_ParquedosEucaliptos_2.set('fieldAliases', {'fid': 'fid', });
lyr_rvoresmapeadas_3.set('fieldAliases', {'Arvores': 'Árvores', 'Elevacao': 'Elevação', 'Especies': 'Espécies arbórea', 'Fotos': 'Registro fotográfico', });
lyr_ParquedosEucaliptos_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_rvoresmapeadas_3.set('fieldImages', {'Arvores': 'TextEdit', 'Elevacao': 'TextEdit', 'Especies': 'TextEdit', 'Fotos': 'ExternalResource', });
lyr_ParquedosEucaliptos_2.set('fieldLabels', {'fid': 'no label', });
lyr_rvoresmapeadas_3.set('fieldLabels', {'Arvores': 'header label - always visible', 'Elevacao': 'hidden field', 'Especies': 'header label - always visible', 'Fotos': 'header label - always visible', });
lyr_rvoresmapeadas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});