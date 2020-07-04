"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Lung {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 2);
            this.size = _size;
        }
        draw() {
            let nParticles = 15;
            let radiusParticle = 30;
            let particle = new Path2D();
            let gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA 0, 0, 50%, 0,5");
            gradient.addColorStop(1, "HSLA 0, 0, 50%, 0");
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(_position.x, _position.y);
            L10_Inheritance.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_Inheritance.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L10_Inheritance.crc2.translate(x, y);
                L10_Inheritance.crc2.fill(particle);
                L10_Inheritance.crc2.restore();
            }
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Lung = Lung;
    class Virus {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 3);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L10_Inheritance.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Inheritance.crc2.canvas.height;
            if (this.position.x > L10_Inheritance.crc2.canvas.width)
                this.position.x -= L10_Inheritance.crc2.canvas.width;
            if (this.position.y > L10_Inheritance.crc2.canvas.height)
                this.position.y -= L10_Inheritance.crc2.canvas.height;
        }
        draw() {
            let radius = 30;
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(_position.x, _position.y),
                L10_Inheritance.crc2.fillStyle = "orange";
            L10_Inheritance.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Virus = Virus;
    class Antibody {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(_position.x, _position.y),
                L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(200, 90);
            L10_Inheritance.crc2.lineTo(200, 130);
            L10_Inheritance.crc2.lineTo(202, 130);
            L10_Inheritance.crc2.lineTo(202, 90);
            L10_Inheritance.crc2.lineTo(232, 60);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.strokeStyle = "midnightblue";
            L10_Inheritance.crc2.stroke();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Antibody = Antibody;
    class Drop {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 3);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L10_Inheritance.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Inheritance.crc2.canvas.height;
            if (this.position.x > L10_Inheritance.crc2.canvas.width)
                this.position.x -= L10_Inheritance.crc2.canvas.width;
            if (this.position.y > L10_Inheritance.crc2.canvas.height)
                this.position.y -= L10_Inheritance.crc2.canvas.height;
        }
        draw() {
            let nParticles = 300;
            let radiusParticle = 5;
            let particle = new Path2D();
            let gradient = L10_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA 100%, 0, 0, 0,5");
            gradient.addColorStop(1, "HSLA 100%, 0, 0, 1");
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(_position.x, _position.y);
            L10_Inheritance.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_Inheritance.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L10_Inheritance.crc2.translate(x, y);
                L10_Inheritance.crc2.fill(particle);
                L10_Inheritance.crc2.restore();
            }
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Drop = Drop;
    class Cell {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            let radius = 50;
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(_position.x, _position.y),
                L10_Inheritance.crc2.fillStyle = "white";
            L10_Inheritance.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Cell = Cell;
    class Killercell {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance.Vector(0, 0);
            this.velocity = new L10_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(_position.x, _position.y),
                L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(230, 60);
            L10_Inheritance.crc2.lineTo(230, 100);
            L10_Inheritance.crc2.lineTo(190, 60);
            L10_Inheritance.crc2.fillStyle = "grey";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Killercell = Killercell;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=L10_Elements.js.map