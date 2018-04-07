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
       if (exanak == ("garun")) {
            if(this.energy == 7){
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 3;
          }
        }
        if (exanak == ("amar")) {
            if(this.energy == 8){
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 3;
          }
        }
        if (exanak == ("ashun")) {
            if(this.energy == 8){
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 3;
          }
        }
        if (exanak == ("dsmer")) {
            if(this.energy == 9){
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 3;
          }
        }
    }

    utel1() {
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
            this.utel();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xotaker = random(this.yntrelVandak(1));
        if (xotaker) {
            matrix[this.y][this.x] = 0;
            this.x = xotaker[0];
            this.y = xotaker[1];
            matrix[this.y][this.x] = 3;
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
            for (var v in gishatichArr) {
                if (this.x == gishatichArr[v].x && this.y == gishatichArr[v].y) {
                    gishatichArr.splice(v, 1)
                    matrix[this.y][this.x] = 0;

                }
            }
        }
    }
}