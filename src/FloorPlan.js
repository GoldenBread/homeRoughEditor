import React from 'react';

module.exports = React.createReactClass({
    render: function() {
        return (
            <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=1024" />
            <title>HOME ROUGH EDITOR v0.93</title>
            <link rel="stylesheet" href="bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
            {/* <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> */}
            <link rel="stylesheet" href="style.css" />
            <header>Edité par Home Rough Editor Ver.0.91</header>
            <svg id="lin" viewBox="0 0 1100 700" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" style={{zIndex: 2, margin: 0, padding: 0, width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
            <defs>
            <linearGradient id="gradientRed" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#e65d5e" stopOpacity={1} />
            <stop offset="100%" stopColor="#e33b3c" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientYellow" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#FDEB71" stopOpacity={1} />
            <stop offset="100%" stopColor="#F8D800" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#c0f7d9" stopOpacity={1} />
            <stop offset="100%" stopColor="#6ce8a3" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientSky" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#c4e0f4" stopOpacity={1} />
            <stop offset="100%" stopColor="#87c8f7" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientOrange" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#f9ad67" stopOpacity={1} />
            <stop offset="100%" stopColor="#f97f00" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientWhite" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
            <stop offset="100%" stopColor="#f0f0f0" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientGrey" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#666" stopOpacity={1} />
            <stop offset="100%" stopColor="#aaa" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#4f72a6" stopOpacity={1} />
            <stop offset="100%" stopColor="#365987" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#E2B0FF" stopOpacity={1} />
            <stop offset="100%" stopColor="#9F44D3" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientPink" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#f6c4dd" stopOpacity={1} />
            <stop offset="100%" stopColor="#f699c7" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientBlack" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#3c3b3b" stopOpacity={1} />
            <stop offset="100%" stopColor="#000000" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradientNeutral" x1="0%" y1="0%" x2="100%" y2="100%" spreadMethod="pad">
            <stop offset="0%" stopColor="#dbc6a0" stopOpacity={1} />
            <stop offset="100%" stopColor="#c69d56" stopOpacity={1} />
            </linearGradient>
            <pattern id="grass" patternUnits="userSpaceOnUse" width={256} height={256}>
            <image xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWh5nEP_Trwo96CJjev6lnKe0_dRdA63RJFaoc3-msedgxveJd" x={0} y={0} width={256} height={256} />
            </pattern>
            <pattern id="wood" patternUnits="userSpaceOnUse" width={32} height={256}>
            <image xlinkHref="https://orig00.deviantart.net/e1f2/f/2015/164/8/b/old_oak_planks___seamless_texture_by_rls0812-d8x6htl.jpg" x={0} y={0} width={256} height={256} />
            </pattern>
            <pattern id="tiles" patternUnits="userSpaceOnUse" width={25} height={25}>
            <image xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkoI2Eiw8ya3J_swhfpZdi_ug2sONsI6TxEd1xN5af3DX9J3R" x={0} y={0} width={256} height={256} />
            </pattern>
            <pattern id="granite" patternUnits="userSpaceOnUse" width={256} height={256}>
            <image xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_nEMhnWVV47lxEn5T_HWxvFwkujFTuw6Ff26dRTl4rDaE8AdEQ" x={0} y={0} width={256} height={256} />
            </pattern>
            <pattern id="smallGrid" width={60} height={60} patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#777" strokeWidth="0.25" />
            </pattern>
            <pattern id="grid" width={180} height={180} patternUnits="userSpaceOnUse">
            <rect width={180} height={180} fill="url(#smallGrid)" />
            <path d="M 200 10 L 200 0 L 190 0 M 0 10 L 0 0 L 10 0 M 0 190 L 0 200 L 10 200 M 190 200 L 200 200 L 200 190" fill="none" stroke="#999" strokeWidth="0.8" />
            </pattern>
            <pattern id="hatch" width={5} height={5} patternTransform="rotate(50 0 0)" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 0 5 M 10 0 L 10 10 Z" style={{stroke: '#666', strokeWidth: 5}} />
            </pattern>
            </defs>
            <g id="boxgrid">
            <rect width={8000} height={5000} x={-3500} y={-2000} fill="url(#grid)" />
            </g>
            <g id="boxpath" />
            <g id="boxSurface" />
            <g id="boxRoom" />
            <g id="boxwall" />
            <g id="boxcarpentry" />
            <g id="boxEnergy" />
            <g id="boxFurniture" />
            <g id="boxbind" />
            <g id="boxArea" />
            <g id="boxRib" />
            <g id="boxScale" />
            <g id="boxText" />
            <g id="boxDebug" />
            </svg>
            <div id="areaValue" />
            <div id="reportTools" className="leftBox" style={{width: '500px', overflowY: 'scroll', overflowX: 'hidden'}}>
            <h2><i className="fa fa-calculator" aria-hidden="true" /> Report plan.</h2>
            <br /><br />
            <h2 className="toHide" id="reportTotalSurface" style={{display: 'none'}} />
            <h2 className="toHide" id="reportNumberSurface" style={{display: 'none'}} />
            <hr />
            <section id="reportRooms" className="toHide" style={{display: 'none'}}>
            </section>
            <button className="btn btn-info fully" style={{marginTop: '50px'}} onclick="$('#reportTools').hide('500', function(){$('#panel').show(300);});mode = 'select_mode';"><i className="fa fa-2x fa-backward" aria-hidden="true" /></button>
            </div>
            <div id="wallTools" className="leftBox">
            <h2 id="titleWallTools">Modify the wall</h2>
            <hr />
            <section id="rangeThick">
            <p>Width [<span id="wallWidthScale" />] : <span id="wallWidthVal" /> cm</p>
            <input type="range" id="wallWidth" step="0.1" className="range" />
            </section>
            <ul className="list-unstyled">
            <section id="cutWall">
            <p>Cut the wall :<br /><small>A cut will be made at each wall encountered.</small></p>
            <li><button className="btn btn-default fully" onclick="editor.splitWall();"><i className="fa fa-2x fa-cutlery" aria-hidden="true" /></button></li>
            </section>
            <br />
            <section id="separate">
            <p>Separation wall :<br /><small>Transform the wall into simple separation line.</small></p>
            <li><button className="btn btn-default fully" onclick="editor.invisibleWall();" id="wallInvisible"><i className="fa fa-2x fa-crop" aria-hidden="true" /></button></li>
            </section>
            <section id="recombine">
            <p>Transform to wall :<br /><small>The thickness will be identical to the last known.</small></p>
            <li><button className="btn btn-default fully" onclick="editor.visibleWall();" id="wallVisible"><i className="fa fa-2x fa-crop" aria-hidden="true" /></button></li>
            </section>
            <br />
            <li><button className="btn btn-danger fully" id="wallTrash"><i className="fa fa-2x fa-trash-o" aria-hidden="true" /></button></li>
            <li><button className="btn btn-info fully" style={{marginTop: '50px'}} onclick="fonc_button('select_mode');$('#boxinfo').html('Mode sélection');$('#wallTools').hide('300');$('#panel').show('300');"><i className="fa fa-2x fa-backward" aria-hidden="true" /></button></li>
            </ul>
            </div>
            <div id="objBoundingBox" className="leftBox">
            <h2>Modify object</h2>
            <hr />
            <section id="objBoundingBoxScale">
            <p>Width [<span id="bboxWidthScale" />] : <span id="bboxWidthVal" /> cm</p>
            <input type="range" id="bboxWidth" step={1} className="range" />
            <p>Length [<span id="bboxHeightScale" />] : <span id="bboxHeightVal" /> cm</p>
            <input type="range" id="bboxHeight" step={1} className="range" />
            </section>
            <section id="objBoundingBoxRotation">
            <p><i className="fa fa-compass" aria-hidden="true" /> Rotation : <span id="bboxRotationVal" /> °</p>
            <input type="range" id="bboxRotation" step={1} className="range" min={-180} max={180} />
            </section>
            <div id="stepsCounter" style={{display: 'none'}}>
            <p><span id="bboxSteps">Nb steps [2-15] : <span id="bboxStepsVal">0</span></span></p>
            <button className="btn btn-info" id="bboxStepsAdd"><i className="fa fa-plus" aria-hidden="true" /></button>
            <button className="btn btn-info" id="bboxStepsMinus"><i className="fa fa-minus" aria-hidden="true" /></button>
            </div>
            <div id="objBoundingBoxColor">
            <div className="color textEditorColor" data-type="gradientRed" style={{color: '#f55847', background: 'linear-gradient(30deg, #f55847, #f00)'}} />
            <div className="color textEditorColor" data-type="gradientYellow" style={{color: '#e4c06e', background: 'linear-gradient(30deg,#e4c06e, #ffb000)'}} />
            <div className="color textEditorColor" data-type="gradientGreen" style={{color: '#88cc6c', background: 'linear-gradient(30deg,#88cc6c, #60c437)'}} />
            <div className="color textEditorColor" data-type="gradientSky" style={{color: '#77e1f4', background: 'linear-gradient(30deg,#77e1f4, #00d9ff)'}} />
            <div className="color textEditorColor" data-type="gradientBlue" style={{color: '#4f72a6', background: 'linear-gradient(30deg,#4f72a6, #284d7e)'}} />
            <div className="color textEditorColor" data-type="gradientGrey" style={{color: '#666666', background: 'linear-gradient(30deg,#666666, #aaaaaa)'}} />
            <div className="color textEditorColor" data-type="gradientWhite" style={{color: '#fafafa', background: 'linear-gradient(30deg,#fafafa, #eaeaea)'}} />
            <div className="color textEditorColor" data-type="gradientOrange" style={{color: '#f9ad67', background: 'linear-gradient(30deg, #f9ad67, #f97f00)'}} />
            <div className="color textEditorColor" data-type="gradientPurple" style={{color: '#a784d9', background: 'linear-gradient(30deg,#a784d9, #8951da)'}} />
            <div className="color textEditorColor" data-type="gradientPink" style={{color: '#df67bd', background: 'linear-gradient(30deg,#df67bd, #e22aae)'}} />
            <div className="color textEditorColor" data-type="gradientBlack" style={{color: '#3c3b3b', background: 'linear-gradient(30deg,#3c3b3b, #000000)'}} />
            <div className="color textEditorColor" data-type="gradientNeutral" style={{color: '#e2c695', background: 'linear-gradient(30deg,#e2c695, #c69d56)'}} />
            <div style={{clear: 'both'}} />
            </div>
            <br /><br />
            <button className="btn btn-danger fully" id="bboxTrash"><i className="fa fa-2x fa-trash-o" aria-hidden="true" /></button>
            <button className="btn btn-info" style={{marginTop: '100px'}} onclick="fonc_button('select_mode');$('#boxinfo').html('Mode sélection');$('#objBoundingBox').hide(100);$('#panel').show(200);binder.graph.remove();delete binder;"><i className="fa fa-2x fa-backward" aria-hidden="true" /></button>
            </div>
            <div id="objTools" className="leftBox">
            <h2>Modify door/window</h2>
            <hr />
            <ul className="list-unstyled">
            <br /><br />
            <li><button className="btn btn-default fully" id="objToolsHinge">REVERSE THE GONDS</button></li>
            <p>Width [<span id="doorWindowWidthScale" />] : <span id="doorWindowWidthVal" /> cm</p>
            <input type="range" id="doorWindowWidth" step={1} className="range" />
            <br />
            <li><button className="btn btn-danger fully objTrash"><i className="fa fa-2x fa-trash-o" aria-hidden="true" /></button></li>
            <li><button className="btn btn-info" style={{marginTop: '100px'}} onclick="fonc_button('select_mode');$('#boxinfo').html('Mode sélection');$('#objTools').hide('100');$('#panel').show('200');binder.graph.remove();delete binder;rib();"><i className="fa fa-2x fa-backward" aria-hidden="true" /></button></li>
            </ul>
            </div>
            <div id="roomTools" className="leftBox">
            <span style={{color: '#08d'}}>Home Rough Editor</span> estimated a surface of :<br /><b><span className="size" /></b>
            <br /><br />
            <p>If you have the actual area, you can write it</p>
            <div className="input-group">
            <input type="text" className="form-control" id="roomSurface" placeholder="surface réelle" aria-describedby="basic-addon2" />
            <span className="input-group-addon" id="basic-addon2">m²</span>
            </div>
            <br />
            <input type="hidden" id="roomName" defaultValue />
            Wording :<br />
            <div className="btn-group">
            <button className="btn dropdown-toggle btn-default" data-toggle="dropdown" id="roomLabel">Wording of the room   <span className="caret" /></button>
            <ul className="dropdown-menu">
            <li><a href="#">None</a></li>
            <li><a href="#">Lounge</a></li>
            <li><a href="#">Lunchroom</a></li>
            <li><a href="#">Kitchen</a></li>
            <li><a href="#">Toilet</a></li>
            <li><a href="#">Bathroom</a></li>
            <li><a href="#">Bedroom 1</a></li>
            <li><a href="#">Bedroom 2</a></li>
            <li><a href="#">Bedroom 3</a></li>
            <li><a href="#">Locker</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Hall</a></li>
            <li><a href="#">Loggia</a></li>
            <li><a href="#">Bath 2</a></li>
            <li><a href="#">Toilet 2</a></li>
            <li><a href="#">Bedroom 4</a></li>
            <li><a href="#">Bedroom 5</a></li>
            <li className="divider" />
            <li><a href="#">Balcony</a></li>
            <li><a href="#">Terrace</a></li>
            <li><a href="#">Corridor</a></li>
            <li><a href="#">Garage</a></li>
            <li><a href="#">clearance</a></li>
            </ul>
            </div>
            <br />
            <br />
            Meter :
            <div className="funkyradio">
            <div className="funkyradio-success">
            <input type="checkbox" name="roomShow" defaultValue="showSurface" id="seeArea" defaultChecked />
            <label htmlFor="seeArea">Show the surface</label>
            </div>
            </div>
            <div className="funkyradio">
            <div className="funkyradio-success">
            <input type="radio" name="roomAction" id="addAction" defaultValue="add" defaultChecked />
            <label htmlFor="addAction">Add the surface</label>
            </div>
            <div className="funkyradio-warning">
            <input type="radio" name="roomAction" id="passAction" defaultValue="pass" />
            <label htmlFor="passAction">Ignore the surface</label>
            </div>
            </div>
            <hr />
            <p>Colors</p>
            <div className="roomColor" data-type="gradientRed" style={{background: 'linear-gradient(30deg, #f55847, #f00)'}} />
            <div className="roomColor" data-type="gradientYellow" style={{background: 'linear-gradient(30deg,#e4c06e, #ffb000)'}} />
            <div className="roomColor" data-type="gradientGreen" style={{background: 'linear-gradient(30deg,#88cc6c, #60c437)'}} />
            <div className="roomColor" data-type="gradientSky" style={{background: 'linear-gradient(30deg,#77e1f4, #00d9ff)'}} />
            <div className="roomColor" data-type="gradientBlue" style={{background: 'linear-gradient(30deg,#4f72a6, #284d7e)'}} />
            <div className="roomColor" data-type="gradientGrey" style={{background: 'linear-gradient(30deg,#666666, #aaaaaa)'}} />
            <div className="roomColor" data-type="gradientWhite" style={{background: 'linear-gradient(30deg,#fafafa, #eaeaea)'}} />
            <div className="roomColor" data-type="gradientOrange" style={{background: 'linear-gradient(30deg, #f9ad67, #f97f00)'}} />
            <div className="roomColor" data-type="gradientPurple" style={{background: 'linear-gradient(30deg,#a784d9, #8951da)'}} />
            <div className="roomColor" data-type="gradientPink" style={{background: 'linear-gradient(30deg,#df67bd, #e22aae)'}} />
            <div className="roomColor" data-type="gradientBlack" style={{background: 'linear-gradient(30deg,#3c3b3b, #000000)'}} />
            <div className="roomColor" data-type="gradientNeutral" style={{background: 'linear-gradient(30deg,#e2c695, #c69d56)'}} />
            <br /><br />
            <p>Matérials</p>
            <div className="roomColor" data-type="wood" style={{background: 'url("https://orig00.deviantart.net/e1f2/f/2015/164/8/b/old_oak_planks___seamless_texture_by_rls0812-d8x6htl.jpg")'}} />
            <div className="roomColor" data-type="tiles" style={{background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkoI2Eiw8ya3J_swhfpZdi_ug2sONsI6TxEd1xN5af3DX9J3R")'}} />
            <div className="roomColor" data-type="granite" style={{background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_nEMhnWVV47lxEn5T_HWxvFwkujFTuw6Ff26dRTl4rDaE8AdEQ")'}} />
            <div className="roomColor" data-type="grass" style={{background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWh5nEP_Trwo96CJjev6lnKe0_dRdA63RJFaoc3-msedgxveJd")'}} />
            <div data-type="#ff008a" style={{clear: 'both'}} />
            <br /><br />
            <input type="hidden" id="roomBackground" defaultValue="gradientNeutral" />
            <input type="hidden" id="roomIndex" defaultValue />
            <button type="button" className="btn btn-primary" id="applySurface">Apply</button>
            <button type="button" className="btn btn-danger" id="resetRoomTools">Cancel</button>
            <br />
            </div>
            <div id="panel" className="leftBox">
            <ul className="list-unstyled">
            <li><button className="btn disabled halfy " id="undo" title="undo"><i className="fa fa-chevron-circle-left" aria-hidden="true" />
            </button><button className="btn disabled halfy pull-right" id="redo" title="redo"><i className="fa fa-chevron-circle-right" aria-hidden="true" /></button>
            </li>
            <br />
            <li><button className="btn btn-success fully " id="select_mode" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-2x fa-mouse-pointer" aria-hidden="true" /></button></li>
            <br />
            <li>
            <button className="btn btn-default fully " style={{marginBottom: '0px'}} id="line_mode" data-toggle="tooltip" data-placement="right" title="Make walls">WALL</button>
            <button className="btn btn-default fully " style={{marginBottom: '0px'}} id="partition_mode" data-toggle="tooltip" data-placement="right" title="Make partitions wall">PARTITION</button>
            <div className="funkyradio" style={{fontSize: '0.8em'}}>
            <div className="funkyradio-success">
            <input type="checkbox" id="multi" defaultChecked />
            <label htmlFor="multi">MULTIPLE</label>
            </div>
            </div>
            </li>
            <br />
            <li><button className="btn btn-default fully " id="room_mode">CONFIG. ROOMS</button></li>
            <br />
            <li><button className="btn btn-default fully " id="node_mode"><i className="fa fa-2x fa-scissors" aria-hidden="true" /></button></li>
            <br />
            <li><button className="btn btn-default fully " id="distance_mode" data-toggle="tooltip" data-placement="right" title="Add a measurement">MEASURE</button></li>
            <li><button className="btn btn-default fully " id="text_mode" data-toggle="tooltip" data-placement="right" title="Add text">TEXT</button></li>
            <br />
            <div id="door_list" className="list-unstyled sub" style={{boxShadow: '2px 2px 3px #ccc', display: 'none', background: '#fff', borderRadius: '0 5px 5px 0', padding: '10px', position: 'absolute', left: '200px', width: '150px'}}>
            <button className="btn fully door" id="aperture">Aperture</button>
            <button className="btn fully door" id="simple">Simple</button>
            <button className="btn fully door" id="double">Double</button>
            <button className="btn fully door" id="pocket">Pocket</button>
            </div>
            <li><button className="btn btn-default fully " id="door_mode" onclick="$('.sub').hide();$('#door_list').toggle(200);$('#window_list').hide();">DOOR</button></li>
            <div id="window_list" className="list-unstyled sub" style={{boxShadow: '2px 2px 3px #ccc', display: 'none', background: '#fff', borderRadius: '0 5px 5px 0', padding: '10px', position: 'absolute', left: '200px', width: '150px'}}>
            <button className="btn fully window" id="fix">Fix</button>
            <button className="btn fully window" id="flap">Simple</button>
            <button className="btn fully window" id="twin">Double</button>
            <button className="btn fully window" id="bay">Slide</button>
            </div>
            <li><button className="btn btn-default fully " id="window_mode" onclick="$('.sub').hide();$('#window_list').toggle(200);$('#door_list').hide()">WINDOW</button></li>
            <li><button className="btn btn-default fully object" id="stair_mode" onclick="$('.sub').hide();$('#door_list').hide()">STAIR</button></li>
            <br />
            <div id="energy_list" className="list-unstyled sub" style={{boxShadow: '2px 2px 3px #ccc', display: 'none', background: '#fff', borderRadius: '0 5px 5px 0', padding: '10px', position: 'absolute', left: '200px', bottom: '40px', width: '600px'}}>
            <div style={{width: '600px', float: 'left', padding: '10px'}}>
            <p>Energy</p>
            <div style={{float: 'left', padding: '10px', margin: '5px', border: '1px solid #ddd', borderRadius: '5px'}}>
            <p>Courant fort</p>
            <div style={{width: '120px', float: 'left', padding: '2px'}}>
            <button className="btn fully object" id="gtl">GTL</button>
            <button className="btn fully object" id="switch">Interrupteur</button>
            <button className="btn fully object" id="doubleSwitch">Va-et-vient</button>
            <button className="btn fully object" id="dimmer">Variateur</button>
            </div>
            <div style={{width: '120px', float: 'left', padding: '2px'}}>
            <button className="btn fully object" id="plug">Prise élec.</button>
            <button className="btn fully object" id="plug20">Prise 20A</button>
            <button className="btn fully object" id="plug32">Prise 32A</button>
            <button className="btn fully object" id="roofLight">Lum. plafond</button>
            <button className="btn fully object" id="wallLight">Lum. applique</button>
            </div>
            </div>
            <div style={{width: '130px', float: 'left', padding: '10px', margin: '5px', border: '1px solid #ddd', borderRadius: '5px'}}>
            <p>Courant faible</p>
            <button className="btn fully object" id="www">Accès Internet</button>
            <button className="btn fully object" id="rj45">Prise RJ45</button>
            <button className="btn fully object" id="tv">Prise Antenne</button>
            </div>
            <div style={{width: '130px', float: 'left', padding: '10px', margin: '5px', border: '1px solid #ddd', borderRadius: '5px'}}>
            <p>Thermique</p>
            <button className="btn fully object" id="boiler">Chaudière</button>
            <button className="btn fully object" id="heater">Chauffe-eau</button>
            <button className="btn fully object" id="radiator">Radiateur</button>
            </div>
            </div>
            </div>
            <li><button className="btn btn-default fully " id="object_mode" onclick="$('.sub').hide();$('#energy_list').toggle(200);">ENERGY</button></li>
            {/* <li><button class="btn btn-default fully " id="object_mode" onclick="$('.sub').hide();$('#object_list').toggle(200);">FURNITURE</button></li> */}
            <br />
            <li><button className="btn btn-default fully " id="layer_mode" onclick="$('.sub').hide();$('#layer_list').toggle(200);">Layers</button></li>
            <div id="layer_list" className="list-unstyled sub" style={{boxShadow: '2px 2px 3px #ccc', display: 'none', background: '#fff', borderRadius: '0 5px 5px 0', padding: '10px', position: 'absolute', left: '200px', bottom: '100px', width: '200px'}}>
            <div className="funkyradio" style={{fontSize: '0.8em'}}>
            <div className="funkyradio-info">
            <input type="checkbox" id="showRib" defaultChecked />
            <label htmlFor="showRib">Measurement</label>
            </div>
            </div>
            <div className="funkyradio" style={{fontSize: '0.8em'}}>
            <div className="funkyradio-info">
            <input type="checkbox" id="showArea" defaultChecked />
            <label htmlFor="showArea">Surface</label>
            </div>
            </div>
            <div className="funkyradio" style={{fontSize: '0.8em'}}>
            <div className="funkyradio-info">
            <input type="checkbox" id="showLayerRoom" defaultChecked />
            <label htmlFor="showLayerRoom">Texture</label>
            </div>
            </div>
            <div className="funkyradio" style={{fontSize: '0.8em'}}>
            <div className="funkyradio-info">
            <input type="checkbox" id="showLayerEnergy" defaultChecked />
            <label htmlFor="showLayerEnergy">Energy</label>
            </div>
            </div>
            </div>
            <li><button className="btn btn-default fully" id="exportImportModalButton" onclick="$('#exportImportModal').modal();showCurrentPlanPrettifiedJson();">EXPORT/IMPORT</button></li>
            <li><button className="btn btn-default halfy " id="report_mode" title="Show report"><i className="fa fa-calculator" aria-hidden="true" />
            </button><button className="btn btn-default halfy pull-right" onclick="fullscreen();this.style.display='none';$('#nofull_mode').show();" id="full_mode" title="Full screen"><i className="fa fa-expand" aria-hidden="true" /></button>
            <button className="btn btn-default halfy pull-right" style={{display: 'none'}} onclick="outFullscreen();this.style.display='none';$('#full_mode').show();" id="nofull_mode" data-toggle="tooltip" data-placement="right" title="Full screen"><i className="fa fa-compress" aria-hidden="true" /></button>
            </li><li>
            <div style={{clear: 'both'}} />
            </li></ul>
            </div>
            <div className="modal fade" id="exportImportModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 className="modal-title" id="myModalLabel">Export/Import</h4>
            </div>
            <div className="modal-body">
            <textarea className="form-control" id="saveCurrentPlan" defaultValue={""} />
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Fermer</button>
            <button type="button" className="btn btn-primary" onclick="importPlanJson();">Sauvegarder</button>
            </div>
            </div>
            </div>
            </div>
            <div className="modal fade col-xs-9 col-md-12" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 className="modal-title" id="myModalLabel">Welcome Home Rough Editor v0.93</h4>
            </div>
            <div className="modal-body">
            <div id="recover">
            <p>A plan exists into historic, would you like recover him ?</p>
            <button className="btn btn-default" onclick="initHistory('recovery');$('#myModal').modal('toggle')">OUI</button><p />
            <hr />
            <p>Or are you prefer start a new plan ?</p>
            </div>
            <div className="row">
            <div className="col-md-3 col-xs-3 boxMouseOver" style={{minHeight: '140px', margin: '15px', background: 'url("newPlanEmpty.jpg")'}}><img src="newPlanEmpty.jpg" className="img-responsive" onclick="initHistory();$('#myModal').modal('toggle')" /></div>
            <div className="col-md-3 col-xs-3 boxMouseOver" style={{minHeight: '140px', margin: '15px', background: 'url("newPlanEmpty.jpg")'}}><img src="newPlanSquare.jpg" className="img-responsive" style={{marginTop: '10px'}} onclick="initHistory('newSquare');$('#myModal').modal('toggle')" /></div>
            <div className="col-md-3 col-xs-3 boxMouseOver" style={{minHeight: '140px', margin: '15px', background: 'url("newPlanEmpty.jpg")'}}><img src="newPlanL.jpg" className="img-responsive" style={{marginTop: '20px'}} onclick="initHistory('newL');$('#myModal').modal('toggle')" /></div>
            <div className="col-md-3 col-xs-3 boxMouseOver" style={{minHeight: '140px', margin: '15px', background: 'url("newPlanEmpty.jpg")'}}><img src="biseau.jpg" className="img-responsive" style={{marginTop: '20px'}} onclick="initHistory('biseau');$('#myModal').modal('toggle')" /></div>
            </div>
            </div>
            {/* <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary">YES</button>
        </div> */}
        </div>
        </div>
        </div>
        <div className="modal fade" id="textToLayer" tabIndex={-1} role="dialog" aria-labelledby="textToLayerLabel">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 className="modal-title" id="textToLayerLabel">Text editor</h4>
        </div>
        <div className="modal-body">
        <p>Choose police color</p>
        <div className="color textEditorColor" data-type="gradientRed" style={{color: '#f55847', background: 'linear-gradient(30deg, #f55847, #f00)'}} />
        <div className="color textEditorColor" data-type="gradientYellow" style={{color: '#e4c06e', background: 'linear-gradient(30deg,#e4c06e, #ffb000)'}} />
        <div className="color textEditorColor" data-type="gradientGreen" style={{color: '#88cc6c', background: 'linear-gradient(30deg,#88cc6c, #60c437)'}} />
        <div className="color textEditorColor" data-type="gradientSky" style={{color: '#77e1f4', background: 'linear-gradient(30deg,#77e1f4, #00d9ff)'}} />
        <div className="color textEditorColor" data-type="gradientBlue" style={{color: '#4f72a6', background: 'linear-gradient(30deg,#4f72a6, #284d7e)'}} />
        <div className="color textEditorColor" data-type="gradientGrey" style={{color: '#666666', background: 'linear-gradient(30deg,#666666, #aaaaaa)'}} />
        <div className="color textEditorColor" data-type="gradientWhite" style={{color: '#fafafa', background: 'linear-gradient(30deg,#fafafa, #eaeaea)'}} />
        <div className="color textEditorColor" data-type="gradientOrange" style={{color: '#f9ad67', background: 'linear-gradient(30deg, #f9ad67, #f97f00)'}} />
        <div className="color textEditorColor" data-type="gradientPurple" style={{color: '#a784d9', background: 'linear-gradient(30deg,#a784d9, #8951da)'}} />
        <div className="color textEditorColor" data-type="gradientPink" style={{color: '#df67bd', background: 'linear-gradient(30deg,#df67bd, #e22aae)'}} />
        <div className="color textEditorColor" data-type="gradientBlack" style={{color: '#3c3b3b', background: 'linear-gradient(30deg,#3c3b3b, #000000)'}} />
        <div className="color textEditorColor" data-type="gradientNeutral" style={{color: '#e2c695', background: 'linear-gradient(30deg,#e2c695, #c69d56)'}} />
        <div style={{clear: 'both'}} />
        <hr />
        <p>Police size</p>
        <input type="range" list="tickmarks" id="sizePolice" step="0.1" min={10} max={30} defaultValue={15} className="range" style={{width: '200px'}} />
        <hr />
        <p contentEditable="true" id="labelBox" onfocus="this.innerHTML='';" style={{fontSize: '15px', padding: '5px', borderRadius: '5px', color: '#333'}}>Your text</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onclick="$('#textToLayer').modal('hide');">Apply</button>
        </div>
        </div>
        </div>
        </div>
        <div style={{position: 'absolute', bottom: '10px', left: '210px', fontSize: '1.5em', color: '#08d'}} id="boxinfo">
        </div>
        <div id="moveBox" style={{position: 'absolute', right: '-150px', top: '10px', color: '#08d', background: 'transparent', zIndex: 2, textAlign: 'center', transitionDuration: '0.2s', transitionTimingFunction: 'ease-in'}}>
        <p style={{margin: '0px 0 0 0', fontSize: '11px'}}><img src="https://cdn4.iconfinder.com/data/icons/mathematics-doodle-3/48/102-128.png" width="20px" /> Home Rough Editor</p>
        <div className="pull-right" style={{margin: '10px'}}>
        <p style={{margin: 0}}><button className="btn btn-xs btn-info zoom" data-zoom="zoomtop" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-arrow-up" aria-hidden="true" /></button></p>
        <p style={{margin: 0}}>
        <button className="btn btn-xs btn-info zoom" data-zoom="zoomleft" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-arrow-left" aria-hidden="true" /></button>
        <button className="btn btn-xs btn-default zoom" data-zoom="zoomreset" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-bullseye" aria-hidden="true" /></button>
        <button className="btn btn-xs btn-info zoom" data-zoom="zoomright" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-arrow-right" aria-hidden="true" /></button>
        </p>
        <p style={{margin: 0}}><button className="btn btn-xs btn-info zoom" data-zoom="zoombottom" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-arrow-down" aria-hidden="true" /></button></p>
        </div>
        </div>
        <div id="zoomBox" style={{position: 'absolute', zIndex: 100, right: '-150px', bottom: '20px', textAlign: 'center', background: 'transparent', padding: '0px', color: '#fff', transitionDuration: '0.2s', transitionTimingFunction: 'ease-in'}}>
        <div className="pull-right" style={{marginRight: '10px'}}>
        <button className="btn btn btn-default zoom" data-zoom="zoomin" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-plus" aria-hidden="true" /></button>
        <button className="btn btn btn-default zoom" data-zoom="zoomout" style={{boxShadow: '2px 2px 3px #ccc'}}><i className="fa fa-minus" aria-hidden="true" /></button>
        </div>
        <div style={{clear: 'both'}} />
        <div id="scaleVal" className="pull-right" style={{boxShadow: '2px 2px 3px #ccc', width: '60px', height: '20px', background: '#4b79aa', borderRadius: '4px', marginRight: '10px'}}>
        1m
        </div>
        <div style={{clear: 'both'}} />
        </div>
        </div>
        );
    }
});
