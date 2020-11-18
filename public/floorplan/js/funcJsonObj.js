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

function createWall(pointA, pointB, roomShape) {
    var sizeWall = wallSize;
    if (mode == 'partition_mode') sizeWall = partitionSize;
    var wall = new editor.wall(pointA, pointB, "normal", sizeWall, roomShape);
    WALLS.push(wall);
    editor.architect(WALLS);
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
        ["left", [points[1], points[2]]],
        ["bottom", [points[2], points[3]]],
        ["right", [points[3], points[0]]]
    ]);

    translation(points, room.center);

    points.forEach(point => point = convertToCoordinates(point));

    createWall(points[0], points[1], room.shape);
    createWall(points[1], points[2], room.shape);
    createWall(points[2], points[3], room.shape);
    createWall(points[3], points[0], room.shape);

    scanObjects(room.objects, sides);
}

var objectCorrespImport = new Map([
    ["doors", "aperture"],
    ["windows", "fix"]
]);

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
    translation(points, room.center);

    //convert meter to svg coordinates
    points.forEach(point => point = convertToCoordinates(point));

    //draw table
    createWall(points[0], points[1], room.shape);

    //draw right crown
    createWall(points[1], points[2], room.shape);

    //draw right pavilion
    createWall(points[2], points[3], room.shape);

    //draw left pavilion
    createWall(points[3], points[4], room.shape);

    //draw left crown
    createWall(points[4], points[0], room.shape);

    //draw doors, windows
    scanObjects(room.objects, sides);
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

    translation(points, room.center);

    points.forEach(point => point = convertToCoordinates(point));

    createWall(points[0], points[1], room.shape);
    createWall(points[1], points[2], room.shape);
    createWall(points[2], points[3], room.shape);
    createWall(points[3], points[4], room.shape);
    createWall(points[4], points[5], room.shape);
    createWall(points[5], points[0], room.shape);

    scanObjects(room.objects, sides);
}

function scanObjects(objects, sides) {
    ["doors", "windows"].forEach(type => {
        if (objects[type] !== undefined) {
            objects[type].forEach(obj => {
                var location_side = obj.location_side;
                var wallFound = WALLS.find(x => (sides.get(location_side)[0] == x.start || sides.get(location_side)[0] == x.end) && (sides.get(location_side)[1] == x.start || sides.get(location_side)[1] == x.end));//TLE TODO handle line with 2 same points
            
                var ratio = (obj.location_position_from_edge * meter) / distanceBetweenPoints(sides.get(location_side)[0], sides.get(location_side)[1]);
                var xCenterObj = (1 - ratio) * sides.get(location_side)[0].x + ratio * sides.get(location_side)[1].x;
                var yCenterObj = (1 - ratio) * sides.get(location_side)[0].y + ratio * sides.get(location_side)[1].y;
                
                createObjects({wall: wallFound, x: xCenterObj, y: yCenterObj}, objectCorrespImport.get(type), obj.size * meter);
            });
        }
    });
}

function createObjects(wallSelect, modeOption, size) {
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
    $('#boxcarpentry').append(OBJDATA[OBJDATA.length-1].graph);
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

function translation(points, destinationPoint, opposite) {
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

    objects = exportObjects(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translation(points, mp, true);

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

    objects = exportObjects(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translation(points, mp, true);

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

    objects = exportObjects(OBJDATA, sides);

    points.forEach(point => point = convertToMeters(point));

    var mp = meanPoint(points);

    translation(points, mp, true);

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

var objectCorrespExport = new Map([
    ["aperture", "doors"],
    ["fix", "windows"]
]);

function exportObjects(objects, sides) {
    var exportedObjects = {};

    objects.forEach(object => {
        Array.from(sides).forEach(side => {
            if (isLineBOnLineA(side[1], object.limit)) {
                var exportType = objectCorrespExport.get(object.type);
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

