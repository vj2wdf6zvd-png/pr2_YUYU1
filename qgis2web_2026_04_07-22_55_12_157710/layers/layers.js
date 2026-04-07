var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'дороги',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> дороги'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'здания',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> здания'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr__2,lyr__3];
lyr__2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'incline': 'incline', 'crossing:markings': 'crossing:markings', 'button_operated': 'button_operated', 'maxspeed': 'maxspeed', 'lines': 'lines', 'tunnel': 'tunnel', 'crossing': 'crossing', 'footway': 'footway', 'service': 'service', 'lit': 'lit', 'official_name': 'official_name', 'name:ru': 'name:ru', 'lanes': 'lanes', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'int_name': 'int_name', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'nat_ref': 'nat_ref', 'maxweight': 'maxweight', 'maxbogieweight': 'maxbogieweight', 'maxaxleload': 'maxaxleload', 'layer': 'layer', 'bridge:ref': 'bridge:ref', 'bridge': 'bridge', 'oneway': 'oneway', 'surface': 'surface', 'smoothness': 'smoothness', 'ref': 'ref', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'voltage': 'voltage', 'substation': 'substation', 'building:flats': 'building:flats', 'addr:place': 'addr:place', 'training': 'training', 'official_name': 'official_name', 'education_system:ru_standard': 'education_system:ru_standard', 'education_profile:visual_art': 'education_profile:visual_art', 'education_level:primary': 'education_level:primary', 'education_form:parttime': 'education_form:parttime', 'education': 'education', 'military': 'military', 'roof:shape': 'roof:shape', 'loc_name': 'loc_name', 'building:colour': 'building:colour', 'alt_name': 'alt_name', 'social_facility': 'social_facility', 'was:man_made': 'was:man_made', 'website': 'website', 'sport': 'sport', 'power': 'power', 'landuse': 'landuse', 'public_transport': 'public_transport', 'bus': 'bus', 'office': 'office', 'government': 'government', 'ref': 'ref', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'name:en': 'name:en', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'brand': 'brand', 'leisure': 'leisure', 'source:addr': 'source:addr', 'addr:region': 'addr:region', 'religion': 'religion', 'denomination': 'denomination', 'townhall:type': 'townhall:type', 'phone': 'phone', 'amenity': 'amenity', 'smoking': 'smoking', 'healthcare': 'healthcare', 'description': 'description', 'shop': 'shop', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'type': 'type', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tracktype': 'TextEdit', 'incline': 'TextEdit', 'crossing:markings': 'TextEdit', 'button_operated': 'TextEdit', 'maxspeed': 'TextEdit', 'lines': 'TextEdit', 'tunnel': 'TextEdit', 'crossing': 'TextEdit', 'footway': 'TextEdit', 'service': 'TextEdit', 'lit': 'TextEdit', 'official_name': 'TextEdit', 'name:ru': 'TextEdit', 'lanes': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'int_name': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name': 'TextEdit', 'nat_ref': 'TextEdit', 'maxweight': 'TextEdit', 'maxbogieweight': 'TextEdit', 'maxaxleload': 'TextEdit', 'layer': 'TextEdit', 'bridge:ref': 'TextEdit', 'bridge': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'ref': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'voltage': 'TextEdit', 'substation': 'TextEdit', 'building:flats': 'TextEdit', 'addr:place': 'TextEdit', 'training': 'TextEdit', 'official_name': 'TextEdit', 'education_system:ru_standard': 'TextEdit', 'education_profile:visual_art': 'TextEdit', 'education_level:primary': 'TextEdit', 'education_form:parttime': 'TextEdit', 'education': 'TextEdit', 'military': 'TextEdit', 'roof:shape': 'TextEdit', 'loc_name': 'TextEdit', 'building:colour': 'TextEdit', 'alt_name': 'TextEdit', 'social_facility': 'TextEdit', 'was:man_made': 'TextEdit', 'website': 'TextEdit', 'sport': 'TextEdit', 'power': 'TextEdit', 'landuse': 'TextEdit', 'public_transport': 'TextEdit', 'bus': 'TextEdit', 'office': 'TextEdit', 'government': 'TextEdit', 'ref': 'TextEdit', 'operator': 'TextEdit', 'opening_hours': 'TextEdit', 'name:ru': 'TextEdit', 'name:en': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand:en': 'TextEdit', 'brand': 'TextEdit', 'leisure': 'TextEdit', 'source:addr': 'TextEdit', 'addr:region': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'townhall:type': 'TextEdit', 'phone': 'TextEdit', 'amenity': 'TextEdit', 'smoking': 'TextEdit', 'healthcare': 'TextEdit', 'description': 'TextEdit', 'shop': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': 'TextEdit', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'incline': 'no label', 'crossing:markings': 'no label', 'button_operated': 'no label', 'maxspeed': 'no label', 'lines': 'no label', 'tunnel': 'no label', 'crossing': 'no label', 'footway': 'no label', 'service': 'no label', 'lit': 'no label', 'official_name': 'no label', 'name:ru': 'no label', 'lanes': 'no label', 'name:etymology:wikipedia': 'no label', 'int_name': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'nat_ref': 'no label', 'maxweight': 'no label', 'maxbogieweight': 'no label', 'maxaxleload': 'no label', 'layer': 'no label', 'bridge:ref': 'no label', 'bridge': 'no label', 'oneway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'ref': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'voltage': 'no label', 'substation': 'no label', 'building:flats': 'no label', 'addr:place': 'no label', 'training': 'no label', 'official_name': 'no label', 'education_system:ru_standard': 'no label', 'education_profile:visual_art': 'no label', 'education_level:primary': 'no label', 'education_form:parttime': 'no label', 'education': 'no label', 'military': 'no label', 'roof:shape': 'no label', 'loc_name': 'no label', 'building:colour': 'no label', 'alt_name': 'no label', 'social_facility': 'no label', 'was:man_made': 'no label', 'website': 'no label', 'sport': 'no label', 'power': 'no label', 'landuse': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'office': 'no label', 'government': 'no label', 'ref': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'leisure': 'no label', 'source:addr': 'no label', 'addr:region': 'no label', 'religion': 'no label', 'denomination': 'no label', 'townhall:type': 'no label', 'phone': 'no label', 'amenity': 'no label', 'smoking': 'no label', 'healthcare': 'no label', 'description': 'no label', 'shop': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});