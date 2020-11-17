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

function createWall(pointA, pointB) {
    var sizeWall = wallSize;
    if (mode == 'partition_mode') sizeWall = partitionSize;
    var wall = new editor.wall(pointA, pointB, "normal", sizeWall);
    WALLS.push(wall);
    editor.architect(WALLS);
}

//
//Import
function createDiamondShapeRoom() {
    var sample = { 
    rooms: [
        {
        __comment_enum__: "diamond_topleft, diamond_topright; diamond_bottomleft; diamond_bottomright",
        shape: "diamond_topleft",
        dimensions: {
            left_crown: 3,
            table: 2.83,
            right_crown: 3
        },
        center: {
            x: 13,
            y: 8
        },
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
    }]};

    //define points coordinates
    var tableCommonPoint = Math.sqrt(sample.rooms[0].dimensions.table^2 / 2);

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

    rotation(points, 180);

    //move points to correct location
    translation(points, sample.rooms[0].center);

    points[0] = convertToCoordinates(points[0]);
    points[1] = convertToCoordinates(points[1]);
    points[2] = convertToCoordinates(points[2]);
    points[3] = convertToCoordinates(points[3]);
    points[4] = convertToCoordinates(points[4]);

    //draw table
    createWall(points[0], points[1]);

    //draw right crown
    createWall(points[1], points[2]);

    //draw right pavilion
    createWall(points[2], points[3]);

    //draw left pavilion
    createWall(points[3], points[4]);

    //draw left crown
    createWall(points[4], points[0]);
}

//
//QSVG functions
//

function convertToCoordinates(point) {
    point.x *= 60;
    point.y *= 60;
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

function translation(points, destinationPoint) {
    var mp = meanPoint(points);

    points.forEach(point => {
        var newPoints = {
            x: point.x + destinationPoint.x - mp.x,
            y: point.y + destinationPoint.y - mp.y
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

//
// Export

function exportDiamondShapeRoom() {
    var originalWall = ROOM[0];

    //trouver le point moyen
    // var points = originalWall.

    // originalWall.
    //

    var sample = {
        rooms: [
            {
                __comment_enum__: "diamond_topleft, diamond_topright; diamond_bottomleft; diamond_bottomright",
                shape: "diamond_topleft",
                dimensions: {
                    left_crown: 3,
                    table: 2.83,
                    right_crown: 3
                },
                center: {
                    x: 13,
                    y: 8
                },
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