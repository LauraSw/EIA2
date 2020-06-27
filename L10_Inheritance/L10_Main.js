"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    window.addEventListener("load", handleLoad);
    let lungs = [];
    let blood = [];
    let viruses = [];
    let cells = [];
    let antibodies = [];
    let killercells = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Inheritance.crc2 = canvas.getContext("2d");
        drawBackground();
        createLungs();
        createAntibodies();
        createCells();
        createViruses();
        createKillercells();
        createBlood();
    }
    function drawBackground() {
        let gradient = L10_Inheritance.crc2.createLinearGradient(0, 0, 0, L10_Inheritance.crc2.canvas.height);
        gradient.addColorStop(0, "purple");
        gradient.addColorStop(180, "lightblue");
        gradient.addColorStop(1, "blue");
        L10_Inheritance.crc2.fillStyle = gradient;
        L10_Inheritance.crc2.fillRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
    }
    function createLungs(_nLungs) {
        for (let i = 0; i < _nLungs; i++) {
            let lung = new L10_Inheritance.Lung(1.0);
            lungs.push(lung);
        }
        for (let lung of lungs) {
            lung.draw();
        }
    }
    function createAntibodies(_nAntibodies) {
        for (let i = 0; i < _nAntibodies; i++) {
            let antibody = new L10_Inheritance.Antibody(1.0);
            antibodies.push(antibody);
        }
        for (let antibody of antibodies) {
            antibody.draw();
        }
    }
    function createBlood(_nBlood) {
        for (let i = 0; i < _nBlood; i++) {
            let drop = new L10_Inheritance.Drop(1.0);
            blood.push(drop);
        }
        for (let drop of blood) {
            drop.move(1 / 50);
            drop.draw();
        }
    }
    function createViruses(_nViruses) {
        for (let i = 0; i < _nViruses; i++) {
            let virus = new L10_Inheritance.Virus(1.0);
            viruses.push(virus);
        }
        for (let virus of viruses) {
            virus.move(1 / 50);
            virus.draw();
        }
    }
    function createCells(_nCells) {
        for (let i = 0; i < _nCells; i++) {
            let cell = new L10_Inheritance.Cell(1.0);
            cells.push(cell);
        }
        for (let cell of cells) {
            cell.draw();
        }
    }
    function createKillercells(_nKillercells) {
        for (let i = 0; i < _nKillercells; i++) {
            let killerCell = new L10_Inheritance.Killercell(1.0);
            killercells.push(killercell);
        }
    }
    for (let killercell of killercells) {
        killercell.draw();
    }
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=L10_Main.js.map