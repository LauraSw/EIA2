namespace L09_Classes{
interface Vector{
    x: number;
    y: number;
}

window.addEventListener("load", handleLoad);
let crc2: CanvasRenderingContext2D;

function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2D");

    drawBackground();
    drawLung({x: 100, y:375});
    drawVirus({x: 280, y: 450});
    drawKillercells({x: 190, y:60});
    drawAntibodies({x: 180, y: 60});
    drawCells({x: 300, y: 280});
    drawBlood({x: 200, y: 200});
}

    function drawBackground(): void{
        let gradient: CanvasGradient= crc2.createLinearGradient(0, 0, 0,crc2.canvas.height);
        gradient.addColorStop(0, "purple");
        gradient.addColorStop(180, "lightblue");
        gradient.addColorStop(1, "blue");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);
    }

    

    function drawLung(_position: Vector): void {
        let nParticles: number = 15;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0,0, radiusParticle, 0, 2*Math.PI);
        gradient.addColorStop(0, "HSLA 0, 0, 50%, 0,5");
        gradient.addColorStop(1, "HSLA 0, 0, 50%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient ;

        for(let drawn: number =0; drawn < nParticles; drawn++){
            crc2.save();
            let x: number = (Math.random()- 0.5)* _size.x;
            let y: number = -(Math.random()* _size.y);
            crc2.translate(x,y);
            crc2.fill(particle);
            crc2. restore();
        }
        crc2.restore();
    }

    function drawVirus(_position: Vector): void {
            console.log("virus") ;
            let radius: number = 30
            crc2.save();
            crc2.translate(_position.x, _position.y),
            crc2.fillStyle = "orange";
            crc2.arc(0, 0, radius, 0, 2*Math.PI);
            crc2.fill();
            crc2.restore();

        }
        
    function drawKillercells(_position: Vector): void {
       console.log("killercells") ;
            crc2.save();
            crc2.translate(_position.x, _position.y),
            crc2.beginPath();
            crc2.moveTo(230,60)
            crc2.lineTo(230,100);
            crc2.lineTo(190,60);
            crc2.fillStyle = "grey";
            crc2.fill()
            crc2.restore();

    }
           

    function drawAntibodies(_position: Vector): void {
        console.log("antibodies");
            crc2.save();
            crc2.translate(_position.x, _position.y),
            crc2.beginPath();
            crc2.moveTo(200, 90)
            crc2.lineTo(200,130);
            crc2.lineTo(202, 130);
            crc2.lineTo(202,90);
            crc2.lineTo(232,60);
            crc2.closePath();
            crc2.strokeStyle = "midnightblue";
            crc2.stroke();
            crc2.restore();
    }

    function drawCells(_position: Vector): void {
        console.log("cells");
        let radius: number = 50
            crc2.save();
            crc2.translate(_position.x, _position.y),
            crc2.fillStyle = "white";
            crc2.arc(0, 0, radius, 0, 2*Math.PI);
            crc2.fill();
            crc2.restore();
    }


    function drawBlood(_position: Vector): void {
        console.log("blood");
        let nParticles: number = 300;
        let radiusParticle: number = 5;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0,0, radiusParticle, 0, 2*Math.PI);
        gradient.addColorStop(0, "HSLA 100%, 0, 0, 0,5");
        gradient.addColorStop(1, "HSLA 100%, 0, 0, 1");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient ;

        for(let drawn: number =0; drawn < nParticles; drawn++){
            crc2.save();
            let x: number = (Math.random()- 0.5)* _size.x;
            let y: number = -(Math.random()* _size.y);
            crc2.translate(x,y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

}