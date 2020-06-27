namespace L10_Inheritance{

    export class Lung {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        color: string;

        constructor(_size: number, _position: Vector) {
            if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 2);
        this.size = _size;
        
        }

        draw(): void {
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
    }

    export class Virus {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        color: string;
    
        constructor(_size: number, _position: Vector) {
            if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 3);
        this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            let radius: number = 30
            crc2.save();
            crc2.translate(_position.x, _position.y),
            crc2.fillStyle = "orange";
            crc2.arc(0, 0, radius, 0, 2*Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }

    export class Antibody {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        color: string;
    
        constructor(_size: number, _position: Vector) {
            
        if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
            }

        draw(): void {
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
    }

    export class Drop {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        color: string;
    
        constructor(_size: number, _position: Vector) {
           
        if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 3);
        this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
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

    export class Cell {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        color: string;
    
        constructor(_size: number, _position: Vector) {

        if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
        }

        draw(): void {
            let radius: number = 50
            crc2.save();
            crc2.translate(_position.x, _position.y),
            crc2.fillStyle = "white";
            crc2.arc(0, 0, radius, 0, 2*Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }

    export class Killercell {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
        color: string;
    
        constructor(_size: number, _position: Vector) {
            
        if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
            }

        draw(): void {
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
    }
}