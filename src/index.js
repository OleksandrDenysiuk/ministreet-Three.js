var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);

function createPlane(width, height, color, position) {
	var geometry = new THREE.PlaneBufferGeometry(width, height);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		side: THREE.DoubleSide,
	});
	var mesh = new THREE.Mesh(geometry, material);

	mesh.rotateX(Math.PI / 2);
	mesh.position.copy(position);
	mesh.receiveShadow = true;

	return mesh;
}

function createGround(width, height, color, position) {
	var texture = new THREE.TextureLoader().load('./textures/grass-light-big.jpg');

	var geometry = new THREE.PlaneBufferGeometry(width, height);
	var material = new THREE.MeshPhongMaterial({
		color: color,
		side: THREE.DoubleSide,
		map: texture
	});
	var mesh = new THREE.Mesh(geometry, material);

	mesh.rotateX(Math.PI / 2);
	mesh.position.copy(position);
	mesh.receiveShadow = true;

	return mesh;
}

function createBox(width, height, depth, position, color) {
	var geometry = new THREE.BoxBufferGeometry(width, height, depth);
	var material = new THREE.MeshPhongMaterial({color: color});

	var mesh = new THREE.Mesh(geometry, material);

	mesh.position.copy(position);
	mesh.castShadow = true;
	mesh.receiveShadow = true;

	return mesh;
}

function createPillar(radiusTop, radiusBottom, height, segments, color) {
	var geometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, segments);
	var material = new THREE.MeshPhongMaterial({color: color, flatShading: true});
	var cylinder = new THREE.Mesh(geometry, material);
	cylinder.castShadow = true;
	cylinder.receiveShadow = true;
	
	return cylinder;
}

function createSphere(radius, detail, color) {
	var geometry = new THREE.DodecahedronGeometry(radius, detail);
	var material = new THREE.MeshPhongMaterial({color: color, flatShading: true});
	return new THREE.Mesh(geometry, material);
}

function createCircle(radius, segments, color) {
	var geometry = new THREE.CircleBufferGeometry(radius, segments);
	var material = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
	return new THREE.Mesh( geometry, material );
}

function createRing(innerRadius, outerRadius, segments, color) {
	var geometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, segments);
	var material = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
	return new THREE.Mesh( geometry, material );
}

function createBuilding(width, height, depth, position, color) {
	const building = createBox(width, height, depth, position, color);

	for (var i = -5; i < 5; i += 2) {
		for (var k = 0; k < 4; k += 2) {
			var window = createBox(1.5, 1, 0.3, new THREE.Vector3(i, k, 5));
			building.add(window);
		}
	}

	for (var i = -2; i < 3; i += 2) {
		for (var k = 0; k < 3; k += 2) {
			var window = createBox(1.5, 1, 0.3, new THREE.Vector3(8, k, i));
			window.rotateY(Math.PI / 2);
			building.add(window);
		}
	}

	var doorMesh = createBox(2, 2.8, 0.3, new THREE.Vector3(6, -2.6, 5));
	building.add(doorMesh);

	return building;
}

function createBuildingV2() {
	const building = new THREE.Object3D();
	building.scale.set(0.6, 0.6, 0.6);

	const buildingBase = createBox(5, 20, 5, new THREE.Vector3(0, 0, 0), 0xb89c42);
	const buildingPillar_1 = createPillar(0.5, 0.5, 20, 6, 0xcfb04a);
	const buildingPillar_2 = createPillar(0.5, 0.5, 20, 6, 0xcfb04a);
	const buildingPillar_3 = createPillar(0.5, 0.5, 20, 6, 0xcfb04a);
	const buildingPillar_4 = createPillar(0.5, 0.5, 20, 6, 0xcfb04a);
	const buildingMiddlePart = createBox(6.5, 4, 6.5, new THREE.Vector3(0, 0, 0), 0xcfb04a);
	const buildingTopPart = createBox(4.5, 2, 4.5, new THREE.Vector3(0, 0, 0), 0xb89c42);
	const buildingBottomRoof = createPillar(2.4, 3.8, 3, 4, 0x6e6e6e);
	const buildingTopRoofBase = createBox(2, 1.5, 2, new THREE.Vector3(0, 0, 0), 0xcfb04a);
	const buildingTopRoof = createPillar(0, 1.40, 4.5, 4, 0x6e6e6e);
	const buildingRoofBall = createSphere(0.3, 1, 0xcfb04a);
	const buildingTopPillar_1 = createPillar(0.5, 0.5, 4.5, 6, 0xcfb04a);
	const buildingTopPillar_2 = createPillar(0.5, 0.5, 4.5, 6, 0xcfb04a);
	const buildingTopPillar_3 = createPillar(0.5, 0.5, 4.5, 6, 0xcfb04a);
	const buildingTopPillar_4 = createPillar(0.5, 0.5, 4.5, 6, 0xcfb04a);
	const buildingTopPillarCone_1 = createPillar(0, 0.5, 0.7, 6, 0x6e6e6e);
	const buildingTopPillarCone_2 = createPillar(0, 0.5, 0.7, 6, 0x6e6e6e);
	const buildingTopPillarCone_3 = createPillar(0, 0.5, 0.7, 6, 0x6e6e6e);
	const buildingTopPillarCone_4 = createPillar(0, 0.5, 0.7, 6, 0x6e6e6e);
	const buildingDivider_1 = createBox(5.5, 0.5, 5.5, new THREE.Vector3(0, 0, 0), 0xb89c42);
	const buildingDivider_2 = createBox(5.5, 0.5, 5.5, new THREE.Vector3(0, 0, 0), 0xb89c42);
	const buildingDivider_3 = createBox(5.5, 1, 5.5, new THREE.Vector3(0, 0, 0), 0xb89c42);
	const pillarBase_1 = createPillar(0.75, 0.75, 1, 6, 0xcfb04a);
	const pillarBase_2 = createPillar(0.75, 0.75, 1, 6, 0xcfb04a);
	const pillarBase_3 = createPillar(0.75, 0.75, 1, 6, 0xcfb04a);
	const pillarBase_4 = createPillar(0.75, 0.75, 1, 6, 0xcfb04a);
	const clock_1 = createCircle(1.5, 12, 0xeeeeee);
	const clock_2 = createCircle(1.5, 12, 0xeeeeee);
	const clock_3 = createCircle(1.5, 12, 0xeeeeee);
	const clock_4 = createCircle(1.5, 12, 0xeeeeee);
	const clockBorder_1 = createRing(1.25, 1.5, 12, 0x4f300a);
	const clockBorder_2 = createRing(1.25, 1.5, 12, 0x4f300a);
	const clockBorder_3 = createRing(1.25, 1.5, 12, 0x4f300a);
	const clockBorder_4 = createRing(1.25, 1.5, 12, 0x4f300a);
	const clockArm_1 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_2 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_3 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_4 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_5 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_6 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_7 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);
	const clockArm_8 = createBox(0.2, 1, 0.1, new THREE.Vector3(0, 0, 0), 0x4f300a);

	building.add(buildingBase);
	building.add(buildingPillar_1);
	building.add(buildingPillar_2);
	building.add(buildingPillar_3);
	building.add(buildingPillar_4);
	building.add(buildingMiddlePart);
	building.add(buildingTopPart);
	building.add(buildingBottomRoof);
	building.add(buildingTopRoofBase);
	building.add(buildingTopRoof);
	building.add(buildingRoofBall);
	building.add(buildingTopPillar_1);
	building.add(buildingTopPillar_2);
	building.add(buildingTopPillar_3);
	building.add(buildingTopPillar_4);
	building.add(buildingTopPillarCone_1);
	building.add(buildingTopPillarCone_2);
	building.add(buildingTopPillarCone_3);
	building.add(buildingTopPillarCone_4);
	building.add(buildingDivider_1);
	building.add(buildingDivider_2);
	building.add(buildingDivider_3);
	building.add(pillarBase_1);
	building.add(pillarBase_2);
	building.add(pillarBase_3);
	building.add(pillarBase_4);
	building.add(clock_1);
	building.add(clock_2);
	building.add(clock_3);
	building.add(clock_4);
	building.add(clockBorder_1);
	building.add(clockBorder_2);
	building.add(clockBorder_3);
	building.add(clockBorder_4);

	clock_1.add(clockArm_1);
	clock_1.add(clockArm_2);
	clock_2.add(clockArm_3);
	clock_2.add(clockArm_4);
	clock_3.add(clockArm_5);
	clock_3.add(clockArm_6);
	clock_4.add(clockArm_7);
	clock_4.add(clockArm_8);

	clockArm_1.position.add(new THREE.Vector3(0.5, 0, 0));
	clockArm_1.rotateZ(Math.PI / 2);
	clockArm_2.position.add(new THREE.Vector3(0, 0.5, 0));
	clockArm_3.position.add(new THREE.Vector3(0.5, 0, 0));
	clockArm_3.rotateZ(Math.PI / 2);
	clockArm_4.position.add(new THREE.Vector3(0, 0.5, 0));
	clockArm_5.position.add(new THREE.Vector3(0.5, 0, 0));
	clockArm_5.rotateZ(Math.PI / 2);
	clockArm_6.position.add(new THREE.Vector3(0, 0.5, 0));
	clockArm_7.position.add(new THREE.Vector3(0.5, 0, 0));
	clockArm_7.rotateZ(Math.PI / 2);
	clockArm_8.position.add(new THREE.Vector3(0, 0.5, 0));

	buildingBase.position.add(new THREE.Vector3(0, 10, 0));
	buildingPillar_1.position.add(new THREE.Vector3(2.5, 10, 2.5));
	buildingPillar_2.position.add(new THREE.Vector3(2.5, 10, -2.5));
	buildingPillar_3.position.add(new THREE.Vector3(-2.5, 10, 2.5));
	buildingPillar_4.position.add(new THREE.Vector3(-2.5, 10, -2.5));
	buildingMiddlePart.position.add(new THREE.Vector3(0, 22, 0));
	buildingTopPart.position.add(new THREE.Vector3(0, 25, 0));
	buildingBottomRoof.position.add(new THREE.Vector3(0, 27.5, 0));
	buildingBottomRoof.rotateY(Math.PI / 4);
	buildingTopRoofBase.position.add(new THREE.Vector3(0, 29.75, 0));
	buildingTopRoof.position.add(new THREE.Vector3(0, 32.75, 0));
	buildingTopRoof.rotateY(Math.PI / 4);
	buildingRoofBall.position.add(new THREE.Vector3(0, 35, 0));
	buildingTopPillar_1.position.add(new THREE.Vector3(3.25, 22.25, 3.25));
	buildingTopPillar_2.position.add(new THREE.Vector3(-3.25, 22.25, 3.25));
	buildingTopPillar_3.position.add(new THREE.Vector3(3.25, 22.25, -3.25));
	buildingTopPillar_4.position.add(new THREE.Vector3(-3.25, 22.25, -3.25));
	buildingTopPillarCone_1.position.add(new THREE.Vector3(3.25, 24.75, 3.25));
	buildingTopPillarCone_2.position.add(new THREE.Vector3(-3.25, 24.75, 3.25));
	buildingTopPillarCone_3.position.add(new THREE.Vector3(3.25, 24.75, -3.25));
	buildingTopPillarCone_4.position.add(new THREE.Vector3(-3.25, 24.75, -3.25));
	buildingDivider_1.position.add(new THREE.Vector3(0, 13, 0));
	buildingDivider_2.position.add(new THREE.Vector3(0, 17, 0));
	buildingDivider_3.position.add(new THREE.Vector3(0, 0.5, 0));
	pillarBase_1.position.add(new THREE.Vector3(2.5, 0.5, 2.5));
	pillarBase_2.position.add(new THREE.Vector3(-2.5, 0.5, 2.5));
	pillarBase_3.position.add(new THREE.Vector3(2.5, 0.5, -2.5));
	pillarBase_4.position.add(new THREE.Vector3(-2.5, 0.5, -2.5));
	clock_1.position.add(new THREE.Vector3(0, 22, 3.26));
	clock_2.position.add(new THREE.Vector3(0, 22, -3.26));
	clock_3.position.add(new THREE.Vector3(3.26, 22, 0));
	clock_3.rotateY(Math.PI / 2);
	clock_4.position.add(new THREE.Vector3(-3.26, 22, 0));
	clock_4.rotateY(Math.PI / 2);
	clockBorder_1.position.add(new THREE.Vector3(0, 22, 3.27));
	clockBorder_2.position.add(new THREE.Vector3(0, 22, -3.27));
	clockBorder_3.position.add(new THREE.Vector3(3.27, 22, 0));
	clockBorder_3.rotateY(Math.PI / 2);
	clockBorder_4.position.add(new THREE.Vector3(-3.27, 22, 0));
	clockBorder_4.rotateY(Math.PI / 2);

	return building;
}

function createTree(position) {
	var treeTopGeometry = new THREE.DodecahedronGeometry(0.8);
	var treeTopMaterial = new THREE.MeshPhongMaterial({color: 0x00ff00});
	var treeTopMesh = new THREE.Mesh(treeTopGeometry, treeTopMaterial);

	var treeTrunkGeometry = new THREE.CylinderGeometry(0.25, 0.20, 1.75, 3, 3);
	var treeTrunkMaterial = new THREE.MeshPhongMaterial({color: 0x917d5a});
	var treeTrunkMesh = new THREE.Mesh(treeTrunkGeometry, treeTrunkMaterial);

	treeTopMesh.position.copy(position);
	treeTopMesh.position.add(new THREE.Vector3(0, 2.25, 0));

	treeTrunkMesh.position.copy(position);
	treeTrunkMesh.position.add(new THREE.Vector3(0, 0.875, 0));

	treeTrunkMesh.castShadow = true;
	treeTopMesh.castShadow = true;

	var treeMeshGroup = new THREE.Group();
	treeMeshGroup.add(treeTopMesh);
	treeMeshGroup.add(treeTrunkMesh);

	return treeMeshGroup;
}

function createCar(position) {
	var bodyGeometry = new THREE.BoxBufferGeometry(0.75, 0.75, 1.40);
	var bodyMaterial = new THREE.MeshPhongMaterial({color: 0x56b6b8});
	var bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
	
	bodyMesh.position.copy(position);
	bodyMesh.rotateY(Math.PI / 2);

	const tireMesh_1 = createBox(0.25, 0.25, 0.25, new THREE.Vector3(), 0x000000);
	const tireMesh_2 = createBox(0.25, 0.25, 0.25, new THREE.Vector3(), 0x000000);
	const tireMesh_3 = createBox(0.25, 0.25, 0.25, new THREE.Vector3(), 0x000000);
	const tireMesh_4 = createBox(0.25, 0.25, 0.25, new THREE.Vector3(), 0x000000);

	var hoodMesh = createBox(0.75, 0.65, 0.75, new THREE.Vector3(), 0x56b6b8);

	bodyMesh.castShadow = true;

	bodyMesh.add(tireMesh_1);
	bodyMesh.add(tireMesh_2);
	bodyMesh.add(tireMesh_3);
	bodyMesh.add(tireMesh_4);

	bodyMesh.add(hoodMesh);

	tireMesh_1.position.add(new THREE.Vector3(0.40, -0.3, 0.80));
	tireMesh_2.position.add(new THREE.Vector3(-0.40, -0.3, 0.80));
	tireMesh_3.position.add(new THREE.Vector3(0.40, -0.3, -0.40));
	tireMesh_4.position.add(new THREE.Vector3(-0.40, -0.3, -0.40));

	hoodMesh.position.add(new THREE.Vector3(0, -0.25, 1));

	return bodyMesh;
}

function createAmbientLight() {
	return new THREE.AmbientLight(0x606060);
}

function createDirectionalLight(target, position) {
	var light = new THREE.DirectionalLight(0xffffff, 0.5);

	light.castShadow = true;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;
	light.shadow.camera.near = 0.5;
	light.shadow.camera.far = 500;
	light.shadow.camera.left = -50;
	light.shadow.camera.bottom = -50;
	light.shadow.camera.right = 50;
	light.shadow.camera.top = 50;

	light.position.copy(position);
	light.lookAt(target);

	return light;
}

function createStreetLight(position) {
	var baseGeometry = new THREE.BoxBufferGeometry(0.25, 0.15, 0.25);
	var baseMaterial = new THREE.MeshPhongMaterial({color: 0x464c4d});
	var baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);

	var stemGeometry = new THREE.BoxBufferGeometry(0.15, 1.5, 0.15);
	var stemMaterial = new THREE.MeshPhongMaterial({color: 0x464c4d});
	var stemMesh = new THREE.Mesh(stemGeometry, stemMaterial);

	var lightGeometry = new THREE.BoxBufferGeometry(0.40, 0.45, 0.40);
	var lightMaterial = new THREE.MeshPhongMaterial({color: 0xfff99e});
	var lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);

	baseMesh.position.copy(position);
	baseMesh.position.add(new THREE.Vector3(0, 0.125, 0));
	baseMesh.castShadow = true;

	stemMesh.position.copy(position);
	stemMesh.position.add(new THREE.Vector3(0, 0.9, 0));
	stemMesh.castShadow = true;

	lightMesh.position.copy(position);
	lightMesh.position.add(new THREE.Vector3(0, 1.875, 0));
	lightMesh.castShadow = true;

	var streetLightGroup = new THREE.Group();
	streetLightGroup.add(baseMesh);
	streetLightGroup.add(stemMesh);
	streetLightGroup.add(lightMesh);

	return streetLightGroup;
}

function createCarTurnTrigger(position) {
	var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
	var material = new THREE.MeshPhongMaterial({color: 0x000000, opacity: 0, transparent: true});

	var mesh = new THREE.Mesh(geometry, material);

	mesh.position.copy(position);

	return mesh;
}

function createCrosswalk(position, rotation) {
	const crossWalkGroup = new THREE.Object3D();

	const line_1 = createPlane(0.3, 2, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_2 = createPlane(0.3, 2, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_3 = createPlane(0.3, 2, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_4 = createPlane(0.3, 2, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_5 = createPlane(0.3, 2, 0xffffff, new THREE.Vector3(0, 0, 0));

	crossWalkGroup.add(line_1);
	crossWalkGroup.add(line_2);
	crossWalkGroup.add(line_3);
	crossWalkGroup.add(line_4);
	crossWalkGroup.add(line_5);

	crossWalkGroup.position.copy(position);

	line_1.position.set(-0.9, 0, 0);
	line_2.position.set(-0.45, 0, 0);
	line_3.position.set(0, 0, 0);
	line_4.position.set(0.45, 0, 0);
	line_5.position.set(0.9, 0, 0);

	crossWalkGroup.rotateY(rotation);

	return crossWalkGroup;
}

function createStreetLines(position, rotation) {
	const streetLinesGroup = new THREE.Object3D();

	const line_1 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_2 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_3 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_4 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_5 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_6 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));
	const line_7 = createPlane(0.2, 1.5, 0xffffff, new THREE.Vector3(0, 0, 0));

	streetLinesGroup.add(line_1);
	streetLinesGroup.add(line_2);
	streetLinesGroup.add(line_3);
	streetLinesGroup.add(line_4);
	streetLinesGroup.add(line_5);
	streetLinesGroup.add(line_6);
	streetLinesGroup.add(line_7);

	streetLinesGroup.position.copy(position);

	line_1.position.set(0, 0, -6);
	line_2.position.set(0, 0, -4);
	line_3.position.set(0, 0, -2);
	line_4.position.set(0, 0, 0);
	line_5.position.set(0, 0, 2);
	line_6.position.set(0, 0, 4);
	line_7.position.set(0, 0, 6);

	streetLinesGroup.rotateY(rotation);

	return streetLinesGroup;
}

function main() {
	var ground = createGround(20, 20, 0xffffff, new THREE.Vector3(0, 0, 0));
	var building = createBuildingV2();
	var tree_1 = createTree(new THREE.Vector3(8.5, 0, 7));
	var tree_2 = createTree(new THREE.Vector3(5, 0, 7));
	var tree_3 = createTree(new THREE.Vector3(3, 0, 7));
	var street_1 = createPlane(2.5, 25, 0x525252, new THREE.Vector3(11.25, 0, 0));
	var street_2 = createPlane(2.5, 25, 0x525252, new THREE.Vector3(-11.25, 0, 0));
	var street_3 = createPlane(2.5, 20, 0x525252, new THREE.Vector3(0, 0, 11.25));
	street_3.rotateZ(Math.PI / 2);
	var street_4 = createPlane(2.5, 20, 0x525252, new THREE.Vector3(0, 0, -11.25));
	street_4.rotateZ(Math.PI / 2);
	var car_1 = createCar(new THREE.Vector3(0, 0.375, 11.25));
	var car_2 = createCar(new THREE.Vector3(8, 0.375, 11.25));
	var streetLight_1 = createStreetLight(new THREE.Vector3(9.75, 0, 9.75));
	var streetLight_2 = createStreetLight(new THREE.Vector3(9.75, 0, 4.75));
	var streetLight_3 = createStreetLight(new THREE.Vector3(9.75, 0, 0.0));
	var streetLight_4 = createStreetLight(new THREE.Vector3(9.75, 0, -4.75));
	var streetLight_5 = createStreetLight(new THREE.Vector3(9.75, 0, -9.75));
	var streetLight_6 = createStreetLight(new THREE.Vector3(4.75, 0, 9.75));
	var streetLight_7 = createStreetLight(new THREE.Vector3(0, 0, 9.75));
	var streetLight_8 = createStreetLight(new THREE.Vector3(-4.75, 0, 9.75));
	var streetLight_9 = createStreetLight(new THREE.Vector3(-9.75, 0, 9.75));
	var streetLight_10 = createStreetLight(new THREE.Vector3(4.75, 0, -9.75));
	var streetLight_11 = createStreetLight(new THREE.Vector3(0, 0, -9.75));
	var streetLight_12 = createStreetLight(new THREE.Vector3(-4.75, 0, -9.75));
	var streetLight_13 = createStreetLight(new THREE.Vector3(-9.75, 0, -9.75));
	var streetLight_14 = createStreetLight(new THREE.Vector3(-9.75, 0, 4.75));
	var streetLight_15 = createStreetLight(new THREE.Vector3(-9.75, 0, 0.0));
	var streetLight_16 = createStreetLight(new THREE.Vector3(-9.75, 0, -4.75));
	var carTurnTriggerBox_1 = createCarTurnTrigger(new THREE.Vector3(13, 0.5, 11.25));
	var carTurnTriggerBox_2 = createCarTurnTrigger(new THREE.Vector3(11.25, 0.5, -13));
	var carTurnTriggerBox_3 = createCarTurnTrigger(new THREE.Vector3(-13, 0.5, -11.25));
	var carTurnTriggerBox_4 = createCarTurnTrigger(new THREE.Vector3(-11.25, 0.5, 13));
	var crossWalk_1 = createCrosswalk(new THREE.Vector3(8.75, 0.01, 11.25), Math.PI / 2);
	var crossWalk_2 = createCrosswalk(new THREE.Vector3(11.25, 0.01, 8.75), 0);
	var crossWalk_3 = createCrosswalk(new THREE.Vector3(-11.25, 0.01, 8.75), 0);
	var crossWalk_4 = createCrosswalk(new THREE.Vector3(-8.75, 0.01, 11.25), Math.PI / 2);
	var crossWalk_5 = createCrosswalk(new THREE.Vector3(11.25, 0.01, -8.75), 0);
	var crossWalk_6 = createCrosswalk(new THREE.Vector3(8.75, 0.01, -11.25), Math.PI / 2);
	var crossWalk_7 = createCrosswalk(new THREE.Vector3(-11.25, 0.01, -8.75), 0);
	var crossWalk_8 = createCrosswalk(new THREE.Vector3(-8.75, 0.01, -11.25), Math.PI / 2);
	var streetLines_1 = createStreetLines(new THREE.Vector3(0, 0.01, 11.25), Math.PI / 2);
	var streetLines_2 = createStreetLines(new THREE.Vector3(0, 0.01, -11.25), Math.PI / 2);
	var streetLines_3 = createStreetLines(new THREE.Vector3(11.25, 0.01, 0), 0);
	var streetLines_4 = createStreetLines(new THREE.Vector3(-11.25, 0.01, 0), 0);

	var cars = [
		car_1,
		car_2,
	];

	var turnBoxes = [
		carTurnTriggerBox_1,
		carTurnTriggerBox_2,
		carTurnTriggerBox_3,
		carTurnTriggerBox_4
	];

	var ambientLight = createAmbientLight();
	var sun = createDirectionalLight(new THREE.Vector3(0, 0, 0), new THREE.Vector3(75, 100, 40));

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer({
		antialias: true,
	});
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var controls = new OrbitControls( camera, renderer.domElement );

	camera.position.set(20, 20, 20);
	camera.lookAt(new THREE.Vector3());

	scene.add(ground);
	scene.add(building);
	scene.add(ambientLight);
	scene.add(sun);
	scene.add(tree_1);
	scene.add(tree_2);
	scene.add(tree_3);
	scene.add(street_1);
	scene.add(street_2);
	scene.add(street_3);
	scene.add(street_4);
	scene.add(car_1);
	scene.add(car_2);
	scene.add(streetLight_1);
	scene.add(streetLight_2);
	scene.add(streetLight_3);
	scene.add(streetLight_4);
	scene.add(streetLight_5);
	scene.add(streetLight_6);
	scene.add(streetLight_7);
	scene.add(streetLight_8);
	scene.add(streetLight_9);
	scene.add(streetLight_10);
	scene.add(streetLight_11);
	scene.add(streetLight_12);
	scene.add(streetLight_13);
	scene.add(streetLight_14);
	scene.add(streetLight_15);
	scene.add(streetLight_16);
	scene.add(carTurnTriggerBox_1);
	scene.add(carTurnTriggerBox_2);
	scene.add(carTurnTriggerBox_3);
	scene.add(carTurnTriggerBox_4);
	scene.add(crossWalk_1);
	scene.add(crossWalk_2);
	scene.add(crossWalk_3);
	scene.add(crossWalk_4);
	scene.add(crossWalk_5);
	scene.add(crossWalk_6);
	scene.add(crossWalk_7);
	scene.add(crossWalk_8);
	scene.add(streetLines_1);
	scene.add(streetLines_2);
	scene.add(streetLines_3);
	scene.add(streetLines_4);

	var raycaster = new THREE.Raycaster();

	var animate = function() {
		requestAnimationFrame(animate);

		controls.update();

		cars.forEach((car) => {
			raycaster.set(car.position.clone(), car.getWorldDirection(new THREE.Vector3()));
			var intersects = raycaster.intersectObjects(turnBoxes);
			if (intersects.length > 0) {
				const point = intersects[0].point;

				var distance = point.distanceTo(car.position);
				if (distance < 1.25) {
					car.rotateY(Math.PI / 2);
				}
			}

			car.position.add(car.getWorldDirection(new THREE.Vector3()).multiplyScalar(0.1));
		});

		renderer.render(scene, camera);
	};

	animate();
}
main();
