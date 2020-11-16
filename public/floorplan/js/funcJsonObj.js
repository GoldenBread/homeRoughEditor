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

function createDiamondShapeRoom() {
    var sample = {
        "rooms": [
            {
                "__comment_enum__": "diamond_topleft, diamond_topright; diamond_bottomleft; diamond_bottomright",
                "shape": "diamond_topleft",
                "dimensions": {
                    "left_crown": 3,
                    "table": 2.83,
                    "right_crown": 3
                },
                "center": {
                    "x": 13,
                    "y": 8
                },
                "objects": {
                    "doors": [
                        {
                            "__comment_enum__": "table; left_crown; right_crown; left_pavilion; right_pavilion",
                            "location_side": "left_pavilion",
                            "location_position_from_edge": 1,
                            "size": 1
                        },
                        {
                            "location_side": "right_crown",
                            "location_position_from_edge": 1,
                            "size": 1.5
                        }
                    ],
                    "windows": [
                        {
                            "location_side": "left_crown",
                            "location_position_from_edge": 0.3,
                            "size": 1
                        },
                        {
                            "location_side": "left_crown",
                            "location_position_from_edge": 1.75,
                            "size": 1
                        }
                    ]
                }
            }
        ]
    };

    //define points coordinates
    var p1, p2, p3, p4, p5;
    p1 = {
        x: 0,
        y: Math.sqrt(sample.rooms[0].dimensions.table^2 / 2)
    };
    p2 = {
        x: Math.sqrt(sample.rooms[0].dimensions.table^2 / 2),
        y: 0
    };
    p3 = {
        x: p2.x + sample.rooms[0].dimensions.right_crown,
        y: 0
    };
    p4 = {
        x: p3.x,
        y: p1.y + sample.rooms[0].dimensions.left_crown
    };
    p5 = {
        x: 0,
        y: p4.y
    };

    p1 = convertToCoordinates(p1);
    p2 = convertToCoordinates(p2);
    p3 = convertToCoordinates(p3);
    p4 = convertToCoordinates(p4);
    p5 = convertToCoordinates(p5);


    //move points to correct location

    //draw table
    createWall(p1, p2);

    //draw right crown
    createWall(p2, p3);

    //draw right pavilion
    createWall(p3, p4);

    //draw left pavilion
    createWall(p4, p5);

    //draw left crown
    createWall(p5, p1);

}

//
//QSVG functions
//

function convertToCoordinates(point) {
    point.x *= 60;
    point.y *= 60;
    return point;
}