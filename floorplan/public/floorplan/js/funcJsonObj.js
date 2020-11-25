function showCurrentPlanPrettifiedJson() {
    var jsonObj = JSON.parse(localStorage.getItem('history'))
    var jsonObj = JSON.parse(jsonObj[jsonObj.length - 1]);
    var jsonStr = JSON.stringify(jsonObj, null, 4);
    document.getElementById('saveCurrentPlan').value = jsonStr;
}

function importPlanJson() {
    var jsonStr = document.getElementById('saveCurrentPlan').value;
    var jsonObj = JSON.parse(jsonStr);
    loadObj(jsonObj);
}

function createWall(pointA, pointB, roomShape, roomId) {
    var sizeWall = wallSize;
    if (mode == 'partition_mode') sizeWall = partitionSize;
    var wall = new editor.wall(pointA, pointB, "normal", sizeWall, roomShape, roomId);
    WALLS.push(wall);
    editor.architect(WALLS);
    return wall;
}

function IDGenerator() {
    this.length = 8;
    this.timestamp = +new Date;
    
    var _getRandomInt = function( min, max ) {
       return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
    this.generate = function() {
        var ts = this.timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";
        
        for( var i = 0; i < this.length; ++i ) {
           var index = _getRandomInt( 0, parts.length - 1 );
           id += parts[index];	 
        }
        
        return id;
    }
}

//
//Import
function importRooms() {
    var jsonStr = document.getElementById('saveCurrentPlan').value;
    var sample = JSON.parse(jsonStr);

    sample.rooms.forEach(room => {
        switch (room.shape) {
            case "rectangle":
                createRectangleShapeRoom(room);
                break;
            case "open_bottom_rectangle":
                createOpenRectangleShapeRoom(room);
                break;
            case "diamond_topleft":
            case "diamond_topright":
            case "diamond_bottomleft":
            case "diamond_bottomright":
                createDiamondShapeRoom(room)
                break;
            case "flyingwing_topleft":
            case "flyingwing_topright":
            case "flyingwing_bottomleft":
            case "flyingwing_bottomright":
                createFlyingWingShapeRoom(room);
                break;
        }
    })
}

function createRectangleShapeRoom(room) {
    var points = [
        {
            x: 0,
            y: 0
        },
        {
            x: room.dimensions.width,
            y: 0
        },
        {
            x: room.dimensions.width,
            y: room.dimensions.height
        },
        {
            x: 0,
            y: room.dimensions.height
        }
    ];

    var sides = new Map([
        ["top", [points[0], points[1]]],
        ["right", [points[1], points[2]]],
        ["bottom", [points[2], points[3]]],
        ["left", [points[3], points[0]]]
    ]);

    translationByMeanPoint(points, room.center);

    points.forEach(point => point = convertToCoordinates(point));

    var generator = new IDGenerator();
    var roomId = generator.generate();

    var walls = [];
    walls.push(createWall(points[0], points[1], room.shape, roomId));
    walls.push(createWall(points[1], points[2], room.shape, roomId));
    walls.push(createWall(points[2], points[3], room.shape, roomId));
    walls.push(createWall(points[3], points[0], room.shape, roomId));

    scanObjects(room.objects, sides);

    ROOM[ROOM.length - 1].walls = walls;
    editor.architect(WALLS);
}

function createOpenRectangleShapeRoom(room) {//TLE TODO FAIRE EN SORTE QUE CE SOIT UNE ROOM
    var points = [
        {
            x: 0,
            y: 0
        },
        {
            x: room.dimensions.width,
            y: 0
        },
        {
            x: room.dimensions.width,
            y: room.dimensions.height
        },
        {
            x: 0,
            y: room.dimensions.height
        }
    ];

    var sides = new Map([
        ["top", [points[0], points[1]]],
        ["right", [points[1], points[2]]],
        ["left", [points[3], points[0]]]
    ]);

    translationByMeanPoint(points, room.center);

    points.forEach(point => point = convertToCoordinates(point));

    var generator = new IDGenerator();
    var roomId = generator.generate();

    var walls = [];
    walls.push(createWall(points[0], points[1], room.shape, roomId));
    walls.push(createWall(points[1], points[2], room.shape, roomId));
    walls.push(createWall(points[3], points[0], room.shape, roomId));

    scanObjects(room.objects, sides);
 
    ROOM[ROOM.length - 1].walls = walls;
    editor.architect(WALLS);
}

function createDiamondShapeRoom(room) {
    var angleShape = new Map([
        ["diamond_topleft", 0],
        ["diamond_topright", 90],
        ["diamond_bottomleft", 180],
        ["diamond_bottomright", 270],
    ]);

    //define points coordinates
    var tableCommonPoint = Math.sqrt(Math.pow(room.dimensions.table, 2) / 2);

    var points = [
        {
            x: 0,
            y: tableCommonPoint
        },
        {
            x: tableCommonPoint,
            y: 0
        },
        {
            x: tableCommonPoint + room.dimensions.right_crown,
            y: 0
        },
        {
            x: tableCommonPoint + room.dimensions.right_crown,
            y: tableCommonPoint + room.dimensions.left_crown
        },
        {
            x: 0,
            y: tableCommonPoint + room.dimensions.left_crown
        }
    ]

    var sides = new Map([
        ["table", [points[1], points[0]]],
        ["right_crown", [points[1], points[2]]],
        ["left_crown", [points[4], points[0]]],
        ["right_pavilion", [points[2], points[3]]],
        ["left_pavilion", [points[3], points[4]]]
    ]);

    rotation(points, angleShape.get(room.shape));

    //move points to correct location
    translationByMeanPoint(points, room.center);

    //convert meter to svg coordinates
    points.forEach(point => point = convertToCoordinates(point));

    var generator = new IDGenerator();
    var roomId = generator.generate();

    var walls = [];
    //draw table
    walls.push(createWall(points[0], points[1], room.shape, roomId));

    //draw right crown
    walls.push(createWall(points[1], points[2], room.shape, roomId));

    //draw right pavilion
    walls.push(createWall(points[2], points[3], room.shape, roomId));

    //draw left pavilion
    walls.push(createWall(points[3], points[4], room.shape, roomId));

    //draw left crown
    walls.push(createWall(points[4], points[0], room.shape, roomId));

    //draw doors, windows
    scanObjects(room.objects, sides);

    ROOM[ROOM.length - 1].walls = walls;
    editor.architect(WALLS);
}

function createFlyingWingShapeRoom(room) {
    var angleShape = new Map([
        ["flyingwing_topleft", 0],
        ["flyingwing_topright", 90],
        ["flyingwing_bottomleft", 180],
        ["flyingwing_bottomright", 270],
    ]);

    //define points coordinates
    var points = [
        {
            x: 0,
            y: 0
        },
        {
            x: room.dimensions.left_wingtip + room.dimensions.right_trailing_edge,
            y: 0
        },
        {
            x: room.dimensions.left_wingtip + room.dimensions.right_trailing_edge,
            y: room.dimensions.right_wingtip
        },
        {
            x: room.dimensions.left_wingtip,
            y: room.dimensions.right_wingtip
        },
        {
            x: room.dimensions.left_wingtip,
            y: room.dimensions.right_wingtip + room.dimensions.left_trailing_edge
        },
        {
            x: 0,
            y: room.dimensions.right_wingtip + room.dimensions.left_trailing_edge
        }
    ];

    var sides = new Map([
        ["right_leading_edge", [points[0], points[1]]],
        ["right_wingtip", [points[1], points[2]]],
        ["right_trailing_edge", [points[2], points[3]]],
        ["left_trailing_edge", [points[3], points[4]]],
        ["left_wingtip", [points[4], points[5]]],
        ["left_leading_edge", [points[5], points[0]]]
    ]);

    rotation(points, angleShape.get(room.shape));

    translationByMeanPoint(points, room.center);

    points.forEach(point => point = convertToCoordinates(point));

    var generator = new IDGenerator();
    var roomId = generator.generate();

    var walls = [];
    walls.push(createWall(points[0], points[1], room.shape, roomId));
    walls.push(createWall(points[1], points[2], room.shape, roomId));
    walls.push(createWall(points[2], points[3], room.shape, roomId));
    walls.push(createWall(points[3], points[4], room.shape, roomId));
    walls.push(createWall(points[4], points[5], room.shape, roomId));
    walls.push(createWall(points[5], points[0], room.shape, roomId));

    scanObjects(room.objects, sides);
    ROOM[ROOM.length - 1].walls = walls;
    editor.architect(WALLS);
}

var openingCorrespImport = new Map([
    ["doors", "aperture"],
    ["windows", "fix"]
]);

function scanObjects(objects, sides) {
    ["doors", "windows"].forEach(type => {
        if (objects[type] !== undefined) {
            objects[type].forEach(obj => {
                var location_side = obj.location_side;
                var wallFound = WALLS.find(x => (sides.get(location_side)[0] == x.start || sides.get(location_side)[0] == x.end) && (sides.get(location_side)[1] == x.start || sides.get(location_side)[1] == x.end));//TLE TODO handle line with 2 same points
            
                var ratio = (obj.location_position_from_edge * meter) / distanceBetweenPoints(sides.get(location_side)[0], sides.get(location_side)[1]);
                var xCenterObj = (1 - ratio) * sides.get(location_side)[0].x + ratio * sides.get(location_side)[1].x;
                var yCenterObj = (1 - ratio) * sides.get(location_side)[0].y + ratio * sides.get(location_side)[1].y;
                
                createOpenings({wall: wallFound, x: xCenterObj, y: yCenterObj}, openingCorrespImport.get(type), obj.size * meter);
            });
        }
    });
}

function createOpenings(wallSelect, modeOption, size) {
    var wall = wallSelect.wall;
    if (typeof(binder) == 'undefined') {
        // family, classe, type, pos, angle, angleSign, size, hinge, thick
        binder = new editor.obj2D("inWall", "doorWindow", modeOption, wallSelect, 0, 0, size, "normal", wall.thick);
        var limits = limitObj(wall.equations.base, binder.size, wallSelect);
        var angleWall = qSVG.angleDeg(wall.start.x, wall.start.y, wall.end.x, wall.end.y);
        binder.x = wallSelect.x;
        binder.y = wallSelect.y;
        binder.angle = angleWall;
        binder.limit = limits;
        binder.update();
        $('#boxbind').append(binder.graph);
    }

    OBJDATA.push(binder);
    binder.graph.remove();

    if (wall.roomId && !$('#openings-room-' + wall.roomId).length) {
        $('#boxcarpentry').append(qSVG.create('ici', 'g', {
            id: 'openings-room-' + wall.roomId,
            class: 'room-' + wall.roomId
        }));
    }

    if (wall.roomId) {
        $('#openings-room-' + wall.roomId).append(OBJDATA[OBJDATA.length-1].graph);
    } else {
        $('#boxcarpentry').append(OBJDATA[OBJDATA.length-1].graph);
    }

    delete binder;
    $('#boxinfo').html('Element added');
    fonc_button('select_mode');
    save();
    allRib();
}

//
//QSVG functions
//

function convertToCoordinates(point) {
    // point.x = Math.round(point.x * 60);
    // point.y = Math.round(point.y * 60);
    point.x *= 60;
    point.y *= 60;
    return point;
}

function convertToMeters(point) {
    point.x /= 60;
    point.y /= 60;
    return point;
}

function rotation(points, degrees) {
    var rad = degreeToRad(degrees);
    points.forEach(point => {
        var newPoints = {
            x: (point.x * Math.cos(rad) - point.y * Math.sin(rad)),
            y: (point.x * Math.sin(rad) + point.y * Math.cos(rad))
        };
        point.x = newPoints.x;
        point.y = newPoints.y;
    });
}

function translationByMeanPoint(points, destinationPoint, opposite) {
    var mp = meanPoint(points);

    points.forEach(point => {
        var newPoints = !opposite ? {
            x: point.x + destinationPoint.x - mp.x,
            y: point.y + destinationPoint.y - mp.y
        } : {
            x: point.x - destinationPoint.x + mp.x,
            y: point.y - destinationPoint.y + mp.y
        };
        point.x = newPoints.x;
        point.y = newPoints.y;
    });
}

function translation(point, vector, opposite) {
    var newPoints = !opposite ? {
        x: point.x + vector.x,
        y: point.y + vector.y
    } : {
        x: point.x - vector.x,
        y: point.y - vector.y
    };
    return newPoints;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function meanPoint(points) {
    return {
        x: Array.from(points, p => p.x).reduce(reducer) / points.length,
        y: Array.from(points, p => p.y).reduce(reducer) / points.length
    };
}

function degreeToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function distanceBetweenPoints(pointA, pointB) {
    return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}

function isLineBOnLineA(lineA, lineB) {//Line defined by 2 points; Check if lineB ⊂ lineA
    var distanceA = _.round(distanceBetweenPoints(lineA[0], lineB[0]) + distanceBetweenPoints(lineB[0], lineA[1]), 9);
    var distanceB = _.round(distanceBetweenPoints(lineA[0], lineB[1]) + distanceBetweenPoints(lineB[1], lineA[1]), 9);

    return _.round(distanceBetweenPoints(lineA[0], lineA[1]), 9) === distanceA && distanceA === distanceB;
}

//
// Export

function rollArray(array, count) {
    return [...array.slice(count, array.length), ...array.slice(0, count)];
}

function exportRooms() {
    ROOM.forEach(room => {
        switch (room.roomShape) {
            case "rectangle":
                exportRectangleShapeRoom(room);
                break;
            case "open_bottom_rectangle":
                exportOpenRectangleShapeRoom(room);
                break;
            case "diamond_topleft":
            case "diamond_topright":
            case "diamond_bottomleft":
            case "diamond_bottomright":
                exportDiamondShapeRoom(room)
                break;
            case "flyingwing_topleft":
            case "flyingwing_topright":
            case "flyingwing_bottomleft":
            case "flyingwing_bottomright":
                exportFlyingWingShapeRoom(room);
                break;
        }
    });
}

function exportRectangleShapeRoom(room) {
    var points = _.cloneDeep(room.coords.slice(0, room.coords.length - 1));

    points = rollArray(points, 2);

    var sides = new Map([
        ["top", [points[1], points[0]]],
        ["left", [points[2], points[1]]],
        ["bottom", [points[3], points[2]]],
        ["right", [points[0], points[3]]]
    ]);

    objects = exportOpenings(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translationByMeanPoint(points, mp, true);

    var widthDistance, heightDistance;
    widthDistance = distanceBetweenPoints(sides.get("top")[0], sides.get("top")[1]);
    heightDistance = distanceBetweenPoints(sides.get("left")[0], sides.get("left")[1]);

    var sample = {
        rooms: [
            {
                shape: room.roomShape,
                dimensions: {
                    width: widthDistance,
                    height: heightDistance
                },
                center: mp,
                objects: objects
            }
        ]
    };

    document.getElementById('saveCurrentPlan').value = JSON.stringify(sample, null, 4);
}

function exportOpenRectangleShapeRoom(room) {
    var points = _.cloneDeep(room.coords.slice(0, room.coords.length - 1));

    points = rollArray(points, 2);

    var sides = new Map([
        ["top", [points[1], points[0]]],
        ["left", [points[2], points[1]]],
        ["right", [points[0], points[3]]]
    ]);

    objects = exportOpenings(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translationByMeanPoint(points, mp, true);

    var widthDistance, heightDistance;
    widthDistance = distanceBetweenPoints(sides.get("top")[0], sides.get("top")[1]);
    heightDistance = distanceBetweenPoints(sides.get("left")[0], sides.get("left")[1]);

    var sample = {
        rooms: [
            {
                shape: room.roomShape,
                dimensions: {
                    width: widthDistance,
                    height: heightDistance
                },
                center: mp,
                objects: objects
            }
        ]
    };

    document.getElementById('saveCurrentPlan').value = JSON.stringify(sample, null, 4);
}

function exportDiamondShapeRoom(room) {
    var points = _.cloneDeep(room.coords.slice(0, room.coords.length - 1));

    switch (room.roomShape) {
        case "diamond_topleft":
            points = rollArray(points, 3);
            break;
        case "diamond_topright":
            points = rollArray(points, 2);
            break;
        case "diamond_bottomright":
            points = rollArray(points, 1);
            break;
    }

    var sides = new Map([
        ["table", [points[1], points[0]]],
        ["left_crown", [points[2], points[1]]],
        ["right_crown", [points[0], points[4]]],
        ["left_pavilion", [points[3], points[2]]],
        ["right_pavilion", [points[4], points[3]]]
    ]);

    objects = exportOpenings(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translationByMeanPoint(points, mp, true);

    var tableDistance, left_crownDistance, right_crownDistance;
    tableDistance = distanceBetweenPoints(sides.get("table")[0], sides.get("table")[1]);
    left_crownDistance = distanceBetweenPoints(sides.get("left_crown")[0], sides.get("left_crown")[1]);
    right_crownDistance = distanceBetweenPoints(sides.get("right_crown")[0], sides.get("right_crown")[1]);

    var sample = {
        rooms: [
            {
                shape: room.roomShape,
                dimensions: {
                    left_crown: left_crownDistance,
                    table: tableDistance,
                    right_crown: right_crownDistance
                },
                center: mp,
                objects: objects
            }
        ]
    };

    document.getElementById('saveCurrentPlan').value = JSON.stringify(sample, null, 4);
}

function exportFlyingWingShapeRoom(room) {
    var points = _.cloneDeep(room.coords.slice(0, room.coords.length - 1));

    switch (room.roomShape) {
        case "flyingwing_topleft":
            points = rollArray(points, 4);
            break;
        case "flyingwing_topright":
            points = rollArray(points, 3);
            break;
        case "flyingwing_bottomleft":
            points = rollArray(points, 2);
            break;
    }

    var sides = new Map([
        ["right_leading_edge", [points[1], points[0]]],
        ["left_leading_edge", [points[2], points[1]]],
        ["left_wingtip", [points[3], points[2]]],
        ["left_trailing_edge", [points[4], points[3]]],
        ["right_trailing_edge", [points[5], points[4]]],
        ["right_wingtip", [points[0], points[5]]]
    ]);

    objects = exportOpenings(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translationByMeanPoint(points, mp, true);

    var right_wingtipDistance, right_trailing_edgeDistance, left_trailing_edgeDistance, left_wingtipDistance;
    right_wingtipDistance = distanceBetweenPoints(sides.get("right_wingtip")[0], sides.get("right_wingtip")[1]);
    right_trailing_edgeDistance = distanceBetweenPoints(sides.get("right_trailing_edge")[0], sides.get("right_trailing_edge")[1]);
    left_trailing_edgeDistance = distanceBetweenPoints(sides.get("left_trailing_edge")[0], sides.get("left_trailing_edge")[1]);
    left_wingtipDistance = distanceBetweenPoints(sides.get("left_wingtip")[0], sides.get("left_wingtip")[1]);

    var sample = {
        rooms: [
            {
                shape: room.roomShape,
                dimensions: {
                    right_wingtip: right_wingtipDistance,
                    right_trailing_edge: right_trailing_edgeDistance,
                    left_trailing_edge: left_trailing_edgeDistance,
                    left_wingtip: left_wingtipDistance
                },
                center: mp,
                objects: objects
            }
        ]
    };

    document.getElementById('saveCurrentPlan').value = JSON.stringify(sample, null, 4);
}

var openingCorrespExport = new Map([
    ["aperture", "doors"],
    ["fix", "windows"]
]);

function exportOpenings(objects, sides) {
    var exportedObjects = {};

    objects.forEach(object => {
        Array.from(sides).forEach(side => {
            if (isLineBOnLineA(side[1], object.limit)) {
                var exportType = openingCorrespExport.get(object.type);
                if (!exportedObjects.hasOwnProperty(exportType)) {
                    exportedObjects[exportType] = [];
                }
                exportedObjects[exportType].push({
                    location_side: side[0],
                    location_position_from_edge: distanceBetweenPoints(side[1][0], { x: object.x, y: object.y }) / meter,
                    size: object.size / meter
                });
            }
        });
    });
    return exportedObjects;
}

flag = false; //to check if the mouse is currently down
var refreshedTranslatedCoordinates;//for elements rewrited on mouseup. Needs initial translation to be set to 0;
var x2, y2;

function pressDownRoom(e) {
    if (mode == 'edit_room_mode') {
        var els = document.getElementsByClassName('room-' + ROOM[binder.id].roomId);
        x2 = e.clientX;
        y2 = e.clientY;
        for (var i = 0; i < els.length; i++) {
            flag = true;
            console.log(">reset");
            x1 = e.clientX;
            y1 = e.clientY;
            var t = els[i].getAttribute('transform');
            if (t) {
                var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(t);
                var firstX = parts[1], firstY = parts[2];
                console.log('firstX:' + firstX + ' firstY:' + firstY);
    
                x1 = e.clientX - firstX * 1;
                y1 = e.clientY - firstY * 1;

                x2 = e.clientX - firstX * 1;
                y2 = e.clientY - firstY * 1;
                // console.log(">" + t + "x:" + x + "y:" + movePoint.y + "|| xMove: " + movePoint.x + "   yMove: " + movePoint.y);
            }
        }
    }
}

var numbersRegex = /-?\d+\.?\d*/g;

function moveRoom(e) {
    if (mode == 'edit_room_mode' && ROOM[binder.id].walls) {
        var els = document.getElementsByClassName('room-' + ROOM[binder.id].roomId);
        if (flag) {
            for (var i = 0; i < els.length; i++) {
                x = e.clientX;
                y = e.clientY;
                if ((els[i].id == 'roomSelected'/* || els[i].id == 'ribs-room-' + ROOM[binder.id].roomId*/) && els[i].getAttribute('transform')) {
                    t = "translate(" + (x - x2) + "," + (y - y2) + ")";
                } else {
                    t = "translate(" + (x - x1) + "," + (y - y1) + ")";
                }
                // console.log(t + "x:" + x + "y:" + y + "|| xMove: " + movePoint.x + "   yMove: " + movePoint.y);
                els[i].setAttribute('transform', t);
            }
        }
    }
}

function pressUpRoom() {
    if (mode == 'edit_room_mode') {
        flag = false;
        
        var roomWalls = document.getElementById('walls-room-' + ROOM[binder.id].roomId)
        var rawVector = roomWalls.getAttribute('transform').match(numbersRegex);

        var vector = {
            x: Number(rawVector[0]),
            y: Number(rawVector[1])
        }

        ROOM[binder.id].walls.forEach(wall => {
            editor.objFromWall(wall).forEach(obj => {
                newCoordinates = translation(obj, vector);
                obj.x = newCoordinates.x;
                obj.y = newCoordinates.y;
                var limits = limitObj(wall.equations.base, binder.size, ROOM[binder.id]);
                var angleWall = qSVG.angleDeg(wall.start.x, wall.start.y, wall.end.x, wall.end.y);
                obj.angle = angleWall;
                obj.limit = limits;
                obj.update();

            });
            wall.start = translation(wall.start, vector);
            wall.end = translation(wall.end, vector);
        });

        var els = document.getElementsByClassName('room-' + ROOM[binder.id].roomId);

        editor.architect(WALLS);
        for (var i = 0; i < els.length; i++) {
            if (els[i].id.startsWith('openings-room-')) {
                els[i].removeAttribute('transform');
            }
        }

        rib();

        //TODO TLE recréer la pièce


        // Array.from(els[i].children).forEach(child => {
        //     var currentPos = child.getAttribute('transform').match(numbersRegex).map(numberStr => Number(numberStr));

        //     child.setAttribute('transform', 'translate(' + (currentPos[0] + (x - x1)) + ',' + (currentPos[1] + (y - y1)) + ') scale(1, 1)')
        // });

    }
}
