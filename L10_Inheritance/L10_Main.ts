namespace L10_Inheritance{
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let lungs: Lung[] = [];
    let blood: Drop[] = [];
    let viruses: Virus[] = [];
    let cells: Cell[] = [];
    let antibodies: Antibody[] = [];
    let killercells: Killercell[] = [];

    function handleLoad(_event: event) : void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        
        createLungs();
        createAntibodies();
        createCells();
        createViruses();
        createKillercells();
        createBlood();
    }

    function drawBackground(): void{
        let gradient: CanvasGradient= crc2.createLinearGradient(0, 0, 0,crc2.canvas.height);
        gradient.addColorStop(0, "purple");
        gradient.addColorStop(180, "lightblue");
        gradient.addColorStop(1, "blue");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);

    }

    function createLungs(_nLungs: number): void {
        for (let i: number = 0; i < _nLungs; i++) {
            let lung: Lung = new Lung(1.0);
            lungs.push(lung);
        }
        for (let lung of lungs) {
            lung.draw();
        }
    }

    function createAntibodies(_nAntibodies: number): void {
        for (let i: number = 0; i < _nAntibodies; i++) {
            let antibody: Antibody = new Antibody(1.0);
            antibodies.push(antibody);
        }
        for (let antibody of antibodies) {
            antibody.draw();
        }
    }

    function createBlood(_nBlood: number): void {
        for (let i: number = 0; i < _nBlood; i++) {
            let drop: Drop = new Drop(1.0);
            blood.push(drop);
        }

        for (let drop of blood) {
            drop.move(1 / 50);
            drop.draw();
        }
    }

    function createViruses(_nViruses: number): void {
        for (let i: number = 0; i < _nViruses; i++) {
            let virus: Virus = new Virus(1.0);
            viruses.push(virus);
        }

        for (let virus of viruses) {
            virus.move(1 / 50);
            virus.draw();
        }
     
    }
    
    function createCells (_nCells: number): void {
        for (let i: number = 0; i < _nCells; i++) {
            let cell: Cell = new Cell(1.0);
            cells.push(cell);
        }

        for (let cell of cells) {
            cell.draw();
        }
    }

    function createKillercells(_nKillercells: number): void {
        for (let i: number = 0; i < _nKillercells; i++) {
            let killerCell: Killercell = new Killercell(1.0);
            killercells.push(killercell);
        }


    } for (let killercell of killercells) {
            killercell.draw();
        }
}