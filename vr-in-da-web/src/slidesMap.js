function getSky() {
    var sky = document.createElement('a-sky');
    sky.setAttribute('color', '#ECECEC');
    return sky;
}

function getCamera(position) {
    var camera = document.createElement('a-camera');
    camera.setAttribute('position', position);
    return camera;
}

function getHello() {
    /*<a-scene embedded>
         <a-box position="-1 1.5 0" rotation="0 45 0" height="3" color="red"></a-box>
         <a-sky color="#ECECEC"></a-sky>
         <a-camera position="0 0 3.8"></a-camera>
     </a-scene>*/
    var sceneEl = document.createElement('a-scene');
    sceneEl.setAttribute('embedded', '');

    var box = document.createElement('a-box');
    box.setAttribute('position', '-1 1.5 0');
    box.setAttribute('rotation', '0 45 0');
    box.setAttribute('height', '3');
    box.setAttribute('color', 'red');
    sceneEl.appendChild(box);

    var sky = getSky();
    sceneEl.appendChild(sky);

    var camera = getCamera('0 0 3.8');
    sceneEl.appendChild(camera);

    return sceneEl;
}

function getExternalObjects () {
    // <a-scene embedded>
    //     <a-assets>
    //         <a-asset-item id='teapotModel' src='src/obj/teapot.obj'></a-asset-item>
    //         <a-asset-item id='teapotTexture' src='src/obj/teapot.mtl'></a-asset-item>
    //     </a-assets>
    //
    //     <a-entity position="0 0 -5"
    //             obj-model="obj: #teapotModel; mtl: #teapotTexture"></a-entity>
    //
    //     <a-sky color="#ECECEC"></a-sky>
    //     <a-camera position="0 1 2"></a-camera>
    // </a-scene>

    var sceneEl = document.createElement('a-scene');
    sceneEl.setAttribute('embedded', '');

    sceneEl.innerHTML =
        "<a-assets>\
            <a-asset-item id='teapotModel' src='src/obj/teapot.obj'></a-asset-item>\
            <a-asset-item id='teapotTexture' src='src/obj/teapot.mtl'></a-asset-item>\
        </a-assets>\
        <a-entity position=\"0 0 -5\" obj-model=\"obj: #teapotModel; mtl: #teapotTexture\"></a-entity>\
        <a-sky color=\"#ECECEC\"></a-sky>\
        <a-camera position=\"0 1 2\"></a-camera>";

    return sceneEl;
}

function getECS() {
    /*<a-scene embedded>
        <a-entity></a-entity>
        <a-entity geometry="primitive: torus"> </a-entity>
        <a-entity geometry="primitive: torus" material="src: pictures/texture.jpg"> </a-entity>
        <a-entity geometry="primitive: torus" material="src: pictures/texture.jpg" scale="2 2 2"></a-entity>

        <a-sky color="#ECECEC"></a-sky>
        <a-camera position="0 -1.5 2"></a-camera>
     </a-scene>*/
    var sceneEl = document.createElement('a-scene');
    sceneEl.setAttribute('embedded', '');

    var entity1 = document.createElement('a-entity');
    sceneEl.appendChild(entity1);

    var entity2 = document.createElement('a-entity');
    entity2.setAttribute('geometry', 'primitive: torus');
    entity2.setAttribute('position', '0 -3.8 0');
    sceneEl.appendChild(entity2);

    var entity3 = document.createElement('a-entity');
    entity3.setAttribute('geometry', 'primitive: torus');
    entity3.setAttribute('material', 'src: pictures/texture.jpg');
    entity3.setAttribute('position', '0 -7 0');
    sceneEl.appendChild(entity3);

    var entity4 = document.createElement('a-entity');
    entity4.setAttribute('geometry', 'primitive: torus');
    entity4.setAttribute('material', 'src: pictures/texture.jpg');
    entity4.setAttribute('scale', '2 2 2');
    entity4.setAttribute('position', '0 -11.5 0');
    sceneEl.appendChild(entity4);

    var sky = getSky();
    sceneEl.appendChild(sky);

    var camera = getCamera('0 -6 12');
    sceneEl.appendChild(camera);

    return sceneEl;
}

function getCustomComponent() {
    /*<a-scene embedded>
         <a-torus-knot position="0 1.5 0" color="#6cd9f5" rotate-on-tick="speed: 0.01">
         </a-torus-knot>

         <a-sky color="#ECECEC"></a-sky>
         <a-camera position="0 0 3"></a-camera>
     </a-scene>*/
    var sceneEl = document.createElement('a-scene');
    sceneEl.setAttribute('embedded', '');

    var torusKnot = document.createElement('a-torus-knot');
    torusKnot.setAttribute('position', '0 1.5 0');
    torusKnot.setAttribute('rotate-on-tick', 'speed: 0.01');
    torusKnot.setAttribute('color', '#6cd9f5');
    sceneEl.appendChild(torusKnot);

    var sky = getSky();
    sceneEl.appendChild(sky);

    var camera = getCamera('0 0 3');
    sceneEl.appendChild(camera);

    return sceneEl;
}

function getQuestions() {
    /*<a-scene fog="type: linear; color: #ECECEC; far: 150" embedded pool__sphere="mixin: blackDynamicSphere; size: 250">
        <a-assets>
            <a-mixin id="blackDynamicSphere" geometry="primitive: sphere" material="color: black; metalness: 0.01;" dynamic-body></a-mixin>
            <img id="floor" src="pictures/floor.jpg">
        </a-assets>

        <a-sphere position="0 3 2" material="color: blue; opacity: 0.1; wireframe: true;" radius="2" static-body></a-sphere>
        <a-sky color="blue" radius="100"> </a-sky>
        <a-box width="200" depth="200" height="2" material="src: #floor; repeat: 100 100;" static-body> </a-box>
        <a-camera position="0 0 2"></a-camera>

        <a-entity pool-sphere-generator="radius: 20"></a-entity>
     </a-scene>*/

    var sceneEl = document.createElement('a-scene');
    sceneEl.setAttribute('fog', 'type: linear; color: #ECECEC; far: 150');
    sceneEl.setAttribute('embedded', '');
    sceneEl.setAttribute('pool__sphere', 'mixin: blackDynamicSphere; size: 250');

    var assets = document.createElement('a-assets');
    var mixin = document.createElement('a-mixin');
    mixin.id = 'blackDynamicSphere';
    mixin.setAttribute('geometry', 'primitive: sphere');
    mixin.setAttribute('material', 'color: black; metalness: 0.01;');
    mixin.setAttribute('dynamic-body', '');
    assets.appendChild(mixin);
    var img = document.createElement('img');
    img.id = 'floor';
    img.setAttribute('src', 'pictures/floor.jpg');
    assets.appendChild(img);
    sceneEl.appendChild(assets);

    var sphere = document.createElement('a-sphere');
    sphere.setAttribute('position', '0 3 2');
    sphere.setAttribute('material', 'color: blue; opacity: 0.1; wireframe: true;');
    sphere.setAttribute('radius', '2');
    sphere.setAttribute('static-body', '');
    sceneEl.appendChild(sphere);

    var sky = document.createElement('a-sky');
    sky.setAttribute('material', 'color: blue; opacity: 0.1');
    sky.setAttribute('radius', '100');
    sceneEl.appendChild(sky);

    var floor = document.createElement('a-box');
    floor.setAttribute('width', '200');
    floor.setAttribute('depth', '200');
    floor.setAttribute('height', '2');
    floor.setAttribute('material', 'src: #floor; repeat: 100 100;');
    floor.setAttribute('static-body', '');
    sceneEl.appendChild(floor);

    var entity = document.createElement('a-entity');
    entity.setAttribute('pool-sphere-generator', 'radius: 20');
    sceneEl.appendChild(entity);

    var camera = getCamera('0 0 2');
    sceneEl.appendChild(camera);

    return sceneEl;
}

window.slidesMap = new Map();
window.slidesMap.set("hello", {
    content: getHello()
});
window.slidesMap.set("external-objects", {
    content: getExternalObjects()
});
window.slidesMap.set("ecs", {
    content: getECS()
});
window.slidesMap.set("custom-component", {
    content: getCustomComponent()
});
window.slidesMap.set("questions", {
    content: getQuestions()
});