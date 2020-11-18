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
function createDiamondShapeRoom() {
    var angleShape = new Map([
        ["diamond_topleft", 0],
        ["diamond_topright", 90],
        ["diamond_bottomleft", 180],
        ["diamond_bottomright", 270],
    ]);

    var sample = { 
    rooms: [
        {
        __comment_enum__: "diamond_topleft, diamond_topright; diamond_bottomleft; diamond_bottomright",
        shape: "diamond_topleft",
        dimensions: {
            left_crown: 3,
            table: 2.83,
            right_crown: 5
        },
        center: {
            x: 13,
            y: 8
        },
        objects: {
            doors: [
                {
                    __comment_enum__: "table; left_crown; right_crown; left_pavilion; right_pavilion",
                    location_side: "left_crown",
                    location_position_from_edge: 1.5,
                    size: 1.5
                },
                {
                    location_side: "right_crown",
                    location_position_from_edge: 1,
                    size: 1.5
                }
            ],
            windows: [
                {
                    location_side: "left_crown",
                    location_position_from_edge: 0.3,
                    size: 1
                },
                {
                    location_side: "left_crown",
                    location_position_from_edge: 1.75,
                    size: 1
                }
            ]
        }
    }]};

    //define points coordinates
    var tableCommonPoint = Math.sqrt(Math.pow(sample.rooms[0].dimensions.table, 2) / 2);

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
            x: tableCommonPoint + sample.rooms[0].dimensions.right_crown,
            y: 0
        },
        {
            x: tableCommonPoint + sample.rooms[0].dimensions.right_crown,
            y: tableCommonPoint + sample.rooms[0].dimensions.left_crown
        },
        {
            x: 0,
            y: tableCommonPoint + sample.rooms[0].dimensions.left_crown
        }
    ]

    var sides = new Map([
        ["table", [points[1], points[0]]],
        ["right_crown", [points[1], points[2]]],
        ["left_crown", [points[4], points[0]]],
        ["right_pavilion", [points[2], points[3]]],
        ["left_pavilion", [points[3], points[4]]]
    ]);

    rotation(points, angleShape.get(sample.rooms[0].shape));

    //move points to correct location
    translation(points, sample.rooms[0].center);

    points[0] = convertToCoordinates(points[0]);
    points[1] = convertToCoordinates(points[1]);
    points[2] = convertToCoordinates(points[2]);
    points[3] = convertToCoordinates(points[3]);
    points[4] = convertToCoordinates(points[4]);

    //draw table
    createWall(points[0], points[1], sample.rooms[0].shape);

    //draw right crown
    createWall(points[1], points[2], sample.rooms[0].shape);

    //draw right pavilion
    createWall(points[2], points[3], sample.rooms[0].shape);

    //draw left pavilion
    createWall(points[3], points[4], sample.rooms[0].shape);

    //draw left crown
    createWall(points[4], points[0], sample.rooms[0].shape);

    //marks rooms shape
    // if (ROOM.find(room => roomCoordsMatch(room, points))) {

    // }
    var obj = sample.rooms[0].objects.doors[0];
    var location_side = obj.location_side;
    var wallFound = WALLS.find(x => (sides.get(location_side)[0] == x.start || sides.get(location_side)[0] == x.end) && (sides.get(location_side)[1] == x.start || sides.get(location_side)[1] == x.end));//TLE TODO handle line with 2 same points

    var ratio = (obj.location_position_from_edge * meter) / distanceBetweenPoints(sides.get(location_side)[0], sides.get(location_side)[1]);
    var xCenterObj = (1 - ratio) * sides.get(location_side)[0].x + ratio * sides.get(location_side)[1].x;
    var yCenterObj = (1 - ratio) * sides.get(location_side)[0].y + ratio * sides.get(location_side)[1].y;
    
    createObjects({wall: wallFound, x: xCenterObj, y: yCenterObj}, obj.size * meter);
}

function createObjects(wallSelect, size) {
    var modeOption = "aperture";
    var wall = wallSelect.wall;
    if (typeof(binder) == 'undefined') {
        // family, classe, type, pos, angle, angleSign, size, hinge, thick
        binder = new editor.obj2D("inWall", "doorWindow", modeOption, wallSelect, 0, 0, size, "normal", wall.thick);
        var angleWall = qSVG.angleDeg(wall.start.x, wall.start.y, wall.end.x, wall.end.y);
        binder.x = Math.round(wallSelect.x);
        binder.y = Math.round(wallSelect.y);
        binder.angle = angleWall;
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
}


// function roomCoordsMatch(room, points) {
//     if (points.length == room.coords.length) {
//         room.coords.forEach(point => {
//             points.
//         });
//     }
//     room.coords
//     return false; 
// }

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

function rollArray(array, count) {
    return [...array.slice(count, array.length), ...array.slice(0, count)];
}

//
// Export

function exportDiamondShapeRoom() {
    var originalWall = ROOM[0];
    var door = OBJDATA[0];

    var points = _.cloneDeep(originalWall.coords.slice(0, originalWall.coords.length - 1));

    switch (originalWall.roomShape) {
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

    var objectCorresp = new Map([
        ["aperture", "doors"],
        ["fix", "windows"]
    ]);

    var doors, windows;
    OBJDATA.forEach(object => {
        Array.from(sides).forEach(side => {
            if (isLineBOnLineA(side[1], object.limit)) {
                switch (object.type) {
                    case "aperture":
                        if (doors === undefined) {
                            doors = [];
                        }
                        doors.push({
                            location_side: side[0],
                            location_position_from_edge: distanceBetweenPoints(side[1][0], { x: object.x, y: object.y }) / meter,
                            size: object.size / meter
                        });
                        break;
                    case "fix":
                        if (windows === undefined) {
                            windows = [];
                        }
                        windows.push({
                            location_side: side[0],
                            location_position_from_edge: distanceBetweenPoints(side[1][0], { x: object.x, y: object.y }) / meter,
                            size: object.size / meter
                        });
                        break;
                }
            }
        });
    });

    // var table = [points[3], points[4]];
    // var left_crown = [points[4], points[0]];
    // var right_crown = [points[3], points[2]];
    // var left_pavilion = [points[0], points[1]];
    // var right_pavilion = [points[2], points[1]];
    

    //isOnTheSameLine
    var onLine = isLineBOnLineA(sides.get("table"), door.limit)

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
                shape: originalWall.roomShape,
                dimensions: {
                    left_crown: left_crownDistance,
                    table: tableDistance,
                    right_crown: right_crownDistance
                },
                center: mp,
                objects: {
                    doors: [
                        {
                            __comment_enum__: "table; left_crown; right_crown; left_pavilion; right_pavilion",
                            location_side: "left_pavilion",
                            location_position_from_edge: 1,
                            size: 1
                        },
                        {
                            location_side: "right_crown",
                            location_position_from_edge: 1,
                            size: 1.5
                        }
                    ],
                    windows: [
                        {
                            location_side: "left_crown",
                            location_position_from_edge: 0.3,
                            size: 1
                        },
                        {
                            location_side: "left_crown",
                            location_position_from_edge: 1.75,
                            size: 1
                        }
                    ]
                }
            }
        ]
    };


}