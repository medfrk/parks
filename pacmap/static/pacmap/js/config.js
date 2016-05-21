var Config={
	'center':[-58.9,4.9],
	'bbox':[-61.5,1.1,-56.3,8.7],
	'boundary':'/static/pacmap/geojson/guyana_boundary.geojson',
	'keys':['Protected Areas Commission'],
	'Protected Areas Commission':{
		'center':[-58.9,4.9],
		'bbox':[-61.5,1.1,-56.3,8.7],
		'boundary':'/static/pacmap/geojson/guyana_boundary.geojson',
		'photos':['/static/pacmap/img/pac_hq.jpg',],
		'keys':['Urban Parks','Hinterland Areas'],
		'Hinterland Areas':{
			'center':[-58.9,4.9],
			'bbox':[-61.5,1.1,-56.3,8.7],
			'boundary':'/static/pacmap/geojson/guyana_boundary.geojson',
			'photos':['/static/pacmap/img/hinterland_areas.jpg',],
			'keys':['Kaieteur Falls','Shell Beach','Kanuku Mountains'],
			'Kaieteur Falls':{
				'center':[-59.50293, 5.175],
				'bbox':[-59.63383, 5.0468, -59.37203, 5.3032],
				'boundary':'/static/pacmap/geojson/kaieteur_boundary.geojson',
				'photos':['/static/pacmap/img/kaieteur_falls.png',],
				'keys':{},
			},
			'Shell Beach':{
				'center':[-59.294995, 7.99126],
				'bbox':[-59.78492, 7.59982, -58.80507, 8.3827],
				'boundary':'/static/pacmap/geojson/shellbeach_boundary.geojson',
				'photos':['/static/pacmap/img/shell_beach.jpg',],
				'keys':{},
			},
			'Kanuku Mountains':{
				'center':[-59.105485, 3.2779],
				'bbox':[-59.62108, 2.89736, -58.58989, 3.65844],
				'boundary':'/static/pacmap/geojson/kanuku_boundary.geojson',
				'photos':['/static/pacmap/img/kanuku_mountains.png',],
				'keys':{},
			}
		},
		'Urban Parks':{
			'center':[-58.17065, 6.79375],
			'bbox':[-58.2153, 6.7706, -58.1166, 6.8398],
			'boundary':'/static/pacmap/geojson/urbanparks_boundary.geojson',
			'photos':['/static/pacmap/img/urban_parks.jpg',],
			'keys':['Guyana Zoo','Botanical Gardens','National Park','Joe Viera Park'],
			'Guyana Zoo':{
				'center':[-58.1463, 6.8073],
				'bbox':[-58.1491, 6.8057, -58.1439, 6.809],
				'boundary':'/static/pacmap/geojson/zoo_boundary.geojson',
				'photos':['/static/pacmap/img/zoo_entrance.jpg',],
				'keys':{},
			},
			'Botanical Gardens':{
				'center':[-58.143, 6.8055],
				'bbox':[-58.1512, 6.8018, -58.1374, 6.8094],
				'boundary':'/static/pacmap/geojson/botanical_boundary.geojson',
				'photos':['/static/pacmap/img/botanical_aerial.jpg',],
				'keys':{},
			},
			'National Park':{
				'center':[-58.1509, 6.8215],
				'bbox':[-58.1551, 6.8194, -58.1478, 6.8241],
				'boundary':'/static/pacmap/geojson/national_boundary.geojson',
				'photos':['/static/pacmap/img/national_park.png',],
				'keys':{},
			},
			'Joe Viera Park':{
				'center':[-58.1947, 6.7769],
				'bbox':[-58.1975, 6.7447, -58.1922, 6.7784],
				'boundary':'/static/pacmap/geojson/joeviera_boundary.geojson',
				'photos':['/static/pacmap/img/joe_viera.png',],
				'keys':{},
			}
		}
	}
}


/*

				'photos':{},
				'videos':{},
				'threeD':{},
				'point_sources':[],
				'polygon_sources':[],
				'xyz_sources':[],
				'gpx_sources':[],


var CONFIG={
	'pac_location':[-57.7215, 6.7938],
	'timeout':5000,

	"keys":["Guyana","Shell Beach","Urban Parks","Kaieteur National Park","Iwokrama Protected Area","Kanuku Mountains","Konashens"],
	"Shell Beach":{
		"path":"./static/pacmap/data/shellbeach/",
		"filename":"shellbeach.geojson",
		"bbox":[-59.78492, 7.59982, -58.80507, 8.3827],
		"center":[-59.294995, 7.99126],
		"color":"#0a0",
		"fill":"rgba(0,200,0,0.1)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[
			{"filename":"shellbeach_panorama2.geojson","layer_type":"Launch3D","mediapath":['shellbeach','shellbeach_panorama2'],"color":"rgba(255,0,0,1)","fill":'rgba(255,255,255,1)','width':2,'radius':3,"category":"Shell Beach", "layer_name":'Shell Beach Panorama2'},
			{"filename":"beach.geojson","layer_type":"Launch3D","mediapath":['shellbeach','shellbeach_panorama'],"color":"rgba(255,0,0,1)","fill":'rgba(255,255,255,1)','width':2,'radius':3,"category":"Shell Beach", "layer_name":'Beach 3D'}
		],
		"line_sources":[],
		"xyz_layers":{
			'keys':['shellbeach_satellite'],//'shellbeach_pixelated',
		}
	},
	"Urban Parks":{
		"path":"./static/pacmap/data/urbanparks/",
		"filename":"urbanparks.geojson",
//		"bbox":[-58.6198, 6.3446, -57.7215, 7.2429],
		"bbox":[-58.2153, 6.7706, -58.1166, 6.8398],
		"center":[-58.17065, 6.79375],
		"color":"#0a0",
		"fill":"rgba(0,200,0,0.1)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[
			{"filename":"botanical.geojson","layer_type":"Launch3D","mediapath":['urbanparks','botanical3d'],"color":"rgba(255,0,0,1)","fill":'rgba(255,255,255,1)','width':2,'radius':3,"category":"Botanical Gardens", "layer_name":'Botanical Gardens 3D'},
		],
		"line_sources":[],
		"xyz_layers":{
			'keys':['national_satellite','botanical_satellite'],
		}
	},
	"Kaieteur National Park":{
		"path":"./static/pacmap/data/kaieteur/",
		"filename":"kaieteur.geojson",
		"bbox":[-59.63383, 5.0468, -59.37203, 5.3032],
		"center":[-59.50293, 5.175],
		"color":"#0a0",
		"fill":"rgba(0,200,0,0.1)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[
			{"filename":"falls.geojson","layer_type":"Launch3D","mediapath":['kaieteur','falls3d'],"color":"rgba(255,0,0,1)","fill":'rgba(255,255,255,1)','width':2,'radius':3,"category":"Kaieteur National Park", "layer_name":'Falls 3D'},
		],
		"line_sources":[],
		"xyz_layers":{
			'keys':['satellite','trailmap'],//'satellite2','kaieteur_pixelated',
		}
	},
	"Iwokrama Protected Area":{
		"path":"./static/pacmap/data/iwokrama/",
		"filename":"iwokrama.geojson",
		"bbox":[-59.2709, 4.13887, -58.49147, 4.80849],
		"center":[-58.881185, 4.47368],
		"color":"#0a0",
		"fill":"rgba(0,200,0,0.1)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[],
		"line_sources":[],
		"xyz_layers":{
			'keys':['soil'],//'iwokrama_pixelated',
		}
	},
	"Kanuku Mountains":{
		"path":"./static/pacmap/data/kanuku/",
		"filename":"kanuku.geojson",
		"bbox":[-59.62108, 2.89736, -58.58989, 3.65844],
		//"bbox":[-60.62108, 1.89736, -57.58989, 4.65844],
		"center":[-59.105485, 3.2779],
		"color":"#0a0",
		"fill":"rgba(0,200,0,0.1)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[
			{"filename":"kanuku3d.geojson","layer_type":"Launch3D","mediapath":['kanuku','kanuku_panorama'],"color":"rgba(255,0,0,1)","fill":'rgba(255,255,255,1)','width':2,'radius':3,"category":"Kanuku Mountains", "layer_name":'Kanuku 3D'},
			{"filename":"rupununi3d.geojson","layer_type":"Launch3D","mediapath":['kanuku','rupununi_panorama'],"color":"rgba(255,0,0,1)","fill":'rgba(255,255,255,1)','width':2,'radius':3,"category":"Rupununi Savanah", "layer_name":'Rupununi 3D'},
		],
		"line_sources":[],
		"xyz_layers":{
			'keys':['kanuku_satellite'],//'kanuku_pixelated',
		}
	},
	"Konashens":{
		"path":"./static/pacmap/data/konashens/",
		"filename":"konashens.geojson",
		"bbox":[-59.56666, 1.17728, -58.36804, 1.8491],
		"center":[-58.96735, 1.51319],
		"color":"#0a0",
		"fill":"rgba(0,200,0,0.1)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[],
		"line_sources":[],
		"xyz_layers":{
			'keys':['konashens_satellite'],//'konashens_pixelated',
		}
	},
	"Guyana":{
		"path":"./static/pacmap/data/guyana/",
		"filename":"guyana.geojson",
		"bbox":[-61.5,1.1,-56.3,8.7],
		"center":[-58.9,4.9],
		"color":"rgba(255,255,0,1)",
		"fill":"rgba(0,0,0,0)",
		"width":2,
		"polygon_sources":[],
		"point_sources":[],
		"line_sources":[],
		"xyz_layers":{
			'keys':['guyana_pixelated'],
		}
	},
}

*/
