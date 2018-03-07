class Xot {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var j in this.directions) {
            var x = this.directions[j][0];
            var y = this.directions[j][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[j]);
                }
            }
        }
        return found;
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 3 && norVandak) {
            var norXot = new Xot(norVandak[0], norVandak[1]);
            xotArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 1;
        }
    }

}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var j in this.directions) {
            var x = this.directions[j][0];
            var y = this.directions[j][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[j]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 6) {
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 3;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var v in xotakerArr) {
                if (this.x == xotakerArr[v].x && this.y == xotakerArr[v].y) {
                    xotakerArr.splice(v, 1)
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var j in this.directions) {
            var x = this.directions[j][0];
            var y = this.directions[j][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[j]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 8) {
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 4;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xotaker = random(this.yntrelVandak(2));
        if (xotaker) {
            matrix[this.y][this.x] = 0;
            this.x = xotaker[0];
            this.y = xotaker[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var v in gishatichArr) {
                if (this.x == gishatichArr[v].x && this.y == gishatichArr[v].y) {
                    gishatichArr.splice(v, 1)
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
}

class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var j in this.directions) {
            var x = this.directions[j][0];
            var y = this.directions[j][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[j]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 10) {
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 4;
        }
    }
    utel2() {
        this.stanalNorKordinatner();
        var gishatich = random(this.yntrelVandak(3));
        if (gishatich) {
            matrix[this.y][this.x] = 0;
            this.x = gishatich[0];
            this.y = gishatich[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                   gishatichArr.splice(i, 1)
                }
            }
        }
       else if(matrix[this.y][this.x] = 2){
           this.utel1();
       }
       else{
           this.utel();
       }
    }
    utel1() {
        this.stanalNorKordinatner();
        var xotaker = random(this.yntrelVandak(2));
        if (xotaker) {
            matrix[this.y][this.x] = 0;
            this.x = xotaker[0];
            this.y = xotaker[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var v in xotakerArr) {
                if (this.x == xotakerArr[v].x && this.y == xotakerArr[v].y) {
                   xotakerArr.splice(v, 1)
                }
            }
        }
       else{
           this.utel();
       }
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var w in xotArr) {
                if (this.x == xotArr[w].x && this.y == xotArr[w].y) {
                    xotArr.splice(w, 1)
                }
            }
        }
       else{
           this.sharjvel();
       }
    }

    mahanal() {
        if (this.energy <= 0) {
            for (var r in amenakerArr) {
                if (this.x == amenakerArr[r].x && this.y == amenakerArr[r].y) {
                    amenakerArr.splice(r, 1)
                    matrix[this.y][this.x] = 0;

                }
            }
        }
    }
}
class Mah {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var j in this.directions) {
            var x = this.directions[j][0];
            var y = this.directions[j][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[j]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 12) {
            mahArr.push(new Mah(this.x, this.y));
            this.energy = 4;
        }
    }
utel3() {
        this.stanalNorKordinatner();
        var amenaker = random(this.yntrelVandak(4));
        if (amenaker) {
            matrix[this.y][this.x] = 0;
            this.x = amenaker[0];
            this.y = amenaker[1];
            matrix[this.y][this.x] = 5;
            this.energy++;
            this.bazmanal();
            for (var i in amenakerArr) {
                if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                   amenakerArr.splice(i, 1)
                }
            }
        }
       else if(matrix[this.y][this.x] = 3) {
           this.utel2();
       }
       else if(matrix[this.y][this.x] = 2) {
           this.utel1();
       }
       else {
           this.utel();
       }
    }

    utel2() {
        this.stanalNorKordinatner();
        var gishatich = random(this.yntrelVandak(3));
        if (gishatich) {
            matrix[this.y][this.x] = 0;
            this.x = gishatich[0];
            this.y = gishatich[1];
            matrix[this.y][this.x] = 5;
            this.energy++;
            this.bazmanal();
            for (var v in gishatichArr) {
                if (this.x == gishatichArr[v].x && this.y == gishatichArr[v].y) {
                   gishatichArr.splice(v, 1)
                }
            }
        }
       else if(matrix[this.y][this.x] = 2) {
           this.utel1();
       }
       else {
           this.utel();
       }
    }
    utel1() {
        this.stanalNorKordinatner();
        var xotaker = random(this.yntrelVandak(2));
        if (xotaker) {
            matrix[this.y][this.x] = 0;
            this.x = xotaker[0];
            this.y = xotaker[1];
            matrix[this.y][this.x] = 5;
            this.energy++;
            this.bazmanal();
            for (var w in xotakerArr) {
                if (this.x == xotakerArr[w].x && this.y == xotakerArr[w].y) {
                   xotakerArr.splice(w, 1)
                }
            }
        }
       else {
           this.utel();
       }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 5;
            this.energy++;
            this.bazmanal();
            for (var r in xotArr) {
                if (this.x == xotArr[r].x && this.y == xotArr[r].y) {
                    xotArr.splice(r, 1)
                }
            }
        }
       else{
           this.sharjvel();
       }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var o in mahArr) {
                if (this.x == mahArr[o].x && this.y == mahArr[o].y) {
                    mahArr.splice(o, 1)
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}