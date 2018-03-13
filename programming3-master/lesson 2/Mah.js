class Mah extends KendaniEak {

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
        if (this.energy == 10) {
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
        else if (matrix[this.y][this.x] = 3) {
            this.utel2();
        }
        else if (matrix[this.y][this.x] = 2) {
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
        else if (matrix[this.y][this.x] = 2) {
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
        else {
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