class Gishatich extends KendaniEak {
sharjvel() {
        this.yntrelVandak();
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
        if (this.energy == 6) {
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 3;
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